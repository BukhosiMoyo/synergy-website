"use client";

import React, { useState, useMemo } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Search, Filter, ArrowRight, BookOpen, Layers, Lightbulb, FileText } from "lucide-react";
import { caseStudies, Sector, ServiceType } from "@/data/case-studies";
import { BGPattern } from "@/components/ui/bg-pattern";

// ----------------------------------------
// We want this page to be interactive for filters, so it's a "use client" component.
// NOTE: Since "use client" can't export Metadata directly, we handle SEO in layout.tsx 
// or by knowing Next.js will SSR the initial state of this page.
// ----------------------------------------

export default function CaseStudiesIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSector, setFilterSector] = useState<Sector | "All">("All");
  const [filterService, setFilterService] = useState<ServiceType | "All">("All");
  const [sortOrder, setSortOrder] = useState<"Recent" | "A-Z">("Recent");

  // Memoize the filtering logic so it's fast
  const filteredAndSortedStudies = useMemo(() => {
    let result = [...caseStudies];

    // 1. Text Search
    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(study =>
        study.title.toLowerCase().includes(lowerQuery) ||
        study.summary.toLowerCase().includes(lowerQuery)
      );
    }

    // 2. Sector Filter
    if (filterSector !== "All") {
      result = result.filter(study => study.sector === filterSector);
    }

    // 3. Service Filter
    if (filterService !== "All") {
      result = result.filter(study => study.serviceType === filterService);
    }

    // 4. Sort
    if (sortOrder === "A-Z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // "Recent" uses year or fallback to original order
      result.sort((a, b) => {
        const yearA = a.year ? parseInt(a.year) : 0;
        const yearB = b.year ? parseInt(b.year) : 0;
        return yearB - yearA; // descending
      });
    }

    return result;
  }, [searchQuery, filterSector, filterService, sortOrder]);

  return (
    <main className="bg-background pt-24 pb-16 min-h-screen">

      {/* 1) HERO */}
      <Section variant="default" className="pt-8 pb-12 border-b border-subtle">
        <BGPattern variant="dots" mask="fade-edges" size={20} />
        <div className="max-w-4xl max-md:text-center">
          <div className="inline-flex items-center px-3 py-1 bg-highlight/10 text-highlight font-semibold text-sm rounded-full mb-6 max-md:mx-auto">
            <BookOpen className="w-4 h-4 mr-2" /> Proof of Delivery
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-8 max-w-2xl">
            Real-world work across websites, systems, and operational platforms. We don&apos;t just consult—we deliver compliant, measurable outcomes.
          </p>
          {/* Filter Preview Chips */}
          <div className="flex flex-wrap gap-2 max-md:justify-center">
            <span className="px-3 py-1 bg-surface border border-border rounded-full text-sm font-medium text-muted">Asset Management</span>
            <span className="px-3 py-1 bg-surface border border-border rounded-full text-sm font-medium text-muted">Web</span>
            <span className="px-3 py-1 bg-surface border border-border rounded-full text-sm font-medium text-muted">Compliance</span>
            <span className="px-3 py-1 bg-surface border border-border rounded-full text-sm font-medium text-muted">Other</span>
          </div>
        </div>
      </Section>

      {/* 2) FILTER + SEARCH BAR */}
      <div className="bg-surface sticky top-[72px] z-30 border-b border-border shadow-sm py-4">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">

            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search case studies"
                className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            {/* Filters & Sort */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                <Filter className="w-4 h-4 text-muted" />
                <select
                  className="bg-transparent text-sm text-foreground font-medium outline-none cursor-pointer"
                  value={filterSector}
                  onChange={(e) => setFilterSector(e.target.value as Sector | "All")}
                  aria-label="Filter by Sector"
                >
                  <option value="All">All Sectors</option>
                  <option value="Public">Public Sector</option>
                  <option value="Private">Private Sector</option>
                  <option value="NGO">NGO / Non-profit</option>
                </select>
              </div>

              <div className="flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                <Filter className="w-4 h-4 text-muted" />
                <select
                  className="bg-transparent text-sm text-foreground font-medium outline-none cursor-pointer"
                  value={filterService}
                  onChange={(e) => setFilterService(e.target.value as ServiceType | "All")}
                  aria-label="Filter by Service Type"
                >
                  <option value="All">All Services</option>
                  <option value="Asset Management">Asset Management</option>
                  <option value="Website">Website</option>
                  <option value="Reporting">Reporting</option>
                  <option value="Compliance">Compliance</option>
                </select>
              </div>

              <select
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground font-medium outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "Recent" | "A-Z")}
                aria-label="Sort Order"
              >
                <option value="Recent">Sort: Most Recent</option>
                <option value="A-Z">Sort: A–Z</option>
              </select>
            </div>

          </div>
        </Container>
      </div>

      {/* 3) CASE STUDY GRID */}
      <Section variant="default" className="min-h-[40vh]">
        <div className="mb-6 flex justify-between items-center" aria-live="polite">
          <p className="text-sm font-semibold text-muted">
            Showing {filteredAndSortedStudies.length} {filteredAndSortedStudies.length === 1 ? 'case study' : 'case studies'}
          </p>
          {filteredAndSortedStudies.length === 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setFilterSector("All");
                setFilterService("All");
              }}
            >
              Reset Filters
            </Button>
          )}
        </div>

        {filteredAndSortedStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedStudies.map((study) => (
              <Link
                href={`/case-studies/${study.slug}`}
                key={study.slug}
                className="group flex flex-col bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-md outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded">
                    {study.sector}
                  </span>
                  <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded">
                    {study.serviceType}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-muted leading-relaxed mb-8 flex-grow">
                  {study.summary}
                </p>

                {/* Link Footer */}
                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  <span>Read case study</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface border border-border border-dashed rounded-2xl">
            <FileText className="w-12 h-12 text-muted mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-foreground mb-2">No matching case studies found</h3>
            <p className="text-muted">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </Section>

      {/* 4) "HOW WE WORK" STRIP */}
      <Section variant="inverse">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-inverse mb-4">Our Approach</h2>
          <p className="text-foreground-inverse/80">A proven methodology built for complex, highly regulated environments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-highlight" />
            </div>
            <h3 className="text-xl font-bold text-foreground-inverse mb-3">1. Discover</h3>
            <p className="text-foreground-inverse/80 leading-relaxed">
              We map operational flaws, uncover data discrepancies, and define strict compliance requirements.
            </p>
          </div>
          <div className="text-center p-6 relative">
            {/* Connecting line (Desktop only) */}
            <div className="hidden md:block absolute top-[28px] -left-1/2 w-full h-[2px] bg-surface-inverse -z-10" />
            <div className="hidden md:block absolute top-[28px] -right-1/2 w-full h-[2px] bg-surface-inverse -z-10" />

            <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Layers className="w-8 h-8 text-highlight" />
            </div>
            <h3 className="text-xl font-bold text-foreground-inverse mb-3">2. Build</h3>
            <p className="text-foreground-inverse/80 leading-relaxed">
              We configure platforms and execute physical verifications tailored precisely to your institutional framework.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-surface-inverse rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-highlight" />
            </div>
            <h3 className="text-xl font-bold text-foreground-inverse mb-3">3. Improve</h3>
            <p className="text-foreground-inverse/80 leading-relaxed">
              We deliver final consolidated reports and establish robust SOPs to ensure lasting operational excellence.
            </p>
          </div>
        </div>
      </Section>

      {/* 5) CTA BLOCK */}
      <Section variant="default" className="text-center py-20 border-t border-subtle">
        <BGPattern variant="diagonal-stripes" mask="fade-edges" size={16} />
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">Want similar results?</h2>
          <p className="text-lg text-muted mb-10">
            Speak to our specialists about securing a comprehensive, compliant solution tailored to your statutory requirements.
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
                View Solutions
              </Button>
            </Link>
          </div>
        </div>
      </Section>

    </main>
  );
}
