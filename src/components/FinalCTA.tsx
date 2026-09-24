import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="final-cta-heading">
      <div className="page-container">
        <Reveal>
          <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#147DFF_0%,#3B97FF_55%,#6DB4FF_100%)] px-6 py-14 text-center text-white shadow-[0_30px_70px_-34px_rgba(20,125,255,0.7)] sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-2xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" aria-hidden />

            <p className="relative text-[13px] font-bold uppercase tracking-[0.16em] text-white/85">Get Started with Maaptrix</p>
            <h2
              id="final-cta-heading"
              className="relative mx-auto mt-4 max-w-3xl font-display text-[30px] font-bold leading-[1.12] tracking-tight sm:text-[42px]"
            >
              Have an operational problem worth solving?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/90 sm:text-[18px]">
              Explore our products or talk to the Maaptrix team about how our software can fit your organization.
            </p>

            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-[52px] items-center gap-2 rounded-[11px] bg-white px-7 text-[15px] font-bold text-brand-blue shadow-[0_12px_26px_-14px_rgba(10,10,10,0.5)] transition-colors hover:bg-brand-blue-light"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex h-[52px] items-center rounded-[11px] border border-white/60 px-7 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
