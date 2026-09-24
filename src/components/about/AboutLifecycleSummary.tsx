"use client";

import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CodeXml,
  Infinity as InfinityIcon,
  Lightbulb,
  Rocket,
  Search,
  Send,
  Settings,
} from "lucide-react";
import Reveal from "@/components/Reveal";

/* -------------------------------------------------------------------------- */
/* 3D stage illustrations: an isometric platform with a stage object on top   */
/* -------------------------------------------------------------------------- */

function Platform({ children, id }: { children: ReactNode; id: string }) {
  return (
    <svg viewBox="0 0 140 122" className="h-auto w-full overflow-visible" aria-hidden>
      <defs>
        <linearGradient id={`${id}-top`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#DCEAFD" />
        </linearGradient>
        <linearGradient id={`${id}-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9DDF8" />
          <stop offset="100%" stopColor="#9EC1F0" />
        </linearGradient>
        <linearGradient id={`${id}-blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6FB4FF" />
          <stop offset="100%" stopColor="#1467E6" />
        </linearGradient>
        <linearGradient id={`${id}-blue2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A9D2FF" />
          <stop offset="100%" stopColor="#4B98F5" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      {/* glow + shadow */}
      <ellipse cx="70" cy="110" rx="58" ry="9" fill="#3B8EFF" opacity=".28" filter={`url(#${id}-glow)`} />
      {/* extrusion */}
      <path
        d="M14 86 L70 106 L126 86 L126 97 L70 117 L14 97 Z"
        fill={`url(#${id}-side)`}
        stroke={`url(#${id}-side)`}
        strokeWidth="8"
        strokeLinejoin="round"
      />
      {/* top face */}
      <path
        d="M70 66 L126 86 L70 106 L14 86 Z"
        fill={`url(#${id}-top)`}
        stroke={`url(#${id}-top)`}
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <path d="M70 70 L118 86 L70 102 L22 86 Z" fill="none" stroke="#FFFFFF" strokeOpacity=".9" strokeWidth="1.2" />
      {children}
    </svg>
  );
}

const ILLUSTRATIONS: Record<string, (id: string) => ReactNode> = {
  identify: (id) => (
    <g>
      <rect x="38" y="24" width="50" height="60" rx="5" fill="#FFFFFF" stroke="#CFE0F7" transform="rotate(-4 63 54)" />
      <g transform="rotate(-4 63 54)">
        <rect x="44" y="31" width="22" height="4" rx="2" fill="#9CC4F5" />
        <rect x="46" y="56" width="6" height="18" rx="1.5" fill={`url(#${id}-blue)`} />
        <rect x="55" y="48" width="6" height="26" rx="1.5" fill={`url(#${id}-blue)`} />
        <rect x="64" y="60" width="6" height="14" rx="1.5" fill={`url(#${id}-blue2)`} />
        <rect x="44" y="40" width="30" height="3" rx="1.5" fill="#DCEAFD" />
      </g>
      <circle cx="84" cy="62" r="15" fill="#EAF4FF" fillOpacity=".75" stroke={`url(#${id}-blue)`} strokeWidth="5" />
      <path d="M95 73 L106 84" stroke="#1467E6" strokeWidth="7" strokeLinecap="round" />
    </g>
  ),
  design: (id) => (
    <g>
      <rect x="30" y="28" width="80" height="58" rx="7" fill="#FFFFFF" stroke="#CFE0F7" />
      <path d="M30 35 a7 7 0 0 1 7 -7 h66 a7 7 0 0 1 7 7 v5 h-80z" fill={`url(#${id}-blue)`} />
      <circle cx="38" cy="34" r="2" fill="#fff" />
      <circle cx="44" cy="34" r="2" fill="#fff" />
      <circle cx="50" cy="34" r="2" fill="#fff" />
      <rect x="37" y="47" width="28" height="30" rx="3" fill="#DCEAFD" />
      <rect x="70" y="47" width="33" height="5" rx="2.5" fill="#9CC4F5" />
      <rect x="70" y="57" width="28" height="4" rx="2" fill="#CFE0F7" />
      <rect x="70" y="66" width="33" height="4" rx="2" fill="#CFE0F7" />
      <rect x="70" y="74" width="20" height="4" rx="2" fill="#CFE0F7" />
    </g>
  ),
  develop: (id) => (
    <g>
      {[62, 48, 34].map((y, i) => (
        <g key={y}>
          <path
            d={`M26 ${y + 14} L70 ${y + 30} L114 ${y + 14} L114 ${y + 21} L70 ${y + 37} L26 ${y + 21} Z`}
            fill={i === 2 ? "#1467E6" : "#2F7BEF"}
            stroke={i === 2 ? "#1467E6" : "#2F7BEF"}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d={`M70 ${y} L114 ${y + 14} L70 ${y + 30} L26 ${y + 14} Z`}
            fill={`url(#${id}-${i === 2 ? "blue2" : "blue"})`}
            stroke={`url(#${id}-${i === 2 ? "blue2" : "blue"})`}
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </g>
  ),
  validate: (id) => (
    <g>
      <path
        d="M70 18 L102 30 V56 C102 76 88 88 70 96 C52 88 38 76 38 56 V30 Z"
        fill={`url(#${id}-blue)`}
        stroke="#FFFFFF"
        strokeOpacity=".7"
        strokeWidth="2"
      />
      <path d="M70 24 L96 34 V56 C96 72 85 82 70 89 Z" fill="#FFFFFF" fillOpacity=".14" />
      <path d="M56 57 L66 67 L86 46" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  launch: (id) => (
    <g>
      <g transform="rotate(35 70 52)">
        <path d="M70 12 C84 24 88 44 84 70 H56 C52 44 56 24 70 12 Z" fill={`url(#${id}-blue)`} />
        <path d="M70 12 C77 18 81 26 83 36 H57 C59 26 63 18 70 12 Z" fill="#FFFFFF" fillOpacity=".25" />
        <circle cx="70" cy="42" r="7" fill="#FFFFFF" stroke="#1467E6" strokeWidth="2.5" />
        <path d="M56 58 L44 74 L57 70 Z" fill="#1467E6" />
        <path d="M84 58 L96 74 L83 70 Z" fill="#1467E6" />
        <path d="M62 71 H78 L74 84 H66 Z" fill="#FFB36B" />
      </g>
      <g fill="#FFFFFF">
        <circle cx="44" cy="90" r="11" />
        <circle cx="58" cy="85" r="13" />
        <circle cx="74" cy="90" r="11" />
        <circle cx="90" cy="88" r="12" />
        <circle cx="104" cy="92" r="8" />
      </g>
    </g>
  ),
  improve: (id) => (
    <g>
      {[
        { x: 34, h: 22 },
        { x: 58, h: 36 },
        { x: 82, h: 54 },
      ].map(({ x, h }) => (
        <g key={x}>
          <rect x={x} y={88 - h} width="16" height={h} rx="2" fill={`url(#${id}-blue)`} />
          <path d={`M${x + 16} ${88 - h + 2} l7 -4 v${h} l-7 4 z`} fill="#1156C4" />
          <path d={`M${x} ${88 - h} l7 -4 h16 l-7 4 z`} fill="#A9D2FF" />
        </g>
      ))}
    </g>
  ),
};

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

const TONES = {
  blue: { accent: "#147DFF", soft: "#EEF5FF", chip: "#DCEBFF" },
  green: { accent: "#10A37F", soft: "#ECF9F4", chip: "#D1F2E6" },
  purple: { accent: "#7C4DEB", soft: "#F4EFFE", chip: "#E6DCFD" },
  orange: { accent: "#F26B1D", soft: "#FFF3EA", chip: "#FFE0CA" },
} as const;

const STAGES = [
  { num: "01", name: "Identify", desc: "Understand real problems and user needs.", icon: Search, tone: TONES.blue, art: "identify" },
  { num: "02", name: "Design", desc: "Define practical, user-centric solutions.", icon: Lightbulb, tone: TONES.green, art: "design" },
  { num: "03", name: "Develop", desc: "Build scalable and secure products.", icon: CodeXml, tone: TONES.purple, art: "develop" },
  { num: "04", name: "Validate", desc: "Test for quality, usability and real-world readiness.", icon: Settings, tone: TONES.orange, art: "validate" },
  { num: "05", name: "Launch", desc: "Deploy with proper onboarding and support.", icon: Rocket, tone: TONES.blue, art: "launch" },
  { num: "06", name: "Improve", desc: "Continuously evolve with user feedback and new opportunities.", icon: BarChart3, tone: TONES.green, art: "improve" },
];

/* Six columns with a 4.2% column gap: gap centres sit at these x-positions (% of row width). */
const GAP_CENTRES = [15.27, 32.63, 50, 67.37, 84.73];
/* Connector alternates low / high, like the reference (as % of card height). */
const NODE_Y = [52, 30, 52, 30, 52];

export default function AboutLifecycleSummary() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#EEF5FF_0%,#F5F9FF_40%,#E8F2FE_100%)] py-14 sm:py-16 xl:py-20">
      {/* Atmosphere: large arcs + glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-[30%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-white/60 blur-[90px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[620px] rounded-full bg-[#BFE0FF]/40 blur-[100px]" />
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <ellipse cx="800" cy="760" rx="1000" ry="620" fill="none" stroke="#FFFFFF" strokeOpacity=".9" strokeWidth="2.5" />
          <ellipse cx="800" cy="800" rx="1080" ry="640" fill="none" stroke="#FFFFFF" strokeOpacity=".5" strokeWidth="1.5" />
          <path d="M-60 520 C300 300 700 240 1000 300" fill="none" stroke="#FFFFFF" strokeOpacity=".6" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="page-container relative">
        <div className="mx-auto max-w-[1480px]">
          {/* ---------- Header ---------- */}
          <Reveal className="relative mx-auto max-w-[900px] text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white/70 px-5 py-2.5 shadow-[0_6px_18px_-8px_rgba(20,70,150,0.3)] backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
              <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand-navy sm:text-[14px]">
                Product Discipline
              </span>
            </span>
            <h2 className="mt-6 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-brand-navy sm:text-[48px] xl:text-[56px]">
              The Maaptrix{" "}
              <span className="bg-gradient-to-r from-[#147DFF] to-[#1F5FE0] bg-clip-text text-transparent">
                Product Lifecycle
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-[1.45] text-[#6A7A95] sm:text-[20px]">
              A continuous product engineering and operations discipline from concept to long-term enhancement.
            </p>
          </Reveal>

          {/* Paper-plane flourish */}
          <div className="pointer-events-none absolute right-[2%] top-2 hidden h-[170px] w-[300px] xl:block" aria-hidden>
            <svg viewBox="0 0 300 170" className="h-full w-full">
              <path d="M8 165 C60 110 120 90 180 80 S260 50 272 30" fill="none" stroke="#6FB0FF" strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" />
              <circle cx="216" cy="68" r="4" fill="#9CC8FF" />
            </svg>
            <Send className="absolute right-0 top-0 h-11 w-11 rotate-[8deg] text-[#4E9BFF]" fill="#A9D2FF" strokeWidth={1.6} />
          </div>

          {/* ---------- Stages ---------- */}
          <div className="relative mt-12 xl:mt-14">
            {/* Connector + arrow nodes (desktop) sit behind the cards, across the card band */}
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[300px] xl:block 2xl:h-[290px]" aria-hidden>
              <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                <path
                  d={`M0 52 ${GAP_CENTRES.map((x, i) => {
                    const prev = i === 0 ? 0 : GAP_CENTRES[i - 1] * 10;
                    const mid = (prev + x * 10) / 2;
                    return `C${mid} ${i === 0 ? 52 : NODE_Y[i - 1]} ${mid} ${NODE_Y[i]} ${x * 10} ${NODE_Y[i]}`;
                  }).join(" ")} C923.6 52 923.6 52 1000 52`}
                  fill="none"
                  stroke="#4E9BFF"
                  strokeWidth="3"
                  strokeOpacity=".7"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              {GAP_CENTRES.map((x, i) => (
                <motion.span
                  key={x}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px 0px" }}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
                  className="absolute z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#6FB0FF] bg-white text-brand-blue shadow-[0_8px_18px_-6px_rgba(20,125,255,0.55)]"
                  style={{ left: `${x}%`, top: `${NODE_Y[i]}%` }}
                >
                  <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.6} />
                </motion.span>
              ))}
            </div>

            <ol className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:grid-cols-6 xl:gap-x-[3%] 2xl:gap-x-[4.2%]">
              {STAGES.map((s, i) => {
                const Icon = s.icon;
                const style = {
                  "--tone": s.tone.accent,
                  "--tone-soft": s.tone.soft,
                  "--tone-chip": s.tone.chip,
                } as CSSProperties;
                return (
                  <motion.li
                    key={s.num}
                    style={style}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px 0px" }}
                    transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex flex-col items-center"
                  >
                    <div className="relative z-10 flex w-full flex-col items-center rounded-[28px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,var(--tone-soft)_100%)] px-3 pb-12 pt-5 text-center shadow-[0_22px_44px_-26px_rgba(20,70,150,0.45),inset_0_1px_0_#fff] backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 sm:px-4 xl:h-[300px] xl:px-2.5 2xl:h-[290px] 2xl:px-5">
                      <span className="font-display text-[21px] font-bold leading-none text-[var(--tone)] sm:text-[23px]">
                        {s.num}
                      </span>
                      <span className="mt-3 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#FFFFFF_0%,var(--tone-chip)_70%)] shadow-[0_10px_24px_-10px_var(--tone),inset_0_1px_0_#fff] sm:h-[80px] sm:w-[80px] xl:h-[68px] xl:w-[68px] 2xl:h-[80px] 2xl:w-[80px]">
                        <Icon
                          className="h-9 w-9 text-[var(--tone)] drop-shadow-[0_4px_6px_rgba(20,70,150,0.2)] sm:h-10 sm:w-10"
                          fill="var(--tone)"
                          fillOpacity={0.22}
                          strokeWidth={2.4}
                        />
                      </span>
                      <h3 className="mt-3 font-display text-[18px] font-bold text-brand-navy sm:text-[20px]">{s.name}</h3>
                      <p className="mt-2 text-[14px] leading-[1.45] text-[#55647D] sm:text-[15px] xl:text-[13.5px] 2xl:text-[16px]">{s.desc}</p>
                    </div>

                    {/* 3D platform + stage object, overlapping the card's foot */}
                    <div className="relative z-20 -mt-10 w-[82%] max-w-[150px]">
                      <Platform id={`lc-${s.art}`}>{ILLUSTRATIONS[s.art](`lc-${s.art}`)}</Platform>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          {/* ---------- Disciplined execution bar ---------- */}
          <Reveal delay={0.1} className="mt-8 xl:mt-6">
            <div className="flex flex-col items-start gap-5 rounded-[36px] border border-white bg-white/70 px-6 py-6 shadow-[0_28px_60px_-30px_rgba(20,70,150,0.4),inset_0_1px_0_#fff] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-9 sm:py-7">
              <div className="flex items-center gap-5">
                <span className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#EEF5FF,#D8E8FF)]">
                  <InfinityIcon className="h-8 w-8 text-brand-blue" strokeWidth={2.8} />
                </span>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand-blue sm:text-[13px]">
                    Disciplined Execution
                  </p>
                  <p className="mt-1 font-display text-[17px] font-bold leading-snug text-brand-navy sm:text-[20px]">
                    Disciplined execution across all stages of product ownership.
                  </p>
                </div>
              </div>
              <Link
                href="/how-we-work"
                className="group inline-flex h-14 shrink-0 items-center justify-center gap-2.5 self-stretch rounded-full bg-gradient-to-r from-[#1C8BFF] to-[#0F63E0] px-8 text-[16px] font-semibold text-white shadow-[0_14px_28px_-12px_rgba(20,125,255,0.8)] transition-transform duration-300 hover:-translate-y-0.5 sm:self-auto"
              >
                Explore Full Lifecycle
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
