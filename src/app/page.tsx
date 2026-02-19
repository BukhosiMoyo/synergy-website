import type { Metadata } from "next";
import HeroAnimated from "@/components/sections/HeroAnimated";
import MetricsSection from "@/components/sections/MetricsSection";
import WhoWeServe from "@/components/sections/WhoWeServe";
import ServiceCardsGrid from "@/components/sections/ServiceCardsGrid";
import CaseStudyHighlights from "@/components/sections/CaseStudyHighlights";
import TrustedInstitutions from "@/components/sections/TrustedInstitutions";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Synergy Evolution | Asset Management Specialists",
  description: "Fixed asset management solutions for national departments, SOEs, and municipalities delivering unqualified audit outcomes.",
};

export default function HomePage() {
  return (
    <main>
      <HeroAnimated />
      <MetricsSection />
      <WhoWeServe />
      <ServiceCardsGrid />
      <CaseStudyHighlights />
      <TrustedInstitutions />
      <FinalCTA />
    </main>
  );
}
