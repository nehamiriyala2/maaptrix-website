"use client";

import { Boxes } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    number: "01",
    title: "Focused Solutions",
    description:
      "Purpose-built for specific operational problems, avoiding bloated, generic software suites.",
  },
  {
    number: "02",
    title: "Subscription Model",
    description:
      "Continuously supported, maintained, and improved through a direct subscription relationship.",
  },
  {
    number: "03",
    title: "End-to-End Ownership",
    description:
      "From planning and design through development, launch, support, and continuous enhancement.",
  },
  {
    number: "04",
    title: "Usability Focus",
    description:
      "Designed specifically for schools, drivers, and parents who interact with the system daily.",
  },
  {
    number: "05",
    title: "Scalable Direction",
    description:
      "Built with a long-term product roadmap in mind, evolving as operational needs mature.",
  },
];

export default function WhyMaaptrix() {
  return (
    <section id="why-maaptrix" className="relative bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-line" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-brand-line" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Why Maaptrix
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Built differently, on purpose.
          </h2>
          <p className="mt-3 text-base text-brand-navy/70">
            A technology product company dedicated to real-world operations.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Flagship Dark Panel (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[14px] bg-brand-navy p-8 text-white sm:p-10 shadow-[0_12px_32px_-12px_rgba(11,31,65,0.25)]">
                {/* Abstract lifecycle background lines */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-blue/20 blur-2xl" />
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
                  viewBox="0 0 300 320"
                  fill="none"
                >
                  <path
                    d="M 20,300 C 90,260 60,180 140,160 C 220,140 190,60 280,20"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx="20" cy="300" r="4" fill="white" />
                  <circle cx="140" cy="160" r="4" fill="white" />
                  <circle cx="280" cy="20" r="4" fill="white" />
                </svg>

                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Boxes className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <p className="mt-6 text-[0.72rem] font-bold uppercase tracking-wider text-brand-blue">
                    Core Philosophy
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    Product-First Company
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                    We build and operate our own products end to end, rather than
                    one-off custom projects for hire — backed by an active, long-term
                    roadmap behind every single release.
                  </p>
                </div>

                <div className="relative mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                    <span className="h-2 w-2 rounded-full bg-brand-blue" />
                    <span>Dedicated product engineering &amp; continuous operations</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Editorial Differentiator List (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex flex-col divide-y divide-brand-line">
              {PILLARS.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={idx * 0.05}>
                  <div className="group relative flex items-baseline gap-6 py-6 pl-4 -ml-4 pr-2 transition-all duration-300 first:pt-0 hover:bg-brand-blue-tint/50 sm:gap-8">
                    <span className="pointer-events-none absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-brand-blue transition-all duration-300 group-hover:h-[70%]" />
                    <span className="w-8 shrink-0 font-mono text-sm font-semibold text-brand-blue/60 transition-colors group-hover:text-brand-blue">
                      {pillar.number}
                    </span>
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                      <h3 className="text-base font-bold text-brand-navy transition-colors group-hover:text-brand-blue sm:text-lg">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-brand-navy/65">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
