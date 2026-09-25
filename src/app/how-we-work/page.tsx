import HowWeWorkHero from "@/components/how-we-work/HowWeWorkHero";
import ProcessStack from "@/components/how-we-work/ProcessStack";
import ProductExample from "@/components/how-we-work/ProductExample";
import HowWeWorkCTA from "@/components/how-we-work/HowWeWorkCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/how-we-work",
  "How We Work",
  "How Maaptrix turns real-world operational problems into focused, reliable software products: discover, plan, implement, connect and support.",
);

export default function HowWeWorkPage() {
  return (
    <>
      <HowWeWorkHero />
      <ProcessStack />
      <ProductExample />
      <HowWeWorkCTA />
    </>
  );
}
