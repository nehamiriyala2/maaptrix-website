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
    <section className="bg-[#F2F8FF] py-12 sm:py-16 lg:py-20" aria-labelledby="comparison-heading">
      <div className="page-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" aria-hidden />
            Product Overview
          </p>
          <h2
            id="comparison-heading"
            className="mt-4 font-display text-[30px] leading-[1.12] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-brand-navy"
          >
            Two Products. <span className="text-brand-blue">Different Operational Needs.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.55] text-slate-700 sm:text-[18px]">
            A clear architectural comparison of how each Maaptrix software solution serves distinct operational workflows.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 grid max-w-[900px] gap-6 md:grid-cols-2">
            {PRODUCTS.map(({ num, name, icon: Icon, items, focus }) => (
              <article
                key={num}
                className="relative flex flex-col overflow-hidden rounded-[22px] border border-[#CFE4FF] bg-[#EEF2F7] p-7 pt-9 shadow-[0_18px_40px_-30px_rgba(10,10,10,0.45)] sm:p-8 sm:pt-10"
              >
                <span
                  className="absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-brand-blue to-[#4DA8FF]"
                  aria-hidden
                />
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#CFE4FF] bg-white text-brand-navy">
                    <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-blue">Product {num}</p>
                    <h3 className="font-display text-[21px] font-semibold leading-tight text-brand-navy sm:text-[22px]">
                      {name}
                    </h3>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-brand-navy sm:text-[16px]">
                      <CircleCheck className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-blue" strokeWidth={2} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-10 text-[13.5px] text-slate-600">
                  <span className="text-slate-500">Primary focus:</span> {focus}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
