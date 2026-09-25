"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

/**
 * "Watch Video" button. No product video is published yet, so it opens a
 * small notice pointing visitors to a live demo instead of a dead link.
 */
export default function WatchVideoButton({ className, onBlue = false }: { className?: string; onBlue?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full ${
            onBlue ? "bg-white text-[#1683F7]" : "bg-[#1683F7] text-white"
          }`}
        >
          <Play className="ml-0.5 h-3.5 w-3.5 fill-current" aria-hidden />
        </span>
        Watch Video
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10233F]/50 px-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-notice-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-[440px] rounded-[18px] border border-[#CFE4FF] bg-white p-7 text-center shadow-[0_24px_60px_-20px_rgba(16,35,63,0.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1683F7]">
              <Play className="h-5 w-5 fill-current" aria-hidden />
            </span>
            <h2 id="video-notice-title" className="mt-4 font-display text-[22px] font-bold text-[#10233F]">
              Product video coming soon
            </h2>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#52657D]">
              Until it&apos;s ready, the Maaptrix team can walk you through the product in a live demo.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-[#1683F7] px-6 text-[15px] font-semibold text-white hover:bg-[#0757C9]"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                autoFocus
                className="inline-flex h-12 cursor-pointer items-center justify-center rounded-[10px] border border-[#CFE4FF] bg-white px-6 text-[15px] font-semibold text-[#1683F7] hover:bg-[#EAF4FF]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
