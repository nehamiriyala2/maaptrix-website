"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  { number: "01", title: "Identify", description: "Understand a recurring operational problem and the users affected by it." },
  { number: "02", title: "Design", description: "Define workflows, roles, safety requirements and the minimum practical product." },
  { number: "03", title: "Develop", description: "Build the product using suitable web, mobile and cloud technologies." },
  { number: "04", title: "Validate", description: "Test usability, operational flows and reliability before broader rollout." },
  { number: "05", title: "Launch", description: "Onboard customers, conduct demos and support implementation." },
  { number: "06", title: "Improve", description: "Use feedback, support requests and product data to prioritize enhancements." },
];

function StepNode({ index, total, scrollYProgress }: { index: number; total: number; scrollYProgress: import("framer-motion").MotionValue<number> }) {
  const start = index / total;
  const end = (index + 0.5) / total;
  const bg = useTransform(scrollYProgress, [start, end], ["#ffffff", "#147dff"]);
  const border = useTransform(scrollYProgress, [start, end], ["#e3ecf8", "#147dff"]);
  const color = useTransform(scrollYProgress, [start, end], ["#147dff", "#ffffff"]);
  const shadow = useTransform(
    scrollYProgress,
    [start, end],
    ["0 0 0 rgba(20,125,255,0)", "0 0 0 6px rgba(20,125,255,0.14)"]
  );

  return (
    <motion.div
      style={{ backgroundColor: bg, borderColor: border, color, boxShadow: shadow }}
      className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border font-mono text-xs font-bold transition-colors group-hover:!border-brand-blue group-hover:!bg-brand-blue group-hover:!text-white lg:static lg:h-12 lg:w-12 lg:text-sm"
    >
      {STEPS[index].number}
    </motion.div>
  );
}

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative overflow-hidden bg-brand-blue-tint/50 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-line" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-brand-line" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              How We Work
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            From Problem to Product — and Beyond
          </h2>
          <p className="mt-3 text-base text-brand-navy/70">
            A disciplined product lifecycle combining rigorous engineering with continuous improvement.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-14">
          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-brand-line lg:block" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-brand-blue lg:block"
          />

          {/* Mobile/Tablet Connecting Line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-brand-line lg:hidden" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-5 top-0 bottom-0 w-px origin-top bg-brand-blue lg:hidden"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.07}>
                <div className="group relative flex flex-col gap-3 pl-12 transition-transform duration-300 hover:-translate-y-1 lg:pl-0">
                  <StepNode index={i} total={STEPS.length} scrollYProgress={scrollYProgress} />
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy transition-colors group-hover:text-brand-blue sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-brand-navy/65">
                      {step.description}
                    </p>
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
