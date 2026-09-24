"use client";

import type { ComponentType, SVGProps } from "react";
import { ArrowRight, Car, FileText, Sparkles, Star, UserRound, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const ROLES: { icon: Icon; title: string; desc: string; card: string; chip: string; ink: string }[] = [
  {
    icon: Users,
    title: "Admin",
    desc: "Web console for dispatch, visibility & oversight.",
    card: "bg-[#F5F9FF] border-[#DCEEFF]",
    chip: "bg-[#E1EDFF]",
    ink: "text-brand-blue",
  },
  {
    icon: Car,
    title: "Driver",
    desc: "Simplified mobile flow for routes & attendance.",
    card: "bg-[#F3FBF7] border-[#D6F0E3]",
    chip: "bg-[#DCF3E7]",
    ink: "text-emerald-600",
  },
  {
    icon: Users,
    title: "Parent",
    desc: "Real-time alerts, live map & pickup status.",
    card: "bg-[#F8F5FF] border-[#E6DEFB]",
    chip: "bg-[#ECE4FD]",
    ink: "text-violet-600",
  },
  {
    icon: FileText,
    title: "Staff",
    desc: "Clean everyday administration workflows.",
    card: "bg-[#FFF8F2] border-[#FBE5D2]",
    chip: "bg-[#FFE9D6]",
    ink: "text-orange-500",
  },
];

const FEATURES: { icon: Icon; title: string; desc: string }[] = [
  { icon: UserRound, title: "Low training curve", desc: "Easy to learn for operators, drivers and parents." },
  { icon: Star, title: "Clear visual feedback", desc: "Simple and consistent interface for high operational legibility." },
];

export default function UsabilityFocusSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-16 sm:py-20 xl:py-24">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-40 top-[30%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,#EAF3FF_0%,rgba(234,243,255,0)_70%)]" />
        <svg viewBox="0 0 1600 200" preserveAspectRatio="none" className="absolute bottom-0 right-0 h-[120px] w-[70%]">
          <defs>
            <linearGradient id="uf-wave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#147DFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#147DFF" stopOpacity=".35" />
            </linearGradient>
          </defs>
          <path d="M0 200 C300 40 900 20 1600 120 L1600 200 Z" fill="url(#uf-wave)" />
        </svg>
      </div>

      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1560px] items-center gap-14 xl:grid-cols-[minmax(0,60fr)_minmax(0,40fr)] xl:gap-16">
          {/* Left: multi-role interface visual */}
          <Reveal className="relative order-2 min-w-0 xl:order-1">
            <div className="pointer-events-none absolute -left-6 -top-10 hidden h-[240px] w-[380px] -rotate-[8deg] rounded-[28px] bg-[linear-gradient(135deg,#CFE4FF,#EAF3FF)] opacity-80 sm:block" aria-hidden />
            <div className="pointer-events-none absolute -top-16 left-1/2 hidden h-[420px] w-[420px] rounded-full bg-[#EAF3FF] sm:block" aria-hidden />
            <div
              className="pointer-events-none absolute -top-14 left-[40%] hidden h-[70px] w-[150px] opacity-50 sm:block"
              style={{ backgroundImage: "radial-gradient(#8DBBF5 1.6px, transparent 1.8px)", backgroundSize: "22px 22px" }}
              aria-hidden
            />

            <div className="relative rounded-[26px] border border-[#DCEEFF] bg-white p-5 shadow-[0_20px_60px_rgba(11,31,65,0.08)] sm:p-8">
              <div className="flex items-center gap-4">
                <span className="h-[2.5px] w-12 rounded-full bg-brand-blue" />
                <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand-blue sm:text-[14px]">
                  Tailored Multi-Role Interfaces
                </span>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
                {ROLES.map(({ icon: I, title, desc, card, chip, ink }) => (
                  <div
                    key={title}
                    className={`group flex min-h-[128px] items-center gap-4 rounded-[18px] border p-5 transition-transform duration-300 hover:-translate-y-0.5 ${card}`}
                  >
                    <span className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[16px] ${chip}`}>
                      <I className={`h-7 w-7 ${ink}`} fill="currentColor" fillOpacity={0.2} strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[19px] font-bold text-brand-navy">{title}</p>
                      <p className="mt-1 text-[15px] leading-[1.4] text-[#526987]">{desc}</p>
                    </div>
                    <span
                      className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full ${chip} ${ink} transition-transform duration-300 group-hover:translate-x-0.5`}
                      aria-hidden
                    >
                      <ArrowRight className="h-5 w-5" strokeWidth={2.4} />
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-[#EEF3FA] pt-5">
                <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#EAF3FF]">
                  <Sparkles className="h-5 w-5 text-brand-blue" strokeWidth={2.2} />
                </span>
                <p className="text-[16px] text-[#526987] sm:text-[17px]">
                  Interfaces built for everyday people, not just technical administrators.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: copy */}
          <Reveal delay={0.1} className="order-1 min-w-0 xl:order-2">
            <span className="inline-flex items-center gap-3.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3FF] text-[14px] font-bold text-brand-blue">05</span>
              <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-brand-blue">Human-Centered UX</span>
            </span>

            <div className="relative mt-6 inline-block pr-24">
              <h2 className="font-display text-[48px] font-extrabold leading-[0.97] tracking-[-0.03em] text-brand-navy sm:text-[64px] xl:text-[clamp(58px,4.4vw,76px)]">
                <span className="block">Usability</span>
                <span className="relative block text-brand-blue">Focus</span>
              </h2>
              {/* hand-drawn arrow */}
              <svg viewBox="0 0 90 130" className="pointer-events-none absolute -top-2 right-0 h-[110px] w-[76px]" aria-hidden>
                <path d="M40 6 C84 22 86 86 20 108" fill="none" stroke="#7FB6FF" strokeWidth="3" strokeLinecap="round" opacity=".7" />
                <path d="M34 96 L20 108 L38 112" fill="none" stroke="#7FB6FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
              </svg>
              {/* swoosh under "Focus" */}
              <svg viewBox="0 0 400 30" className="pointer-events-none absolute -bottom-3 left-0 h-[22px] w-[110%]" aria-hidden>
                <path d="M4 22 C120 6 260 4 396 12" fill="none" stroke="#9BCBFF" strokeWidth="5" strokeLinecap="round" opacity=".6" />
              </svg>
            </div>

            <p className="mt-8 max-w-[560px] text-[18px] leading-[1.5] text-[#526987] sm:text-[20px]">
              Interfaces and workflows are designed for real users, including non-technical operational staff.
            </p>

            <ul className="mt-8 space-y-6">
              {FEATURES.map(({ icon: I, title, desc }) => (
                <li key={title} className="flex items-center gap-5">
                  <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#EAF3FF]">
                    <I className="h-7 w-7 text-brand-blue" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="font-display text-[18px] font-bold text-brand-navy">{title}</p>
                    <p className="mt-1 text-[16px] leading-[1.45] text-[#526987]">{desc}</p>
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
