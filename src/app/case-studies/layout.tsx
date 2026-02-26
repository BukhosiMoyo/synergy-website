import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Synergy Evolution",
    description: "Explore real-world asset management, compliance, and digital delivery projects executed across South Africa.",
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
