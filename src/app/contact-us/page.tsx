import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Contact | Synergy Evolution",
    description: "Get in touch with Synergy Evolution for specialist asset management consulting and governance support.",
};

export default function ContactUsPage() {
    return (
        <Section variant="default">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Contact Us
                </h1>
                <p className="text-lg text-text-muted leading-relaxed font-medium">
                    Get in touch with our team of specialists. We are here to support your governance, compliance, and asset management needs.
                </p>
                <div className="mt-12 bg-surface-1 p-8 rounded-xl border border-border-base shadow-sm">
                    <p className="text-text-muted italic">Contact form and direct details coming soon.</p>
                </div>
            </div>
        </Section>
    );
}
