"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { fadeInUp } from "@/components/motion/motionPresets";

export default function CaseStudyHighlights() {
    return (
        <Section variant="muted" title="Proven Delivery Results">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative bg-card rounded-3xl border border-border p-8 md:p-12 overflow-hidden shadow-sm"
            >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-3">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent rounded-full">
                                National Delivery
                            </span>
                            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary rounded-full">
                                6-Month Project
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            1,100,000 Assets Verified for COGTA National Office
                        </h3>

                        <p className="text-lg text-muted mb-8 leading-relaxed">
                            Synergy Evolution delivered a complex national asset verification and reconciliation project involving physical assessment of 1.1M items. Our systematic approach culminated in an unqualified audit opinion for the department.
                        </p>

                        <Link href="/case-study/">
                            <Button variant="outline">View Full Case Study</Button>
                        </Link>
                    </div>

                    <div className="lg:col-span-2 bg-surface rounded-2xl p-8 border border-border/50">
                        <div className="space-y-6">
                            {[
                                { label: "Completion Time", value: "24 Weeks" },
                                { label: "Audit Result", value: "Unqualified" },
                                { label: "Assets Reconciled", value: "100%" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-xs font-bold uppercase tracking-widest text-muted mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-2xl font-bold text-primary">
                                        {stat.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
