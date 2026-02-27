import { notFound } from "next/navigation";
import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, ArrowRight, Target, Lightbulb, Box, CheckCircle2,
    Banknote, Boxes, Clock, Globe, Building2, MapPin, Quote,
    ChevronRight, Wrench, TrendingUp
} from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { BGPattern } from "@/components/ui/bg-pattern";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find(s => s.slug === slug);
    if (!study) return { title: "Case Study Not Found | Synergy Evolution" };

    return {
        title: `${study.title} Case Study | Synergy Evolution`,
        description: study.summary,
    };
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export default async function CaseStudyDetail({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies.find(s => s.slug === slug);

    if (!study) {
        notFound();
    }

    const metrics = [
        study.contractValue && { label: "Contract Value", value: study.contractValue, icon: Banknote },
        study.assetCount && { label: "Assets Managed", value: study.assetCount, icon: Boxes },
        study.duration && { label: "Duration", value: study.duration, icon: Clock },
        study.executionLevel && { label: "Execution Level", value: study.executionLevel, icon: Globe },
    ].filter(Boolean) as { label: string; value: string; icon: typeof Banknote }[];

    // Find related case studies (same sector, different slug)
    const relatedStudies = caseStudies
        .filter(cs => cs.sector === study.sector && cs.slug !== study.slug)
        .slice(0, 3);

    return (
        <main className="bg-background pt-24 pb-16 min-h-screen">

            {/* ── 1) HERO ── */}
            <Section variant="default" className="pt-8 pb-12 border-b border-border">
                <BGPattern variant="dots" mask="fade-edges" size={20} />
                <div className="max-w-4xl max-md:text-center">
                    <Link href="/case-studies" className="inline-flex items-center text-sm font-semibold text-muted hover:text-primary transition-colors mb-8 max-md:mx-auto">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Case Studies
                    </Link>

                    <div className="flex flex-wrap gap-3 mb-6 max-md:justify-center">
                        <span className="px-3 py-1 bg-accent/10 text-accent font-bold uppercase tracking-wider text-xs rounded-full">
                            {study.sector}
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary font-bold uppercase tracking-wider text-xs rounded-full">
                            {study.serviceType}
                        </span>
                        {study.executionLevel && (
                            <span className="px-3 py-1 bg-surface border border-border font-bold text-muted text-xs rounded-full">
                                {study.executionLevel}
                            </span>
                        )}
                        {study.auditResult && (
                            <span className="px-3 py-1 bg-highlight/10 text-highlight font-bold text-xs rounded-full">
                                ✓ {study.auditResult}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                        {study.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted leading-relaxed font-medium">
                        {study.summary}
                    </p>
                </div>
            </Section>

            {/* ── 2) METRICS STRIP ── */}
            {metrics.length > 0 && (
                <div className="bg-surface border-b border-border py-8">
                    <Container>
                        <div className={`grid gap-6 max-w-4xl mx-auto ${metrics.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
                            metrics.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                                'grid-cols-1 md:grid-cols-2'
                            }`}>
                            {metrics.map((metric) => (
                                <div key={metric.label} className="text-center">
                                    <metric.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                                    <p className="text-2xl md:text-3xl font-extrabold text-foreground">
                                        {metric.value}
                                    </p>
                                    <p className="text-xs text-muted font-medium mt-1 uppercase tracking-wider">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            )}

            {/* ── 3) INTRODUCTION & CLIENT BACKGROUND ── */}
            <Container className="max-w-4xl py-16">
                <div className="space-y-16">

                    {/* Introduction */}
                    {study.introduction && (
                        <div>
                            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                                {study.introduction}
                            </p>
                        </div>
                    )}

                    {/* Client Background + Scope */}
                    {(study.clientBackground || study.scope) && (
                        <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                            <div className="flex items-start gap-3">
                                <Building2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <h2 className="text-2xl font-bold text-foreground">The Client</h2>
                            </div>
                            <div className="space-y-4">
                                {study.clientBackground && (
                                    <p className="text-muted leading-relaxed text-lg">
                                        {study.clientBackground}
                                    </p>
                                )}
                                {study.scope && (
                                    <div className="flex items-start gap-3 mt-4 p-4 bg-surface border border-border rounded-xl">
                                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Project Scope</p>
                                            <p className="text-muted text-sm leading-relaxed">{study.scope}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* ── 4) CHALLENGES ── */}
                    {study.challenges && study.challenges.length > 0 && (
                        <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                            <div className="flex items-start gap-3">
                                <Target className="w-6 h-6 text-accent shrink-0 mt-1" />
                                <h2 className="text-2xl font-bold text-foreground">Challenges</h2>
                            </div>
                            <div className="space-y-4">
                                {study.challenges.map((challenge, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 bg-surface border border-border rounded-xl">
                                        <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 font-bold text-sm">
                                            {idx + 1}
                                        </span>
                                        <p className="text-muted leading-relaxed mt-1">{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── 5) SOLUTION IMPLEMENTED ── */}
                    {study.solutionImplemented && study.solutionImplemented.length > 0 && (
                        <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                            <div className="flex items-start gap-3">
                                <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <h2 className="text-2xl font-bold text-foreground">Solution</h2>
                            </div>
                            <div className="space-y-4">
                                {study.solutionImplemented.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <p className="text-muted leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── 6) IMPLEMENTATION PROCESS ── */}
                    {study.implementationProcess && study.implementationProcess.length > 0 && (
                        <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                            <div className="flex items-start gap-3">
                                <Wrench className="w-6 h-6 text-highlight shrink-0 mt-1" />
                                <h2 className="text-2xl font-bold text-foreground">Process</h2>
                            </div>
                            <div className="relative pl-0 md:pl-6">
                                {/* Vertical timeline line */}
                                <div className="hidden md:block absolute left-0 top-4 bottom-4 w-0.5 bg-border" />
                                <div className="space-y-6">
                                    {study.implementationProcess.map((step, idx) => (
                                        <div key={idx} className="relative flex items-start gap-4">
                                            <div className="hidden md:flex absolute -left-6 w-3 h-3 rounded-full bg-highlight border-2 border-background mt-2 -translate-x-[4.5px]" />
                                            <div className="md:ml-4 p-5 bg-surface border border-border rounded-xl w-full hover:border-highlight/30 transition-colors">
                                                <p className="text-foreground font-medium leading-relaxed">{step}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── 7) RESULTS ── */}
                    {study.results && study.results.length > 0 && (
                        <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                            <div className="flex items-start gap-3">
                                <TrendingUp className="w-6 h-6 text-highlight shrink-0 mt-1" />
                                <h2 className="text-2xl font-bold text-foreground">Results</h2>
                            </div>
                            <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                                <ul className="space-y-4">
                                    {study.results.map((result, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                                            <span className="text-foreground font-medium leading-relaxed">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* ── 8) KEY DELIVERABLES ── */}
                    <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                        <div className="flex items-start gap-3">
                            <Box className="w-6 h-6 text-accent shrink-0 mt-1" />
                            <h2 className="text-2xl font-bold text-foreground">Deliverables</h2>
                        </div>
                        <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                            <ul className="space-y-4">
                                {study.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-foreground font-medium leading-relaxed">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </Container>

            {/* ── 9) TESTIMONIAL ── */}
            {study.testimonial && (
                <Section variant="muted" className="py-16 border-y border-border">
                    <div className="max-w-3xl mx-auto text-center">
                        <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
                        <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed italic mb-6">
                            &ldquo;{study.testimonial.quote}&rdquo;
                        </blockquote>
                        <div>
                            <p className="font-bold text-foreground">{study.testimonial.author}</p>
                            <p className="text-sm text-muted">{study.testimonial.role}</p>
                        </div>
                    </div>
                </Section>
            )}

            {/* ── 10) RELATED CASE STUDIES ── */}
            {relatedStudies.length > 0 && (
                <Section variant="default" className="py-20 border-b border-border">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-2">Related Projects</h2>
                                <p className="text-muted text-lg">More {study.sector.toLowerCase()} sector engagements.</p>
                            </div>
                            <Link href="/case-studies" className="hidden sm:inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                                View all <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedStudies.map((related) => (
                                <Link
                                    href={`/case-studies/${related.slug}`}
                                    key={related.slug}
                                    className="group bg-surface border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col"
                                >
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-bold uppercase rounded">{related.sector}</span>
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold uppercase rounded">{related.serviceType}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {related.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                        {related.summary}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-border flex items-center text-sm font-semibold text-primary group-hover:text-accent">
                                        Read case study <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* ── 11) CTA ── */}
            <Section variant="default" className="text-center py-20">
                <BGPattern variant="diagonal-stripes" mask="fade-edges" size={16} />
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">Ready to tackle your project?</h2>
                    <p className="text-lg text-muted mb-10">
                        Let&apos;s discuss how we can engineer a compliant, high-performance solution for your organisation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/booking">
                            <Button size="lg" className="w-full sm:w-auto px-10">
                                Book a Consultation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/solutions">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10">
                                View Solutions
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

        </main>
    );
}
