"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Box,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Headphones,
  LayoutDashboard,
  Layers,
  RefreshCw,
  Rocket,
  Settings,
  ShieldCheck,
  Target,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

const EASE = [0.22, 1, 0.36, 1] as const;

const PRINCIPLES = [
  { icon: Target, title: ["Practical", "Innovation"], desc: "Solutions for real operational needs." },
  { icon: Layers, title: ["Focused", "Products"], desc: "Simple, scalable and reliable." },
  { icon: BarChart3, title: ["Measurable", "Impact"], desc: "Continuous user-led growth." },
];

/* ------------------------------------------------------------------------ */
/* Dashboard mockup — drawn at a fixed design size and scaled to its column */
/* ------------------------------------------------------------------------ */

const DASH_W = 760;
const DASH_H = 540;

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

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Box, label: "Products" },
  { icon: UserRound, label: "Users" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Headphones, label: "Support" },
  { icon: Settings, label: "Settings" },
];

const STATS = [
  { value: "120+", label: "Active Organizations", icon: Users },
  { value: "98%", label: "Uptime Reliability", icon: ShieldCheck },
  { value: "3x", label: "Operational Efficiency", icon: BarChart3 },
];

const BARS = [18, 26, 34, 30, 44, 50, 46, 58, 64, 72, 80];

