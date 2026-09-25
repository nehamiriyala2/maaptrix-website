import Link from "next/link";
import { ArrowRight, ClipboardList, Compass, LifeBuoy, Settings2, Share2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const STEPS = [
  { num: "01", name: "Discover", desc: "Understand how your organization works today.", icon: Compass },
  { num: "02", name: "Plan", desc: "Agree the modules, users and rollout order.", icon: ClipboardList },
  { num: "03", name: "Implement", desc: "Configure the product and onboard your team.", icon: Settings2 },
  { num: "04", name: "Connect", desc: "Bring administrators, staff, drivers and parents together.", icon: Share2 },
  { num: "05", name: "Support", desc: "Stay involved with support, updates and improvements.", icon: LifeBuoy },
];

export default function HomeProcessPreview() {
  return (
    <section className="bg-[#F2F8FF] py-12 sm:py-16 lg:py-20" aria-labelledby="home-process-heading">
      <div className="page-container">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
              How We Work
            </p>
            <h2
              id="home-process-heading"
              className="mt-4 font-display text-[30px] leading-[1.12] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-brand-navy"
            >
              From discovery to <span className="text-brand-blue">ongoing support.</span>
            </h2>
          </Reveal>

          <Reveal>
          <ol className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            <span
              className="absolute left-[10%] right-[10%] top-7 hidden h-[2px] bg-gradient-to-r from-brand-blue/20 via-brand-blue/60 to-brand-blue/20 lg:block"
              aria-hidden
            />
            {STEPS.map(({ num, name, desc, icon: Icon }) => (
              <li key={num} className="relative flex h-full gap-4 rounded-2xl bg-white p-5 lg:flex-col lg:items-center lg:gap-0 lg:bg-transparent lg:p-0 lg:text-center">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#CFE4FF] bg-white text-brand-blue shadow-[0_8px_20px_-10px_rgba(20,125,255,0.6)]">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12px] font-bold text-brand-blue lg:mt-4">{num}</span>
                    <span className="block font-display text-[17px] font-bold text-brand-navy">{name}</span>
                    <span className="mt-1 block text-[14px] leading-snug text-slate-500 lg:px-2">{desc}</span>
                  </span>
                </li>
            ))}
          </ol>
          </Reveal>

          <div className="mt-10 text-center">
            <Link
              href="/how-we-work"
              className="group inline-flex h-12 items-center gap-2 rounded-[11px] border border-slate-300 bg-white px-6 text-[15px] font-semibold text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              See How We Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
