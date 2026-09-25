import HomeHero from "@/components/home/HomeHero";
import HomeWhyPreview from "@/components/home/HomeWhyPreview";
import HomeProducts from "@/components/home/HomeProducts";
import HomeProcessPreview from "@/components/home/HomeProcessPreview";
import HomeIntro from "@/components/home/HomeIntro";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWhyPreview />
      <HomeProducts />
      <HomeProcessPreview />
      <HomeIntro />
      <HomeTestimonials />
      <FinalCTA />
    </>
  );
}
