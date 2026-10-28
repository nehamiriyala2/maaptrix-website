"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Phone, RefreshCw } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { LIMITS, buildEnquiryMailto, validateEnquiry, type EnquiryErrors, type EnquiryFields } from "@/lib/enquiry";
import Reveal from "@/components/Reveal";

/** The visible fields. Enquiry type is not shown: "Request a Demo" links add ?type=demo. */
type FormData = Omit<EnquiryFields, "enquiryType">;
type FormErrors = EnquiryErrors;

const EMPTY: FormData = {
  fullName: "",
  email: "",
  organization: "",
  phone: "",
  message: "",
};

const enquiryTypeFromUrl = () =>
  new URLSearchParams(window.location.search).get("type") === "demo" ? "Demo request" : "General enquiry";

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
  const [sent, setSent] = useState(false);
  const [failure, setFailure] = useState<string | null>(null);
  // Pre-filled email for the visitor's own email app, used when the server can't send.
  const [mailto, setMailto] = useState<string | null>(null);
  const [mailtoOpened, setMailtoOpened] = useState(false);
  const honeypot = useRef<HTMLInputElement>(null);
  // When the visitor first touched the form: drives form_start and the server's too-fast bot check.
  const startedAt = useRef<number | null>(null);

  const onFirstInput = () => {
    if (startedAt.current !== null) return;
    startedAt.current = Date.now();
    trackEvent("form_start", { form_name: "contact" });
  };

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const a11y = (key: keyof FormData) => ({
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (submitting) return;
    const enquiry: EnquiryFields = { ...data, enquiryType: enquiryTypeFromUrl() };
    const found = validateEnquiry(enquiry);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    setSubmitting(true);
    setFailure(null);
    setMailto(null);
    trackEvent("form_submit", { form_name: "contact", enquiry_type: enquiry.enquiryType });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...enquiry,
          pagePath: window.location.pathname,
          startedAt: startedAt.current,
          website: honeypot.current?.value ?? "",
        }),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string; errors?: FormErrors; fallback?: string };
      if (body.fallback === "mailto") {
        const href = buildEnquiryMailto(enquiry, CONTACT_EMAIL);
        setMailto(href);
        if (res.status === 503) {
          // Online sending isn't configured: behave like the original form and hand off to the email app.
          trackEvent("contact_mailto_fallback", { form_name: "contact", enquiry_type: enquiry.enquiryType });
          window.location.href = href;
          setMailtoOpened(true);
          return;
        }
      }
      if (!res.ok) {
        if (body.errors) setErrors(body.errors);
        setFailure(body.error ?? "We couldn't send your message right now.");
        return;
      }
      trackEvent("generate_lead", { form_name: "contact", enquiry_type: enquiry.enquiryType });
      setSent(true);
    } catch {
      setFailure("We couldn't reach our server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (mailtoOpened && mailto) {
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
          <a href={mailto} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
            Try again
          </a>{" "}
          or call{" "}
          <a href={CONTACT_PHONE_HREF} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
            {CONTACT_PHONE}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setData(EMPTY);
            setMailto(null);
            setMailtoOpened(false);
            startedAt.current = null;
          }}
          className="mt-7 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-[14px] font-semibold text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue"
        >
          <RefreshCw className="h-4 w-4" aria-hidden />
          Start a new enquiry
        </button>
      </div>
    );
  }

  if (sent) {
    return (
      <div className="rounded-[24px] border border-[#CFE4FF] bg-white p-8 text-center sm:p-10" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
          <CheckCircle2 className="h-7 w-7" aria-hidden />
        </span>
        <h3 className="mt-5 font-display text-[24px] font-bold text-brand-navy">Thank you, your message has been sent</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
          The Maaptrix team has received your enquiry and will reply to {data.email.trim()} by email.
        </p>
        <button
          type="button"
          onClick={() => {
            setData(EMPTY);
            setSent(false);
            startedAt.current = null;
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
      onInput={onFirstInput}
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

      {/* Honeypot: hidden from people, often filled in by spam bots. */}
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input ref={honeypot} id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            maxLength={LIMITS.fullName}
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
            maxLength={LIMITS.email}
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
            maxLength={LIMITS.organization}
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
            maxLength={LIMITS.phone}
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
              maxLength={LIMITS.message}
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Tell us what you're looking for, or which product you'd like to discuss."
              className={`${inputBase} ${errors.message ? inputErr : inputOk} resize-y`}
              {...a11y("message")}
            />
          </Field>
        </div>
      </div>

      {failure && (
        <div role="alert" className="mt-6 rounded-xl border border-brand-blue/40 bg-brand-blue-light/50 px-4 py-3 text-[14px] text-brand-navy">
          <p className="font-semibold">{failure}</p>
          {mailto && (
            <p className="mt-1 text-slate-600">
              <a href={mailto} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
                Send it from your email app instead
              </a>{" "}
              (your message is already filled in).
            </p>
          )}
          <p className="mt-1 text-slate-600">
            Please try again, or reach us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or{" "}
            <a href={CONTACT_PHONE_HREF} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
              {CONTACT_PHONE}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="group mt-7 inline-flex h-[50px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 text-[15px] font-bold text-white shadow-[0_12px_26px_-12px_rgba(20,125,255,0.8)] transition-colors hover:bg-brand-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Send Message"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </button>
    </form>
  );
}

const DETAILS = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: CONTACT_PHONE_HREF },
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
