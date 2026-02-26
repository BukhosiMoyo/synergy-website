"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { fadeInUp } from "@/components/motion/motionPresets";
import {
    ShieldCheck,
    TrendingDown,
    Database,
    Scale,
    Expand,
    Eye,
} from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";

const BENEFITS = [
    {
        title: "Audit Readiness",
        description: "Achieve and maintain unqualified audit outcomes with validated asset data and comprehensive evidence packages.",
        icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
        title: "Cost Reduction",
        description: "Minimize ghost assets, optimize maintenance spend, and improve capital allocation with accurate asset visibility.",
        icon: <TrendingDown className="w-5 h-5" />,
    },
    {
        title: "Data Accuracy",
        description: "Eliminate discrepancies between physical assets and financial registers through systematic reconciliation processes.",
        icon: <Database className="w-5 h-5" />,
    },
    {
        title: "Regulatory Compliance",
        description: "Ensure GRAP, mSCOA, PFMA, and MFMA compliance with frameworks designed for South African public sector requirements.",
        icon: <Scale className="w-5 h-5" />,
    },
    {
        title: "Scalability",
        description: "From municipal offices to national departments — our processes scale to handle millions of assets without compromising accuracy.",
        icon: <Expand className="w-5 h-5" />,
    },
    {
        title: "Real-Time Visibility",
        description: "Live dashboards and reporting tools that give stakeholders instant insight into asset status, location, and condition.",
        icon: <Eye className="w-5 h-5" />,
    },
];

export default function BenefitsGrid() {
    return (
        <Section
            variant="muted"
            badge="Benefits"
            title="The Key Benefits for Your Organization"
            subtitle="Discover how our asset management solutions enhance efficiency, reduce costs, and drive compliance."
        >
            <RetroGrid className="opacity-30" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {BENEFITS.map((benefit, idx) => (
                    <motion.div
                        key={benefit.title}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <Card
                            title={benefit.title}
                            description={benefit.description}
                            icon={benefit.icon}
                            className="h-full"
                        />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
