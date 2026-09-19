import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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
  title: "Maaptrix | Technology Products Built for Real-World Operations",
  description:
    "Maaptrix designs, develops, operates and continuously improves its own digital products, offered through subscription-based models. Starting with school transportation and safety.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F1F8FF] text-brand-navy">
        {children}
      </body>
    </html>
  );
}
