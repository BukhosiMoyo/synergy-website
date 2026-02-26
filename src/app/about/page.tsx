import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowRight,
    Target,
    Lightbulb,
    Heart,
    Shield,
    Users,
    Award,
    Globe,
    Briefcase,
    Mail,
} from "lucide-react";
import HeroParticles from "@/components/hero/HeroParticles";
import { BGPattern } from "@/components/ui/bg-pattern";
import { TEAM } from "@/data/team";

export const metadata: Metadata = {
    title: "About Us | Synergy Evolution — Redefining Asset Management",
    description:
        "Established in 2018 as a 100% black-owned entity, Synergy Evolution delivers audit-ready, GRAP/MFMA/PFMA/IFRS-compliant asset management to public and private sectors across South Africa.",
    openGraph: {
        title: "About Synergy Evolution",
        description:
            "100% black-owned. B-BBEE Level 1. 22+ years of combined leadership experience in asset management consulting.",
    },
};

const VALUES = [
    {
        icon: Target,
        title: "Prioritizing Value",
        description:
            "Adding tangible value through a hands-on, face-to-face approach with every client engagement.",
    },
    {
        icon: Lightbulb,
        title: "Knowledge Transfer",
        description:
            "Empowering host communities with real-world skills and sustainable capacity building.",
    },
    {
        icon: Shield,
        title: "Ethical Excellence",
        description:
            "Operating within a principled, transparent business environment at every level.",
    },
    {
        icon: Globe,
        title: "Economic Participation",
        description:
            "Forging strategic partnerships and joint ventures that uplift local entrepreneurs.",
    },
];

const STATS = [
    { value: "2018", label: "Founded" },
    { value: "100%", label: "Black-Owned" },
    { value: "Level 1", label: "B-BBEE Status" },
    { value: "200+", label: "Years Combined Experience" },
];

