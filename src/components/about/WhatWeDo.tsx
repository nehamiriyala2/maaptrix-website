"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Layers, Settings, ShieldCheck, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import WhatWeDoProcessVisual from "@/components/about/WhatWeDoProcessVisual";

const TONES = {
  blue: { accent: "#147DFF", ink: "#1270E6", soft: "#EAF3FF", chip: "#E1EDFF", icon: "#D5E7FF", border: "#D7E8FF" },
  green: { accent: "#10B981", ink: "#0C9A6C", soft: "#E7F8F1", chip: "#D8F3E8", icon: "#C9EFDF", border: "#CFEFE2" },
  purple: { accent: "#8B5CF6", ink: "#7442E6", soft: "#F2ECFE", chip: "#E9E0FD", icon: "#DDD0FC", border: "#E4D9FC" },
  orange: { accent: "#F97316", ink: "#E8680C", soft: "#FFF1E5", chip: "#FFE6D2", icon: "#FFD9BC", border: "#FDE2CC" },
} as const;

const CAPABILITIES = [
  {
    num: "01",
    title: "Build and own subscription-based software products.",
    description:
      "We design and operate software with long-term product stewardship, avoiding one-off code handoffs.",
    icon: Layers,
    tone: TONES.blue,
  },
  {
    num: "02",
    title: "Design solutions around clear operational and user needs.",
    description:
      "Every workflow is mapped to the daily reality of administrators, operators, drivers and end users.",
    icon: Users,
    tone: TONES.green,
  },
  {
    num: "03",
    title: "Manage the complete product lifecycle from concept to launch and improvement.",
    description:
      "From initial problem definition to engineering, release, active monitoring and iteration.",
    icon: Settings,
    tone: TONES.purple,
  },
  {
    num: "04",
    title: "Focus on usability, reliability, safety and scalable product architecture.",
    description:
      "Engineered for high uptime, clean non-technical interfaces, data privacy and operational dependability.",
    icon: ShieldCheck,
    tone: TONES.orange,
  },
  {
    num: "05",
    title: "Work with customers through product onboarding, demos, support and ongoing enhancements.",
    description:
      "Direct customer relationships ensure continuous assistance, training and guided software evolution.",
    icon: BarChart3,
    tone: TONES.blue,
  },
];

