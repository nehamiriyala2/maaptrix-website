"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, type LucideIcon } from "lucide-react";
import { MiniFrame, type MiniVisual } from "@/components/scroll/MiniUI";

/*
 * Sticky visual + changing content.
 * Desktop: the visual stays pinned on the right while the feature blocks on
 * the left scroll past; the block in the middle of the viewport drives the
 * visual. Mobile: each block shows its own visual inline.
 */

export type Feature = {
  title: string;
  text: string;
  points: string[];
  icon: LucideIcon;
  visual: MiniVisual;
};

export default function FeatureScroll({ features, label }: { features: Feature[]; label: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = features[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
      {/* Scrolling content */}
      <div>
        {features.map((f, i) => {
          const Icon = f.icon;
          const on = i === active;
          return (
            <div
              key={f.title}
              ref={(el) => {
                refs.current[i] = el;
              }}
              data-index={i}
              className="flex flex-col justify-center py-6 lg:min-h-[64vh] lg:py-0"
            >
              <div
                className={`rounded-[22px] border bg-white p-5 transition-[border-color,box-shadow,opacity] duration-500 ease-out sm:p-7 ${
                  on
                    ? "border-[#9BCBFB] shadow-[0_18px_40px_-26px_rgba(20,90,160,0.45)] lg:opacity-100"
                    : "border-[#CFE4FF] shadow-[0_8px_24px_rgba(30,136,255,0.06)] lg:opacity-55"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-[12px] transition-colors duration-500 ${
                      on ? "bg-[#1683F5] text-white" : "bg-[#EAF5FF] text-[#1683F5]"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-display text-[13px] font-bold text-[#1683F5]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 font-display text-[22px] font-bold leading-tight text-[#0B1B36] sm:text-[26px]">{f.title}</h3>
                <p className="mt-2.5 text-[15.5px] leading-[1.6] text-[#52657D]">{f.text}</p>
                <ul className="mt-4 space-y-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-[#0B1B36]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF5FF] text-[#1683F5]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                {/* inline visual on smaller screens */}
                <div className="mt-5 h-[230px] lg:hidden">
                  <MiniFrame title={f.title} icon={Icon} visual={f.visual} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky visual (desktop) */}
      <div className="relative hidden lg:block">
        <div className="sticky top-[calc(50vh-230px)] h-[460px]">
          <div className="absolute inset-0 rounded-[28px] border border-[#CFE4FF] bg-[linear-gradient(145deg,#F4F9FF_0%,#E7F2FF_100%)]" />
          <div className="relative flex h-full flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1683F5]">{label}</span>
              <span className="flex gap-1.5" aria-hidden>
                {features.map((f, i) => (
                  <span
                    key={f.title}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-6 bg-[#1683F5]" : "w-1.5 bg-[#B9D7F7]"}`}
                  />
                ))}
              </span>
            </div>
            <div className="relative mt-4 min-h-0 flex-1">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.985 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <MiniFrame title={current.title} icon={current.icon} visual={current.visual} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
