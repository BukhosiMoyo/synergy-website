import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { BGPattern } from "@/components/ui/bg-pattern";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { caseStudies } from "@/data/case-studies";
import {
    ArrowRight,
    Phone,
    ScanSearch,
    FileCheck2,
    Monitor,
    ShieldCheck,
    Wrench,
    Building2,
    Landmark,
    GraduationCap,
    Factory,
    Briefcase,
    Hospital,
    CheckCircle2,
    Boxes,
    Banknote,
    Globe,
    Award,
    ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Public Sector Asset Management | Audit Readiness & GRAP Compliance",
    description: "Specialist fixed asset management for national departments, municipalities, SOEs, and universities. Physical verification, FAR reconciliation, and system implementation delivering unqualified audit outcomes across all 9 provinces.",
};

const PUBLIC_SERVICES = [
    {
        title: "Physical Asset Verification at Scale",
        description: "Nationwide multi-site deployment with barcode scanning, GPS tagging, condition assessment, and photographic evidence for every asset.",
        icon: <ScanSearch className="w-5 h-5" />,
        href: "/solutions/asset-verification",
    },
    {
        title: "FAR Reconciliation & Clean-Up",
        description: "Register correction, disposal validation, and ghost asset identification to align your physical asset reality with the Fixed Asset Register and general ledger.",
        icon: <FileCheck2 className="w-5 h-5" />,
        href: "/solutions/fixed-asset-management",
    },
    {
        title: "Audit Support & Preparation",
        description: "Comprehensive audit file preparation and supporting documentation to address Auditor General queries and resolve historical findings before deadline.",
        icon: <ShieldCheck className="w-5 h-5" />,
        href: "/solutions/compliance-audit-reporting",
    },
    {
        title: "System Implementation",
        description: "Deployment of GRAP-aligned verification systems, asset lifecycle dashboards, and barcode infrastructure for public agencies.",
        icon: <Monitor className="w-5 h-5" />,
        href: "/solutions/system-implementation-training",
    },
    {
        title: "Ongoing Compliance Support",
        description: "Continuous register updates, annual reviews, and staff training to ensure sustained unqualified audit status year after year.",
        icon: <Wrench className="w-5 h-5" />,
        href: "/solutions/lifecycle-custodian-tracking",
    },
];

const publicCaseStudies = caseStudies.filter(
    (cs) => cs.sector === "Public" && cs.featured
).slice(0, 4);

const INSTITUTIONS = [
    { label: "National Departments", description: "Presidency, COGTA, Social Development, and more", icon: Landmark },
    { label: "Municipalities", description: "Metros, district and local municipalities across 9 provinces", icon: Building2 },
    { label: "SOEs & Parastatals", description: "Eskom EPPF, SANBI, Gauteng Medical Supply Depot", icon: Factory },
    { label: "Universities & TVETs", description: "VUT, UNISA, Nkangala, Taletso, Ehlanzeni colleges", icon: GraduationCap },
    { label: "Provincial Legislatures", description: "Gauteng Provincial Legislature and provincial offices", icon: Briefcase },
    { label: "Health & Medical", description: "Provincial health departments and medical supply depots", icon: Hospital },
];

