"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Container from "@/components/ui/Container";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BLOG_BASE_URL } from "@/lib/seo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  CalendarCheck,
  ChevronDown,
  Briefcase,
  Landmark,
  Building2,
  Layers,
  MapPin,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  NAV DATA                                                          */
/* ------------------------------------------------------------------ */

interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Solutions",
    children: [
      {
        label: "Asset Management",
        href: "/asset-management/",
        description: "End-to-end fixed asset lifecycle management",
        icon: <Briefcase className="w-5 h-5" />,
      },
      {
        label: "Public Sector",
        href: "/public-sector-asset-management/",
        description: "GRAP & mSCOA compliance frameworks",
        icon: <Landmark className="w-5 h-5" />,
      },
      {
        label: "Private Sector",
        href: "/private-sector-asset-management/",
        description: "Operational visibility & custodian control",
        icon: <Building2 className="w-5 h-5" />,
      },
      {
        label: "All Solutions",
        href: "/solutions/",
        description: "Browse our full service catalogue",
        icon: <Layers className="w-5 h-5" />,
      },
      {
        label: "Locations",
        href: "/locations/",
        description: "Region-specific deployments across SA",
        icon: <MapPin className="w-5 h-5" />,
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Insights", href: BLOG_BASE_URL },
  { label: "About", href: "/about/" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header intro animation
  useEffect(() => {
    const handler = () => {
      setTimeout(() => setHeaderVisible(true), 800);
    };
    window.addEventListener("dotted-surface-ready", handler);
    const fallback = setTimeout(() => setHeaderVisible(true), 3500);
    return () => {
      window.removeEventListener("dotted-surface-ready", handler);
      clearTimeout(fallback);
    };
  }, []);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMenuOpen(false);
      setOpenDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  const isActive = (href: string) => {
    const cleanHref = href.replace(/\/$/, "");
    const cleanPath = pathname.replace(/\/$/, "");
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + "/");
  };

  const isDropdownActive = (children: NavChild[]) =>
    children.some((child) => isActive(child.href));

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={cn(
        "w-full fixed top-0 z-50 transition-all duration-700",
        headerVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-subtle"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between h-20">
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/synergy Evolution New Logo light mode.png"
            alt="Synergy Evolution"
            width={180}
            height={48}
            className="h-12 w-auto dark:invert transition-all"
            priority
          />
        </Link>

        {/* ============ DESKTOP NAV ============ */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isDropdownActive(item.children)
                      ? "text-accent font-semibold"
                      : "text-soft hover:text-foreground"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      openDropdown === item.label && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-200 origin-top-left",
                    openDropdown === item.label
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <div className="w-80 bg-card/95 backdrop-blur-xl border border-subtle rounded-xl shadow-2xl p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={isActive(child.href) ? "page" : undefined}
                        className={cn(
                          "flex items-start gap-3 px-3 py-3 rounded-lg transition-colors group",
                          isActive(child.href)
                            ? "bg-accent/10 text-accent"
                            : "hover:bg-subtle text-soft"
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 shrink-0 transition-colors",
                            isActive(child.href)
                              ? "text-accent"
                              : "text-dim group-hover:text-accent"
                          )}
                        >
                          {child.icon}
                        </span>
                        <div>
                          <div className="text-sm font-semibold leading-tight text-foreground">
                            {child.label}
                          </div>
                          <div className="text-xs text-dim mt-0.5 leading-snug">
                            {child.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                aria-current={isActive(item.href!) ? "page" : undefined}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(item.href!)
                    ? "text-accent font-semibold"
                    : "text-soft hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}

          <div className="flex items-center gap-3 border-l border-subtle pl-4 ml-2">
            <ThemeToggle />
            <Link href="/booking/">
              <Button className="bg-accent hover:bg-accent/90 text-white border-0">
                <CalendarCheck className="w-4 h-4 mr-2" />
                Book Assessment
              </Button>
            </Link>
          </div>
        </nav>

        {/* ============ MOBILE TOGGLE ============ */}
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

      {/* ============ MOBILE PANEL ============ */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-card/95 backdrop-blur-xl border-b border-subtle",
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-6 gap-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label
                    )
                  }
                  aria-expanded={mobileExpanded === item.label}
                  className={cn(
                    "w-full flex items-center justify-between text-lg font-medium py-3 border-b border-subtle transition-colors",
                    isDropdownActive(item.children)
                      ? "text-accent font-bold"
                      : "text-soft"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      mobileExpanded === item.label && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    mobileExpanded === item.label
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pl-4 py-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMenuOpen(false)}
                        aria-current={isActive(child.href) ? "page" : undefined}
                        className={cn(
                          "flex items-center gap-3 py-2.5 px-3 rounded-lg text-base transition-colors",
                          isActive(child.href)
                            ? "text-accent font-semibold bg-accent/10"
                            : "text-soft hover:text-foreground hover:bg-subtle"
                        )}
                      >
                        <span className="text-dim shrink-0">
                          {child.icon}
                        </span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(item.href!) ? "page" : undefined}
                className={cn(
                  "text-lg font-medium py-3 border-b border-subtle transition-colors",
                  isActive(item.href!)
                    ? "text-accent font-bold"
                    : "text-soft hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/booking/"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4"
          >
            <Button className="w-full bg-accent hover:bg-accent/90 text-white border-0">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Book Assessment
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
