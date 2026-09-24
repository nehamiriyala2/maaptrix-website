import type { Metadata } from "next";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import SchoolManagementProduct from "@/components/products/SchoolManagementProduct";
import ProductsCTA from "@/components/products/ProductsCTA";

export const metadata: Metadata = {
  title: "Small School Management Module",
  description:
    "A lightweight subscription module for smaller schools and kindergartens: student onboarding, attendance, homework, academic records, announcements and events.",
};

export default function SchoolManagementPage() {
  return (
    <>
      <ProductDetailHero
        eyebrow="Product 02 · School Management"
        title="Small School"
        titleAccent="Management Module"
        description="A lightweight subscription module intended for smaller schools and kindergartens that need essential digital administration without the complexity of a large enterprise school-management platform."
        pills={["Student Administration", "Attendance Records", "Parent Broadcasts", "Events & Moments"]}
        image={{
          src: "/hero/school-card-scene.jpg",
          alt: "Tablet displaying a school administration dashboard on a desk",
          width: 1200,
          height: 896,
        }}
        detailsId="school"
      />
      <SchoolManagementProduct />
      <ProductsCTA />
    </>
  );
}
