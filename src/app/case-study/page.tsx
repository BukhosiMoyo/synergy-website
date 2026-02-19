import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Case Studies | Public Sector Asset Management Delivery",
  description: "In-depth case studies showcasing our successful asset management delivery and compliance frameworks for government and private entities.",
};

export default function CaseStudyPage() {
  return (
    <Section variant="default">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Case Studies
        </h1>
        <p className="text-lg text-text-muted leading-relaxed font-medium">
          Success stories from our public sector partners. Demonstrating audit-ready compliance and governance in action.
        </p>
        <div className="mt-12 bg-card p-8 rounded-xl border border-border-base shadow-sm">
          <p className="text-text-muted italic">Case study index and project highlights coming soon.</p>
        </div>
      </div>
    </Section>
  );
}
