import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/contact",
  "Contact Maaptrix | Get in Touch",
  "Contact Maaptrix for product enquiries, demo requests, business discussions and general questions about our school transport and school management products.",
  { absolute: true },
);

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
