"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  MapPin,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(224,242,254,0.65)_0%,transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(239,246,255,0.85)_0%,transparent_50%),#FFFFFF] pb-14 pt-8 text-brand-navy sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
      {/* Soft organic ambient lighting */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-[#E0F2FE]/60 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-10 h-[550px] w-[550px] rounded-full bg-[#BAE6FD]/40 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#DBEAFE]/40 blur-[90px]"
        aria-hidden
      />

      <div className="page-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-12">
          {/* LEFT: Maaptrix introduction */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {/* Eyebrow badge with glowing blue dot */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D0E4FA] bg-[#EBF4FE] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(22,131,247,0.06)]">
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
              Solutions for<br />
              <span className="text-[#1683F7]">Smarter Schools.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="mt-5 max-w-[540px] text-[16.5px] leading-[1.65] text-[#556987] sm:text-[17.5px]">
              Maaptrix designs, develops, operates and continuously improves its own digital products, offered through
              subscription-based models.
            </p>

            {/* Mid Feature Badges Capsule Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full border border-[#D2E4F7] bg-white/95 p-1.5 px-3 shadow-[0_4px_16px_rgba(22,131,247,0.08)] backdrop-blur-md w-fit">
              <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#0A1B39] px-2 py-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF4FE] text-[#1683F7]">
                  <MapPin className="h-3 w-3" />
                </span>
                Live Tracking
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#0A1B39] px-2 py-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF4FE] text-[#1683F7]">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                Safety Protocols
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#0A1B39] px-2 py-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF4FE] text-[#1683F7]">
                  <Users className="h-3 w-3" />
                </span>
                Parent Visibility
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#0A1B39] px-2 py-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF4FE] text-[#1683F7]">
                  <BarChart3 className="h-3 w-3" />
                </span>
                Smarter Operations
              </span>
            </div>

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
          </motion.div>

          {/* RIGHT: Blueprint 3D School Campus visual */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative mx-auto w-full max-w-[760px] min-w-0 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full">
              <Image
                src="/hero/school-campus-hero.png"
                alt="Maaptrix connected school operations blueprint with live bus tracking, parent notifications, student attendance and safe transportation"
                width={1298}
                height={1032}
                priority
                quality={95}
                sizes="(min-width: 1280px) 55vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
