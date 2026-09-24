"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Code2,
  Crown,
  Headphones,
  Layers,
  Lightbulb,
  Rocket,
  Search,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import Logo from "@/components/Logo";

const LIFECYCLE_STEPS = [
  { step: "01", title: "Real Problem", desc: "Understanding operational pain points", icon: Search },
  { step: "02", title: "Product", desc: "Designing purpose-built solutions", icon: Lightbulb },
  { step: "03", title: "Development", desc: "Building with scalable architecture", icon: Code2 },
  { step: "04", title: "Launch", desc: "Responsible deployment & onboarding", icon: Rocket },
  { step: "05", title: "Operation", desc: "Dependable subscription support", icon: ShieldCheck },
  { step: "06", title: "Improvement", desc: "Continuous user-guided evolution", icon: BarChart3 },
];

const FEATURE_CARDS = [
  { title: "Product Ownership", desc: "We build and manage our own products.", icon: Layers },
  { title: "Subscription Model", desc: "Simple, scalable and predictable plans.", icon: Crown },
  { title: "Continuous Support", desc: "We grow with our customers.", icon: Headphones },
];

const CAMPUS = "/about/about-campus-scene.jpg";
const FOLIAGE = "/about/about-hero-foliage.png";
const EASE = [0.22, 1, 0.36, 1] as const;

