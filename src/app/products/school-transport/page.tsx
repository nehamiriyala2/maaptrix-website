import ProductDetailHero from "@/components/products/ProductDetailHero";
import ProductStory from "@/components/products/ProductStory";
import SchoolTransportProduct from "@/components/products/SchoolTransportProduct";
import ProductsCTA from "@/components/products/ProductsCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/products/school-transport",
  "School Transport Management System",
  "A subscription-based school transport platform with live vehicle tracking, route visibility, pickup and drop attendance, parent visibility and safety workflows.",
);

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
          src: "/transport/school-bus-thumb.jpg",
          alt: "Yellow school bus",
          width: 1024,
          height: 1024,
          cover: true,
        }}
        detailsId="how-it-works"
      />
      <ProductStory
        id="how-it-works"
        problem={{
          title: "School transport involves many people who need the same information.",
          text: "Administrators, drivers and parents all depend on knowing where a bus is and who is on it, but each sees only part of the picture.",
          points: [
            "Administrators need visibility across multiple buses.",
            "Drivers need a simple way to run routes and record attendance.",
            "Parents need to know about pickup, drop and transport status.",
          ],
        }}
        solution={{
          title: "One connected platform for administrators, drivers and parents.",
          text: "A school admin dashboard, a driver app and parent transport visibility share the same live information.",
          points: [
            "Live vehicle tracking and route visibility",
            "Pickup and drop attendance",
            "Parent notifications and transport visibility",
            "SOS workflows and guardian pickup validation with OTP where applicable",
          ],
        }}
        workflow={[
          { title: "Driver starts the route", desc: "The driver app guides route operations." },
          { title: "School sees it live", desc: "Admins follow vehicles on the dashboard." },
          { title: "Pickup & drop recorded", desc: "Attendance is captured at each stop." },
          { title: "Parents stay informed", desc: "Transport status and notifications reach parents." },
          { title: "Review and improve", desc: "Route replay, reports and transport alerts." },
        ]}
      />
      <SchoolTransportProduct />
      <ProductsCTA />
    </>
  );
}
