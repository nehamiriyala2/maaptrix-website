"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ProductDetailHeroProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  pills: string[];
  /** Optional hero photo. `cover` crops it to 4:3 (for square photos). */
  image?: { src: string; alt: string; width: number; height: number; cover?: boolean };
  /** id of the section the secondary CTA scrolls to */
  detailsId: string;
}

export default function ProductDetailHero({
  eyebrow,
  title,
  titleAccent,
  description,
  pills,
  image,
  detailsId,
}: ProductDetailHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#EEF6FF_0%,#FFFFFF_70%)] pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20">
      <div
        className="pointer-events-none absolute right-[-10%] top-[5%] h-[520px] w-[520px] rounded-full bg-[#DCEBFF]/60 blur-[90px]"
        aria-hidden
      />

      <div className="page-container relative">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] text-slate-500">
          <Link href="/products" className="hover:text-brand-blue">
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          <span className="font-medium text-brand-navy" aria-current="page">
            {title} {titleAccent}
          </span>
        </nav>

        <div className={`mx-auto grid items-center gap-10 lg:gap-14 ${image ? "max-w-[1440px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" : "max-w-3xl text-center"}`}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="min-w-0"
          >
            <span className={`inline-flex items-center gap-3 ${image ? "" : "justify-center"}`}>
              <span className="h-[2px] w-8 rounded-full bg-brand-blue" />
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-blue">{eyebrow}</span>
            </span>
            <h1 className="mt-5 font-display text-[36px] font-extrabold leading-[1.06] tracking-[-0.03em] text-brand-navy sm:text-[48px] xl:text-[56px]">
              {title} <span className="text-brand-blue">{titleAccent}</span>
            </h1>
            <p className={`mt-5 max-w-[580px] ${image ? "" : "mx-auto"} text-[17px] leading-[1.6] text-slate-600 sm:text-[18px]`}>{description}</p>

            <ul className={`mt-6 flex flex-wrap gap-2 ${image ? "" : "justify-center"}`} aria-label="Key capabilities">
              {pills.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-[#CFE1F7] bg-[#F5FAFF] px-3.5 py-1.5 text-[13px] font-medium text-brand-blue"
                >
                  {p}
                </li>
              ))}
            </ul>

            <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${image ? "" : "sm:justify-center"}`}>
              <Link
                href="/contact"
                className="group inline-flex h-[54px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[11px] bg-brand-blue px-7 text-[16px] font-bold text-white shadow-[0_12px_26px_-12px_rgba(20,125,255,0.8)] transition-colors hover:bg-brand-blue-dark"
              >
                Request a Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`#${detailsId}`}
                className="inline-flex h-[54px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[11px] border border-slate-300 bg-white px-7 text-[16px] font-bold text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                See How It Works
                <ArrowDown className="h-5 w-5 text-brand-blue" />
              </a>
            </div>
          </motion.div>

          {image && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="relative min-w-0"
          >
            <div className="overflow-hidden rounded-[26px] border border-[#DCEAFF] bg-white shadow-[0_30px_70px_-34px_rgba(10,10,10,0.35)]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={image.cover ? "aspect-[4/3] h-auto w-full object-cover" : "h-auto w-full"}
              />
            </div>
          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
