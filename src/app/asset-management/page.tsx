import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowRight,
    FileCheck,
    Search,
    Database,
    Settings,
    BarChart,
    ShieldAlert,
    CheckCircle2,
    Laptop,
    Users,
    MapPin,
    TrendingUp,
    Shield,
    Activity,
    BookOpen
} from "lucide-react";
import HeroParticles from "@/components/hero/HeroParticles";
import { BGPattern } from "@/components/ui/bg-pattern";
import { RetroGrid } from "@/components/ui/retro-grid";

export const metadata: Metadata = {
    title: "Asset Management Platform & Services | Synergy Evolution",
    description: "Enterprise-grade asset management for public and private sectors. Discover our platform for physical verification, FAR reconciliation, and audit-ready reporting.",
};

// --- STATIC CONTENT ARRAYS ---

const TRUST_STRIP = [
    "Audit-ready reporting",
    "Lifecycle tracking",
    "Role-based access control",
    "Asset verification workflows",
    "Deployment + training included",
    "Built for accountability"
];

const PAIN_POINTS = [
    "Missing, incomplete, or ghost assets",
    "Inconsistent asset tagging and tracking",
    "Unverified far-flung locations",
    "Recurring negative audit findings",
    "Reliance on error-prone manual spreadsheets",
    "Painfully slow, manual reconciliation processes"
];

const CORE_FEATURES = [
    { title: "Centralized Asset Register", description: "A single source of truth for all physical and digital assets.", icon: Database },
    { title: "Location Hierarchy", description: "Track assets across multiple sites, buildings, and exact rooms.", icon: MapPin },
    { title: "Custodian Assignment", description: "Hold specific individuals or departments accountable for assets.", icon: Users },
    { title: "Digital Attachments", description: "Store invoices, warranties, and photos directly on the asset profile.", icon: FileCheck },
    { title: "Lifecycle Management", description: "Track condition, depreciation status, and disposal schedules.", icon: Activity },
    { title: "Mobile Verification", description: "Conduct rapid audits using barcode/QR scanners in the field.", icon: Search },
    { title: "Custom Reporting", description: "Export audit-friendly reports aligned with GRAP/PFMA/GAAP.", icon: BarChart },
    { title: "Role-Based Access", description: "Granular permissions for viewing, editing, or approving asset changes.", icon: Shield }
];

const PROCESS_STEPS = [
    { step: 1, title: "Discovery & Requirements", description: "We analyze your current FAR state, audit history, and reporting needs." },
    { step: 2, title: "Data Audit & Migration Plan", description: "Cleansing legacy data (spreadsheets/old ERPs) for clean imports." },
    { step: 3, title: "System Config & Access Roles", description: "Deploying the platform mapped to your organizational structure." },
    { step: 4, title: "Verification Workflow & Training", description: "Equipping your team (or ours) with scanners and SOPs for the floor sweep." },
    { step: 5, title: "Reporting & Support", description: "Generating the final reconciled FAR and providing continuous platform support." }
];

const FAQS = [
    { q: "What is an asset register?", a: "A centralized database tracking the financial value, physical location, condition, and custodian of every asset your organization owns." },
    { q: "Can you migrate from Excel?", a: "Yes. Our onboarding team handles data cleansing and mass imports from legacy spreadsheets or old ERP systems." },
    { q: "How long does implementation take?", a: "Software deployment takes days. Full physical verification depends on asset volume, typically ranging from 4 to 12 weeks for large institutions." },
    { q: "Do you support multiple sites/locations?", a: "Absolutely. The platform uses a nested hierarchy (Region > Site > Building > Room), perfect for national departments or enterprise branches." },
    { q: "Can different roles have different access?", a: "Yes. You can restrict read/write access by department, role, or seniority to maintain data integrity." },
    { q: "Is reporting audit-friendly?", a: "Our reporting engine is specifically designed to satisfy the rigorous demands of the Auditor-General (AG) and private statutory auditors." },
    { q: "Do you provide training?", a: "We provide comprehensive on-site or remote training, complete with Standard Operating Procedures (SOPs) for your staff." },
    { q: "What industries do you serve?", a: "We specialize in high-volume, highly regulated environments: Municipalities, State-Owned Entities (SOEs), Healthcare, Universities, and Corporate Enterprises." }
];

// MOCK DATA: Teasers for the Case Studies section
const CASE_STUDY_TEASERS = [
    { title: "National Department of Health", outcome: "1.2M Assets Reconciled • Unqualified Audit" },
    { title: "Major Regional Municipality", outcome: "Historical Discrepancies Resolved in 8 Weeks" }
];

