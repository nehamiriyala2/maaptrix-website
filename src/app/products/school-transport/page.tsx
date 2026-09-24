import type { Metadata } from "next";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import SchoolTransportProduct from "@/components/products/SchoolTransportProduct";
import ProductsCTA from "@/components/products/ProductsCTA";

export const metadata: Metadata = {
  title: "School Transport Management System",
  description:
    "A subscription-based school transport platform with live vehicle tracking, route visibility, pickup and drop attendance, parent visibility and safety workflows.",
};

export default function SchoolTransportPage() {
  return (
    <>
      <ProductDetailHero
        eyebrow="Product 01 · School Transport"
        title="School Transport"
        titleAccent="Management System"
        description="A subscription-based school transport platform designed to help schools manage transportation, improve visibility and strengthen communication between school administrators, drivers and parents."
        pills={["Fleet Tracking", "Safety Protocols", "Parent Visibility", "Subscription Model"]}
        image={{
          src: "/hero/transport-card-scene.jpg",
          alt: "Smartphone showing a school bus route map beside a school bus on the road",
          width: 1200,
          height: 896,
        }}
        detailsId="transport"
      />
      <SchoolTransportProduct />
      <ProductsCTA />
    </>
  );
}
