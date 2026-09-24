"use client";

import PrimaryAdvantageSection from "@/components/why-maaptrix/PrimaryAdvantageSection";
import FocusedSolutionsSection from "@/components/why-maaptrix/FocusedSolutionsSection";
import SubscriptionModelSection from "@/components/why-maaptrix/SubscriptionModelSection";
import EndToEndOwnershipSection from "@/components/why-maaptrix/EndToEndOwnershipSection";
import UsabilityFocusSection from "@/components/why-maaptrix/UsabilityFocusSection";
import ScalableDirection from "@/components/why-maaptrix/ScalableDirection";

export default function SixDifferentiators() {
  return (
    <div className="relative">
      
      <PrimaryAdvantageSection />

      <FocusedSolutionsSection />

      <SubscriptionModelSection />

      <EndToEndOwnershipSection />

      <UsabilityFocusSection />

      <ScalableDirection />

    </div>
  );
}
