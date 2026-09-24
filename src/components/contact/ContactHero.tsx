"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-blue-white py-12 sm:py-16 lg:py-20 border-b border-slate-100 select-none">
      {/* Soft atmospheric background glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl -z-10" />

      <div className="page-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Left: Editorial Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand-blue sm:text-xs">
                CONTACT MAAPTRIX
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-4 sm:mt-5 font-display text-[2.4rem] sm:text-[3.2rem] lg:text-[3.4rem] xl:text-[3.85rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-brand-navy"
            >
              Let&apos;s Talk About{" "}
              <span className="text-brand-blue">Our Products.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-5 text-base sm:text-lg leading-[1.7] text-slate-600 max-w-[560px]"
            >
              Have a question about a Maaptrix product, want to see a product in
              action, or have an operational problem worth discussing? We&apos;d
              be happy to hear from you.
            </motion.p>
          </div>

          {/* Right: Minimal Abstract Communication Visual (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-gradient-to-br from-white via-[#F8FCFF] to-[#EDF6FF] p-5 sm:p-6 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4">
                <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                  <MessageSquare className="h-4 w-4 text-brand-blue" />
                  Direct Consultation Flow
                </span>
                <span className="text-[0.68rem] font-mono text-brand-blue font-bold uppercase">
                  Problem-First
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <span className="h-6 w-6 rounded-md bg-brand-blue-light text-brand-blue flex items-center justify-center font-bold text-[0.68rem]">
                      1
                    </span>
                    <span className="font-semibold text-brand-navy">Message</span>
                  </div>
                  <span className="text-[0.68rem] text-slate-500">Your enquiry</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <span className="h-6 w-6 rounded-md bg-brand-blue-light text-brand-blue flex items-center justify-center font-bold text-[0.68rem]">
                      2
                    </span>
                    <span className="font-semibold text-brand-navy">Operational Need</span>
                  </div>
                  <span className="text-[0.68rem] text-slate-500">Friction &amp; scope</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <span className="h-6 w-6 rounded-md bg-brand-blue-light text-brand-blue flex items-center justify-center font-bold text-[0.68rem]">
                      3
                    </span>
                    <span className="font-semibold text-brand-navy">Relevant Product</span>
                  </div>
                  <span className="text-[0.68rem] text-brand-blue font-bold">Matching solution</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-brand-blue text-white shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="h-6 w-6 rounded-md bg-white/20 text-white flex items-center justify-center font-bold text-[0.68rem]">
                      4
                    </span>
                    <span className="font-bold">Conversation &amp; Demo</span>
                  </div>
                  <span className="text-[0.68rem] font-medium text-sky-200">Tailored walkthrough</span>
                </div>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-slate-200/80 text-[0.7rem] text-slate-500 text-center">
                Dedicated focus on practical operational alignment.
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
