"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "About Us", href: "#about" },
  { label: "Why Maaptrix", href: "#why-maaptrix" },
  { label: "Products", href: "#products" },
  { label: "How We Work", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-line/70 bg-white/85 shadow-[0_4px_24px_-8px_rgba(11,31,65,0.08)] backdrop-blur-lg"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="w-full flex h-16 sm:h-[4.25rem] lg:h-[4.5rem] items-center justify-between px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Left: Exact Logo Asset & Brand Wordmark */}
        <Link
          href="#home"
          className="flex items-center gap-2.5 shrink-0 transition-opacity hover:opacity-90"
        >
          <Logo
            imageClassName="h-8 w-8 lg:h-8.5 lg:w-8.5 rounded-md object-contain"
            wordmarkClassName="text-[1.24rem] lg:text-[1.35rem] font-bold font-display tracking-tight text-brand-navy"
          />
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative py-1.5 text-[0.92rem] font-medium tracking-[-0.005em] transition-colors ${
                link.active
                  ? "text-brand-navy font-semibold"
                  : "text-brand-navy/70 hover:text-brand-navy"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-brand-blue transition-transform duration-300 ease-out ${
                  link.active
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Right: Search + Request a Demo CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-navy/70 transition-colors hover:bg-brand-blue-light hover:text-brand-blue"
            aria-label="Search"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-[11px] bg-brand-navy px-5 py-2.5 text-[0.86rem] font-semibold text-white shadow-[0_4px_14px_-4px_rgba(11,31,65,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-[0_8px_22px_-6px_rgba(20,125,255,0.5)]"
          >
            Request a Demo
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-blue-light lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden border-t border-brand-line bg-white/98 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    link.active
                      ? "bg-brand-blue-light text-brand-blue font-semibold"
                      : "text-brand-navy/85 hover:bg-brand-blue-light hover:text-brand-navy"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-[11px] bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-md"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
