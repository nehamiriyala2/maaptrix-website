"use client";

import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { ArrowRight, BarChart3, Layers, Rocket, Target } from "lucide-react";
import Reveal from "@/components/Reveal";

const script = Caveat({ subsets: ["latin"], weight: ["500", "600"], display: "swap" });

const STORY_STEPS = [
  {
    title: "Understand the Problem",
    desc: "We work closely with real operational challenges and user needs.",
    icon: Target,
  },
  {
    title: "Define a Practical Product",
    desc: "Turn real-world requirements into focused and usable software.",
    icon: Layers,
  },
  {
    title: "Launch Responsibly",
    desc: "Validate, deploy and support products with operational excellence.",
    icon: Rocket,
  },
  {
    title: "Continuously Improve",
    desc: "Learn from usage, feedback and evolving needs to deliver lasting value.",
    icon: BarChart3,
  },
];

const BUILDING = "/about/about-story-building.jpg";

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#F7FAFF_0%,#EEF5FE_55%,#F7FAFF_100%)] pb-14 pt-14 sm:pb-16 sm:pt-16 xl:pb-16">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-40 top-10 h-[560px] w-[560px] rounded-full bg-white/80 blur-[100px]" />
        <div className="absolute right-[-8%] top-[-10%] h-[560px] w-[820px] rounded-full bg-[#CFE4FF]/40 blur-[110px]" />
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M-40 300 C200 120 520 60 860 140" fill="none" stroke="#FFFFFF" strokeOpacity=".85" strokeWidth="2" />
          <path d="M0 700 C400 640 820 760 1200 690 S1520 650 1600 670" fill="none" stroke="#FFFFFF" strokeOpacity=".8" strokeWidth="2" />
        </svg>
      </div>

      <div className="page-container relative z-10">
        <div className="mx-auto max-w-[1480px]">
          {/* ---------- Top: narrative + oval building ---------- */}
          <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] xl:gap-4">
            <Reveal className="relative z-20 min-w-0">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D3E5FB] bg-[#EAF3FE] px-5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue sm:text-[14px]">
                  Company Story
                </span>
              </span>

              <h2 className="mt-6 font-display text-[40px] font-extrabold leading-[1.03] tracking-[-0.035em] text-brand-navy sm:text-[56px] xl:text-[clamp(46px,3.9vw,66px)]">
                <span className="block xl:whitespace-nowrap">Built Around Real</span>
                <span className="block text-brand-blue xl:whitespace-nowrap">Operational Problems</span>
              </h2>

              <p className="mt-6 max-w-[640px] text-[18px] font-medium leading-[1.5] text-brand-navy sm:text-[20px]">
                Maaptrix Private Limited is a technology company focused on building and managing its own
                software products.
              </p>
              <p className="mt-4 max-w-[640px] text-[16px] leading-[1.65] text-[#5A6A85] sm:text-[17px] 2xl:text-[18px]">
                Our approach brings software engineering and project management together. We focus on
                understanding the problem, defining a practical product, coordinating development, validating
                usability, launching responsibly and improving the product based on customer feedback and
                operational needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link
                  href="/products"
                  className="group inline-flex h-[56px] min-w-[190px] items-center justify-center gap-2.5 rounded-xl bg-brand-navy px-7 text-[16px] font-semibold text-white shadow-[0_12px_26px_-12px_rgba(11,31,65,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue"
                >
                  Our Products
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/why-maaptrix"
                  className="inline-flex h-[56px] min-w-[190px] items-center justify-center rounded-xl border border-[#CFE0F5] bg-white px-7 text-[16px] font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
                >
                  More About Us
                </Link>
              </div>
            </Reveal>

            {/* Oval building scene, bleeding off the right edge */}
            <Reveal delay={0.1} className="relative min-w-0 xl:-mr-[clamp(24px,5vw,96px)]">
              <div className="relative h-[320px] sm:h-[440px] xl:h-[600px]">
                {/* Orbit outlines + node */}
                <svg
                  viewBox="0 0 1000 600"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -inset-y-[3%] -left-[2%] z-10 hidden h-[106%] w-[122%] overflow-visible xl:block"
                  aria-hidden
                >
                  <ellipse cx="500" cy="300" rx="492" ry="292" fill="none" stroke="#BFD9FA" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <path
                    d="M40 330 C70 170 190 55 360 14"
                    fill="none"
                    stroke="#2F86FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="103" cy="180" r="18" fill="#147DFF" opacity=".16" />
                  <circle cx="103" cy="180" r="10" fill="#147DFF" />
                  <circle cx="68" cy="240" r="4" fill="#147DFF" opacity=".75" />
                </svg>
                <div className="absolute inset-y-0 left-0 w-full overflow-hidden rounded-[32px] border-[5px] border-white/90 shadow-[0_34px_80px_-34px_rgba(20,70,150,0.5)] sm:rounded-[40px] xl:w-[118%] xl:rounded-[50%]">
                  <Image
                    src={BUILDING}
                    alt="Maaptrix headquarters building with landscaped grounds"
                    fill
                    priority
                    sizes="(min-width: 1280px) 66vw, 100vw"
                    className="object-cover object-[48%_60%] xl:object-[36%_62%]"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_45%,rgba(238,245,254,0.4),transparent_50%)]" />
                </div>

                {/* Handwritten glass card */}
                <div className="absolute left-[4%] top-[34%] z-20 -rotate-[6deg] rounded-[24px] border border-white/90 bg-white/60 px-6 py-5 shadow-[0_24px_44px_-20px_rgba(20,70,150,0.5),inset_0_1px_0_#fff] ring-1 ring-[#D6E7FB] backdrop-blur-xl sm:px-7 xl:left-[7%] xl:top-[36%]">
                  <p className={`${script.className} text-[28px] leading-[1.02] text-[#1B2F55] sm:text-[36px]`}>
                    <span className="block">Simple</span>
                    <span className="block">Products</span>
                    <span className="block font-semibold text-[#1462E0]">Real Impact</span>
                  </p>
                  <svg viewBox="0 0 120 16" className="ml-6 mt-1 h-[12px] w-[100px]" aria-hidden>
                    <path d="M3 12 C35 5 75 3 117 6" fill="none" stroke="#147DFF" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---------- Bottom: four cards ---------- */}
          <div className="relative z-10 mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:mt-8 xl:grid-cols-4">
            {STORY_STEPS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={0.1 + i * 0.07}>
                  <div className="group h-full rounded-[22px] border border-[#DCE8F7] bg-white/85 p-7 shadow-[0_18px_40px_-26px_rgba(20,70,150,0.35)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 xl:p-8">
                    <span className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#EEF5FF,#D9E9FF)] shadow-[inset_0_1px_0_#fff]">
                      <Icon className="h-[30px] w-[30px] text-brand-blue" fill="#147DFF" fillOpacity={0.18} strokeWidth={2.3} />
                    </span>
                    <h3 className="mt-5 font-display text-[20px] font-semibold text-brand-navy 2xl:text-[21px]">{item.title}</h3>
                    <p className="mt-2 text-[16px] leading-[1.45] text-[#5A6A85]">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
