"use client";

import { useEffect, useRef, useState, type ComponentType, type ReactNode, type SVGProps } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Box, CheckCircle2, Lightbulb, Settings, Target, TrendingUp, Users, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;

const BULLETS = [
  "Avoids generic, bloated enterprise software suites",
  "Straightforward workflows tailored to daily operations",
];

const VALUES: { icon: Icon; title: [string, string]; desc: string }[] = [
  { icon: Target, title: ["Problem", "Driven"], desc: "Built around real operational needs." },
  { icon: Lightbulb, title: ["Simple", "Workflows"], desc: "Intuitive and easy to adopt." },
  { icon: BarChart3, title: ["Measurable", "Impact"], desc: "Designed for real business outcomes." },
];

const ROWS: { letter: string; icon: Icon; title: string; desc: string }[] = [
  { letter: "A", icon: Target, title: "Real Problem", desc: "Tangible operational friction point identified" },
  { letter: "B", icon: Users, title: "Users", desc: "Understanding the people affected across roles" },
  { letter: "C", icon: Workflow, title: "Workflow", desc: "Mapping clean, intuitive everyday processes" },
  { letter: "D", icon: Box, title: "Purpose-Built Product", desc: "Focused software built for reliability" },
];

/* ------------------------------------------------------------------------ */
/* Workflow visual — fixed design canvas scaled to its column               */
/* ------------------------------------------------------------------------ */

const CANVAS_W = 780;
const CANVAS_H = 600;

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

