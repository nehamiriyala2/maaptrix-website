/*
 * Google Analytics 4 helpers. GA only loads when NEXT_PUBLIC_GA_MEASUREMENT_ID
 * is set (see components/Analytics.tsx); until then trackEvent is a no-op.
 *
 * Never pass personal data (names, emails, phone numbers, message text) as
 * event parameters.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

type Gtag = (command: "event", name: string, params?: Record<string, string | number | boolean>) => void;

export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  const gtag = (globalThis as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
