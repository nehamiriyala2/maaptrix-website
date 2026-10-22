import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { CalendarIcon, DocumentIcon } from "./LegalIcons";
import type { LegalBlock, LegalDocument } from "./legalContent";

/**
 * Keeps the draft legal pages out of search results while the policy text is
 * under business/legal review. Remove from each legal page's metadata once the
 * client has approved the final wording and effective date.
 */
export const LEGAL_DRAFT_ROBOTS: Metadata["robots"] = { index: false, follow: true };

/** Email addresses and international phone numbers (e.g. +91 99406 36798). */
const CONTACT = /([\w.+-]+@[\w-]+\.[\w.]+|\+\d[\d ]{8,}\d)/g;
const BODY = "text-[16px] leading-[1.75] text-[#40536B] sm:text-[17px]";

/** Renders text with any email addresses / phone numbers turned into mailto / tel links. */
function withEmailLinks(text: string): ReactNode {
  return text.split(CONTACT).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={part.includes("@") ? `mailto:${part}` : `tel:${part.replace(/ /g, "")}`}
        className="rounded-sm font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-[3px] transition-colors hover:text-brand-blue-dark hover:decoration-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/*
 * Every element carrying policy text has data-legal, so content checks can
 * compare the rendered page with the source document.
 */
function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return (
      <p data-legal className={`mt-4 first:mt-0 ${BODY}`}>
        {withEmailLinks(block)}
      </p>
    );
  }
  if ("list" in block) {
    return (
      <ul className={`mt-4 list-disc space-y-2.5 pl-6 marker:text-brand-blue first:mt-0 ${BODY}`}>
        {block.list.map((item) => (
          <li data-legal key={item} className="pl-1.5">
            {withEmailLinks(item)}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p
      data-legal
      className="mt-5 rounded-r-[12px] border-l-[3px] border-brand-blue bg-[#F4F9FF] px-5 py-4 text-[16px] leading-[1.75] text-brand-navy first:mt-0 sm:text-[17px]"
    >
      {block.lines.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {withEmailLinks(line)}
        </Fragment>
      ))}
    </p>
  );
}

/** Section heading; a leading "1." style number is tinted but kept as text. */
function SectionHeading({ heading }: { heading: string }) {
  const numbered = heading.match(/^(\d+\.)\s+(.*)$/);
  return (
    <h2
      data-legal
      className="font-display text-[21px] font-bold leading-snug tracking-[-0.01em] text-brand-navy sm:text-[24px]"
    >
      {numbered ? (
        <>
          <span className="text-brand-blue">{numbered[1]}</span> {numbered[2]}
        </>
      ) : (
        heading
      )}
    </h2>
  );
}

/*
 * Shared layout for the legal pages linked from the footer. The policy text
 * itself lives in legalContent.ts (verbatim client draft).
 */
export default function LegalPage({ eyebrow, document }: { eyebrow: string; document: LegalDocument }) {
  return (
    <>
      <section className="surface-blue relative overflow-hidden pb-24 pt-12 text-white sm:pb-28 sm:pt-14 lg:pb-32 lg:pt-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -right-24 -top-16 h-[380px] w-[380px] rotate-12 rounded-[64px] border border-white/15" />
          <div className="absolute -bottom-40 right-[28%] h-[300px] w-[300px] rotate-12 rounded-[56px] bg-white/[0.05]" />
          <div className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_65%)]" />
          <div
            className="absolute right-[12%] top-10 hidden h-[110px] w-[160px] opacity-25 sm:block"
            style={{ backgroundImage: "radial-gradient(#FFFFFF 1.4px, transparent 1.6px)", backgroundSize: "18px 18px" }}
          />
          <svg
            className="absolute inset-x-0 bottom-0 h-[160px] w-full text-white"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d="M0 120C240 60 480 150 760 104C1040 58 1240 20 1440 64" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.5" />
            <path d="M0 150C300 100 560 168 840 128C1100 92 1300 70 1440 96" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="page-container relative">
          <Reveal className="mx-auto max-w-[960px]">
            <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white/80">
              <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.18)]" aria-hidden />
              {eyebrow}
            </p>
            <h1
              data-legal
              className="mt-4 font-display text-[36px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[46px] lg:text-[54px]"
            >
              {document.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F3F8FF] pb-16 sm:pb-20 lg:pb-24">
        <div className="page-container">
          <div className="relative z-10 mx-auto -mt-14 max-w-[960px] rounded-[20px] border border-[#DCE9F6] bg-white px-5 py-8 shadow-[0_28px_60px_-40px_rgba(16,42,86,0.45)] sm:-mt-16 sm:px-10 sm:py-10 lg:-mt-20 lg:px-14 lg:py-12">
            {document.lastUpdated && (
              <div className="inline-flex items-center gap-3 rounded-[12px] border border-white/10 bg-[linear-gradient(135deg,#10233F_0%,#0B1B36_100%)] py-1.5 pl-1.5 pr-4 shadow-[0_10px_24px_-14px_rgba(11,27,54,0.7)]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                  <CalendarIcon title="Calendar icon" className="h-8 w-8" />
                </span>
                <p data-legal className="text-[15px] font-medium text-white">
                  {document.lastUpdated}
                </p>
              </div>
            )}

            <aside
              aria-label="Document status"
              className={`flex items-center gap-4 rounded-[14px] border border-[#FFD98A]/45 bg-[linear-gradient(135deg,#10233F_0%,#0B1B36_100%)] px-4 py-3.5 shadow-[0_14px_30px_-18px_rgba(11,27,54,0.75)] sm:px-5 sm:py-4 ${
                document.lastUpdated ? "mt-5" : ""
              }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <DocumentIcon title="Document icon" className="h-10 w-10" />
              </span>
              <p className="text-[14.5px] leading-[1.6] text-white/85 sm:text-[15px]">
                <strong className="font-semibold text-[#FFD98A]">Draft under review.</strong> This {document.title} is a
                draft that is currently being reviewed by Maaptrix Private Limited and may change before it is finalised.
              </p>
            </aside>

            <article className="mt-8 sm:mt-10">
              {document.intro.length > 0 && (
                <div className="mb-2">
                  {document.intro.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              )}

              {document.sections.map((section, i) => (
                <section
                  key={section.heading}
                  className={i === 0 && document.intro.length === 0 ? "" : "mt-8 border-t border-[#E6EEF7] pt-8 sm:mt-10 sm:pt-10"}
                >
                  <SectionHeading heading={section.heading} />
                  <div className="mt-3.5">
                    {section.blocks.map((block, j) => (
                      <Block key={j} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
