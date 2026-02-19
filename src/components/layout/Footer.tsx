import Container from "@/components/ui/Container";
import Link from "next/link";
import { BLOG_BASE_URL } from "@/lib/seo";

const FOOTER_LINKS = [
    { label: "Asset Management", href: "/asset-management/" },
    { label: "Public Sector", href: "/public-sector-asset-management/" },
    { label: "Private Sector", href: "/private-sector-asset-management/" },
    { label: "Solutions", href: "/solutions/" },
    { label: "Case Studies", href: "/case-study/" },
    { label: "Insights", href: BLOG_BASE_URL },
];

const COMPLIANCE_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Disclaimer", href: "/message-disclaimer/" },
];

export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-surface">
            <Container className="py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <Link href="/" className="mb-6 inline-block">
                        <img
                            src="/brand/synergy Evolution New Logo light mode.png"
                            alt="Synergy Evolution"
                            className="h-10 w-auto dark:invert transition-all grayscale opacity-80 hover:grayscale-0 hover:opacity-100"
                        />
                    </Link>
                    <p className="text-muted max-w-sm">
                        Public and private sector asset management specialists delivering audit-ready compliance and governance frameworks.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-xs">Navigation</h4>
                    <ul className="space-y-4 text-sm text-muted">
                        {FOOTER_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-xs">Contact & Legal</h4>
                    <ul className="space-y-4 text-sm text-muted mb-8">
                        <li>Email: <span className="italic opacity-70 font-light">TBD</span></li>
                        <li>Phone: <span className="italic opacity-70 font-light">TBD</span></li>
                        <li>Location: South Africa</li>
                    </ul>
                    <ul className="space-y-4 text-sm text-text-muted">
                        {COMPLIANCE_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>

            <div className="border-t border-border py-8">
                <Container className="text-sm text-muted text-center">
                    © {new Date().getFullYear()} Synergy Evolution. All rights reserved.
                </Container>
            </div>
        </footer>
    );
}
