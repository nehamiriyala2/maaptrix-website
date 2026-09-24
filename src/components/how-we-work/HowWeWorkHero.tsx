"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export default function HowWeWorkHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F1F8FF] via-[#F8FBFF] to-white pt-10 sm:pt-14 pb-16 sm:pb-20 lg:pb-24 border-b border-slate-100 select-none">
      {/* Ambient background atmosphere & glowing lights */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-[520px] w-[520px] rounded-full bg-brand-blue/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-sky-400/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-500/5 blur-3xl -z-10" />

      {/* Decorative flowing wave lines in background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 -z-10">
        <svg className="h-full w-full" viewBox="0 0 1440 800" fill="none">
          <path
            d="M-100 250 C 300 150, 700 350, 1100 200 C 1300 120, 1500 180, 1600 220"
            stroke="url(#heroBgWave1)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <path
            d="M-80 320 C 320 220, 720 420, 1120 270 C 1320 190, 1520 250, 1620 290"
            stroke="url(#heroBgWave2)"
            strokeWidth="1"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="heroBgWave1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#147DFF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#067BF9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#147DFF" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="heroBgWave2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#63A8F1" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#147DFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1062B9" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="page-container">
        
        {/* ========================================================================= */}
        {/* TOP SECTION: EDITORIAL HERO & 3D WORKFLOW CANVAS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left Column: Eyebrow, Main Heading & Narrative (lg: 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#EAF4FF] border border-[#CCE5FF] px-3.5 py-1.5 shadow-2xs"
            >
              <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-brand-blue sm:text-xs">
                OUR PRODUCT APPROACH
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-5 font-display text-[2.5rem] sm:text-[3.2rem] lg:text-[3.6rem] xl:text-[4rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#181818]"
            >
              Products Built Around{" "}
              <span className="relative inline-block text-brand-blue">
                Real Problems.
                {/* Hand-drawn style decorative wave underline matching Image 2 */}
                <svg
                  className="absolute -bottom-2 left-0 w-full text-brand-blue overflow-visible pointer-events-none"
                  height="12"
                  viewBox="0 0 260 14"
                  fill="none"
                >
                  <path
                    d="M3 9.5C65 3.5 195 2.5 257 10.5"
                    stroke="#147DFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-5 text-base sm:text-lg leading-[1.7] text-slate-600 max-w-[540px] font-normal"
            >
              We identify recurring operational challenges and engineer dependable
              software solutions designed for everyday reliability.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-blue hover:shadow-md hover:-translate-y-0.5"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy shadow-2xs transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue-light/40 hover:-translate-y-0.5"
              >
                Request a Demo
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 3D Product & Lifecycle Ecosystem Visual Canvas (lg: 6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
            <Reveal delay={0.15}>
              <div className="relative w-full max-w-[540px] mx-auto p-4 sm:p-6 select-none">
                
                {/* SVG Connected Flowing Path & Glowing Nodes */}
                <svg
                  className="absolute inset-0 h-full w-full pointer-events-none z-10"
                  viewBox="0 0 520 380"
                  fill="none"
                >
                  {/* Glowing connector line from Real Problems -> Dashboard -> Solutions / Impact */}
                  <path
                    d="M 120 120 C 180 120, 180 210, 240 210 S 340 180, 410 110"
                    stroke="#147DFF"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    opacity="0.85"
                  />
                  <path
                    d="M 270 240 C 330 250, 360 280, 420 290"
                    stroke="#067BF9"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.75"
                  />

                  {/* Glowing Circular Nodes */}
                  <circle cx="120" cy="120" r="5" fill="#147DFF" stroke="#FFFFFF" strokeWidth="2" className="animate-pulse" />
                  <circle cx="210" cy="180" r="4.5" fill="#067BF9" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="330" cy="195" r="4.5" fill="#63A8F1" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="410" cy="110" r="5" fill="#5CA6F6" stroke="#FFFFFF" strokeWidth="2" className="animate-pulse" />
                  <circle cx="420" cy="290" r="5" fill="#1062B9" stroke="#FFFFFF" strokeWidth="2" className="animate-pulse" />
                </svg>

                {/* Floating Badge 1: Real Problems (Left) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-2 sm:left-4 top-16 sm:top-20 z-20 flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-[0_12px_28px_-6px_rgba(24,24,24,0.12)] border border-blue-100"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#147DFF] to-[#181818] text-white shadow-xs">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-black tracking-tight text-[#181818] leading-none">
                      Real
                    </span>
                    <span className="block text-[0.72rem] text-slate-500 font-semibold mt-0.5 leading-none">
                      Problems
                    </span>
                  </div>
                </motion.div>

                {/* Central Floating 3D SaaS Dashboard Interface Window */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="relative z-15 mx-auto mt-4 w-[290px] sm:w-[340px] rounded-2xl bg-white/90 backdrop-blur-xl border border-white p-4 shadow-[0_24px_50px_-12px_rgba(20,125,255,0.18)] ring-1 ring-blue-100/80"
                >
                  {/* Top Bar with 3 Dots */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#1062B9]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0B7CF5]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#147DFF]" />
                    </div>
                    <span className="text-[0.65rem] font-mono font-bold tracking-wider text-slate-400 uppercase">
                      MAAPTRIX ENGINE
                    </span>
                  </div>

                  {/* Dashboard Content: Sidebar + 3D Bar Graph */}
                  <div className="mt-3.5 grid grid-cols-12 gap-3 items-center">
                    {/* Mini Sidebar */}
                    <div className="col-span-3 space-y-1.5 border-r border-slate-100 pr-2">
                      <div className="h-4 rounded-md bg-brand-blue-light border border-brand-blue/20" />
                      <div className="h-3 rounded-md bg-slate-100" />
                      <div className="h-3 rounded-md bg-slate-100" />
                      <div className="h-3 rounded-md bg-slate-50" />
                    </div>

                    {/* Main Chart Area with 3D Blue Bars */}
                    <div className="col-span-9 pl-1">
                      <div className="flex items-end justify-between gap-2 h-24 pt-3 px-2 border-b border-slate-100">
                        {/* Bar 1 */}
                        <div className="w-1/3 flex flex-col items-center gap-1.5">
                          <div className="w-full h-12 rounded-t-md bg-gradient-to-t from-[#B8DCFF] to-[#CCE5FF] shadow-xs" />
                          <span className="text-[0.6rem] font-bold text-slate-400">01</span>
                        </div>
                        {/* Bar 2 */}
                        <div className="w-1/3 flex flex-col items-center gap-1.5">
                          <div className="w-full h-18 rounded-t-md bg-gradient-to-t from-[#147DFF] to-[#60A5FA] shadow-xs" />
                          <span className="text-[0.6rem] font-bold text-brand-blue">02</span>
                        </div>
                        {/* Bar 3 */}
                        <div className="w-1/3 flex flex-col items-center gap-1.5">
                          <div className="w-full h-22 rounded-t-md bg-gradient-to-t from-[#181818] to-[#147DFF] shadow-xs" />
                          <span className="text-[0.6rem] font-bold text-brand-navy">03</span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[0.62rem] text-slate-500 font-medium px-1">
                        <span>Reliability Metric</span>
                        <span className="text-brand-blue font-bold">Continuous</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Practical Solutions (Top Right) */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute right-0 sm:right-2 top-8 sm:top-10 z-20 flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-[0_12px_28px_-6px_rgba(92,166,246,0.14)] border border-sky-100"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#5CA6F6] to-[#63A8F1] text-white shadow-xs">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-black tracking-tight text-[#181818] leading-none">
                      Practical
                    </span>
                    <span className="block text-[0.72rem] text-slate-500 font-semibold mt-0.5 leading-none">
                      Solutions
                    </span>
                  </div>
                </motion.div>

                {/* Floating Badge 3: Long-term Impact (Bottom Right) */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 z-20 flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-[0_12px_28px_-6px_rgba(16,98,185,0.14)] border border-sky-100"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1062B9] to-[#4E4E4E] text-white shadow-xs">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-black tracking-tight text-[#181818] leading-none">
                      Long-term
                    </span>
                    <span className="block text-[0.72rem] text-slate-500 font-semibold mt-0.5 leading-none">
                      Impact
                    </span>
                  </div>
                </motion.div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* THREE CONNECTED PROCESS CARDS (IMAGE 2 TARGET DESIGN) */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18 lg:mt-20 relative">
          
          {/* Subtle Connector Lines between Cards on Desktop */}
          <div className="hidden lg:block pointer-events-none absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10">
            {/* Step 1 -> 2 Connector Node */}
            <div className="absolute left-[32.5%] -translate-x-1/2 -translate-y-1/2 top-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-white border border-blue-200 shadow-md flex items-center justify-center text-brand-blue font-bold text-xs">
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            {/* Step 2 -> 3 Connector Node */}
            <div className="absolute left-[65.8%] -translate-x-1/2 -translate-y-1/2 top-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-white border border-sky-200 shadow-md flex items-center justify-center text-sky-600 font-bold text-xs">
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* ------------------------------------------------------------------- */}
            {/* CARD 01: UNDERSTAND THE PROBLEM (BLUE ACCENT) */}
            {/* ------------------------------------------------------------------- */}
            <Reveal delay={0.05}>
              <div className="group relative h-full rounded-[28px] border border-[#D6EAFF] bg-gradient-to-b from-[#F5FAFF] via-white to-white p-7 sm:p-8 shadow-[0_12px_36px_-8px_rgba(20,125,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-10px_rgba(20,125,255,0.16)] hover:border-brand-blue/50 flex flex-col justify-between">
                <div>
                  {/* Top Row: Stage Number & 3D Document/Glass Illustration */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#70B4FF] leading-none block">
                        01
                      </span>
                      <span className="mt-1.5 inline-block text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-brand-blue">
                        DISCOVERY &amp; NEEDS
                      </span>
                    </div>

                    {/* Custom 3D Document + Magnifying Glass SVG Illustration */}
                    <div className="h-20 w-24 sm:h-24 sm:w-28 shrink-0 -mt-2 -mr-1">
                      <svg viewBox="0 0 140 110" className="h-full w-full select-none" fill="none">
                        <ellipse cx="65" cy="98" rx="45" ry="8" fill="#147DFF" fillOpacity="0.08" />
                        
                        <g transform="rotate(-4 60 52)">
                          <rect x="25" y="16" width="60" height="76" rx="10" fill="#EBF4FE" stroke="#D3E7FC" strokeWidth="1.2" />
                          <rect x="20" y="12" width="62" height="78" rx="10" fill="url(#card1DocGrad)" stroke="#CCE5FF" strokeWidth="1.5" />
                          <path d="M 66,12 L 82,28 L 66,28 Z" fill="#D8ECFF" />
                          <rect x="29" y="25" width="28" height="4" rx="2" fill="#147DFF" />
                          <rect x="29" y="35" width="44" height="3" rx="1.5" fill="#BFDBFE" />
                          <rect x="29" y="43" width="38" height="3" rx="1.5" fill="#BFDBFE" />
                          <rect x="29" y="51" width="46" height="3" rx="1.5" fill="#BFDBFE" />
                          <rect x="29" y="59" width="32" height="3" rx="1.5" fill="#DBEAFE" />
                          <rect x="29" y="67" width="40" height="3" rx="1.5" fill="#DBEAFE" />
                        </g>

                        <g className="filter drop-shadow-[0_8px_16px_rgba(20,125,255,0.25)]">
                          <path d="M 88,72 L 116,98" stroke="#181818" strokeWidth="8" strokeLinecap="round" />
                          <path d="M 88,72 L 116,98" stroke="#147DFF" strokeWidth="4.5" strokeLinecap="round" />
                          <circle cx="116" cy="98" r="4.5" fill="#181818" />
                          <circle cx="72" cy="56" r="23" fill="none" stroke="url(#card1RimGrad)" strokeWidth="4.5" />
                          <circle cx="72" cy="56" r="20" fill="url(#card1LensGrad)" fillOpacity="0.75" />
                          <path d="M 60,42 A 16 16 0 0 1 82,44" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9" />
                          <circle cx="62" cy="68" r="2" fill="#FFFFFF" opacity="0.8" />
                        </g>

                        <defs>
                          <linearGradient id="card1DocGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#F2F8FF" />
                          </linearGradient>
                          <linearGradient id="card1RimGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="50%" stopColor="#147DFF" />
                            <stop offset="100%" stopColor="#181818" />
                          </linearGradient>
                          <linearGradient id="card1LensGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                            <stop offset="50%" stopColor="#CFEAFF" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.35" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-[#181818]">
                    Understand the Problem
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Understand recurring operational problems and the people affected by them.
                  </p>

                  {/* 3 Key Checkpoints */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Operational friction points</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>User role workflows</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Real environment constraints</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Link & Circular Action Button */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#stage-01"
                    className="text-xs font-bold text-brand-blue hover:text-brand-navy transition-colors flex items-center gap-1.5"
                  >
                    Explore Stage Details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#stage-01"
                    aria-label="Explore Stage 01"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-blue-200 text-brand-blue shadow-xs transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* ------------------------------------------------------------------- */}
            {/* CARD 02: BUILD THE PRODUCT (PURPLE/INDIGO ACCENT) */}
            {/* ------------------------------------------------------------------- */}
            <Reveal delay={0.1}>
              <div className="group relative h-full rounded-[28px] border border-[#DDEDFE] bg-gradient-to-b from-[#FAF8FF] via-white to-white p-7 sm:p-8 shadow-[0_12px_36px_-8px_rgba(92,166,246,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-10px_rgba(92,166,246,0.16)] hover:border-sky-400 flex flex-col justify-between">
                <div>
                  {/* Top Row: Stage Number & 3D Code Window Illustration */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#8BC1FA] leading-none block">
                        02
                      </span>
                      <span className="mt-1.5 inline-block text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-sky-600">
                        DESIGN &amp; ENGINEERING
                      </span>
                    </div>

                    {/* Custom 3D Code Window + Floating UI Panels SVG */}
                    <div className="h-20 w-24 sm:h-24 sm:w-28 shrink-0 -mt-2 -mr-1">
                      <svg viewBox="0 0 140 110" className="h-full w-full select-none" fill="none">
                        <ellipse cx="68" cy="98" rx="46" ry="8" fill="#5CA6F6" fillOpacity="0.08" />

                        <g transform="translate(12, 18)">
                          <rect x="0" y="0" width="58" height="68" rx="10" fill="#F3F9FF" stroke="#D6E9FE" strokeWidth="1.2" />
                          <circle cx="12" cy="12" r="3.5" fill="#5CA6F6" />
                          <line x1="20" y1="12" x2="48" y2="12" stroke="#B5D8FD" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="10" y1="24" x2="48" y2="24" stroke="#E0E7FF" strokeWidth="2" strokeLinecap="round" />
                          <line x1="10" y1="32" x2="38" y2="32" stroke="#E0E7FF" strokeWidth="2" strokeLinecap="round" />
                          <line x1="10" y1="40" x2="44" y2="40" stroke="#E0E7FF" strokeWidth="2" strokeLinecap="round" />
                        </g>

                        <g className="filter drop-shadow-[0_10px_20px_rgba(51,51,51,0.22)]" transform="translate(42, 10)">
                          <rect x="0" y="0" width="70" height="74" rx="12" fill="url(#card2CodeGrad)" stroke="#63A8F1" strokeWidth="1.5" />
                          <circle cx="12" cy="12" r="2.5" fill="#5AA8FB" />
                          <circle cx="20" cy="12" r="2.5" fill="#3393FA" />
                          <circle cx="28" cy="12" r="2.5" fill="#2775C9" />
                          <text x="35" y="44" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FFFFFF" fontFamily="monospace">
                            &lt;/&gt;
                          </text>
                          <line x1="14" y1="56" x2="32" y2="56" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="38" y1="56" x2="56" y2="56" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="14" y1="63" x2="46" y2="63" stroke="#8BC1FA" strokeWidth="2" strokeLinecap="round" />
                        </g>

                        <g className="filter drop-shadow-md" transform="translate(76, 58)">
                          <rect x="0" y="0" width="46" height="28" rx="8" fill="#FFFFFF" stroke="#B5D8FD" strokeWidth="1.2" />
                          <circle cx="10" cy="14" r="3.5" fill="#5CA6F6" />
                          <line x1="18" y1="11" x2="38" y2="11" stroke="#5CA6F6" strokeWidth="2" strokeLinecap="round" />
                          <line x1="18" y1="18" x2="32" y2="18" stroke="#D6E9FE" strokeWidth="1.5" strokeLinecap="round" />
                        </g>

                        <defs>
                          <linearGradient id="card2CodeGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#333333" />
                            <stop offset="50%" stopColor="#3A3A3A" />
                            <stop offset="100%" stopColor="#121212" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-[#181818]">
                    Build the Product
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Turn practical requirements into focused and usable software.
                  </p>

                  {/* 3 Key Checkpoints */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                      <span>Intuitive user interfaces</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                      <span>Reliable system architecture</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                      <span>Role-tailored accessibility</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Link & Circular Action Button */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#stage-03"
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1.5"
                  >
                    Explore Stage Details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#stage-03"
                    aria-label="Explore Stage 03"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-sky-200 text-sky-600 shadow-xs transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* ------------------------------------------------------------------- */}
            {/* CARD 03: KEEP IMPROVING (EMERALD ACCENT) */}
            {/* ------------------------------------------------------------------- */}
            <Reveal delay={0.15}>
              <div className="group relative h-full rounded-[28px] border border-[#C6DDF6] bg-gradient-to-b from-[#F2F6FB] via-white to-white p-7 sm:p-8 shadow-[0_12px_36px_-8px_rgba(16,98,185,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-10px_rgba(16,98,185,0.16)] hover:border-sky-400 flex flex-col justify-between">
                <div>
                  {/* Top Row: Stage Number & 3D Growth Chart Illustration */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#3481D3] leading-none block">
                        03
                      </span>
                      <span className="mt-1.5 inline-block text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-sky-600">
                        OPERATIONS &amp; EVOLUTION
                      </span>
                    </div>

                    {/* Custom 3D Growth Chart + Upward Arrow + Loop Badge SVG */}
                    <div className="h-20 w-24 sm:h-24 sm:w-28 shrink-0 -mt-2 -mr-1">
                      <svg viewBox="0 0 140 110" className="h-full w-full select-none" fill="none">
                        <ellipse cx="68" cy="98" rx="46" ry="8" fill="#1062B9" fillOpacity="0.08" />

                        <g transform="translate(18, 14)">
                          <rect x="12" y="44" width="16" height="34" rx="4" fill="url(#barGrad1)" stroke="#BAE6FD" strokeWidth="1" />
                          <rect x="36" y="28" width="16" height="50" rx="4" fill="url(#barGrad2)" stroke="#93C5FD" strokeWidth="1" />
                          <rect x="60" y="10" width="16" height="68" rx="4" fill="url(#barGrad3)" stroke="#60A5FA" strokeWidth="1" />
                        </g>

                        <g className="filter drop-shadow-[0_6px_14px_rgba(16,98,185,0.35)]">
                          <path
                            d="M 22,66 C 45,62 65,40 92,18"
                            stroke="url(#arrowGrad)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <polygon points="98,13 84,16 93,28" fill="#1062B9" />
                        </g>

                        <g className="filter drop-shadow-md" transform="translate(86, 56)">
                          <rect x="0" y="0" width="34" height="34" rx="10" fill="#FFFFFF" stroke="#A7CCF3" strokeWidth="1.5" />
                          <circle cx="17" cy="17" r="13" fill="#ECF4FD" />
                          <path
                            d="M 17,9 A 8 8 0 1 1 10,18"
                            stroke="#1062B9"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <polygon points="10,13 7,19 14,19" fill="#1062B9" />
                        </g>

                        <defs>
                          <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#BAE6FD" />
                            <stop offset="100%" stopColor="#E0F2FE" />
                          </linearGradient>
                          <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#60A5FA" />
                            <stop offset="100%" stopColor="#BAE6FD" />
                          </linearGradient>
                          <linearGradient id="barGrad3" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563EB" />
                            <stop offset="100%" stopColor="#60A5FA" />
                          </linearGradient>
                          <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#3481D3" />
                            <stop offset="100%" stopColor="#4E4E4E" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-[#181818]">
                    Keep Improving
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Operate, support and continuously improve products over time.
                  </p>

                  {/* 3 Key Checkpoints */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                      <span>Direct customer support</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                      <span>Continuous enhancement cycles</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                      <span>Long-term roadmap stewardship</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Link & Circular Action Button */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#stage-06"
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1.5"
                  >
                    Explore Stage Details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#stage-06"
                    aria-label="Explore Stage 06"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-sky-200 text-sky-600 shadow-xs transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
}

