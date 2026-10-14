import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import Reveal from "@/components/Reveal";

/**
 * Keeps the placeholder legal pages out of search results until approved policy
 * content is published. Remove from each legal page's metadata at that point.
 */
export const LEGAL_PLACEHOLDER_ROBOTS: Metadata["robots"] = { index: false, follow: true };

/*
 * Shared layout for the legal pages linked from the footer.
 *
 * PENDING CLIENT REVIEW: Maaptrix has not yet supplied approved policy text.
 * These pages intentionally contain no invented practices, retention periods,
 * security controls or compliance claims. Replace the placeholder notice with
 * the approved policy content once Maaptrix Private Limited has signed it off.
 */
export default function LegalPage({ eyebrow, title, summary }: { eyebrow: string; title: string; summary: string }) {
  return (
    <>
      <section className="surface-blue relative overflow-hidden pb-14 pt-12 text-white sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -right-24 -top-16 h-[380px] w-[380px] rotate-12 rounded-[64px] border border-white/15" />
          <div className="absolute bottom-[-120px] right-[30%] h-[300px] w-[300px] rotate-12 rounded-[56px] bg-white/[0.05]" />
        </div>
        <div className="page-container relative">
          <Reveal className="max-w-[640px]">
            <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white/80">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[34px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-white/85 sm:text-[19px]">{summary}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="page-container">
          <Reveal className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-5 rounded-[16px] border border-[#D5E6F7] bg-[#F4F9FF] p-6 sm:flex-row sm:p-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white text-brand-blue">
                <FileText className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 className="font-display text-[21px] font-bold text-brand-navy">This page is being finalised</h2>
                <p className="mt-2 text-[16px] leading-[1.7] text-[#40536B]">
                  The {title} content for Maaptrix Private Limited is currently under review and will be published on
                  this page once approved. If you have any questions in the meantime, please get in touch with our team.
                </p>
                <Link
                  href="/contact"
                  className="group mt-6 inline-flex h-12 items-center gap-2 rounded-[10px] bg-brand-blue px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-blue-dark"
                >
                  Contact Maaptrix
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