function LifecyclePanel() {
  return (
    <div className="relative w-full overflow-hidden rounded-[26px] border border-[#3B8BFF]/45 bg-[linear-gradient(160deg,rgba(29,29,29,0.94)_0%,rgba(21,21,21,0.95)_45%,rgba(16,16,16,0.97)_100%)] p-5 text-white shadow-[0_40px_80px_-24px_rgba(16,16,16,0.7),0_0_0_1px_rgba(255,255,255,0.04),0_0_42px_rgba(20,125,255,0.28)] backdrop-blur-xl sm:p-6 xl:px-7 xl:pb-6 xl:pt-7">
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#147DFF]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Header */}
      <div className="relative flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white p-[3px] shadow-[0_0_14px_rgba(20,125,255,0.45)]">
            <Logo showWordmark={false} imageClassName="h-full w-full" />
          </span>
          <span className="text-[12px] font-bold uppercase leading-tight tracking-[0.05em] text-white sm:truncate sm:text-[15px] sm:tracking-[0.06em] xl:text-[13.5px] min-[1440px]:text-[15px]">
            Maaptrix Product Lifecycle
          </span>
        </div>
        <span className="shrink-0 rounded-full border border-[#3B8BFF]/60 bg-[#0F4FB0]/70 px-3.5 py-1.5 text-[12px] font-semibold text-[#6FB4FF] sm:text-[13px]">
          End-to-End
        </span>
      </div>

      {/* Rows + timeline */}
      <ol className="relative mt-5 space-y-2.5 pl-8 sm:pl-9">
        <span
          aria-hidden
          className="absolute bottom-[34px] left-[7px] top-[34px] w-[2px] rounded-full bg-gradient-to-b from-[#5EC8FF]/80 via-[#3B8BFF]/70 to-[#5EC8FF]/80 sm:left-[9px]"
        />
        {LIFECYCLE_STEPS.map((node, i) => {
          const Icon = node.icon;
          return (
            <motion.li
              key={node.step}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.07, ease: EASE }}
              className="group relative"
            >
              <span
                aria-hidden
                className="absolute -left-8 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#181818] ring-2 ring-[#5EC8FF]/80 shadow-[0_0_10px_rgba(94,200,255,0.8)] sm:-left-9 sm:h-5 sm:w-5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#8ED8FF] sm:h-2 sm:w-2" />
              </span>

              <div className="flex items-center gap-3 rounded-[14px] border border-white/[0.09] bg-white/[0.055] px-3 py-2.5 transition-colors duration-300 group-hover:border-[#3B8BFF]/60 group-hover:bg-white/[0.09] sm:gap-4 sm:px-4 xl:min-h-[68px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#444444] text-[13px] font-semibold text-white ring-1 ring-white/10 sm:h-[42px] sm:w-[42px] sm:text-[15px]">
                  {node.step}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(145deg,#2466C8,#535353)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] sm:h-[42px] sm:w-[42px]">
                  <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2.2} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[14.5px] font-semibold leading-tight text-white sm:text-[16px]">
                    {node.title}
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-snug 2xl:truncate 2xl:leading-tight text-slate-300/90 sm:text-[13.5px]">
                    {node.desc}
                  </span>
                </span>
                <ChevronRight className="h-5 w-5 shrink-0 text-slate-300/80 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </motion.li>
          );
        })}
      </ol>

      {/* Footer */}
      <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[12.5px] sm:text-[13px]">
        <span className="text-slate-400">Product Ownership Model</span>
        <span className="font-bold text-white">Reliable Operations</span>
      </div>
    </div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative -mt-16 overflow-hidden border-b border-slate-200/60 bg-[linear-gradient(180deg,#E4F0FD_0%,#EDF5FE_45%,#F6FAFF_100%)] sm:-mt-[4.25rem] lg:-mt-[4.75rem]">
      {/* ---------- Atmosphere + background curves ---------- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-40 -top-40 h-[640px] w-[640px] rounded-full bg-white/70 blur-[90px]" />
        <div className="absolute left-[30%] top-[10%] h-[520px] w-[620px] rounded-full bg-[#BFE0FF]/40 blur-[110px]" />
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="ah-arc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ah-ribbon" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#D6EAFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="330" cy="700" r="560" fill="none" stroke="url(#ah-arc)" strokeWidth="2" />
          <circle cx="330" cy="700" r="640" fill="none" stroke="url(#ah-arc)" strokeWidth="1" opacity=".6" />
          <path d="M-40 620 C220 470 520 430 900 470 L900 520 C560 480 250 520 -40 700Z" fill="url(#ah-ribbon)" opacity=".7" />
          <path d="M-40 250 C200 150 460 110 760 130" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 xl:min-h-[840px] xl:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] xl:gap-8 xl:gap-10">
          {/* ---------- LEFT: copy + three cards ---------- */}
          <div className="relative z-20 flex flex-col justify-center pb-10 pt-28 sm:pt-32 xl:pb-16 xl:pt-[128px]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#CFE3FB] bg-[#EAF3FE]/90 px-4 py-2 shadow-[0_2px_10px_rgba(20,125,255,0.08)]">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-blue sm:text-[14px]">
                  About Maaptrix
                </span>
              </span>

              <h1 className="mt-6 font-display text-[40px] font-extrabold leading-[1.04] tracking-[-0.035em] text-brand-navy sm:text-[56px] xl:text-[clamp(46px,4vw,68px)]">
                <span className="block xl:whitespace-nowrap">We Build Technology</span>
                <span className="block xl:whitespace-nowrap">
                  Around <span className="text-brand-blue">Real Problems.</span>
                </span>
              </h1>

              <p className="mt-6 max-w-[640px] text-[17px] leading-[1.55] text-[#545454] sm:text-[19px] xl:text-[20px]">
                Maaptrix Private Limited is a technology company focused on building and managing its own
                software products. We identify real-world challenges, create purpose-built digital solutions
                and deliver them to customers through subscription plans.
              </p>
            </motion.div>

            <div className="mt-8 grid max-w-[700px] grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-4">
              {FEATURE_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: EASE }}
                    className="flex items-start gap-3.5 rounded-[20px] sm:flex-col sm:gap-3 2xl:flex-row 2xl:gap-3.5 border border-white bg-white/90 p-4 shadow-[0_18px_40px_-20px_rgba(85,85,85,0.35),0_2px_6px_rgba(85,85,85,0.05)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 sm:p-[18px]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[linear-gradient(145deg,#EEF5FF,#DCEBFF)]">
                      <Icon className="h-[26px] w-[26px] text-brand-blue" fill="#147DFF" fillOpacity={0.2} strokeWidth={2.2} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[16.5px] font-bold leading-[1.2] text-brand-navy xl:text-[17px]">
                        {card.title}
                      </span>
                      <span className="mt-1.5 block text-[13.5px] leading-[1.4] text-slate-500">{card.desc}</span>
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ---------- RIGHT: campus scene + lifecycle panel ---------- */}
          <div className="relative z-10 pb-12 [--panel-shift:0px] [--panel-w:480px] xl:flex xl:items-center xl:pb-10 xl:pt-[112px] min-[1440px]:[--panel-shift:clamp(0px,2.2vw,48px)] min-[1440px]:[--panel-w:520px] 2xl:[--panel-w:540px]">
            {/* Desktop scene: anchored to the panel so the facade sign sits just right of it */}
            <div
              className="pointer-events-none absolute inset-y-0 left-[calc(var(--panel-w)-392px+var(--panel-shift))] hidden aspect-[1380/1058] -translate-x-[34.78%] xl:block"
              aria-hidden
            >
              <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent_0%,#000_38%,#000_92%,transparent_100%)]">
                <Image
                  src={CAMPUS}
                  alt="Maaptrix headquarters campus with landscaped grounds and reflecting pool"
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#E4F0FD] to-transparent" />
            </div>

            {/* Mobile / tablet scene */}
            <div className="relative -mx-2 h-[340px] overflow-hidden rounded-[28px] shadow-[0_24px_50px_-28px_rgba(24,24,24,0.45)] sm:mx-0 sm:h-[440px] xl:hidden">
              <Image src={CAMPUS} alt="Maaptrix headquarters campus" fill sizes="100vw" className="object-cover object-[82%_40%]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="relative z-10 mx-auto -mt-24 w-full max-w-[540px] sm:-mt-32 xl:mx-0 xl:ml-[var(--panel-shift)] xl:mt-0 xl:w-[var(--panel-w)] xl:max-w-none"
            >
              <LifecyclePanel />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------- Foreground depth: out-of-focus foliage ---------- */}
      <div className="pointer-events-none absolute -bottom-16 -left-24 z-30 hidden h-[360px] w-[330px] opacity-90 xl:block" aria-hidden>
        <Image src={FOLIAGE} alt="" fill sizes="330px" className="object-contain object-[left_bottom]" />
      </div>
      <div className="pointer-events-none absolute -bottom-24 left-[40%] z-0 hidden h-[260px] w-[240px] -scale-x-100 opacity-70 blur-[2px] xl:block" aria-hidden>
        <Image src={FOLIAGE} alt="" fill sizes="240px" className="object-contain object-bottom" />
      </div>
    </section>
  );
}
