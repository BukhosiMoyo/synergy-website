import { notFound } from "next/navigation";
import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, ArrowRight, Target, Lightbulb, Box, CheckCircle2,
    Banknote, Boxes, Clock, Globe, Building2, MapPin, Quote,
    ChevronRight, Wrench, TrendingUp, BarChart3, ShieldCheck
} from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { BGPattern } from "@/components/ui/bg-pattern";
import { FadeIn } from "@/components/ui/fade-in";

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

    const relatedStudies = caseStudies
        .filter(cs => cs.sector === study.sector && cs.slug !== study.slug)
        .slice(0, 3);

    return (
        <main className="bg-background min-h-screen selection:bg-primary/20">

            {/* ── 1) PREMIUM HERO ── */}
            <section className="relative pt-36 pb-24 overflow-hidden border-b border-border/50">
                {/* Deep Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-accent/5 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <BGPattern variant="dots" mask="fade-edges" size={24} className="opacity-40" />

                <Container className="relative z-10 max-w-5xl">
                    <FadeIn delay={0.1}>
                        <Link href="/case-studies" className="inline-flex items-center text-sm font-semibold text-muted hover:text-primary transition-colors mb-8 group">
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Back to Case Studies
                        </Link>
                    </FadeIn>

                    <FadeIn delay={0.2} className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-wider text-xs rounded-full shadow-sm">
                            {study.sector}
                        </span>
                        <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-wider text-xs rounded-full shadow-sm">
                            {study.serviceType}
                        </span>
                        {study.auditResult && (
                            <span className="px-4 py-1.5 bg-highlight/10 border border-highlight/20 text-highlight font-bold text-xs rounded-full shadow-sm flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                {study.auditResult}
                            </span>
                        )}
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-foreground mb-8 leading-[1.1]">
                            {study.title}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-xl md:text-2xl text-muted leading-relaxed font-medium max-w-3xl border-l-4 border-primary pl-6">
                            {study.summary}
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* ── 2) DUAL COLUMN LAYOUT ── */}
            <Container className="max-w-7xl py-16 md:py-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* LEFT COLUMN: Sticky Sidebar for Metadata */}
                    <aside className="w-full lg:w-[320px] shrink-0 space-y-8 lg:sticky lg:top-32">

                        <FadeIn delay={0.1}>
                            <div className="bg-surface/50 backdrop-blur-md border border-border/60 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-accent" />
                                    Project Impact
                                </h3>

                                <div className="space-y-6">
                                    {metrics.map((metric, idx) => (
                                        <div key={metric.label} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                                                <metric.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted font-medium uppercase tracking-wider mb-1">
                                                    {metric.label}
                                                </p>
                                                <p className="text-lg font-bold text-foreground">
                                                    {metric.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {(study.clientBackground || study.scope) && (
                            <FadeIn delay={0.2}>
                                <div className="bg-surface/50 backdrop-blur-md border border-border/60 rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-accent" />
                                        Client Overview
                                    </h3>

                                    <div className="space-y-6">
                                        {study.clientBackground && (
                                            <div>
                                                <p className="text-sm text-muted font-medium uppercase tracking-wider mb-2">Background</p>
                                                <p className="text-sm text-foreground leading-relaxed">
                                                    {study.clientBackground}
                                                </p>
                                            </div>
                                        )}
                                        {study.scope && (
                                            <div className="pt-4 border-t border-border/50">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                    <p className="text-sm text-muted font-medium uppercase tracking-wider">Project Scope</p>
                                                </div>
                                                <p className="text-sm text-foreground leading-relaxed">
                                                    {study.scope}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                    </aside>

                    {/* RIGHT COLUMN: Narrative */}
                    <article className="flex-1 space-y-16 md:space-y-24 min-w-0">

                        {/* Introduction */}
                        {study.introduction && (
                            <FadeIn delay={0.3}>
                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                    <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                                        {study.introduction}
                                    </p>
                                </div>
                            </FadeIn>
                        )}

                        {/* Challenges */}
                        {study.challenges && study.challenges.length > 0 && (
                            <FadeIn>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                                            <Target className="w-6 h-6 text-accent" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {study.challenges.map((challenge, idx) => (
                                            <div key={idx} className="p-6 bg-surface border border-border/60 rounded-2xl hover:border-accent/30 transition-colors shadow-sm relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[100px] -z-10 group-hover:bg-accent/10 transition-colors" />
                                                <span className="text-3xl font-black text-border mb-4 block group-hover:text-accent/20 transition-colors">
                                                    0{idx + 1}
                                                </span>
                                                <p className="text-foreground/80 leading-relaxed font-medium">{challenge}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                        {/* Solution & Process mapped together if both exist */}
                        <div className="space-y-16">
                            {study.solutionImplemented && study.solutionImplemented.length > 0 && (
                                <FadeIn>
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                                <Lightbulb className="w-6 h-6 text-primary" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
                                        </div>
                                        <div className="bg-surface border border-border/60 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
                                            {/* Decorative shine */}
                                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                                            <ul className="space-y-6 relative z-10">
                                                {study.solutionImplemented.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-4">
                                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                                        </div>
                                                        <p className="text-lg text-foreground/90 leading-relaxed">{item}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </FadeIn>
                            )}

                            {/* Implementation Process */}
                            {study.implementationProcess && study.implementationProcess.length > 0 && (
                                <FadeIn>
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-highlight/10 flex items-center justify-center">
                                                <Wrench className="w-6 h-6 text-highlight" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-foreground">Execution Process</h2>
                                        </div>

                                        <div className="relative pl-6 md:pl-8">
                                            {/* Timeline track */}
                                            <div className="absolute left-0 top-3 bottom-6 w-0.5 bg-border/50 dark:bg-border/30 rounded-full" />

                                            <div className="space-y-8">
                                                {study.implementationProcess.map((step, idx) => (
                                                    <div key={idx} className="relative flex items-start">
                                                        {/* Timeline node */}
                                                        <div className="absolute -left-[30px] md:-left-[38px] w-4 h-4 rounded-full bg-background border-2 border-highlight mt-1.5 ring-4 ring-background" />

                                                        <div className="bg-surface border border-border/50 rounded-2xl p-6 w-full hover:border-highlight/30 hover:shadow-md transition-all">
                                                            <span className="text-xs font-bold text-highlight uppercase tracking-wider mb-2 block">Phase {idx + 1}</span>
                                                            <p className="text-foreground/90 font-medium leading-relaxed">{step}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            )}
                        </div>

                        {/* Results / Outcomes */}
                        {((study.results && study.results.length > 0) || (study.highlights && study.highlights.length > 0)) && (
                            <FadeIn>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-accent" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-foreground">Outcomes & Deliverables</h2>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {/* Results Block */}
                                        {study.results && study.results.length > 0 && (
                                            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 relative z-10">
                                                    <TrendingUp className="w-5 h-5 text-primary" /> Key Results
                                                </h3>
                                                <ul className="space-y-4 relative z-10">
                                                    {study.results.map((result, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                                                            <span className="text-foreground/80 font-medium leading-relaxed">{result}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Highlights Block */}
                                        {study.highlights && study.highlights.length > 0 && (
                                            <div className="bg-accent/5 border border-accent/20 rounded-3xl p-8 relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 relative z-10">
                                                    <Box className="w-5 h-5 text-accent" /> Core Deliverables
                                                </h3>
                                                <ul className="space-y-4 relative z-10">
                                                    {study.highlights.map((highlight, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2" />
                                                            <span className="text-foreground/80 font-medium leading-relaxed">{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                        {/* Testimonial */}
                        {study.testimonial && (
                            <FadeIn>
                                <div className="mt-12 bg-surface border border-border/80 rounded-[2rem] p-10 md:p-14 shadow-lg relative overflow-hidden text-center">
                                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary via-accent to-highlight" />
                                    <Quote className="w-16 h-16 text-border mx-auto mb-8 transform -scale-x-100" />
                                    <blockquote className="text-2xl md:text-3xl text-foreground font-bold leading-tight mb-8">
                                        &ldquo;{study.testimonial.quote}&rdquo;
                                    </blockquote>
                                    <div>
                                        <p className="text-lg font-black text-foreground">{study.testimonial.author}</p>
                                        <p className="text-primary font-medium">{study.testimonial.role}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                    </article>
                </div>
            </Container>

            {/* ── 3) RELATED CASE STUDIES ── */}
            {relatedStudies.length > 0 && (
                <Section className="py-24 border-y border-border/50 bg-surface/30">
                    <Container className="max-w-6xl">
                        <FadeIn>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Related Projects</h2>
                                    <p className="text-muted text-lg font-medium">More {study.sector.toLowerCase()} sector engagements powered by Synergy Evolution.</p>
                                </div>
                                <Link href="/case-studies" className="group hidden sm:inline-flex items-center text-primary font-bold hover:text-accent transition-colors bg-primary/5 hover:bg-primary/10 px-5 py-2.5 rounded-full">
                                    View All Case Studies <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedStudies.map((related, i) => (
                                <FadeIn key={related.slug} delay={0.1 * (i + 1)}>
                                    <Link
                                        href={`/case-studies/${related.slug}`}
                                        className="group bg-background border border-border/60 rounded-3xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />

                                        <div className="flex gap-2 mb-6">
                                            <span className="px-2.5 py-1 bg-accent/10 text-accent border border-accent/20 text-xs font-bold uppercase tracking-wider rounded-md">{related.sector}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                        <p className="text-muted text-base leading-relaxed mb-8 flex-grow line-clamp-3">
                                            {related.summary}
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-sm font-bold text-primary group-hover:text-accent transition-colors">
                                            Read Case Study
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transform group-hover:translate-x-2 transition-transform">
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>

                        <div className="mt-8 text-center sm:hidden">
                            <Link href="/case-studies" className="group inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                                View All Case Studies <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </Container>
                </Section>
            )}

            {/* ── 4) GLOBAL CTA ── */}
            <Section variant="default" className="text-center py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-accent/5 to-background pointer-events-none" />
                <BGPattern variant="diagonal-stripes" mask="fade-edges" size={40} className="opacity-30" />

                <Container className="max-w-3xl relative z-10">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground tracking-tight">Ready to tackle your project?</h2>
                        <p className="text-xl text-muted font-medium mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss how we can engineer a compliant, high-performance solution for your organisation's unique challenges.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/booking">
                                <Button size="lg" className="w-full sm:w-auto px-10 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                                    Book a Consultation
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/solutions">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 text-base font-bold border-2 hover:bg-surface">
                                    View Solutions
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

        </main>
    );
}
