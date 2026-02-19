"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/components/motion/motionPresets";
import { CalendarHeart } from "lucide-react";

export default function FinalCTA() {
    return (
        <Section variant="inverse" className="overflow-hidden">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                    Prepare for Your Next Audit Cycle with Confidence
                </h2>

                <p className="text-lg md:text-xl text-foreground-inverse/80 mb-12 leading-relaxed">
                    Engage our team to assess and stabilise your asset environment. We bridge the gap between financial compliance and physical reality.
                </p>

                <Button size="lg" className="px-10 py-5 bg-accent hover:bg-accent/90 text-white">
                    Schedule a Strategic Asset Consultation
                    <CalendarHeart className="w-5 h-5" />
                </Button>
            </motion.div>

            {/* Subtle background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -z-10 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(var(--accent))_0%,transparent_50%)]" />
            </div>
        </Section>
    );
}
