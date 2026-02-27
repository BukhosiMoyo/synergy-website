import { notFound } from "next/navigation";
import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Target, Lightbulb, Box, CheckCircle2, Banknote, Boxes, Clock, Globe } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

type PageProps = {
    params: Promise<{ slug: string }>;
};

// Enable Next.js to statically generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find(s => s.slug === slug);
    if (!study) return { title: "Case Study Not Found | Synergy Evolution" };

    return {
        title: `${study.title} Case Study | Synergy Evolution`,
        description: study.summary,
    };
}

// Generate static params for SSG
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

    return (
        <main className="bg-background pt-24 pb-16 min-h-screen">

            {/* 1) Title + Tags / Back Link */}
            <Section variant="default" className="pt-8 pb-12 border-b border-border">
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

            {/* 2) PROJECT METRICS STRIP */}
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

            <Container className="max-w-4xl py-16">
                <div className="space-y-16">

                    {/* 3) Challenge */}
                    <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                        <div className="flex items-start gap-3">
                            <Target className="w-6 h-6 text-accent shrink-0 mt-1" />
                            <h2 className="text-2xl font-bold text-foreground">The Challenge</h2>
                        </div>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-muted leading-relaxed">
                            <p>
                                The client faced significant operational hurdles rooted in disconnected legacy systems and inconsistent physical tracking practices. This lack of centralised visibility led to compounded discrepancies over time, exposing the organisation to heightened compliance risks and delaying strategic capital expenditure decisions.
                            </p>
                        </div>
                    </div>

                    {/* 4) Approach */}
                    <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                        <div className="flex items-start gap-3">
                            <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <h2 className="text-2xl font-bold text-foreground">Our Approach</h2>
                        </div>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-muted leading-relaxed">
                            <p>
                                Synergy deployed a multi-disciplinary team to aggressively bridge the gap between their financial baseline and operational reality. We bypassed theoretical frameworks, immediately mobilising field teams to establish an accurate physical baseline while simultaneously architecting a resilient digital reporting structure.
                            </p>
                        </div>
                    </div>

                    {/* 5) Outcome & What We Delivered */}
                    <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-12">
                        <div className="flex items-start gap-3">
                            <Box className="w-6 h-6 text-highlight shrink-0 mt-1" />
                            <h2 className="text-2xl font-bold text-foreground">The Outcome</h2>
                        </div>
                        <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                            <h3 className="text-xl font-bold text-foreground mb-6">What We Delivered:</h3>
                            <ul className="space-y-4">
                                {study.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                                        <span className="text-foreground font-medium leading-relaxed">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </Container>

            {/* 6) CTA BLOCK */}
            <Section variant="muted" className="text-center py-20 mt-8 border-t border-border">
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
                    </div>
                </div>
            </Section>

        </main>
    );
}
