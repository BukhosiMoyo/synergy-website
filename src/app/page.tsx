import type { Metadata } from "next";
import HeroAnimated from "@/components/sections/HeroAnimated";
import MetricsSection from "@/components/sections/MetricsSection";
import SolutionsTabs from "@/components/sections/SolutionsTabs";
import PlatformPreview from "@/components/sections/PlatformPreview";
import ServiceCardsGrid from "@/components/sections/ServiceCardsGrid";
import ProcessOrbital from "@/components/sections/ProcessOrbital";
import CaseStudyHighlights from "@/components/sections/CaseStudyHighlights";
import BenefitsGrid from "@/components/sections/WhoWeServe";
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
      <SolutionsTabs />
      <PlatformPreview />
      <ServiceCardsGrid />
      <ProcessOrbital />
      <CaseStudyHighlights />
      <BenefitsGrid />
      <FinalCTA />
    </main>
  );
}
