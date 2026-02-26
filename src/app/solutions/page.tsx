import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Layers, Building2, Landmark, CheckCircle2, ShieldCheck, Database, FileSearch, Settings, BookOpen } from "lucide-react";
import { solutions } from "@/data/solutions";
import { BGPattern } from "@/components/ui/bg-pattern";
import { RetroGrid } from "@/components/ui/retro-grid";

export const metadata: Metadata = {
    title: "Solutions | Synergy Evolution",
    description: "Discover our comprehensive suite of solutions for Public and Private sector asset management, compliance reporting, and systemic oversight.",
};

export default function SolutionsHub() {
    return (
        <main className="bg-background pt-24 pb-16 min-h-screen">

            {/* 1) HERO */}
            <Section variant="default" className="pt-8 pb-12 border-b border-subtle">
                <BGPattern variant="dots" mask="fade-edges" size={20} />
                <div className="max-w-4xl text-center mx-auto relative z-10">
                    <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-6">
                        <Layers className="w-4 h-4 mr-2" /> Engineered Architecture
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                        Solutions
                    </h1>
                    <p className="text-xl text-muted leading-relaxed font-medium">
                        We don&apos;t just advise—we deliver structured systems that bridge the gap between physical operational realities and strict financial compliance.
                    </p>
                </div>
            </Section>

            {/* 2) SOLUTIONS GRID */}
            <Section variant="default" className="py-20">
                <BGPattern variant="grid" mask="fade-y" size={32} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {solutions.map((solution) => (
                        <Link
                            key={solution.slug}
                            href={`/solutions/${solution.slug}`}
                            className="group flex flex-col bg-surface border border-subtle rounded-2xl p-8 hover:border-accent/30 hover:shadow-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent/50 card-hover-glow"
                        >
                            {/* Audience Tag */}
                            <div className="mb-6">
                                <span className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded
                                    ${solution.audience === 'Public' ? 'bg-highlight/10 text-highlight' :
                                        solution.audience === 'Private' ? 'bg-accent/10 text-accent' :
                                            'bg-foreground/10 text-foreground'}`}>
                                    {solution.audience} Sector
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                                {solution.title}
                            </h3>
                            <p className="text-muted leading-relaxed mb-8 flex-grow">
                                {solution.summary}
                            </p>

                            {/* Arrow Link */}
                            <div className="mt-auto pt-6 border-t border-subtle flex items-center justify-between text-sm font-semibold text-accent group-hover:text-highlight transition-colors">
                                <span>Explore Solution</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* 3) WHO IT'S FOR STRIP */}
            <Section variant="muted" className="py-20 border-y border-subtle">
                <RetroGrid className="opacity-25" />
                <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Built for Complexity</h2>
                    <p className="text-lg text-muted">Specialized methodologies tailored directly to the statutory pressures of distinct sectors.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">

                    {/* Public Sector Card */}
                    <div className="bg-surface border border-subtle rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Landmark className="w-32 h-32" />
                        </div>
                        <div className="w-14 h-14 bg-highlight/10 rounded-2xl flex items-center justify-center mb-6">
                            <Landmark className="w-7 h-7 text-highlight" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Public Sector</h3>
                        <p className="text-muted leading-relaxed mb-6">
                            Structured specifically around AG compliance, GRAP alignment, and mSCOA unbundling rules. We secure unqualified audit results by enforcing rigid tracking logic.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-highlight" /> Municipalities & Entities</li>
                            <li className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-highlight" /> Provincial Departments</li>
                            <li className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-highlight" /> State-Owned Enterprises</li>
                        </ul>
                    </div>

                    {/* Private Sector Card */}
                    <div className="bg-surface border border-subtle rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Building2 className="w-32 h-32" />
                        </div>
                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                            <Building2 className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Private Sector</h3>
                        <p className="text-muted leading-relaxed mb-6">
                            Engineered to halt capital expenditure redundancy, optimize lifecycle tracking across decentralized plants, and prevent asset theft through strict custodian chains.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-accent" /> Enterprise Manufacturing</li>
                            <li className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-accent" /> Logistics & Warehousing</li>
                            <li className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-accent" /> Multi-site Retail Operations</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* 4) PROCESS STRIP (Execution Cycle) */}
            <Section variant="inverse">
                <BGPattern variant="grid" mask="fade-edges" size={28} fill="rgba(255,255,255,0.04)" />
                <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
                    <h2 className="text-3xl font-bold text-foreground-inverse mb-4">The Implementation Cycle</h2>
                    <p className="text-foreground-inverse/80">From chaotic spreadsheets to fully automated, audit-ready oversight.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6 text-highlight">
                            <FileSearch className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground-inverse mb-2">1. Discovery</h3>
                        <p className="text-sm text-foreground-inverse/70 leading-relaxed">Analyzing existing registries, uncovering discrepancies, and defining goals.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6 text-highlight">
                            <Database className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground-inverse mb-2">2. Cleansing</h3>
                        <p className="text-sm text-foreground-inverse/70 leading-relaxed">Aggregating and normalizing historical data into a clean master baseline.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6 text-highlight">
                            <Settings className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground-inverse mb-2">3. Configuration</h3>
                        <p className="text-sm text-foreground-inverse/70 leading-relaxed">Mapping precise physical locations, hierarchies, and rulesets in the target system.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6 text-highlight">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground-inverse mb-2">4. Governance</h3>
                        <p className="text-sm text-foreground-inverse/70 leading-relaxed">Deploying field teams, training staff, and activating compliance guardrails.</p>
                    </div>
                </div>
            </Section>

            {/* 5) FINAL CTA */}
            <Section variant="default" className="text-center py-20 border-t border-subtle">
                <BGPattern variant="diagonal-stripes" mask="fade-edges" size={16} />
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">Secure your operational data.</h2>
                    <p className="text-lg text-muted mb-10">
                        Discuss your infrastructure challenges with an operational architect today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/booking">
                            <Button size="lg" className="w-full sm:w-auto px-10">
                                Book a Consultation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10">
                                <BookOpen className="w-5 h-5 mr-2" /> View Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

        </main>
    );
}
