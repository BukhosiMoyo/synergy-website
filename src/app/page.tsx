import type { Metadata } from "next";
import HeroAnimated from "@/components/sections/HeroAnimated";
import TrustedByMarquee from "@/components/sections/TrustedByMarquee";
import MetricsSection from "@/components/sections/MetricsSection";
import SolutionsTabs from "@/components/sections/SolutionsTabs";
import PlatformPreview from "@/components/sections/PlatformPreview";
import ServiceCardsGrid from "@/components/sections/ServiceCardsGrid";
import ProcessOrbital from "@/components/sections/ProcessOrbital";
import CaseStudyHighlights from "@/components/sections/CaseStudyHighlights";
import BenefitsGrid from "@/components/sections/WhoWeServe";
import AboutSnippet from "@/components/sections/AboutSnippet";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Synergy Evolution | Asset Management Specialists — South Africa",
  description: "Fixed asset management solutions for national departments, SOEs, municipalities, and private enterprises. Physical verification, FAR reconciliation, and system implementation delivering unqualified audit outcomes across South Africa, Botswana, and Eswatini.",
};

export default function HomePage() {
  return (
    <main>
      <HeroAnimated />
      <TrustedByMarquee />
      <MetricsSection />
      <SolutionsTabs />
      <PlatformPreview />
      <ServiceCardsGrid />
      <ProcessOrbital />
      <CaseStudyHighlights />
      <BenefitsGrid />
      <AboutSnippet />
      <FinalCTA />
    </main>
  );
}
