import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import HomeWhyPreview from "@/components/home/HomeWhyPreview";
import HomeProducts from "@/components/home/HomeProducts";
import HomeProcessPreview from "@/components/home/HomeProcessPreview";
import HomeIntro from "@/components/home/HomeIntro";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeTrust from "@/components/home/HomeTrust";
import FinalCTA from "@/components/FinalCTA";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://maaptrix.com",
    siteName: "Maaptrix",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWhyPreview />
      <HomeProducts />
      <HomeProcessPreview />
      <HomeIntro />
      <HomeTestimonials />
      <HomeTrust />
      <FinalCTA />
    </>
  );
}
