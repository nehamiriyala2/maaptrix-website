import ProductDetailHero from "@/components/products/ProductDetailHero";
import ProductStory from "@/components/products/ProductStory";
import SchoolManagementProduct from "@/components/products/SchoolManagementProduct";
import ProductsCTA from "@/components/products/ProductsCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/products/school-management",
  "Small School Management Module",
  "A lightweight subscription module for smaller schools and kindergartens: student onboarding, attendance, homework, academic records, announcements and events.",
);

export default function SchoolManagementPage() {
  return (
    <>
      <ProductDetailHero
        eyebrow="Product 02 · School Management"
        title="Small School"
        titleAccent="Management Module"
        description="A lightweight subscription module intended for smaller schools and kindergartens that need essential digital administration without the complexity of a large enterprise school-management platform."
        pills={["Student Administration", "Attendance Records", "Parent Broadcasts", "Events & Moments"]}
        detailsId="how-it-works"
      />
      <ProductStory
        id="how-it-works"
        problem={{
          title: "Smaller schools need essential tools, not an enterprise platform.",
          text: "Smaller schools and kindergartens need digital administration, but large enterprise school-management platforms bring more complexity than they need.",
          points: [
            "Everyday administration: onboarding, attendance, homework and records.",
            "Clear communication with parents about notices and events.",
          ],
        }}
        solution={{
          title: "A lightweight module covering the essentials.",
          text: "Essential digital school operations in a simple, easy-to-adopt product.",
          points: [
            "Student onboarding, basic profiles and parent document upload",
            "Attendance, homework and marks / academic records",
            "Notifications and announcements",
            "Events and event-photo sharing",
          ],
        }}
        workflow={[
          { title: "Onboard students", desc: "Create profiles and collect parent documents." },
          { title: "Run the school day", desc: "Record attendance and share homework." },
          { title: "Track academics", desc: "Keep marks and academic records together." },
          { title: "Communicate", desc: "Send notifications and announcements." },
          { title: "Share school life", desc: "Publish events and event photos for parents." },
        ]}
      />
      <SchoolManagementProduct />
      <ProductsCTA />
    </>
  );
}
