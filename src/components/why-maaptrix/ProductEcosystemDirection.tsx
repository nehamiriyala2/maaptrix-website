"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { BookOpen, ChartNoAxesColumnIncreasing, RefreshCw, Target } from "lucide-react";
import Reveal from "@/components/Reveal";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;

const EVOLUTION_STAGES: { step: string; title: string; desc: string; icon: Icon; chip: string; ink: string; bar: string }[] = [
  {
    step: "01",
    title: "Current Product Focus",
    desc: "School transportation, student safety & lightweight school administration.",
    icon: Target,
    chip: "bg-[#E6F0FF]",
    ink: "text-brand-blue",
    bar: "bg-brand-blue",
  },
  {
    step: "02",
    title: "Product Learning",
    desc: "Direct operational feedback and deep user behavior understanding.",
    icon: BookOpen,
    chip: "bg-[#E3EDF7]",
    ink: "text-sky-600",
    bar: "bg-sky-500",
  },
  {
    step: "03",
    title: "Continuous Improvement",
    desc: "Refining workflows, reliability and feature depth with every release.",
    icon: RefreshCw,
    chip: "bg-[#E8F2FD]",
    ink: "text-sky-600",
    bar: "bg-sky-500",
  },
  {
    step: "04",
    title: "Future Product Opportunities",
    desc: "Expanding to broader operational domains as requirements mature.",
    icon: ChartNoAxesColumnIncreasing,
    chip: "bg-[#DEEDFE]",
    ink: "text-sky-500",
    bar: "bg-sky-400",
  },
];

function Connector({ index }: { index: number }) {
  return (
    <div className="hidden w-[64px] shrink-0 items-center lg:flex" aria-hidden>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px 0px" }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.12, ease: EASE }}
        className="relative block h-[2px] w-full origin-left bg-[#9CC8FF]"
      >
        <span className="absolute left-1/2 top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-brand-blue bg-white" />
      </motion.span>
    </div>
  );
}

export default function ProductEcosystemDirection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-20 sm:py-24 xl:py-[110px]">
      <div
        className="pointer-events-none absolute left-1/2 top-[55%] h-[420px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(20,125,255,0.06),transparent_70%)]"
        aria-hidden
      />

      <div className="page-container relative">
        <Reveal className="mx-auto max-w-[1000px] text-center">
          <span className="inline-flex h-9 items-center gap-2 rounded-full bg-[#EEF6FF] px-[18px]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-blue sm:text-[14px]">Long-Term Vision</span>
          </span>

          <h2 className="mt-7 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-brand-navy sm:text-[48px] xl:text-[58px]">
            From One Product to a <br className="hidden md:block" />
            <span className="text-brand-blue">Product Ecosystem</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[740px] text-[17px] leading-[1.5] text-slate-500 sm:text-[19px]">
            Our disciplined product model starts with focused operational domains and evolves through real-world
            operational learning.
          </p>
        </Reveal>

        <ol className="mx-auto mt-16 grid max-w-[1380px] grid-cols-1 gap-8 pt-4 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-0">
          {EVOLUTION_STAGES.map(({ step, title, desc, icon: I, chip, ink, bar }, i) => (
            <li key={step} className="contents">
              {i > 0 && <Connector index={i} />}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="group relative flex min-w-0 flex-1 flex-col rounded-[22px] border border-[#DCEAFF] bg-white px-7 pb-7 pt-8 text-left shadow-[0_10px_30px_rgba(24,24,24,0.05)] transition-all duration-[250ms] ease-out hover:-translate-y-[5px] hover:border-[#A9CCF8] hover:shadow-[0_18px_40px_rgba(24,24,24,0.09)] lg:min-h-[320px]"
              >
                <span className="absolute -left-3 -top-4 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#DCEAFF] bg-[#F3F8FF] font-display text-[18px] font-bold text-brand-blue shadow-[0_6px_14px_-8px_rgba(20,125,255,0.5)]">
                  {step}
                </span>
                <span className={`ml-8 flex h-[64px] w-[64px] items-center justify-center rounded-[18px] ${chip}`}>
                  <I className={`h-8 w-8 ${ink}`} strokeWidth={2.2} />
                </span>
                <h3 className="ml-8 mt-5 font-display text-[20px] font-bold leading-[1.25] text-brand-navy">{title}</h3>
                <p className="ml-8 mt-3 flex-1 text-[15.5px] leading-[1.5] text-slate-500">{desc}</p>
                <span className={`ml-8 mt-6 block h-[4px] w-12 rounded-full ${bar}`} />
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
