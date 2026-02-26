"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { fadeInUp } from "@/components/motion/motionPresets";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import {
    Search,
    FileCheck2,
    Monitor,
    ScrollText,
    ShieldCheck,
    Wrench,
} from "lucide-react";

const SERVICES = [
    {
        title: "Physical Asset Verification",
        description: "Multi-parameter ground verification of thousands of assets with geolocated evidence and condition assessment.",
        icon: <Search className="w-5 h-5" />,
    },
    {
        title: "FAR Reconciliation",
        description: "Expert reconciliation between physical counts, financial FAR, and general ledger accounts for audit stability.",
        icon: <FileCheck2 className="w-5 h-5" />,
    },
    {
        title: "Verification Systems",
        description: "Deployment of specialist software to automate the data collection, verification, and reporting lifecycle.",
        icon: <Monitor className="w-5 h-5" />,
    },
    {
        title: "Policy & Lifecycle Frameworks",
        description: "Developing comprehensive asset policies and strategic lifecycle plans aligned with global governance standards.",
        icon: <ScrollText className="w-5 h-5" />,
    },
    {
        title: "Audit Support & Reporting",
        description: "Direct support during audit cycles, providing validated evidence to address Auditor General queries.",
        icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
        title: "Ongoing Maintenance",
        description: "Continuous monitoring and register updates to ensure asset data remains current beyond the audit window.",
        icon: <Wrench className="w-5 h-5" />,
    },
];

export default function ServiceCardsGrid() {
    return (
        <Section
            badge="Our Services"
            title="Expert Asset Management Capabilities"
            subtitle="We design, deploy, and deliver asset management solutions that help you achieve audit readiness and operational visibility."
        >
            <AnimatedGridPattern
                numSquares={20}
                maxOpacity={0.08}
                duration={4}
                className={cn("[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]")}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {SERVICES.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <Card
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            className="h-full"
                        />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
