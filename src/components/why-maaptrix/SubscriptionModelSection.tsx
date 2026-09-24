"use client";

import { useEffect, useRef, useState, type ComponentType, type ReactNode, type SVGProps } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Box,
  Building2,
  CheckCircle2,
  ChevronDown,
  Coins,
  Headphones,
  LayoutGrid,
  Layers,
  RefreshCw,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;

const BENEFITS: { icon: Icon; title: string; desc: string }[] = [
  { icon: Coins, title: "No Upfront Development Risk", desc: "Start using the product without heavy custom build costs." },
  { icon: Settings, title: "Continuous Maintenance", desc: "Regular updates, security patches and performance improvements." },
  { icon: Headphones, title: "Dedicated Support", desc: "Direct onboarding and ongoing operational assistance." },
  { icon: BarChart3, title: "Scalable as You Grow", desc: "Flexible plans that adapt to your business needs." },
];

/* ------------------------------------------------------------------------ */
/* Dashboard visual — fixed design canvas scaled to its column              */
/* ------------------------------------------------------------------------ */

const CANVAS_W = 820;
const CANVAS_H = 640;

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
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: Box, label: "Products" },
  { icon: Users, label: "Users" },
  { icon: ShieldCheck, label: "Support" },
  { icon: Settings, label: "Settings" },
];

const PLANS: { icon: Icon; name: string; desc: string; cta: string; kind: "soft" | "solid" | "outline" }[] = [
  { icon: Box, name: "Basic", desc: "Core features to get started.", cta: "Current Plan", kind: "soft" },
  { icon: Layers, name: "Professional", desc: "Advanced features for growing teams.", cta: "Upgrade", kind: "solid" },
  { icon: Building2, name: "Enterprise", desc: "Custom solution for large organizations.", cta: "Contact Us", kind: "outline" },
];

const CTA_STYLES = {
  soft: "bg-[#EAF3FF] text-brand-blue",
  solid: "bg-brand-blue text-white shadow-[0_8px_16px_-8px_rgba(20,125,255,0.9)]",
  outline: "border border-[#CFE0F5] bg-white text-brand-navy",
};

