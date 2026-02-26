"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { fadeInUp } from "@/components/motion/motionPresets";
import {
    ArrowRight,
    Quote,
    CheckCircle2,
    Clock,
    BarChart3,
    Target,
    TrendingUp,
    Zap,
    Shield,
    Timer,
} from "lucide-react";

const CASE_STUDIES = [
    {
        client: "COGTA National Office",
        headline: "1,100,000 Assets Verified",
        quote: "Synergy Evolution's systematic approach culminated in an unqualified audit opinion for our department.",
        stats: [
            { label: "Assets Verified", value: "1.1M", icon: BarChart3 },
            { label: "Completion", value: "24 Weeks", icon: Clock },
            { label: "Audit Result", value: "Unqualified", icon: Shield },
            { label: "Reconciled", value: "100%", icon: Target },
        ],
        accentColor: "from-blue-600 to-blue-400",
        tags: ["National Department", "Full Verification", "GRAP Compliance"],
    },
    {
        client: "City of Tshwane Municipality",
        headline: "Regional Asset Compliance Achieved",
        quote: "The team delivered a complete asset register reconciliation that met all GRAP compliance requirements.",
        stats: [
            { label: "Operations Optimized", value: "50%", icon: TrendingUp },
            { label: "Cost Reduction", value: "20%", icon: Zap },
            { label: "Hours Saved/Month", value: "70+", icon: Timer },
            { label: "Faster Processing", value: "2x", icon: Target },
        ],
        accentColor: "from-blue-500 to-cyan-400",
        tags: ["Municipality", "Reconciliation", "Operational Efficiency"],
    },
];

export default function CaseStudyHighlights() {
    return (
        <Section
            badge="Case Studies"
            title="See How Asset Management Transforms Organizations"
            subtitle="Real institutions, real results with our asset verification and compliance solutions."
        >
            <div className="space-y-8">
                {CASE_STUDIES.map((study, idx) => (
                    <motion.div
                        key={study.client}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        className="group relative rounded-2xl bg-subtle border border-subtle overflow-hidden card-hover-glow"
                    >
                        {/* Top accent gradient bar */}
                        <div className={`h-1 w-full bg-gradient-to-r ${study.accentColor}`} />

                        <div className="p-8 md:p-10">
                            {/* Tags row */}
                            <div className="flex flex-wrap items-center gap-2 mb-6">
                                {study.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-subtle bg-foreground/[0.03] text-dim"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                {/* Left — Content */}
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-accent/80 mb-3 block">
                                        {study.client}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                                        {study.headline}
                                    </h3>

                                    {/* Quote block */}
                                    <div className="relative pl-5 mb-8">
                                        <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-accent to-accent/20" />
                                        <Quote className="w-5 h-5 text-accent/30 mb-2" />
                                        <p className="text-dim text-base leading-relaxed italic">
                                            {study.quote}
                                        </p>
                                    </div>

                                    <Link href="/case-studies/">
                                        <Button className="bg-accent hover:bg-highlight text-white border-0 shadow-md shadow-accent/15 group/btn">
                                            View Full Case Study
                                            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>

                                {/* Right — Stats Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    {study.stats.map((stat, i) => {
                                        const StatIcon = stat.icon;
                                        return (
                                            <div
                                                key={stat.label}
                                                className="relative p-5 rounded-xl bg-foreground/[0.02] border border-subtle group/stat hover:border-accent/20 transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                                        <StatIcon className="w-4 h-4 text-accent" />
                                                    </div>
                                                    {i === 0 && (
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                                                    )}
                                                </div>
                                                <div className="text-2xl md:text-3xl font-extrabold text-foreground mb-1 tracking-tight">
                                                    {stat.value}
                                                </div>
                                                <div className="text-[10px] font-semibold uppercase tracking-wider text-dimmer">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
