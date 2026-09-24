"use client";

import { CheckCircle2, PenTool, RefreshCw, Search, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const PRINCIPLES = [
  {
    num: "01",
    title: "Understand the Problem",
    tagline: "Root-Cause Clarity",
    description:
      "We resist jumping into code before the operational workflow, real user pain points, and systemic constraints are thoroughly understood.",
    icon: Search,
    accent: "brand-blue",
  },
  {
    num: "02",
    title: "Design for the User",
    tagline: "Frontline Accessibility",
    description:
      "Interfaces must serve daily frontline staff, drivers, and parents without friction, lengthy manuals, or steep learning curves.",
    icon: PenTool,
    accent: "sky-600",
  },
  {
    num: "03",
    title: "Build Responsibly",
    tagline: "Resilient Architecture",
    description:
      "We engineer modular, reliable cloud backends and responsive applications built to withstand everyday operational use with high dependability.",
    icon: ShieldCheck,
    accent: "sky-600",
  },
  {
    num: "04",
    title: "Keep Improving",
    tagline: "Living Software",
    description:
      "Product launch is a beginning, not a destination. Continuous updates and user feedback keep our software sharp and relevant over time.",
    icon: RefreshCw,
    accent: "brand-blue",
  },
];

export default function ProductThinking() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24 border-b border-slate-100 select-none">
      <div className="page-container">
        
        {/* Header */}
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Product Philosophy
            </p>
          </div>

          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[2.85rem] font-bold tracking-tight text-brand-navy leading-[1.12]">
            Practical Technology Over <span className="text-brand-blue">Unnecessary Complexity.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Maaptrix focuses on building products that solve defined operational
            problems without adding unnecessary complexity. The goal is technology
            that organizations can understand, adopt and use in everyday operations.
          </p>
        </Reveal>

        {/* Asymmetric / Dynamic 4 Principles Layout */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          
          {/* Principle 01 - 7 cols on md */}
          <div className="md:col-span-7">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-gradient-to-br from-[#F8FCFF] to-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand-blue uppercase bg-brand-blue-light px-2.5 py-1 rounded-md">
                      Principle 01
                    </span>
                    <Search className="h-5 w-5 text-brand-blue" />
                  </div>
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-brand-navy">
                    Understand the Problem
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                    We resist jumping into code before the operational workflow,
                    real user pain points, and systemic constraints are thoroughly understood.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-navy">
                  <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                  <span>Problem-first validation prior to development</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Principle 02 - 5 cols on md */}
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-gradient-to-br from-[#F8FCFF] to-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-600 uppercase bg-sky-50 px-2.5 py-1 rounded-md">
                      Principle 02
                    </span>
                    <PenTool className="h-5 w-5 text-sky-600" />
                  </div>
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-brand-navy">
                    Design for the User
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                    Interfaces must serve daily frontline staff, drivers, and parents
                    without friction, lengthy manuals, or steep learning curves.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-navy">
                  <CheckCircle2 className="h-4 w-4 text-sky-600" />
                  <span>Intuitive role-based user experiences</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Principle 03 - 5 cols on md */}
          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <div className="h-full rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-gradient-to-br from-[#F8FCFF] to-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-700 uppercase bg-sky-50 px-2.5 py-1 rounded-md">
                      Principle 03
                    </span>
                    <ShieldCheck className="h-5 w-5 text-sky-600" />
                  </div>
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-brand-navy">
                    Build Responsibly
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                    We engineer modular, reliable cloud backends and responsive
                    applications built to withstand everyday operational use with high dependability.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-navy">
                  <CheckCircle2 className="h-4 w-4 text-sky-600" />
                  <span>Clean architecture &amp; data privacy standards</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Principle 04 - 7 cols on md */}
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <div className="h-full rounded-2xl sm:rounded-3xl border border-brand-blue/40 bg-gradient-to-br from-white via-[#F4F9FF] to-[#EAF4FF] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand-blue uppercase bg-brand-blue-light px-2.5 py-1 rounded-md">
                      Principle 04
                    </span>
                    <RefreshCw className="h-5 w-5 text-brand-blue" />
                  </div>
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-brand-navy">
                    Keep Improving
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                    Product launch is a beginning, not a destination. Continuous
                    updates and user feedback keep our software sharp and relevant over time.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-brand-blue">
                  <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                  <span>Iterative enhancement throughout the product lifecycle</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