function Dashboard() {
  return (
    <div
      className="relative flex overflow-hidden rounded-[30px] border border-[#DCE7F5] bg-white/95 shadow-[0_50px_90px_-40px_rgba(20,70,150,0.45),0_2px_8px_rgba(20,70,150,0.06)]"
      style={{ width: DASH_W, height: DASH_H }}
    >
      {/* Sidebar */}
      <div className="flex w-[168px] shrink-0 flex-col border-r border-[#EEF3FA] px-4 py-6">
        <Logo imageClassName="h-8 w-8" wordmarkClassName="text-[21px]" className="!gap-2 px-1" />
        <div className="mt-8 space-y-1.5">
          {NAV.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] font-medium ${
                active ? "bg-brand-blue text-white shadow-[0_8px_16px_-8px_rgba(20,125,255,0.8)]" : "text-[#4A5B78]"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col gap-3.5 p-5">
        <div className="flex items-center justify-between">
          <p className="font-display text-[15px] font-bold text-brand-navy">Overview</p>
          <span className="rounded-full border border-[#DCE7F5] bg-[#F5F9FF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#7A8AA5]">
            Sample data
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center justify-between rounded-2xl border border-[#EEF3FA] bg-white p-3.5 shadow-[0_6px_16px_-10px_rgba(20,70,150,0.3)]">
              <div>
                <p className="font-display text-[22px] font-bold leading-none text-brand-navy">{value}</p>
                <p className="mt-1.5 text-[11px] text-[#6A7A95]">{label}</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF3FF] text-brand-blue">
                <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1.45fr_1fr] gap-3">
          <div className="rounded-2xl border border-[#EEF3FA] bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-bold text-brand-navy">Product Growth</p>
              <span className="flex items-center gap-0.5 text-[10px] text-[#8A99B2]">
                This Year <ChevronDown className="h-3 w-3" />
              </span>
            </div>
            <div className="relative mt-3 flex h-[112px] items-end gap-[7px] border-b border-[#EEF3FA]">
              {[28, 56, 84].map((y) => (
                <span key={y} className="absolute inset-x-0 border-t border-dashed border-[#EEF3FA]" style={{ bottom: y }} />
              ))}
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className="relative flex-1 rounded-t-[5px] bg-gradient-to-t from-[#6FB0FF] to-[#147DFF]"
                  style={{ height: `${h + 16}%`, opacity: 0.45 + i * 0.05 }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#EEF3FA] bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-bold text-brand-navy">User Engagement</p>
              <span className="text-[10px] text-[#8A99B2]">This Year</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="relative h-[92px] w-[92px] shrink-0">
                <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90">
                  <circle cx="21" cy="21" r="16" fill="none" stroke="#EAF3FF" strokeWidth="5" />
                  <circle cx="21" cy="21" r="16" fill="none" stroke="#147DFF" strokeWidth="5" strokeDasharray="85.5 100.5" strokeLinecap="round" />
                  <circle cx="21" cy="21" r="16" fill="none" stroke="#FDBA74" strokeWidth="5" strokeDasharray="8 100.5" strokeDashoffset="-88" strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-display text-[20px] font-bold text-brand-navy">85%</span>
              </div>
              <div className="space-y-2 text-[10.5px] text-[#4A5B78]">
                {[
                  ["bg-brand-blue", "Active Users"],
                  ["bg-[#6FB0FF]", "Returning Users"],
                  ["bg-[#FDBA74]", "New Users"],
                ].map(([c, l]) => (
                  <p key={l} className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${c}`} />
                    {l}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-[1.45fr_1fr] gap-3">
          <div className="rounded-2xl border border-[#EEF3FA] bg-white p-4">
            <p className="text-[13px] font-bold text-brand-navy">Recent Activity</p>
            <div className="mt-2.5 space-y-2.5">
              {[
                { icon: UserRound, t: "New organization onboarded", c: "text-brand-blue bg-[#EAF3FF]", time: "2 hours ago" },
                { icon: RefreshCw, t: "Feature update released", c: "text-emerald-600 bg-emerald-50", time: "5 hours ago" },
                { icon: CircleCheck, t: "Support request resolved", c: "text-brand-blue bg-[#EAF3FF]", time: "1 day ago" },
              ].map(({ icon: Icon, t, c, time }) => (
                <div key={t} className="flex items-center justify-between text-[11.5px]">
                  <span className="flex items-center gap-2 text-[#3D4F6B]">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-lg ${c}`}>
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </span>
                  <span className="text-[10px] text-[#8A99B2]">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#EEF3FA] bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-bold text-brand-navy">Product Modules</p>
              <ChevronRight className="h-3.5 w-3.5 text-[#8A99B2]" />
            </div>
            <div className="mt-2.5 space-y-2.5">
              {[
                { icon: Wrench, t: "Development", c: "text-brand-blue bg-[#EAF3FF]" },
                { icon: Settings, t: "Operations", c: "text-emerald-600 bg-emerald-50" },
                { icon: RefreshCw, t: "Improvement", c: "text-orange-500 bg-orange-50" },
              ].map(({ icon: Icon, t, c }) => (
                <p key={t} className="flex items-center gap-2 text-[11.5px] text-[#3D4F6B]">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-lg ${c}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  const { ref, scale } = useFitScale(820);
  return (
    <div ref={ref} className="relative w-full" style={{ height: 660 * scale }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: 820, height: 660, transform: `scale(${scale})` }}>
        {/* Halo */}
        <div className="absolute left-[60px] top-[0px] h-[660px] w-[740px] rounded-full bg-[radial-gradient(circle_at_50%_48%,#CFE3FF_0%,#DDEBFF_45%,#E8F1FF_62%,rgba(234,243,255,0)_72%)]" />
        {/* Dot grid */}
        <div
          className="absolute right-0 top-[50px] h-[130px] w-[150px] opacity-50"
          style={{ backgroundImage: "radial-gradient(#147DFF 1.6px, transparent 1.8px)", backgroundSize: "20px 20px" }}
          aria-hidden
        />
        {/* Orbit + node */}
        <svg viewBox="0 0 820 660" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <path d="M110 500 C10 440 -10 240 46 118" fill="none" stroke="#147DFF" strokeWidth="2.5" strokeLinecap="round" opacity=".75" />
          <circle cx="46" cy="118" r="22" fill="#147DFF" opacity=".15" />
          <circle cx="46" cy="118" r="14" fill="#147DFF" />
        </svg>

        {/* Dashboard, tilted */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="absolute left-[60px] top-[60px]"
          style={{ perspective: 1800 }}
        >
          <div style={{ transform: "rotateZ(5deg) rotateY(-10deg) rotateX(4deg)", transformOrigin: "50% 50%" }}>
            <Dashboard />
          </div>
        </motion.div>

        {/* Floating glass card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="absolute bottom-[6px] right-[10px] -rotate-[10deg]"
        >
          <div className="flex items-center gap-4 rounded-[24px] border border-white bg-white/75 px-6 py-5 shadow-[0_28px_50px_-22px_rgba(20,70,150,0.55)] ring-1 ring-[#D6E7FB] backdrop-blur-xl">
            <Rocket className="h-10 w-10 text-brand-blue" fill="#A9D2FF" strokeWidth={1.8} />
            <div>
              <p className="font-display text-[19px] font-semibold leading-tight text-brand-navy">Simple Products</p>
              <p className="font-display text-[19px] font-bold leading-tight text-brand-navy">Real Impact</p>
              <svg viewBox="0 0 140 12" className="mt-1 h-[10px] w-[130px]" aria-hidden>
                <path d="M2 9 C40 3 90 1 138 4" fill="none" stroke="#147DFF" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <svg viewBox="0 0 30 30" className="absolute -right-2 -top-8 h-7 w-7" aria-hidden>
            <path d="M8 26 L20 8 M16 28 L28 16" stroke="#147DFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export default function WhyHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FAFF_60%,#FFFFFF_100%)] py-12 sm:py-16 xl:py-20">
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[700px] w-[900px] rounded-full bg-[#E4EFFF]/60 blur-[120px]" aria-hidden />

      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1480px] items-center gap-12 xl:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] xl:gap-6">
          {/* Left */}
          <Reveal className="relative z-10 min-w-0">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
              <span className="text-[14px] font-semibold uppercase tracking-[0.14em] text-brand-blue">Why Maaptrix</span>
            </span>

            <h1 className="mt-6 font-display text-[46px] font-extrabold leading-[1.02] tracking-[-0.035em] text-brand-navy sm:text-[60px] xl:text-[clamp(56px,4.4vw,72px)]">
              <span className="block">Built Differently,</span>
              <span className="block text-brand-blue">On Purpose.</span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[18px] leading-[1.6] text-[#5A6A85] sm:text-[20px]">
              Maaptrix builds focused software products around real operational problems — from product planning and
              development through launch, support and continuous improvement.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex h-[60px] items-center justify-center gap-3 rounded-xl bg-brand-navy px-8 text-[17px] font-semibold text-white shadow-[0_14px_28px_-14px_rgba(11,31,65,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue"
              >
                Explore Products
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[60px] items-center justify-center rounded-xl border border-[#DCE7F5] bg-white px-8 text-[17px] font-semibold text-brand-navy shadow-[0_8px_20px_-14px_rgba(20,70,150,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
              >
                Request a Demo
              </Link>
            </div>

            <div className="mt-12 grid max-w-[760px] grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#DCE7F5]">
              {PRINCIPLES.map(({ icon: Icon, title, desc }, i) => (
                <div key={title[0]} className={`flex items-start gap-4 ${i > 0 ? "sm:pl-6" : ""} sm:pr-4`}>
                  <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#EEF5FF,#DAE9FF)]">
                    <Icon className="h-7 w-7 text-brand-blue" fill="#147DFF" fillOpacity={0.18} strokeWidth={2.3} />
                  </span>
                  <div>
                    <p className="font-display text-[18px] font-semibold leading-[1.25] text-brand-navy">
                      {title[0]}
                      <br />
                      {title[1]}
                    </p>
                    <p className="mt-2 text-[15px] leading-[1.45] text-[#6A7A95]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right */}
          <div className="relative mx-auto w-full max-w-[820px] xl:-mr-[clamp(0px,2vw,40px)]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
