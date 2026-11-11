<?php
/*
 * Maaptrix contact form endpoint for Hostinger shared hosting (Apache + PHP).
 *
 * The static site's contact form (src/components/contact/ContactSection.tsx)
 * POSTs JSON here and reads the JSON reply. The validation rules match
 * src/lib/enquiry.ts so the browser and this script agree on what is valid.
 * Mail is sent with PHP mail(), which Hostinger shared hosting provides.
 */

// ---- Settings ---------------------------------------------------------------

// Inbox that receives enquiries.
const TO_EMAIL = 'maaptrix@gmail.com';
// Sender address. Use a mailbox on your own domain created in hPanel > Emails;
// a made-up or @gmail.com sender is likely to be rejected or marked as spam.
const FROM_EMAIL = 'website@maaptrix.com';
const FROM_NAME = 'Maaptrix Website';
const SITE_URL = 'https://maaptrix.com';

const MAX_BODY_BYTES = 20000;
const RATE_MAX = 5;          // enquiries per IP address...
const RATE_WINDOW = 600;     // ...per 10 minutes
const DUPLICATE_WINDOW = 1800; // same email + message ignored for 30 minutes
const MIN_FILL_MS = 3000;    // forms completed faster than this are treated as bots

const LIMITS = ['fullName' => 100, 'email' => 254, 'organization' => 150, 'phone' => 20, 'message' => 5000];
const ENQUIRY_TYPES = ['General enquiry', 'Demo request'];

// ---- Helpers ----------------------------------------------------------------

// Never print PHP warnings into the reply: the browser expects pure JSON.
// They still go to the PHP error log.
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

function str_len(string $s): int
{
    return function_exists('mb_strlen') ? mb_strlen($s, 'UTF-8') : strlen($s);
}

/** Browsers always send Origin on a cross-site POST; reject any that isn't this site. */
function from_this_site(): bool
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin === '') return true;
    $originHost = parse_url($origin, PHP_URL_HOST);
    $host = preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? '');
    return is_string($originHost) && ($originHost === $host || $origin === SITE_URL);
}

/** Folder for rate-limit and duplicate records, kept outside public_html when possible. */
function state_dir(): ?string
{
    foreach ([dirname(__DIR__, 2) . '/.maaptrix-contact', sys_get_temp_dir() . '/maaptrix-contact'] as $dir) {
        if ((is_dir($dir) || @mkdir($dir, 0700, true)) && is_writable($dir)) {
            if (mt_rand(1, 50) === 1) { // occasionally clear out old records
                foreach (glob("$dir/*") ?: [] as $f) {
                    if (filemtime($f) < time() - 2 * DUPLICATE_WINDOW) @unlink($f);
                }
            }
            return $dir;
        }
    }
    return null; // no writable folder: skip rate limiting rather than block enquiries
}

function rate_allowed(?string $dir, string $ip): bool
{
    if ($dir === null) return true;
    $file = "$dir/rate-" . sha1($ip);
    $now = time();
    $state = json_decode((string) @file_get_contents($file), true);
    if (!is_array($state) || $now >= ($state['reset'] ?? 0)) $state = ['count' => 0, 'reset' => $now + RATE_WINDOW];
    $state['count']++;
    @file_put_contents($file, json_encode($state), LOCK_EX);
    return $state['count'] <= RATE_MAX;
}

function duplicate_file(?string $dir, array $f): ?string
{
    if ($dir === null) return null;
    $norm = fn(string $s) => strtolower(preg_replace('/\s+/', ' ', trim($s)));
    return "$dir/sent-" . sha1($norm($f['email']) . "\0" . $norm($f['message']));
}

