"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Users } from "lucide-react";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-blue-white pt-20 sm:pt-22 lg:pt-24 pb-7 sm:pb-8 lg:pb-10 flex items-center select-none"
    >

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

    </section>
  );
}

