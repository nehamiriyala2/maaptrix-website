"use client";

import { useEffect, useRef, useState, type ComponentType, type ReactNode, type SVGProps } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  Bell,
  Box,
  ChevronDown,
  CodeXml,
  FileText,
  FolderKanban,
  Headphones,
  LayoutDashboard,
  Layers,
  Lightbulb,
  RefreshCw,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;

const ADVANTAGES: { icon: Icon; title: string; desc: string }[] = [
  { icon: Target, title: "Product Ownership", desc: "We take end-to-end ownership without scope dilution." },
  { icon: Lightbulb, title: "Practical Product Thinking", desc: "Turn real operational problems into scalable solutions." },
  { icon: BarChart3, title: "Continuous Improvement", desc: "Long-term roadmap stewardship behind every release." },
];

const FLOW: { step: string; title: string; desc: string; icon: Icon }[] = [
  { step: "01", title: "Problem", desc: "Identify real operational problems.", icon: Target },
  { step: "02", title: "Product Idea", desc: "Turn insights into practical product ideas.", icon: FileText },
  { step: "03", title: "Design", desc: "Design simple, scalable and user-friendly solutions.", icon: Layers },
  { step: "04", title: "Development", desc: "Build with quality and best practices.", icon: CodeXml },
  { step: "05", title: "Launch", desc: "Deploy responsibly and ensure smooth adoption.", icon: Rocket },
  { step: "06", title: "Support", desc: "Provide continuous support and reliable operations.", icon: ShieldCheck },
  { step: "07", title: "Improvement", desc: "Learn from usage, feedback and evolve continuously.", icon: RefreshCw },
];

/* ------------------------------------------------------------------------ */
/* Product visual — fixed design canvas, scaled to its column               */
/* ------------------------------------------------------------------------ */

const CANVAS_W = 820;
const CANVAS_H = 580;

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

const NAV: { icon: Icon; label: string; active?: boolean }[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Box, label: "Products" },
  { icon: BarChart3, label: "Analytics" },
  { icon: FolderKanban, label: "Projects" },
  { icon: Headphones, label: "Support" },
  { icon: Settings, label: "Settings" },
];

