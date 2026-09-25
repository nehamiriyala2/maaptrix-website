"use client";

import Reveal from "@/components/Reveal";
import { SchoolFeatureScroll } from "@/components/products/ProductFeatureScrolls";

export default function SchoolManagementProduct() {
  return (
    <section id="school" className="scroll-mt-24 relative overflow-clip bg-white py-12 sm:py-16 lg:py-20 select-none">
      <div className="page-container">
        <div>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
              Inside the Module
            </p>
            <h2 className="mt-4 font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-brand-navy">
              Everything a smaller school <span className="text-brand-blue">needs, in one place.</span>
            </h2>
          </Reveal>
          <div className="mt-8 lg:mt-4">
            <SchoolFeatureScroll />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. APPROVED POSITIONING STATEMENT */}
        {/* ========================================================================= */}
        <div className="mt-12 rounded-2xl border border-[#CFE4FF] bg-white p-5 sm:p-6 text-center max-w-3xl mx-auto shadow-[0_8px_24px_rgba(30,136,255,0.06)]">
          <p className="text-sm sm:text-base font-semibold text-brand-navy">
            &ldquo;Essential digital school operations in a simple, affordable and easy-to-adopt product.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
