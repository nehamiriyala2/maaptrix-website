import Link from "next/link";
import { ArrowRight, Compass, Hammer, PenTool, RefreshCw } from "lucide-react";
import Reveal from "@/components/Reveal";

const STEPS = [
  { num: "01", name: "Discover", desc: "Understand real operational challenges.", icon: Compass },
  { num: "02", name: "Design", desc: "Create practical, user-focused solutions.", icon: PenTool },
  { num: "03", name: "Build", desc: "Develop scalable and reliable products.", icon: Hammer },
  { num: "04", name: "Improve", desc: "Continuously evolve based on real usage.", icon: RefreshCw },
];

export default function HomeProcessPreview() {
  return (
    <section className="bg-white" aria-labelledby="home-process-heading">
      <div className="relative overflow-hidden bg-[linear-gradient(120deg,#1683F7_0%,#0E71E6_55%,#0757C9_100%)] pb-16 pt-24 text-white [clip-path:polygon(0_56px,100%_0,100%_100%,0_100%)] sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-28 bottom-[-120px] h-[340px] w-[340px] rotate-12 rounded-[56px] border border-white/10" />
          <div className="absolute right-[-80px] top-16 h-[300px] w-[300px] rotate-12 rounded-[48px] bg-white/[0.05]" />
        </div>

        <div className="page-container relative">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-white/80">
                <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
                How We Work
              </p>
              <h2
                id="home-process-heading"
                className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-tight sm:text-[40px] lg:text-[48px]"
              >
                From Real Problems
                <br />
                to Real Impact
              </h2>
            </div>
            <Link
              href="/how-we-work"
              className="group inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-[10px] border border-white/60 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 lg:self-auto"
            >
              See How We Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal>
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {STEPS.map(({ num, name, desc, icon: Icon }, i) => (
                <li key={num} className="relative rounded-[16px] border border-white/20 bg-white/[0.08] p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-white text-brand-blue">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="font-display text-[34px] font-bold leading-none text-white/25">{num}</span>
                  </div>
                  <h3 className="mt-6 font-display text-[21px] font-bold">{name}</h3>
                  <p className="mt-2 text-[15.5px] leading-[1.6] text-white/85">{desc}</p>
                  {i < STEPS.length - 1 && (
                    <span
                      className="absolute -right-[18px] top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_6px_14px_rgba(4,30,80,0.3)] lg:flex"
                      aria-hidden
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
