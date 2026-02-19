"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { fadeInUp } from "@/components/motion/motionPresets";

const SERVICES = [
    {
        title: "Physical Asset Verification",
        description: "Multi-parameter ground verification of thousands of assets with geolocated evidence and condition assessment.",
    },
    {
        title: "Fixed Asset Register Reconciliation",
        description: "Expert reconciliation between physical counts, financial FAR, and general ledger accounts for audit stability.",
    },
    {
        title: "Asset Management Verification Systems",
        description: "Deployment of specialist software to automate the data collection, verification, and reporting lifecycle.",
    },
    {
        title: "Policy & Lifecycle Frameworks",
        description: "Developing comprehensive asset policies and strategic lifecycle plans aligned with global governance standards.",
    },
    {
        title: "Audit Support & Reporting",
        description: "Direct support during audit cycles, providing validated evidence to address Auditor General queries.",
    },
    {
        title: "Ongoing Support & Maintenance",
        description: "Continuous monitoring and register updates to ensure asset data remains current beyond the audit window.",
    },
];

export default function ServiceCardsGrid() {
    return (
        <Section title="Expert Asset Capabilities">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                            className="h-full"
                        />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