function FloatCard({ className, delay, float, children }: { className: string; delay: number; float: number; children: ReactNode }) {
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
        transition={{ duration: 5 + float, repeat: Infinity, ease: "easeInOut", delay: float }}
        className="rounded-[20px] border border-[#DCEEFF] bg-white shadow-[0_22px_46px_-20px_rgba(24,24,24,0.28)]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function WorkflowVisual() {
  const { ref, scale } = useFitScale(CANVAS_W);
  return (
    <div ref={ref} className="relative w-full" style={{ height: CANVAS_H * scale }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})` }}>
        {/* Atmosphere */}
        <div className="absolute left-[220px] top-[40px] h-[540px] w-[540px] rounded-full bg-[#EAF3FF]" />
        <div className="absolute left-[40px] top-[150px] h-[300px] w-[300px] rounded-full bg-[#147DFF]/[0.06]" />
        <div className="absolute right-[-20px] top-[120px] h-[360px] w-[260px] rounded-full bg-[#147DFF]/[0.08] blur-[30px]" />

        {/* Dotted orbit + nodes */}
        <svg viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} className="pointer-events-none absolute inset-0 z-0 h-full w-full" aria-hidden>
          <ellipse cx="455" cy="300" rx="300" ry="270" fill="none" stroke="#147DFF" strokeOpacity=".6" strokeWidth="1.8" strokeDasharray="6 7" />
        </svg>
        {[
          { x: 368, y: 42, s: 16 },
          { x: 155, y: 300, s: 10 },
          { x: 455, y: 570, s: 16 },
          { x: 755, y: 300, s: 10 },
        ].map(({ x, y, s }, i) => (
          <motion.span
            key={i}
            animate={{ scale: [1, 1.18, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            className="absolute z-0 rounded-full bg-brand-blue shadow-[0_0_0_5px_rgba(20,125,255,0.12)]"
            style={{ left: x - s / 2, top: y - s / 2, width: s, height: s }}
            aria-hidden
          />
        ))}

        {/* Workflow panel (layered) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="absolute left-[170px] top-[92px] z-10 w-[600px]"
        >
          <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[26px] border border-[#DCEEFF] bg-white/40" />
          <div className="absolute inset-0 -translate-x-1.5 translate-y-1.5 rounded-[26px] border border-[#DCEEFF] bg-white/55" />
          <div className="relative space-y-3.5 rounded-[26px] border border-[#DCEEFF] bg-white/90 p-4 shadow-[0_30px_60px_-30px_rgba(24,24,24,0.3)] backdrop-blur-md">
            {ROWS.map(({ letter, icon: I, title, desc }) => (
              <div
                key={letter}
                className="group relative flex h-[94px] items-center gap-4 overflow-hidden rounded-[17px] border border-[#DCEEFF] bg-[#FDFEFF] pl-6 pr-5 shadow-[0_10px_24px_-20px_rgba(24,24,24,0.4)]"
              >
                <span className="absolute inset-y-3 left-0 w-[4px] rounded-r-full bg-brand-blue" aria-hidden />
                <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-[#EAF3FF] font-display text-[17px] font-bold text-brand-blue">
                  {letter}
                </span>
                <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[15px] bg-[#EAF3FF]">
                  <I className="h-6 w-6 text-brand-blue" strokeWidth={2.2} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[15.5px] font-bold uppercase tracking-[0.02em] text-brand-navy">{title}</p>
                  <p className="mt-1 truncate text-[13.5px] text-[#526987]">{desc}</p>
                </div>
                <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-brand-blue transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating cards */}
        <FloatCard className="left-[20px] top-[70px] -rotate-3" delay={0.25} float={0}>
          <div className="flex h-[146px] w-[160px] flex-col items-center justify-center gap-3 px-4 text-center">
            <Target className="h-11 w-11 text-brand-blue" strokeWidth={2.2} />
            <p className="font-display text-[15.5px] font-semibold leading-tight text-brand-navy">
              Solve
              <br />
              Real Problems
            </p>
          </div>
        </FloatCard>

        <FloatCard className="right-[4px] top-[6px] rotate-3" delay={0.35} float={0.8}>
          <div className="flex h-[100px] w-[186px] items-center gap-3.5 px-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EAF3FF]">
              <Settings className="h-7 w-7 text-brand-blue" strokeWidth={2.2} />
            </span>
            <p className="font-display text-[15.5px] font-semibold leading-tight text-brand-navy">
              Simplify
              <br />
              Operations
            </p>
          </div>
        </FloatCard>

        <FloatCard className="bottom-[50px] left-[24px] -rotate-3" delay={0.45} float={1.6}>
          <div className="flex h-[146px] w-[160px] flex-col items-center justify-center gap-2.5 px-4 text-center">
            <TrendingUp className="h-10 w-10 text-brand-blue" strokeWidth={2.4} />
            <p className="font-display text-[15.5px] font-semibold leading-tight text-brand-navy">
              Drive
              <br />
              Measurable
              <br />
              Results
            </p>
          </div>
        </FloatCard>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export default function FocusedSolutionsSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-14 sm:py-16 xl:py-20">
      <div className="pointer-events-none absolute right-[-10%] top-[5%] h-[600px] w-[800px] rounded-full bg-[#EAF3FF]/60 blur-[110px]" aria-hidden />

      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1540px] items-center gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-14">
          {/* Left copy */}
          <Reveal className="min-w-0">
            <span className="inline-flex items-center gap-3 rounded-full bg-[#EAF3FF] py-1.5 pl-1.5 pr-4">
              <span className="rounded-full bg-white px-3 py-1 text-[13px] font-bold text-brand-blue">02</span>
              <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand-blue sm:text-[14px]">
                Clarity &amp; Simplicity
              </span>
            </span>

            <h2 className="mt-6 font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.035em] text-brand-navy sm:text-[58px] xl:text-[clamp(52px,4.1vw,68px)]">
              Focused <span className="text-brand-blue">Solutions</span>
            </h2>
            <p className="mt-6 max-w-[580px] text-[19px] leading-[1.45] text-[#526987] sm:text-[21px]">
              Each product is designed around a defined operational problem.
            </p>

            <ul className="mt-7 space-y-4">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3.5 text-[17px] text-[#526987] sm:text-[18px]">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-blue" strokeWidth={2} />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-14 grid max-w-[640px] grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#DCEEFF]">
              {VALUES.map(({ icon: I, title, desc }, i) => (
                <div key={title[0]} className={i === 0 ? "sm:pr-6" : "sm:px-6"}>
                  <span className="flex h-[62px] w-[62px] items-center justify-center rounded-[16px] bg-[#EAF3FF]">
                    <I className="h-8 w-8 text-brand-blue" strokeWidth={2.2} />
                  </span>
                  <p className="mt-4 font-display text-[19px] font-bold leading-[1.25] text-brand-navy">
                    {title[0]}
                    <br />
                    {title[1]}
                  </p>
                  <p className="mt-2 text-[15.5px] leading-[1.45] text-[#526987]">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-[780px]">
            <WorkflowVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
