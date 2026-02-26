import { notFound } from "next/navigation";
import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldAlert, CheckCircle2, ChevronRight, Building2, Landmark, ShieldCheck, Star, HelpCircle } from "lucide-react";
import { solutions } from "@/data/solutions";
import { caseStudies } from "@/data/case-studies";
import { BGPattern } from "@/components/ui/bg-pattern";
import FAQAccordion from "@/components/sections/FAQAccordion";

// Enable Next.js to statically generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const solution = solutions.find(s => s.slug === params.slug);
    if (!solution) return { title: "Solution Not Found | Synergy Evolution" };

    return {
        title: `${solution.title} Solution | Synergy Evolution`,
        description: solution.summary,
    };
}

// Generate static params for SSG
export async function generateStaticParams() {
    return solutions.map((solution) => ({
        slug: solution.slug,
    }));
}

export default function SolutionDetail({ params }: { params: { slug: string } }) {
    const solution = solutions.find(s => s.slug === params.slug);

    if (!solution) {
        notFound();
    }

    // Filter relevant case studies
    const relatedStudies = caseStudies
        .filter(cs => solution.audience === "Both" || cs.sector === solution.audience)
        .slice(0, 2);

    return (
        <main className="bg-background pt-24 pb-16 min-h-screen">

            {/* 1) HERO */}
            <Section variant="default" className="pt-8 pb-16 border-b border-border">
                <div className="max-w-4xl max-md:text-center">
                    <Link href="/solutions" className="inline-flex items-center text-sm font-semibold text-muted hover:text-primary transition-colors mb-8 max-md:mx-auto">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Solutions
                    </Link>

                    <div className="mb-6 max-md:mx-auto">
                        <span className={`inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wider rounded
                            ${solution.audience === 'Public' ? 'bg-highlight/10 text-highlight' :
                                solution.audience === 'Private' ? 'bg-accent/10 text-accent' :
                                    'bg-primary/10 text-primary'}`}>
                            {solution.audience} Sector Fit
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                        {solution.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted leading-relaxed font-medium">
                        {solution.summary}
                    </p>
                </div>
            </Section>

            {/* 2) LONG DESCRIPTION (if available) */}
            {solution.longDescription && solution.longDescription.length > 0 && (
                <Section variant="muted" className="py-16">
                    <BGPattern variant="dots" mask="fade-edges" size={20} />
                    <div className="max-w-3xl mx-auto space-y-6">
                        {solution.longDescription.map((paragraph, idx) => (
                            <p key={idx} className="text-lg text-muted leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </Section>
            )}

            {/* 3) THE PROBLEM THIS SOLVES */}
            <Section variant="inverse" className="py-20 border-b border-border/20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-10 max-md:justify-center">
                        <ShieldAlert className="w-8 h-8 text-highlight" />
                        <h2 className="text-3xl font-bold text-foreground-inverse">The Problem This Solves</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        {solution.problemsSolved.map((problem, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-surface-inverse rounded-2xl border border-white/5">
                                <span className="w-8 h-8 rounded-full bg-highlight/10 text-highlight flex items-center justify-center shrink-0 font-bold">
                                    {idx + 1}
                                </span>
                                <p className="text-foreground-inverse/90 font-medium leading-relaxed mt-1">
                                    {problem}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4) KEY CAPABILITIES & 5) HOW IT'S IMPLEMENTED */}
            <Container className="max-w-6xl py-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* LEFT: Capabilities */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Key Capabilities</h2>
                            <p className="text-muted text-lg">The core engine powering this solution.</p>
                        </div>
                        <ul className="space-y-6">
                            {solution.keyFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-6 bg-surface border border-border rounded-2xl shadow-sm hover:border-primary/50 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground font-semibold text-lg leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: Implementation */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-foreground mb-4">How It&apos;s Implemented</h2>
                            <p className="text-muted text-lg">Our structured operational deployment.</p>
                        </div>
                        <div className="relative pl-8 md:pl-0">
                            {/* Vertical Line */}
                            <div className="absolute left-10 top-2 bottom-2 w-0.5 bg-border hidden md:block" />

                            <ul className="space-y-8 relative">
                                {solution.implementationHighlights.map((step, idx) => (
                                    <li key={idx} className="flex flex-col md:flex-row items-start gap-6 relative">
                                        <div className="hidden md:flex w-20 shrink-0 flex-col items-center z-10">
                                            <div className="w-10 h-10 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold">
                                                {idx + 1}
                                            </div>
                                        </div>
                                        <div className="md:pt-1">
                                            <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-3">
                                                <span className="md:hidden w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                                                    {idx + 1}
                                                </span>
                                                Phase {idx + 1}
                                            </h4>
                                            <p className="text-muted leading-relaxed">
                                                {step}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </Container>

            {/* 6) BENEFITS (if available) */}
            {solution.benefits && solution.benefits.length > 0 && (
                <Section variant="muted" className="py-20 border-y border-border">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-10 max-md:justify-center">
                            <Star className="w-8 h-8 text-accent" />
                            <h2 className="text-3xl font-bold text-foreground">Why This Matters</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {solution.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl hover:border-accent/30 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                                    <p className="text-foreground font-medium leading-relaxed">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* 7) SECTOR FIT */}
            <Section variant="default" className="py-20 border-b border-border">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Sector Application</h2>
                    <p className="text-lg text-muted">How this solution maps to industry-specific demands.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">

                    {(solution.audience === "Both" || solution.audience === "Public") && (
                        <div className="flex-1 bg-surface border border-border rounded-3xl p-8 shadow-sm">
                            <div className="w-12 h-12 bg-highlight/10 rounded-xl flex items-center justify-center mb-6">
                                <Landmark className="w-6 h-6 text-highlight" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Public Sector Operations</h3>
                            <p className="text-muted leading-relaxed">
                                Strictly aligned with mSCOA definitions and GRAP compliance standards to ensure auditor-general readiness without relying on chaotic manual spreadsheets.
                            </p>
                        </div>
                    )}

                    {(solution.audience === "Both" || solution.audience === "Private") && (
                        <div className="flex-1 bg-surface border border-border rounded-3xl p-8 shadow-sm">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                                <Building2 className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Private Sector Operations</h3>
                            <p className="text-muted leading-relaxed">
                                Designed to stop uncontrolled capital expenditure, map cross-branch transfers securely, and lock down physical assets to named employee custodians.
                            </p>
                        </div>
                    )}
                </div>
            </Section>

            {/* 8) FAQ SECTION (if available) */}
            {solution.faqs && solution.faqs.length > 0 && (
                <Section variant="muted" className="py-20">
                    <BGPattern variant="grid" mask="fade-edges" size={30} />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-10 max-md:justify-center">
                            <HelpCircle className="w-8 h-8 text-accent" />
                            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                        </div>
                        <FAQAccordion faqs={solution.faqs} />
                    </div>
                </Section>
            )}

            {/* 9) RELATED CASE STUDIES */}
            {relatedStudies.length > 0 && (
                <Section variant="default" className="py-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-2">Proof of Work</h2>
                                <p className="text-muted text-lg">See this solution in action.</p>
                            </div>
                            <Link href="/case-studies" className="hidden sm:inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                                View all <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {relatedStudies.map((study) => (
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    key={study.slug}
                                    className="group bg-surface border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col"
                                >
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-bold uppercase rounded">{study.sector}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {study.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-primary group-hover:text-accent">
                                        Read case study <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6 sm:hidden">
                            <Link href="/case-studies">
                                <Button variant="outline" className="w-full">View all case studies</Button>
                            </Link>
                        </div>
                    </div>
                </Section>
            )}

            {/* 10) FINAL CTA */}
            <Section variant="default" className="text-center py-20 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">Secure your operational compliance.</h2>
                    <p className="text-lg text-muted mb-10">
                        Consult with our specialists to see how this solution fits your exact hierarchical structure.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/booking">
                            <Button size="lg" className="w-full sm:w-auto px-10">
                                Book a Consultation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/asset-management">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10">
                                Explore Platform
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

        </main>
    );
}
