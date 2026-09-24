"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Box, Cloud, Layers, MapPin, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;

const PRINCIPLES: { icon: Icon; title: string; desc: string }[] = [
  { icon: Cloud, title: "Cloud-native architecture", desc: "Designed for high availability and reliability." },
  { icon: Layers, title: "Multi-tenant scalability", desc: "With disciplined operational security." },
];

const ROADMAP: { num: string; icon: Icon; title: string; desc: string; chip: string; ink: string; badge: string }[] = [
  { num: "01", icon: Box, title: "One Core Product", desc: "Solid operational foundation.", chip: "bg-[#E1EDFF]", ink: "text-brand-blue", badge: "bg-[#EAF3FF] text-brand-blue" },
  { num: "02", icon: Users, title: "More Users", desc: "Role-tailored interfaces & flows.", chip: "bg-[#E2ECF6]", ink: "text-sky-600", badge: "bg-[#EDF3FA] text-sky-600" },
  { num: "03", icon: MapPin, title: "More Locations", desc: "Multi-branch operational support.", chip: "bg-[#E8F2FD]", ink: "text-sky-600", badge: "bg-[#F1F7FE] text-sky-600" },
  { num: "04", icon: BarChart3, title: "Long-Term Roadmap", desc: "Continuous software evolution.", chip: "bg-[#DBECFE]", ink: "text-sky-500", badge: "bg-[#EBF4FE] text-sky-500" },
];

export default function ScalableDirection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F9FF_55%,#EDF5FF_100%)] py-16 sm:py-20 xl:py-[100px]">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-[40%] h-[360px] w-[360px] rounded-full bg-[#EAF3FF]" />
        <div className="absolute bottom-[-180px] right-[-80px] h-[420px] w-[720px] rounded-full bg-[#CFE4FF]/60 blur-[40px]" />
      </div>

      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-14 xl:gap-20">
          {/* Left */}
          <Reveal y={16} className="min-w-0">
            <span className="inline-flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3FF] text-[15px] font-bold text-brand-blue">06</span>
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue sm:text-[14px]">Long-Term Architecture</span>
            </span>

            <h2 className="mt-6 font-display text-[40px] font-extrabold leading-[1] tracking-[-0.03em] text-brand-navy sm:text-[52px] xl:text-[62px]">
              <span className="block">Scalable</span>
              <span className="block text-brand-blue">Direction</span>
            </h2>
            <p className="mt-6 max-w-[540px] text-[18px] leading-[1.55] text-[#526783] sm:text-[20px]">
              Products are planned to support growth across multiple customers and locations.
            </p>

            <ul className="mt-9 space-y-7">
              {PRINCIPLES.map(({ icon: I, title, desc }) => (
                <li key={title} className="flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#EAF3FF]">
                    <I className="h-7 w-7 text-brand-blue" strokeWidth={2.1} />
                  </span>
                  <div>
                    <p className="font-display text-[18px] font-bold text-brand-navy sm:text-[19px]">{title}</p>
                    <p className="mt-1 text-[16px] leading-[1.45] text-slate-500">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: roadmap card */}
          <div className="relative min-w-0">
            {/* Decoration behind the card */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -right-10 -top-16 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,#DCEBFF_0%,rgba(220,235,255,0)_70%)]" />
              <motion.svg
                viewBox="0 0 700 560"
                className="absolute -inset-x-8 -inset-y-10 h-[calc(100%+80px)] w-[calc(100%+64px)] overflow-visible"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M40 520 C-10 360 60 90 300 30 C480 -12 640 40 690 170" fill="none" stroke="#147DFF" strokeOpacity=".35" strokeWidth="1.6" strokeDasharray="4 8" />
                <circle cx="300" cy="30" r="5" fill="#147DFF" opacity=".7" />
                <circle cx="690" cy="170" r="6" fill="#147DFF" opacity=".8" />
                <circle cx="40" cy="520" r="4" fill="#147DFF" opacity=".5" />
              </motion.svg>
              <div
                className="absolute -top-12 right-6 h-[70px] w-[170px] opacity-40"
                style={{ backgroundImage: "radial-gradient(#8DBBF5 2px, transparent 2.2px)", backgroundSize: "30px 30px" }}
              />
            </div>

            <Reveal delay={0.1} y={20}>
              <div className="relative rounded-[26px] border border-[#DCEEFF] bg-white/[0.96] p-5 shadow-[0_24px_60px_-34px_rgba(24,24,24,0.28)] sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="h-[2.5px] w-11 rounded-full bg-brand-blue" />
                  <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue sm:text-[14px]">
                    Architectural Scaling Roadmap
                  </span>
                </div>

                <ol className="mt-6 space-y-3.5">
                  {ROADMAP.map(({ num, icon: I, title, desc, chip, ink, badge }, i) => (
                    <motion.li
                      key={num}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px 0px" }}
                      transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease: EASE }}
                      className="group flex min-h-[84px] items-center gap-3 rounded-[17px] border border-[#DCE9F8] bg-[#FCFDFF] px-3 py-3 transition-colors duration-200 hover:border-[#BCD8FA] sm:gap-4 sm:px-4"
                    >
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[15px] font-bold ${badge}`}>{num}</span>
                      <span className={`hidden h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] sm:flex ${chip}`}>
                        <I className={`h-6 w-6 ${ink}`} strokeWidth={2.1} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[15px] font-bold uppercase tracking-[0.02em] text-brand-navy sm:text-[16px]">{title}</p>
                        <p className="mt-0.5 text-[14px] leading-snug text-[#526783] sm:text-[15px]">{desc}</p>
                      </div>
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-brand-blue transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-brand-blue group-hover:text-white"
                        aria-hidden
                      >
                        <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
                      </span>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
