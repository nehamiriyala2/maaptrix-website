import type { Metadata } from "next";
import LegalPage, { LEGAL_DRAFT_ROBOTS } from "@/components/legal/LegalPage";
import { DATA_SECURITY } from "@/components/legal/legalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "/data-security",
    "Data & Security",
    "Information about how Maaptrix approaches data and security across its digital products.",
  ),
  robots: LEGAL_DRAFT_ROBOTS,
};

export default function DataSecurityPage() {
  return <LegalPage eyebrow="Legal" document={DATA_SECURITY} />;
}
