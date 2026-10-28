import { SITE_URL } from "@/lib/seo";
import { sendEmail, emailConfig } from "@/lib/email";
import {
  createDuplicateGuard,
  createRateLimiter,
  formatEnquiryEmail,
  looksLikeSpam,
  parseEnquiryFields,
  validateEnquiry,
} from "@/lib/enquiry";

const MAX_BODY_BYTES = 20_000;
const allowRequest = createRateLimiter(5, 10 * 60_000); // 5 enquiries per IP per 10 minutes
const duplicates = createDuplicateGuard(30 * 60_000);

const json = (status: number, body: Record<string, unknown>) => Response.json(body, { status });

function clientIp(req: Request) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

/** Path of the page the form was sent from, as an absolute production URL. Never trusts other hosts. */
function sourcePage(raw: unknown) {
  const path = typeof raw === "string" && raw.startsWith("/") && !raw.startsWith("//") ? raw.slice(0, 300) : "/contact";
  return `${SITE_URL}${path}`;
}

/** Browsers always send Origin on a cross-site POST; reject any that isn't this site. */
function fromThisSite(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    const host = new URL(origin).host;
    return host === new URL(req.url).host || host === req.headers.get("host") || origin === SITE_URL;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!fromThisSite(req)) return json(403, { error: "Forbidden." });

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return json(413, { error: "Your message is too long." });
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { error: "Invalid request." });
  }

  if (!allowRequest(clientIp(req))) {
    return json(429, { error: "Too many messages from your connection. Please try again in a few minutes." });
  }

  // Bots get a normal-looking success so they don't learn to adapt; nothing is sent.
  if (looksLikeSpam(body.website, body.startedAt)) return json(200, { ok: true });

  const fields = parseEnquiryFields(body);
  const errors = validateEnquiry(fields);
  if (Object.keys(errors).length) return json(422, { error: "Please correct the highlighted fields.", errors });

  if (duplicates.isDuplicate(fields)) return json(200, { ok: true, duplicate: true });

  const enquiry = { ...fields, pageUrl: sourcePage(body.pagePath), submittedAt: new Date() };
  const result = await sendEmail({
    to: emailConfig().to,
    replyTo: fields.email.trim(),
    ...formatEnquiryEmail(enquiry),
  });

  if (!result.ok && result.reason === "not_configured") {
    // Email isn't set up on this deployment: the browser falls back to the visitor's
    // email app (the pre-Resend behaviour), so the enquiry itself isn't logged.
    console.warn("[contact] EMAIL_API_KEY / EMAIL_FROM not set; client will use mailto fallback");
    return json(503, { error: "Online sending is not available.", fallback: "mailto" });
  }
  if (!result.ok) {
    // There is no database, so the server log is the only place this enquiry survives.
    // It is logged in full so the team can recover and answer it.
    console.error("[contact] enquiry not delivered", result.reason, result.detail ?? "", JSON.stringify(enquiry));
    return json(502, { error: "We couldn't send your message right now.", fallback: "mailto" });
  }

  duplicates.remember(fields);
  return json(200, { ok: true });
}
