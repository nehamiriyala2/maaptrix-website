"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Layers,
  ShieldCheck,
} from "lucide-react";

export default function HeroProductEcosystem() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/11] sm:aspect-[16/10.5] lg:aspect-[16/10] xl:aspect-[16/9.8] select-none">
      
      {/* 1. Ambient Glow Halo */}
      <div className="pointer-events-none absolute -inset-4 sm:-inset-6 -z-10 rounded-[36px] bg-gradient-to-tr from-[#147DFF]/20 via-[#A9DCFF]/40 to-[#CCE5FF]/60 blur-3xl opacity-90" />
      
      {/* 2. Main Container: Isometric Campus & Transport Ecosystem Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full overflow-hidden rounded-[26px] sm:rounded-[32px] border border-[#CCE5FF]/90 bg-gradient-to-br from-white via-[#F8FCFF] to-[#EAF4FF] shadow-[0_20px_55px_-12px_rgba(20,125,255,0.18)]"
      >
        {/* Isometric School & Transport Image */}
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/hero/hero-scene.jpg"
            alt="Maaptrix Connected School Campus and Transport Management Digital Ecosystem"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />

          {/* Left subtle soft white gradient fade to blend with hero */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
          
          {/* Subtle bottom vignette */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#181818]/20 to-transparent" />
        </div>

        {/* ===================================================================== */}
        {/* 5 FLOATING PRODUCT INFORMATION OVERLAYS */}
        {/* ===================================================================== */}

        {/* 1. Top-Left Floating Card: CONNECTED SCHOOLS SAFER COMMUNITIES */}
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-3.5 sm:left-6 top-4 sm:top-7 z-20 rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 shadow-[0_12px_28px_-6px_rgba(24,24,24,0.15)]"
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue mb-1">
              <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            <span className="text-[0.55rem] sm:text-[0.62rem] font-bold text-brand-blue uppercase tracking-wider block">
              CONNECTED
            </span>
            <span className="text-[0.62rem] sm:text-[0.68rem] font-bold text-brand-navy leading-tight">
              SCHOOLS
            </span>
            <span className="text-[0.52rem] sm:text-[0.58rem] font-medium text-slate-500 block tracking-tight mt-0.5">
              SAFER COMMUNITIES
            </span>
          </div>
        </motion.div>

        {/* 2. Top-Right Floating Pill: STUDENT SAFETY Protected */}
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-3.5 sm:right-6 top-6 sm:top-8 z-20 flex items-center gap-2 rounded-full border border-white/90 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 shadow-[0_10px_25px_-5px_rgba(24,24,24,0.14)]"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-50 text-sky-600">
            <ShieldCheck className="h-3.5 w-3.5" />
          </span>
          <div className="text-[0.62rem] sm:text-[0.68rem] leading-tight text-left">
            <span className="block font-bold text-slate-400 uppercase tracking-wider text-[0.52rem]">
              STUDENT SAFETY
            </span>
            <span className="block font-bold text-brand-navy">Protected</span>
          </div>
        </motion.div>

        {/* 3. Center-Left Floating Pill: LIVE OPS Vehicle Tracking */}
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[32%] sm:left-[36%] top-[48%] sm:top-[50%] z-20 flex items-center gap-2 rounded-full border border-white/95 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 shadow-lg"
        >
          <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
          <div className="text-[0.62rem] sm:text-[0.68rem] leading-tight text-left">
            <span className="block font-bold text-slate-400 uppercase tracking-wider text-[0.52rem]">
              LIVE OPS
            </span>
            <span className="block font-bold text-brand-navy">Vehicle Tracking</span>
          </div>
        </motion.div>

        {/* 4. Center-Right Floating Pill: ETA 06 min · Next Stop */}
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 3, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-[16%] sm:right-[20%] top-[44%] sm:top-[46%] z-20 flex items-center gap-2 rounded-full border border-white/95 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 shadow-lg"
        >
          <span className="flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-brand-blue text-white">
            <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          </span>
          <div className="text-[0.62rem] sm:text-[0.68rem] leading-tight text-left">
            <span className="block font-bold text-brand-blue uppercase tracking-wider text-[0.52rem]">
              ETA
            </span>
            <span className="block font-bold text-brand-navy">06 min · Next Stop</span>
          </div>
        </motion.div>

        {/* 5. Bottom-Right Floating Card: Real-Time Insights for Safer Journeys */}
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -3, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute right-3.5 sm:right-6 bottom-3.5 sm:bottom-6 z-20 flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 shadow-[0_16px_36px_-8px_rgba(24,24,24,0.2)]"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
            <BarChart3 className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </div>
          <div className="text-left">
            <span className="block text-xs sm:text-sm font-bold text-brand-navy">
              Real-Time Insights
            </span>
            <span className="block text-[0.62rem] sm:text-[0.68rem] text-slate-500">
              for Safer Journeys
            </span>
          </div>
          <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-slate-100 text-brand-blue ml-1">
            <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
}
