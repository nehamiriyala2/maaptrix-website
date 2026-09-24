"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Box,
  Headphones,
  LayoutDashboard,
  Layers,
  Lightbulb,
  Map as MapIcon,
  Rocket,
  Settings,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;

const ADVANTAGES: { icon: Icon; title: string; desc: string }[] = [
  { icon: Target, title: "Direct Product Ownership", desc: "We own our products end-to-end without scope dilution." },
  {
    icon: MapIcon,
    title: "Long-Term Roadmap Stewardship",
    desc: "Strategic planning and continuous improvement behind every release.",
  },
  {
    icon: Settings,
    title: "Commitment to Continuous Operation",
    desc: "Ongoing maintenance, user feedback and product evolution.",
  },
];

const METRICS: { icon: Icon; value: string; label: string }[] = [
  { icon: Users, value: "120+", label: "Active Organizations" },
  { icon: ShieldCheck, value: "99.9%", label: "Uptime Reliability" },
  { icon: BarChart3, value: "3x", label: "Operational Efficiency" },
];

const STAGES: { icon: Icon; num: string; label: string }[] = [
  { icon: Lightbulb, num: "01", label: "Idea" },
  { icon: Layers, num: "02", label: "Build" },
  { icon: Rocket, num: "03", label: "Launch" },
  { icon: TrendingUp, num: "04", label: "Operate" },
  { icon: BarChart3, num: "05", label: "Improve" },
];

/* ------------------------------------------------------------------------ */
/* Left visual — fixed design canvas scaled to its column                   */
/* ------------------------------------------------------------------------ */

const CANVAS_W = 820;
const CANVAS_H = 660;

function useFitScale(designWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / designWidth));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);
  return { ref, scale };
}

function FloatIcon({ icon: I, className, delay }: { icon: Icon; className: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={`absolute z-30 flex h-[76px] w-[76px] items-center justify-center rounded-[22px] border border-white bg-white shadow-[0_18px_36px_-16px_rgba(20,110,230,0.5)] ${className}`}
    >
      <I className="h-9 w-9 text-brand-blue" strokeWidth={2.2} />
    </motion.span>
  );
}

const SIDEBAR: { icon: Icon; label: string; active?: boolean }[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Box, label: "Products" },
  { icon: BarChart3, label: "Analytics" },
  { icon: MapIcon, label: "Roadmap" },
  { icon: Headphones, label: "Support" },
];

