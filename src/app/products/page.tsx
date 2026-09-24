import type { Metadata } from "next";
import ProductsHero from "@/components/products/ProductsHero";
import ProductSelector from "@/components/products/ProductSelector";
import SchoolTransportProduct from "@/components/products/SchoolTransportProduct";
import SchoolManagementProduct from "@/components/products/SchoolManagementProduct";
import ProductComparison from "@/components/products/ProductComparison";
import ProductPhilosophy from "@/components/products/ProductPhilosophy";
import ProductsCTA from "@/components/products/ProductsCTA";

export const metadata: Metadata = {
  title: "Maaptrix Products | Software Built for Real Operations",
  description:
    "Explore Maaptrix software products for school transportation and school administration, designed around practical operational needs.",
};

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* 1. Hero Section */}
      <ProductsHero />

      {/* 2. Sticky Product Selector */}
      <ProductSelector />

      {/* 3. Product 01 — School Transport Management System */}
      <SchoolTransportProduct />

      {/* 4. Product 02 — Small School Management Module */}
      <SchoolManagementProduct />

      {/* 5. Product Comparison */}
      <ProductComparison />

      {/* 6. Product Philosophy */}
      <ProductPhilosophy />

      {/* 7. Final Products CTA */}
      <ProductsCTA />
    </main>
  );
}
