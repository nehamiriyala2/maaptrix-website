"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

/*
 * Sticky stacked-card scrolling.
 * Every card sits in its own sticky layer; each layer sticks a little lower
 * than the one before (--stack-step), so as you scroll the next card slides up
 * and stacks over the previous one. Cards that are covered scale down slightly.
 */

function Layer({
  index,
  count,
  progress,
  reduce,
  last,
  children,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
  reduce: boolean;
  last: boolean;
  children: ReactNode;
}) {
  const end = 1 - (count - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / count, 1], [1, reduce ? 1 : end]);

  return (
    <div
      className={`sticky ${last ? "" : "h-[72vh] md:h-[max(64vh,540px)]"}`}
      style={{ top: `calc(var(--stack-top) + ${index} * var(--stack-step))` }}
    >
      <motion.div style={{ scale }} className="origin-top will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

export default function StackedCards({ children }: { children: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div
      ref={ref}
      className="relative [--stack-step:12px] [--stack-top:84px] md:[--stack-step:18px] md:[--stack-top:96px] lg:[--stack-step:24px] lg:[--stack-top:104px]"
    >
      {children.map((child, i) => (
        <Layer
          key={i}
          index={i}
          count={children.length}
          progress={scrollYProgress}
          reduce={reduce}
          last={i === children.length - 1}
        >
          {child}
        </Layer>
      ))}
    </div>
  );
}
