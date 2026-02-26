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
    ScrollText,
    Wrench,
    Factory,
    Truck,
    UtensilsCrossed,
    Building2,
    Landmark,
    HardHat,
    CheckCircle2,
    Boxes,
    Banknote,
    TrendingUp,
    Shield,
    ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Private Sector Asset Management | Operational Control & IFRS Compliance",
    description: "Asset lifecycle optimisation for enterprise corporations, manufacturers, and multi-branch businesses. Improving operational control, financial reporting accuracy, and internal audit confidence with IFRS-aligned solutions.",
};

const PRIVATE_SERVICES = [
    {
        title: "Asset Register Optimisation",
        description: "Enterprise data clean-up and classification to align physical asset reality with financial depreciation records and IFRS requirements.",
        icon: <FileCheck2 className="w-5 h-5" />,
        href: "/solutions/fixed-asset-management",
    },
    {
        title: "Multi-Branch Verification & Tagging",
        description: "Physical verification across multiple locations with barcode and RFID tagging, condition assessment, and geo-evidence capture.",
        icon: <ScanSearch className="w-5 h-5" />,
        href: "/solutions/asset-verification",
    },
    {
        title: "Asset Lifecycle Strategy",
        description: "Procurement alignment and disposal processes to optimise capital expenditure, improve operational visibility, and extend asset useful life.",
        icon: <ScrollText className="w-5 h-5" />,
        href: "/solutions/lifecycle-custodian-tracking",
    },
    {
        title: "System Integration",
        description: "Aligning asset data with ERP and accounting systems for automated, real-time reporting and seamless integration with SAP, Sage, or Oracle.",
        icon: <Monitor className="w-5 h-5" />,
        href: "/solutions/system-implementation-training",
    },
    {
        title: "Governance Frameworks",
        description: "Developing internal asset policies and control frameworks to enhance operational performance, satisfy auditors, and support board-level reporting.",
        icon: <Wrench className="w-5 h-5" />,
        href: "/solutions/compliance-audit-reporting",
    },
];

const privateCaseStudies = caseStudies.filter(
    (cs) => cs.sector === "Private"
);

const INDUSTRIES = [
    { label: "Manufacturing", description: "Production lines, machinery, and plant equipment across multiple facilities", icon: Factory },
    { label: "FMCG & Consumer Goods", description: "Fast-moving consumer goods production and distribution assets", icon: UtensilsCrossed },
    { label: "Transport & Logistics", description: "Fleet management, depot equipment, and distribution infrastructure", icon: Truck },
    { label: "Financial Services", description: "Branch assets, IT infrastructure, and office equipment portfolios", icon: Landmark },
    { label: "Property & Real Estate", description: "Commercial property portfolios, infrastructure, and building components", icon: Building2 },
    { label: "Construction & Mining", description: "Heavy machinery, equipment registers, and mobile asset tracking", icon: HardHat },
];

const PRIVATE_FAQS = [
    {
        question: "How does asset management improve our financial reporting?",
        answer: "Accurate asset registers ensure your depreciation schedules, impairment assessments, and disposal calculations are correct. This directly impacts your income statement and balance sheet accuracy. Under IFRS, component-level asset tracking is required — our services ensure every asset is properly classified, measured, and disclosed.",
    },
    {
        question: "Can you integrate with our existing ERP system?",
        answer: "Yes. We have experience integrating with SAP, Sage, Oracle, and Microsoft Dynamics. Our asset management platform syncs verification data, asset movements, and disposal records directly with your ERP — eliminating manual data entry and reducing reconciliation errors.",
    },
    {
        question: "What ROI can we expect from a full asset verification?",
        answer: "Clients typically see return on investment within 6-12 months through: identification of ghost assets (reducing insurance premiums), recovery of unrecorded assets, optimised maintenance scheduling, and improved capital allocation. Danone and Kellogg's both achieved measurable operational savings.",
    },
    {
        question: "How do you handle multi-branch or multi-site operations?",
        answer: "We deploy coordinated teams across all your locations simultaneously or in phases, depending on your preference. Each site gets a dedicated team with real-time progress dashboards. Our cloud-based platform provides head-office visibility across all branches through a single centralised interface.",
    },
    {
        question: "What happens after the initial verification project?",
        answer: "We offer ongoing maintenance subscriptions that include: annual physical re-verification, monthly register updates for acquisitions/disposals/transfers, system support and training, and quarterly compliance reporting. This ensures your register stays accurate year-round — not just at audit time.",
    },
];

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Audit & Analyse",
        description: "We review your current asset register, ERP data, and depreciation schedules to identify discrepancies, ghost assets, and classification gaps against IFRS requirements.",
    },
    {
        step: "02",
        title: "Verify & Optimise",
        description: "Field teams verify assets across all branches with barcode tagging and condition grading. Simultaneously, we optimise your register structure for accurate lifecycle tracking and depreciation.",
    },
    {
        step: "03",
        title: "Integrate & Sustain",
        description: "We integrate verified data with your ERP, deploy real-time dashboards, and establish ongoing maintenance processes — ensuring accuracy and compliance beyond the project window.",
    },
];