function Dashboard() {
  return (
    <div className="relative flex h-[470px] w-[640px] overflow-hidden rounded-[28px] border border-[#DCEEFF] bg-white shadow-[0_25px_60px_rgba(24,24,24,0.10),0_50px_90px_-40px_rgba(24,24,24,0.35)]">
      {/* Dark sidebar */}
      <div className="flex w-[160px] shrink-0 flex-col rounded-l-[24px] bg-brand-navy px-3.5 py-6">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white p-1.5">
          <Logo showWordmark={false} imageClassName="h-full w-full" />
        </span>
        <div className="mt-7 space-y-1.5">
          {NAV.map(({ icon: I, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] font-medium ${
                active ? "bg-brand-blue text-white shadow-[0_8px_18px_-8px_rgba(20,125,255,0.9)]" : "text-slate-300"
              }`}
            >
              <I className="h-4 w-4" strokeWidth={2} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-display text-[19px] font-bold text-brand-navy">Subscription Plan</p>
            <p className="mt-0.5 text-[12px] text-[#6A7A95]">Choose a plan that fits your organization.</p>
          </div>
          <span className="flex items-center gap-1 rounded-lg border border-[#DCE7F5] px-3 py-1.5 text-[12px] font-medium text-brand-navy">
            Annual <ChevronDown className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {PLANS.map(({ icon: I, name, desc, cta, kind }) => (
            <div
              key={name}
              className={`flex flex-col items-center rounded-2xl border bg-white px-3 py-4 text-center ${
                kind === "solid" ? "border-[#B8D6FF] shadow-[0_14px_28px_-18px_rgba(20,125,255,0.7)]" : "border-[#EEF3FA]"
              }`}
            >
              <I className="h-6 w-6 text-brand-blue" strokeWidth={2.2} />
              <p className="mt-2 font-display text-[15px] font-bold text-brand-navy">{name}</p>
              <p className="mt-1 min-h-[34px] text-[11px] leading-[1.35] text-[#6A7A95]">{desc}</p>
              <span className={`mt-3 w-full rounded-lg py-2 text-[12px] font-semibold ${CTA_STYLES[kind]}`}>{cta}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 grid flex-1 grid-cols-[1fr_1.1fr] gap-3">
          <div className="rounded-2xl border border-[#EEF3FA] p-4">
            <p className="text-[14px] font-bold text-brand-navy">What&apos;s Included</p>
            <ul className="mt-3 space-y-2.5">
              {["Ongoing product updates", "Dedicated support", "Continuous improvements"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[12.5px] text-[#545454]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-white" fill="#147DFF" strokeWidth={2.4} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-[#EEF3FA] p-3">
            <span className="absolute left-1/2 top-2.5 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[#DCEEFF] bg-white px-2.5 py-1 text-[11px] font-semibold text-brand-blue shadow-[0_6px_14px_-8px_rgba(85,85,85,0.4)]">
              Product Improvement
            </span>
            <svg viewBox="0 0 220 110" className="absolute inset-x-3 bottom-3 h-[92px] w-[calc(100%-24px)]" preserveAspectRatio="none" aria-hidden>
              {[28, 52, 76, 100, 124, 148, 172, 196].map((x, i) => (
                <rect key={x} x={x - 8} y={96 - i * 9 - 10} width="16" height={i * 9 + 10} rx="3" fill="#EAF3FF" />
              ))}
              <path d="M12 96 C40 90 60 86 76 80 S110 68 124 62 S160 46 172 38 S200 20 210 14" fill="none" stroke="#147DFF" strokeWidth="2.6" strokeLinecap="round" />
              {[
                [76, 80],
                [124, 62],
                [172, 38],
                [210, 14],
              ].map(([x, y]) => (
                <circle key={x} cx={x} cy={y} r="4" fill="#147DFF" />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatBenefit({ icon: I, children, className, delay }: { icon: Icon; children: ReactNode; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={`absolute z-30 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-3 rounded-full border border-[#DCEEFF] bg-white py-2 pl-2 pr-5 shadow-[0_18px_40px_-20px_rgba(24,24,24,0.35)]"
      >
        <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#EAF3FF]">
          <I className="h-7 w-7 text-brand-blue" strokeWidth={2.3} />
        </span>
        <p className="font-display text-[14.5px] font-semibold leading-[1.25] text-brand-navy">{children}</p>
      </motion.div>
    </motion.div>
  );
}

function SubscriptionVisual() {
  const { ref, scale } = useFitScale(CANVAS_W);
  return (
    <div ref={ref} className="relative w-full" style={{ height: CANVAS_H * scale }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})` }}>
        {/* Atmosphere + geometric accent */}
        <div className="absolute left-[80px] top-[60px] h-[560px] w-[620px] rounded-full bg-[#EAF3FF]/80" />
        <div className="absolute left-[-40px] top-[260px] h-[320px] w-[320px] rounded-full bg-[#147DFF]/[0.06] blur-[20px]" />
        <svg viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="sm-tri" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#147DFF" stopOpacity=".85" />
              <stop offset="100%" stopColor="#147DFF" stopOpacity=".25" />
            </linearGradient>
          </defs>
          <path d="M330 190 L400 120 L420 250 Z" fill="url(#sm-tri)" />
          <ellipse cx="410" cy="360" rx="330" ry="270" fill="none" stroke="#147DFF" strokeOpacity=".5" strokeWidth="1.6" strokeDasharray="6 7" />
        </svg>
        {[
          { x: 440, y: 91 },
          { x: 700, y: 210 },
          { x: 738, y: 400 },
          { x: 540, y: 620 },
        ].map(({ x, y }, i) => (
          <motion.span
            key={i}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            className="absolute h-[11px] w-[11px] rounded-full bg-brand-blue shadow-[0_0_0_5px_rgba(20,125,255,0.12)]"
            style={{ left: x - 5.5, top: y - 5.5 }}
            aria-hidden
          />
        ))}

        {/* Layered, tilted dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="absolute left-[60px] top-[130px] z-10"
          style={{ perspective: 1800 }}
        >
          <div style={{ transform: "rotateZ(-5deg) rotateY(8deg) rotateX(3deg)" }}>
            <div className="absolute -left-6 top-6 h-full w-full rounded-[30px] bg-[#147DFF]/20" />
            <div className="absolute -bottom-5 -right-6 h-full w-full rounded-[30px] border border-[#DCEEFF] bg-[#EAF3FF]/70 backdrop-blur-sm" />
            <Dashboard />
          </div>
        </motion.div>

        <FloatBenefit icon={Layers} className="left-[40px] top-[40px]" delay={0.2}>
          Ready
          <br />
          to Use
        </FloatBenefit>
        <FloatBenefit icon={RefreshCw} className="left-[430px] top-[4px]" delay={0.3}>
          Ongoing
          <br />
          Updates
        </FloatBenefit>
        <FloatBenefit icon={BarChart3} className="right-[0px] top-[150px]" delay={0.4}>
          Predictable
          <br />
          Cost
        </FloatBenefit>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export default function SubscriptionModelSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-14 sm:py-16 xl:py-20">
      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1540px] items-center gap-12 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:gap-16">
          <div className="relative order-2 mx-auto w-full max-w-[820px] xl:order-1">
            <SubscriptionVisual />
          </div>

          <Reveal className="order-1 min-w-0 xl:order-2">
            <span className="inline-flex items-center gap-3">
              <span className="rounded-lg bg-[#EAF3FF] px-3 py-1.5 text-[13px] font-bold text-brand-blue">03</span>
              <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand-blue sm:text-[14px]">Predictable Model</span>
            </span>

            <h2 className="mt-6 font-display text-[48px] font-extrabold leading-[0.96] tracking-[-0.03em] text-brand-navy sm:text-[64px] xl:text-[clamp(58px,4.4vw,76px)]">
              <span className="block">Subscription</span>
              <span className="block text-brand-blue">Model</span>
            </h2>
            <p className="mt-7 max-w-[610px] text-[18px] leading-[1.5] text-[#526987] sm:text-[21px]">
              Customers can use the product without funding a full custom software build. Our subscription model
              provides predictable cost, continuous improvements and dedicated support.
            </p>

            <ul className="mt-8 divide-y divide-[#DCEEFF]">
              {BENEFITS.map(({ icon: I, title, desc }) => (
                <li key={title} className="flex items-center gap-5 py-4">
                  <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-[#EAF3FF]">
                    <I className="h-7 w-7 text-brand-blue" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="font-display text-[18px] font-bold text-brand-navy sm:text-[19px]">{title}</p>
                    <p className="mt-1 text-[15.5px] leading-[1.45] text-[#526987] sm:text-[16px]">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
