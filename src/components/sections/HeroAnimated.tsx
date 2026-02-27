"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ArrowRight, BarChart } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { cn } from "@/lib/utils";


export default function HeroAnimated() {
    const [surfaceReady, setSurfaceReady] = useState(false);

    useEffect(() => {
        const handler = () => setSurfaceReady(true);
        window.addEventListener("dotted-surface-ready", handler);
        const fallback = setTimeout(() => setSurfaceReady(true), 3000);
        return () => {
            window.removeEventListener("dotted-surface-ready", handler);
            clearTimeout(fallback);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
            {/* DottedSurface Background */}
            <div className="absolute inset-0 z-0">
                <DottedSurface className="absolute inset-0 -z-1" />
                {/* Radial gradient overlay for depth */}
                <div
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none absolute inset-0",
                        "bg-[radial-gradient(ellipse_at_center,transparent_20%,rgb(var(--background))_70%)]",
                    )}
                />
                {/* Bottom fade */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent"
                />
            </div>

            {/* Hero Content */}
            <Container className="relative z-10 pt-32">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatePresence>
                        {surfaceReady && (
                            <>
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm px-4 py-1.5 text-xs text-accent mb-8">
                                        <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                                        Nationwide Coverage — 9 Provinces
                                    </div>
                                </motion.div>

                                {/* Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.08]"
                                >
                                    Fixed Asset Management{" "}
                                    <br className="hidden md:block" />
                                    That Delivers{" "}
                                    <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent italic">
                                        Unqualified Audit Outcomes
                                    </span>
                                </motion.h1>

                                {/* Subtitle */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-base md:text-lg text-muted mb-10 leading-relaxed max-w-2xl mx-auto"
                                >
                                    Supporting municipalities, national departments, SOEs, universities and private enterprises with physical verification, FAR reconciliation, and system implementation at scale.
                                </motion.p>

                                {/* CTAs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
                                >
                                    <Button size="lg" className="px-8 py-4 bg-accent hover:bg-highlight text-white border-0 shadow-lg shadow-accent/20">
                                        Request an Asset Assessment
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                    <Button variant="outline" size="lg" className="px-8 py-4">
                                        View Proven Results
                                        <BarChart className="w-5 h-5" />
                                    </Button>
                                </motion.div>

                                {/* Stats Row */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center justify-center gap-8 md:gap-12"
                                >
                                    {[
                                        { value: "25+", label: "Institutional Clients" },
                                        { value: "2M+", label: "Assets Verified" },
                                        { value: "7+", label: "Unqualified Audits" },
                                        { value: "3", label: "Countries" },
                                    ].map((stat, idx) => (
                                        <React.Fragment key={stat.label}>
                                            {idx > 0 && <div className="w-px h-8 bg-border-base" />}
                                            <div className="text-center">
                                                <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                                                <p className="text-[10px] md:text-xs text-muted uppercase tracking-wider">{stat.label}</p>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </Container>

        </section>
    );
}
