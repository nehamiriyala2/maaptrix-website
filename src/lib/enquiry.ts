/*
 * Contact-form enquiry rules shared by the browser form and the /api/contact
 * route, so both validate identically. No framework imports: this file is also
 * run directly by the Node test runner (src/lib/enquiry.test.ts).
 */

export const ENQUIRY_TYPES = ["General enquiry", "Demo request"] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export interface EnquiryFields {
  fullName: string;
  email: string;
  organization: string;
  phone: string;
  enquiryType: EnquiryType;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryFields, string>>;

/** A validated enquiry plus the context the server adds before emailing it. */
export interface Enquiry extends EnquiryFields {
  pageUrl: string;
  submittedAt: Date;
}

export const LIMITS = { fullName: 100, email: 254, organization: 150, phone: 20, message: 5000 } as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;
// Line breaks would let a value inject extra email headers (e.g. via Reply-To).
const LINE_BREAK = /[\r\n]/;

export function validateEnquiry(d: EnquiryFields): EnquiryErrors {
  const e: EnquiryErrors = {};
  const name = d.fullName.trim();
  const email = d.email.trim();
  const org = d.organization.trim();
  const phone = d.phone.trim();
  const message = d.message.trim();

  if (!name) e.fullName = "Please enter your full name.";
  else if (name.length > LIMITS.fullName || LINE_BREAK.test(name)) e.fullName = "Please enter a shorter name.";

  if (!email) e.email = "Please enter your work email.";
  else if (email.length > LIMITS.email || LINE_BREAK.test(email) || !EMAIL_RE.test(email))
    e.email = "That email doesn't look right. Please check it.";

  if (!org) e.organization = "Please enter your company or organization.";
  else if (org.length > LIMITS.organization || LINE_BREAK.test(org)) e.organization = "Please enter a shorter name.";

  if (phone && !PHONE_RE.test(phone)) e.phone = "Please enter a valid phone number, or leave it blank.";

  if (message.length < 10) e.message = "Please add a short message (at least 10 characters).";
  else if (message.length > LIMITS.message) e.message = `Please keep your message under ${LIMITS.message} characters.`;

  if (!ENQUIRY_TYPES.includes(d.enquiryType)) e.enquiryType = "Please choose an enquiry type.";
  return e;
}

/**
 * Reads untrusted JSON into enquiry fields. Non-string values become "" so they
 * fail validation instead of throwing.
 */
export function parseEnquiryFields(body: unknown): EnquiryFields {
  const o = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const str = (k: string) => (typeof o[k] === "string" ? (o[k] as string) : "");
  return {
    fullName: str("fullName"),
    email: str("email"),
    organization: str("organization"),
    phone: str("phone"),
    enquiryType: str("enquiryType") as EnquiryType,
    message: str("message"),
  };
}

/** Submissions faster than this after the form was first touched are treated as bots. */
export const MIN_FILL_MS = 3000;

/** Spam signals: a filled hidden honeypot field, or a form completed implausibly fast. */
export function looksLikeSpam(honeypot: unknown, startedAt: unknown, now = Date.now()): boolean {
  if (typeof honeypot === "string" && honeypot.trim() !== "") return true;
  if (typeof startedAt !== "number" || !Number.isFinite(startedAt)) return true;
  return now - startedAt < MIN_FILL_MS;
}

/**
 * Fixed-window counter per key (client IP). In memory, so it is per server
 * instance: it stops bursts from one client but is not a global limit.
 */
export function createRateLimiter(max: number, windowMs: number) {
  const hits = new Map<string, { count: number; resetAt: number }>();
  return function allow(key: string, now = Date.now()): boolean {
    const entry = hits.get(key);
    if (!entry || now >= entry.resetAt) {
      if (hits.size > 5000) for (const [k, v] of hits) if (now >= v.resetAt) hits.delete(k);
      hits.set(key, { count: 1, resetAt: now + windowMs });
      return true;
    }
    entry.count += 1;
    return entry.count <= max;
  };
}

/**
 * Remembers recently delivered enquiries so a double-click or resubmission of
 * the same message does not email the business twice. Per server instance.
 */
export function createDuplicateGuard(windowMs: number) {
  const seen = new Map<string, number>();
  const keyOf = (d: EnquiryFields) =>
    [d.email, d.message].map((s) => s.trim().toLowerCase().replace(/\s+/g, " ")).join("\u0000");
  return {
    isDuplicate(d: EnquiryFields, now = Date.now()) {
      const at = seen.get(keyOf(d));
      return at !== undefined && now - at < windowMs;
    },
    remember(d: EnquiryFields, now = Date.now()) {
      if (seen.size > 5000) for (const [k, at] of seen) if (now - at >= windowMs) seen.delete(k);
      seen.set(keyOf(d), now);
    },
  };
}

/**
 * A pre-filled email to the business, opened in the visitor's own email app.
 * Fallback only: used when the server can't send the enquiry itself.
 */
export function buildEnquiryMailto(d: EnquiryFields, to: string) {
  const subject = `${d.enquiryType}: ${d.organization.trim()}`;
  const body = [
    d.message.trim(),
    "",
    "--",
    `Name: ${d.fullName.trim()}`,
    `Email: ${d.email.trim()}`,
    `Organization: ${d.organization.trim()}`,
    ...(d.phone.trim() ? [`Phone: ${d.phone.trim()}`] : []),
  ].join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** The internal notification sent to the Maaptrix inbox for one enquiry. */
export function formatEnquiryEmail(q: Enquiry) {
  const when = q.submittedAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });
  const rows: [string, string][] = [
    ["Enquiry type", q.enquiryType],
    ["Name", q.fullName.trim()],
    ["Email", q.email.trim()],
    ["Organization", q.organization.trim()],
    ["Phone", q.phone.trim() || "Not provided"],
    ["Submitted", `${when} IST`],
    ["Page", q.pageUrl],
  ];
  const message = q.message.trim();

  const subject = `New ${q.enquiryType.toLowerCase()}: ${q.organization.trim()} (${q.fullName.trim()})`;
  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", "Message:", message, "", "Reply to this email to respond to the sender."].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#10233f">
<h2 style="margin:0 0 12px">New website ${escapeHtml(q.enquiryType.toLowerCase())}</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#64748b;vertical-align:top">${k}</td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table>
<p style="margin:16px 0 4px;color:#64748b">Message</p>
<p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
<p style="margin:20px 0 0;color:#64748b;font-size:12px">Reply to this email to respond to the sender.</p>
</div>`;
  return { subject, text, html };
}
