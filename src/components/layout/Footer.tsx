import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { BLOG_BASE_URL } from "@/lib/seo";

const SERVICES_LINKS = [
    { label: "Asset Management", href: "/asset-management/" },
    { label: "Public Sector", href: "/public-sector-asset-management/" },
    { label: "Private Sector", href: "/private-sector-asset-management/" },
    { label: "All Solutions", href: "/solutions/" },
    { label: "Locations", href: "/locations/" },
];

const PAGES_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Insights", href: BLOG_BASE_URL },
    { label: "Contact", href: "/contact-us/" },
    { label: "Book Assessment", href: "/booking/" },
];

const COMPLIANCE_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Disclaimer", href: "/message-disclaimer/" },
];

export default function Footer() {
    return (
        <footer className="w-full border-t border-subtle bg-surface">
            <Container className="py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="mb-6 inline-block">
                            <Image
                                src="/brand/synergy Evolution New Logo light mode.png"
                                alt="Synergy Evolution"
                                width={150}
                                height={40}
                                className="h-10 w-auto dark:invert transition-all"
                            />
                        </Link>
                        <p className="text-sm text-dim leading-relaxed max-w-xs">
                            Public and private sector asset management specialists delivering audit-ready compliance and governance frameworks.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-5 text-foreground uppercase tracking-wider text-xs">
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {SERVICES_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-dim hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="font-semibold mb-5 text-foreground uppercase tracking-wider text-xs">
                            Pages
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {PAGES_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-dim hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-5 text-foreground uppercase tracking-wider text-xs">
                            Legal
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {COMPLIANCE_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-dim hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="text-dim">Location: South Africa</li>
                        </ul>
                    </div>
                </div>
            </Container>

            <div className="border-t border-subtle py-6">
                <Container className="text-xs text-dimmer text-center">
                    © {new Date().getFullYear()} Synergy Evolution. All rights reserved.
                </Container>
            </div>
        </footer>
    );
}
