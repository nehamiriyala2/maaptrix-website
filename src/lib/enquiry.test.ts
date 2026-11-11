// Run with `npm test` (Node's built-in test runner; no extra dependencies).
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildEnquiryMailto, validateEnquiry, type EnquiryFields } from "./enquiry.ts";

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

test("mailto fallback addresses the business and carries every field", () => {
  const href = buildEnquiryMailto(valid, "maaptrix@gmail.com");
  assert.ok(href.startsWith("mailto:maaptrix@gmail.com?subject="));
  const url = new URL(href);
  assert.equal(url.searchParams.get("subject"), "Demo request: Green Valley School");
  const body = url.searchParams.get("body") ?? "";
  for (const v of [valid.message, valid.fullName, valid.email, valid.organization, valid.phone]) assert.ok(body.includes(v), v);
  assert.ok(!new URL(buildEnquiryMailto({ ...valid, phone: "" }, "x@y.z")).searchParams.get("body")!.includes("Phone:"));
});