export default function PrivateSectorPage() {
    return (
        <main className="bg-background">

            {/* 1) HERO */}
            <Section variant="default" spacing="lg" className="pt-32 pb-16">
                <BGPattern variant="dots" mask="fade-edges" size={20} />
                <div className="max-w-4xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs text-accent font-semibold uppercase tracking-widest mb-6">
                        <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                        Private Sector Excellence
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05] text-foreground">
                        Strategic{" "}
                        <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                            Asset Lifecycle
                        </span>{" "}
                        Visibility
                    </h1>
                    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10">
                        Improving operational control and financial reporting accuracy for multi-branch corporations, manufacturers, and asset-intensive businesses — aligned to IFRS standards.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-14">
                        <Link href="/booking">
                            <Button size="lg" className="px-8 bg-accent hover:bg-highlight text-white border-0">
                                Review Your Asset Strategy
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button variant="outline" size="lg" className="px-8">
                                View Private Sector Results
                            </Button>
                        </Link>
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center gap-8 md:gap-12">
                        {[
                            { value: "3+", label: "Enterprise Clients" },
                            { value: "IFRS", label: "Aligned" },
                            { value: "Multi-Branch", label: "Capability" },
                            { value: "ERP", label: "Integrated" },
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
                            { icon: Boxes, value: "Full Lifecycle", label: "Asset Tracking", desc: "From procurement to disposal" },
                            { icon: Shield, value: "IFRS", label: "Compliance", desc: "International reporting standards" },
                            { icon: TrendingUp, value: "ROI", label: "Within 12 Months", desc: "Through operational savings" },
                            { icon: Banknote, value: "CAPEX", label: "Optimisation", desc: "Better capital allocation" },
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
                badge="Enterprise Services"
                title="Enterprise-Focused Asset Management"
                subtitle="Our private sector approach focuses on visibility, capital efficiency, and internal control — ensuring your asset base supports operational growth."
            >
                <BGPattern variant="grid" mask="fade-y" size={28} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PRIVATE_SERVICES.map((service) => (
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
                title="How We Deliver Operational Visibility"
                subtitle="A structured approach refined across enterprise engagements with Danone, Kellogg's, and KTVR."
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
                title="Private Sector Case Studies"
                subtitle="Trusted by leading South African enterprises for asset management excellence."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    {privateCaseStudies.map((study) => (
                        <Link
                            key={study.slug}
                            href={`/case-studies/${study.slug}`}
                            className="group block rounded-2xl bg-subtle border border-subtle overflow-hidden card-hover-glow"
                        >
                            <div className="h-1 w-full bg-gradient-to-r from-accent to-highlight" />
                            <div className="p-7">
                                <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-subtle bg-accent/5 text-accent mb-4 inline-block">
                                    {study.serviceType}
                                </span>
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-sm text-dim leading-relaxed mb-4 line-clamp-3">{study.summary}</p>
                                <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-highlight transition-colors">
                                    View Case Study <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center">
                    <Link href="/case-studies">
                        <Button variant="outline">
                            View All Case Studies
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* 6) INDUSTRIES SERVED */}
            <Section
                variant="muted"
                badge="Industries"
                title="Industries We Serve"
                subtitle="From manufacturing floors to corporate head offices — we manage assets across every private sector vertical."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {INDUSTRIES.map((ind) => (
                        <div key={ind.label} className="p-6 rounded-2xl bg-subtle border border-subtle flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                <ind.icon className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-foreground mb-1">{ind.label}</h3>
                                <p className="text-sm text-muted leading-relaxed">{ind.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 7) FAQs */}
            <Section
                variant="default"
                badge="FAQ"
                title="Private Sector Asset Management FAQs"
                subtitle="Common questions from enterprise and corporate asset managers."
            >
                <div className="max-w-3xl mx-auto">
                    <FAQAccordion faqs={PRIVATE_FAQS} />
                </div>
            </Section>

            {/* 8) CTA */}
            <Section variant="muted" spacing="lg" className="text-center">
                <BGPattern variant="diagonal-stripes" mask="fade-edges" size={16} />
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
                        Take Control of Your Asset Portfolio
                    </h2>
                    <p className="text-lg text-muted mb-10 leading-relaxed max-w-xl mx-auto">
                        Join Danone, Kellogg&apos;s, and KTVR — enterprises that trust Synergy Evolution for operational asset visibility and IFRS compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/booking">
                            <Button size="lg" className="px-10 bg-accent hover:bg-highlight text-white border-0">
                                Book a Consultation
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
