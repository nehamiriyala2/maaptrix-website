"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bus,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Layers,
  Lightbulb,
  MessageSquare,
  RefreshCw,
  Settings,
  Shield,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import AboutEcosystemIllustration from "./AboutEcosystemIllustration";

/** Reusable section eyebrow badge with blue line */
function SectionEyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`h-2 w-2 rounded-full ${light ? "bg-[#4DA8FF]" : "bg-brand-blue"}`} aria-hidden />
      <p
        className={`text-[12.5px] sm:text-[13px] font-bold uppercase tracking-[0.16em] ${
          light ? "text-[#4DA8FF]" : "text-brand-blue"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

/* ==========================================================================
   01 — HERO (Clean white background + Technology Ecosystem Visual)
   ========================================================================== */
const HERO_VALUE_POINTS = [
  {
    icon: Users,
    title: "Real-world Focus",
    desc: "Built for genuine operational needs.",
  },
  {
    icon: Settings,
    title: "Product Driven",
    desc: "We create and own our products.",
  },
  {
    icon: BarChart3,
    title: "Subscription Based",
    desc: "Scalable solutions for long-term value.",
  },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-14 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
      {/* Soft atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(22,131,247,0.06)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="page-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-16">
          {/* Left Column: Headline & Value Propositions */}
          <Reveal className="min-w-0">
            <SectionEyebrow>ABOUT MAAPTRIX</SectionEyebrow>

            <h1 className="mt-5 font-display text-[38px] font-extrabold leading-[1.04] tracking-[-0.04em] text-brand-navy sm:text-[50px] lg:text-[56px] xl:text-[62px]">
              Technology Products{" "}
              <br className="hidden sm:inline" />
              Built Around{" "}
              <span className="text-brand-blue">Real Problems.</span>
            </h1>

            <p className="mt-6 max-w-[580px] text-[17px] leading-[1.7] text-[#40536B] sm:text-[18.5px]">
              Maaptrix is a technology company that builds, owns and manages its own software products,
              designed around real-world operational problems and delivered through subscription plans.
            </p>

            {/* Three Value Points in connected row */}
            <div className="mt-9 grid grid-cols-1 gap-4 border-t border-[#E3EDF8] pt-7 sm:grid-cols-3">
              {HERO_VALUE_POINTS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-[#E3EEF9] bg-[#F9FBFE] p-4 transition-all duration-300 hover:border-brand-blue/30 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF5FF] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                  </span>
                  <h3 className="mt-3 font-display text-[15px] font-bold text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.45] text-[#52657D]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="#start-heading"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[12px] bg-brand-blue px-8 text-[16px] font-semibold text-white shadow-[0_14px_28px_-14px_rgba(22,131,247,0.9)] transition-colors hover:bg-brand-blue-dark"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                href="/products"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[12px] border border-[#BFDFFF] bg-white px-7 text-[16px] font-semibold text-brand-blue transition-colors hover:border-brand-blue hover:bg-[#EAF4FF]"
              >
                Explore Products
              </Link>
            </div>
          </Reveal>

          {/* Right Column: Custom Maaptrix Product Ecosystem Illustration */}
          <Reveal delay={0.08} className="relative mt-2 lg:mt-0">
            <AboutEcosystemIllustration />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   02 — WHERE WE START (Focus Cards)
   ========================================================================== */
const FOCUS_CARDS = [
  {
    icon: Bus,
    title: "School transportation & student safety",
    linkText: " School Transport",
    href: "/products/school-transport",
  },
  {
    icon: GraduationCap,
    title: "Academic and administrative operations",
    linkText: " School Management",
    href: "/products/school-management",
  },
  {
    icon: Users,
    title: "Better communication and engagement",
    linkText: "Parent and Student Apps",
    href: "/products",
  },
];

export function AboutWhereWeStart() {
  return (
    <section
      id="start-heading"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#1683F7_0%,#0E71E6_50%,#0757C9_100%)] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background ambient lighting effects */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-white/10 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-[#00D2FF]/20 blur-[90px]"
        aria-hidden
      />

      <div className="page-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
              <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-white/90">
                WHERE WE START
              </p>
            </div>
            <h2 className="mt-5 max-w-[620px] font-display text-[34px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[50px] xl:text-[56px]">
              Building practical technology for everyday operations.
            </h2>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-white/90 sm:text-[18px]">
              We began by focusing on practical digital solutions for school operations and related everyday operational needs, to help organizations run safer, simpler and more connected operations.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-4">
              {FOCUS_CARDS.map(({ icon: Icon, title, linkText, href }, i) => (
                <Link
                  key={title}
                  href={href}
                  className="group relative flex w-full items-center gap-5 overflow-hidden rounded-[20px] bg-white p-5 text-brand-navy shadow-[0_16px_36px_-12px_rgba(7,50,120,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-12px_rgba(7,50,120,0.5)] sm:p-6"
                >
                  <span className="absolute inset-y-0 left-0 w-1.5 bg-brand-blue" aria-hidden />
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-[#EAF4FF] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[17px] font-bold leading-snug text-brand-navy sm:text-[19px]">{title}</span>
                    <span className="mt-1.5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-brand-blue">
                      {linkText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </span>
                  <span className="hidden font-display text-[32px] font-bold leading-none text-[#CFE4FF] sm:block">0{i + 1}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   03 — MISSION & VISION
   ========================================================================== */
const MISSION_POINTS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Users, title: "People Centric Solutions", desc: "Tools that make work effortless." },
  { icon: ShieldCheck, title: "Greater Accessibility", desc: "Technology for everyone." },
  { icon: BarChart3, title: "Better Experiences", desc: "Real impact for real people." },
];

const VISION_POINTS: { icon: LucideIcon; title: string }[] = [
  { icon: Lightbulb, title: "Practical Innovation" },
  { icon: Settings, title: "Responsible Technology" },
  { icon: BarChart3, title: "Measurable Operational Value" },
];

export function AboutMissionVision() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24" aria-label="Our mission and vision">
      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-8 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:gap-10">
          {/* Mission */}
          <Reveal className="flex flex-col justify-center">
            <SectionEyebrow>OUR MISSION</SectionEyebrow>
            <h2 className="mt-5 font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] font-bold tracking-tight text-brand-navy">
              To create simple, dependable and accessible <span className="text-brand-blue">digital products</span>
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-slate-600 sm:text-[19px]">
              that help organizations manage everyday operations more efficiently and deliver better experiences to
              their users.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {MISSION_POINTS.map(({ icon: Icon, title, desc }) => (
                <li key={title}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4FF] text-brand-blue">
                    <Icon className="h-7 w-7" strokeWidth={2.2} aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-[16px] font-bold leading-snug text-brand-navy">{title}</p>
                  <p className="mt-1.5 text-[14.5px] leading-snug text-slate-500">{desc}</p>
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="group mt-8 flex items-center gap-4 rounded-2xl border border-[#CFE4FF] bg-white p-4 shadow-xs transition-colors hover:border-brand-blue/50 sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white p-1.5 ring-1 ring-[#DCEAFF]">
                <Logo showWordmark={false} imageClassName="h-full w-full" />
              </span>
              <span className="flex-1 text-[15px] leading-snug text-brand-navy">
                Empowering organizations with technology that truly makes a difference.
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-brand-blue transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-5 w-5" aria-hidden />
              </span>
            </Link>
          </Reveal>

          {/* Vision */}
          <Reveal
            delay={0.08}
            className="relative flex flex-col justify-between rounded-[28px] bg-[linear-gradient(145deg,#0B1B36_0%,#102A54_100%)] p-8 text-white sm:p-10 lg:p-12 shadow-[0_20px_50px_-20px_rgba(11,27,54,0.4)]"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]" aria-hidden>
              <div className="absolute -right-20 -top-24 h-[420px] w-[420px] rounded-full bg-brand-blue/20 blur-[90px]" />
              <div className="absolute -bottom-32 left-1/3 h-[320px] w-[420px] rounded-full bg-brand-blue/15 blur-[90px]" />
            </div>

            <div className="relative z-10">
              <SectionEyebrow light>OUR VISION</SectionEyebrow>
              <h2 className="mt-5 font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] font-bold tracking-tight">
                To build Maaptrix into a{" "}
                <span className="text-[#4DA8FF]">trusted Indian software product company</span>
              </h2>
              <p className="mt-4 text-[17px] leading-[1.55] text-white/85 sm:text-[19px]">
                known for practical innovation, responsible technology and subscription products that create measurable
                operational value.
              </p>
              <ul className="mt-8 space-y-4">
                {VISION_POINTS.map(({ icon: Icon, title }) => (
                  <li key={title} className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#4DA8FF]">
                      <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                    </span>
                    <span className="text-[16.5px] font-semibold">{title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-8 border-t border-white/15 pt-6 text-[13.5px] text-white/70">
              Subscription products built for longevity, scalability, and everyday impact.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   04 — CORE PRINCIPLES (Exact 3x2 Grid matching user's reference screenshot)
   ========================================================================== */
const PRINCIPLES_LIST = [
  {
    num: "01",
    title: "Practical Innovation",
    desc: "Technology built around genuine problems and useful outcomes.",
    renderIcon: () => (
      <svg
        className="h-[52px] w-[52px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2v1" />
        <path d="M12 7a5 5 0 0 1 5 5c0 2-1 3.5-2 4.5V18H9v-1.5C8 15.5 7 14 7 12a5 5 0 0 1 5-5z" />
        <path d="M4.93 4.93l.7.7" />
        <path d="M19.07 4.93l-.7.7" />
        <path d="M2 12h1" />
        <path d="M21 12h1" />
        <path d="M12 9v3" stroke="#1683F7" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="1.2" fill="#1683F7" stroke="#1683F7" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Simplicity",
    desc: "Products that are easy to understand and easy to use.",
    renderIcon: () => (
      <svg
        className="h-[52px] w-[52px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 12 12 17 22 12" stroke="#1683F7" strokeWidth="2.4" />
        <polyline points="2 17 12 22 22 17" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Reliability",
    desc: "Software that works consistently when users need it.",
    renderIcon: () => (
      <svg
        className="h-[52px] w-[52px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" strokeWidth="2.4" stroke="#1683F7" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Safety & Responsibility",
    desc: "Care for user safety, privacy and responsible design.",
    renderIcon: () => (
      <svg
        className="h-[52px] w-[52px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="10" r="2.5" />
        <path d="M8.5 16.5a4 4 0 0 1 7 0" stroke="#1683F7" strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Customer Focus",
    desc: "Feedback from real users guides improvement.",
    renderIcon: () => (
      <svg
        className="h-[52px] w-[52px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="8.5" cy="6.5" r="2" fill="currentColor" />
        <circle cx="15.5" cy="6.5" r="2" fill="currentColor" />
        <path stroke="#1683F7" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Continuous Improvement",
    desc: "Launch is the beginning of the lifecycle, not the end.",
    renderIcon: () => (
      <svg
        className="h-[52px] w-[52px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" stroke="#1683F7" strokeWidth="2" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M21 21v-5h-5" stroke="#1683F7" strokeWidth="2" />
        <path d="M9 15v-2" strokeWidth="2.2" strokeLinecap="round" stroke="#1683F7" />
        <path d="M12 15v-5" strokeWidth="2.2" strokeLinecap="round" stroke="#1683F7" />
        <path d="M15 15v-7" strokeWidth="2.2" strokeLinecap="round" stroke="#1683F7" />
      </svg>
    ),
  },
];

export function AboutPrinciples() {
  return (
    <section className="relative bg-[#F8FBFE] py-16 sm:py-20 lg:py-24" aria-labelledby="principles-heading">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#E3EEF9]" aria-hidden />

      <div className="page-container relative">
        {/* Header block */}
        <Reveal className="max-w-3xl">
          <SectionEyebrow>CORE PRINCIPLES</SectionEyebrow>
          <h2
            id="principles-heading"
            className="mt-3.5 font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-brand-navy"
          >
            What guides <span className="text-brand-blue">how we build.</span>
          </h2>
          <p className="mt-3.5 max-w-[760px] text-[16px] leading-[1.55] text-[#53657D] sm:text-[17.5px]">
            Our core principles shape every product, decision and experience we create at Maaptrix.
          </p>
        </Reveal>

        {/* 3 x 2 Cards Grid (Matching user's screenshot layout) */}
        <Reveal delay={0.08}>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:mt-12">
            {PRINCIPLES_LIST.map(({ num, title, desc, renderIcon }) => (
              <div
                key={num}
                className="flex min-h-[260px] flex-col justify-between gap-6 rounded-[24px] border border-[#CFE4FF] bg-white p-7 shadow-[0_8px_24px_rgba(30,90,150,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_14px_32px_rgba(30,90,150,0.12)] sm:p-8"
              >
                {/* Top Icon */}
                <div className="flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] sm:h-[102px] sm:w-[102px]">
                  {renderIcon()}
                </div>

                {/* Bottom Number, Title & Description */}
                <div>
                  <div className="flex items-center gap-3 font-display">
                    <span className="text-[17px] font-bold text-brand-blue sm:text-[17.5px]">
                      {num}
                    </span>
                    <h3 className="text-[18px] font-bold text-brand-navy sm:text-[19px]">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[14.5px] leading-[1.55] text-[#53657D]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bottom Horizontal CTA Bar */}
        <Reveal delay={0.12} className="mt-10 sm:mt-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[20px] border border-[#CFE4FF] bg-white px-7 py-7 shadow-[0_8px_24px_rgba(30,90,150,0.04)] sm:flex-row sm:items-center sm:px-10 sm:py-8">
            <h3 className="font-display text-[22px] font-bold leading-[1.2] text-brand-navy sm:text-[26px]">
              Explore what Maaptrix <span className="text-brand-blue">is building.</span>
            </h3>
            <Link
              href="/products"
              className="group inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-[12px] bg-brand-blue px-7 text-[15px] font-bold text-white shadow-[0_10px_22px_-6px_rgba(20,125,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-[0_12px_26px_-4px_rgba(20,125,255,0.7)] sm:h-[54px] sm:w-[215px]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================================================
   05 — CLOSING CTA
   ========================================================================== */
export function AboutClosingCTA() {
  return null;
}
