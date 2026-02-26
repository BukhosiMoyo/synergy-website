export interface LocationSEO {
    title: string;
    description: string;
}

export interface LocationData {
    slug: string;
    city: string;
    province?: string;
    summary: string;
    focusSolutions: string[]; // Maps to slug in solutions.ts
    seo: LocationSEO;
}

export const locations: LocationData[] = [
    {
        slug: "pretoria",
        city: "Pretoria",
        province: "Gauteng",
        summary: "Supporting National Departments and Agencies with strict GRAP and PFMA compliant asset reporting frameworks.",
        focusSolutions: ["fixed-asset-management", "compliance-audit-reporting", "system-implementation-training"],
        seo: {
            title: "Asset Management Solutions in Pretoria | Synergy Evolution",
            description: "Expert public sector asset compliance and tracking systems for government agencies headquartered in Pretoria."
        }
    },
    {
        slug: "johannesburg",
        city: "Johannesburg",
        province: "Gauteng",
        summary: "Delivering enterprise-grade capital expenditure control and custodian tracking for multi-site private corporations.",
        focusSolutions: ["asset-verification", "lifecycle-custodian-tracking", "fixed-asset-management"],
        seo: {
            title: "Asset Management Solutions in Johannesburg | Synergy Evolution",
            description: "Scalable asset verification and lifecycle tracking solutions for corporate enterprises operating in Johannesburg."
        }
    },
    {
        slug: "cape-town",
        city: "Cape Town",
        province: "Western Cape",
        summary: "Bridging municipal infrastructure tracking and high-value private manufacturing asset visibility.",
        focusSolutions: ["fixed-asset-management", "asset-verification", "compliance-audit-reporting"],
        seo: {
            title: "Asset Management Solutions in Cape Town | Synergy Evolution",
            description: "Comprehensive financial and physical asset reconciliation for public and private organizations in Cape Town."
        }
    },
    {
        slug: "durban",
        city: "Durban",
        province: "KwaZulu-Natal",
        summary: "Securing distributed logistics, port-adjacent warehousing, and provincial entity asset registries.",
        focusSolutions: ["lifecycle-custodian-tracking", "asset-verification", "system-implementation-training"],
        seo: {
            title: "Asset Management Solutions in Durban | Synergy Evolution",
            description: "Audit-ready asset tracking and custodian accountability systems for logistics and public sector clients in Durban."
        }
    },
    {
        slug: "gqeberha",
        city: "Gqeberha",
        province: "Eastern Cape",
        summary: "Establishing baseline physical verifications to overturn historical negative audit findings in manufacturing and local government.",
        focusSolutions: ["asset-verification", "compliance-audit-reporting", "fixed-asset-management"],
        seo: {
            title: "Asset Management Solutions in Gqeberha | Synergy Evolution",
            description: "Physical asset verification and GRAP-aligned reconciliation services for entities based in Gqeberha."
        }
    },
    {
        slug: "east-london",
        city: "East London",
        province: "Eastern Cape",
        summary: "Providing localized, hands-on asset validation and systemic configuration for distributed coastal operations.",
        focusSolutions: ["system-implementation-training", "fixed-asset-management", "lifecycle-custodian-tracking"],
        seo: {
            title: "Asset Management Solutions in East London | Synergy Evolution",
            description: "Professional asset management system implementation and condition tracking for operations in East London."
        }
    }
];
