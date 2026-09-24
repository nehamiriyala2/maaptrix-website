"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";

/* Layered gradient icons for the mission cards (one visual family). */
function PeopleArt() {
  return (
    <svg viewBox="0 0 64 64" className="h-[54px] w-[54px]" aria-hidden>
      <defs>
        <linearGradient id="ms-people-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5AA9FF" />
          <stop offset="100%" stopColor="#1462E0" />
        </linearGradient>
        <linearGradient id="ms-people-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9FCBFF" />
          <stop offset="100%" stopColor="#4C93F2" />
        </linearGradient>
      </defs>
      <circle cx="44" cy="22" r="8" fill="url(#ms-people-b)" />
      <path d="M31 50 C31 38 37 32 44 32 C52 32 58 38 58 50 Z" fill="url(#ms-people-b)" />
      <circle cx="25" cy="19" r="10" fill="url(#ms-people-a)" />
      <path d="M7 52 C7 38 15 31 25 31 C35 31 43 38 43 52 Z" fill="url(#ms-people-a)" />
      <ellipse cx="21" cy="15" rx="4" ry="2.5" fill="#fff" opacity=".35" />
    </svg>
  );
}

function ShieldArt() {
  return (
    <svg viewBox="0 0 64 64" className="h-[54px] w-[54px]" aria-hidden>
      <defs>
        <linearGradient id="ms-shield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5AA9FF" />
          <stop offset="100%" stopColor="#1255D6" />
        </linearGradient>
      </defs>
      <path d="M32 5 L54 13 V30 C54 45 44 54 32 59 C20 54 10 45 10 30 V13 Z" fill="url(#ms-shield)" />
      <path d="M32 9 L50 16 V30 C50 42 42 50 32 54 Z" fill="#fff" opacity=".13" />
      <path d="M22 31 L29 38 L43 24" fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartArt() {
  return (
    <svg viewBox="0 0 64 64" className="h-[54px] w-[54px]" aria-hidden>
      <defs>
        <linearGradient id="ms-heart" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7DBDFF" />
          <stop offset="100%" stopColor="#1462E0" />
        </linearGradient>
      </defs>
      <path
        d="M32 54 C14 42 7 33 7 23 C7 15 13 9 21 9 C26 9 30 12 32 16 C34 12 38 9 43 9 C51 9 57 15 57 23 C57 33 50 42 32 54 Z"
        fill="#DCEBFF"
        fillOpacity=".55"
        stroke="url(#ms-heart)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M15 20 C16 16 19 14 22 14" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".8" />
    </svg>
  );
}

function CheckDot() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#147DFF" />
      <path d="M7 12.5 L10.5 16 L17 9" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const MISSION_PILLARS = [
  {
    art: PeopleArt,
    title: "People Centric Solutions",
    description: "Tools that make work effortless.",
    points: ["Understand user needs", "Solve real operational problems", "Design practical solutions"],
    href: "/how-we-work",
  },
  {
    art: ShieldArt,
    title: "Greater Accessibility",
    description: "Technology for everyone.",
    points: ["Build inclusive products", "Ensure reliable experiences", "Design with usability in mind"],
    href: "/products",
  },
  {
    art: HeartArt,
    title: "Good Experiences",
    description: "Technology designed around the people who use it every day.",
    points: ["Provide direct customer support", "Continuously enhance products", "Create long-term value"],
    href: "/why-maaptrix",
  },
];

export default function AboutMissionVision() {
  return (
    <div className="relative overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. MISSION: centred editorial quote + three pillar cards */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAFF_55%,#FFFFFF_100%)] py-14 sm:py-16 xl:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-[8%] h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[#DCEBFF]/45 blur-[110px]" />
          <div className="absolute -bottom-24 left-[10%] h-[300px] w-[520px] rounded-full bg-[#E3EFFF]/60 blur-[100px]" />
        </div>

        <div className="page-container relative">
          <div className="mx-auto max-w-[1440px]">
            <Reveal className="text-center">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D3E5FB] bg-[#EAF3FE] px-5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                <span className="text-[14px] font-bold uppercase tracking-[0.04em] text-brand-blue sm:text-[15px]">
                  Our Mission
                </span>
              </span>

              <div className="relative mx-auto mt-8 max-w-[1240px] px-2 sm:px-14 xl:px-24">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-3 left-0 select-none font-display text-[110px] font-extrabold leading-none text-[#D6E7FD] sm:-top-5 sm:text-[150px] xl:-left-2"
                >
                  &ldquo;
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 right-0 select-none font-display text-[110px] font-extrabold leading-none text-[#D6E7FD] sm:-bottom-24 sm:text-[150px] xl:-right-2"
                >
                  &rdquo;
                </span>
                <blockquote className="relative font-display text-[28px] font-extrabold leading-[1.2] tracking-[-0.025em] text-brand-navy sm:text-[38px] xl:text-[46px]">
                  &ldquo;To create simple, dependable and accessible digital products that help organizations
                  manage everyday operations more efficiently and deliver{" "}
                  <span className="text-brand-blue">better experiences</span> to their users.&rdquo;
                </blockquote>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 xl:mt-16 xl:gap-10">
              {MISSION_PILLARS.map((pillar, idx) => {
                const Art = pillar.art;
                return (
                  <Reveal key={pillar.title} delay={idx * 0.08} className="h-full">
                    <div className="group flex h-full flex-col rounded-[28px] border border-[#DCE8F7] bg-white/90 p-7 shadow-[0_18px_44px_-24px_rgba(85,85,85,0.3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_-24px_rgba(85,85,85,0.4)] sm:p-8 2xl:p-10">
                      <span className="flex h-[88px] w-[88px] items-center justify-center rounded-[22px] bg-[linear-gradient(145deg,#F4F9FF_0%,#DDEBFF_100%)] shadow-[0_14px_28px_-14px_rgba(20,125,255,0.55),inset_0_1px_0_#fff] transition-shadow duration-300 group-hover:shadow-[0_16px_34px_-12px_rgba(20,125,255,0.7),inset_0_1px_0_#fff]">
                        <Art />
                      </span>
                      <h3 className="mt-6 font-display text-[23px] font-bold leading-tight text-brand-navy xl:text-[23px] 2xl:text-[26px]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-[17px] leading-[1.5] text-[#5A6A85] xl:min-h-[54px] xl:text-[18px]">
                        {pillar.description}
                      </p>

                      <div className="my-6 h-px w-full bg-[#E3EBF5]" />

                      <ul className="space-y-3.5">
                        {pillar.points.map((point) => (
                          <li key={point} className="flex items-center gap-3 text-[16px] text-[#545454] xl:text-[17px]">
                            <CheckDot />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={pillar.href}
                        className="mt-auto inline-flex items-center gap-2 self-start pt-8 text-[17px] font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark xl:text-[18px]"
                      >
                        Learn More
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VISION: Dark Maaptrix Visual Panel */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 border-b border-slate-100">
        <div className="page-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[26px] sm:rounded-[32px] border border-slate-800/80 bg-gradient-to-br from-[#0E0E0E] via-[#181818] to-[#090909] p-7 sm:p-10 lg:p-14 text-white shadow-[0_24px_50px_-12px_rgba(24,24,24,0.35)]">
              
              {/* Subtle ambient lighting */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />

              <div className="relative z-10 max-w-3xl">
                {/* Vision Eyebrow */}
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
                    OUR VISION
                  </p>
                </div>

                {/* Large Editorial Vision Statement */}
                <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.22] tracking-tight text-white">
                  &ldquo;To build Maaptrix into a trusted Indian software
                  product company known for practical innovation, responsible
                  technology and subscription products that create measurable
                  operational value.&rdquo;
                </h3>

                {/* 3 Vision Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] p-3 border border-white/[0.08] backdrop-blur-xs">
                    <Sparkles className="h-4 w-4 text-brand-blue shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">
                      Practical Innovation
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] p-3 border border-white/[0.08] backdrop-blur-xs">
                    <ShieldCheck className="h-4 w-4 text-brand-blue shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">
                      Responsible Technology
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] p-3 border border-white/[0.08] backdrop-blur-xs">
                    <TrendingUp className="h-4 w-4 text-brand-blue shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">
                      Measurable Value
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
