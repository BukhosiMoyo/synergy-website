"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { BLOG_BASE_URL } from "@/lib/seo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Asset Management", href: "/asset-management/" },
  { label: "Public Sector", href: "/public-sector-asset-management/" },
  { label: "Private Sector", href: "/private-sector-asset-management/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Case Studies", href: "/case-study/" },
  { label: "Insights", href: BLOG_BASE_URL },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-border sticky top-0 bg-card/80 backdrop-blur-md z-50">
      <Container className="flex items-center justify-between h-20">
        <Link href="/" className="shrink-0">
          <img
            src="/brand/synergy Evolution New Logo light mode.png"
            alt="Synergy Evolution"
            className="h-12 w-auto dark:invert transition-all"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-border pl-4 ml-4">
            <ThemeToggle />
            <Link href="/booking/">
              <Button size="sm">Book Assessment</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Panel */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-card border-b border-border",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-foreground hover:text-accent transition-colors border-b border-surface pb-2"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking/" onClick={() => setIsMenuOpen(false)} className="mt-4">
            <Button className="w-full">Book Assessment</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
