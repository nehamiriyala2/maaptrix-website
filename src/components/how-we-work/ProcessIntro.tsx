"use client";

import { ArrowRight, CheckCircle2, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ProcessIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 border-b border-slate-100 select-none">
      <div className="page-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Large statement (6 cols on lg) */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
                  Operational Alignment
                </p>
              </div>

              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[2.65rem] font-bold tracking-tight text-brand-navy leading-[1.14]">
                Built Around How Real Organizations Operate.
              </h2>
            </Reveal>
          </div>

          {/* Right Column: Short explanation + operational workflow visual (6 cols on lg) */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg leading-[1.7] text-slate-700 font-normal">
                Technology becomes useful when it fits the way people actually
                work. Maaptrix starts by understanding operational problems,
                user needs and everyday workflows before turning them into
                focused digital products.
              </p>

              {/* Workflow Flow Visual */}
              <div className="mt-6 rounded-2xl border border-[#CCE5FF] bg-gradient-to-r from-[#F8FCFF] to-white p-4 sm:p-5 shadow-2xs">
                <div className="flex items-center justify-between text-xs font-bold text-brand-navy mb-3">
                  <span className="flex items-center gap-1.5 text-brand-blue">
                    <Workflow className="h-4 w-4" />
                    Problem-First Alignment Flow
                  </span>
                  <span className="text-[0.68rem] text-slate-500 font-normal">
                    Real-World Context
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
                    <span className="block text-[0.65rem] font-mono font-bold text-slate-400 uppercase">01</span>
                    <span className="block mt-1 font-bold text-brand-navy">Operational Problem</span>
                    <span className="block mt-0.5 text-[0.68rem] text-slate-500">Everyday friction</span>
                  </div>

                  <div className="rounded-xl border border-brand-blue/30 bg-brand-blue-light/50 p-3 shadow-xs">
                    <span className="block text-[0.65rem] font-mono font-bold text-brand-blue uppercase">02</span>
                    <span className="block mt-1 font-bold text-brand-blue">User Workflows</span>
                    <span className="block mt-0.5 text-[0.68rem] text-brand-navy/70">Actual frontline use</span>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
                    <span className="block text-[0.65rem] font-mono font-bold text-slate-400 uppercase">03</span>
                    <span className="block mt-1 font-bold text-brand-navy">Digital Product</span>
                    <span className="block mt-0.5 text-[0.68rem] text-slate-500">Focused solution</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
