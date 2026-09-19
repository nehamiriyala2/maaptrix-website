import Logo from "./Logo";
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Why Maaptrix", href: "#why-maaptrix" },
  { label: "Products", href: "#products" },
  { label: "How We Work", href: "#process" },
  { label: "Contact", href: "#contact" },
];
const PRODUCT_LINKS = [
  { label: "School Transport", href: "#products" },
  { label: "School Management", href: "#products" },
];
const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#BFE3FF]/60 bg-gradient-to-b from-[#DDF1FF] via-[#E8F5FF] to-[#F1F8FF]">
      {/* Soft atmospheric ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 -top-20 h-44 w-1/2 rounded-full bg-[#CFEAFF]/60 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-40 w-40 rounded-full bg-[#BFE3FF]/40 blur-2xl" />
      </div>

      <div className="page-container py-7 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5">
            <Logo
              imageClassName="h-9 w-9 rounded-md object-contain"
              wordmarkClassName="text-xl font-bold font-display tracking-tight text-brand-navy"
            />
            <p className="mt-3.5 max-w-sm text-sm leading-relaxed text-brand-navy/65">
              Technology products built for real-world operations, starting
              with school transportation and safety.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-brand-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              <span>Simple Technology. Safer Tomorrows.</span>
            </div>

            <div className="mt-5 flex flex-col gap-1.5 text-sm text-brand-navy/70">
              <a
                href="mailto:hello@maaptrix.com"
                className="transition-colors hover:text-brand-blue"
              >
                hello@maaptrix.com
              </a>
              <a
                href="https://maaptrix.com"
                className="transition-colors hover:text-brand-blue"
              >
                maaptrix.com
              </a>
            </div>
          </div>

          {/* Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-navy/45">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex text-sm text-brand-navy/70 transition-colors hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-navy/45">
              Products
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-navy/70 transition-colors hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-navy/45">
              Legal
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-navy/70 transition-colors hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-7 sm:mt-8 flex flex-col items-center justify-between gap-3 border-t border-brand-line pt-4 sm:pt-5 sm:flex-row">
          <p className="text-xs text-brand-navy/50">
            &copy; {new Date().getFullYear()} Maaptrix Private Limited. All
            rights reserved.
          </p>
          <p className="text-xs text-brand-navy/45">
            Designed and operated for real-world reliability.
          </p>
        </div>
      </div>
    </footer>
  );
}