const TILES: { label: string; value: string; delta: string; icon: Icon }[] = [
  { label: "Active Users", value: "12K+", delta: "12%", icon: Users },
  { label: "Uptime", value: "99.9%", delta: "0.5%", icon: ShieldCheck },
  { label: "Customer Satisfaction", value: "4.8/5", delta: "8%", icon: Star },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

function Dashboard() {
  return (
    <div className="relative">
      {/* back panel for depth */}
      <div className="absolute -top-9 left-[150px] right-6 h-16 rounded-t-[22px] border border-[#DCEEFF] bg-white/80 px-5 pt-3 shadow-[0_10px_24px_-18px_rgba(85,85,85,0.4)]">
        <div className="flex items-center gap-3">
          <span className="flex gap-1">
            {["#A4CFFD", "#4FA2FA", "#93C5FD"].map((c) => (
              <span key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />
            ))}
          </span>
          <span className="flex h-6 flex-1 items-center gap-1.5 rounded-full bg-[#F3F8FF] px-3 text-[10px] text-[#A0AEC5]">
            <Search className="h-3 w-3" /> Search anything...
          </span>
        </div>
      </div>

      <div className="relative flex h-[420px] w-[620px] overflow-hidden rounded-[26px] border border-[#DCEEFF] bg-white shadow-[0_50px_90px_-40px_rgba(85,85,85,0.5),0_2px_8px_rgba(85,85,85,0.06)]">
        <div className="flex w-[140px] shrink-0 flex-col bg-[#FAFCFF] px-3.5 py-6">
          <Logo imageClassName="h-7 w-7" wordmarkClassName="text-[18px]" className="!gap-2 px-1" />
          <div className="mt-7 space-y-1.5">
            {NAV.map(({ icon: I, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[12px] font-medium ${
                  active ? "bg-brand-blue text-white shadow-[0_8px_16px_-8px_rgba(20,125,255,0.8)]" : "text-[#4A5B78]"
                }`}
              >
                <I className="h-4 w-4" strokeWidth={2} />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
          <div className="flex items-center justify-end gap-2.5">
            <span className="rounded-full border border-[#DCE7F5] bg-[#F5F9FF] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#7A8AA5]">
              Sample data
            </span>
            <Bell className="h-4 w-4 text-[#8A99B2]" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-[10px] font-bold text-white">M</span>
          </div>

          <div className="rounded-2xl border border-[#EEF3FA] bg-white p-4 shadow-[0_8px_20px_-16px_rgba(85,85,85,0.35)]">
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-bold text-brand-navy">Product Growth</p>
              <span className="flex items-center gap-0.5 rounded-lg border border-[#DCE7F5] bg-white px-2.5 py-1 text-[10px] text-[#6A7A95]">
                This Year <ChevronDown className="h-3 w-3" />
              </span>
            </div>
            <div className="relative mt-1 h-[140px]">
              <span className="absolute left-[38%] top-2 flex items-center gap-1 rounded-lg bg-sky-50 px-2 py-1 text-[12px] font-bold text-sky-600">
                <TrendingUp className="h-3.5 w-3.5" /> +48%
              </span>
              <svg viewBox="0 0 400 130" preserveAspectRatio="none" className="h-[118px] w-full">
                <defs>
                  <linearGradient id="kd-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#147DFF" stopOpacity=".22" />
                    <stop offset="100%" stopColor="#147DFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[25, 55, 85, 115].map((y) => (
                  <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#EEF3FA" />
                ))}
                <path
                  d="M10 108 C40 112 55 104 75 100 S110 88 135 92 S175 70 200 76 S240 62 265 70 S305 76 325 64 S370 40 390 50 L390 130 L10 130Z"
                  fill="url(#kd-area)"
                />
                <path
                  d="M10 108 C40 112 55 104 75 100 S110 88 135 92 S175 70 200 76 S240 62 265 70 S305 76 325 64 S370 40 390 50"
                  fill="none"
                  stroke="#147DFF"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                {[
                  [10, 108],
                  [75, 100],
                  [135, 92],
                  [200, 76],
                  [265, 70],
                  [325, 64],
                ].map(([x, y]) => (
                  <circle key={x} cx={x} cy={y} r="4" fill="#fff" stroke="#147DFF" strokeWidth="2.2" />
                ))}
              </svg>
              <div className="flex justify-between px-1 text-[9px] text-[#A0AEC5]">
                {MONTHS.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-3 gap-3">
            {TILES.map(({ label, value, delta, icon: I }) => (
              <div key={label} className="relative rounded-2xl border border-[#EEF3FA] bg-white p-3.5 shadow-[0_8px_18px_-12px_rgba(85,85,85,0.35)]">
                <p className="pr-8 text-[11.5px] font-medium leading-tight text-[#4A5B78]">{label}</p>
                <p className="mt-2 font-display text-[22px] font-bold text-brand-navy">{value}</p>
                <p className="mt-0.5 flex items-center gap-1 text-[10.5px] font-semibold text-brand-blue">
                  <ArrowUp className="h-3 w-3" /> {delta}
                </p>
                <span className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#EAF3FF]">
                  <I className="h-4 w-4 text-brand-blue" strokeWidth={2.2} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatCard({ icon: I, children, className, delay }: { icon: Icon; children: ReactNode; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={`absolute z-20 flex h-[96px] w-[186px] items-center gap-3.5 rounded-[20px] border border-white bg-white/95 px-5 shadow-[0_24px_46px_-22px_rgba(85,85,85,0.55)] ring-1 ring-[#DCEEFF] ${className}`}
    >
      <I className="h-8 w-8 shrink-0 text-brand-blue" fill="#147DFF" fillOpacity={0.2} strokeWidth={2.3} />
      <p className="font-display text-[15.5px] font-semibold leading-[1.25] text-brand-navy">{children}</p>
    </motion.div>
  );
}

function MindsetVisual() {
  const { ref, scale } = useFitScale(CANVAS_W);
  return (
    <div ref={ref} className="relative w-full" style={{ height: CANVAS_H * scale }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})` }}>
        {/* Soft atmosphere */}
        <div className="absolute left-[60px] top-[90px] h-[300px] w-[300px] rounded-full bg-[#EAF3FF]" />
        <div className="absolute right-[40px] top-[40px] h-[340px] w-[340px] rounded-full bg-[#DCEEFF]/70" />
        <div className="absolute bottom-[10px] left-[180px] h-[240px] w-[420px] rounded-full bg-[#EAF3FF]" />
        <div className="absolute left-[140px] top-[60px] h-[460px] w-[560px] rounded-full bg-[#147DFF]/[0.05] blur-[40px]" />

        {/* Dotted orbit */}
        <svg viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <ellipse cx="410" cy="300" rx="370" ry="265" fill="none" stroke="#147DFF" strokeOpacity=".6" strokeWidth="1.6" strokeDasharray="6 7" />
          <circle cx="455" cy="36" r="7" fill="#147DFF" />
          <circle cx="42" cy="330" r="7" fill="#147DFF" />
          <circle cx="780" cy="330" r="7" fill="#147DFF" />
          <circle cx="470" cy="564" r="7" fill="#147DFF" />
        </svg>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="absolute left-[130px] top-[104px] z-10"
          style={{ perspective: 1800 }}
        >
          <div style={{ transform: "rotateZ(6deg) rotateY(-8deg) rotateX(4deg)" }}>
            <Dashboard />
          </div>
        </motion.div>

        <FloatCard icon={Lightbulb} className="left-0 top-[2px] -rotate-[5deg]" delay={0.2}>
          From Idea
          <br />
          to Impact
        </FloatCard>
        <FloatCard icon={BarChart3} className="right-[20px] top-[42px]" delay={0.3}>
          Scalable
          <br />
          Solutions
        </FloatCard>
        <FloatCard icon={Settings} className="bottom-[48px] left-[4px] rotate-[5deg]" delay={0.4}>
          Efficient
          <br />
          Operations
        </FloatCard>
        <FloatCard icon={TrendingUp} className="bottom-[20px] right-[30px] -rotate-[5deg] !w-[200px]" delay={0.5}>
          Continuous
          <br />
          Improvement
        </FloatCard>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export default function KeyDifference() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FAFF_55%,#FFFFFF_100%)] py-14 sm:py-16 xl:py-20">
      <div className="page-container relative">
        <div className="mx-auto max-w-[1560px]">
          {/* ---------- Top: visual left, copy right ---------- */}
          <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] xl:gap-14">
            <div className="relative order-2 mx-auto w-full max-w-[820px] xl:order-1">
              <MindsetVisual />
            </div>

            <Reveal className="relative z-10 order-1 min-w-0 xl:order-2">
              <span className="inline-flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
                <span className="text-[14px] font-semibold uppercase tracking-[0.14em] text-brand-blue">The Product Mindset</span>
              </span>
              <h2 className="mt-5 font-display text-[42px] font-extrabold leading-[1.03] tracking-[-0.035em] text-brand-navy sm:text-[56px] xl:text-[clamp(44px,3.5vw,66px)]">
                <span className="block xl:whitespace-nowrap">More Than Software.</span>
                <span className="block text-brand-blue xl:whitespace-nowrap">A Product Mindset.</span>
              </h2>
              <p className="mt-5 max-w-[640px] text-[18px] leading-[1.55] text-[#5A6A85] sm:text-[20px]">
                Maaptrix combines software engineering and project management to build, operate and continuously
                improve its own digital products.
              </p>

              <ul className="mt-7 space-y-5">
                {ADVANTAGES.map(({ icon: I, title, desc }) => (
                  <li key={title} className="flex items-start gap-5">
                    <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#EEF5FF,#DAE9FF)]">
                      <I className="h-7 w-7 text-brand-blue" fill="#147DFF" fillOpacity={0.15} strokeWidth={2.3} />
                    </span>
                    <div className="pt-1.5">
                      <p className="font-display text-[18px] font-bold text-brand-navy sm:text-[19px]">{title}</p>
                      <p className="mt-1 text-[16px] leading-[1.5] text-[#5A6A85]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="group inline-flex h-[58px] items-center justify-center gap-3 rounded-xl bg-brand-navy px-7 text-[17px] font-semibold text-white shadow-[0_14px_28px_-14px_rgba(24,24,24,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue"
                >
                  Explore Our Products
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/how-we-work"
                  className="inline-flex h-[58px] items-center justify-center rounded-xl border border-[#DCE7F5] bg-white px-7 text-[17px] font-semibold text-brand-navy shadow-[0_8px_20px_-14px_rgba(85,85,85,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
                >
                  Learn Our Approach
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ---------- Bottom: 7-step flow ---------- */}
          <Reveal delay={0.1} className="mt-12 xl:mt-10">
            <div className="rounded-[26px] border border-[#DCE7F5] bg-white/85 p-5 shadow-[0_28px_60px_-34px_rgba(85,85,85,0.4)] backdrop-blur-xl sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-3">
                  <span className="h-[2px] w-7 rounded-full bg-brand-blue" />
                  <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-brand-blue sm:text-[15px]">
                    Maaptrix Product Engineering &amp; Ownership Flow
                  </span>
                </span>
                <span className="text-[14px] text-[#6A7A95]">Disciplined Operating Model</span>
              </div>

              <ol className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 2xl:flex 2xl:gap-0">
                {FLOW.map(({ step, title, desc, icon: I }, i) => (
                  <li key={step} className="contents">
                    {i > 0 && (
                      <span className="hidden shrink-0 items-center px-1 text-brand-blue 2xl:flex" aria-hidden>
                        <ArrowRight className="h-5 w-5" strokeWidth={2} />
                      </span>
                    )}
                    <div className="flex min-w-0 flex-1 items-start gap-3 rounded-[18px] border border-[#E3ECF7] bg-white p-4 2xl:gap-2.5 2xl:p-3.5 shadow-[0_12px_26px_-20px_rgba(85,85,85,0.4)] transition-transform duration-300 hover:-translate-y-1">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] 2xl:h-[38px] 2xl:w-[38px]">
                        <I className="h-[22px] w-[22px] text-brand-blue" strokeWidth={2.2} />
                      </span>
                      <div className="min-w-0">
                        <p className="break-words font-display text-[15.5px] font-bold text-brand-navy 2xl:text-[14.5px]">
                          <span className="mr-1 align-super text-[10px] font-semibold text-brand-blue">{step}</span>
                          {title}
                        </p>
                        <p className="mt-1 text-[12.5px] leading-[1.45] text-[#6A7A95]">{desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
