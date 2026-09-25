import Link from "next/link";
import { ArrowRight, ArrowUpRight, Boxes, RefreshCw, Target, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function HomeWhyPreview() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="home-why-heading">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          {/* Left: editorial intro */}
          <Reveal className="lg:pt-4">
            <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
              Why Maaptrix
            </p>
            <h2
              id="home-why-heading"
              className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[40px] lg:text-[46px] xl:text-[50px]"
            >
              A Different Approach to <span className="text-brand-blue">Real Operational Challenges</span>
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.7] text-[#40536B]">
              Maaptrix builds focused software products around real operational problems, from product planning and
              development through launch, support and continuous improvement.
            </p>
            <Link
              href="/why-maaptrix"
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-[10px] border border-[#BFDFFF] bg-white px-6 text-[15px] font-semibold text-brand-blue transition-colors hover:border-brand-blue hover:bg-[#EAF4FF]"
            >
              Explore Why Maaptrix
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          {/* Right: feature blocks with different visual weight */}
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/why-maaptrix"
                className="group relative flex flex-col overflow-hidden rounded-[18px] bg-[linear-gradient(145deg,#1683F7_0%,#0757C9_100%)] p-7 text-white shadow-[0_24px_44px_-24px_rgba(7,87,201,0.8)] sm:row-span-2"
              >
                <span className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rotate-12 rounded-[36px] border border-white/15" aria-hidden />
                <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-white/15">
                  <Target className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-[24px] font-bold leading-tight lg:text-[26px]">
                  Built Around Real Problems
                </h3>
                <p className="mt-3 text-[15.5px] leading-[1.65] text-white/85">
                  We start from the recurring operational challenges schools face every day, and build software that
                  solves them.
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-white/20 pt-5">
                  {["School transport", "Attendance & academic records", "Parent communication"].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-[14.5px] font-medium text-white/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14.5px] font-semibold">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              {[
                {
                  icon: Users,
                  title: "Designed for Real Users",
                  text: "Administrators, staff, drivers and parents each get straightforward tools that fit how they work.",
                },
                {
                  icon: Boxes,
                  title: "Product Ownership",
                  text: "We create, own and operate our products, so they're maintained and supported for the long term.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <Link
                  key={title}
                  href="/why-maaptrix"
                  className="group rounded-[16px] border border-[#D5E6F7] bg-white p-6 shadow-[0_10px_28px_-20px_rgba(16,42,86,0.35)] transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-blue"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#EAF4FF] text-brand-blue">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[#9DB2C9] transition-colors group-hover:text-brand-blue" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-[19px] font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#40536B]">{text}</p>
                </Link>
              ))}

              <Link
                href="/why-maaptrix"
                className="group flex flex-col gap-4 rounded-[16px] border border-[#CFE4FF] bg-[#EAF4FF] p-6 transition-colors duration-300 hover:border-brand-blue sm:col-span-2 sm:flex-row sm:items-center"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white text-brand-blue">
                  <RefreshCw className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-[19px] font-bold text-brand-navy">Continuous Improvement</span>
                  <span className="mt-1.5 block text-[15px] leading-[1.6] text-[#40536B]">
                    Our products keep evolving after release, refined through real usage and feedback.
                  </span>
                </span>
                <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue sm:flex">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
