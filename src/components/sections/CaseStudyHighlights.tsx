"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { fadeInUp } from "@/components/motion/motionPresets";
import {
    ArrowRight,
    ChevronRight,
    Boxes,
    Clock,
    Globe,
    Banknote,
    Award,
} from "lucide-react";
import { caseStudies } from "@/data/case-studies";

const featured = caseStudies.filter((cs) => cs.featured).slice(0, 4);

export default function CaseStudyHighlights() {
    return (
        <Section
            badge="Case Studies"
            title="Proven Results Across 25+ Institutions"
            subtitle="Real clients, real outcomes — from municipalities and SOEs to international governments."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {featured.map((study, idx) => {
                    const metrics = [
                        study.assetCount && { icon: Boxes, label: "Assets", value: study.assetCount },
                        study.contractValue && { icon: Banknote, label: "Value", value: study.contractValue },
                        study.duration && { icon: Clock, label: "Duration", value: study.duration },
                        study.executionLevel && { icon: Globe, label: "Scope", value: study.executionLevel },
                    ].filter(Boolean) as { icon: typeof Boxes; label: string; value: string }[];

                    return (
                        <motion.div
                            key={study.slug}
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link
                                href={`/case-studies/${study.slug}`}
                                className="group block relative rounded-2xl bg-subtle border border-subtle overflow-hidden card-hover-glow h-full"
                            >
                                {/* Accent bar */}
                                <div className="h-1 w-full bg-gradient-to-r from-accent to-highlight" />

                                <div className="p-7 md:p-8 flex flex-col h-full">
                                    {/* Tags */}
                                    <div className="flex flex-wrap items-center gap-2 mb-5">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-subtle bg-accent/5 text-accent">
                                            {study.sector}
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-subtle bg-foreground/[0.03] text-dim">
                                            {study.serviceType}
                                        </span>
                                        {study.auditResult && (
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-highlight/10 text-highlight">
                                                <Award className="w-3 h-3" />
                                                {study.auditResult}
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight leading-snug group-hover:text-accent transition-colors">
                                        {study.title}
                                    </h3>

                                    {/* Summary */}
                                    <p className="text-sm text-dim leading-relaxed mb-6 line-clamp-3">
                                        {study.summary}
                                    </p>

                                    {/* Metrics mini-grid */}
                                    {metrics.length > 0 && (
                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            {metrics.slice(0, 4).map((m) => (
                                                <div key={m.label} className="p-3 rounded-lg bg-foreground/[0.02] border border-subtle text-center">
                                                    <m.icon className="w-4 h-4 text-accent mx-auto mb-1" />
                                                    <div className="text-base font-extrabold text-foreground">{m.value}</div>
                                                    <div className="text-[9px] text-dimmer uppercase tracking-wider">{m.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* CTA */}
                                    <div className="mt-auto flex items-center text-sm font-semibold text-accent group-hover:text-highlight transition-colors">
                                        View Case Study
                                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            {/* View all CTA */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center"
            >
                <Link href="/case-studies">
                    <Button variant="outline" size="lg" className="px-8">
                        View All {caseStudies.length} Case Studies
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </motion.div>
        </Section>
    );
}