function validate(array $d): array
{
    $e = [];
    $lineBreak = '/[\r\n]/';
    $name = trim($d['fullName']);
    $email = trim($d['email']);
    $org = trim($d['organization']);
    $phone = trim($d['phone']);
    $message = trim($d['message']);

    if ($name === '') $e['fullName'] = 'Please enter your full name.';
    elseif (str_len($name) > LIMITS['fullName'] || preg_match($lineBreak, $name)) $e['fullName'] = 'Please enter a shorter name.';

    if ($email === '') $e['email'] = 'Please enter your work email.';
    elseif (str_len($email) > LIMITS['email'] || preg_match($lineBreak, $email) || !preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/u', $email))
        $e['email'] = "That email doesn't look right. Please check it.";

    if ($org === '') $e['organization'] = 'Please enter your company or organization.';
    elseif (str_len($org) > LIMITS['organization'] || preg_match($lineBreak, $org)) $e['organization'] = 'Please enter a shorter name.';

    if ($phone !== '' && !preg_match('/^[+()\-\s\d]{7,20}$/', $phone)) $e['phone'] = 'Please enter a valid phone number, or leave it blank.';

    if (str_len($message) < 10) $e['message'] = 'Please add a short message (at least 10 characters).';
    elseif (str_len($message) > LIMITS['message']) $e['message'] = 'Please keep your message under ' . LIMITS['message'] . ' characters.';

    if (!in_array($d['enquiryType'], ENQUIRY_TYPES, true)) $e['enquiryType'] = 'Please choose an enquiry type.';
    return $e;
}

function send_enquiry(array $f, string $pageUrl): bool
{
    $h = fn(string $s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
    $when = (new DateTime('now', new DateTimeZone('Asia/Kolkata')))->format('j M Y, g:i a') . ' IST';
    $rows = [
        'Enquiry type' => $f['enquiryType'],
        'Name' => trim($f['fullName']),
        'Email' => trim($f['email']),
        'Organization' => trim($f['organization']),
        'Phone' => trim($f['phone']) !== '' ? trim($f['phone']) : 'Not provided',
        'Submitted' => $when,
        'Page' => $pageUrl,
    ];
    $message = trim($f['message']);
    $subject = 'New ' . strtolower($f['enquiryType']) . ': ' . trim($f['organization']) . ' (' . trim($f['fullName']) . ')';

    $text = '';
    foreach ($rows as $k => $v) $text .= "$k: $v\n";
    $text .= "\nMessage:\n$message\n\nReply to this email to respond to the sender.\n";

    $html = '<div style="font-family:Arial,sans-serif;font-size:14px;color:#10233f">'
        . '<h2 style="margin:0 0 12px">New website ' . $h(strtolower($f['enquiryType'])) . '</h2>'
        . '<table cellpadding="6" style="border-collapse:collapse">';
    foreach ($rows as $k => $v) $html .= '<tr><td style="color:#64748b;vertical-align:top">' . $h($k) . '</td><td>' . $h($v) . '</td></tr>';
    $html .= '</table><p style="margin:16px 0 4px;color:#64748b">Message</p>'
        . '<p style="margin:0;white-space:pre-wrap">' . $h($message) . '</p>'
        . '<p style="margin:20px 0 0;color:#64748b;font-size:12px">Reply to this email to respond to the sender.</p></div>';

    $boundary = 'b' . bin2hex(random_bytes(12));
    $headers = implode("\r\n", [
        'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
        'Reply-To: ' . trim($f['email']), // validated above: no line breaks
        'MIME-Version: 1.0',
        "Content-Type: multipart/alternative; boundary=\"$boundary\"",
    ]);
    $body = "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($text))
        . "--$boundary\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html))
        . "--$boundary--";

    return mail(TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, '-f' . FROM_EMAIL);
}

// ---- Request handling -------------------------------------------------------

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['error' => 'Method not allowed.']);
}
if (!from_this_site()) respond(403, ['error' => 'Forbidden.']);

$raw = (string) file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES + 1);
if (strlen($raw) > MAX_BODY_BYTES) respond(413, ['error' => 'Your message is too long.']);
$body = json_decode($raw, true);
if (!is_array($body)) respond(400, ['error' => 'Invalid request.']);

$dir = state_dir();
if (!rate_allowed($dir, $_SERVER['REMOTE_ADDR'] ?? 'unknown')) {
    respond(429, ['error' => 'Too many messages from your connection. Please try again in a few minutes.']);
}

// Bots get a normal-looking success so they don't learn to adapt; nothing is sent.
$honeypot = $body['website'] ?? '';
$startedAt = $body['startedAt'] ?? null;
if ((is_string($honeypot) && trim($honeypot) !== '') || !is_numeric($startedAt)
    || microtime(true) * 1000 - (float) $startedAt < MIN_FILL_MS) {
    respond(200, ['ok' => true]);
}

$str = fn(string $k) => is_string($body[$k] ?? null) ? $body[$k] : '';
$fields = [
    'fullName' => $str('fullName'),
    'email' => $str('email'),
    'organization' => $str('organization'),
    'phone' => $str('phone'),
    'enquiryType' => $str('enquiryType'),
    'message' => $str('message'),
];
$errors = validate($fields);
if ($errors) respond(422, ['error' => 'Please correct the highlighted fields.', 'errors' => $errors]);

$dupFile = duplicate_file($dir, $fields);
if ($dupFile !== null && is_file($dupFile) && filemtime($dupFile) > time() - DUPLICATE_WINDOW) {
    respond(200, ['ok' => true, 'duplicate' => true]);
}

$path = $str('pagePath');
$pageUrl = SITE_URL . (str_starts_with($path, '/') && !str_starts_with($path, '//') ? substr($path, 0, 300) : '/contact/');

if (!send_enquiry($fields, $pageUrl)) {
    // No database: the PHP error log (hPanel > Advanced > PHP error logs) is the
    // only record of an undelivered enquiry, so it is logged in full.
    error_log('[contact] mail() failed; enquiry not delivered: ' . json_encode($fields + ['page' => $pageUrl]));
    // The browser then offers the visitor a pre-filled email to send themselves.
    respond(502, ['error' => "We couldn't send your message right now.", 'fallback' => 'mailto']);
}

if ($dupFile !== null) @touch($dupFile);
respond(200, ['ok' => true]);
