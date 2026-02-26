"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { fadeInUp } from "@/components/motion/motionPresets";
import {
    Search,
    Cpu,
    GitMerge,
    TrendingUp,
} from "lucide-react";

const STEPS = [
    {
        step: "01",
        title: "Asset Discovery",
        description: "We assess your asset environment, identify gaps, and define the scope of work. Our team reviews existing registers, policies, and compliance requirements.",
        icon: <Search className="w-5 h-5" />,
        tags: ["Scope Analysis", "Gap Assessment", "Planning"],
    },
    {
        step: "02",
        title: "Physical Verification",
        description: "Multi-parameter ground verification using geolocated evidence, barcode scanning, condition assessment, and photographic documentation for every asset.",
        icon: <Cpu className="w-5 h-5" />,
        tags: ["Field Teams", "Barcode Scanning", "Geo-Evidence"],
    },
    {
        step: "03",
        title: "Reconciliation & Integration",
        description: "Expert reconciliation between physical counts, financial FAR, and general ledger. Seamless integration with your existing asset management systems.",
        icon: <GitMerge className="w-5 h-5" />,
        tags: ["FAR Alignment", "System Sync", "Data Integrity"],
    },
    {
        step: "04",
        title: "Audit Delivery & Optimization",
        description: "Comprehensive reporting, evidence packages for auditors, and continuous optimization to maintain compliance beyond the audit window.",
        icon: <TrendingUp className="w-5 h-5" />,
        tags: ["Audit Reports", "Compliance", "Continuous Support"],
    },
];

export default function ProcessTimeline() {
    return (
        <Section
            variant="muted"
            badge="Our Process"
            title="Our Simple, Smart, and Scalable Process"
            subtitle="We design, deploy, and deliver asset management solutions that help you achieve audit readiness."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {STEPS.map((item, idx) => (
                    <motion.div
                        key={item.step}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative p-6 md:p-8 rounded-2xl bg-subtle border border-subtle card-hover-glow"
                    >
                        <div className="flex items-start justify-between mb-5">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                                {item.icon}
                            </div>
                            <span className="text-4xl font-extrabold text-foreground/[0.04] leading-none">
                                {item.step}
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
                            Step {item.step}: {item.title}
                        </h3>

                        <p className="text-sm text-dim leading-relaxed mb-5">
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full border border-subtle text-dimmer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