const PUBLIC_FAQS = [
    {
        question: "What is GRAP and why does it matter for asset management?",
        answer: "GRAP (Generally Recognised Accounting Practice) is the accounting framework that all South African public sector entities must follow. It requires accurate classification, measurement, and disclosure of fixed assets. Non-compliance leads to qualified audit outcomes and can result in governance consequences. Our services ensure your asset register is fully GRAP-aligned.",
    },
    {
        question: "How does physical verification help us achieve an unqualified audit?",
        answer: "Physical verification creates the evidence trail that auditors require — proving that assets on your register actually exist, are in the reported condition, and are at the recorded location. We use barcode scanning, GPS coordinates, condition grading, and photographic documentation to build a comprehensive, audit-ready evidence package.",
    },
    {
        question: "What is FAR reconciliation and how long does it take?",
        answer: "FAR (Fixed Asset Register) reconciliation is the process of aligning your physical asset count with the financial records in your general ledger. This identifies ghost assets (on register but not found), unrecorded assets (found but not on register), and discrepancies in value or classification. Depending on asset volume, reconciliation typically takes 2-6 months.",
    },
    {
        question: "Can you work within MFMA and PFMA compliance requirements?",
        answer: "Absolutely. Our entire methodology is built around the Municipal Finance Management Act (MFMA) and Public Finance Management Act (PFMA) requirements. We ensure all deliverables — from verification reports to system implementations — meet the compliance standards these acts require for asset management.",
    },
    {
        question: "How quickly can you deploy a team for a large-scale verification project?",
        answer: "We maintain standing capacity to deploy multi-person field teams within 2-4 weeks of project award. Our largest engagements have covered 200,000+ assets across multiple sites. We use a phased approach — starting with the highest-risk areas — to deliver early wins while working towards full coverage.",
    },
];

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Assess & Scope",
        description: "We audit your current register, identify gaps, and define the full scope of verification and reconciliation work required — including site mapping and resource planning.",
    },
    {
        step: "02",
        title: "Verify & Reconcile",
        description: "Our field teams deploy to physically verify every asset using barcode scanning, GPS evidence, and condition grading. Simultaneously, we reconcile the FAR against the general ledger.",
    },
    {
        step: "03",
        title: "Report & Support",
        description: "We deliver audit-ready evidence packages, variance reports, and compliance documentation. Then provide ongoing support through audit cycles and annual register updates.",
    },
];

