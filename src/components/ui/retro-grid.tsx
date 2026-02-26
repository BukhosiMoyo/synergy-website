import { cn } from "@/lib/utils";

export function RetroGrid({
    className,
    angle = 65,
}: {
    className?: string;
    angle?: number;
}) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute size-full overflow-hidden opacity-50",
                className,
            )}
            style={{
                perspective: "200px",
            }}
            aria-hidden="true"
        >
            {/* Animated perspective grid */}
            <div className="absolute inset-0" style={{ transform: `rotateX(${angle}deg)` }}>
                <div
                    className="animate-grid"
                    style={{
                        backgroundRepeat: "repeat",
                        backgroundSize: "60px 60px",
                        height: "300vh",
                        inset: "0% 0px",
                        marginLeft: "-50%",
                        transformOrigin: "100% 0 0",
                        width: "600vw",
                        backgroundImage: `linear-gradient(to right, rgb(var(--border-base) / 0.15) 1px, transparent 0), linear-gradient(to bottom, rgb(var(--border-base) / 0.15) 1px, transparent 0)`,
                    }}
                />
            </div>

            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%" />
        </div>
    );
}
