"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BarChart3, Clock, ShieldCheck } from "lucide-react";

export default function HeroDashboard() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/10.2] sm:aspect-[16/9.8] lg:aspect-[16/9.6] xl:aspect-[16/9.3] min-h-[360px] sm:min-h-[440px] lg:min-h-[490px] xl:min-h-[540px] select-none">
      {/* 
        =======================================================================
        1. VIBRANT SKY-BLUE AMBIENT GLOW HALO BEHIND SCHOOL SCENE
        =======================================================================
      */}
      <div className="pointer-events-none absolute -inset-3 sm:-inset-5 -z-10 rounded-[36px] bg-gradient-to-tr from-[#1677FF]/20 via-[#A9DCFF]/50 to-[#C7E8FF]/60 blur-2xl opacity-90" />
      <div className="pointer-events-none absolute -left-10 top-1/4 -z-10 h-64 w-64 rounded-full bg-[#A9DCFF]/60 blur-3xl" />

      {/* 
        =======================================================================
        2. 3D ISOMETRIC DIGITAL-TWIN SCENE IMAGE CONTAINER
        =======================================================================
      */}
      <div className="relative h-full w-full overflow-hidden rounded-[20px] sm:rounded-[28px] border border-[#BDE3FF] bg-gradient-to-br from-[#D7EEFF] via-[#E4F4FF] to-[#EFF8FF] shadow-[0_20px_50px_-12px_rgba(20,125,255,0.22)]">
        {/* 
          Framing adjustment: object-[72%_center] scale-[1.16] shifts the detailed
          school campus, yellow bus, and roads leftward, cropping out the baked-in
          white pixels on the left of the raw JPG and filling the container with rich content.
        */}
        <Image
          src="/hero/hero-scene.jpg"
          alt="Maaptrix Connected School Campus Digital Twin Scene"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 58vw"
          className="object-cover object-[72%_center] transform-gpu scale-[1.16]"
        />

        {/* Soft sky-blue atmospheric edge integration (NO pure white overlays) */}
        {/* Left edge sky-blue atmospheric blend */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-[#D7EEFF]/60 via-[#E4F4FF]/20 to-transparent z-10" />

        {/* Overall subtle sky-blue atmospheric tint */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#1677FF]/5 via-transparent to-[#38BDF8]/8 z-10" />

        {/* Bottom edge soft sky blend */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-[#D7EEFF]/70 via-[#E4F4FF]/20 to-transparent z-10" />
      </div>

      {/* 
        =======================================================================
        3. FLOATING BADGES & INTERACTIVE MAP OVERLAYS
        =======================================================================
      */}

      {/* 1. CONNECTED SCHOOLS SAFER COMMUNITIES (Top-Left Glassmorphic Polygon Badge) */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pointer-events-none absolute left-[2%] top-[3%] sm:left-[3%] sm:top-[4%] z-20 hidden sm:block"
      >
        <div className="relative">
          {/* Faint Projection Ray Lines */}
          <svg
            viewBox="0 0 240 260"
            className="absolute -top-8 -left-10 w-[200px] h-[220px] text-brand-blue/35 pointer-events-none"
            fill="none"
          >
            <line x1="50" y1="50" x2="10" y2="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="170" y1="40" x2="230" y2="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="50" y1="180" x2="10" y2="220" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="170" y1="190" x2="230" y2="240" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
          </svg>

          {/* Glass-Style Isometric Card with Sky-Tinted Background */}
          <div
            className="relative flex flex-col items-center justify-center rounded-[14px] border border-cyan-400/50 bg-gradient-to-b from-white/95 via-[#EFF8FF]/90 to-[#D7EEFF]/80 px-4 py-3 sm:px-5 sm:py-4 shadow-[0_8px_32px_-4px_rgba(20,125,255,0.25)] backdrop-blur-md"
            style={{
              clipPath: "polygon(14% 0%, 86% 0%, 100% 18%, 100% 82%, 86% 100%, 14% 100%, 0% 82%, 0% 18%)",
              minWidth: "120px",
              minHeight: "136px",
            }}
          >
            {/* 3D Isometric Wireframe Cube Icon */}
            <div className="mb-1.5">
              <svg viewBox="0 0 36 40" className="h-5.5 w-5.5 text-brand-blue" fill="none">
                <polygon points="18,3 33,11 18,19 3,11" stroke="currentColor" strokeWidth="1.8" fill="rgba(20,125,255,0.15)" />
                <polygon points="3,11 18,19 18,37 3,29" stroke="currentColor" strokeWidth="1.8" fill="rgba(20,125,255,0.08)" />
                <polygon points="33,11 18,19 18,37 33,29" stroke="currentColor" strokeWidth="1.8" fill="rgba(20,125,255,0.22)" />
                <circle cx="18" cy="19" r="2" fill="currentColor" />
                <line x1="18" y1="9" x2="18" y2="15" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 1" />
                <line x1="10" y1="24" x2="16" y2="21" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 1" />
                <line x1="26" y1="24" x2="20" y2="21" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 1" />
              </svg>
            </div>

            {/* Typography */}
            <span className="text-[0.62rem] sm:text-[0.66rem] font-extrabold uppercase tracking-[0.18em] text-brand-blue leading-none">
              Connected
            </span>
            <div className="mt-1 flex flex-col items-center text-center text-[0.52rem] sm:text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-brand-navy/80 leading-tight">
              <span>Schools</span>
              <span>Safer</span>
              <span>Communities</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. LIVE GPS / Vehicle Tracking (Positioned above the Yellow Bus) */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute left-[22%] sm:left-[24%] lg:left-[25%] top-[56%] sm:top-[58%] z-30"
      >
        <div className="group relative flex items-center gap-2 sm:gap-2.5 rounded-full border border-[#BDE3FF] bg-white/98 py-1.5 pl-2.5 sm:pl-3 pr-3.5 sm:pr-4 shadow-[0_8px_24px_-4px_rgba(11,31,65,0.22)] backdrop-blur-md transition-all duration-300 hover:scale-105">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 rounded-full bg-emerald-500/40 animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <div className="leading-tight">
            <span className="block text-[0.54rem] sm:text-[0.58rem] font-bold uppercase tracking-wider text-brand-navy/60">
              Live GPS
            </span>
            <span className="block text-[0.7rem] sm:text-[0.76rem] font-bold text-brand-navy">
              Vehicle Tracking
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3. ETA / 06 min · Next Stop (Positioned on the Route Curve Approaching Campus) */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute left-[44%] sm:left-[47%] lg:left-[48%] top-[44%] sm:top-[46%] z-30"
      >
        <div className="group relative flex items-center gap-2 sm:gap-2.5 rounded-full border border-brand-blue/30 bg-white/98 py-1.5 pl-2 sm:pl-2.5 pr-3.5 sm:pr-4 shadow-[0_8px_24px_-4px_rgba(20,125,255,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105">
          <span className="flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-brand-blue text-white shadow-xs">
            <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          </span>
          <div className="leading-tight">
            <span className="block text-[0.54rem] sm:text-[0.58rem] font-bold uppercase tracking-wider text-brand-blue">
              ETA
            </span>
            <span className="block text-[0.7rem] sm:text-[0.76rem] font-bold text-brand-navy">
              06 min <span className="font-normal text-brand-navy/65">· Next Stop</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* 4. STUDENT SAFETY / Protected (Positioned above School Entrance) */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute right-[8%] sm:right-[10%] lg:right-[12%] top-[8%] sm:top-[10%] z-30"
      >
        <div className="group relative flex items-center gap-2 sm:gap-2.5 rounded-full border border-emerald-200/90 bg-white/98 py-1.5 pl-2 sm:pl-2.5 pr-3.5 sm:pr-4 shadow-[0_8px_24px_-4px_rgba(16,185,129,0.22)] backdrop-blur-md transition-all duration-300 hover:scale-105">
          <span className="flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
            <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.4} />
          </span>
          <div className="leading-tight">
            <span className="block text-[0.54rem] sm:text-[0.58rem] font-bold uppercase tracking-wider text-emerald-700">
              Student Safety
            </span>
            <span className="block text-[0.7rem] sm:text-[0.76rem] font-bold text-brand-navy">
              Protected
            </span>
          </div>
        </div>
      </motion.div>

      {/* 5. REAL-TIME INSIGHTS FOR SAFER JOURNEYS (Lower-Right Card) */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.55 }}
        className="absolute right-[3%] bottom-[3%] sm:right-[4%] sm:bottom-[4%] z-30"
      >
        <div className="group flex items-center gap-2.5 sm:gap-3.5 rounded-[16px] sm:rounded-[18px] border border-[#BDE3FF] bg-white/98 p-2.5 sm:px-4 sm:py-3 shadow-[0_12px_32px_-6px_rgba(11,31,65,0.22)] backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
          <div className="flex h-7.5 w-7.5 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
            <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <h4 className="text-[0.72rem] sm:text-[0.82rem] font-bold text-brand-navy leading-snug">
              Real-Time Insights
            </h4>
            <p className="text-[0.62rem] sm:text-[0.68rem] text-slate-500 font-medium">
              for Safer Journeys
            </p>
          </div>
          <div className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-all ml-0.5 sm:ml-1">
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </motion.div>

    </div>
  );
}


