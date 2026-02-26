import { MetadataRoute } from "next";
import { solutions } from "@/data/solutions";
import { caseStudies } from "@/data/case-studies";
import { locations } from "@/data/locations";

// WARNING: In production, set NEXT_PUBLIC_SITE_URL to your canonical domain (e.g. https://synergyevolution.co.za).
// Falling back to localhost will produce invalid sitemap URLs for search engines.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // ---- STATIC ROUTES ----
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${siteUrl}/solutions`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/case-studies`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/locations`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/asset-management`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/public-sector-asset-management`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/private-sector-asset-management`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/booking`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${siteUrl}/contact-us`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];

    // ---- DYNAMIC ROUTES: Solutions ----
    const solutionRoutes: MetadataRoute.Sitemap = solutions.map((solution) => ({
        url: `${siteUrl}/solutions/${solution.slug}`,
        lastModified: now, // TODO: Use solution.updatedAt when CMS is integrated
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // ---- DYNAMIC ROUTES: Case Studies ----
    const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
        url: `${siteUrl}/case-studies/${study.slug}`,
        lastModified: now, // TODO: Use study.updatedAt when CMS is integrated
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // ---- DYNAMIC ROUTES: Locations ----
    const locationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
        url: `${siteUrl}/locations/${location.slug}`,
        lastModified: now, // TODO: Use location.updatedAt when CMS is integrated
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [
        ...staticRoutes,
        ...solutionRoutes,
        ...caseStudyRoutes,
        ...locationRoutes,
    ];
}
