import Hero from "@/components/Hero";
import HomeIntro from "@/components/home/HomeIntro";
import HomeProducts from "@/components/home/HomeProducts";
import HomeWhyPreview from "@/components/home/HomeWhyPreview";
import HomeProcessPreview from "@/components/home/HomeProcessPreview";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeProducts />
      <HomeWhyPreview />
      <HomeProcessPreview />
      <FinalCTA />
    </>
  );
}
