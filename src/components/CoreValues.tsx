"use client";

import {
  Lightbulb,
  Feather,
  ShieldCheck,
  HeartHandshake,
  Repeat,
  Gauge,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const VALUES = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Practical Innovation",
    description: "Applying technology in ways that solve real problems.",
  },
  {
    number: "02",
    icon: Feather,
    title: "Simplicity",
    description: "Keeping products and workflows easy to understand and use.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Reliability",
    description: "Building software that works consistently, every day.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Safety & Responsibility",
    description: "Designing with care for the people who depend on us.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Customer Focus",
    description: "Listening closely to the people who use our products daily.",
  },
  {
    number: "06",
    icon: Repeat,
    title: "Continuous Improvement",
    description: "Refining every product long after it first launches.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#DDF1FF] via-[#E8F5FF] to-[#E8F5FF] border-t border-[#BFE3FF]/50 py-7 sm:py-8 lg:py-10">
      {/* Soft ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-72 w-3/4 rounded-full bg-[#CFEAFF]/60 blur-[110px]" />
        <div className="absolute inset-0 bg-atmospheric-dots opacity-35" />
      </div>

      <div className="page-container">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Core Values
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[3rem]">
            What guides how we build.
          </h2>
        </Reveal>

        <div className="mt-6 sm:mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {VALUES.map((value, idx) => (
            <Reveal key={value.title} delay={idx * 0.05}>
              <div
                className="group relative flex h-full min-h-[175px] flex-col overflow-hidden rounded-[14px] border border-[#DCEBFF] bg-white p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(20,125,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_12px_28px_-10px_rgba(20,125,255,0.16)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-brand-navy/40">
                    {value.number}
                  </span>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-brand-blue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                </div>
                <span className="mt-3.5 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <value.icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-3.5 text-base sm:text-lg font-bold text-brand-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm sm:text-[0.92rem] leading-relaxed text-brand-navy/65">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
