"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { fadeInUp } from "@/components/motion/motionPresets";

const INSTITUTIONS = [
    "COGTA National",
    "City of Tshwane",
    "NWU University",
    "DWS Department",
    "National Treasury",
    "Gauteng Health",
];

export default function TrustedInstitutions() {
    return (
        <Section variant="default">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4 opacity-70">
                    Trusted by National Departments, Municipalities and Universities
                </h4>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                {INSTITUTIONS.map((name, idx) => (
                    <motion.div
                        key={name}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="text-sm md:text-base font-bold text-foreground/50 border border-border px-6 py-4 rounded-lg w-full text-center hover:text-primary hover:border-accent transition-all cursor-default"
                    >
                        {name}
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
