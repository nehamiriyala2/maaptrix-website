"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Maaptrix", href: "/why-maaptrix" },
  { label: "Products", href: "/products" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
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

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto w-full rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_12px_36px_-8px_rgba(11,31,65,0.12)]"
              : "bg-white/90 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_-6px_rgba(11,31,65,0.06)]"
          }`}
        >
          {/* Left: Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-brand-blue rounded-md"
            aria-label="Maaptrix Home"
          >
            <Logo
              imageClassName="h-7.5 w-7.5 lg:h-8 lg:w-8 rounded-md object-contain"
              wordmarkClassName="text-[1.18rem] lg:text-[1.28rem] font-bold font-display tracking-tight text-brand-navy"
            />
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group relative py-1 text-[0.9rem] xl:text-[0.94rem] font-medium tracking-[-0.01em] transition-colors ${
                    active
                      ? "text-brand-navy font-semibold"
                      : "text-brand-navy/70 hover:text-brand-navy"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-brand-blue transition-transform duration-300 ease-out ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right: Quick Search + Request a Demo CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="inline-flex h-8.5 w-8.5 items-center justify-center rounded-full text-brand-navy/70 transition-colors hover:bg-brand-blue-light hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue cursor-pointer"
              aria-label="Search site"
            >
              <Search className="h-4 w-4" />
            </button>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-5 py-2.5 text-[0.85rem] xl:text-[0.88rem] font-semibold text-white shadow-[0_4px_14px_-3px_rgba(11,31,65,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-[0_8px_20px_-4px_rgba(20,125,255,0.45)]"
            >
              <span>Request a Demo</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-8.5 w-8.5 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-blue-light"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </nav>

        {/* Quick Search Drawer (Accessible Dropdown attached to floating nav) */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md p-3 shadow-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-1 items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-brand-navy">
                  <Search className="h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products, capabilities, or company information..."
                    className="w-full bg-transparent text-xs text-brand-navy placeholder:text-slate-400 focus:outline-hidden"
                    autoFocus
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-[0.7rem] font-semibold text-slate-500 hover:text-brand-navy px-2 py-1"
                >
                  ESC
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Drawer (Attached to floating nav) */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="pointer-events-auto mt-2 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-5 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "bg-brand-blue-light text-brand-blue font-semibold"
                          : "text-brand-navy/85 hover:bg-brand-blue-light/50 hover:text-brand-navy"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-colors hover:bg-brand-blue"
                  >
                    <span>Request a Demo</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
