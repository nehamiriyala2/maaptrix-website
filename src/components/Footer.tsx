import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Maaptrix", href: "/why-maaptrix" },
  { label: "Products", href: "/products" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_LINKS = [
  { label: "School Transport Management", href: "/products/school-transport" },
  { label: "Small School Management Module", href: "/products/school-management" },
];

const HEAD = "text-[13px] font-bold uppercase tracking-[0.12em] text-[#6FB7FF]";
const LINK = "text-[15px] text-white/75 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#062E63] text-white">
      {/* bright-blue accent + soft geometric detail */}
      <div className="h-1 w-full bg-[linear-gradient(90deg,#1683F7_0%,#5AB0FF_50%,#1683F7_100%)]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-10 h-[420px] w-[420px] rotate-12 rounded-[64px] border border-white/[0.06] bg-white/[0.02]"
        aria-hidden
      />

      <div className="page-container relative pb-8 pt-14 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center" aria-label="Maaptrix Home">
              <span className="rounded-[10px] bg-white p-1">
                <Logo showWordmark={false} imageClassName="h-8 w-8 rounded-md" />
              </span>
              <span className="ml-3 font-display text-[22px] font-bold tracking-tight text-white">Maaptrix</span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-white/70">
              Maaptrix builds and operates focused software products for real-world operations, delivered through
              dependable subscription-based models.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#6FB7FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6FB7FF]" />
              Building Practical Digital Products for Everyday Operations.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className={HEAD}>Company</p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={LINK}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className={HEAD}>Products</p>
            <ul className="mt-5 flex flex-col gap-3">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={LINK}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <p className={HEAD}>Get in Touch</p>
            <a
              href="mailto:hello@maaptrix.com"
              className="mt-5 inline-flex items-center gap-2.5 text-[15px] font-medium text-white transition-colors hover:text-[#9CCDFF]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white/10">
                <Mail className="h-4 w-4" />
              </span>
              hello@maaptrix.com
            </a>
            <Link
              href="/contact"
              className="group mt-5 flex h-12 w-full max-w-[260px] items-center justify-center gap-2 rounded-[10px] bg-[#1683F7] px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#2B92FF]"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/12 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[13.5px] text-white/60">&copy; 2026 Maaptrix Private Limited. All rights reserved.</p>
          <p className="text-[13.5px] text-white/50">Software products designed and operated for real-world operations.</p>
        </div>
      </div>
    </footer>
  );
}
