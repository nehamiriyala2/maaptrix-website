// Run with `npm test` (Node's built-in test runner; no extra dependencies).
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  MIN_FILL_MS,
  buildEnquiryMailto,
  createDuplicateGuard,
  createRateLimiter,
  formatEnquiryEmail,
  looksLikeSpam,
  parseEnquiryFields,
  validateEnquiry,
  type EnquiryFields,
} from "./enquiry.ts";

const valid: EnquiryFields = {
  fullName: "Asha Rao",
  email: "asha@school.example",
  organization: "Green Valley School",
  phone: "+91 98765 43210",
  enquiryType: "Demo request",
  message: "We would like a demo of the transport product.",
};

test("accepts a valid enquiry, with or without a phone number", () => {
  assert.deepEqual(validateEnquiry(valid), {});
  assert.deepEqual(validateEnquiry({ ...valid, phone: "" }), {});
});

test("rejects missing required fields", () => {
  const errors = validateEnquiry({ ...valid, fullName: " ", email: "", organization: "", message: "short" });
  assert.deepEqual(Object.keys(errors).sort(), ["email", "fullName", "message", "organization"]);
});

test("rejects malformed email, phone and enquiry type", () => {
  const errors = validateEnquiry({ ...valid, email: "not-an-email", phone: "call me", enquiryType: "Spam" as never });
  assert.deepEqual(Object.keys(errors).sort(), ["email", "enquiryType", "phone"]);
});

test("rejects header injection via line breaks", () => {
  assert.ok(validateEnquiry({ ...valid, email: "a@b.co\r\nBcc: x@y.z" }).email);
  assert.ok(validateEnquiry({ ...valid, fullName: "Asha\nRao" }).fullName);
});

test("rejects overly long messages", () => {
  assert.ok(validateEnquiry({ ...valid, message: "x".repeat(5001) }).message);
});

test("parses untrusted JSON without throwing", () => {
  const fields = parseEnquiryFields({ fullName: 42, email: ["a"], message: "hello there" });
  assert.equal(fields.fullName, "");
  assert.equal(fields.email, "");
  assert.equal(fields.message, "hello there");
  assert.equal(parseEnquiryFields(null).fullName, "");
});

test("flags honeypot, missing timestamp and too-fast submissions as spam", () => {
  const now = 1_000_000;
  assert.equal(looksLikeSpam("", now - MIN_FILL_MS - 1, now), false);
  assert.equal(looksLikeSpam("http://spam", now - 60_000, now), true);
  assert.equal(looksLikeSpam("", undefined, now), true);
  assert.equal(looksLikeSpam("", now - 500, now), true);
});

test("rate limiter allows max requests per window, per key", () => {
  const allow = createRateLimiter(2, 1000);
  assert.equal(allow("ip1", 0), true);
  assert.equal(allow("ip1", 10), true);
  assert.equal(allow("ip1", 20), false);
  assert.equal(allow("ip2", 20), true);
  assert.equal(allow("ip1", 1001), true);
});

test("duplicate guard catches a resubmission of the same message", () => {
  const guard = createDuplicateGuard(1000);
  assert.equal(guard.isDuplicate(valid, 0), false);
  guard.remember(valid, 0);
  assert.equal(guard.isDuplicate({ ...valid, email: " ASHA@school.example ", message: valid.message + "  " }, 500), true);
  assert.equal(guard.isDuplicate({ ...valid, message: "A different question entirely." }, 500), false);
  assert.equal(guard.isDuplicate(valid, 1500), false);
});

test("notification email includes every field and escapes HTML", () => {
  const mail = formatEnquiryEmail({
    ...valid,
    message: "<script>alert(1)</script> please call",
    pageUrl: "https://maaptrix.com/contact",
    submittedAt: new Date("2026-10-28T06:30:00Z"),
  });
  assert.match(mail.subject, /demo request: Green Valley School \(Asha Rao\)/);
  for (const v of ["Asha Rao", "asha@school.example", "Green Valley School", "+91 98765 43210", "https://maaptrix.com/contact", "IST"]) {
    assert.ok(mail.text.includes(v), `text missing ${v}`);
    assert.ok(mail.html.includes(v), `html missing ${v}`);
  }
  assert.ok(!mail.html.includes("<script>"));
  assert.ok(mail.html.includes("&lt;script&gt;"));
});

test("mailto fallback addresses the business and carries every field", () => {
  const href = buildEnquiryMailto(valid, "maaptrix@gmail.com");
  assert.ok(href.startsWith("mailto:maaptrix@gmail.com?subject="));
  const url = new URL(href);
  assert.equal(url.searchParams.get("subject"), "Demo request: Green Valley School");
  const body = url.searchParams.get("body") ?? "";
  for (const v of [valid.message, valid.fullName, valid.email, valid.organization, valid.phone]) assert.ok(body.includes(v), v);
  assert.ok(!new URL(buildEnquiryMailto({ ...valid, phone: "" }, "x@y.z")).searchParams.get("body")!.includes("Phone:"));
});
