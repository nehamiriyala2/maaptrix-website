"use client";

import { CheckCircle2, Layers, RefreshCw, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ProductPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-blue-white py-12 sm:py-16 lg:py-20 border-b border-slate-100 select-none">
      <div className="page-container">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
                Product Principles
              </p>
            </div>

            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-bold tracking-tight text-brand-navy leading-[1.15]">
              Focused Products. <span className="text-brand-blue">Practical Outcomes.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Each Maaptrix product is designed around a defined operational
              problem, with usability, reliability and continuous improvement
              built into the product lifecycle.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-3">
                  <Layers className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-base font-bold text-brand-navy">
                  Operational Usability
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Clean interfaces crafted for non-technical frontline operators, drivers and parents.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-3">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-base font-bold text-brand-navy">
                  Dependable Reliability
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Resilient cloud architecture engineered for consistent daily performance and safety.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-3">
                  <RefreshCw className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-base font-bold text-brand-navy">
                  Continuous Evolution
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Regular enhancements guided by real operational feedback long after the first launch.
                </p>
              </div>
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
