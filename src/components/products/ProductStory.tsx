import { Check, CircleAlert, Lightbulb } from "lucide-react";
import Reveal from "@/components/Reveal";

interface Block {
  title: string;
  text: string;
  points: string[];
}

interface ProductStoryProps {
  id: string;
  problem: Block;
  solution: Block;
  workflow: { title: string; desc: string }[];
}

/** Problem → Solution → How it works, shared by the product detail pages. */
export default function ProductStory({ id, problem, solution, workflow }: ProductStoryProps) {
  return (
    <>
      <section id={id} className="scroll-mt-24 bg-white py-12 sm:py-16 lg:py-20" aria-label="Problem and solution">
        <div className="page-container">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full rounded-[24px] border border-[#CFE4FF] bg-white p-7 sm:p-9">
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-slate-500">
                <CircleAlert className="h-4 w-4" aria-hidden />
                The Problem
              </p>
              <h2 className="mt-4 font-display text-[24px] font-bold leading-[1.2] text-brand-navy sm:text-[28px]">
                {problem.title}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.65] text-slate-600">{problem.text}</p>
              <ul className="mt-5 space-y-2.5">
                {problem.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[15px] text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08} className="h-full rounded-[24px] border border-[#BFDFFF] bg-brand-blue-light p-7 sm:p-9">
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-blue">
                <Lightbulb className="h-4 w-4" aria-hidden />
                The Solution
              </p>
              <h2 className="mt-4 font-display text-[24px] font-bold leading-[1.2] text-brand-navy sm:text-[28px]">
                {solution.title}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.65] text-slate-600">{solution.text}</p>
              <ul className="mt-5 space-y-2.5">
                {solution.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[15px] font-medium text-brand-navy">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" strokeWidth={3} aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="surface-soft py-16 sm:py-20" aria-labelledby={`${id}-workflow`}>
        <div className="page-container">
          <div className="">
            <Reveal className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
                How It Works
              </p>
              <h2 id={`${id}-workflow`} className="mt-4 font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-bold text-brand-navy">
                A day with the product, <span className="text-brand-blue">step by step.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {workflow.map(({ title, desc }, i) => (
                  <li key={title} className="relative rounded-2xl border border-[#CFE4FF] bg-white p-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-[14px] font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-[17px] font-bold text-brand-navy">{title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-snug text-slate-500">{desc}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