export default function AssetManagementPillarPage() {
    return (
        <main>
            {/* =========================================
                1) HERO (PILLAR)
            ========================================== */}
            <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
                <div className="absolute inset-0 z-0 bg-background overflow-hidden">
                    <HeroParticles />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.05]">
                            Take Absolute Control of Your <br />
                            <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent italic drop-shadow-sm">Fixed Asset Register</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
                            Enterprise platform and specialized physical verification services. We align your operational floor with your financial book to deliver bulletproof, audit-ready asset management at scale.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                            <Link href="/booking">
                                <Button size="lg" className="w-full sm:w-auto px-8 py-4">
                                    Book a Consultation
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/case-studies">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 bg-surface/50 backdrop-blur-sm">
                                    View Case Studies
                                    <BarChart className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <p className="text-sm text-muted font-medium flex items-center justify-center gap-2">
                            <Shield className="w-4 h-4 text-accent" />
                            Institution-ready workflows • Audit-friendly reporting
                        </p>
                    </div>
                </Container>
            </section>

            {/* =========================================
                2) TRUST STRIP
            ========================================== */}
            <div className="bg-surface border-y border-border py-6 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted font-semibold text-sm md:text-base">
                        {TRUST_STRIP.map((point, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-highlight" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* =========================================
                3) THE PROBLEM
            ========================================== */}
            <Section variant="default">
                <BGPattern variant="dots" mask="fade-edges" size={20} />
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <ShieldAlert className="w-12 h-12 text-accent mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Why Asset Registers Fail Audits</h2>
                    <p className="text-xl text-muted leading-relaxed">
                        Organizations lose control of their assets due to institutional complexities, disconnected systems, and systemic process failures.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {PAIN_POINTS.map((pain, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-surface border border-border rounded-xl shadow-sm hover:border-accent/30 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                            <p className="text-foreground font-medium text-lg leading-snug">{pain}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* =========================================
                4) THE SOLUTION (Platform + Service)
            ========================================== */}
            <Section variant="muted" title="How Synergy Delivers Control">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">

                    {/* Platform */}
                    <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm flex flex-col h-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-10" />
                        <Laptop className="w-12 h-12 text-accent mb-6" />
                        <h3 className="text-3xl font-bold mb-4 text-foreground">A) The Platform (Software)</h3>
                        <p className="text-muted text-lg mb-8 leading-relaxed">
                            A secure, cloud-based Fixed Asset Register built specifically to bridge the gap between operational reality and financial compliance.
                        </p>
                        <ul className="space-y-4 mt-auto">
                            {["Asset register & centralized database", "Categories & multi-site locations", "Custodian assignment & tracking", "Attachments & document vault", "Status, condition & lifecycle tracking", "Verification & audit trail history", "Compliance reporting & export engine"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                                    <span className="text-foreground/80 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service */}
                    <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm flex flex-col h-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10" />
                        <Settings className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-3xl font-bold mb-4 text-foreground">B) The Service (Implementation)</h3>
                        <p className="text-muted text-lg mb-8 leading-relaxed">
                            We don&apos;t just hand you software. Our operational teams execute the heavy lifting required to establish an accurate baseline.
                        </p>
                        <ul className="space-y-4 mt-auto">
                            {["Project onboarding & planning", "Legacy data migration & cleansing", "Physical barcode/RFID tagging teams", "Staff training & change management", "Developing standard operating procedures (SOPs)", "Ongoing technical & operational support"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground/80 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </Section>

            {/* =========================================
                5) CORE FEATURES
            ========================================== */}
            <Section variant="default" title="Platform Features">
                <BGPattern variant="grid" mask="fade-y" size={28} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
                    {CORE_FEATURES.map((feature, i) => (
                        <div key={i} className="p-6 bg-surface border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <feature.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                            <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* =========================================
                6) HOW IT WORKS (Process Timeline)
            ========================================== */}
            <Section variant="muted" title="Implementation Process">
                <div className="max-w-4xl mx-auto mt-16 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-[27px] md:hidden top-0 bottom-0 w-0.5 bg-border" />

                    <div className="space-y-12">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className={`relative flex flex - col md: flex - row gap - 8 md: gap - 16 items - start ${i % 2 === 0 ? "md:flex-row-reverse" : ""} `}>
                                {/* Center Node */}
                                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-background border-4 border-surface rounded-full flex items-center justify-center -translate-x-[4px] md:-translate-x-1/2 z-10 shadow-sm">
                                    <span className="text-lg font-bold text-accent">{step.step}</span>
                                </div>

                                {/* Content Box */}
                                <div className="ml-16 md:ml-0 md:w-1/2 pl-0 md:pl-0 pt-3">
                                    <div className={`bg - card border border - border p - 6 rounded - 2xl shadow - sm ${i % 2 === 0 ? "md:mr-12" : "md:ml-12"} `}>
                                        <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                                        <p className="text-muted">{step.description}</p>
                                    </div>
                                </div>
                                {/* Empty Spacer for staggering */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* =========================================
                7) PUBLIC VS PRIVATE (Sector Fit)
            ========================================== */}
            <Section variant="default" title="Engineered for Your Reality">
                <BGPattern variant="diagonal-stripes" mask="fade-edges" size={16} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
                    {/* Public Sector */}
                    <div className="p-10 border-2 border-primary/20 bg-surface rounded-3xl">
                        <h2 className="text-3xl font-bold mb-4 text-primary">Public Sector Focus</h2>
                        <p className="text-lg text-muted mb-8 font-medium">Built to withstand the scrutiny of the Auditor-General.</p>
                        <ul className="space-y-4 text-foreground">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary opacity-70" /> FAR-friendly compliance workflows</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary opacity-70" /> Unbundled infrastructure asset tracking</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary opacity-70" /> Strict audit trails for accountability</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary opacity-70" /> Alignment with GRAP & PFMA/MFMA</li>
                        </ul>
                    </div>

                    {/* Private Sector */}
                    <div className="p-10 border-2 border-accent/20 bg-surface rounded-3xl">
                        <h2 className="text-3xl font-bold mb-4 text-accent">Private Sector Focus</h2>
                        <p className="text-lg text-muted mb-8 font-medium">Designed to optimize utility and stop operational leaks.</p>
                        <ul className="space-y-4 text-foreground">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent opacity-70" /> Prevent asset loss and theft</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent opacity-70" /> Improve operational visibility across branches</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent opacity-70" /> Control capital expenditure overlaps</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent opacity-70" /> Streamline insurance & warranty claims</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* =========================================
                8) OUTCOMES / RESULTS (KPIs)
            ========================================== */}
            <Section variant="inverse">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <TrendingUp className="w-12 h-12 text-highlight mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground-inverse">Measurable Outcomes</h2>
                    <p className="text-xl text-foreground-inverse/80">Transforming your asset register from a liability into a compliant, strategic advantage.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {["Reduce time spent reconciling assets by replacing manual spreadsheet merging with automated imports.", "Improve audit readiness with unalterable history logs and one-click compliance reports.", "Increase visibility across all sites, knowing exactly what assets sit in which offices.", "Standardize registers across departments, eliminating siloed data practices.", "Faster reporting for leadership to make informed Capex decisions without guesswork.", "Empower custodians with clear digital accountability profiles."].map((outcome, i) => (
                        <div key={i} className="p-8 bg-surface-inverse border border-foreground-inverse/10 rounded-2xl flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-highlight shrink-0 mt-1" />
                            <p className="text-foreground-inverse text-lg leading-relaxed">{outcome}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* =========================================
                9) CASE STUDY TEASER
            ========================================== */}
            <Section variant="default" className="border-b border-border">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 max-w-6xl mx-auto gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <BookOpen className="text-accent" />
                            Success Stories
                        </h2>
                    </div>
                    <Link href="/case-studies">
                        <Button variant="outline">
                            View All Case Studies
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {CASE_STUDY_TEASERS.map((teaser, i) => (
                        <div key={i} className="p-8 bg-surface border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between items-start cursor-pointer group">
                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{teaser.title}</h3>
                            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full">
                                {teaser.outcome}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* =========================================
                10) FAQ
            ========================================== */}
            <Section variant="muted" title="Frequently Asked Questions">
                <div className="max-w-4xl mx-auto mt-12 grid gap-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="bg-card border border-border rounded-xl p-6">
                            <h4 className="text-lg font-bold text-foreground mb-2 flex items-start gap-3">
                                <span className="text-accent">Q.</span>
                                {faq.q}
                            </h4>
                            <p className="text-muted leading-relaxed flex items-start gap-3 pl-8">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* =========================================
                11) FINAL CTA
            ========================================== */}
            <Section variant="default" className="text-center py-24 md:py-32">
                <RetroGrid className="opacity-20" />
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-8 text-foreground tracking-tight">
                        Stop Failing Audits Because of Bad Asset Data
                    </h2>
                    <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
                        Speak to our specialists about securing a comprehensive asset management platform tailored to your statutory requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/booking">
                            <Button size="lg" className="w-full sm:w-auto px-10 py-5 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform">
                                Book a Consultation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/contact-us">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-5 text-lg">
                                Talk to Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
