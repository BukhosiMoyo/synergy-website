import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
    CheckCircle2,
    Search,
    ListChecks,
    CalendarClock,
    Calculator,
    MessagesSquare,
    Mail,
    Phone,
    MapPin
} from "lucide-react";
import BookingForm from "@/components/booking/BookingForm";
import { BGPattern } from "@/components/ui/bg-pattern";

export const metadata: Metadata = {
    title: "Book a Consultation | Synergy Evolution",
    description: "Schedule your consultation with Synergy Evolution to discuss asset management, digital solutions, and operational compliance.",
};

const VALUE_PROPS = [
    { text: "Needs assessment", icon: Search },
    { text: "Recommended solution scope", icon: ListChecks },
    { text: "Timeline + rollout approach", icon: CalendarClock },
    { text: "Pricing guidance", icon: Calculator },
    { text: "Q&A with a specialist", icon: MessagesSquare }
];

const FAQS = [
    { q: "How long is the consultation?", a: "Initial consultations typically run for 30–45 minutes, depending on the complexity of your requirements." },
    { q: "Is it free?", a: "Yes. The initial discovery call and subsequent high-level proposal are completely complimentary." },
    { q: "What should I prepare?", a: "Come with an understanding of your current pain points (e.g., audit findings, legacy system constraints) and a sense of your asset or project volume." },
    { q: "Can multiple stakeholders join?", a: "Absolutely. We encourage operations, finance, and IT stakeholders to attend so we can map a holistic solution." },
    { q: "Do you work with the public sector?", a: "Yes, we have extensive experience deploying compliant asset management solutions for national departments and municipalities." },
    { q: "When will you respond?", a: "Once your request is submitted, our team will typically reach out within 1 business day to confirm the meeting calendar block." }
];

export default function BookingPage() {
    return (
        <main className="bg-background pt-24 pb-16">
            <Container className="max-w-6xl">

                {/* Header Context Grid */}
                <div className="grid lg:grid-cols-[1fr,450px] gap-12 lg:gap-20 mb-16">

                    {/* Left Column: Context & Values */}
                    <div>
                        {/* 1) HERO (Booking) */}
                        <div className="mb-12">
                            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
                                Synergy Evolution Specialists
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                                Book a Consultation
                            </h1>
                            <p className="text-xl text-muted leading-relaxed mb-8 max-w-2xl">
                                We&apos;ll assess your needs, show a recommended approach, and map clear next steps towards institutional excellence.
                            </p>

                            <ul className="space-y-4 text-foreground font-medium text-lg">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-accent" /> 30–45 minute deep dive</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-accent" /> Secure online meeting</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-accent" /> Clear action plan after the call</li>
                            </ul>
                        </div>

                        {/* 2) WHAT YOU GET (Value Strip) */}
                        <div className="mb-12 hidden lg:block">
                            <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-6">What to Expect</h3>
                            <div className="flex flex-wrap gap-4">
                                {VALUE_PROPS.map((prop, i) => (
                                    <div key={i} className="flex items-center gap-2.5 bg-surface border border-border px-4 py-3 rounded-xl shadow-sm">
                                        <prop.icon className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-semibold text-foreground">{prop.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4) TRUST + PRIVACY NOTE */}
                        <div className="hidden lg:block bg-surface-1 rounded-2xl p-6 border border-border">
                            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <Search className="w-4 h-4 text-muted" /> Privacy Respected
                            </h4>
                            <p className="text-sm text-muted leading-relaxed">
                                We treat your organization&apos;s data with strict confidentiality. Your details will only be used to process your request and connect you with the appropriate specialists. We do not sell data to third parties.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: The Form */}
                    <div className="relative">
                        {/* 3) BOOKING FORM */}
                        <BookingForm />
                    </div>
                </div>

                {/* Mobile-only visible blocks that were hidden in the grid for layout reasons */}
                <div className="lg:hidden space-y-8 mb-16">
                    {/* What you get mobile */}
                    <div>
                        <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-4">What to Expect</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {VALUE_PROPS.map((prop, i) => (
                                <div key={i} className="flex items-center gap-3 bg-surface border border-border px-4 py-3 rounded-lg shadow-sm">
                                    <prop.icon className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm font-semibold text-foreground">{prop.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trust note mobile */}
                    <div className="bg-surface-1 rounded-2xl p-6 border border-border">
                        <p className="text-sm text-muted leading-relaxed text-center">
                            We treat your data with strict confidentiality. Your details are used only to respond to your request.
                        </p>
                    </div>
                </div>

            </Container>

            {/* 5) ALTERNATIVE CONTACT BLOCK */}
            <Section variant="muted" className="border-y border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-8">Other Ways to Reach Us</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <a href="mailto:info@synergyevolution.com" className="flex flex-col items-center p-6 bg-card border border-border rounded-2xl shadow-sm hover:border-primary/50 transition-colors group">
                            <Mail className="w-8 h-8 text-muted group-hover:text-primary transition-colors mb-4" />
                            <span className="font-semibold text-foreground mb-1">Email Support</span>
                            <span className="text-sm text-muted">info@synergyevolution.com</span>
                        </a>
                        <div className="flex flex-col items-center p-6 bg-card border border-border rounded-2xl shadow-sm hover:border-accent/50 transition-colors group">
                            <Phone className="w-8 h-8 text-muted group-hover:text-accent transition-colors mb-4" />
                            <span className="font-semibold text-foreground mb-1">Call Us</span>
                            <span className="text-sm text-muted">+27 (0) 11 000 0000</span>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-card border border-border rounded-2xl shadow-sm">
                            <MapPin className="w-8 h-8 text-muted mb-4" />
                            <span className="font-semibold text-foreground mb-1">Head Office</span>
                            <span className="text-sm text-muted">Johannesburg, South Africa</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6) FAQ (Booking-specific) */}
            <Section variant="default">
                <BGPattern variant="dots" mask="fade-edges" size={18} />
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted text-lg">Everything you need to know before stepping into a room with us.</p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="bg-surface border border-border rounded-xl p-6 shadow-sm">
                            <h4 className="font-bold text-foreground mb-3">{faq.q}</h4>
                            <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 7) FINAL CTA (Light) */}
            <Section variant="muted" className="text-center pb-8">
                <BGPattern variant="diagonal-stripes" mask="fade-edges" size={14} />
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Not quite ready to book?</h2>
                    <p className="text-muted mb-8">
                        That&apos;s okay. Take your time to explore our comprehensive platform solutions or see how we&apos;ve helped other institutions succeed.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/solutions">
                            <Button variant="outline" className="w-full sm:w-auto bg-surface">
                                View Solutions
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button variant="outline" className="w-full sm:w-auto bg-surface">
                                View Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
