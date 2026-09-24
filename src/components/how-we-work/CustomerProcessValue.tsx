"use client";

import { CheckCircle2, Compass, Layout, RefreshCw, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const VALUES = [
  {
    title: "Clearer Product Direction",
    description: "Products begin with a defined operational problem.",
    icon: Compass,
    detail: "Every feature is anchored directly in solving real administrative or transit friction, eliminating bloat.",
  },
  {
    title: "Practical User Experience",
    description: "Workflows are designed around real users.",
    icon: Layout,
    detail: "Interfaces match how drivers, parents, and school administrators actually perform their daily tasks.",
  },
  {
    title: "Responsible Product Development",
    description: "Products are developed and validated systematically.",
    icon: ShieldCheck,
    detail: "High-reliability engineering with disciplined testing ensures stable operations upon rollout.",
  },
  {
    title: "Continuous Improvement",
    description: "Products continue to evolve after launch.",
    icon: RefreshCw,
    detail: "Organizations receive ongoing enhancements, security patches, and workflow refinements over time.",
  },
];

export default function CustomerProcessValue() {
  return (
    <section className="relative overflow-hidden bg-blue-white py-14 sm:py-18 lg:py-24 border-b border-slate-100 select-none">
      <div className="page-container">
        
        {/* Header */}
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Organizational Value
            </p>
          </div>

          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[2.85rem] font-bold tracking-tight text-brand-navy leading-[1.12]">
            What the Process Means for <span className="text-brand-blue">Organizations.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            How our end-to-end product discipline translates into dependable,
            everyday software for your institution.
          </p>
        </Reveal>

        {/* 4 Value Blocks */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={0.05 * (i + 1)}>
                <div className="h-full rounded-2xl border border-[#CCE5FF] bg-white p-6 shadow-2xs flex flex-col justify-between hover:border-brand-blue transition-colors">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-navy">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-brand-blue">
                      {v.description}
                    </p>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {v.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-brand-navy font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue" />
                    <span>Operational standard</span>
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
