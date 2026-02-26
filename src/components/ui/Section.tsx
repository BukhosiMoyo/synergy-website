import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    badge?: string;
    variant?: "default" | "muted" | "inverse";
    spacing?: "none" | "sm" | "md" | "lg";
    id?: string;
}

/**
 * Section Component — Dark SaaS Aesthetic
 * 
 * - default: dark background
 * - muted: slightly lighter dark surface
 * - inverse: light background for contrast sections
 */
export default function Section({
    children,
    className,
    title,
    subtitle,
    badge,
    variant = "default",
    spacing = "md",
    id
}: SectionProps) {

    const variants = {
        default: "bg-background text-foreground",
        muted: "bg-surface text-foreground",
        inverse: "bg-surface-inverse text-foreground-inverse"
    };

    const spacings = {
        none: "py-0",
        sm: "py-12 md:py-16",
        md: "py-20 md:py-28",
        lg: "py-24 md:py-36"
    };

    return (
        <section
            id={id}
            className={cn(
                "transition-colors duration-300 relative overflow-hidden",
                variants[variant],
                spacings[spacing],
                className
            )}
        >
            <Container>
                {(badge || title || subtitle) && (
                    <div className="text-center mb-16">
                        {badge && (
                            <span className="section-badge mb-4 inline-block">
                                {badge}
                            </span>
                        )}
                        {title && (
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-inherit leading-tight">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="mt-4 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </Container>
        </section>
    );
}
