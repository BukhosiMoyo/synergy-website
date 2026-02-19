"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { fadeInUp, fadeIn } from "@/components/motion/motionPresets";
import dynamic from "next/dynamic";
import { ArrowRight, BarChart } from "lucide-react";

const ParticleWaveWebGL = dynamic(() => import("../visuals/ParticleWaveWebGL"), {
    ssr: false,
});

export default function HeroAnimated() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24">
            {/* Premium Particle Background */}
            <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
                <ParticleWaveWebGL />

                {/* Subtle Ambient Glows */}
                <div className="absolute inset-0 opacity-10 dark:opacity-30 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary blur-[100px]" />
                </div>
            </div>

            <Container className="relative z-10 text-center">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
                        Fixed Asset Management Solutions That Deliver{" "}
                        <span className="text-accent italic">Unqualified Audit Outcomes</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
                        Supporting municipalities, national departments, SOEs, universities and private enterprises with physical verification, FAR reconciliation, and system implementation at scale.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="px-8 py-4">
                            Request an Asset Assessment
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="px-8 py-4">
                            View Proven Results
                            <BarChart className="w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </Container>

            {/* Subtle Scroll Hint */}
            <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted/50"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-border-base to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
