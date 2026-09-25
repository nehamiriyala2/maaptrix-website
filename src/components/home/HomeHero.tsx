"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Users,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F8FD] via-[#FFFFFF] to-[#FFFFFF] pb-12 pt-8 text-brand-navy sm:pb-16 sm:pt-10 lg:pb-18 lg:pt-12">
      {/* Soft organic ambient lighting and wave glow */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-[520px] w-[520px] rounded-full bg-[#E0F2FE]/70 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-10 h-[560px] w-[560px] rounded-full bg-[#BAE6FD]/45 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[350px] w-[350px] rounded-full bg-[#DBEAFE]/35 blur-[90px]"
        aria-hidden
      />

      {/* Subtle organic wavy ribbon background decorative vector */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M-100 500 C 300 650, 600 350, 1000 450 C 1200 500, 1400 380, 1600 300"
          stroke="url(#hero-wave-grad)"
          strokeWidth="60"
          strokeLinecap="round"
          className="blur-2xl"
        />
        <defs>
          <linearGradient id="hero-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="page-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-12">
          {/* LEFT: Headline & Maaptrix Core Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {/* Eyebrow badge with glowing blue dot */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D0E4FA] bg-[#EBF4FE] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(22,131,247,0.06)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1683F7] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1683F7]" />
              </span>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0A1B39]">
                Simple Technology. Safer Tomorrows.
              </p>
            </div>

            {/* Main Bold Headline */}
            <h1 className="mt-5 font-display text-[42px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A1B39] sm:text-[52px] lg:text-[56px] xl:text-[62px]">
              Technology<br />
              Products Built for<br />
              <span className="text-[#1683F7]">Real-World</span><br />
              Operations.
            </h1>

            {/* Subtitle Description */}
            <p className="mt-5 max-w-[540px] text-[16px] leading-[1.65] text-[#556987] sm:text-[17px]">
              Maaptrix designs, develops, operates and continuously improves its own digital products, offered through
              subscription-based models.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex h-[50px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[12px] bg-[#1683F7] px-7 text-[15.5px] font-bold text-white shadow-[0_12px_28px_-8px_rgba(22,131,247,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0E71E6] hover:shadow-[0_16px_32px_-8px_rgba(22,131,247,0.55)]"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center whitespace-nowrap rounded-[12px] border-2 border-[#1683F7] bg-white px-7 text-[15.5px] font-bold text-[#1683F7] shadow-[0_4px_12px_rgba(22,131,247,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F0F7FF]"
              >
                Request a Demo
              </Link>
            </div>

            {/* 3 Modern Feature Cards in Segmented Bar */}
            <div className="mt-8 inline-flex flex-col sm:flex-row items-stretch sm:items-center divide-y sm:divide-y-0 sm:divide-x divide-[#E2EEFC] rounded-[18px] border border-[#DCE9F6] bg-white/95 p-1.5 sm:p-2 shadow-[0_6px_20px_rgba(16,42,86,0.05)] backdrop-blur-md">
              <div className="flex items-center gap-2.5 px-4 py-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EAF4FF] text-[#1683F7]">
                  <Shield className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="text-[13px] font-bold leading-tight text-[#0A1B39]">
                  Safer<br />Schools
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EAF4FF] text-[#1683F7]">
                  <Users className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="text-[13px] font-bold leading-tight text-[#0A1B39]">
                  Connected<br />Communities
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EAF4FF] text-[#1683F7]">
                  <BarChart3 className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="text-[13px] font-bold leading-tight text-[#0A1B39]">
                  Smarter<br />Operations
                </span>
              </div>
            </div>

            {/* Bottom Slogan Line */}
            <div className="mt-7 flex items-center gap-3">
              <div className="h-[1px] w-12 bg-[#BDD9F5]" />
              <p className="text-[11.5px] font-bold tracking-[0.18em] text-[#4A729A] uppercase">
                Empowering Schools for a Brighter Tomorrow
              </p>
              <div className="h-[1px] w-24 bg-[#BDD9F5]" />
            </div>
          </motion.div>

          {/* RIGHT: Blueprint 3-Portal Fluid Ecosystem Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative mx-auto w-full max-w-[760px] min-w-0 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full">
              <Image
                src="/hero/home-hero-portals.png"
                alt="Maaptrix connected school operations blueprint with school management classroom, school transport bus, and communication platform"
                width={1228}
                height={1010}
                priority
                quality={95}
                sizes="(min-width: 1280px) 55vw, 100vw"
                className="h-auto w-full object-contain drop-shadow-[0_12px_32px_rgba(22,131,247,0.08)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
