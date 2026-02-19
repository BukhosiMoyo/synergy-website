import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

export const metadata: Metadata = {
    title: "Asset Management Solutions | System Technology & Integrations",
    description: "Explore our range of asset management solutions, including system technology, automated integrations, and strategic asset requisition frameworks.",
};

const SOLUTIONS = [
    {
        title: "System Technology",
        description: "Deployment of specialist asset verification and tracking software tailored for institutional complex environments."
    },
    {
        title: "Integrations",
        description: "Aligning fixed asset data with ERP and accounting systems (SAP, Oracle, Sage) to ensure a single version of truth."
    },
    {
        title: "Asset Requisitions",
        description: "Automated procurement and requisition workflows that enforce policy compliance and prevent irregular expenditure."
    }
];

export default function SolutionsPage() {
    return (
        <main>
            <Section variant="inverse" spacing="lg">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.05]">
                        Bridging Technology & <span className="text-accent">Institutional Governance</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground-inverse/80 leading-relaxed max-w-2xl mb-12">
                        Our solution set focuses on automating the data collection, verification, and reporting lifecycle for multi-parameter asset bases.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/contact-us/">
                            <Button size="lg">
                                Request Solution Demo
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            <Section variant="default" title="Core Technology Solutions">
                <p className="text-xl text-muted max-w-3xl mb-16 leading-relaxed">
                    We provide the technical infrastructure required to maintain a stable, audit-ready Fixed Asset Register across diverse operational environments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {SOLUTIONS.map((solution) => (
                        <Card
                            key={solution.title}
                            title={solution.title}
                            description={solution.description}
                        />
                    ))}
                </div>

                <div className="bg-surface p-10 md:p-16 rounded-3xl border border-border text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        Looking for a Custom Integration?
                    </h2>
                    <p className="text-lg text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
                        Our technical team specializes in custom API integrations between asset verification systems and legacy financial platforms.
                    </p>
                    <Link href="/contact-us/">
                        <Button variant="outline">
                            Consult our Technical Team
                            <Code className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </Section>
        </main>
    );
}
