"use client";

import { Bus, CheckCircle2, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ProductComparison() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 border-b border-slate-100 select-none">
      <div className="page-container">
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Product Overview
            </p>
          </div>

          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-bold tracking-tight text-brand-navy leading-[1.15]">
            Two Products. <span className="text-brand-blue">Different Operational Needs.</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A clear architectural comparison of how each Maaptrix software solution serves distinct operational workflows.
          </p>
        </Reveal>

        {/* 2 Comparative Product Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          
          {/* Card 1: School Transport */}
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-gradient-to-b from-white to-[#F8FCFF] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                    <Bus className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-blue uppercase">Product 01</span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-brand-navy">
                      School Transport
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  {[
                    "Transportation & vehicle visibility",
                    "Real-time GPS fleet tracking",
                    "Driver operations & turn-by-turn workflow",
                    "Parent transport access & notifications",
                    "Safety workflows & guardian validation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Primary focus: Transport logistics, safety &amp; connectivity
              </div>
            </div>
          </Reveal>

          {/* Card 2: School Management */}
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-gradient-to-b from-white to-[#F8FCFF] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-200">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-sky-700 uppercase">Product 02</span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-brand-navy">
                      School Management
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  {[
                    "Student administration & onboarding",
                    "Daily attendance tracking & automated records",
                    "Academic records & homework sharing",
                    "School-to-parent communication & announcements",
                    "School event calendar & moment sharing",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Primary focus: Administration, academics &amp; announcements
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
