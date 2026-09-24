"use client";

import { Compass, Layers, RefreshCw, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";

const VALUES = [
  {
    num: "01",
    title: "Focused Products",
    description: "Technology designed around a specific operational problem.",
    icon: Layers,
  },
  {
    num: "02",
    title: "Simpler Adoption",
    description: "Products designed to be practical and easier to understand.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Continuous Improvement",
    description: "The product continues to evolve after launch.",
    icon: RefreshCw,
  },
  {
    num: "04",
    title: "Long-Term Product Thinking",
    description: "The focus is on building products that can support changing operational needs.",
    icon: TrendingUp,
  },
];

export default function CustomerValue() {
  return (
    <section className="relative overflow-hidden bg-blue-white py-12 sm:py-16 lg:py-20 border-b border-slate-100">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Operational Value
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-brand-navy leading-[1.14]">
            What This Means for Organizations
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            How our product model delivers predictable, dependable value to everyday operations.
          </p>
        </Reveal>

        {/* 4 Cards Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {VALUES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.num} delay={idx * 0.08}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#CCE5FF] bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-10 items-center justify-center rounded-lg bg-brand-blue/10 font-mono text-xs font-bold text-brand-blue">
                        {item.num}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
