"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroBluePanel from "@/components/HeroBluePanel";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------------ */

export default function ProductsHero() {
  const scrollToProducts = () => {
    const el = document.getElementById("overview");
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
  };

  return (
    <section className="bg-white relative overflow-hidden pb-14 pt-12 sm:pt-16 xl:pb-16 xl:pt-16">
      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 xl:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] xl:gap-10">
          {/* Left copy */}
          <div className="min-w-0">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue sm:text-[14px]">Maaptrix Products</span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
              className="mt-6 max-w-[680px] font-display text-[40px] font-extrabold leading-[1.05] tracking-[-0.035em] text-brand-navy sm:text-[54px] xl:text-[clamp(44px,3.7vw,58px)]"
            >
              <span className="block xl:whitespace-nowrap">Software Built Around</span>
              <span className="block text-brand-blue xl:whitespace-nowrap">Real Operational Needs.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
              className="mt-6 max-w-[610px] text-[17px] leading-[1.55] text-[#5E718D] sm:text-[19px]"
            >
              Maaptrix develops focused digital products designed to help organizations manage everyday operations
              with greater visibility, simplicity and reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: EASE }}
              className="mt-8 flex flex-col gap-3.5 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex h-12 whitespace-nowrap items-center justify-center gap-2.5 rounded-[11px] bg-brand-blue px-6 text-[16px] font-semibold text-white shadow-[0_12px_26px_-14px_rgba(22,131,245,0.8)] transition-colors duration-300 hover:bg-brand-blue-dark sm:min-w-[196px]"
              >
                Request a Demo
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={scrollToProducts}
                className="group inline-flex h-12 cursor-pointer whitespace-nowrap items-center justify-center gap-2.5 rounded-[11px] border border-[#BFDFFF] bg-white px-6 text-[16px] font-semibold text-brand-blue transition-colors duration-300 hover:border-brand-blue hover:text-brand-blue sm:min-w-[190px]"
              >
                Explore Products
                <ArrowRight className="h-5 w-5 text-brand-blue transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right: supplied product illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="relative mx-auto w-full max-w-[860px]"
          >
            <div className="relative overflow-hidden rounded-[22px] border-[6px] border-white bg-white shadow-[0_40px_80px_-30px_rgba(7,60,140,0.55)]">
            <Image
              src="/hero/products-visual.png"
              alt="Student using a laptop in front of the Maaptrix school dashboard with live tracking, attendance and messages"
              width={992}
              height={750}
              priority
              sizes="(min-width: 1280px) 54vw, 100vw"
              quality={90}
              className="h-auto w-full object-contain"
            />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
