import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "About | Governance-Driven Asset Management Specialists",
    description: "Learn about Synergy Evolution's mission to drive institutional excellence through specialist asset management and governance support.",
};

export default function AboutPage() {
    return (
        <Section variant="default">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    About Synergy Evolution
                </h1>
                <p className="text-lg text-text-muted leading-relaxed font-medium">
                    Our mission is to empower public and private sector organizations with audit-ready asset management frameworks that prioritize governance and transparency.
                </p>
                <div className="mt-12 bg-surface-1 p-8 rounded-xl border border-border-base shadow-sm">
                    <p className="text-text-muted italic">Company history, mission, and team details coming soon.</p>
                </div>
            </div>
        </Section>
    );
}
