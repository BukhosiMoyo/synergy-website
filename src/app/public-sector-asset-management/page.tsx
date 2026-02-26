import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { BGPattern } from "@/components/ui/bg-pattern";

export const metadata: Metadata = {
    title: "Public Sector Asset Management | Audit Readiness & Compliance",
    description: "Specialist asset management for national departments, municipalities, and SOEs. Delivering unqualified audit outcomes and GRAP-aligned FAR reconciliation.",
};

const PUBLIC_SERVICES = [
    {
        title: "Physical Asset Verification at Scale",
        description: "Nationwide multi-site deployment with geolocated tagging and condition assessment for municipal and provincial assets."
    },
    {
        title: "FAR Reconciliation & Clean-Up",
        description: "Register correction and disposal validation to eliminate duplicates and identify missing institutional assets."
    },
    {
        title: "Audit Support & Preparation",
        description: "Audit file preparation and supporting documentation to address Auditor General queries and resolve historical findings."
    },
    {
        title: "System Implementation",
        description: "Deployment of GRAP-aligned verification systems and asset lifecycle tracking dashboards for public agencies."
    },
    {
        title: "Ongoing Compliance Support",
        description: "Continuous register updates and annual reviews to ensure sustained unqualified audit status."
    }
];

export default function PublicSectorPage() {
    return (
        <main>
            <Section variant="inverse" spacing="lg">
                <div className="max-w-4xl">
                    <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold uppercase tracking-widest mb-6">
                        Public Sector Specialists
                    </span>
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.05]">
                        Audit-Ready <span className="text-brand">Public Sector</span> Asset Governance
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground-inverse/80 leading-relaxed max-w-2xl mb-12">
                        Delivering unqualified audit outcomes for national departments, SOEs, municipalities, and universities across South Africa.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/contact-us/">
                            <Button size="lg">Consult an Audit Specialist</Button>
                        </Link>
                    </div>
                </div>
            </Section>

            <Section variant="default" title="Sector-Specific Service Delivery">
                <BGPattern variant="grid" mask="fade-y" size={28} />
                <p className="text-xl text-muted max-w-3xl mb-16 leading-relaxed">
                    Our Public Sector methodology is built on the requirements of the MFMA, PFMA, and GRAP standards, ensuring institutional stability and legislative compliance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PUBLIC_SERVICES.map((service) => (
                        <Card
                            key={service.title}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </Section>

            <Section variant="muted" title="Target Public Institutions">
                <BGPattern variant="dots" mask="fade-edges" size={20} />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        "National Departments",
                        "Provincial Depts",
                        "Municipalities",
                        "SOEs",
                        "Universities",
                        "Public Agencies"
                    ].map((type) => (
                        <div key={type} className="p-6 bg-card border border-border rounded-2xl text-center font-bold text-foreground/70 shadow-sm">
                            {type}
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
