"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/motion/motionPresets";
import Section from "@/components/ui/Section";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import {
    Search,
    ScanBarcode,
    GitMerge,
    TrendingUp,
    ClipboardCheck,
    ShieldCheck,
} from "lucide-react";

const PROCESS_DATA = [
    {
        id: 1,
        title: "Discovery",
        date: "Phase 1",
        content: "Assessing your asset environment, identifying gaps in the register, and defining the full scope of verification work required.",
        category: "Planning",
        icon: Search,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
    },
    {
        id: 2,
        title: "Verification",
        date: "Phase 2",
        content: "Multi-parameter physical verification using barcode scanning, GPS evidence, condition assessment, and photographic documentation.",
        category: "Fieldwork",
        icon: ScanBarcode,
        relatedIds: [1, 3],
        status: "completed" as const,
        energy: 85,
    },
    {
        id: 3,
        title: "Reconciliation",
        date: "Phase 3",
        content: "Aligning physical counts with the Fixed Asset Register and general ledger to identify discrepancies and ghost assets.",
        category: "Analysis",
        icon: GitMerge,
        relatedIds: [2, 4],
        status: "in-progress" as const,
        energy: 60,
    },
    {
        id: 4,
        title: "Reporting",
        date: "Phase 4",
        content: "Delivering comprehensive audit-ready evidence packages, variance reports, and compliance documentation.",
        category: "Delivery",
        icon: ClipboardCheck,
        relatedIds: [3, 5],
        status: "in-progress" as const,
        energy: 45,
    },
    {
        id: 5,
        title: "Optimization",
        date: "Phase 5",
        content: "Continuous monitoring, register updates, and system improvements to maintain compliance beyond the audit window.",
        category: "Ongoing",
        icon: TrendingUp,
        relatedIds: [4, 6],
        status: "pending" as const,
        energy: 25,
    },
    {
        id: 6,
        title: "Audit Support",
        date: "Phase 6",
        content: "Direct support during audit cycles, providing validated evidence and addressing Auditor General queries in real time.",
        category: "Support",
        icon: ShieldCheck,
        relatedIds: [5, 1],
        status: "pending" as const,
        energy: 10,
    },
];

export default function ProcessOrbital() {
    return (
        <Section
            badge="Our Process"
            title="The Asset Management Lifecycle"
            subtitle="Click on any node to explore how each phase connects to deliver unqualified audit outcomes."
        >
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <RadialOrbitalTimeline timelineData={PROCESS_DATA} />
            </motion.div>
        </Section>
    );
}
