import { BarChart3, FileText, School, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    index: "01",
    icon: School,
    title: "Designed for Real Operations",
    description: "Built around the way schools actually run, day to day.",
  },
  {
    index: "02",
    icon: FileText,
    title: "Built for Simplicity",
    description: "Straightforward workflows for admins, drivers and parents.",
  },
  {
    index: "03",
    icon: ShieldCheck,
    title: "Focused on Safety",
    description: "Visibility and accountability built into every workflow.",
  },
  {
    index: "04",
    icon: BarChart3,
    title: "Continuously Improved",
    description: "Maintained and refined long after the first release.",
  },
];

export default function ValueStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF8FF] via-[#E4F4FF] to-[#EFF8FF] border-t border-[#BFE3FF]/60 py-5 sm:py-6 lg:py-7">
      {/* Soft atmospheric background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-24 h-48 w-3/4 -translate-x-1/2 rounded-full bg-[#CFEAFF]/50 blur-3xl" />
      </div>

      <div className="page-container">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {PRINCIPLES.map(({ index, icon: Icon, title, description }) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#DCEBFF] bg-white p-6 shadow-[0_4px_20px_-4px_rgba(20,125,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-[0_12px_28px_-6px_rgba(20,125,255,0.18)] sm:p-6"
              >
                {/* Top Row: Index Badge & Icon Squircle */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-xs font-bold text-brand-blue">
                    {index}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 font-display text-[0.92rem] font-extrabold uppercase tracking-[0.04em] text-brand-navy leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-brand-navy/65">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

