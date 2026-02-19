"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { fadeInUp } from "@/components/motion/motionPresets";

const METRICS = [
    { label: "Assets Verified", value: "2,000,000+" },
    { label: "Project Value Delivered", value: "R17M+" },
    { label: "Unqualified Audit Outcomes", value: "7+" },
    { label: "Regional Execution", value: "National & Int." },
];

export default function MetricsSection() {
    return (
        <Section variant="inverse" className="overflow-hidden">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Proven Across Millions of Verified Assets
                </h2>
                <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {METRICS.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-center"
                    >
                        <div className="text-2xl md:text-4xl font-extrabold text-accent mb-2 leading-tight">
                            {metric.value}
                        </div>
                        <div className="text-sm md:text-base text-foreground-inverse/80 font-medium uppercase tracking-wider">
                            {metric.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
