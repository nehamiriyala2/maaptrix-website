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
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0A5BDF_0%,#0045B0_32%,#012C82_62%,#01205A_100%)] text-white">
      {/* deep-blue atmosphere matching the visual */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-40 -top-40 h-[520px] w-[720px] rounded-full bg-[#1683F7]/35 blur-[90px]" />
        <div className="absolute -bottom-48 left-[10%] h-[360px] w-[900px] rotate-[-8deg] rounded-[50%] border-t-[40px] border-[#0B6FF0]/25 blur-[6px]" />
        <div
          className="absolute left-[40%] top-10 h-[110px] w-[170px] opacity-25"
          style={{ backgroundImage: "radial-gradient(#8CC8FF 1.3px, transparent 1.5px)", backgroundSize: "18px 18px" }}
        />
      </div>

      <div className="page-container relative">
        <div className="grid items-center gap-8 pb-4 pt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-6 lg:py-0">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="min-w-0 lg:py-16"
          >
            <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white/90 sm:text-[14px]">
              <span className="h-2 w-2 rounded-full bg-[#4DB5FF] shadow-[0_0_10px_#4DB5FF]" aria-hidden />
              Our Product Approach
            </p>
            <h1 className="mt-6 font-display text-[38px] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-[48px] lg:text-[clamp(38px,3.9vw,60px)]">
              <span className="block lg:whitespace-nowrap">Products Built Around</span>
              <span className="block bg-[linear-gradient(90deg,#5CC8FF_0%,#8FD8FF_100%)] bg-clip-text text-transparent">Real Problems.</span>
            </h1>
            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.65] text-white/75 sm:text-[19px]">
              We identify recurring operational challenges and engineer dependable software solutions designed for
              everyday reliability.
            </p>

            <ul className="mt-9 grid max-w-[660px] grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5 lg:grid-cols-1 lg:gap-4 xl:grid-cols-3 xl:gap-5">
              {POINTS.map(({ icon: Icon, title, desc }) => (
                <li key={title[0]} className="flex items-start gap-3.5">
                  <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#1E8BFF_0%,#0B5ED7_100%)] text-white shadow-[0_10px_24px_-8px_rgba(22,131,247,0.8)] ring-1 ring-white/15">
                    <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[17px] font-bold leading-tight sm:text-[18px]">
                      {title[0]}
                      <br />
                      {title[1]}
                    </p>
                    <p className="mt-2 text-[14.5px] leading-[1.5] text-white/70">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="group mt-10 inline-flex h-[56px] items-center gap-3 rounded-[12px] bg-[#1683F7] px-8 text-[17px] font-semibold text-white shadow-[0_0_0_1px_rgba(120,190,255,0.5),0_18px_36px_-12px_rgba(22,131,247,0.9)] transition-colors hover:bg-[#2B92FF]"
            >
              Explore Our Products
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: Maaptrix product-approach visual (bleeds to the right edge) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative mx-auto w-full max-w-[640px] min-w-0 lg:mx-0 lg:w-auto lg:-mr-6 xl:-mr-10 lg:max-w-none"
          >
            <Image
              src="/hero/how-we-work-approach.png"
              alt="Maaptrix product platform at the centre of connected capabilities: simpler operations, connected communities, better communication, safer schools, streamlined management and data-driven growth"
              width={912}
              height={941}
              priority
              quality={90}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full object-contain [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_94%,transparent_100%),linear-gradient(to_bottom,transparent_0%,#000_5%,#000_92%,transparent_100%)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
