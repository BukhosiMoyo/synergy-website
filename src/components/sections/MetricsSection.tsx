"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { fadeInUp } from "@/components/motion/motionPresets";
import {
    ScanSearch,
    Banknote,
    Award,
    Globe,
} from "lucide-react";

const METRICS = [
    {
        label: "Assets Verified",
        value: "2,000,000+",
        description: "Physical assets verified across national and municipal entities",
        icon: <ScanSearch className="w-6 h-6" />,
    },
    {
        label: "Project Value Delivered",
        value: "R17M+",
        description: "In asset management project value delivered to clients",
        icon: <Banknote className="w-6 h-6" />,
    },
    {
        label: "Unqualified Audit Outcomes",
        value: "7+",
        description: "Consecutive unqualified audit results achieved for clients",
        icon: <Award className="w-6 h-6" />,
    },
    {
        label: "Regional Execution",
        value: "National & Int.",
        description: "Deployment capacity across all 9 provinces and beyond",
        icon: <Globe className="w-6 h-6" />,
    },
];
import { BGPattern } from "@/components/ui/bg-pattern";

export default function MetricsSection() {
    return (
        <Section variant="default" spacing="md">
            <BGPattern variant="dots" mask="fade-edges" size={20} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {METRICS.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative p-6 rounded-2xl bg-subtle border border-subtle card-hover-glow"
                    >
                        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-5 transition-colors group-hover:bg-accent/15">
                            {metric.icon}
                        </div>
                        <div className="text-3xl font-extrabold text-foreground mb-1 tracking-tight">
                            {metric.value}
                        </div>
                        <div className="text-sm font-semibold text-accent/80 uppercase tracking-wider mb-2">
                            {metric.label}
                        </div>
                        <p className="text-xs text-dimmer leading-relaxed">
                            {metric.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
