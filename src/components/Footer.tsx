import Link from "next/link";
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#BFE3FF]/60 bg-gradient-to-b from-[#DDF1FF] via-[#E8F5FF] to-[#F1F8FF]">
      {/* Soft atmospheric ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 -top-20 h-44 w-1/2 rounded-full bg-[#CFEAFF]/60 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-40 w-40 rounded-full bg-[#BFE3FF]/40 blur-2xl" />
      </div>

      <div className="page-container py-9 sm:py-11 lg:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Logo
                imageClassName="h-9 w-9 rounded-md object-contain"
                wordmarkClassName="text-xl font-bold font-display tracking-tight text-brand-navy"
              />
            </Link>
            <p className="mt-3.5 max-w-sm text-sm leading-relaxed text-brand-navy/70">
              Maaptrix builds and operates focused software products for
              real-world operations, delivered through dependable
              subscription-based models.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              <span>Building Practical Digital Products for Everyday Operations.</span>
            </div>

            <div className="mt-5 flex flex-col gap-1.5 text-sm text-brand-navy/75">
              <a
                href="mailto:hello@maaptrix.com"
                className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-brand-blue"
              >
                <span>hello@maaptrix.com</span>
              </a>
              <span className="text-xs text-slate-500">
                Maaptrix Private Limited
              </span>
            </div>
          </div>

          {/* Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand-navy/45">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand-navy/45">
              Products
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-navy/75 transition-colors hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand-navy/45">
              Get in Touch
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                >
                  Request a Demo →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-between gap-3 border-t border-brand-line pt-5 sm:flex-row">
          <p className="text-xs text-brand-navy/55">
            &copy; {new Date().getFullYear()} Maaptrix Private Limited. All
            rights reserved.
          </p>
          <p className="text-xs text-brand-navy/50">
            Software products designed and operated for real-world operations.
          </p>
        </div>
      </div>
    </footer>
  );
}
