import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import ProductQuickLinks from "@/components/contact/ProductQuickLinks";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Maaptrix | Request a Product Demo",
  description:
    "Contact Maaptrix to learn more about its practical software products for real-world operations or request a product demonstration.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* 1. Hero Section */}
      <ContactHero />

      {/* 2. Main Contact Section (Contact Details & Request a Demo Form) */}
      <ContactSection />

      {/* 3. Product Quick Links */}
      <ProductQuickLinks />

      {/* 4. Final CTA */}
      <ContactCTA />
    </main>
  );
}
