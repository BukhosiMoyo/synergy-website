import { notFound } from "next/navigation";
import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Landmark, Building2, ShieldAlert, HelpCircle, BookOpen } from "lucide-react";
import { locations } from "@/data/locations";
import { solutions } from "@/data/solutions";

// Static generation
export async function generateStaticParams() {
    return locations.map((loc) => ({
        city: loc.slug,
    }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
    const location = locations.find(l => l.slug === params.city);
    if (!location) return { title: "Location Not Found | Synergy Evolution" };

    return {
        title: location.seo.title,
        description: location.seo.description,
    };
}

// FAQ data (shared across cities, neutral and professional)
const faqs = [
    {
        q: "What is asset reconciliation?",
        a: "Asset reconciliation is the process of comparing the physical assets in your organization against what is recorded in your financial asset register, identifying discrepancies such as missing, untagged, or ghost assets."
    },
    {
        q: "How long does a typical implementation take?",
        a: "Timelines depend on the size and complexity of your asset base. A focused engagement for a single site can take 4\u20136 weeks, while a multi-site provincial rollout may span 3\u20136 months. We scope timelines precisely during the discovery phase."
    },
    {
        q: "What data do you need to get started?",
        a: "Ideally, your existing asset register (spreadsheet or system export), organizational hierarchy, and site location maps. If these don\u2019t exist, we can establish a baseline from scratch through physical verification."
    },
    {
        q: "Does this work for both government and private sector?",
        a: "Yes. Our solutions are designed for both public sector entities (municipalities, provincial departments, SOEs) requiring GRAP/mSCOA compliance, and private enterprises needing operational asset visibility and lifecycle control."
    },
    {
        q: "How do I book a consultation?",
        a: "You can book directly through our consultation page. We\u2019ll assess your needs and map a recommended approach within the first session."
    }
];

export default function CityPage({ params }: { params: { city: string } }) {
    const location = locations.find(l => l.slug === params.city);

    if (!location) {
        notFound();
    }

    // Resolve focus solutions from slugs
    const focusSolutionCards = location.focusSolutions
        .map(slug => solutions.find(s => s.slug === slug))
        .filter(Boolean);

    return (
        <main className="bg-background pt-24 pb-16 min-h-screen">

            {/* 1) HERO */}
            <Section variant="default" className="pt-8 pb-16 border-b border-border">
                <div className="max-w-4xl max-md:text-center">
                    <Link href="/locations" className="inline-flex items-center text-sm font-semibold text-muted hover:text-primary transition-colors mb-8 max-md:mx-auto">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        All Locations
                    </Link>

                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6 max-md:mx-auto">
                        <MapPin className="w-4 h-4 mr-2" /> {location.province || "South Africa"}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                        Asset Management Solutions in {location.city}
                    </h1>
                    <p className="text-xl text-muted leading-relaxed font-medium max-w-2xl">
                        {location.summary}
                    </p>
                </div>
            </Section>

            {/* 2) WHO THIS IS FOR */}
            <Section variant="muted" className="py-20 border-b border-border">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Who This Is For in {location.city}</h2>
                    <p className="text-lg text-muted">Specialized methodologies for distinct operational pressures.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-surface border border-border rounded-3xl p-8 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Landmark className="w-32 h-32" />
                        </div>
                        <div className="w-14 h-14 bg-highlight/10 rounded-2xl flex items-center justify-center mb-6">
                            <Landmark className="w-7 h-7 text-highlight" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Public Sector in {location.city}</h3>
                        <p className="text-muted leading-relaxed">
                            Municipalities, provincial departments, and state-owned entities in {location.city} requiring rigorous GRAP alignment, mSCOA compliance, and audit-ready asset registers.
                        </p>
                    </div>
                    <div className="bg-surface border border-border rounded-3xl p-8 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Building2 className="w-32 h-32" />
                        </div>
                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                            <Building2 className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Private Sector in {location.city}</h3>
                        <p className="text-muted leading-relaxed">
                            Enterprise manufacturers, logistics operators, and multi-site private organizations in {location.city} looking to centralize asset visibility and enforce custodian accountability.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 3) FEATURED SOLUTIONS */}
            {focusSolutionCards.length > 0 && (
                <Section variant="default" className="py-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Solutions Available in {location.city}</h2>
                            <p className="text-lg text-muted">Tailored to the operational and compliance demands of your region.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {focusSolutionCards.map((solution) => solution && (
                                <Link
                                    key={solution.slug}
                                    href={`/solutions/${solution.slug}`}
                                    className="group flex flex-col bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                >
                                    <div className="mb-4">
                                        <span className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded
                                            ${solution.audience === 'Public' ? 'bg-highlight/10 text-highlight' :
                                                solution.audience === 'Private' ? 'bg-accent/10 text-accent' :
                                                    'bg-primary/10 text-primary'}`}>
                                            {solution.audience} Sector
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                                        {solution.summary}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-border flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                                        <span>Learn more</span>
                                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* 4) COMMON PROBLEMS (LOCALIZED) */}
            <Section variant="inverse" className="py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-10 max-md:justify-center">
                        <ShieldAlert className="w-8 h-8 text-highlight" />
                        <h2 className="text-3xl font-bold text-foreground-inverse">Common Challenges in {location.city}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Incomplete or outdated asset registers with significant legacy data gaps",
                            "Poor custodianship tracking leading to unaccounted-for portable equipment",
                            "Mounting audit pressure and recurring reconciliation gaps during AG visits",
                            "Scattered asset data across disconnected spreadsheets and departmental silos",
                            "Inability to verify physical asset existence across remote or distributed sites",
                            "Lack of trained personnel to execute and maintain compliance processes"
                        ].map((problem, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-surface-inverse rounded-2xl border border-white/5">
                                <span className="w-8 h-8 rounded-full bg-highlight/10 text-highlight flex items-center justify-center shrink-0 font-bold text-sm">
                                    {idx + 1}
                                </span>
                                <p className="text-foreground-inverse/90 font-medium leading-relaxed mt-1">
                                    {problem}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5) FAQ */}
            <Section variant="default" className="py-20 border-b border-border">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-10 max-md:justify-center">
                        <HelpCircle className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <details key={idx} className="group bg-surface border border-border rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-foreground hover:text-primary transition-colors">
                                    <span>{faq.q}</span>
                                    <span className="text-muted ml-4 group-open:rotate-45 transition-transform text-xl">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-muted leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 6) FINAL CTA */}
            <Section variant="default" className="text-center py-20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">
                        Ready to secure your assets in {location.city}?
                    </h2>
                    <p className="text-lg text-muted mb-10">
                        Connect with a specialist who understands your regional statutory requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/booking">
                            <Button size="lg" className="w-full sm:w-auto px-10">
                                Book a Consultation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10">
                                <BookOpen className="w-5 h-5 mr-2" /> View Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

        </main>
    );
}
