import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: { absolute: "Contact Maaptrix | Get in Touch" },
  description:
    "Contact Maaptrix for product enquiries, demo requests, business discussions and general questions about our school transport and school management products.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Maaptrix | Get in Touch",
    description: "Contact Maaptrix for product enquiries, demo requests and business discussions.",
    url: "/contact",
    siteName: "Maaptrix",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
