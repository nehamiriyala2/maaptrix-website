import HowWeWorkHero from "@/components/how-we-work/HowWeWorkHero";
import LifecycleLoop from "@/components/how-we-work/LifecycleLoop";
import ProductExample from "@/components/how-we-work/ProductExample";
import HowWeWorkCTA from "@/components/how-we-work/HowWeWorkCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/how-we-work",
  "How We Work",
  "How Maaptrix turns real-world operational problems into focused, reliable software products: identify, design, develop, validate, launch and improve.",
);

export default function HowWeWorkPage() {
  return (
    <>
      <HowWeWorkHero />
      <LifecycleLoop />
      <ProductExample />
      <HowWeWorkCTA />
    </>
  );
}