export default function AboutPage() {
    return (
        <main>
            {/* =========================================
                1) HERO
            ========================================== */}
            <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
                <div className="absolute inset-0 z-0 bg-background overflow-hidden">
                    <HeroParticles />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="section-badge mb-6 inline-block">About Us</span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.05]">
                            Redefining Asset Management{" "}
                            <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent italic drop-shadow-sm">
                                Through Precision &amp; Purpose
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
                            Established in 2018 as a 100% black-owned entity, we deliver
                            compliance, clarity, and control to organisations across
                            Southern Africa.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/booking">
                                <Button size="lg" className="w-full sm:w-auto px-8 py-4">
                                    Book a Consultation
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/contact-us">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto px-8 py-4 bg-surface/50 backdrop-blur-sm"
                                >
                                    Contact Us
                                    <Mail className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* =========================================
                2) STAT STRIP
            ========================================== */}
            <div className="bg-surface border-y border-border py-8">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {STATS.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl md:text-4xl font-extrabold text-foreground">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-muted font-medium mt-1 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* =========================================
                3) WHO WE ARE
            ========================================== */}
            <Section variant="default">
                <BGPattern variant="dots" mask="fade-edges" size={20} />
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-badge mb-4 inline-block">Who We Are</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Built for Compliance. Driven by Purpose.
                        </h2>
                    </div>
                    <div className="prose prose-lg prose-invert max-w-none text-muted leading-relaxed space-y-6">
                        <p>
                            Synergy Evolution (Pty) Ltd was born from a critical observation:
                            most mainstream asset management systems fail to meet the rigorous
                            South African accounting standards —{" "}
                            <strong className="text-foreground">
                                GRAP, MFMA, PFMA, and IFRS
                            </strong>
                            .
                        </p>
                        <p>
                            We don&apos;t just provide software; we provide{" "}
                            <strong className="text-foreground">
                                compliance, clarity, and control
                            </strong>
                            . As a B-BBEE Level 1 aligned partner, we are dedicated to
                            helping both public and private sectors maximise their financial
                            resource outputs while ensuring every asset is accounted for
                            under the highest global and local standards.
                        </p>
                    </div>
                </div>
            </Section>

            {/* =========================================
                4) VISION & MISSION
            ========================================== */}
            <Section variant="muted">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-badge mb-4 inline-block">
                            Our Direction
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Vision &amp; Mission
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="bg-background border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                                <Lightbulb className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Our Vision
                            </h3>
                            <p className="text-muted leading-relaxed">
                                To be the dominant regional and global stakeholder in Asset
                                Management consulting — delivering registers our clients are
                                proud to own while actively tackling youth unemployment
                                through technology and skill transfer.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-background border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-highlight" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Our Mission
                            </h3>
                            <p className="text-muted leading-relaxed">
                                To be the preferred global consultancy — prioritising value
                                through a hands-on, face-to-face approach, empowering host
                                communities with real-world skills, and operating within a
                                principled, transparent business environment.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* =========================================
                5) VALUES / PHILOSOPHY
            ========================================== */}
            <Section variant="default">
                <BGPattern variant="grid" mask="fade-edges" size={30} />
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-badge mb-4 inline-block">
                            The Synergy Philosophy
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Business as a Vehicle for Social Change
                        </h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                            We are committed to capacity building and ensuring that
                            previously marginalised communities are active participants in
                            the emerging industrial landscape.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {VALUES.map((value) => (
                            <div
                                key={value.title}
                                className="bg-surface border border-border rounded-xl p-6 text-center hover:border-accent/30 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                                    <value.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* =========================================
                6) LEADERSHIP TEAM
            ========================================== */}
            <Section variant="muted">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-badge mb-4 inline-block">Our People</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Meet the Team
                        </h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                            A multidisciplinary team of asset accountants, project managers,
                            systems engineers, and business strategists.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {TEAM.map((member) => (
                            <div
                                key={member.name}
                                className="bg-background border border-border rounded-xl p-6 hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent/5 group"
                            >
                                {/* Avatar */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-highlight to-accent flex items-center justify-center text-white font-bold text-lg mb-4">
                                    {member.initials}
                                </div>

                                {/* Info */}
                                <h3 className="text-lg font-bold text-foreground leading-tight mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-semibold text-accent mb-3">
                                    {member.role}
                                </p>
                                <p className="text-xs text-muted leading-relaxed mb-4">
                                    {member.specialisations}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center gap-4 text-xs text-muted border-t border-border pt-3">
                                    <span className="flex items-center gap-1">
                                        <Briefcase className="w-3 h-3" />
                                        {member.experience} yrs
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Award className="w-3 h-3" />
                                        {member.yearsSynergy} yrs at SE
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* =========================================
                7) WHY CHOOSE US DIFFERENTIATOR
            ========================================== */}
            <Section variant="default">
                <BGPattern variant="dots" mask="fade-edges" size={20} />
                <div className="max-w-4xl mx-auto text-center">
                    <Heart className="w-12 h-12 text-accent mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Why Projects Miss the Mark
                    </h2>
                    <p className="text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-8">
                        Most organisations view asset management as a set of tools. We view
                        it as an{" "}
                        <strong className="text-foreground">
                            agile strategic competence
                        </strong>
                        . We don&apos;t just check boxes — we eliminate the waste of time and
                        money that occurs when strategy and execution are misaligned.
                    </p>
                    <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-10">
                        For us, a successful project isn&apos;t just about a clean audit —
                        it&apos;s about creating a{" "}
                        <strong className="text-foreground">
                            sustainable social conscience
                        </strong>{" "}
                        within the business environment.
                    </p>
                </div>
            </Section>

            {/* =========================================
                8) CTA
            ========================================== */}
            <Section variant="muted" spacing="lg">
                <div className="max-w-3xl mx-auto text-center">
                    <Users className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Ready to Transform Your Asset Management?
                    </h2>
                    <p className="text-xl text-muted leading-relaxed mb-10">
                        Partner with a B-BBEE Level 1, 100% black-owned consultancy that
                        understands South African compliance inside and out.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/booking">
                            <Button size="lg" className="px-8 py-4">
                                Book a Consultation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/contact-us">
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-8 py-4 bg-background/50 backdrop-blur-sm"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
