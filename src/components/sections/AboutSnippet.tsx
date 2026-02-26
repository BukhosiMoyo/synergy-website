"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { fadeInUp } from "@/components/motion/motionPresets";
import { ArrowRight, Award, Calendar, Users, Flag } from "lucide-react";
import { TEAM } from "@/data/team";

const FACTS = [
    { icon: Calendar, label: "Founded", value: "2018" },
    { icon: Flag, label: "B-BBEE", value: "Level 1" },
    { icon: Users, label: "Ownership", value: "100% Black-Owned" },
    { icon: Award, label: "Team", value: `${TEAM.length} Specialists` },
];

const LEADERSHIP = TEAM.slice(0, 6);

export default function AboutSnippet() {
    return (
        <Section variant="muted" spacing="md">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Content */}
                    <div>
                        <span className="section-badge mb-6 inline-block">
                            Who We Are
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6 leading-tight">
                            Precision. Purpose.{" "}
                            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                                Partnership.
                            </span>
                        </h2>
                        <p className="text-dim text-base md:text-lg leading-relaxed mb-6">
                            Synergy Evolution was founded to address the critical gap between
                            what organisations report on their balance sheets and what
                            physically exists on the ground. We specialise in GRAP, MFMA,
                            PFMA, and IFRS compliance — delivering audit-ready asset registers
                            for municipalities, national departments, SOEs, and private
                            enterprises.
                        </p>
                        <p className="text-dim text-base leading-relaxed mb-8">
                            Our &ldquo;Nerve Center&rdquo; approach places dedicated project
                            offices on-site, ensuring transparent communication and real-time
                            accountability throughout every engagement.
                        </p>
                        <Link href="/about" className="w-fit">
                            <Button variant="outline" className="group/btn">
                                Learn More About Us
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                        </Link>
                    </div>

                    {/* Right — Facts + Team */}
                    <div className="space-y-8">
                        {/* Fact cards */}
                        <div className="grid grid-cols-2 gap-3">
                            {FACTS.map((fact) => (
                                <div
                                    key={fact.label}
                                    className="p-5 rounded-xl bg-subtle border border-subtle text-center"
                                >
                                    <fact.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                                    <div className="text-xl font-extrabold text-foreground mb-1">
                                        {fact.value}
                                    </div>
                                    <div className="text-[10px] text-dimmer uppercase tracking-wider">
                                        {fact.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Team preview */}
                        <div className="p-6 rounded-xl bg-subtle border border-subtle">
                            <p className="text-xs font-semibold uppercase tracking-wider text-dimmer mb-4">
                                Leadership Team
                            </p>
                            <div className="flex items-center -space-x-3 mb-4">
                                {LEADERSHIP.map((member) => (
                                    <div
                                        key={member.name}
                                        className="w-10 h-10 rounded-full bg-accent/10 border-2 border-background flex items-center justify-center text-xs font-bold text-accent"
                                        title={member.name}
                                    >
                                        {member.initials}
                                    </div>
                                ))}
                                {TEAM.length > 6 && (
                                    <div className="w-10 h-10 rounded-full bg-surface border-2 border-background flex items-center justify-center text-xs font-bold text-dimmer">
                                        +{TEAM.length - 6}
                                    </div>
                                )}
                            </div>
                            <Link
                                href="/about#team"
                                className="inline-flex items-center text-sm font-semibold text-accent hover:text-highlight transition-colors"
                            >
                                Meet the Full Team
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
