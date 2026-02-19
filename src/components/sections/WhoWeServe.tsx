"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { fadeInUp } from "@/components/motion/motionPresets";

export default function WhoWeServe() {
    return (
        <Section variant="default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Public Sector Card */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="group relative p-10 md:p-14 rounded-3xl bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:border-accent/30 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] grayscale group-hover:grayscale-0 group-hover:opacity-[0.08] transition-all">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3" /><path d="M9 17h6" /><path d="M10 21v-4" /><path d="M14 21v-4" /></svg>
                    </div>

                    <h3 className="text-3xl font-bold mb-6 text-primary">Public Sector</h3>
                    <ul className="space-y-4 text-lg">
                        {["Audit readiness", "GRAP alignment", "PFMA / MFMA compliance", "Asset register integrity"].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-muted">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Private Sector Card */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="group relative p-10 md:p-14 rounded-3xl bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:border-accent/30 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] grayscale group-hover:grayscale-0 group-hover:opacity-[0.08] transition-all">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                    </div>

                    <h3 className="text-3xl font-bold mb-6 text-primary">Private Sector</h3>
                    <ul className="space-y-4 text-lg">
                        {["Asset lifecycle optimization", "Financial control alignment", "Capital asset visibility", "Operational performance"].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-muted">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
}
