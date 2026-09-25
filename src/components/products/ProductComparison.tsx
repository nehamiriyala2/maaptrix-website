import { Bus, CircleCheck, School } from "lucide-react";
import Reveal from "@/components/Reveal";

const PRODUCTS = [
  {
    num: "01",
    name: "School Transport",
    icon: Bus,
    items: [
      "Transportation & vehicle visibility",
      "Real-time GPS fleet tracking",
      "Driver operations & turn-by-turn workflow",
      "Parent transport access & notifications",
      "Safety workflows & guardian validation",
    ],
    focus: "Transport logistics, safety & connectivity",
  },
  {
    num: "02",
    name: "School Management",
    icon: School,
    items: [
      "Student administration & onboarding",
      "Daily attendance tracking & automated records",
      "Academic records & homework sharing",
      "School-to-parent communication & announcements",
      "School event calendar & moment sharing",
    ],
    focus: "Administration, academics & announcements",
  },
];

export default function ProductComparison() {
  return (
    <section className="surface-soft py-16 sm:py-20 lg:py-24" aria-labelledby="comparison-heading">
      <div className="page-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" aria-hidden />
            Product Overview
          </p>
          <h2
            id="comparison-heading"
            className="mt-4 font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-brand-navy"
          >
            Two Products. <span className="text-brand-blue">Different Operational Needs.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.55] text-slate-700 sm:text-[18px]">
            A clear architectural comparison of how each Maaptrix software solution serves distinct operational workflows.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 grid max-w-[1120px] gap-6 md:grid-cols-2 lg:gap-8">
            {PRODUCTS.map(({ num, name, icon: Icon, items, focus }, i) => (
              <article
                key={num}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#D5E6F7] bg-white shadow-[0_24px_50px_-30px_rgba(16,42,86,0.45)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`relative overflow-hidden px-7 py-6 text-white sm:px-8 ${
                    i === 0 ? "bg-[linear-gradient(125deg,#1683F7_0%,#0E71E6_100%)]" : "bg-[linear-gradient(125deg,#0B63D6_0%,#073B78_100%)]"
                  }`}
                >
                  <span className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rotate-12 rounded-[28px] border border-white/15" aria-hidden />
                  <div className="relative flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-white/15">
                      <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/75">Product {num}</p>
                      <h3 className="font-display text-[22px] font-bold leading-tight sm:text-[24px]">{name}</h3>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3.5 px-7 pb-7 pt-7 sm:px-8">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15.5px] leading-snug text-brand-navy sm:text-[16px]">
                      <CircleCheck className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-blue" strokeWidth={2} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mx-7 mb-7 mt-auto rounded-[10px] bg-[#EAF4FF] px-4 py-3 text-[14px] text-brand-navy sm:mx-8 sm:mb-8">
                  <span className="font-semibold text-brand-blue">Primary focus:</span> {focus}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
