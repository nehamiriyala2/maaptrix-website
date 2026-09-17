"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Users } from "lucide-react";
import HeroDashboard from "./HeroDashboard";

const PILLARS = [
  { icon: ShieldCheck, label: "Safer Operations" },
  { icon: BarChart3, label: "Better Efficiency" },
  { icon: Users, label: "Happier Communities" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white pt-24 lg:pt-28 xl:pt-32 pb-12 lg:pb-16 flex items-center min-h-[calc(100vh)] lg:min-h-[720px]"
    >
      {/* 
        =======================================================================
        BACKGROUND AMBIENT ATMOSPHERE & SUBTLE BLUEPRINT GRID
        =======================================================================
      */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-[#edf4fc]/80" />

        {/* Radial mesh glow + faint route lines (barely visible, adds depth) */}
        <div className="absolute inset-0 bg-mesh-glow" />
        <div className="absolute inset-y-0 right-0 w-[65%] bg-route-lines opacity-60" />

        {/* Subtle isometric background grid in mid-ground */}
        <div
          className="absolute inset-y-0 right-0 w-[70%] opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(30deg, rgba(20, 125, 255, 0.05) 1px, transparent 1px),
              linear-gradient(150deg, rgba(20, 125, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "64px 37px",
          }}
        />

        {/* Faint ambient light glow behind school campus */}
        <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[100px]" />
        <div className="absolute right-[30%] bottom-0 h-[280px] w-[280px] rounded-full bg-brand-blue/8 blur-[90px]" />
      </div>

      {/* 
        =======================================================================
        DESKTOP IMMERSIVE SCENE LAYER (Starts cleanly below the navbar)
        =======================================================================
      */}
      <div className="pointer-events-none absolute top-20 lg:top-24 xl:top-28 bottom-0 right-0 hidden w-[64%] xl:w-[66%] 2xl:w-[67%] lg:block z-0">
        <div className="relative h-full w-full pointer-events-auto">
          <HeroDashboard />
          {/* Soft edge fades so the visual blends into the page instead of reading as a pasted rectangle */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/30 to-transparent" />
        </div>
      </div>

      {/* 
        =======================================================================
        MAIN CONTENT LAYER (Aligned with navbar logo on left)
        =======================================================================
      */}
      <div className="relative w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 z-10">
        <div className="flex flex-col lg:flex-row items-center w-full">
          
          {/* LEFT COLUMN: Editorial Copy & CTAs */}
          <div className="flex flex-col justify-center w-full max-w-[540px] xl:max-w-[570px] text-left shrink-0">
            
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand-blue sm:text-xs">
                Simple Technology. Safer Tomorrows.
              </p>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-5 font-display text-[2.75rem] sm:text-[3.4rem] lg:text-[clamp(46px,4.6vw,66px)] xl:text-[clamp(56px,5.2vw,78px)] font-extrabold leading-[1.03] tracking-[-0.04em] text-brand-navy"
            >
              Technology
              <br />
              Products Built for
              <br />
              <span className="text-brand-blue">Real-World</span>
              <br />
              Operations.
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-5 text-sm leading-[1.65] text-brand-navy/70 sm:text-base lg:text-[0.98rem] xl:text-[1.02rem] max-w-[480px]"
            >
              Maaptrix designs, develops, operates and continuously improves its
              own digital products, offered through subscription-based models.
            </motion.p>

            {/* 4. Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 rounded-[11px] bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_-4px_rgba(11,31,65,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-[0_10px_24px_-6px_rgba(20,125,255,0.45)]"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[11px] border border-slate-200/90 bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-brand-blue-light/50 hover:text-brand-blue"
              >
                Request a Demo
              </a>
            </motion.div>

            {/* 5. Feature Highlights Row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-7 flex flex-nowrap items-center gap-x-5 lg:gap-x-6 text-xs font-semibold text-brand-navy/80 sm:text-[0.84rem] overflow-x-auto no-scrollbar"
            >
              {PILLARS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 shrink-0">
                  <Icon className="h-4 w-4 text-brand-blue" strokeWidth={2.2} />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* MOBILE / TABLET ONLY INLINE VISUAL SCENE */}
          <div className="relative w-full h-[380px] sm:h-[440px] rounded-[14px] overflow-hidden border border-brand-line/80 shadow-md lg:hidden mt-8">
            <HeroDashboard />
          </div>
        </div>
      </div>

      {/* 
        =======================================================================
        SCROLL TO EXPLORE INDICATOR
        =======================================================================
      */}
      <div className="pointer-events-none absolute bottom-4 left-8 sm:left-12 lg:left-16 xl:left-20 2xl:left-24 hidden flex-col items-start gap-1.5 lg:flex z-20">
        <div className="flex items-center gap-2">
          <div className="flex h-6 flex-col items-center">
            <span className="h-full w-[1.5px] bg-gradient-to-b from-brand-blue to-brand-blue/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
          </div>
          <span className="text-[0.68rem] font-medium tracking-wide text-brand-navy/50">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
