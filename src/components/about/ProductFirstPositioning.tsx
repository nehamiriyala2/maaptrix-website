"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import {
  ArrowUpRight,
  BarChart3,
  CodeXml,
  FileText,
  Layers,
  RefreshCw,
  Rocket,
  Target,
  UserRound,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const script = Caveat({ subsets: ["latin"], weight: ["500", "600"], display: "swap" });

const TONES = {
  blue: { accent: "#147DFF", soft: "#EEF5FF", chip: "#DCEBFF", border: "#DCE9FB" },
  green: { accent: "#16A34A", soft: "#EDF9F1", chip: "#D5F2E0", border: "#D8F0E1" },
  purple: { accent: "#8B5CF6", soft: "#F4EFFE", chip: "#E7DDFD", border: "#E6DDFB" },
  orange: { accent: "#F97316", soft: "#FFF4EA", chip: "#FFE3CC", border: "#FBE3CF" },
} as const;

const LIFECYCLE_STEPS = [
  {
    step: "01",
    title: ["Understand", "Real Problems"],
    desc: "Identify recurring operational challenges from real-world users and define clear goals.",
    icon: Target,
    tone: TONES.blue,
  },
  {
    step: "02",
    title: ["Define", "the Product"],
    desc: "Design practical, focused solutions with well-defined scope and user needs.",
    icon: FileText,
    tone: TONES.green,
  },
  {
    step: "03",
    title: ["Develop", "with Quality"],
    desc: "Build scalable, secure and reliable software with rigorous testing and best practices.",
    icon: CodeXml,
    tone: TONES.purple,
  },
  {
    step: "04",
    title: ["Launch", "Responsibly"],
    desc: "Deploy the product with proper onboarding, documentation and operational readiness.",
    icon: Rocket,
    tone: TONES.orange,
  },
  {
    step: "05",
    title: ["Support", "Every User"],
    desc: "Ensure continuous assistance, training and smooth day-to-day operations.",
    icon: UserRound,
    tone: TONES.blue,
  },
  {
    step: "06",
    title: ["Continuously", "Improve"],
    desc: "Collect feedback, monitor real usage and evolve the product for long-term impact.",
    icon: RefreshCw,
    tone: TONES.green,
  },
];

const SCENE = "/about/about-product-company-scene.jpg";
const FOLIAGE = "/about/about-hero-foliage.png";

/* Feathers the photo into the page on the left, top and bottom edges. */
const SCENE_MASK = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, #000 22%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 80%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, #000 22%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 80%, transparent 100%)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
} as const;

