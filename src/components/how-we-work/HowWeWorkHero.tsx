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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7FAFF_0%,#FFFFFF_100%)] pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-12">
      {/* Background: soft blue shapes + dotted texture */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[-10%] top-[-10%] h-[680px] w-[820px] rounded-full bg-[#E3EFFF]/70 blur-[50px]" />
        <div className="absolute bottom-[-20%] right-[20%] h-[360px] w-[520px] rounded-full bg-[#EAF3FF] blur-[40px]" />
      </div>

      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:gap-6">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="min-w-0"
          >
            <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.16em] text-[#1683F7] sm:text-[14px]">
              <span className="h-2 w-2 rounded-full bg-[#1683F7]" aria-hidden />
              Our Product Approach
            </p>
            <h1 className="mt-5 font-display text-[34px] leading-[1.06] sm:text-[42px] lg:text-[52px] xl:text-[58px] font-extrabold tracking-[-0.035em] text-[#102B5C]">
              Products Built Around
              <br />
              <span className="text-[#1683F7]">Real Problems.</span>
            </h1>
            <p className="mt-6 max-w-[580px] text-[17px] leading-[1.6] text-[#526A86] sm:text-[19px]">
              We identify recurring operational challenges and engineer dependable software solutions designed for
              everyday reliability.
            </p>

            <ul className="mt-8 grid max-w-[640px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1 xl:grid-cols-3">
              {POINTS.map(({ icon: Icon, title, desc }) => (
                <li key={title[0]} className="flex items-start gap-3.5">
                  <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#E8F3FF] text-[#1683F7]">
                    <Icon className="h-7 w-7" strokeWidth={2} fill="currentColor" fillOpacity={0.15} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[16px] font-semibold leading-tight text-[#102B5C] sm:text-[17px]">
                      {title[0]}
                      <br />
                      {title[1]}
                    </p>
                    <p className="mt-2 text-[13.5px] leading-snug text-[#526A86]">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="group mt-8 inline-flex h-12 items-center gap-3 rounded-[12px] bg-[#1683F5] px-6 text-[16px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(22,131,247,0.8)] transition-colors hover:bg-[#0F6FDB]"
            >
              Explore Our Products
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: supplied illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative mx-auto w-full max-w-[720px] lg:max-w-none"
          >
            <Image
              src="/hero/how-we-work-visual.png"
              alt="Student using a laptop in front of the Maaptrix school dashboard, with Simpler Operations, Connected Communities and Safer Schools labels"
              width={876}
              height={820}
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-auto w-full [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent_0%,#000_9%,#000_94%,transparent_100%),linear-gradient(to_bottom,transparent_0%,#000_7%,#000_86%,transparent_100%)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
