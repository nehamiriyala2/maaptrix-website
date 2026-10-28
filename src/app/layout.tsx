import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maaptrix.com"),
  // No default canonical: each page sets its own, and the 404 page must not claim the homepage's.
  title: {
    template: "%s | Maaptrix",
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Maaptrix",
    "software products",
    "school transport management system",
    "school management software",
    "operational software",
    "subscription software",
    "B2B SaaS India",
  ],
  authors: [{ name: "Maaptrix Private Limited" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://maaptrix.com",
    siteName: "Maaptrix",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  // Google Search Console HTML-tag verification; set the token in the hosting environment.
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-navy selection:bg-brand-blue selection:text-white">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-[76px]">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
