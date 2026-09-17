"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, MapPin, ShieldCheck } from "lucide-react";

export default function HeroDashboard() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full select-none">
      {/* 
        =======================================================================
        3D ISOMETRIC DIGITAL-TWIN SCENE IMAGE
        =======================================================================
      */}
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src="/hero/hero-scene.jpg"
          alt="Maaptrix Connected School Transportation Digital Twin Scene"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 68vw"
          className="object-cover object-[left_top] scale-100 transform-gpu"
        />
        {/* Subtle top edge soft fade into pure white background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white via-white/40 to-transparent z-10" />
      </div>

      {/* 
        =======================================================================
        BLUEPRINT & DIGITAL CUBE WIREFRAME OVERLAYS
        =======================================================================
      */}

      {/* Blueprint 1: CONNECTED SCHOOLS SAFER COMMUNITIES (Transparent Glass Polygon Panel) */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pointer-events-none absolute left-[12%] top-[6%] z-20 hidden sm:block"
      >
        <div className="relative">
          {/* Faint Blueprint Projection Ray Lines radiating outwards */}
          <svg
            viewBox="0 0 240 260"
            className="absolute -top-10 -left-12 w-[220px] h-[240px] text-brand-blue/30 pointer-events-none"
            fill="none"
          >
            {/* Extended isometric projection lines */}
            <line x1="50" y1="50" x2="10" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="170" y1="40" x2="230" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="180" x2="10" y2="220" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="170" y1="190" x2="230" y2="240" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* Glass-Style Isometric Blueprint Card */}
          <div
            className="relative flex flex-col items-center justify-center rounded-[14px] border border-cyan-400/40 bg-gradient-to-b from-white/80 via-white/50 to-white/25 px-5 py-4 shadow-[0_8px_32px_-4px_rgba(20,125,255,0.18)] backdrop-blur-md"
            style={{
              clipPath: "polygon(14% 0%, 86% 0%, 100% 18%, 100% 82%, 86% 100%, 14% 100%, 0% 82%, 0% 18%)",
              minWidth: "125px",
              minHeight: "145px",
            }}
          >
            {/* 3D Isometric Wireframe Cube Icon */}
            <div className="mb-2">
              <svg viewBox="0 0 36 40" className="h-6 w-6 text-brand-blue" fill="none">
                {/* Isometric Cube Faces */}
                <polygon points="18,3 33,11 18,19 3,11" stroke="currentColor" strokeWidth="1.8" fill="rgba(20,125,255,0.08)" />
                <polygon points="3,11 18,19 18,37 3,29" stroke="currentColor" strokeWidth="1.8" fill="rgba(20,125,255,0.04)" />
                <polygon points="33,11 18,19 18,37 33,29" stroke="currentColor" strokeWidth="1.8" fill="rgba(20,125,255,0.12)" />
                {/* Inner Cube Matrix nodes */}
                <circle cx="18" cy="19" r="2" fill="currentColor" />
                <line x1="18" y1="9" x2="18" y2="15" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 1" />
                <line x1="10" y1="24" x2="16" y2="21" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 1" />
                <line x1="26" y1="24" x2="20" y2="21" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 1" />
              </svg>
            </div>

            {/* Typography */}
            <span className="text-[0.66rem] font-extrabold uppercase tracking-[0.18em] text-brand-blue leading-none">
              Connected
            </span>
            <div className="mt-1.5 flex flex-col items-center text-center text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-brand-navy/70 leading-tight">
              <span>Schools</span>
              <span>Safer</span>
              <span>Communities</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/*
        =======================================================================
        3 FLOATING PRODUCT CALLOUTS
        =======================================================================
      */}

      {/* CALLOUT 1: LIVE GPS / Vehicle Tracking (Positioned directly over Yellow Bus) */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute left-[20%] top-[52%] z-30 sm:left-[21%] sm:top-[52%] lg:left-[21%] lg:top-[52%]"
      >
        <div className="group relative flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/98 py-1.5 pl-3 pr-4 shadow-[0_8px_24px_-4px_rgba(11,31,65,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-105">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 rounded-full bg-emerald-500/40 animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <div className="leading-tight">
            <span className="block text-[0.58rem] font-bold uppercase tracking-wider text-brand-navy/60">
              Live GPS
            </span>
            <span className="block text-[0.76rem] font-bold text-brand-navy">
              Vehicle Tracking
            </span>
          </div>
        </div>

        {/* Stem Anchor Line pointing down towards bus roof */}
        <div className="mx-auto mt-0.5 flex flex-col items-center">
          <div className="h-5 w-[1.5px] bg-gradient-to-b from-brand-blue to-brand-blue/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-xs" />
        </div>
      </motion.div>

      {/* CALLOUT 2: ETA / 06 min · Next Stop (Positioned on the Route Curve) */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute left-[45%] top-[40%] z-30 sm:left-[46%] sm:top-[40%] lg:left-[46%] lg:top-[40%]"
      >
        <div className="group relative flex items-center gap-2.5 rounded-full border border-brand-blue/20 bg-white/98 py-1.5 pl-2.5 pr-4 shadow-[0_8px_24px_-4px_rgba(20,125,255,0.2)] backdrop-blur-md transition-all duration-300 hover:scale-105">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-white shadow-xs">
            <Clock className="h-3 w-3" />
          </span>
          <div className="leading-tight">
            <span className="block text-[0.58rem] font-bold uppercase tracking-wider text-brand-blue">
              ETA
            </span>
            <span className="block text-[0.76rem] font-bold text-brand-navy">
              06 min <span className="font-normal text-brand-navy/65">· Next Stop</span>
            </span>
          </div>
        </div>

        {/* Teardrop Location Anchor Stem */}
        <div className="mx-auto mt-0.5 flex flex-col items-center">
          <div className="h-5 w-[1.5px] bg-brand-blue" />
          <MapPin className="h-3.5 w-3.5 text-brand-blue fill-brand-blue" />
        </div>
      </motion.div>

      {/* CALLOUT 3: STUDENT SAFETY / Protected (Positioned above School Entrance) */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute right-[12%] top-[10%] z-30 sm:right-[13%] sm:top-[10%] lg:right-[13%] lg:top-[10%]"
      >
        <div className="group relative flex items-center gap-2.5 rounded-full border border-emerald-200/80 bg-white/98 py-1.5 pl-2.5 pr-4 shadow-[0_8px_24px_-4px_rgba(16,185,129,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-105">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <div className="leading-tight">
            <span className="block text-[0.58rem] font-bold uppercase tracking-wider text-emerald-700">
              Student Safety
            </span>
            <span className="block text-[0.76rem] font-bold text-brand-navy">
              Protected
            </span>
          </div>
        </div>

        {/* Anchor Line pointing towards school entrance */}
        <div className="mx-auto mt-0.5 flex flex-col items-center">
          <div className="h-6 w-[1.5px] bg-gradient-to-b from-emerald-500/70 to-emerald-500/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </div>
      </motion.div>
    </div>
  );
}
