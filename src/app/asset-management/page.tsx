import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Fixed Asset Management & Audit Readiness | Synergy Evolution",
    description: "Comprehensive fixed asset management solutions delivering institutional audit readiness, FAR reconciliation, and physical verification at scale.",
};

const PILLAR_SERVICES = [
    {
        title: "Physical Verification at Scale",
        description: "Multidisciplinary teams deployed for nationwide asset floor-to-book and book-to-floor verification cycles."
    },
    {
        title: "FAR Reconciliation",
        description: "Expert alignment of physical reality with financial Fixed Asset Registers, resolving historical discrepancies and audit flags."
    },
    {
        title: "Compliance Frameworks",
        description: "Establishing GRAP, PFMA, and MFMA aligned asset policies and standard operating procedures for institutional stability."
    }
];

export default function AssetManagementPillarPage() {
    return (
        <main>
            {/* Authority Hero */}
            <Section variant="inverse" spacing="lg">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.05]">
                        Institutional <span className="text-brand">Fixed Asset Management</span> & Audit Readiness
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground-inverse/80 leading-relaxed max-w-2xl mb-12">
                        We bridge the gap between financial compliance and physical reality, delivering unqualified audit outcomes for public and private sector institutions.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/contact-us/">
                            <Button size="lg">Request Institutional Assessment</Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* The Authority Theme */}
            <Section variant="default" title="The Core Authority Theme">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {PILLAR_SERVICES.map((service) => (
                        <Card
                            key={service.title}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

                <div className="bg-surface p-10 md:p-16 rounded-3xl border border-border">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Bridging the Compliance Gap
                        </h2>
                        <p className="text-lg text-muted leading-relaxed mb-8">
                            At Synergy Evolution, we move beyond simple asset counting. Our methodology focuses on building stable, audit-ready asset environments that withstand scrutiny from the Auditor General and internal audit committees.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Unqualified Audit Outcomes",
                                "100% Floor-to-Book Reconciliation",
                                "Institutional Governance Alignment",
                                "Lifecycle Visibility & Control"
                            ].map((outcome) => (
                                <div key={outcome} className="flex items-center gap-3 text-foreground font-semibold">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    {outcome}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
