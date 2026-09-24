"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CodeXml, FileText, Headphones, PenLine, Rocket, Target, TrendingUp, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;

const POINTS: { icon: Icon; title: string; desc: string }[] = [
  { icon: Users, title: "Single Accountable Team", desc: "One team that owns the product across every stage." },
  { icon: Target, title: "Seamless Continuity", desc: "Eliminates the disconnect between development and operational support." },
];

const STAGES: { num: string; title: string; desc: string; icon: Icon }[] = [
  { num: "01", title: "Plan", desc: "Define goals and create a clear product roadmap.", icon: FileText },
  { num: "02", title: "Design", desc: "Design intuitive and scalable solutions with user needs in focus.", icon: PenLine },
  { num: "03", title: "Develop", desc: "Build with quality, security and best practices.", icon: CodeXml },
  { num: "04", title: "Launch", desc: "Deploy responsibly and ensure smooth adoption.", icon: Rocket },
  { num: "05", title: "Support", desc: "Provide continuous support, updates and enhancements.", icon: Headphones },
  { num: "06", title: "Improve", desc: "Learn from real usage, gather feedback and evolve the product.", icon: TrendingUp },
];

/* ------------------------------------------------------------------------ */
/* Desktop journey — fixed canvas scaled to its column                      */
/* ------------------------------------------------------------------------ */

const CANVAS_W = 980;
const CANVAS_H = 500;
const COL_W = 160;
const X0 = 90;
const NODE_Y = [100, 150, 180, 160, 125, 100];
const NODE = 72;

