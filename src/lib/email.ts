import "server-only";

/*
 * Transactional email through Resend's REST API (https://resend.com/docs/api-reference/emails/send-email).
 * Called with fetch, so no SDK dependency. Configuration lives in server-side
 * environment variables only; see .env.example.
 */

/** Business inbox that receives website enquiries. */
export const BUSINESS_INBOX = "maaptrix@gmail.com";

export interface OutgoingEmail {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

export type SendResult = { ok: true; id?: string } | { ok: false; reason: "not_configured" | "provider_error"; detail?: string };

export function emailConfig() {
  return {
    apiKey: process.env.EMAIL_API_KEY ?? "",
    from: process.env.EMAIL_FROM ?? "",
    to: process.env.EMAIL_TO || BUSINESS_INBOX,
  };
}

export async function sendEmail(mail: OutgoingEmail): Promise<SendResult> {
  const { apiKey, from } = emailConfig();
  if (!apiKey || !from) return { ok: false, reason: "not_configured" };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [mail.to],
        reply_to: mail.replyTo,
        subject: mail.subject,
        text: mail.text,
        html: mail.html,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return { ok: false, reason: "provider_error", detail: `${res.status} ${await res.text()}` };
    const data = (await res.json().catch(() => ({}))) as { id?: string };
    return { ok: true, id: data.id };
  } catch (err) {
    return { ok: false, reason: "provider_error", detail: err instanceof Error ? err.message : String(err) };
  }
}
