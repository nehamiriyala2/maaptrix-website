import Link from "next/link";
import { ArrowRight, Crown, Headphones, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";

const FACTS = [
  { icon: Layers, title: "Product Ownership", desc: "We build and manage our own products." },
  { icon: Crown, title: "Subscription Model", desc: "Simple, scalable and predictable plans." },
  { icon: Headphones, title: "Continuous Support", desc: "We grow with our customers." },
];

export default function HomeIntro() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="home-intro-heading">
      <div className="page-container">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
              About Maaptrix
            </p>
            <h2
              id="home-intro-heading"
              className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[40px]"
            >
              Technology built around <span className="text-brand-blue">real-world problems.</span>
            </h2>
            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Learn more about Maaptrix
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[17px] leading-[1.7] text-slate-600 sm:text-[19px]">
              Maaptrix Private Limited is a technology company focused on building and managing its own software
              products. We identify real-world challenges, create purpose-built digital solutions and deliver them to
              customers through subscription plans.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {FACTS.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="rounded-2xl border border-[#DCEAFF] bg-[#F7FAFE] p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-blue shadow-[0_4px_12px_-6px_rgba(20,125,255,0.5)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-[16px] font-bold text-brand-navy">{title}</p>
                  <p className="mt-1 text-[14px] leading-snug text-slate-500">{desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
