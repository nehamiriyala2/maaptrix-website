import { pageMetadata } from "@/lib/seo";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsOverview from "@/components/products/ProductsOverview";
import ProductComparison from "@/components/products/ProductComparison";
import ProductsCTA from "@/components/products/ProductsCTA";

export const metadata = pageMetadata(
  "/products",
  "Products",
  "Explore Maaptrix software products for school transportation and school administration, designed around practical operational needs.",
);

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsOverview />
      <ProductComparison />
      <ProductsCTA />
    </>
  );
}
