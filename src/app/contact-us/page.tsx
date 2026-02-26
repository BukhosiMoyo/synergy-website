import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowRight,
    MapPin,
    Phone,
    Mail,
    Clock,
    Shield,
    Award,
    Users,
    Globe,
    CheckCircle2,
} from "lucide-react";
import HeroParticles from "@/components/hero/HeroParticles";
import { BGPattern } from "@/components/ui/bg-pattern";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Synergy Evolution — Get in Touch",
    description:
        "Contact Synergy Evolution for asset management consulting, GRAP/IFRS compliance, and physical asset verification. Office in Johannesburg, serving all of South Africa.",
    openGraph: {
        title: "Contact Synergy Evolution",
        description:
            "Reach our team of asset management specialists. Clearwater Office Park, Johannesburg. +27 64 524 8833.",
    },
};

const CONTACT_CARDS = [
    {
        icon: MapPin,
        title: "Our Office",
        lines: [
            "Clearwater Office Park",
            "Cnr Millennium & Christian de Wet Rd",
            "Clearwater, Johannesburg 1735",
        ],
    },
    {
        icon: Phone,
        title: "Direct Contact",
        lines: [
            "+27 64 524 8833",
            "+27 10 007 5980",
            "Mon – Fri: 08:00 – 17:00",
        ],
        link: { href: "tel:+27645248833", label: "Call Now" },
    },
    {
        icon: Mail,
        title: "Email & Support",
        lines: [
            "info@synergyevolution.co.za",
            "24/7 On-Call Project Support",
            "B-BBEE Level 1 Contributor",
        ],
        link: { href: "mailto:info@synergyevolution.co.za", label: "Send Email" },
    },
];

const TRUST_POINTS = [
    {
        icon: Shield,
        title: "Audit-Ready Solutions",
        description: "We specialise in GRAP, MFMA, PFMA, and IFRS compliance.",
    },
    {
        icon: Award,
        title: "100% Black-Owned",
        description: "Committed to B-BBEE and local economic upliftment.",
    },
    {
        icon: Users,
        title: 'The "Nerve Center" Approach',
        description:
            "On-site project offices for transparent, real-time communication.",
    },
    {
        icon: Globe,
        title: "National Reach",
        description: "Serving clients across all South African provinces.",
    },
];

export default function ContactUsPage() {
    return (
        <main>
            {/* =========================================
                1) HERO
            ========================================== */}
            <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
                <div className="absolute inset-0 z-0 bg-background overflow-hidden">
                    <HeroParticles />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="section-badge mb-6 inline-block">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.05]">
                            Get in Touch with{" "}
                            <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent italic drop-shadow-sm">
                                Synergy Evolution
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
                            Whether you need to overhaul your Fixed Asset Register, prepare
                            for an upcoming audit, or implement a strategic PMO — our team
                            of experts is ready to assist.
                        </p>
                    </div>
                </Container>
            </section>

            {/* =========================================
                2) CONTACT CARDS
            ========================================== */}
            <div className="bg-surface border-y border-border py-12">
                <Container>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {CONTACT_CARDS.map((card) => (
                            <div
                                key={card.title}
                                className="bg-background border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors text-center group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                                    <card.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">
                                    {card.title}
                                </h3>
                                <div className="space-y-1">
                                    {card.lines.map((line, i) => (
                                        <p
                                            key={i}
                                            className="text-muted text-sm leading-relaxed"
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                                {card.link && (
                                    <a
                                        href={card.link.href}
                                        className="inline-flex items-center gap-2 text-accent font-semibold text-sm mt-4 hover:underline"
                                    >
                                        {card.link.label}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* =========================================
                3) WHY PARTNER WITH US
            ========================================== */}
            <Section variant="default">
                <BGPattern variant="dots" mask="fade-edges" size={20} />
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-badge mb-4 inline-block">
                            Why Partner With Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Your Trusted Compliance Partner
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TRUST_POINTS.map((point) => (
                            <div
                                key={point.title}
                                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                                    <point.icon className="w-5 h-5 text-highlight" />
                                </div>
                                <h3 className="text-base font-bold text-foreground mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* =========================================
                4) CONTACT FORM + MAP
            ========================================== */}
            <Section variant="muted">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-badge mb-4 inline-block">
                            Request a Consultation
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                            Tell Us About Your Project
                        </h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                            One of our lead consultants will reach out within 24 hours.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Form */}
                        <ContactForm />

                        {/* Map */}
                        <div className="bg-background border border-border rounded-2xl overflow-hidden min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.2!2d27.9!3d-26.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sClearwater+Office+Park!5e0!3m2!1sen!2sza!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "400px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Synergy Evolution Office - Clearwater Office Park, Johannesburg"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* =========================================
                5) CTA STRIP
            ========================================== */}
            <div className="bg-surface border-y border-border py-8">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
                        <div className="flex items-center gap-4">
                            <Clock className="w-8 h-8 text-accent flex-shrink-0" />
                            <div>
                                <p className="text-foreground font-bold text-lg">
                                    Business Hours: Mon – Fri, 08:00 – 17:00
                                </p>
                                <p className="text-muted text-sm">
                                    24/7 On-Call Project Support available
                                </p>
                            </div>
                        </div>
                        <Link href="/booking">
                            <Button size="lg" className="px-8 py-4 whitespace-nowrap">
                                Book a Slot
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </main>
    );
}
