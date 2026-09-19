"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Users } from "lucide-react";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#EFF8FF] via-[#DBEFFF] via-45% to-[#E4F4FF] pt-20 sm:pt-22 lg:pt-24 pb-7 sm:pb-8 lg:pb-10 flex items-center select-none"
    >
      {/* 
        =======================================================================
        1. FULL-WIDTH ATMOSPHERIC SKY-BLUE BACKGROUND LAYERS (NO WHITE DEAD ZONE)
        =======================================================================
      */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Continuous Full-Width Sky-Blue Atmospheric Blends */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_25%,rgba(239,248,255,0.7)_0%,rgba(215,238,255,0.4)_50%,transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_45%,rgba(175,225,255,0.55)_0%,rgba(215,238,255,0.4)_40%,transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(160,220,255,0.45)_0%,rgba(215,238,255,0.65)_45%,rgba(240,248,255,0.2)_80%)]" />

        {/* Center atmospheric bridge glow — completely eliminates any white patch between text and image */}
        <div className="absolute left-[30%] sm:left-[35%] top-[15%] h-[600px] w-[600px] rounded-full bg-[#C7E8FF]/85 blur-[120px]" />
        <div className="absolute left-[45%] top-[30%] h-[450px] w-[450px] rounded-full bg-[#A9DCFF]/60 blur-[100px]" />

        {/* Left atmospheric ambient glow */}
        <div className="absolute -left-20 top-10 h-[500px] w-[500px] rounded-full bg-[#D7EEFF]/80 blur-[120px]" />

        {/* Right school visual halo glow */}
        <div className="absolute -right-20 top-1/4 h-[650px] w-[650px] rounded-full bg-[#BDE3FF]/70 blur-[130px]" />

        {/* Bottom flowing sky-blue wave glow */}
        <div className="absolute inset-x-0 -bottom-20 h-56 bg-gradient-to-t from-[#D7EEFF] via-[#C7E8FF]/50 to-transparent blur-2xl" />

        {/* Subtle enterprise tech grid pattern */}
        <div className="absolute inset-0 bg-circuit-grid opacity-30" />

        {/* Flowing atmospheric vector wave ribbons */}
        <svg
          className="absolute inset-0 h-full w-full opacity-45"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M -100,120 C 300,180 500,40 900,100 C 1300,160 1400,60 1600,80"
            stroke="url(#hero-line-grad1)"
            strokeWidth="1.6"
            strokeDasharray="4 6"
          />
          <path
            d="M -100,680 C 400,620 700,750 1100,640 C 1350,570 1500,620 1600,600"
            stroke="url(#hero-line-grad2)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="hero-line-grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1677FF" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#1677FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1677FF" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="hero-line-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#1677FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 
        =======================================================================
        2. COHESIVE TWO-COLUMN HERO COMPOSITION
        =======================================================================
      */}
      <div className="relative w-full page-container z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-12">

          {/* LEFT COLUMN: Editorial Copy, CTAs & Benefits (5 cols on lg) */}
          <div className="flex flex-col justify-center text-left lg:col-span-5 xl:col-span-5">
            
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand-blue sm:text-xs">
                Simple Technology. Safer Tomorrows.
              </p>
            </motion.div>

            {/* 2. Main Heading (Display Editorial Typography) */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-4 sm:mt-5 font-display text-[2.5rem] sm:text-[3.4rem] lg:text-[3.5rem] xl:text-[4.15rem] font-extrabold leading-[1.03] tracking-[-0.035em] text-brand-navy"
            >
              <span className="block">Technology</span>
              <span className="block whitespace-nowrap">Products Built for</span>
              <span className="block text-brand-blue">Real-World</span>
              <span className="block">Operations.</span>
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 sm:mt-5 text-[0.95rem] leading-[1.65] text-slate-600 sm:text-base lg:text-[1.02rem] max-w-[490px]"
            >
              Maaptrix designs, develops, operates and continuously improves its
              own digital products, offered through subscription-based models.
            </motion.p>

            {/* 4. Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 rounded-[12px] bg-brand-navy px-6 sm:px-7 py-3.5 sm:py-4 text-[0.92rem] sm:text-[0.95rem] font-semibold text-white shadow-[0_6px_20px_-4px_rgba(11,31,65,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-[0_10px_24px_-6px_rgba(20,125,255,0.45)]"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-slate-200/90 bg-white/95 px-6 sm:px-7 py-3.5 sm:py-4 text-[0.92rem] sm:text-[0.95rem] font-semibold text-brand-navy shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-brand-blue-light/50"
              >
                Request a Demo
              </a>
            </motion.div>

            {/* 5. 3 Benefit Indicators Row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-7 sm:mt-8 grid grid-cols-3 divide-x divide-slate-200/90 max-w-[480px]"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 pr-2 sm:pr-3">
                <div className="flex h-8.5 w-8.5 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                  <Shield className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </div>
                <div className="text-[0.72rem] sm:text-[0.76rem] font-bold text-brand-navy leading-tight">
                  <span>Safer</span><br /><span>Schools</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3">
                <div className="flex h-8.5 w-8.5 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                  <Users className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </div>
                <div className="text-[0.72rem] sm:text-[0.76rem] font-bold text-brand-navy leading-tight">
                  <span>Connected</span><br /><span>Communities</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 pl-2 sm:pr-0 sm:pl-3">
                <div className="flex h-8.5 w-8.5 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                  <BarChart3 className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </div>
                <div className="text-[0.72rem] sm:text-[0.76rem] font-bold text-brand-navy leading-tight">
                  <span>Smarter</span><br /><span>Operations</span>
                </div>
              </div>
            </motion.div>

            {/* 6. Bottom-Left Brand Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 sm:mt-8 flex items-center gap-3 text-[0.66rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.22em] text-slate-400"
            >
              <span className="h-px w-8 bg-slate-300" />
              <span>Empowering Schools for a Brighter Tomorrow</span>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: School Campus Visual Scene & Floating Badges (7 cols on lg) */}
          <div className="relative w-full lg:col-span-7 xl:col-span-7 flex items-center justify-center">
            <HeroDashboard />
          </div>

        </div>
      </div>

      {/* 
        =======================================================================
        3. BOTTOM SEAMLESS TRANSITION GRADIENT INTO NEXT SECTION
        =======================================================================
      */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-[#E4F4FF]/60 to-[#EFF8FF] -z-10" />
    </section>
  );
}