export default function PublicSectorPage() {
    return (
        <main className="bg-background">

            {/* 1) HERO */}
            <Section variant="default" spacing="lg" className="pt-32 pb-16">
                <BGPattern variant="dots" mask="fade-edges" size={20} />
                <div className="max-w-4xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs text-accent font-semibold uppercase tracking-widest mb-6">
                        <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                        Public Sector Specialists
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05] text-foreground">
                        Audit-Ready{" "}
                        <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                            Public Sector
                        </span>{" "}
                        Asset Governance
                    </h1>
                    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10">
                        Delivering unqualified audit outcomes for national departments, SOEs, municipalities, and universities across all 9 provinces of South Africa — and internationally in Botswana and Eswatini.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-14">
                        <Link href="/booking">
                            <Button size="lg" className="px-8 bg-accent hover:bg-highlight text-white border-0">
                                Consult an Audit Specialist
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button variant="outline" size="lg" className="px-8">
                                View Public Sector Results
                            </Button>
                        </Link>
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center gap-8 md:gap-12">
                        {[
                            { value: "20+", label: "Public Clients" },
                            { value: "R12M+", label: "Project Value" },
                            { value: "7+", label: "Unqualified Audits" },
                            { value: "9", label: "Provinces" },
                        ].map((stat, idx) => (
                            <div key={stat.label} className="flex items-center gap-8">
                                {idx > 0 && <div className="w-px h-8 bg-border" />}
                                <div className="text-center">
                                    <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                                    <p className="text-[10px] md:text-xs text-muted uppercase tracking-wider">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 2) METRICS STRIP */}
            <div className="bg-surface border-y border-border py-10">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Boxes, value: "2M+", label: "Assets Verified", desc: "Across municipalities and departments" },
                            { icon: Award, value: "100%", label: "GRAP Compliance", desc: "All deliverables aligned to standards" },
                            { icon: Banknote, value: "R12M+", label: "Value Delivered", desc: "In public sector project work" },
                            { icon: Globe, value: "National", label: "Coverage", desc: "All 9 provinces + international" },
                        ].map((m) => (
                            <div key={m.label} className="text-center">
                                <m.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                                <p className="text-2xl md:text-3xl font-extrabold text-foreground">{m.value}</p>
                                <p className="text-xs font-semibold text-accent/80 uppercase tracking-wider mb-1">{m.label}</p>
                                <p className="text-[11px] text-muted">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* 3) SERVICES GRID */}
            <Section
                variant="default"
                badge="Sector-Specific Services"
                title="Built for Public Sector Compliance"
                subtitle="Our methodology is designed around MFMA, PFMA, and GRAP standards — ensuring institutional stability and legislative compliance."
            >
                <BGPattern variant="grid" mask="fade-y" size={28} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PUBLIC_SERVICES.map((service) => (
                        <Link key={service.title} href={service.href} className="block group h-full">
                            <Card
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                className="h-full group-hover:border-accent/30 transition-colors"
                            >
                                <span className="inline-flex items-center text-xs font-semibold text-accent mt-3 group-hover:text-highlight transition-colors">
                                    Learn more
                                    <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* 4) HOW WE WORK */}
            <Section
                variant="muted"
                badge="Our Process"
                title="How We Deliver Audit Readiness"
                subtitle="A proven three-phase approach refined across 20+ public sector engagements."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PROCESS_STEPS.map((step) => (
                        <div key={step.step} className="p-8 rounded-2xl bg-subtle border border-subtle">
                            <span className="text-4xl font-black text-accent/20 mb-4 block">{step.step}</span>
                            <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                            <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5) CASE STUDIES */}
            <Section
                variant="default"
                badge="Proven Results"
                title="Public Sector Case Studies"
                subtitle="Real institutions, real outcomes — from national departments to municipalities."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    {publicCaseStudies.map((study) => {
                        const metrics = [
                            study.assetCount && { label: "Assets", value: study.assetCount },
                            study.contractValue && { label: "Value", value: study.contractValue },
                            study.duration && { label: "Duration", value: study.duration },
                        ].filter(Boolean) as { label: string; value: string }[];

                        return (
                            <Link
                                key={study.slug}
                                href={`/case-studies/${study.slug}`}
                                className="group block rounded-2xl bg-subtle border border-subtle overflow-hidden card-hover-glow"
                            >
                                <div className="h-1 w-full bg-gradient-to-r from-accent to-highlight" />
                                <div className="p-7">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-subtle bg-accent/5 text-accent">
                                            {study.serviceType}
                                        </span>
                                        {study.auditResult && (
                                            <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-highlight/10 text-highlight">
                                                ✓ {study.auditResult}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-sm text-dim leading-relaxed mb-4 line-clamp-2">{study.summary}</p>
                                    {metrics.length > 0 && (
                                        <div className="flex gap-4 mb-4">
                                            {metrics.map((m) => (
                                                <div key={m.label} className="text-center">
                                                    <div className="text-lg font-extrabold text-foreground">{m.value}</div>
                                                    <div className="text-[9px] text-dimmer uppercase tracking-wider">{m.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-highlight transition-colors">
                                        View Case Study <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="text-center">
                    <Link href="/case-studies">
                        <Button variant="outline">
                            View All Public Sector Case Studies
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* 6) INSTITUTIONS SERVED */}
            <Section
                variant="muted"
                badge="Who We Serve"
                title="Target Public Institutions"
                subtitle="We serve the full spectrum of South African public sector entities."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {INSTITUTIONS.map((inst) => (
                        <div key={inst.label} className="p-6 rounded-2xl bg-subtle border border-subtle flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                <inst.icon className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-foreground mb-1">{inst.label}</h3>
                                <p className="text-sm text-muted leading-relaxed">{inst.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 7) FAQs */}
            <Section
                variant="default"
                badge="FAQ"
                title="Public Sector Asset Management FAQs"
                subtitle="Common questions from government entities and public institutions."
            >
                <div className="max-w-3xl mx-auto">
                    <FAQAccordion faqs={PUBLIC_FAQS} />
                </div>
            </Section>

            {/* 8) CTA */}
            <Section variant="muted" spacing="lg" className="text-center">
                <BGPattern variant="diagonal-stripes" mask="fade-edges" size={16} />
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
                        Ready to Achieve Unqualified Audit Outcomes?
                    </h2>
                    <p className="text-lg text-muted mb-10 leading-relaxed max-w-xl mx-auto">
                        Join 20+ public sector institutions that trust Synergy Evolution to deliver audit-ready compliance across all 9 provinces.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/booking">
                            <Button size="lg" className="px-10 bg-accent hover:bg-highlight text-white border-0">
                                Book a Strategic Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/contact-us">
                            <Button variant="outline" size="lg" className="px-10">
                                Contact Us
                                <Phone className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

        </main>
    );
}
