"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------------ */

export default function ProductsHero() {
  const scrollToProducts = () => {
    const el = document.getElementById("overview");
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#EEF6FF_0%,#FFFFFF_55%,#FAFCFF_100%)] pb-8 pt-[72px] sm:pt-20 xl:min-h-[640px] xl:pb-[30px]">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[-6%] top-[8%] h-[560px] w-[560px] rounded-full bg-[#EAF4FF]" />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[6%] h-[120px] w-[140px] opacity-[0.18]"
          style={{ backgroundImage: "radial-gradient(#147DFF 2px, transparent 2.2px)", backgroundSize: "20px 20px" }}
        />
        <div
          className="absolute left-[44%] top-[62%] h-[100px] w-[90px] opacity-[0.14]"
          style={{ backgroundImage: "radial-gradient(#147DFF 2px, transparent 2.2px)", backgroundSize: "18px 18px" }}
        />
        <svg viewBox="0 0 1600 700" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M760 360 L800 300" stroke="#147DFF" strokeOpacity=".18" strokeWidth="4" strokeLinecap="round" />
          <path d="M1540 260 L1510 320" stroke="#147DFF" strokeOpacity=".18" strokeWidth="4" strokeLinecap="round" />
          <path d="M820 640 C1000 560 1250 600 1600 520" fill="none" stroke="#147DFF" strokeOpacity=".1" strokeWidth="1.5" />
        </svg>
      </div>

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
            <Image
              src="/hero/products-visual.png"
              alt="Student using a laptop in front of the Maaptrix school dashboard with live tracking, attendance and messages"
              width={992}
              height={750}
              priority
              sizes="(min-width: 1280px) 54vw, 100vw"
              className="h-auto w-full object-contain [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent_0%,#000_7%,#000_95%,transparent_100%),linear-gradient(to_bottom,transparent_0%,#000_6%,#000_88%,transparent_100%)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
