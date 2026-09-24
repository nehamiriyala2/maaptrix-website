"use client";

import { useEffect, useState } from "react";
import { Bus, GraduationCap } from "lucide-react";

export default function ProductSelector() {
  const [active, setActive] = useState<"transport" | "school">("transport");

  const scrollToSection = (id: "transport" | "school") => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const schoolEl = document.getElementById("school");
      if (schoolEl) {
        const rect = schoolEl.getBoundingClientRect();
        if (rect.top <= 200) {
          setActive("school");
        } else {
          setActive("transport");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="products-content"
      className="sticky top-16 sm:top-[4.25rem] lg:top-[4.75rem] z-40 border-y border-[#E5EDF6] bg-white/95 backdrop-blur-md shadow-[0_8px_24px_-20px_rgba(11,31,65,0.35)]"
    >
      <div className="page-container mx-auto flex min-h-[76px] max-w-[1400px] items-center justify-between gap-4">
        
        {/* Left: Product Selector Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-0.5">
          <button
            type="button"
            onClick={() => scrollToSection("transport")}
            className={`inline-flex h-11 items-center gap-2.5 rounded-[11px] px-5 text-[13px] sm:text-[15px] font-bold transition-all duration-300 cursor-pointer shrink-0 ${
              active === "transport"
                ? "bg-brand-navy text-white shadow-[0_8px_18px_-10px_rgba(11,31,65,0.8)]"
                : "bg-[#F5F8FC] text-[#52657E] hover:bg-[#EAF3FF] hover:text-brand-navy"
            }`}
          >
            <Bus className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
            <span>01 · School Transport</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("school")}
            className={`inline-flex h-11 items-center gap-2.5 rounded-[11px] px-5 text-[13px] sm:text-[15px] font-bold transition-all duration-300 cursor-pointer shrink-0 ${
              active === "school"
                ? "bg-brand-navy text-white shadow-[0_8px_18px_-10px_rgba(11,31,65,0.8)]"
                : "bg-[#F5F8FC] text-[#52657E] hover:bg-[#EAF3FF] hover:text-brand-navy"
            }`}
          >
            <GraduationCap className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
            <span>02 · School Management</span>
          </button>
        </div>

        {/* Right Label (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 text-[13.5px] font-medium text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
          <span>Purpose-Built Software Products</span>
        </div>

      </div>
    </div>
  );
}
