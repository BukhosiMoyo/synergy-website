"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/motion/motionPresets";
import Section from "@/components/ui/Section";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FEATURES = [
    "Real-time asset tracking & dashboards",
    "Barcode scanning & geo-evidence capture",
    "GRAP & mSCOA compliance built-in",
    "Automated reconciliation reporting",
];

export default function PlatformPreview() {
    return (
        <Section variant="default" spacing="md">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative w-full rounded-3xl bg-surface border border-subtle overflow-hidden min-h-[500px]"
            >
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="rgba(59, 130, 246, 0.6)"
                />

                <div className="flex flex-col lg:flex-row h-full min-h-[500px]">
                    {/* Left content */}
                    <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
                        <span className="section-badge mb-6 inline-block w-fit">
                            Our Platform
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                            Built for Asset
                            <br />
                            Management at Scale
                        </h2>

                        <p className="text-dim text-base md:text-lg leading-relaxed max-w-md mb-8">
                            Our asset management platform connects your field teams, finance departments, and auditors in one unified system — designed for both public and private sector needs.
                        </p>

                        <ul className="space-y-3 mb-10">
                            {FEATURES.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm text-dimmer">
                                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link href="/solutions/" className="w-fit">
                            <Button className="bg-accent hover:bg-highlight text-white border-0 shadow-lg shadow-accent/20">
                                Explore Solutions
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    {/* Right content — 3D Robot */}
                    <div className="flex-1 relative min-h-[300px] lg:min-h-0">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