function FlowArrow() {
  return (
    <svg viewBox="0 0 30 14" className="h-[14px] w-[30px] shrink-0 self-center" aria-hidden>
      <path d="M1 7h20" stroke="#3B8EFF" strokeWidth="1.8" strokeDasharray="4 3" strokeLinecap="round" />
      <path d="M21 2l6 5-6 5" fill="none" stroke="#147DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductFirstPositioning() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#EEF6FF_0%,#F6FAFF_42%,#EAF3FE_100%)] pb-14 pt-14 sm:pb-16 sm:pt-16 xl:pb-20">
      {/* Background waves */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <path d="M0 120 C360 40 700 190 1040 110 S1480 30 1600 80 L1600 0 L0 0Z" fill="#FFFFFF" fillOpacity=".7" />
        <path d="M0 520 C300 440 620 600 980 520 S1440 420 1600 480 L1600 900 L0 900Z" fill="#DDEEFF" fillOpacity=".45" />
        <path d="M0 610 C380 540 760 680 1120 600 S1500 540 1600 570" fill="none" stroke="#FFFFFF" strokeOpacity=".8" strokeWidth="2" />
      </svg>

      {/* Foreground depth */}
      <div className="pointer-events-none absolute -bottom-20 -left-24 z-20 hidden h-[340px] w-[300px] opacity-80 xl:block" aria-hidden>
        <Image src={FOLIAGE} alt="" fill sizes="300px" className="object-contain object-[left_bottom]" />
      </div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 z-20 hidden h-[340px] w-[300px] -scale-x-100 opacity-75 xl:block" aria-hidden>
        <Image src={FOLIAGE} alt="" fill sizes="300px" className="object-contain object-[left_bottom]" />
      </div>

      <div className="page-container relative z-10">
        <div className="mx-auto max-w-[1480px]">
          {/* ---------- Hero row ---------- */}
          <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] xl:gap-6">
            <Reveal className="relative z-10 min-w-0">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D3E5FB] bg-[#E9F2FE]/90 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue sm:text-[14px]">
                  Company Architecture
                </span>
              </span>

              <h2 className="mt-6 font-display text-[44px] font-extrabold leading-[1] tracking-[-0.035em] text-brand-navy sm:text-[58px] xl:text-[clamp(56px,4.4vw,70px)]">
                What We <span className="text-brand-blue">Do</span>
              </h2>
              <p className="mt-2 font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#33456A] sm:text-[38px] xl:text-[clamp(36px,2.9vw,46px)]">
                Built as a{" "}
                <span className="bg-gradient-to-r from-[#147DFF] to-[#0F63CC] bg-clip-text text-transparent">
                  Product Company
                </span>
              </p>

              <p className="mt-6 text-[17px] font-bold leading-snug text-brand-navy sm:text-[19px]">
                Maaptrix builds, owns and manages its own software products.
              </p>
              <p className="mt-4 max-w-[590px] text-[16px] leading-[1.6] text-[#4A5B78] sm:text-[17px]">
                Rather than building one-off custom applications for individual clients, Maaptrix identifies
                recurring problems, creates focused digital products and continuously improves those products
                as operational needs evolve.
              </p>
            </Reveal>

            {/* Building scene */}
            <Reveal delay={0.1} className="relative min-w-0 xl:-mr-[clamp(24px,5vw,96px)]">
              <div className="relative h-[300px] sm:h-[400px] xl:h-[440px]">
                <div className="absolute inset-0 overflow-hidden rounded-[28px] xl:rounded-none" style={SCENE_MASK}>
                  <Image
                    src={SCENE}
                    alt="Maaptrix headquarters building with landscaped grounds"
                    fill
                    sizes="(min-width: 1280px) 58vw, 100vw"
                    className="object-cover object-[50%_72%]"
                  />
                </div>

                {/* Handwritten annotation */}
                <div
                  className={`${script.className} pointer-events-none absolute left-[2%] top-[4%] hidden -rotate-[9deg] text-[30px] leading-[1.02] text-brand-navy sm:block xl:left-[1%] xl:text-[34px]`}
                >
                  <span className="block pl-10">Turning</span>
                  <span className="block">Real Operations</span>
                  <span className="block pl-3">into Reliable Products</span>
                  <svg viewBox="0 0 180 22" className="ml-16 mt-1 h-[18px] w-[150px]" aria-hidden>
                    <path d="M3 18 C50 6 110 2 177 4" fill="none" stroke="#147DFF" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Floating delivery card */}
                <div className="absolute bottom-[6%] left-[4%] w-[210px] rounded-[20px] border border-white/90 bg-white/75 p-3.5 sm:rounded-[26px] sm:p-5 shadow-[0_24px_48px_-20px_rgba(20,70,150,0.45),inset_0_1px_0_#fff] ring-1 ring-[#CFE2FB] backdrop-blur-xl sm:left-[14%] sm:w-[310px] sm:-rotate-[3deg]">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl sm:h-[54px] sm:w-[54px] bg-[linear-gradient(145deg,#EEF5FF,#D6E8FF)]">
                      <BarChart3 className="h-7 w-7 text-brand-blue" strokeWidth={2.4} />
                    </span>
                    <p className="font-display text-[16px] font-semibold leading-[1.2] text-brand-navy sm:text-[22px]">
                      End-to-End
                      <br />
                      Product Delivery
                    </p>
                  </div>
                  <span className="ml-auto mt-1 flex h-7 w-7 sm:mt-2 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_6px_14px_-6px_rgba(20,125,255,0.6)]">
                    <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---------- Lifecycle panel ---------- */}
          <Reveal delay={0.1} className="mt-8 xl:mt-6">
            <div className="rounded-[30px] border border-white bg-white/70 p-5 shadow-[0_30px_60px_-30px_rgba(20,70,150,0.35),inset_0_1px_0_#fff] backdrop-blur-xl sm:p-7">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="flex items-center gap-3">
                  <Layers className="h-7 w-7 text-brand-blue" strokeWidth={2} />
                  <span className="text-[14px] font-bold uppercase tracking-[0.06em] text-brand-blue sm:text-[16px]">
                    Maaptrix Product Stewardship Lifecycle
                  </span>
                </span>
                <span className="hidden h-px flex-1 bg-gradient-to-r from-[#CFE2FB] to-[#CFE2FB]/30 md:block" />
                <span className="text-[13px] text-slate-500">From Real Problems to Real Impact</span>
              </div>

              <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:gap-0">
                {LIFECYCLE_STEPS.map((s, i) => {
                  const Icon = s.icon;
                  const style = {
                    "--tone": s.tone.accent,
                    "--tone-soft": s.tone.soft,
                    "--tone-chip": s.tone.chip,
                    "--tone-border": s.tone.border,
                  } as CSSProperties;
                  return (
                    <li key={s.step} style={style} className="contents">
                      {i > 0 && (
                        <span className="hidden px-0.5 xl:flex 2xl:px-1.5">
                          <FlowArrow />
                        </span>
                      )}
                      <div className="group flex min-w-0 flex-1 flex-col rounded-[22px] border border-[var(--tone-border)] bg-[linear-gradient(170deg,var(--tone-soft)_0%,rgba(255,255,255,0.92)_60%)] p-5 xl:p-4 2xl:p-5 shadow-[0_14px_30px_-20px_rgba(20,70,150,0.4)] transition-transform duration-300 hover:-translate-y-1 xl:min-h-[262px]">
                        <div className="flex items-center justify-between">
                          <span className="font-display text-[28px] font-medium leading-none text-[var(--tone)] opacity-80">
                            {s.step}
                          </span>
                          <span className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[var(--tone-chip)]">
                            <Icon className="h-[26px] w-[26px] text-[var(--tone)]" strokeWidth={2.2} />
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-[17px] font-bold leading-[1.25] text-brand-navy">
                          <span className="block">{s.title[0]}</span>
                          <span className="block">{s.title[1]}</span>
                        </h3>
                        <p className="mt-3 flex-1 text-[14px] leading-[1.5] text-slate-500 xl:text-[13px] 2xl:text-[14px]">{s.desc}</p>
                        <span className="mt-4 block h-[4px] w-14 rounded-full bg-[var(--tone)]" />
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
