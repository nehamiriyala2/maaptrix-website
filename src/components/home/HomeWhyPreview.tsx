import Link from "next/link";
import { ArrowRight, BarChart3, FileText, Layers, RefreshCw } from "lucide-react";
import Reveal from "@/components/Reveal";

const PRINCIPLES = [
  {
    icon: Layers,
    title: "Designed for Real Operations",
    description: "Built around the way organizations actually operate, day to day.",
  },
  {
    icon: FileText,
    title: "Built for Simplicity",
    description: "Straightforward workflows designed to be easy to understand and use.",
  },
  {
    icon: RefreshCw,
    title: "Built for Real-World Use",
    description: "Designed around the people, workflows and situations that use our products every day.",
  },
  {
    icon: BarChart3,
    title: "Continuously Improved",
    description: "Maintained, refined and improved long after the first release.",
  },
];

export default function HomeWhyPreview() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="home-why-heading">
      <div className="page-container">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
                Why Maaptrix
              </p>
              <h2
                id="home-why-heading"
                className="mt-4 font-display text-[30px] leading-[1.12] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-brand-navy"
              >
                Built differently, <span className="text-brand-blue">on purpose.</span>
              </h2>
            </div>
            <Link
              href="/why-maaptrix"
              className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Explore Why Maaptrix
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {PRINCIPLES.map(({ icon: Icon, title, description }) => (
              <li key={title} className="h-full rounded-2xl border border-[#CFE4FF] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-[0_16px_34px_-22px_rgba(20,125,255,0.5)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-bold leading-snug text-brand-navy">{title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-slate-500">{description}</p>
                </li>
            ))}
          </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
