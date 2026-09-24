"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Globe,
  Mail,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";

interface FormData {
  fullName: string;
  email: string;
  organization: string;
  productInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

function DemoFormInner() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    organization: "",
    productInterest: "General Enquiry",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-select the product from ?product= (adjusting state during render, not in an effect)
  const [appliedParam, setAppliedParam] = useState<string | null>(null);
  if (productParam && productParam !== appliedParam) {
    setAppliedParam(productParam);
    const lower = productParam.toLowerCase();
    if (lower.includes("transport")) {
      setFormData((prev) => ({ ...prev, productInterest: "School Transport Management System" }));
    } else if (lower.includes("school") || lower.includes("management")) {
      setFormData((prev) => ({ ...prev, productInterest: "Small School Management Module" }));
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter a valid email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a little about your requirement.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Safe frontend client-side interaction
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      productInterest: "General Enquiry",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-gradient-to-br from-white via-[#F8FCFF] to-[#EDF6FF] p-8 sm:p-10 text-center shadow-xs">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue mb-5 border border-brand-blue/30 shadow-xs">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
          Thank You
        </h3>

        <p className="mt-3 text-base text-slate-700 max-w-md mx-auto leading-relaxed">
          Thank you. Your enquiry has been received.
        </p>

        <p className="mt-2 text-xs text-slate-500 max-w-sm mx-auto">
          We look forward to discussing your operational requirements and showing you our products.
        </p>

        <div className="mt-8">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-brand-navy shadow-xs transition-colors hover:border-brand-blue hover:text-brand-blue cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Send Another Message</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
      {/* Form Header */}
      <div className="border-b border-slate-100 pb-5 mb-6">
        <span className="text-[0.72rem] font-bold uppercase tracking-wider text-brand-blue block">
          Direct Product Consultation
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mt-1">
          Request a Demo
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
          Share a few details and we&apos;ll understand how to direct your enquiry.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Full Name <span className="text-sky-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            placeholder="e.g. Rajesh Sharma"
            className={`w-full rounded-xl border px-3.5 py-3 text-sm text-brand-navy placeholder:text-slate-400 transition-colors focus:outline-hidden focus:ring-2 ${
              errors.fullName
                ? "border-sky-300 bg-sky-50/40 focus:border-sky-400 focus:ring-sky-200"
                : "border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-brand-blue focus:bg-white focus:ring-brand-blue/20"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-sky-500 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Email Address <span className="text-sky-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="e.g. rajesh@example.com"
            className={`w-full rounded-xl border px-3.5 py-3 text-sm text-brand-navy placeholder:text-slate-400 transition-colors focus:outline-hidden focus:ring-2 ${
              errors.email
                ? "border-sky-300 bg-sky-50/40 focus:border-sky-400 focus:ring-sky-200"
                : "border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-brand-blue focus:bg-white focus:ring-brand-blue/20"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-sky-500 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company / Organization (Optional) */}
        <div>
          <label
            htmlFor="organization"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Company / Organization{" "}
            <span className="text-xs text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
            placeholder="e.g. Oakridge International School"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-3 text-sm text-brand-navy placeholder:text-slate-400 transition-colors hover:border-slate-300 focus:border-brand-blue focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>

        {/* Product Interest (Select) */}
        <div>
          <label
            htmlFor="productInterest"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Product Interest
          </label>
          <select
            id="productInterest"
            value={formData.productInterest}
            onChange={(e) =>
              setFormData({ ...formData, productInterest: e.target.value })
            }
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-3 text-sm text-brand-navy transition-colors hover:border-slate-300 focus:border-brand-blue focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20 cursor-pointer"
          >
            <option value="School Transport Management System">
              School Transport Management System
            </option>
            <option value="Small School Management Module">
              Small School Management Module
            </option>
            <option value="General Enquiry">
              General Enquiry
            </option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Message <span className="text-sky-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Tell us about your organization's operational challenges or requirements..."
            className={`w-full rounded-xl border px-3.5 py-3 text-sm text-brand-navy placeholder:text-slate-400 transition-colors focus:outline-hidden focus:ring-2 resize-none ${
              errors.message
                ? "border-sky-300 bg-sky-50/40 focus:border-sky-400 focus:ring-sky-200"
                : "border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-brand-blue focus:bg-white focus:ring-brand-blue/20"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-sky-500 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-blue hover:shadow-md disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Request a Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>

        <p className="text-[0.68rem] text-slate-400 text-center pt-1">
          Direct product enquiry · Confidential communication
        </p>
      </form>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24 border-b border-slate-100 select-none">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: Contact Details & Reassurance (5 cols on lg) */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
                  Direct Channel
                </p>
              </div>

              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[2.65rem] font-bold tracking-tight text-brand-navy leading-[1.14]">
                Start a Conversation.
              </h2>

              <p className="mt-4 text-base sm:text-lg leading-[1.7] text-slate-700 font-normal">
                Tell us what you&apos;re looking for and we&apos;ll help you
                understand which Maaptrix product may be relevant to your needs.
              </p>
            </Reveal>

            {/* Verified Contact Details Cards */}
            <Reveal delay={0.1}>
              <div className="space-y-3.5 pt-2">
                {/* Email */}
                <a
                  href="mailto:hello@maaptrix.com"
                  className="group flex items-center justify-between p-4 rounded-2xl border border-[#CCE5FF] bg-gradient-to-r from-[#F8FCFF] to-white transition-all duration-300 hover:border-brand-blue hover:shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono font-bold text-slate-400 uppercase">
                        Email Address
                      </span>
                      <span className="block text-sm sm:text-base font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                        hello@maaptrix.com
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-brand-blue transition-colors" />
                </a>

                {/* Website */}
                <a
                  href="https://maaptrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl border border-[#CCE5FF] bg-gradient-to-r from-[#F8FCFF] to-white transition-all duration-300 hover:border-brand-blue hover:shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono font-bold text-slate-400 uppercase">
                        Official Website
                      </span>
                      <span className="block text-sm sm:text-base font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                        maaptrix.com
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-brand-blue transition-colors" />
                </a>
              </div>
            </Reveal>

            {/* Operational Reassurance Card */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-[#CCE5FF] bg-[#F8FCFF] p-5 sm:p-6 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-blue mb-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Built Around Real Operational Needs.</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Maaptrix develops focused digital products designed around
                  everyday operational problems, user workflows and continuous
                  product improvement.
                </p>
              </div>
            </Reveal>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Request a Demo Form (7 cols on lg) */}
          {/* ================================================================= */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Suspense
                fallback={
                  <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-xs text-slate-400">
                    Loading enquiry form...
                  </div>
                }
              >
                <DemoFormInner />
              </Suspense>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
