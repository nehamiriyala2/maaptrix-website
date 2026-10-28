"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_MEASUREMENT_ID, trackEvent } from "@/lib/analytics";

/**
 * Loads GA4 once from the root layout. The initial page_view comes from the
 * `config` call; client-side navigations are counted by GA4's enhanced
 * measurement ("Page changes based on browser history events", on by default),
 * so no page_view is sent manually here — doing both would double-count.
 *
 * Also records CTA clicks site-wide with one delegated listener:
 * links to /contact → cta_click, tel:/mailto: links → contact_click.
 */
export default function Analytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const location = window.location.pathname;
      if (href.startsWith("tel:") || href.startsWith("mailto:")) {
        trackEvent("contact_click", { method: href.startsWith("tel:") ? "phone" : "email", cta_location: location });
      } else if (href === "/contact" || href.startsWith("/contact#") || href.startsWith("/contact?")) {
        const text = (link.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 60);
        trackEvent("cta_click", { cta_text: text, cta_location: location });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_MEASUREMENT_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(GA_MEASUREMENT_ID)});`}
      </Script>
    </>
  );
}