function DashboardMock() {
  return (
    <div className="relative">
      {/* Back layers for depth */}
      <div className="absolute -right-5 -top-5 h-full w-full rounded-[22px] border border-[#DCEEFF] bg-white/50" />
      <div className="absolute -right-2.5 -top-2.5 h-full w-full rounded-[22px] border border-[#DCEEFF] bg-white/70" />

      <div className="relative flex h-[370px] w-[500px] overflow-hidden rounded-[22px] border border-[#DCEEFF] bg-white shadow-[0_40px_70px_-34px_rgba(85,85,85,0.45)]">
        <div className="flex w-[130px] shrink-0 flex-col border-r border-[#EEF3FA] px-3 py-5">
          <Logo imageClassName="h-6 w-6" wordmarkClassName="text-[16px]" className="!gap-1.5 px-1" />
          <div className="mt-5 space-y-1">
            {SIDEBAR.map(({ icon: I, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11.5px] font-medium ${
                  active ? "bg-brand-blue text-white" : "text-[#4A5B78]"
                }`}
              >
                <I className="h-3.5 w-3.5" strokeWidth={2} />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
          <div className="relative flex-1 rounded-2xl border border-[#EEF3FA] bg-[linear-gradient(180deg,#F7FAFF,#FFFFFF)] p-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-xl border border-[#DCEEFF] bg-white px-2.5 py-1 text-[11px] font-semibold text-brand-navy shadow-[0_6px_14px_-8px_rgba(85,85,85,0.4)]">
                <TrendingUp className="h-3.5 w-3.5 text-brand-blue" /> Continuous Growth
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-[#A0AEC5]">Sample data</span>
            </div>
            <svg viewBox="0 0 320 130" preserveAspectRatio="none" className="mt-1 h-[140px] w-full">
              <defs>
                <linearGradient id="pa-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#147DFF" stopOpacity=".2" />
                  <stop offset="100%" stopColor="#147DFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[35, 70, 105].map((y) => (
                <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#EEF3FA" />
              ))}
              <path
                d="M0 100 C30 60 50 50 75 80 S120 110 150 88 S190 70 210 92 S250 70 270 50 S300 20 320 18 L320 130 L0 130Z"
                fill="url(#pa-area)"
              />
              <path
                d="M0 100 C30 60 50 50 75 80 S120 110 150 88 S190 70 210 92 S250 70 270 50 S300 20 320 18"
                fill="none"
                stroke="#147DFF"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {[
              { icon: Users, v: "120+", l: "Active Users" },
              { icon: ShieldCheck, v: "99.9%", l: "Uptime" },
              { icon: BarChart3, v: "3x", l: "Efficiency" },
            ].map(({ icon: I, v, l }) => (
              <div key={l} className="rounded-xl border border-[#EEF3FA] bg-white p-3 shadow-[0_6px_14px_-10px_rgba(85,85,85,0.35)]">
                <I className="h-4 w-4 text-brand-blue" strokeWidth={2.2} />
                <p className="mt-1.5 font-display text-[19px] font-bold leading-none text-brand-navy">{v}</p>
                <p className="mt-1 text-[10px] text-[#6A7A95]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OwnershipVisual() {
  const { ref, scale } = useFitScale(CANVAS_W);
  return (
    <div ref={ref} className="relative w-full" style={{ height: CANVAS_H * scale }}>
      <div
        className="absolute left-0 top-0 origin-top-left overflow-hidden rounded-[32px] border border-[#DCEEFF] bg-[linear-gradient(160deg,#F4F9FF_0%,#EAF3FF_55%,#F7FAFF_100%)] shadow-[0_40px_80px_-50px_rgba(85,85,85,0.45)]"
        style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})` }}
      >
        {/* Atmosphere */}
        <div className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-white/70 blur-[30px]" />
        <div className="absolute right-[-60px] top-[-40px] h-[380px] w-[380px] rounded-full bg-[#DCEEFF]/80 blur-[20px]" />
        <div className="absolute left-[200px] top-[120px] h-[420px] w-[520px] rounded-full bg-[#DCEEFF]/60" />

        {/* Dotted orbit */}
        <svg viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <ellipse cx="520" cy="330" rx="300" ry="260" fill="none" stroke="#147DFF" strokeOpacity=".35" strokeWidth="2" strokeDasharray="5 8" />
          <circle cx="455" cy="77" r="8" fill="#147DFF" />
          <circle cx="690" cy="118" r="7" fill="#147DFF" />
          <circle cx="232" cy="410" r="5" fill="#147DFF" opacity=".6" />
        </svg>

        {/* Dashboard (tilted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="absolute left-[292px] top-[118px] z-10"
          style={{ perspective: 1600 }}
        >
          <div style={{ transform: "rotateZ(4deg) rotateY(-10deg)" }}>
            <DashboardMock />
          </div>
        </motion.div>

        {/* Text card */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="absolute left-[38px] top-[88px] z-20 w-[300px] rounded-[24px] border border-[#DCEEFF] bg-white/92 p-7 shadow-[0_30px_60px_-30px_rgba(85,85,85,0.45)] backdrop-blur-md"
        >
          <p className="text-[15px] font-medium text-brand-blue">From Idea to Impact</p>
          <p className="mt-3 font-display text-[30px] font-bold leading-[1.12] text-brand-navy">
            Product
            <br />
            Ownership
            <br />& Stewardship
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.5] text-[#5A6A85]">
            We build and operate our own solutions with long-term roadmaps, continuous maintenance and direct
            accountability.
          </p>
          <Link
            href="/how-we-work"
            className="group mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-brand-blue px-5 text-[15px] font-semibold text-white shadow-[0_12px_24px_-10px_rgba(20,125,255,0.8)] transition-colors hover:bg-brand-blue-dark"
          >
            Explore Our Approach
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <FloatIcon icon={Lightbulb} className="left-[350px] top-[14px]" delay={0.3} />
        <FloatIcon icon={TrendingUp} className="right-[46px] top-[70px]" delay={0.4} />
        <FloatIcon icon={Target} className="left-[312px] top-[430px]" delay={0.5} />

        {/* Lifecycle strip */}
        <div className="absolute inset-x-[14px] bottom-[14px] z-30 h-[108px] rounded-[20px] border border-[#DCEEFF] bg-white/92 px-10 shadow-[0_18px_40px_-26px_rgba(85,85,85,0.45)] backdrop-blur-md">
          <div className="absolute left-[64px] right-[64px] top-[38px] h-[2px] bg-[#DCEEFF]" aria-hidden />
          <div className="absolute left-[64px] top-[38px] h-[2px] w-[70px] bg-brand-blue" aria-hidden />
          <ol className="relative flex h-full items-start justify-between pt-[16px]">
            {STAGES.map(({ icon: I, num, label }, i) => (
              <li key={label} className="flex w-[90px] flex-col items-center">
                <span
                  className={`flex h-[44px] w-[44px] items-center justify-center rounded-full ${
                    i === 0 ? "bg-brand-blue text-white shadow-[0_8px_18px_-6px_rgba(20,125,255,0.8)]" : "bg-[#EAF3FF] text-brand-blue"
                  }`}
                >
                  <I className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="mt-1 text-[11px] font-bold text-brand-blue">{num}</span>
                <span className="text-[13px] font-bold uppercase tracking-wide text-brand-navy">{label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export default function PrimaryAdvantageSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-14 sm:py-16 xl:py-20">
      <div className="page-container">
        <div className="mx-auto grid max-w-[1500px] items-center gap-12 xl:grid-cols-[minmax(0,53fr)_minmax(0,47fr)] xl:gap-12">
          <Reveal className="order-2 min-w-0 xl:order-1">
            <OwnershipVisual />
          </Reveal>

          <Reveal delay={0.1} className="order-1 min-w-0 xl:order-2">
            <span className="inline-flex items-center gap-3 rounded-full bg-[#EAF3FF] py-1.5 pl-1.5 pr-4">
              <span className="rounded-full bg-white px-3 py-1 text-[13px] font-bold text-brand-blue">01</span>
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-brand-blue sm:text-[14px]">
                Primary Advantage
              </span>
            </span>

            <h2 className="mt-5 font-display text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-[52px] xl:text-[clamp(44px,3.6vw,60px)]">
              Product-First <span className="text-brand-blue">Company</span>
            </h2>
            <p className="mt-4 max-w-[650px] text-[18px] leading-[1.5] text-[#5A6A85] sm:text-[20px]">
              Maaptrix builds and improves its own solutions rather than functioning as an outsourced development
              agency.
            </p>

            <ul className="mt-7 space-y-5">
              {ADVANTAGES.map(({ icon: I, title, desc }) => (
                <li key={title} className="flex items-start gap-5">
                  <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-[#EAF3FF]">
                    <I className="h-7 w-7 text-brand-blue" strokeWidth={2.2} />
                  </span>
                  <div className="pt-1.5">
                    <p className="font-display text-[18px] font-bold text-brand-navy">{title}</p>
                    <p className="mt-1 text-[16px] leading-[1.5] text-[#5A6A85]">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="my-7 h-px w-full bg-[#DCEEFF]" />

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {METRICS.map(({ icon: I, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3.5 rounded-2xl border border-[#DCEEFF] bg-white px-4 py-4 shadow-[0_12px_28px_-20px_rgba(85,85,85,0.4)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF]">
                    <I className="h-6 w-6 text-brand-blue" strokeWidth={2.2} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[26px] font-bold leading-none text-brand-navy">{value}</p>
                    <p className="mt-1.5 text-[13px] leading-tight text-[#6A7A95]">{label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[12px] text-[#A0AEC5]">Illustrative figures.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
