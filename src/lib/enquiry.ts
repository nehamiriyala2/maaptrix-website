/*
 * Contact-form enquiry rules used by the browser form. The server-side copy of
 * these rules lives in public/api/contact.php; keep the two in step. No framework
 * imports: this file is also run directly by the Node test runner
 * (src/lib/enquiry.test.ts).
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
