"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/components/motion/motionPresets";
import { CalendarHeart } from "lucide-react";
import Link from "next/link";
import { BGPattern } from "@/components/ui/bg-pattern";

export default function FinalCTA() {
    return (
        <Section variant="default" spacing="lg" className="overflow-hidden">
            <BGPattern variant="diagonal-stripes" mask="fade-edges" size={16} />
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto relative z-10"
            >
                <span className="section-badge mb-6 inline-block">Get Started</span>

                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
                    Let Us Handle Your Assets So You Can Scale Faster
                </h2>

                <p className="text-base md:text-lg text-dim mb-10 leading-relaxed max-w-xl mx-auto">
                    Book a strategic consultation today and start achieving audit-ready compliance with confidence.
                </p>

                <Link href="/booking/">
                    <Button size="lg" className="px-10 py-5 bg-accent hover:bg-highlight text-white border-0">
                        Schedule a Strategic Consultation
                        <CalendarHeart className="w-5 h-5" />
                    </Button>
                </Link>
            </motion.div>

            {/* Radial glow background */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-[120px]" />
            </div>
        </Section>
    );
}
