import Link from "next/link";
import {
  ArrowRight,
  Box,
  Bus,
  Crosshair,
  GraduationCap,
  Hammer,
  Lightbulb,
  RefreshCw,
  Search,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
      <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
      {children}
    </p>
  );
}

const H2 = "mt-4 font-display text-[30px] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[38px]";

/* 01 — Hero ---------------------------------------------------------------- */

/** Philosophy visual: a real problem, turned into a focused product. */
function ProblemToProductVisual() {
  const products = [
    { icon: Bus, name: "School Transport", href: "/products/school-transport" },
    { icon: GraduationCap, name: "School Management", href: "/products/school-management" },
  ];
  return (
    <div className="relative rounded-[28px] border border-[#DCEAFF] bg-white p-6 shadow-[0_30px_70px_-40px_rgba(10,10,10,0.45)] sm:p-8">
      <div className="grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-slate-400">Start with</p>
          <p className="mt-2 font-display text-[18px] font-bold text-brand-navy">A real operational problem</p>
          <p className="mt-1.5 text-[14px] leading-snug text-slate-500">Defined by the people who face it every day.</p>
        </div>

        <div className="flex flex-col items-center gap-2 py-1">
          <ArrowRight className="hidden h-5 w-5 text-brand-blue sm:block" aria-hidden />
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-[0_10px_24px_-10px_rgba(20,125,255,0.6)] ring-1 ring-[#DCEAFF]">
            <Logo showWordmark={false} imageClassName="h-full w-full" />
          </span>
          <ArrowRight className="hidden h-5 w-5 text-brand-blue sm:block" aria-hidden />
        </div>

        <div className="rounded-2xl border border-brand-blue/30 bg-brand-blue-light p-5">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-blue">Deliver</p>
          <p className="mt-2 font-display text-[18px] font-bold text-brand-navy">A focused product</p>
          <ul className="mt-3 space-y-2">
            {products.map(({ icon: Icon, name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 text-[14px] font-semibold text-brand-navy transition-colors hover:text-brand-blue"
                >
                  <Icon className="h-4 w-4 text-brand-blue" aria-hidden />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function WhyHero() {
  return (
    <section className="bg-[linear-gradient(180deg,#EEF6FF_0%,#F7FAFE_100%)] pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="page-container">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <Reveal>
            <Eyebrow>Why Maaptrix</Eyebrow>
            <h1 className="mt-5 font-display text-[38px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-[52px]">
              Built Differently, <span className="text-brand-blue">On Purpose.</span>
            </h1>
            <p className="mt-5 max-w-[540px] text-[17px] leading-[1.65] text-slate-600 sm:text-[18px]">
              Maaptrix builds focused software products around real operational problems, from product planning and
              development through launch, support and continuous improvement.
            </p>
            <Link
              href="/products"
              className="group mt-8 inline-flex h-[52px] items-center gap-2.5 rounded-[11px] bg-brand-blue px-7 text-[15px] font-bold text-white shadow-[0_12px_26px_-12px_rgba(20,125,255,0.8)] transition-colors hover:bg-brand-blue-dark"
            >
              Explore Our Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <ProblemToProductVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 02 — Approach ------------------------------------------------------------ */
const APPROACH = [
  { icon: Target, title: "Understand the Problem", desc: "Start from real operational challenges." },
  { icon: Lightbulb, title: "Build the Right Product", desc: "Practical and scalable solutions." },
  { icon: RefreshCw, title: "Continuously Improve", desc: "Long-term impact, release after release." },
];

export function WhyApproach() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="approach-heading">
      <div className="page-container">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <Reveal>
            <Eyebrow>The Maaptrix Approach</Eyebrow>
            <h2 id="approach-heading" className={H2}>
              Built around <span className="text-brand-blue">real problems.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-slate-600">
              Maaptrix combines software engineering and project management to build, operate and continuously improve
              its own digital products.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ol className="grid gap-4 sm:grid-cols-3">
              {APPROACH.map(({ icon: Icon, title, desc }, i) => (
                <li key={title} className="rounded-2xl border border-[#DCEAFF] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-[13px] font-bold text-brand-blue/60">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[17px] font-bold leading-snug text-brand-navy">{title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-snug text-slate-500">{desc}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 03 — Differentiators ----------------------------------------------------- */
const DIFFERENTIATORS = [
  {
    icon: Box,
    title: "Product Ownership",
    desc: "Maaptrix builds and improves its own solutions rather than functioning as an outsourced development agency.",
  },
  {
    icon: Crosshair,
    title: "Purpose-Built Solutions",
    desc: "Each product is designed around a defined operational problem, avoiding generic, bloated enterprise software suites.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    desc: "Interfaces and workflows are designed for real users, including non-technical operational staff.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "Delivered on subscription, with continuous maintenance, security patches and ongoing enhancements.",
  },
];

export function WhyDifferentiators() {
  return (
    <section className="bg-[#F3F8FF] py-16 sm:py-20" aria-labelledby="diff-heading">
      <div className="page-container">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>What Makes Us Different</Eyebrow>
            <h2 id="diff-heading" className={H2}>
              Four reasons organizations <span className="text-brand-blue">choose Maaptrix.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {DIFFERENTIATORS.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="flex gap-5 rounded-2xl border border-[#DCEAFF] bg-white p-6 shadow-[0_14px_34px_-28px_rgba(10,10,10,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/40 sm:p-7"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-[19px] font-bold text-brand-navy">{title}</h3>
                    <p className="mt-2 text-[15.5px] leading-[1.6] text-slate-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 04 — Product company model ---------------------------------------------- */
const LOOP = [
  { icon: Search, label: "Idea" },
  { icon: Hammer, label: "Build" },
  { icon: Wrench, label: "Operate" },
  { icon: RefreshCw, label: "Improve" },
];

export function WhyProductCompany() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="company-heading">
      <div className="page-container">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Product Company Mindset</Eyebrow>
            <h2 id="company-heading" className={H2}>
              We own the product <span className="text-brand-blue">after launch.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-slate-600">
              Maaptrix coordinates product planning, development, launch, maintenance and improvement with a single
              accountable team, so there is no disconnect between development and operational support.
            </p>
            <Link
              href="/how-we-work"
              className="group mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              See the full process
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[24px] border border-[#DCEAFF] bg-[#F7FAFE] p-6 sm:p-8" aria-label="Idea, build, operate, improve, repeated">
              <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-0">
                {LOOP.map(({ icon: Icon, label }, i) => (
                  <li key={label} className="relative flex flex-col items-center text-center">
                    {i > 0 && (
                      <span
                        className="absolute right-1/2 top-7 hidden h-[2px] w-full bg-brand-blue/30 sm:block"
                        aria-hidden
                      />
                    )}
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#DCEAFF] bg-white text-brand-blue shadow-[0_8px_20px_-10px_rgba(20,125,255,0.6)]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="mt-3 font-display text-[16px] font-bold text-brand-navy">{label}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-[14px] text-slate-600">
                <RefreshCw className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
                Improvement feeds the next idea: the cycle continues after launch.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 05 — CTA ----------------------------------------------------------------- */
export function WhyClosingCTA() {
  return (
    <section className="bg-white pb-16 sm:pb-20" aria-labelledby="why-cta-heading">
      <div className="page-container">
        <Reveal className="mx-auto max-w-[1240px] rounded-[28px] bg-[linear-gradient(135deg,#147DFF_0%,#3B97FF_55%,#6DB4FF_100%)] px-6 py-12 text-center text-white sm:px-12 sm:py-14">
          <h2 id="why-cta-heading" className="font-display text-[28px] font-bold leading-[1.15] sm:text-[36px]">
            Explore what Maaptrix is building.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="group inline-flex h-[52px] items-center gap-2 rounded-[11px] bg-white px-7 text-[15px] font-bold text-brand-blue transition-colors hover:bg-brand-blue-light"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center rounded-[11px] border border-white/60 px-7 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
