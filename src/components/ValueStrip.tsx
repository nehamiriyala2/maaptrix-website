import { BarChart3, FileText, Layers, RefreshCw } from "lucide-react";
import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    index: "01",
    icon: Layers,
    title: "Designed for Real Operations",
    description: "Built around the way organizations actually operate, day to day.",
  },
  {
    index: "02",
    icon: FileText,
    title: "Built for Simplicity",
    description: "Straightforward workflows designed to be easy to understand and use.",
  },
  {
    index: "03",
    icon: RefreshCw,
    title: "Built for Real-World Use",
    description: "Designed around the people, workflows and situations that use our products every day.",
  },
  {
    index: "04",
    icon: BarChart3,
    title: "Continuously Improved",
    description: "Maintained, refined and improved long after the first release.",
  },
];

export default function ValueStrip() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-100 py-6 sm:py-7 lg:py-8">
      <div className="page-container">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {PRINCIPLES.map(({ index, icon: Icon, title, description }) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#DCEBFF] bg-white p-6 shadow-[0_4px_20px_-4px_rgba(20,125,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-[0_12px_28px_-6px_rgba(20,125,255,0.16)]"
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
                <h3 className="mt-5 font-display text-[0.94rem] font-extrabold tracking-tight text-brand-navy leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-brand-navy/70">
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
