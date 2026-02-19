import { cn } from "@/lib/utils";

export default function Card({ title, description, className }: { title: string, description: string, className?: string }) {
    return (
        <div className={cn(
            "p-8 rounded-xl border border-border-base bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
            className
        )}>
            <h3 className="text-xl font-bold mb-3 text-text">{title}</h3>
            <p className="text-text-muted leading-relaxed">{description}</p>
        </div>
    );
}
