"use client";

import { Bell, Bus, FileText, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const CATEGORIES = [
  {
    title: "Transportation",
    description: "Vehicle visibility, route management and live transport tracking.",
    icon: Bus,
  },
  {
    title: "Safety",
    description: "Attendance validation, SOS emergency protocols and student safety.",
    icon: ShieldCheck,
  },
  {
    title: "Communication",
    description: "Real-time broadcasts, notifications and parent connectivity.",
    icon: Bell,
  },
  {
    title: "Administration",
    description: "Essential student records, schedules and operational coordination.",
    icon: FileText,
  },
];

export default function WhereWeStart() {
  return (
    <section className="relative overflow-hidden bg-blue-white py-12 sm:py-16 lg:py-20 border-b border-slate-100">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Initial Product Focus
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-brand-navy leading-[1.14]">
            Where We Start
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Our initial product focus includes digital solutions for school operations,
            with particular emphasis on school transportation, student safety,
            communication and day-to-day administration.
          </p>
        </Reveal>

        {/* 4 Clean Category Cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title} delay={idx * 0.08}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#CCE5FF] bg-white p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-md">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20 transition-transform duration-300 group-hover:scale-105 group-hover:bg-brand-blue group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cat.description}
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
