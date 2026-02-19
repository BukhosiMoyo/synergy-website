import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Private Sector Asset Management | Operational Control & Visibility",
    description: "Asset lifecycle optimization for enterprise corporations. Improving operational control, financial reporting accuracy, and internal audit confidence.",
};

const PRIVATE_SERVICES = [
    {
        title: "Asset Register Optimization",
        description: "Enterprise data clean-up and classification to align physical asset reality with financial depreciation records."
    },
    {
        title: "Verification & Tagging",
        description: "Multibranch physical verification to strengthen internal control and improve location-based asset tracking."
    },
    {
        title: "Asset Lifecycle Strategy",
        description: "Procurement alignment and disposal processes to optimize capital expenditure and improve operational visibility."
    },
    {
        title: "System Integration",
        description: "Aligning asset data with ERP and accounting systems for automated, real-time institutional reporting."
    },
    {
        title: "Governance Frameworks",
        description: "Developing internal asset policies and control frameworks to enhance operational performance and audit confidence."
    }
];

export default function PrivateSectorPage() {
    return (
        <main>
            <Section variant="inverse" spacing="lg">
                <div className="max-w-4xl">
                    <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold uppercase tracking-widest mb-6">
                        Private Sector Excellence
                    </span>
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.05]">
                        Strategic <span className="text-brand">Asset Lifecycle</span> Visibility
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground-inverse/80 leading-relaxed max-w-2xl mb-12">
                        Improving operational control and financial reporting accuracy for multi-branch corporations and asset-intensive businesses.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/contact-us/">
                            <Button size="lg">Review Your Asset Strategy</Button>
                        </Link>
                    </div>
                </div>
            </Section>

            <Section variant="default" title="Enterprise-Focused Outcomes">
                <p className="text-xl text-muted max-w-3xl mb-16 leading-relaxed">
                    Our Private Sector approach focuses on visibility, capital efficiency, and internal control, ensuring your asset base supports operational growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRIVATE_SERVICES.map((service) => (
                        <Card
                            key={service.title}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </Section>

            <Section variant="muted" title="Core Private Sector Outcomes">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Lifecycle Visibility", desc: "Full tracking from procurement to disposal." },
                        { label: "CAPEX Alignment", desc: "Ensuring spending matches physical asset needs." },
                        { label: "Audit Confidence", desc: "Internal control frameworks that withstand scrutiny." }
                    ].map((item) => (
                        <div key={item.label} className="p-8 bg-card border border-border rounded-3xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-primary">{item.label}</h3>
                            <p className="text-muted">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
