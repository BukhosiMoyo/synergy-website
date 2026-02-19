import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    variant?: "default" | "muted" | "inverse";
    spacing?: "none" | "sm" | "md" | "lg";
}

/**
 * Stabilized Section Component
 * 
 * - default: bg-background text-foreground
 * - muted: bg-surface text-foreground
 * - inverse: bg-surface-inverse text-foreground-inverse (Dark navy in light mode, resolves to dark in dark mode)
 */
export default function Section({
    children,
    className,
    title,
    variant = "default",
    spacing = "md"
}: SectionProps) {

    const variants = {
        default: "bg-background text-foreground",
        muted: "bg-surface text-foreground",
        inverse: "bg-surface-inverse text-foreground-inverse"
    };

    const spacings = {
        none: "py-0",
        sm: "py-12 md:py-16",
        md: "py-20 md:py-24",
        lg: "py-24 md:py-32"
    };

    return (
        <section
            className={cn(
                "transition-colors duration-300 relative",
                variants[variant],
                spacings[spacing],
                className
            )}
        >
            <Container>
                {title && (
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-inherit">
                        {title}
                    </h2>
                )}
                {children}
            </Container>
        </section>
    );
}
