import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { caseStudies } from "@/data/case-studies";
import { locations } from "@/data/locations";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Sitemap | Synergy Evolution",
    description: "Complete directory of all pages on the Synergy Evolution website. Find asset management solutions, case studies, locations, and more.",
};

const MAIN_PAGES = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Book an Assessment", href: "/booking" },
];

const SERVICE_PAGES = [
    { label: "Asset Management Overview", href: "/asset-management" },
    { label: "Public Sector Asset Management", href: "/public-sector-asset-management" },
    { label: "Private Sector Asset Management", href: "/private-sector-asset-management" },
    { label: "All Solutions", href: "/solutions" },
];

interface SitemapGroupProps {
    title: string;
    links: { label: string; href: string }[];
}

function SitemapGroup({ title, links }: SitemapGroupProps) {
    return (
        <div>
            <h2 className="text-lg font-bold text-foreground mb-4 tracking-tight">{title}</h2>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="inline-flex items-center gap-2 text-sm text-dim hover:text-accent transition-colors group"
                        >
                            <ArrowRight className="w-3 h-3 text-accent/50 group-hover:text-accent transition-colors" />
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function SitemapPage() {
    const solutionLinks = solutions.map((s) => ({
        label: s.title,
        href: `/solutions/${s.slug}`,
    }));

    const caseStudyLinks = caseStudies.map((cs) => ({
        label: cs.title,
        href: `/case-studies/${cs.slug}`,
    }));

    const locationLinks = locations.map((loc) => ({
        label: loc.city,
        href: `/locations/${loc.slug}`,
    }));

    return (
        <main>
            <Section variant="default" spacing="lg" className="pt-32">
                <div className="max-w-4xl mx-auto">
                    <span className="section-badge mb-4 inline-block">Navigation</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                        Sitemap
                    </h1>
                    <p className="text-lg text-muted mb-12 leading-relaxed max-w-2xl">
                        Complete directory of all pages on the Synergy Evolution website.
                        You can also view our{" "}
                        <Link href="/sitemap.xml" className="text-accent hover:text-highlight underline underline-offset-2">
                            XML Sitemap
                        </Link>
                        .
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <SitemapGroup title="Main Pages" links={MAIN_PAGES} />
                        <SitemapGroup title="Services" links={SERVICE_PAGES} />
                        <SitemapGroup title="Solutions" links={solutionLinks} />
                        <SitemapGroup title="Locations" links={locationLinks} />
                        <div className="md:col-span-2">
                            <SitemapGroup title={`Case Studies (${caseStudyLinks.length})`} links={caseStudyLinks} />
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
