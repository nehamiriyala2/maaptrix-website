import type { ReactNode } from "react";
import { Check, type LucideIcon } from "lucide-react";
import { MiniFrame, type MiniVisual } from "@/components/scroll/MiniUI";

/* ---------------------------------------------------------- Card layout */

export type StoryCardData = {
  num: string;
  eyebrow?: string;
  title: string;
  text: string;
  points?: string[];
  icon: LucideIcon;
  visualTitle: string;
  visual?: MiniVisual;
  media?: ReactNode;
  footer?: ReactNode;
};

export function StoryCard({ num, eyebrow, title, text, points, icon: Icon, visualTitle, visual, media, footer }: StoryCardData) {
  return (
    <article className="grid overflow-hidden rounded-[24px] border border-[#CFE4FF] bg-[linear-gradient(135deg,#FFFFFF_0%,#FFFFFF_45%,#F1F8FF_100%)] shadow-[0_-10px_40px_-26px_rgba(11,27,54,0.35),0_18px_40px_-28px_rgba(20,90,160,0.35)] md:min-h-[440px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:min-h-[480px] lg:rounded-[28px]">
      <div className="flex flex-col p-5 sm:p-7 lg:p-10">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#EAF5FF] text-[#1683F5] lg:h-12 lg:w-12">
            <Icon className="h-5 w-5 lg:h-6 lg:w-6" aria-hidden />
          </span>
          <span className="font-display text-[14px] font-bold text-[#1683F5]">
            {num}
            {eyebrow && <span className="ml-2 font-semibold uppercase tracking-[0.12em] text-[#8FA3BA]">{eyebrow}</span>}
          </span>
        </div>
        <h3 className="mt-4 font-display text-[23px] font-bold leading-[1.15] tracking-tight text-[#0B1B36] sm:text-[26px] lg:mt-6 lg:text-[32px]">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.6] text-[#52657D] lg:mt-4 lg:text-[16.5px]">{text}</p>
        {points && (
          <ul className="mt-5 hidden space-y-2.5 sm:block">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-[#0B1B36]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF5FF] text-[#1683F5]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        )}
        {footer && <div className="mt-auto pt-5">{footer}</div>}
      </div>
      <div className="h-[210px] p-4 pt-0 sm:h-[240px] md:h-auto md:p-6 md:pl-0 lg:p-8 lg:pl-0">
        {media ?? (visual && <MiniFrame title={visualTitle} icon={Icon} visual={visual} />)}
      </div>
    </article>
  );
}
