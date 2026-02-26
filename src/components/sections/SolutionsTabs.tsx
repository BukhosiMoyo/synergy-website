"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/motion/motionPresets";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
    ScanSearch,
    FileCheck2,
    Monitor,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";

interface SolutionTab {
    value: string;
    icon: React.ReactNode;
    label: string;
    badge: string;
    title: string;
    description: string;
    features: string[];
    href: string;
    ctaText: string;
}

const SOLUTION_TABS: SolutionTab[] = [
    {
        value: "verification",
        icon: <ScanSearch className="h-auto w-4 shrink-0" />,
        label: "Asset Verification",
        badge: "Core Service",
        title: "Physical verification at scale with geo-evidence.",
        description:
            "Our multi-parameter verification process captures barcode scans, GPS coordinates, condition assessments, and photographic evidence for every asset — creating an audit-ready evidence trail.",
        features: [
            "Barcode & RFID scanning",
            "GPS-tagged photo evidence",
            "Condition assessment grading",
            "Real-time progress dashboards",
        ],
        href: "/solutions/asset-verification/",
        ctaText: "Explore Verification",
    },
    {
        value: "reconciliation",
        icon: <FileCheck2 className="h-auto w-4 shrink-0" />,
        label: "FAR Reconciliation",
        badge: "Compliance",
        title: "Reconcile physical counts with financial records.",
        description:
            "We align your physical asset register with the Fixed Asset Register (FAR) and general ledger — identifying discrepancies, ghost assets, and unrecorded items to achieve audit stability.",
        features: [
            "FAR-to-physical matching",
            "Ghost asset identification",
            "GRAP & mSCOA alignment",
            "Variance reporting",
        ],
        href: "/solutions/fixed-asset-management/",
        ctaText: "Explore Reconciliation",
    },
    {
        value: "systems",
        icon: <Monitor className="h-auto w-4 shrink-0" />,
        label: "System Implementation",
        badge: "Technology",
        title: "Deploy asset management systems that scale.",
        description:
            "From barcode infrastructure to full EAM platforms, we implement technology solutions that automate your asset lifecycle — from procurement to disposal — with real-time tracking and reporting.",
        features: [
            "EAM platform deployment",
            "Barcode infrastructure setup",
            "Integration with ERP systems",
            "Custom reporting dashboards",
        ],
        href: "/solutions/lifecycle-custodian-tracking/",
        ctaText: "Explore Systems",
    },
];

export default function SolutionsTabs() {
    return (
        <Section
            badge="Solutions"
            title="Comprehensive Asset Management Solutions"
            subtitle="Explore our specialist capabilities designed for public and private sector asset compliance."
        >
            <BGPattern variant="grid" mask="fade-y" size={32} />
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <Tabs defaultValue={SOLUTION_TABS[0].value} className="w-full">
                    {/* Tab Triggers */}
                    <TabsList className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 p-2 rounded-2xl bg-surface border border-subtle relative z-10 w-fit mx-auto">
                        {SOLUTION_TABS.map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-dim transition-all cursor-pointer data-[state=active]:bg-accent/10 data-[state=active]:text-accent data-[state=active]:shadow-sm hover:text-foreground"
                            >
                                {tab.icon} {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Tab Content */}
                    <div className="rounded-2xl bg-surface border border-subtle p-8 lg:p-14 relative z-10">
                        {SOLUTION_TABS.map((tab) => (
                            <TabsContent
                                key={tab.value}
                                value={tab.value}
                                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16"
                            >
                                {/* Left — Text Content */}
                                <div className="flex flex-col gap-5">
                                    <span className="section-badge w-fit">{tab.badge}</span>

                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
                                        {tab.title}
                                    </h3>

                                    <p className="text-dim text-base lg:text-lg leading-relaxed">
                                        {tab.description}
                                    </p>

                                    <ul className="space-y-3 mt-2">
                                        {tab.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-soft">
                                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={tab.href} className="mt-4 w-fit">
                                        <Button className="bg-accent hover:bg-highlight text-white border-0 shadow-lg shadow-accent/20">
                                            {tab.ctaText}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>

                                {/* Right — Visual Card */}
                                <div className="w-full aspect-[4/3] rounded-xl bg-card border border-subtle flex flex-col items-center justify-center p-8 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                                        {tab.value === "verification" && <ScanSearch className="w-8 h-8" />}
                                        {tab.value === "reconciliation" && <FileCheck2 className="w-8 h-8" />}
                                        {tab.value === "systems" && <Monitor className="w-8 h-8" />}
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground mb-2">{tab.label}</h4>
                                    <p className="text-sm text-dim max-w-xs">{tab.description.slice(0, 120)}…</p>

                                    {/* Stats mini-grid */}
                                    <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-xs">
                                        {tab.features.slice(0, 4).map((f, i) => (
                                            <div key={f} className="text-center p-3 rounded-lg bg-surface border border-subtle">
                                                <div className="text-lg font-bold text-accent">{["99%", "2M+", "24/7", "100%"][i]}</div>
                                                <div className="text-[10px] text-dimmer uppercase tracking-wider">{f.split(" ").slice(0, 2).join(" ")}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </motion.div>
        </Section>
    );
}
