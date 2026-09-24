import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: {
    template: "%s | Maaptrix",
    default: "Maaptrix | Technology Products Built for Real-World Operations",
  },
  description:
    "Maaptrix designs, develops, operates and continuously improves its own digital products, helping organizations simplify everyday operations through dependable subscription-based software.",
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
    title: "Maaptrix | Technology Products Built for Real-World Operations",
    description:
      "Maaptrix designs, develops, operates and continuously improves its own digital products, helping organizations simplify everyday operations through dependable subscription-based software.",
    url: "https://maaptrix.com",
    siteName: "Maaptrix",
    type: "website",
  },
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
        <main className="flex-1 pt-16 sm:pt-[4.25rem] lg:pt-[4.75rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