/** Soft blurred foliage for the bottom-left depth layer. */
function Foliage() {
  return (
    <svg
      viewBox="0 0 260 300"
      className="pointer-events-none absolute -bottom-10 -left-12 z-30 hidden h-[300px] w-[260px] blur-[5px] opacity-90 lg:block"
      aria-hidden
    >
      <defs>
        <linearGradient id="wwd-leaf-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7CC47F" />
          <stop offset="100%" stopColor="#2E7D46" />
        </linearGradient>
        <linearGradient id="wwd-leaf-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ED69A" />
          <stop offset="100%" stopColor="#3F9155" />
        </linearGradient>
      </defs>
      <path d="M40 300 C30 220 60 150 150 110 C120 170 100 240 70 300Z" fill="url(#wwd-leaf-a)" />
      <path d="M20 300 C-10 240 0 170 40 120 C50 190 55 250 55 300Z" fill="url(#wwd-leaf-b)" />
      <path d="M80 300 C110 250 170 220 240 215 C190 250 140 280 110 300Z" fill="url(#wwd-leaf-b)" opacity=".85" />
      <path d="M60 300 C70 230 110 180 190 160 C150 210 120 260 95 300Z" fill="url(#wwd-leaf-a)" opacity=".7" />
    </svg>
  );
}

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(135deg,#EAF4FF_0%,#F4F9FF_38%,#FAFCFF_62%,#EEF6FF_100%)] py-12 sm:py-14 lg:py-16">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(191,227,255,0.55),rgba(221,241,255,0.25)_55%,transparent_72%)]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[520px] w-[720px] rounded-full bg-[#147DFF]/10 blur-[90px]" />
      <svg
        viewBox="0 0 1600 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 h-[220px] w-full opacity-70"
        aria-hidden
      >
        <path d="M0 180 C300 110 520 260 860 190 S1340 90 1600 160 L1600 300 L0 300Z" fill="#DDEEFF" fillOpacity=".55" />
        <path d="M0 240 C360 180 640 290 980 240 S1400 190 1600 230 L1600 300 L0 300Z" fill="#EAF4FF" fillOpacity=".8" />
      </svg>
      <Foliage />

      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1480px] items-center gap-12 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:gap-8 2xl:grid-cols-[minmax(0,1fr)_minmax(0,1.14fr)] 2xl:gap-10">
          {/* LEFT: heading + process visual */}
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFF] bg-white/70 px-4 py-1.5 shadow-[0_2px_8px_rgba(20,125,255,0.08)] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue sm:text-[14px]">
                  Core Capabilities
                </span>
              </span>
              <h2 className="mt-5 font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.035em] text-brand-navy sm:text-[56px] lg:text-[64px]">
                What We <span className="text-brand-blue">Do</span>
              </h2>
              <p className="mt-5 max-w-[490px] text-[18px] leading-[1.55] text-[#4A5B78] sm:text-[20px]">
                How Maaptrix approaches software development, ownership and continuous operations
                to deliver real-world impact.
              </p>
            </Reveal>

            <div className="mx-auto mt-8 max-w-[660px] sm:mt-10 xl:mx-0">
              <WhatWeDoProcessVisual />
            </div>
          </div>

          {/* RIGHT: timeline + capability cards */}
          <ol className="relative min-w-0">
            {CAPABILITIES.map((item, idx) => {
              const Icon = item.icon;
              const first = idx === 0;
              const last = idx === CAPABILITIES.length - 1;
              const style = {
                "--tone": item.tone.accent,
                "--tone-ink": item.tone.ink,
                "--tone-soft": item.tone.soft,
                "--tone-chip": item.tone.chip,
                "--tone-icon": item.tone.icon,
                "--tone-border": item.tone.border,
              } as CSSProperties;

              return (
                <li key={item.num} style={style} className="relative flex items-stretch py-[7px] pl-9 sm:pl-14">
                  {/* Timeline rail segment */}
                  <span
                    aria-hidden
                    className={`absolute left-[10px] w-0 border-l-2 border-dashed border-[#A9CBF5] sm:left-[14px] ${
                      first ? "top-1/2" : "top-0"
                    } ${last ? "bottom-1/2" : "bottom-0"}`}
                  />

                  {/* Node + connector */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px 0px" }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 sm:left-[4px]"
                  >
                    <span className="relative flex items-center">
                      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-[3px] border-[var(--tone)] bg-white shadow-[0_0_0_5px_color-mix(in_srgb,var(--tone)_14%,transparent),0_0_14px_color-mix(in_srgb,var(--tone)_45%,transparent)]">
                        <span className="h-[6px] w-[6px] rounded-full bg-[var(--tone)]" />
                      </span>
                      <span className="ml-1 hidden w-[20px] border-t-2 border-dotted border-[color-mix(in_srgb,var(--tone)_55%,transparent)] sm:block" />
                    </span>
                  </motion.div>

                  <Reveal delay={idx * 0.08} className="min-w-0 flex-1">
                    <div className="group relative flex h-full items-start gap-3 overflow-hidden rounded-[26px] border border-[var(--tone-border)] bg-[linear-gradient(100deg,var(--tone-soft)_0%,rgba(255,255,255,0.88)_55%,rgba(255,255,255,0.78)_100%)] p-4 shadow-[0_14px_34px_-18px_rgba(20,70,150,0.35),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-18px_rgba(20,70,150,0.42)] sm:items-center sm:gap-4 sm:py-4 sm:pl-5 sm:pr-4 lg:min-h-[122px]">
                      {/* Decorative wave */}
                      <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 right-0 h-[72px] w-[260px]" aria-hidden>
                        <path d="M0 80 C60 76 110 40 200 6 L200 80Z" fill="var(--tone)" fillOpacity=".09" />
                        <path d="M60 80 C110 74 150 52 200 34 L200 80Z" fill="var(--tone)" fillOpacity=".07" />
                      </svg>

                      <div className="relative flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <span className="flex h-[44px] w-[44px] items-center justify-center rounded-2xl bg-[var(--tone-chip)] font-display text-[17px] font-extrabold text-[var(--tone-ink)] sm:h-[50px] sm:w-[50px] sm:text-[19px] 2xl:h-[54px] 2xl:w-[54px] 2xl:text-[20px]">
                          {item.num}
                        </span>
                        <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[18px] border border-white bg-[linear-gradient(145deg,#FFFFFF_0%,var(--tone-icon)_100%)] shadow-[0_10px_20px_-10px_var(--tone),inset_0_1px_0_#fff] sm:h-[56px] sm:w-[56px] 2xl:h-[62px] 2xl:w-[62px]">
                          <Icon
                            className="h-[24px] w-[24px] text-[var(--tone)] sm:h-[32px] sm:w-[32px]"
                            fill="var(--tone)"
                            fillOpacity={0.18}
                            strokeWidth={2.1}
                          />
                        </span>
                      </div>

                      <div className="relative min-w-0 flex-1">
                        <h3 className="font-display text-[17px] font-bold leading-[1.3] text-brand-navy sm:text-[18px] 2xl:text-[20px]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[14.5px] leading-[1.45] text-[#55647D] sm:text-[15px]">
                          {item.description}
                        </p>
                      </div>

                      <span
                        aria-hidden
                        className="relative hidden h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-white bg-white text-[var(--tone)] shadow-[0_8px_20px_-8px_color-mix(in_srgb,var(--tone)_60%,transparent)] transition-transform duration-300 group-hover:translate-x-1 sm:flex"
                      >
                        <ArrowRight className="h-[24px] w-[24px]" strokeWidth={2.4} />
                      </span>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