const pts = NODE_Y.map((y, i) => [X0 + i * COL_W, y] as const);
const PATH = (() => {
  let d = `M0 150 C40 130 ${pts[0][0] - 50} ${pts[0][1]} ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [x, y] = pts[i];
    const mx = (px + x) / 2;
    d += ` C${mx} ${py} ${mx} ${y} ${x} ${y}`;
  }
  const [lx, ly] = pts[pts.length - 1];
  d += ` C${lx + 40} ${ly} ${lx + 60} ${ly - 30} ${CANVAS_W - 20} 20`;
  return d;
})();

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

function StageCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-[20px] border border-[#E2EEFF] bg-white p-5 shadow-[0_12px_30px_rgba(24,24,24,0.06)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_38px_rgba(24,24,24,0.1)]">
      <p className="font-display text-[18px] font-bold text-brand-navy">{title}</p>
      <p className="mt-2 text-[14.5px] leading-[1.4] text-[#526987]">{desc}</p>
      <span className="mt-4 block h-[3px] w-10 rounded-full bg-brand-blue" />
    </div>
  );
}

function StageNode({ icon: I, size }: { icon: Icon; size: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full border border-[#DCEEFF] bg-white shadow-[0_0_0_8px_rgba(20,125,255,0.05),0_12px_26px_-12px_rgba(20,125,255,0.45)] transition-shadow duration-300 hover:shadow-[0_0_0_10px_rgba(20,125,255,0.1),0_12px_26px_-12px_rgba(20,125,255,0.6)]"
      style={{ width: size, height: size }}
    >
      <I className="h-7 w-7 text-brand-blue" strokeWidth={2.2} />
    </span>
  );
}

function Journey() {
  const { ref, scale } = useFitScale(CANVAS_W);
  return (
    <div ref={ref} className="relative w-full" style={{ height: CANVAS_H * scale }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})` }}>
        <div className="absolute left-[180px] top-[40px] h-[420px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(20,125,255,0.10),transparent_65%)]" aria-hidden />

        <svg viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden>
          <defs>
            <linearGradient id="eo-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#147DFF" stopOpacity="0" />
              <stop offset="12%" stopColor="#147DFF" stopOpacity=".55" />
              <stop offset="100%" stopColor="#147DFF" stopOpacity=".9" />
            </linearGradient>
            <marker id="eo-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="9" markerHeight="9" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill="#147DFF" />
            </marker>
          </defs>
          <motion.path
            d={PATH}
            fill="none"
            stroke="url(#eo-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            markerEnd="url(#eo-arrow)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          {pts.map(([x, y]) => (
            <line key={x} x1={x} x2={x} y1={y + NODE / 2 + 8} y2={y + NODE / 2 + 38} stroke="#B9D8FF" strokeWidth="1.6" strokeDasharray="3 4" />
          ))}
        </svg>

        {STAGES.map((s, i) => {
          const [x, y] = pts[i];
          return (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: EASE }}
              className="absolute flex w-[150px] flex-col items-center"
              style={{ left: x - 75, top: y - NODE / 2 - 30 }}
            >
              <span className="text-[14px] font-bold text-brand-blue">{s.num}</span>
              <span className="mt-2">
                <StageNode icon={s.icon} size={NODE} />
              </span>
              <div className="mt-[34px] w-full">
                <StageCard title={s.title} desc={s.desc} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export default function EndToEndOwnershipSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-14 sm:py-16 xl:py-20">
      <div className="pointer-events-none absolute right-[-8%] top-[10%] h-[560px] w-[900px] rounded-full bg-[#EAF3FF]/50 blur-[110px]" aria-hidden />

      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1560px] items-center gap-12 xl:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] xl:gap-14 2xl:grid-cols-[minmax(0,36fr)_minmax(0,64fr)] 2xl:gap-10">
          {/* Left copy */}
          <Reveal className="min-w-0">
            <span className="inline-flex items-center gap-2">
              <span className="rounded-lg bg-[#EAF3FF] px-3 py-1.5 text-[13px] font-bold text-brand-blue">04</span>
              <span className="rounded-lg bg-[#EAF3FF] px-3 py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] text-brand-blue sm:text-[14px]">
                Complete Stewardship
              </span>
            </span>

            <h2 className="mt-6 font-display text-[46px] font-extrabold leading-[0.97] tracking-[-0.03em] text-brand-navy sm:text-[62px] xl:text-[clamp(56px,4.2vw,74px)]">
              <span className="block">End-to-End</span>
              <span className="block text-brand-blue">Ownership</span>
            </h2>
            <p className="mt-6 max-w-[540px] text-[18px] leading-[1.5] text-[#526987] sm:text-[20px]">
              Maaptrix coordinates product planning, development, launch, maintenance and improvement with a single
              accountable team.
            </p>

            <ul className="mt-7 space-y-5">
              {POINTS.map(({ icon: I, title, desc }) => (
                <li key={title} className="flex items-start gap-5">
                  <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-2xl border border-[#DCEEFF] bg-[#EAF3FF]">
                    <I className="h-7 w-7 text-brand-blue" fill="#147DFF" fillOpacity={0.15} strokeWidth={2.2} />
                  </span>
                  <div className="pt-0.5">
                    <p className="font-display text-[18px] font-bold text-brand-navy">{title}</p>
                    <p className="mt-1 max-w-[380px] text-[16px] leading-[1.45] text-[#526987]">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/how-we-work"
                className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-[13px] bg-brand-navy px-7 text-[16px] font-semibold text-white shadow-[0_14px_28px_-14px_rgba(24,24,24,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue"
              >
                See Our Approach
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[54px] items-center justify-center rounded-[13px] border border-[#DCEEFF] bg-white px-7 text-[16px] font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
              >
                Talk to Our Team
              </Link>
            </div>
          </Reveal>

          {/* Right: desktop journey */}
          <div className="relative hidden min-w-0 2xl:block">
            <Journey />
          </div>

          {/* Right: tablet / mobile vertical timeline */}
          <div className="relative 2xl:hidden">
            <span className="absolute bottom-8 left-[27px] top-8 w-[2px] bg-gradient-to-b from-brand-blue/30 via-brand-blue to-brand-blue/30" aria-hidden />
            {STAGES.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div className="relative flex items-start gap-5 pb-5">
                  <div className="relative z-10 flex flex-col items-center">
                    <StageNode icon={s.icon} size={56} />
                    <span className="mt-1 text-[12px] font-bold text-brand-blue">{s.num}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <StageCard title={s.title} desc={s.desc} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
