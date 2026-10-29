import { pageMetadata } from "@/lib/seo";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsOverview from "@/components/products/ProductsOverview";
import ProductComparison from "@/components/products/ProductComparison";
import ProductsCTA from "@/components/products/ProductsCTA";

export const metadata = pageMetadata(
  "/products",
  "School Transport & School Management Software | Maaptrix",
  "Explore Maaptrix software products for school transportation and school administration, designed around practical operational needs.",
  { absolute: true },
);

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsOverview />
      <ProductComparison />
      <ProductsCTA tinted />
    </>
  );
}
