import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MapPin, Layers, ShieldCheck, Database, FileSearch, Settings } from "lucide-react";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
    title: "Locations | Synergy Evolution",
    description: "Explore our localized asset management solutions across South Africa. We support organizations nationwide with tailored statutory compliance.",
};

export default function LocationsHub() {
    return (
        <main className="bg-background pt-24 pb-16 min-h-screen">

            {/* 1) HERO */}
            <Section variant="default" className="pt-8 pb-12 border-b border-border">
                <div className="max-w-4xl text-center mx-auto">
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
                        <MapPin className="w-4 h-4 mr-2" /> Nationwide Coverage
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                        Locations
                    </h1>
                    <p className="text-xl text-muted leading-relaxed font-medium">
                        We deploy highly trained verification teams and specialized compliance architects to organizations operating across South Africa.
                    </p>
                </div>
            </Section>

            {/* 2) LOCATIONS GRID */}
            <Section variant="default" className="py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locations.map((location) => (
                        <Link
                            key={location.slug}
                            href={`/locations/${location.slug}`}
                            className="group flex flex-col bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex flex-shrink-0 items-center justify-center">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {location.city}
                                    </h3>
                                    {location.province && (
                                        <p className="text-sm font-semibold text-muted tracking-wide uppercase mt-1">
                                            {location.province}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <p className="text-muted leading-relaxed mb-8 flex-grow mt-2">
                                {location.summary}
                            </p>

                            {/* Arrow Link */}
                            <div className="mt-auto pt-6 border-t border-border flex items-center justify-between text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                                <span>View Solutions in {location.city}</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* 3) HOW WE WORK STRIP (Reusing the Execution Cycle logic from Solutions for scale) */}
            <Section variant="inverse">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground-inverse mb-4">Localized Implementation Cycle</h2>
                    <p className="text-foreground-inverse/80">Our structured deployment framework applied directly to your regional operations.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6 text-highlight">
                            <FileSearch className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground-inverse mb-2">1. Discovery</h3>
                        <p className="text-sm text-foreground-inverse/70 leading-relaxed">Analyzing existing registries and uncovering localized regional discrepancies.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6 text-highlight">
                            <Database className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground-inverse mb-2">2. Cleansing</h3>
                        <p className="text-sm text-foreground-inverse/70 leading-relaxed">Standardizing historical physical data down to the facility and room level.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6 text-highlight">
                            <Settings className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground-inverse mb-2">3. Configuration</h3>
                        <p className="text-sm text-foreground-inverse/70 leading-relaxed">Deploying software configured to the specific statutory pressures of your region.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6 text-highlight">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground-inverse mb-2">4. Governance</h3>
                        <p className="text-sm text-foreground-inverse/70 leading-relaxed">Mobilizing on-site physical verification sweeping teams to execute baselines.</p>
                    </div>
                </div>
            </Section>

            {/* 4) FINAL CTA */}
            <Section variant="default" className="text-center py-20 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">Secure your regional operations.</h2>
                    <p className="text-lg text-muted mb-10">
                        Discuss your localized infrastructure challenges with an operational expert today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/booking">
                            <Button size="lg" className="w-full sm:w-auto px-10">
                                Book a Consultation
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/solutions">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10">
                                <Layers className="w-5 h-5 mr-2" /> Explore Solutions
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

        </main>
    );
}
