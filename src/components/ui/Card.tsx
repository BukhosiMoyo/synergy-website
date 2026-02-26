import { cn } from "@/lib/utils";

interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}

/**
 * Card Component — Dual Mode
 * Uses semantic classes that auto-adapt to light/dark
 */
export default function Card({ title, description, icon, className, children }: CardProps) {
    return (
        <div
            className={cn(
                "group relative p-6 md:p-8 rounded-2xl",
                "bg-subtle border border-subtle",
                "card-hover-glow",
                className
            )}
        >
            {icon && (
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-5 transition-colors group-hover:bg-accent/15">
                    {icon}
                </div>
            )}
            <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                {title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
                {description}
            </p>
            {children}
        </div>
    );
}
