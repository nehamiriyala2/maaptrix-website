"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CreditCard,
  Heart,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";

const WHY_FEATURES = [
  {
    number: "01",
    icon: Target,
    title: "Focused Solutions",
    description:
      "Purpose-built for specific operational problems, avoiding bloated, generic software suites.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Subscription Model",
    description:
      "Continuously supported, maintained, and improved through a direct subscription relationship.",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "End-to-End Ownership",
    description:
      "From planning and design through development, launch, support, and continuous enhancement.",
  },
  {
    number: "04",
    icon: Users,
    title: "Usability Focus",
    description:
      "Designed specifically for schools, drivers, and parents who interact with the system daily.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Scalable Direction",
    description:
      "Built with a long-term product roadmap in mind, evolving as operational needs mature.",
  },
];

export default function WhyMaaptrix() {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section id="why-maaptrix" className="relative overflow-hidden bg-blue-white border-y border-slate-200/60 py-7 sm:py-8 lg:py-10 select-none">
      <div className="page-container relative">
        
        {/* ========================================================================= */}
        {/* HEADER AREA */}
        {/* ========================================================================= */}
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Why Maaptrix
            </p>
          </div>
          
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[3rem] lg:leading-[1.15]">
            <span className="text-brand-navy">Built differently, </span>
            <span className="text-brand-blue">on purpose.</span>
          </h2>

          <p className="mt-3 text-base text-brand-navy/70 sm:text-lg">
            A technology product company dedicated to real-world operations.
          </p>
        </Reveal>

        {/* ========================================================================= */}
        {/* MAIN TWO-COLUMN CONTENT AREA */}
        {/* ========================================================================= */}
        <div className="mt-7 sm:mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-stretch">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT COLUMN: PRODUCT-FIRST COMPANY CARD (~46% -> 5 cols lg / 6 cols xl) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
            <Reveal className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-800/60 bg-gradient-to-br from-[#061426] via-[#091b35] to-[#040d1a] p-6 sm:p-7 lg:p-8 text-white shadow-[0_20px_50px_-12px_rgba(11,31,65,0.3)]">
                
                {/* Background Architectural Building Imagery with Layered Gradient */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-3/5 sm:w-2/3 overflow-hidden opacity-95">
                  <Image
                    src="/brand/modern_building.jpg"
                    alt="Maaptrix Modern Architecture"
                    fill
                    className="object-cover object-center scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* Subtle directional gradient so building remains visible while left text is 100% crisp */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#061426] via-[#061426]/75 via-45% to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a] via-transparent to-[#061426]/40" />
                </div>

                {/* 3D Wireframe Logo Mounted on the Building Facade */}
                <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#061426]/60 backdrop-blur-md border border-brand-blue/30 p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                    <svg viewBox="0 0 40 44" className="h-14 w-14 text-brand-blue" fill="none">
                      <polygon points="20,2 38,12 20,22 2,12" stroke="#147dff" strokeWidth="2.6" fill="rgba(20,125,255,0.25)" />
                      <polygon points="2,12 20,22 20,42 2,32" stroke="#147dff" strokeWidth="2.6" fill="rgba(20,125,255,0.15)" />
                      <polygon points="38,12 20,22 20,42 38,32" stroke="#38bdf8" strokeWidth="2.6" fill="rgba(56,189,248,0.35)" />
                      <circle cx="20" cy="22" r="2.8" fill="#38bdf8" />
                      <line x1="20" y1="8" x2="20" y2="16" stroke="#38bdf8" strokeWidth="1.6" strokeDasharray="1 1" />
                      <line x1="10" y1="28" x2="16" y2="24" stroke="#38bdf8" strokeWidth="1.6" strokeDasharray="1 1" />
                      <line x1="30" y1="28" x2="24" y2="24" stroke="#38bdf8" strokeWidth="1.6" strokeDasharray="1 1" />
                    </svg>
                  </div>
                </div>

                {/* Card Header & Philosophy Statement */}
                <div className="relative z-20 max-w-sm">
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue">
                    Core Philosophy
                  </span>

                  <h3 className="mt-2.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-[1.15]">
                    Product-First<br />Company
                  </h3>

                  <p className="mt-4 text-[0.88rem] sm:text-[0.94rem] leading-relaxed text-slate-200/90 font-normal">
                    We build and operate our own products end to end, rather than
                    one-off custom projects for hire — backed by an active, long-term
                    roadmap <span className="font-semibold text-white">behind every</span> single release.
                  </p>
                </div>

                {/* Bottom Feature Row with 3 Value Pillars */}
                <div className="relative z-20 mt-8 sm:mt-10 grid grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-5 text-center">
                  
                  {/* Pillar 1 */}
                  <div className="flex flex-col items-center gap-1.5 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue border border-brand-blue/30">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="text-[0.68rem] sm:text-xs font-bold text-white leading-tight">
                      Real Problems
                    </span>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex flex-col items-center gap-1.5 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue border border-brand-blue/30">
                      <Heart className="h-4 w-4" />
                    </div>
                    <span className="text-[0.68rem] sm:text-xs font-bold text-white leading-tight">
                      Better Operations
                    </span>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex flex-col items-center gap-1.5 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue border border-brand-blue/30">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="text-[0.68rem] sm:text-xs font-bold text-white leading-tight">
                      Stronger Communities
                    </span>
                  </div>

                </div>

              </div>
            </Reveal>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: 5 FEATURE CARDS WITH CURVED TIMELINE (~54% -> 6 cols lg / 7 cols xl) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex flex-col justify-between">
            
            {/* SVG Curved Vertical Timeline (Desktop / Tablet) */}
            <svg
              className="pointer-events-none absolute left-3.5 top-2 bottom-2 hidden h-[96%] w-10 sm:block z-10"
              viewBox="0 0 40 450"
              preserveAspectRatio="none"
            >
              {/* Smooth Wavy Curved Path */}
              <path
                d="M 20,38 C 34,75 8,115 20,154 C 32,192 8,230 20,268 C 32,306 8,344 20,382 C 30,410 14,430 20,440"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
              {/* Flowing animated dash stroke */}
              <path
                d="M 20,38 C 34,75 8,115 20,154 C 32,192 8,230 20,268 C 32,306 8,344 20,382 C 30,410 14,430 20,440"
                fill="none"
                stroke="#147dff"
                strokeWidth="2"
                strokeDasharray="6 8"
                className="animate-dash-flow"
              />

              {/* 5 Nodes on the Timeline (precisely centered on card heights) */}
              {[38, 126, 214, 302, 390].map((cy, idx) => (
                <g key={cy}>
                  <circle
                    cx="20"
                    cy={cy}
                    r={activeCard === idx ? "7" : "5"}
                    fill="#ffffff"
                    stroke="#147dff"
                    strokeWidth="3"
                    className="transition-all duration-300"
                  />
                  {activeCard === idx && (
                    <circle cx="20" cy={cy} r="10" fill="none" stroke="#147dff" strokeWidth="1" opacity="0.4" className="animate-ping" />
                  )}
                </g>
              ))}
            </svg>

            {/* List of 5 Feature Cards */}
            <div className="flex flex-col gap-3 sm:pl-10">
              {WHY_FEATURES.map((feat, idx) => {
                const IconComponent = feat.icon;
                const isActive = activeCard === idx;

                return (
                  <Reveal key={feat.number} delay={idx * 0.05}>
                    <div
                      onMouseEnter={() => setActiveCard(idx)}
                      className={`group relative flex items-center justify-between rounded-[20px] border p-3.5 sm:p-4 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-brand-blue/50 bg-white shadow-[0_12px_28px_-6px_rgba(20,125,255,0.12)] -translate-y-0.5"
                          : "border-slate-200/90 bg-white/90 shadow-2xs hover:-translate-y-0.5 hover:border-brand-blue/30 hover:shadow-md"
                      }`}
                    >
                      {/* Left Block: Number Badge + Icon + Text */}
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        
                        {/* Number Badge */}
                        <div
                          className={`flex h-8 w-8 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                            isActive
                              ? "bg-brand-blue text-white shadow-xs"
                              : "bg-brand-blue text-white"
                          }`}
                        >
                          {feat.number}
                        </div>

                        {/* Icon Container */}
                        <div className="flex h-10 w-10 sm:h-10.5 sm:w-10.5 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20 group-hover:scale-105 transition-transform">
                          <IconComponent className="h-5 w-5" />
                        </div>

                        {/* Text Details */}
                        <div className="pr-2">
                          <h4 className="text-sm sm:text-[0.95rem] font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                            {feat.title}
                          </h4>
                          <p className="mt-0.5 text-xs sm:text-[0.8rem] leading-relaxed text-slate-500">
                            {feat.description}
                          </p>
                        </div>
                      </div>

                      {/* Right Subtle Arrow */}
                      <div className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center text-slate-300 group-hover:text-brand-blue transition-colors">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM BRAND STATEMENT & SUBTLE CURVED TRANSITION */}
        {/* ========================================================================= */}
        <Reveal delay={0.2}>
          <div className="relative mt-7 sm:mt-8 pt-4 flex flex-col items-center justify-center">
            {/* Subtle bottom curve separator line */}
            <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            
            <div className="mt-4 flex items-center justify-center gap-6 sm:gap-10 text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
              <span>Good Operations</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/60" />
              <span>Brighter Communities</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
