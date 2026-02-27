export type Sector = "Public" | "Private" | "NGO" | "Other";
export type ServiceType = "Asset Management" | "Compliance" | "System Implementation" | "Reporting" | "Other";

export interface CaseStudy {
    slug: string;
    title: string;
    sector: Sector;
    serviceType: ServiceType;
    summary: string;
    highlights: string[];
    year?: string;
    featured?: boolean;
    contractValue?: string;
    assetCount?: string;
    duration?: string;
    executionLevel?: string;
    auditResult?: string;
    /** Narrative introduction paragraph */
    introduction?: string;
    /** Client background info */
    clientBackground?: string;
    /** Detailed challenge paragraphs */
    challenges?: string[];
    /** Solution implementation details */
    solutionImplemented?: string[];
    /** Step-by-step implementation process */
    implementationProcess?: string[];
    /** Quantified results */
    results?: string[];
    /** Client testimonial */
    testimonial?: { quote: string; author: string; role: string };
    /** Scope / location info */
    scope?: string;
}
