"use client";

import Image from "next/image";
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Quote,
  ShieldAlert,
} from "lucide-react";
import Reveal from "./Reveal";

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F9FF] via-[#E8F4FF] to-[#F8FCFF] py-10 sm:py-12 lg:py-14 border-b border-slate-100 select-none">
      
      {/* ========================================================================= */}
      {/* 1. LAYERED FLOWING 3D BLUE WAVE / RIBBON BACKGROUND */}
      {/* ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft atmospheric ambient glow orbs */}
        <div className="absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-brand-blue/12 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-64 w-[600px] rounded-full bg-[#CCE5FF]/60 blur-3xl" />

        {/* Continuous Flowing SVG Wave Ribbons spanning the entire section */}
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-60"
        >
          {/* Top subtle wave */}
          <path
            d="M -100,120 Q 350,30 720,110 T 1550,60 L 1550,0 L -100,0 Z"
            fill="url(#waveGradTop)"
          />
          {/* Middle crossing ribbon */}
          <path
            d="M -100,280 C 250,160 500,380 900,220 C 1200,100 1380,320 1550,260 L 1550,600 L -100,600 Z"
            fill="url(#waveGradMid)"
          />
          {/* Bottom horizon curve */}
          <path
            d="M -100,420 Q 400,520 800,440 T 1550,480 L 1550,600 L -100,600 Z"
            fill="url(#waveGradBottom)"
          />

          <defs>
            <linearGradient id="waveGradTop" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#CCE5FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="waveGradMid" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D9EEFF" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#C2E2FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EAF4FF" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="waveGradBottom" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E1F0FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative page-container">
        
        {/* ========================================================================= */}
        {/* 2. SECTION HEADER (Centered above card) */}
        {/* ========================================================================= */}
        <Reveal className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light/80 px-3.5 py-1 text-[0.72rem] sm:text-xs font-bold text-brand-blue border border-brand-blue/25 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span>OPERATIONAL IMPACT</span>
          </div>

          {/* Headline */}
          <h2 className="mt-3.5 font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight text-brand-navy leading-[1.14]">
            Designed Around{" "}
            <span className="text-brand-blue">Real Operational Needs</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-normal">
            Hear from the people who experience the difference every day.
          </p>
        </Reveal>

        {/* ========================================================================= */}
        {/* 3. MAIN COMPOSITION: CLASSROOM (LEFT) + CARD (CENTER) + LAPTOP (RIGHT) */}
        {/* ========================================================================= */}
        <div className="relative mt-8 sm:mt-10 lg:mt-12 flex items-center justify-center">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT SIDE VISUAL: Educational Classroom Environment */}
          {/* ----------------------------------------------------------------------- */}
          <div className="pointer-events-none absolute -left-6 sm:left-0 lg:-left-12 top-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-80 aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/70 shadow-[0_16px_40px_-10px_rgba(20,125,255,0.12)] -z-0 opacity-70 sm:opacity-85 lg:opacity-95 hidden md:block">
            {/* Classroom Scene Rendering */}
            <div className="relative h-full w-full bg-gradient-to-br from-[#E2F0FF] via-[#F4F9FF] to-white p-3">
              {/* Classroom Illustration (Desks, Blue Chairs & Sunlit Windows) */}
              <svg viewBox="0 0 240 180" className="h-full w-full object-cover">
                {/* Window Pane with Sunlight & Trees */}
                <rect x="15" y="15" width="90" height="95" rx="6" fill="#CDE8FF" stroke="#A6D5FF" strokeWidth="2" />
                <line x1="60" y1="15" x2="60" y2="110" stroke="#FFFFFF" strokeWidth="3" />
                <line x1="15" y1="62" x2="105" y2="62" stroke="#FFFFFF" strokeWidth="3" />
                {/* Window Green Tree Silhouette */}
                <circle cx="40" cy="70" r="18" fill="#86EFAC" opacity="0.6" />
                <circle cx="65" cy="55" r="22" fill="#4ADE80" opacity="0.7" />
                <circle cx="85" cy="75" r="16" fill="#22C55E" opacity="0.6" />

                {/* Sunbeams */}
                <polygon points="15,15 105,15 160,160 30,160" fill="#FFFFFF" opacity="0.25" />

                {/* Classroom Wooden Desks & Blue Chairs */}
                {/* Desk Row 1 */}
                <rect x="25" y="125" width="70" height="28" rx="4" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
                <rect x="35" y="112" width="22" height="18" rx="3" fill="#3B82F6" />
                <rect x="65" y="112" width="22" height="18" rx="3" fill="#3B82F6" />

                {/* Desk Row 2 */}
                <rect x="115" y="105" width="85" height="32" rx="4" fill="#FCD34D" stroke="#D97706" strokeWidth="1" />
                <rect x="130" y="90" width="26" height="22" rx="3" fill="#2563EB" />
                <rect x="165" y="90" width="26" height="22" rx="3" fill="#2563EB" />

                {/* Plant on windowsill */}
                <rect x="85" y="98" width="12" height="12" rx="2" fill="#D97706" />
                <circle cx="91" cy="94" r="7" fill="#10B981" />
              </svg>

              {/* Gradient fade towards card */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F3F9FF]/90" />
            </div>

            {/* Floating Glass Badge: Graduation Cap */}
            <div className="absolute top-4 right-4 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-white/90 bg-white/85 text-brand-blue shadow-lg backdrop-blur-md">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT SIDE VISUAL: Software / Laptop Dashboard Environment */}
          {/* ----------------------------------------------------------------------- */}
          <div className="pointer-events-none absolute -right-6 sm:right-0 lg:-right-12 top-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-80 aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/70 shadow-[0_16px_40px_-10px_rgba(20,125,255,0.12)] -z-0 opacity-70 sm:opacity-85 lg:opacity-95 hidden md:block">
            {/* Reusing the authentic school administration & laptop visual */}
            <div className="relative h-full w-full bg-white">
              <Image
                src="/hero/school-card-scene.jpg"
                alt="Maaptrix Operational Software Laptop Display"
                fill
                sizes="(max-width: 1024px) 30vw, 22vw"
                className="object-cover object-center"
              />
              {/* Gradient fade towards card */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F3F9FF]/90" />
            </div>

            {/* Floating Glass Badge: Analytics Bar Chart */}
            <div className="absolute top-4 left-4 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-white/90 bg-white/85 text-brand-blue shadow-lg backdrop-blur-md">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CENTER TESTIMONIAL CARD (The Primary Visual Focal Point) */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal className="relative z-10 w-full max-w-[720px]">
            
            {/* Floating Left Arrow */}
            <button
              type="button"
              aria-label="Previous Testimonial"
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-brand-navy shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-brand-blue hover:shadow-lg cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Floating Right Arrow */}
            <button
              type="button"
              aria-label="Next Testimonial"
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-brand-navy shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-brand-blue hover:shadow-lg cursor-pointer"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* The Main Card Container */}
            <div className="relative rounded-[28px] sm:rounded-[36px] border border-white/90 bg-white/92 backdrop-blur-xl p-6 sm:p-9 lg:p-11 shadow-[0_20px_60px_-15px_rgba(20,125,255,0.16)] text-center">
              
              {/* Top Large Quotation Mark Emblem */}
              <div className="relative -mt-12 sm:-mt-15 mb-4 mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#EBF5FF] to-white text-brand-blue border border-[#CCE5FF] shadow-sm">
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 fill-brand-blue" />
              </div>

              {/* Exact Testimonial Quote with highlighted core phrase */}
              <blockquote className="font-display text-base sm:text-xl lg:text-[1.28rem] font-semibold leading-[1.65] text-brand-navy tracking-tight max-w-2xl mx-auto">
                &ldquo;Maaptrix helped us think about everyday{" "}
                <span className="text-brand-blue">
                  operations in a much simpler way.
                </span>{" "}
                The product approach focuses on what users actually need without
                unnecessary complexity.&rdquo;
              </blockquote>

              {/* Exact Attribution */}
              <div className="mt-6 flex flex-col items-center justify-center">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#0B1F41] text-white flex items-center justify-center font-bold text-xs shadow-xs mb-2">
                  SC
                </div>
                <h4 className="text-sm sm:text-base font-bold text-brand-navy">
                  Sample Customer Name
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  School Operations Team
                </p>
              </div>

              {/* Exact Illustrative Placeholder Notice in a polished pill */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/90 px-4 py-1.5 text-center text-[0.7rem] sm:text-xs font-semibold text-amber-900 shadow-2xs max-w-full">
                <ShieldAlert className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <span className="truncate">
                  Illustrative testimonial — replace with approved customer testimonial before launch.
                </span>
              </div>

            </div>

            {/* Pagination Dots (3 Dots matching Image 2) */}
            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              <span className="h-2 w-2 rounded-full bg-brand-blue/30" />
              <span className="h-2 w-2 rounded-full bg-brand-blue/30" />
            </div>

          </Reveal>

        </div>

      </div>
    </section>
  );
}
