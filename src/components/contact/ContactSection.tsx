"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Globe, Mail, RefreshCw } from "lucide-react";
import Reveal from "@/components/Reveal";

const CONTACT_EMAIL = "hello@maaptrix.com";

/** Not a visible field: "Request a Demo" switches it so the email subject says so. */
type EnquiryType = "General enquiry" | "Demo request";

interface FormData {
  fullName: string;
  email: string;
  organization: string;
  phone: string;
  enquiryType: EnquiryType;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMPTY: FormData = {
  fullName: "",
  email: "",
  organization: "",
  phone: "",
  enquiryType: "General enquiry",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!d.email.trim()) e.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(d.email.trim())) e.email = "That email doesn't look right. Please check it.";
  if (!d.organization.trim()) e.organization = "Please enter your company or organization.";
  if (d.phone.trim() && !PHONE_RE.test(d.phone.trim())) e.phone = "Please enter a valid phone number, or leave it blank.";
  if (d.message.trim().length < 10) e.message = "Please add a short message (at least 10 characters).";
  return e;
}

/** Builds a pre-filled email to Maaptrix; there is no server-side form endpoint. */
function buildMailto(d: FormData) {
  const subject = `${d.enquiryType} — ${d.organization.trim()}`;
  const body = [
    d.message.trim(),
    "",
    "—",
    `Name: ${d.fullName.trim()}`,
    `Email: ${d.email.trim()}`,
    `Organization: ${d.organization.trim()}`,
    d.phone.trim() ? `Phone: ${d.phone.trim()}` : "",
  ]
    .filter((l, i, a) => l !== "" || i < a.length - 1)
    .join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-brand-navy placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/25";
const inputOk = "border-[#BCD9F7] hover:border-[#8DC1F4] focus:border-brand-blue";
const inputErr = "border-brand-blue bg-brand-blue-light/40 focus:border-brand-blue";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[14px] font-semibold text-brand-navy">
        {label}{" "}
        {required ? (
          <span className="text-brand-blue" aria-hidden>
            *
          </span>
        ) : (
          <span className="font-normal text-slate-400">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[13px] font-medium text-brand-blue-dark">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactForm({
  formRef,
}: {
  formRef: React.RefObject<HTMLFormElement | null>;
}) {
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState<string | null>(null);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const a11y = (key: keyof FormData) => ({
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (submitting) return;
    const found = validate(data);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    setSubmitting(true);
    const href = buildMailto(data);
    window.location.href = href;
    setSent(href);
    setSubmitting(false);
  };

  if (sent) {
    return (
      <div className="rounded-[24px] border border-[#CFE4FF] bg-white p-8 text-center sm:p-10" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
          <CheckCircle2 className="h-7 w-7" aria-hidden />
        </span>
        <h3 className="mt-5 font-display text-[24px] font-bold text-brand-navy">Your message is ready to send</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
          We&apos;ve opened your email app with your enquiry addressed to {CONTACT_EMAIL}. Press send there and the
          Maaptrix team will reply by email.
        </p>
        <p className="mx-auto mt-3 max-w-md text-[14px] text-slate-500">
          Email app didn&apos;t open?{" "}
          <a href={sent} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
            Try again
          </a>{" "}
          or write to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setData(EMPTY);
            setSent(null);
          }}
          className="mt-7 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-[14px] font-semibold text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue"
        >
          <RefreshCw className="h-4 w-4" aria-hidden />
          Start a new enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="form-heading"
      className="rounded-[22px] border border-[#D5E6F7] bg-white p-6 shadow-[0_40px_80px_-36px_rgba(7,40,100,0.5)] sm:p-8 lg:p-10"
    >
      <h2 id="form-heading" className="font-display text-[24px] font-bold tracking-tight text-brand-navy sm:text-[30px]">
        Send us a message
      </h2>
      <p className="mt-1 text-[14px] text-slate-500">
        Fields marked <span className="text-brand-blue">*</span> are required.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            value={data.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            placeholder="Your name"
            className={`${inputBase} ${errors.fullName ? inputErr : inputOk}`}
            {...a11y("fullName")}
          />
        </Field>
        <Field id="email" label="Work email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@organization.com"
            className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
            {...a11y("email")}
          />
        </Field>
        <Field id="organization" label="Company / organization" required error={errors.organization}>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            value={data.organization}
            onChange={(e) => set("organization", e.target.value)}
            placeholder="School or company name"
            className={`${inputBase} ${errors.organization ? inputErr : inputOk}`}
            {...a11y("organization")}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className={`${inputBase} ${errors.phone ? inputErr : inputOk}`}
            {...a11y("phone")}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field id="message" label="Message" required error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Tell us what you're looking for, or which product you'd like to discuss."
              className={`${inputBase} ${errors.message ? inputErr : inputOk} resize-y`}
              {...a11y("message")}
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group mt-7 inline-flex h-[50px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 text-[15px] font-bold text-white shadow-[0_12px_26px_-12px_rgba(20,125,255,0.8)] transition-colors hover:bg-brand-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:cursor-not-allowed disabled:opacity-70"
      >
        Send Message
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </button>
      <p className="mt-3 text-center text-[13px] text-slate-500">
        Sending opens your email app with this message addressed to {CONTACT_EMAIL}.
      </p>
    </form>
  );
}

const DETAILS = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Globe, label: "Website", value: "maaptrix.com", href: "https://maaptrix.com" },
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section className="surface-glow-left pb-16 pt-12 sm:pb-20 sm:pt-14" aria-label="Contact details and enquiry form">
      <div className="page-container">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:gap-10">
          <Reveal className="space-y-6 lg:order-1 lg:pt-2">
            <div>
              <h2 className="font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-brand-navy">Let&apos;s Connect</h2>
              <span className="mt-2 block h-[3px] w-14 rounded-full bg-brand-blue" aria-hidden />
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                Reach us directly, or use the form and we&apos;ll reply by email.
              </p>
            </div>

            <dl className="space-y-4">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-5 rounded-[16px] border border-[#D5E6F7] bg-white px-5 py-4 shadow-[0_12px_28px_-22px_rgba(16,42,86,0.4)] transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-blue"
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                        <Icon className="h-7 w-7" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-[12px] font-bold uppercase tracking-[0.1em] text-slate-400">{label}</span>
                        <span className="block text-[16px] font-semibold text-brand-navy">{value}</span>
                      </span>
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="relative z-10 lg:order-2 lg:-mt-[196px]">
            <ContactForm formRef={formRef} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
