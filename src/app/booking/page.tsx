import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Book an Assessment | Synergy Evolution",
    description: "Schedule a discovery call or asset management assessment with our specialist team.",
};

export default function BookingPage() {
    return (
        <Section variant="default">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Book a Discovery Call
                </h1>
                <p className="text-lg text-text-muted leading-relaxed font-medium">
                    Schedule a time that works for you. Let&apos;s discuss how we can evolve your asset management strategy toward institutional excellence.
                </p>
                <div className="mt-12 bg-surface-1 p-8 rounded-xl border border-border-base shadow-sm">
                    <p className="text-text-muted italic">Booking widget / Calendly integration coming soon.</p>
                </div>
            </div>
        </Section>
    );
}
