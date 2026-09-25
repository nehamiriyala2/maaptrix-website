"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bus,
  Clock,
  GraduationCap,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Float({
  className,
  delay = 0,
  children,
}: {
  className: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-20 rounded-[14px] border border-white/80 bg-white/95 shadow-[0_14px_30px_-10px_rgba(7,50,120,0.35)] backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1683F7_0%,#0E71E6_50%,#0757C9_100%)] pb-16 pt-8 text-white sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-14">
      {/* Rich organic background ambient glows and gradient mesh */}
      <div
        className="pointer-events-none absolute -left-24 top-0 h-[600px] w-[600px] rounded-full bg-white/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[600px] w-[600px] rounded-full bg-[#00D2FF]/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-white/5 blur-[90px]"
        aria-hidden
      />

      {/* Decorative dot grids */}
      <div
        className="pointer-events-none absolute right-16 top-16 hidden h-44 w-44 opacity-20 sm:block"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-16 hidden h-48 w-48 opacity-15 sm:block"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden
      />

      <div className="page-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-14">
          {/* LEFT: Maaptrix introduction */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {/* Eyebrow badge with glowing cyan dot */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-white">
                Simple Technology. Safer Tomorrows.
              </p>
            </div>

            {/* Main Bold Headline */}
            <h1 className="mt-5 font-display text-[42px] font-extrabold leading-[1.04] tracking-[-0.035em] text-white sm:text-[54px] lg:text-[58px] xl:text-[64px]">
              Technology<br />
              Products Built for<br />
              <span className="text-[#CFE8FF]">Real-World</span><br />
              Operations.
            </h1>

            {/* Subtitle Description */}
            <p className="mt-6 max-w-[540px] text-[16.5px] leading-[1.65] text-white/90 sm:text-[18px]">
              Maaptrix designs, develops, operates and continuously improves its own digital products, offered through
              subscription-based models.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[12px] bg-white px-8 text-[16px] font-bold text-brand-blue shadow-[0_12px_28px_-8px_rgba(7,50,120,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F0F7FF] hover:shadow-[0_16px_32px_-8px_rgba(7,50,120,0.5)]"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-[12px] border-2 border-white/80 bg-white/10 px-8 text-[16px] font-bold text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
              >
                Request a Demo
              </Link>
            </div>

            {/* 3 Translucent Feature Cards */}
            <div className="mt-9 grid max-w-[540px] grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 rounded-[14px] border border-white/20 bg-white/10 p-3 backdrop-blur-md">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/20 text-white">
                  <Shield className="h-5 w-5" />
                </span>
                <span className="text-[13px] font-bold leading-tight text-white">
                  Safer<br />Schools
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-[14px] border border-white/20 bg-white/10 p-3 backdrop-blur-md">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/20 text-white">
                  <Users className="h-5 w-5" />
                </span>
                <span className="text-[13px] font-bold leading-tight text-white">
                  Connected<br />Communities
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-[14px] border border-white/20 bg-white/10 p-3 backdrop-blur-md">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/20 text-white">
                  <BarChart3 className="h-5 w-5" />
                </span>
                <span className="text-[13px] font-bold leading-tight text-white">
                  Smarter<br />Operations
                </span>
              </div>
            </div>

            {/* Bottom Slogan Rule */}
            <div className="mt-8 flex items-center gap-3 text-[11.5px] font-bold uppercase tracking-[0.16em] text-white/80">
              <span className="h-px w-10 bg-white/40" />
              Empowering Schools for a Brighter Tomorrow
            </div>
          </motion.div>

          {/* RIGHT: large school-operations visual with glowing border and floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative mx-auto w-full max-w-[760px] min-w-0"
          >
            {/* Campus scene container */}
            <div className="relative overflow-hidden rounded-[26px] border-2 border-white/30 bg-[#0A1A33] shadow-[0_25px_60px_-15px_rgba(7,50,120,0.5),0_0_40px_rgba(255,255,255,0.15)]">
              <Image
                src="/hero/hero-scene.jpg"
                alt="Maaptrix connected school campus with a school bus following a live tracked route"
                width={1376}
                height={768}
                priority
                quality={90}
                sizes="(min-width: 1280px) 60vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Floating Badge 1: Top-Left Connected Schools */}
            <Float className="left-3 top-3 hidden px-3.5 py-2 text-center sm:block xl:-left-5 xl:top-6" delay={0}>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#EAF4FF] text-brand-blue">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="text-left leading-tight">
                  <span className="block text-[9.5px] font-bold uppercase tracking-wider text-brand-blue">
                    Connected Schools
                  </span>
                  <span className="block text-[10px] font-bold text-slate-700">
                    Safer Communities
                  </span>
                </div>
              </div>
            </Float>

            {/* Floating Badge 2: Top-Right Student Safety */}
            <Float className="right-3 top-3 flex items-center gap-2.5 px-3.5 py-2 sm:right-5 sm:top-5" delay={0.6}>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F7EF] text-[#15803D]">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span className="leading-tight text-left">
                <span className="block text-[9.5px] font-bold uppercase tracking-wider text-[#7E90A6]">
                  Student Safety
                </span>
                <span className="block text-[12.5px] font-bold text-brand-navy">
                  Protected
                </span>
              </span>
            </Float>

            {/* Floating Badge 3: Center-Left Live GPS Tracking */}
            <Float className="left-[26%] top-[38%] hidden items-center gap-2.5 px-3 py-1.5 sm:flex" delay={1.1}>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              </span>
              <span className="leading-tight text-left">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#7E90A6]">
                  Live GPS
                </span>
                <span className="block text-[12px] font-bold text-brand-navy">
                  Vehicle Tracking
                </span>
              </span>
            </Float>

            {/* Floating Badge 4: Center-Right ETA */}
            <Float className="right-[12%] top-[50%] hidden items-center gap-2.5 px-3 py-1.5 md:flex" delay={1.6}>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                <Clock className="h-3.5 w-3.5" />
              </span>
              <span className="leading-tight text-left">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-brand-blue">
                  ETA
                </span>
                <span className="block text-[12px] font-bold text-brand-navy">
                  06 min · Next Stop
                </span>
              </span>
            </Float>

            {/* Floating Badge 5: Bottom-Right Real-Time Insights */}
            <Float className="bottom-3 right-3 hidden items-center gap-3 px-3.5 py-2.5 sm:bottom-5 sm:right-5 sm:flex" delay={0.9}>
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#EAF4FF] text-brand-blue">
                <BarChart3 className="h-4 w-4" />
              </span>
              <span className="leading-tight text-left">
                <span className="block text-[13px] font-bold text-brand-navy">
                  Real-Time Insights
                </span>
                <span className="block text-[11px] text-[#63748B]">
                  for Safer Journeys
                </span>
              </span>
            </Float>

            {/* Floating Badge 6: Bottom-Left Parent Portal Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              className="absolute -bottom-6 left-2 z-30 hidden w-[160px] rounded-[24px] border border-white/30 bg-[#0B1526] p-[6px] shadow-[0_24px_50px_rgba(7,50,120,0.5)] sm:block xl:-left-8"
            >
              <div className="overflow-hidden rounded-[19px] bg-white text-slate-800">
                <div className="flex items-center justify-between bg-brand-blue px-3 py-2 text-white">
                  <span className="text-[11px] font-bold">Parent Portal</span>
                  <Bus className="h-3.5 w-3.5" />
                </div>
                <div className="p-2.5 text-left">
                  <p className="text-[9.5px] text-[#63748B]">Good morning</p>
                  <p className="text-[12px] font-bold text-brand-navy">Bus MPX-07</p>
                  <div className="mt-1.5 rounded-[8px] bg-[#EAF4FF] p-1.5">
                    <p className="text-[8.5px] font-semibold uppercase tracking-wide text-brand-blue">
                      Arriving in
                    </p>
                    <p className="text-[15px] font-bold leading-tight text-brand-navy">
                      6 min
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[9px] font-semibold text-[#15803D]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#15803D]" />
                    On route · Maple Residency
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E3EEF9]">
                    <div className="h-full w-[70%] rounded-full bg-brand-blue" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
