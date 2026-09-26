"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Settings, Users, type LucideIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const POINTS: { icon: LucideIcon; title: [string, string]; desc: string }[] = [
  { icon: Users, title: ["People", "Focused"], desc: "Built for real users (Students, Parents, Staff)." },
  { icon: Settings, title: ["Product", "Driven"], desc: "We create and own our products." },
  { icon: BarChart3, title: ["Long-Term", "Impact"], desc: "Scalable products for a better tomorrow." },
];

export default function HowWeWorkHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F8FD] via-[#FFFFFF] to-[#FFFFFF] pb-14 pt-10 text-brand-navy sm:pb-16 sm:pt-14 lg:pb-18 lg:pt-16">
      {/* Soft atmospheric ambient light */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-[#E0F2FE]/70 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-10 h-[550px] w-[550px] rounded-full bg-[#BAE6FD]/45 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#DBEAFE]/35 blur-[90px]"
        aria-hidden
      />

      <div className="page-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="min-w-0"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D0E4FA] bg-[#EBF4FE] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(22,131,247,0.06)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1683F7] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1683F7]" />
              </span>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0A1B39]">
                Our Product Approach
              </p>
            </div>

            <h1 className="mt-5 font-display text-[38px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A1B39] sm:text-[48px] lg:text-[52px] xl:text-[58px]">
              <span className="block">Products Built Around</span>
              <span className="text-[#1683F7]">Real Problems.</span>
            </h1>

            <p className="mt-5 max-w-[580px] text-[16.5px] leading-[1.65] text-[#556987] sm:text-[17.5px]">
              We identify recurring operational challenges and engineer dependable software solutions designed for
              everyday reliability.
            </p>

            <ul className="mt-8 grid max-w-[640px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
              {POINTS.map(({ icon: Icon, title, desc }) => (
                <li key={title[0]} className="flex items-start gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#EAF4FF] text-[#1683F7]">
                    <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[16.5px] font-bold leading-tight text-[#0A1B39]">
                      {title[0]}
                      <br />
                      {title[1]}
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.45] text-[#556987]">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/products"
                className="group inline-flex h-[50px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[12px] bg-[#1683F7] px-7 text-[15.5px] font-bold text-white shadow-[0_12px_28px_-8px_rgba(22,131,247,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0E71E6]"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Maaptrix 3D isometric product ecosystem platform */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative mx-auto w-full max-w-[620px] min-w-0 lg:mx-0 lg:w-auto"
          >
            <Image
              src="/hero/how-we-work-approach-seamless.png"
              alt="Maaptrix product platform at the centre of connected capabilities: simpler operations, connected communities, better communication, safer schools, streamlined management and data-driven growth"
              width={912}
              height={912}
              priority
              quality={95}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full object-contain drop-shadow-[0_16px_36px_rgba(22,131,247,0.09)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
