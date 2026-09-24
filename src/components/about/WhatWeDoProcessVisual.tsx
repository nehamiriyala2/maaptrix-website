"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Box,
  Bus,
  CodeXml,
  FileText,
  LayoutDashboard,
  Rocket,
  Search,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import Logo from "@/components/Logo";

/**
 * Fixed design canvas for the process composition. Everything inside is
 * positioned in these coordinates and the whole canvas is scaled to fit
 * its column, so the laptop, cards and flow arrows never drift apart.
 */
const DESIGN_W = 660;
const DESIGN_H = 480;

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

/* -------------------------------------------------------------------------- */
/* Floating process card                                                      */
/* -------------------------------------------------------------------------- */

function ProcessCard({
  icon,
  title,
  subtitle,
  className,
  delay,
  extra,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className: string;
  delay: number;
  extra?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-20 w-max ${className}`}
    >
      <div className="relative flex items-center gap-3.5 rounded-[20px] border border-white/90 bg-white/85 py-3.5 pl-4 pr-7 shadow-[0_18px_40px_-14px_rgba(85,85,85,0.28),0_2px_6px_rgba(85,85,85,0.06)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
        <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center">{icon}</div>
        <div className="leading-tight">
          <p className="font-display text-[18px] font-bold text-brand-navy">{title}</p>
          <p className="mt-0.5 text-[15px] text-slate-500">{subtitle}</p>
        </div>
        {extra}
      </div>
    </motion.div>
  );
}

/** Soft isometric cube used for the "Plan" card. */
function CubeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-[44px] w-[44px] drop-shadow-[0_6px_10px_rgba(20,125,255,0.35)]" aria-hidden>
      <defs>
        <linearGradient id="wwd-cube-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#BFE0FF" />
          <stop offset="100%" stopColor="#7DBBFF" />
        </linearGradient>
        <linearGradient id="wwd-cube-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D96FF" />
          <stop offset="100%" stopColor="#147DFF" />
        </linearGradient>
        <linearGradient id="wwd-cube-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C6FE0" />
          <stop offset="100%" stopColor="#0F57C2" />
        </linearGradient>
      </defs>
      <path d="M24 4 42 14 24 24 6 14Z" fill="url(#wwd-cube-top)" />
      <path d="M6 14 24 24V44L6 34Z" fill="url(#wwd-cube-left)" />
      <path d="M42 14 24 24V44L42 34Z" fill="url(#wwd-cube-right)" />
      <path d="M24 4 42 14 24 24 6 14Z" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="1" />
    </svg>
  );
}

/** Blue bar chart with a green trend arrow for the "Operate" card. */
function BarsIcon() {
  return (
    <div className="flex h-[40px] items-end gap-[5px]" aria-hidden>
      {[18, 28, 40].map((h) => (
        <span
          key={h}
          style={{ height: h }}
          className="w-[10px] rounded-[4px] bg-gradient-to-b from-[#4DA3FF] to-[#147DFF] shadow-[0_4px_8px_-2px_rgba(20,125,255,0.45)]"
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Laptop with Maaptrix dashboard                                             */
/* -------------------------------------------------------------------------- */

const SIDEBAR = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Box, label: "Products" },
  { icon: Bus, label: "Operations" },
  { icon: Users, label: "Users" },
  { icon: BarChart3, label: "Analytics" },
  { icon: FileText, label: "Reports" },
];

function Laptop() {
  return (
    <div className="relative w-[540px]">
      {/* Screen lid: silver frame → black bezel → display */}
      <div className="relative rounded-[22px] bg-gradient-to-br from-[#F4F6FA] via-[#D5DBE4] to-[#B9C2CF] p-[5px] shadow-[0_30px_60px_-20px_rgba(24,24,24,0.45),inset_0_1px_0_rgba(255,255,255,0.9)]">
        <div className="relative rounded-[17px] bg-[#101010] p-[9px]">
          <span className="absolute left-1/2 top-[3px] h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-[#3D3D3D]" />

          <div className="relative flex h-[318px] flex-col overflow-hidden rounded-[9px] bg-[#F4F8FD] text-brand-navy">
            {/* Top bar */}
            <div className="flex h-[30px] shrink-0 items-center justify-between border-b border-slate-200/80 bg-white px-3">
              <Logo
                imageClassName="h-[15px] w-[15px]"
                wordmarkClassName="text-[11px]"
                className="!gap-1.5"
              />
              <div className="flex items-center gap-2">
                <div className="flex w-[120px] items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-[3px] text-[7.5px] text-slate-400">
                  <Search className="h-2.5 w-2.5" />
                  Search
                </div>
                <span className="relative flex h-[16px] w-[16px] items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <Bell className="h-2.5 w-2.5" />
                  <span className="absolute -right-px -top-px h-[5px] w-[5px] rounded-full bg-brand-blue ring-1 ring-white" />
                </span>
                <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-brand-navy text-[7px] font-bold text-white">
                  M
                </span>
              </div>
            </div>

            <div className="flex min-h-0 flex-1">
              {/* Sidebar */}
              <div className="flex w-[86px] shrink-0 flex-col justify-between bg-[#181818] px-1.5 py-2">
                <div className="space-y-[3px]">
                  {SIDEBAR.map(({ icon: Icon, label, active }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-1.5 rounded-md px-1.5 py-[5px] text-[7.5px] font-semibold ${
                        active ? "bg-brand-blue text-white" : "text-slate-300"
                      }`}
                    >
                      <Icon className="h-[9px] w-[9px]" />
                      {label}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 border-t border-white/10 px-1.5 pt-1.5 text-[7.5px] text-slate-400">
                  <Settings className="h-[9px] w-[9px]" />
                  Settings
                </div>
              </div>

              {/* Main */}
              <div className="flex min-w-0 flex-1 flex-col gap-[7px] p-2.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-[10.5px] font-bold">Operations Overview</p>
                    <p className="text-[7px] text-slate-500">Live status across your products</p>
                  </div>
                  <span className="rounded-md border border-slate-200 bg-white px-1.5 py-[2px] text-[7px] text-slate-500">
                    This week
                  </span>
                </div>

                {/* Stat tiles */}
                <div className="grid grid-cols-3 gap-[6px]">
                  {[
                    { label: "Active Routes", value: "128", tone: "bg-brand-blue" },
                    { label: "Attendance", value: "2,450", tone: "bg-sky-500" },
                    { label: "Open Tickets", value: "14", tone: "bg-sky-500" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg border border-slate-200/70 bg-white px-2 py-1.5 shadow-[0_1px_2px_rgba(29,29,29,0.04)]">
                      <div className="flex items-center gap-1 text-[6.5px] text-slate-500">
                        <span className={`h-[5px] w-[5px] rounded-full ${s.tone}`} />
                        {s.label}
                      </div>
                      <p className="mt-0.5 font-display text-[12px] font-bold leading-none">{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* Chart + donut */}
                <div className="grid min-h-0 flex-1 grid-cols-[1.65fr_1fr] gap-[6px]">
                  <div className="flex flex-col rounded-lg border border-slate-200/70 bg-white p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[7.5px] font-bold">Product Usage</span>
                      <span className="rounded bg-brand-blue/10 px-1 text-[6.5px] font-bold text-brand-blue">Weekly</span>
                    </div>
                    <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="mt-1 w-full flex-1">
                      <defs>
                        <linearGradient id="wwd-area" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#147DFF" stopOpacity=".35" />
                          <stop offset="100%" stopColor="#147DFF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {[20, 40, 60].map((y) => (
                        <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="#E6EDF6" strokeWidth=".8" />
                      ))}
                      <path
                        d="M0 66 C18 60 26 48 42 52 S66 34 82 40 S104 58 120 36 S146 30 158 18 S184 26 200 10 L200 80 L0 80Z"
                        fill="url(#wwd-area)"
                      />
                      <path
                        d="M0 66 C18 60 26 48 42 52 S66 34 82 40 S104 58 120 36 S146 30 158 18 S184 26 200 10"
                        fill="none"
                        stroke="#147DFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 72 C24 70 40 64 60 66 S96 56 120 58 S160 46 200 42"
                        fill="none"
                        stroke="#8BC2FF"
                        strokeWidth="1.2"
                        strokeDasharray="3 3"
                      />
                    </svg>
                    <div className="mt-0.5 flex justify-between text-[6px] text-slate-400">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                        <span key={d}>{d}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col rounded-lg border border-slate-200/70 bg-white p-2">
                    <span className="text-[7.5px] font-bold">Module Split</span>
                    <div className="flex flex-1 items-center justify-center">
                      <svg viewBox="0 0 42 42" className="h-[62px] w-[62px] -rotate-90">
                        <circle cx="21" cy="21" r="15.9" fill="none" stroke="#EAF2FF" strokeWidth="6" />
                        <circle cx="21" cy="21" r="15.9" fill="none" stroke="#147DFF" strokeWidth="6" strokeDasharray="48 52" />
                        <circle cx="21" cy="21" r="15.9" fill="none" stroke="#5EC2FF" strokeWidth="6" strokeDasharray="28 72" strokeDashoffset="-48" />
                        <circle cx="21" cy="21" r="15.9" fill="none" stroke="#A5B4FC" strokeWidth="6" strokeDasharray="16 84" strokeDashoffset="-76" />
                      </svg>
                    </div>
                    <div className="space-y-[2px] text-[6px] text-slate-500">
                      {[
                        ["bg-brand-blue", "School"],
                        ["bg-[#5EC2FF]", "Transport"],
                        ["bg-[#A5B4FC]", "Other"],
                      ].map(([c, l]) => (
                        <div key={l} className="flex items-center gap-1">
                          <span className={`h-[4px] w-[4px] rounded-full ${c}`} />
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Activity rows */}
                <div className="rounded-lg border border-slate-200/70 bg-white px-2 py-1.5">
                  {[
                    ["Route sync completed", "bg-sky-500", "Done"],
                    ["New module release", "bg-brand-blue", "Live"],
                  ].map(([t, c, s]) => (
                    <div key={t} className="flex items-center justify-between py-[2px] text-[6.5px]">
                      <span className="flex items-center gap-1 text-slate-600">
                        <span className={`h-[5px] w-[5px] rounded-full ${c}`} />
                        {t}
                      </span>
                      <span className="rounded bg-slate-100 px-1 font-semibold text-slate-500">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glass reflection */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.12)_100%)]" />
          </div>
        </div>
      </div>

      {/* Hinge + aluminium deck */}
      <div className="relative -mt-px ml-[-5%] w-[110%]">
        <div className="h-[6px] w-full rounded-t-[3px] bg-gradient-to-b from-[#AEB7C4] to-[#E3E8EF]" />
        <div className="relative h-[13px] w-full rounded-b-[26px] bg-gradient-to-b from-[#EEF1F6] via-[#D2D9E3] to-[#A9B3C1] shadow-[0_14px_24px_-10px_rgba(24,24,24,0.5)]">
          <span className="absolute left-1/2 top-0 h-[5px] w-[78px] -translate-x-1/2 rounded-b-[8px] bg-[#B9C2CE]" />
        </div>
      </div>
      <div className="mx-auto mt-2 h-[18px] w-[88%] rounded-[50%] bg-[#181818]/25 blur-[12px]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Composition                                                                */
/* -------------------------------------------------------------------------- */

export default function WhatWeDoProcessVisual() {
  const { ref, scale } = useFitScale(DESIGN_W);

  return (
    <div ref={ref} className="relative w-full" style={{ height: DESIGN_H * scale }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: DESIGN_W, height: DESIGN_H, transform: `scale(${scale})` }}
      >
        {/* Background discs + glow */}
        <div className="pointer-events-none absolute left-[20px] top-[70px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.9),rgba(214,234,255,0.55)_55%,rgba(191,227,255,0.25)_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]" />
        <div className="pointer-events-none absolute left-[250px] top-[20px] h-[330px] w-[330px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7),rgba(207,234,255,0.35)_65%,transparent_100%)]" />
        <div className="pointer-events-none absolute left-[120px] top-[200px] h-[260px] w-[420px] rounded-full bg-[#147DFF]/20 blur-[60px]" />

        {/* Flow arrows */}
        <svg
          viewBox={`0 0 ${DESIGN_W} ${DESIGN_H}`}
          className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
          aria-hidden
        >
          <defs>
            <marker id="wwd-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M1 1 L8 5 L1 9" fill="none" stroke="#3B8EFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
            <filter id="wwd-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g fill="none" stroke="#4E9BFF" strokeWidth="1.6" strokeDasharray="4 5" strokeLinecap="round" filter="url(#wwd-glow)">
            {/* Plan → Develop */}
            <path d="M178 66 C198 60 214 58 232 58" markerEnd="url(#wwd-arrow)" />
            {/* Develop → Launch */}
            <path d="M424 36 C470 26 512 36 540 72" markerEnd="url(#wwd-arrow)" />
            {/* Launch → Operate */}
            <path d="M628 168 C650 230 640 300 606 340" markerEnd="url(#wwd-arrow)" />
            {/* Operate → back to Plan (continuous loop) */}
            <path d="M40 112 C8 170 0 250 30 330" strokeOpacity=".55" markerStart="url(#wwd-arrow)" />
          </g>
        </svg>

        {/* Laptop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[46px] top-[118px] z-[5]"
          style={{ perspective: 1600 }}
        >
          <div
            className="transition-transform duration-700 hover:[transform:rotateY(12deg)_rotateX(4deg)_rotateZ(1.5deg)]"
            style={{ transform: "rotateY(16deg) rotateX(6deg) rotateZ(2deg)", transformOrigin: "40% 60%" }}
          >
            <Laptop />
          </div>
        </motion.div>

        {/* Process cards */}
        <ProcessCard
          className="left-0 top-[26px]"
          delay={0.15}
          icon={<CubeIcon />}
          title="Plan"
          subtitle="Strategy"
        />
        <ProcessCard
          className="left-[236px] top-[4px]"
          delay={0.3}
          icon={
            <span className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-sky-50">
              <CodeXml className="h-[30px] w-[30px] text-sky-500" strokeWidth={2.4} />
            </span>
          }
          title="Develop"
          subtitle="Build"
        />
        <ProcessCard
          className="left-[476px] top-[82px]"
          delay={0.45}
          icon={
            <Rocket
              className="h-[36px] w-[36px] -rotate-6 text-sky-500 drop-shadow-[0_6px_8px_rgba(58,145,237,0.35)]"
              fill="#B5D8FD"
              strokeWidth={2}
            />
          }
          title="Launch"
          subtitle="Deliver"
        />
        <ProcessCard
          className="left-[430px] top-[352px]"
          delay={0.6}
          icon={<BarsIcon />}
          title="Operate"
          subtitle="Improve"
          extra={
            <TrendingUp className="absolute right-2.5 top-2 h-[16px] w-[16px] text-sky-500" strokeWidth={2.6} />
          }
        />
      </div>
    </div>
  );
}
