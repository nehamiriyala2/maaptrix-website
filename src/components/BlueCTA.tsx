import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

type Action = { href: string; label: string };

/**
 * Full-width bright-blue conversion band with an angled top edge.
 * `above` is the background colour of the section before it, so the angled
 * cut blends into the previous section.
 */
export default function BlueCTA({
  id,
  eyebrow,
  title,
  text,
  primary,
  secondary,
  above = "#FFFFFF",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  text: string;
  primary: Action;
  secondary?: Action;
  above?: string;
}) {
  return (
    <section style={{ background: above }} aria-labelledby={id}>
      <div className="relative overflow-hidden bg-[linear-gradient(120deg,#1683F7_0%,#0E71E6_55%,#0757C9_100%)] pb-16 pt-24 text-white [clip-path:polygon(0_48px,100%_0,100%_100%,0_100%)] sm:pb-20 sm:pt-28 lg:pb-24">
        {/* subtle geometric detail */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -right-24 top-10 h-[360px] w-[360px] rotate-12 rounded-[56px] border border-white/10" />
          <div className="absolute -right-4 top-28 h-[240px] w-[240px] rotate-12 rounded-[40px] border border-white/10" />
          <div className="absolute -bottom-32 -left-24 h-[320px] w-[320px] rotate-12 rounded-[56px] bg-white/[0.05]" />
        </div>

        <Reveal className="page-container relative text-center">
          {eyebrow && <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-white/80">{eyebrow}</p>}
          <h2 id={id} className="mx-auto mt-3 max-w-3xl font-display text-[32px] font-bold leading-[1.1] tracking-tight sm:text-[40px] lg:text-[48px]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.65] text-white/85 sm:text-[18px]">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primary.href}
              className="group inline-flex h-[52px] items-center gap-2 rounded-[10px] bg-white px-7 text-[16px] font-semibold text-[#1683F7] shadow-[0_14px_30px_-14px_rgba(7,40,100,0.6)] transition-colors hover:bg-[#EAF4FF]"
            >
              {primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex h-[52px] items-center rounded-[10px] border border-white/60 px-7 text-[16px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
