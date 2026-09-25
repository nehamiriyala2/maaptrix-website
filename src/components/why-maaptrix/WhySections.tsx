"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Box,
  Bus,
  Cog,
  GraduationCap,
  Heart,
  Lightbulb,
  MessageSquare,
  Network,
  Settings,
  Target,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import WatchVideoButton from "@/components/WatchVideoButton";
import BlueCTA from "@/components/BlueCTA";
import HeroBluePanel from "@/components/HeroBluePanel";
import TrackingMockup from "@/components/why-maaptrix/TrackingMockup";

const EASE = [0.22, 1, 0.36, 1] as const;
const NAVY = "text-[#102B5C]";
const BODY = "text-[#526A86]";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#1683F7]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#1683F7]" aria-hidden />
      {children}
    </p>
  );
}

function IconBadge({ icon: Icon, size = "md" }: { icon: LucideIcon; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-11 w-11 rounded-xl" : "h-12 w-12 rounded-2xl";
  return (
    <span className={`flex shrink-0 items-center justify-center bg-[#E8F3FF] text-[#1683F7] ${box}`}>
      <Icon className={size === "sm" ? "h-5 w-5" : "h-6 w-6"} strokeWidth={2} aria-hidden />
    </span>
  );
}

/* 01 — Hero ---------------------------------------------------------------- */
const HERO_POINTS: { icon: LucideIcon; title: [string, string]; desc: string }[] = [
  { icon: Users, title: ["People", "Focused"], desc: "Built for real users." },
  { icon: Settings, title: ["Product", "Driven"], desc: "We create and own our products." },
  { icon: BarChart3, title: ["Long-Term", "Impact"], desc: "Scalable products for a better tomorrow." },
];
export function WhyHero() {
  return (
    <section className="bg-white relative overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-12 xl:pb-[64px] xl:pt-[72px]">
      <div className="page-container relative">
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,560px)_minmax(0,1fr)] xl:gap-8 2xl:grid-cols-[minmax(0,610px)_minmax(0,1fr)]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="min-w-0"
          >
            <p className="inline-flex items-center gap-2.5 rounded-full bg-[#EFF7FF] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#1683F5] sm:text-[14px]">
              <span className="h-2 w-2 rounded-full bg-[#1683F5]" aria-hidden />
              Why Maaptrix
            </p>
            <h1 className="mt-7 font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#0B1B36] sm:text-[60px] xl:text-[clamp(56px,4.6vw,80px)]">
              Built Differently,
              <br />
              <span className="text-[#1683F5]">On Purpose.</span>
            </h1>
            <p className="mt-7 max-w-[570px] text-[17px] leading-[1.6] text-[#52657D] sm:text-[19px] xl:text-[20px]">
              Maaptrix builds focused software products around real operational problems, from product planning and
              development through launch, support and continuous improvement.
            </p>

            <ul className="mt-9 grid max-w-[610px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-3">
              {HERO_POINTS.map(({ icon: Icon, title, desc }) => (
                <li key={title[0]} className="flex items-start gap-3.5 sm:gap-3">
                  <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[14px] bg-[#EFF7FF] text-[#1683F5]">
                    <Icon className="h-[26px] w-[26px]" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-display text-[17px] font-semibold leading-[1.25] text-[#0B1B36] xl:text-[18px]">
                      {title[0]}
                      <br />
                      {title[1]}
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.5] text-[#52657D]">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex h-[58px] items-center justify-center gap-3 whitespace-nowrap rounded-[14px] bg-[#1683F5] px-8 text-[17px] 2xl:px-9 font-semibold text-white shadow-[0_14px_28px_-12px_rgba(22,131,245,0.75)] transition-colors duration-300 hover:bg-[#0F6FD8] xl:h-[62px] xl:text-[18px]"
              >
                Explore Our Products
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <WatchVideoButton className="inline-flex h-[58px] cursor-pointer items-center justify-center gap-3.5 whitespace-nowrap rounded-[14px] border border-[#CFE4FF] bg-white px-7 text-[17px] 2xl:px-8 font-semibold text-[#0B1B36] shadow-[0_8px_20px_-14px_rgba(20,90,160,0.35)] transition-colors duration-300 hover:border-[#1683F5] xl:h-[62px] xl:text-[18px]" />
            </div>
          </motion.div>

          {/* Right: laptop + phone product visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="mx-auto w-full min-w-0 max-w-[840px]"
          >
            <TrackingMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* 02 — Approach ------------------------------------------------------------ */
const APPROACH: { icon: LucideIcon; title: [string, string]; desc: string }[] = [
  {
    icon: Target,
    title: ["Understand", "the Problem"],
    desc: "We start with real operational challenges faced by schools, parents and transport teams.",
  },
  {
    icon: Lightbulb,
    title: ["Build the Right", "Product"],
    desc: "We design practical, scalable and easy-to-use solutions that solve real needs.",
  },
  {
    icon: Cog,
    title: ["Operate", "with Care"],
    desc: "We ensure smooth implementation, training and ongoing operational support.",
  },
  {
    icon: BarChart3,
    title: ["Continuously", "Improve"],
    desc: "We keep learning from real users and enhance our products over time.",
  },
];

export function WhyApproach() {
  return (
    <section className="bg-white" aria-labelledby="approach-heading">
      <div className="surface-blue relative overflow-hidden pb-16 pt-24 text-white [clip-path:polygon(0_48px,100%_0,100%_100%,0_100%)] sm:pb-20 sm:pt-28 lg:pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -right-24 top-16 h-[360px] w-[360px] rotate-12 rounded-[56px] border border-white/10" />
          <div className="absolute -bottom-32 -left-24 h-[320px] w-[320px] rotate-12 rounded-[56px] bg-white/[0.05]" />
        </div>
        <div className="page-container relative">
          <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-white/80">
                <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
                The Maaptrix Approach
              </p>
              <h2 id="approach-heading" className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-tight sm:text-[40px] lg:text-[46px]">
                Built around real problems.
              </h2>
            </div>
            <p className="max-w-[520px] text-[17px] leading-[1.65] text-white/85 lg:justify-self-end">
              Maaptrix combines software engineering and project management to build, operate and continuously improve
              its own digital products.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {APPROACH.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title[0]}
                  className="group relative flex flex-col rounded-[18px] bg-white p-6 text-[#10233F] shadow-[0_24px_40px_-24px_rgba(4,30,80,0.6)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#EAF4FF] text-[#1683F7]">
                      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                    </span>
                    <span className="font-display text-[34px] font-bold leading-none text-[#DCEBFD]">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[19px] font-bold leading-tight">
                    {title[0]}
                    <br />
                    {title[1]}
                  </h3>
                  <p className={`mt-2.5 flex-1 text-[15px] leading-[1.6] ${BODY}`}>{desc}</p>
                  <Link
                    href="/how-we-work"
                    className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#1683F7]"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 03 — Impact -------------------------------------------------------------- */
const CHIPS: { icon: LucideIcon; label: [string, string] }[] = [
  { icon: Bus, label: ["Safer", "Transportation"] },
  { icon: UserRound, label: ["Smarter", "Administration"] },
  { icon: MessageSquare, label: ["Better", "Communication"] },
];

const IMPACT_ICONS: { icon: LucideIcon; className: string }[] = [
  { icon: GraduationCap, className: "left-[6%] top-[-6%]" },
  { icon: MessageSquare, className: "right-[4%] top-[-8%]" },
  { icon: BarChart3, className: "right-[-3%] bottom-[18%]" },
];

export function WhyImpact() {
  return (
    <section className="surface-glow-right py-16 sm:py-20 lg:py-24" aria-labelledby="impact-heading">
      <div className="page-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Our Impact</Eyebrow>
            <h2 id="impact-heading" className={`mt-4 font-display text-[32px] font-bold leading-[1.08] tracking-tight sm:text-[40px] lg:text-[46px] xl:text-[50px] ${NAVY}`}>
              Making everyday operations
              <br />
              <span className="text-[#1683F7]">simpler and safer.</span>
            </h2>
            <p className={`mt-4 max-w-[520px] text-[17px] leading-[1.65] lg:text-[18px] ${BODY}`}>
              From school <strong className={`font-semibold ${NAVY}`}>transportation</strong> to academic management,
              Maaptrix helps organizations run better with technology that understands their day-to-day needs.
            </p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {CHIPS.map(({ icon: Icon, label }) => (
                <li key={label[1]} className="flex items-center gap-3 rounded-xl border border-[#CFE4FF] bg-white px-4 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F3FF] text-[#1683F7]">
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <span className={`text-[13.5px] font-semibold leading-tight ${NAVY}`}>
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[600px] pt-6">
            <div className="absolute inset-4 -z-0 rounded-[40px] bg-[#E8F3FF]" aria-hidden />
            <div className="relative overflow-hidden rounded-[28px] border border-[#CFE4FF] bg-white shadow-[0_30px_60px_-40px_rgba(16,43,92,0.45)]">
              <Image
                src="/hero/transport-card-scene.jpg"
                alt="Parent app showing a school bus route, with a school bus on the road"
                width={1200}
                height={896}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            {IMPACT_ICONS.map(({ icon: Icon, className }) => (
              <span
                key={className}
                className={`absolute hidden h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1683F7] shadow-[0_14px_30px_-14px_rgba(16,43,92,0.35)] ring-1 ring-[#D9E8FA] sm:flex ${className}`}
                aria-hidden
              >
                <Icon className="h-7 w-7" />
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 04 — Differentiators ----------------------------------------------------- */
const DIFFERENTIATORS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Box, title: "Product Ownership", desc: "We build and improve our own products, with full accountability." },
  { icon: GraduationCap, title: "Education-First Focus", desc: "Built specifically for schools, students and transport needs." },
  { icon: Heart, title: "Simple & User-Friendly", desc: "Designed for real users, not just technical teams." },
  { icon: Network, title: "Long-Term Partnership", desc: "We grow with our customers through continuous improvement." },
];

export function WhyDifferentiators() {
  return (
    <section className="surface-soft py-16 sm:py-20 lg:pb-16 lg:pt-20" aria-labelledby="diff-heading">
      <div className="page-container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <Reveal>
            <Eyebrow>What Makes Us Different</Eyebrow>
            <h2 id="diff-heading" className={`mt-4 font-display text-[32px] font-bold leading-[1.08] tracking-tight sm:text-[40px] lg:text-[46px] xl:text-[50px] ${NAVY}`}>
              Four reasons organizations
              <br />
              <span className="text-[#1683F7]">choose Maaptrix.</span>
            </h2>
            <p className={`mt-4 max-w-[460px] text-[17px] leading-[1.65] lg:text-[18px] ${BODY}`}>
              A focused product company with a clear mission to improve school operations through practical technology.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid gap-4 sm:grid-cols-2 sm:pb-8 sm:[&>li:nth-child(even)]:translate-y-8">
              {DIFFERENTIATORS.map(({ icon, title, desc }) => (
                <li
                  key={title}
                  className="group relative flex items-start gap-4 overflow-hidden rounded-[16px] border border-[#D5E6F7] bg-white p-6 shadow-[0_14px_32px_-22px_rgba(16,42,86,0.4)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-22px_rgba(22,131,247,0.5)]"
                >
                  <span className="absolute inset-y-0 left-0 w-1 bg-[#1683F7] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                  <IconBadge icon={icon} />
                  <div>
                    <h3 className={`font-display text-[18px] font-bold ${NAVY}`}>{title}</h3>
                    <p className={`mt-1.5 text-[15px] leading-[1.55] ${BODY}`}>{desc}</p>
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

/* 05 — CTA ----------------------------------------------------------------- */
export function WhyClosingCTA() {
  return (
    <BlueCTA
      id="why-cta-heading"
      eyebrow="Our Commitment"
      title="Let's build smarter schools together."
      text="Discover how Maaptrix can simplify and improve your operations."
      primary={{ href: "/contact", label: "Request a Demo" }}
      above="#EAF4FF"
    />
  );
}
