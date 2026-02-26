"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
    id: number;
    title: string;
    date: string;
    content: string;
    category: string;
    icon: React.ElementType;
    relatedIds: number[];
    status: "completed" | "in-progress" | "pending";
    energy: number;
}

interface RadialOrbitalTimelineProps {
    timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
    timelineData,
}: RadialOrbitalTimelineProps) {
    const [mounted, setMounted] = useState(false);
    const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
    const [rotationAngle, setRotationAngle] = useState<number>(0);
    const [autoRotate, setAutoRotate] = useState<boolean>(true);
    const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
    const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const orbitRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

    useEffect(() => { setMounted(true); }, []);

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({});
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        }
    };

    const toggleItem = (id: number) => {
        setExpandedItems((prev) => {
            const newState: Record<number, boolean> = {};
            Object.keys(prev).forEach((key) => { newState[parseInt(key)] = false; });
            newState[id] = !prev[id];

            if (!prev[id]) {
                setActiveNodeId(id);
                setAutoRotate(false);
                const relatedItems = getRelatedItems(id);
                const newPulse: Record<number, boolean> = {};
                relatedItems.forEach((relId) => { newPulse[relId] = true; });
                setPulseEffect(newPulse);
                centerViewOnNode(id);
            } else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
            }
            return newState;
        });
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (autoRotate && mounted) {
            timer = setInterval(() => {
                setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
            }, 50);
        }
        return () => { if (timer) clearInterval(timer); };
    }, [autoRotate, mounted]);

    const centerViewOnNode = (nodeId: number) => {
        const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
        const totalNodes = timelineData.length;
        const targetAngle = (nodeIndex / totalNodes) * 360;
        setRotationAngle(270 - targetAngle);
    };

    const calculateNodePosition = (index: number, total: number) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360;
        const radius = 300;
        const radian = (angle * Math.PI) / 180;
        const x = Math.round(radius * Math.cos(radian) * 100) / 100;
        const y = Math.round(radius * Math.sin(radian) * 100) / 100;
        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        return { x, y, zIndex };
    };

    const getRelatedItems = (itemId: number): number[] => {
        const currentItem = timelineData.find((item) => item.id === itemId);
        return currentItem ? currentItem.relatedIds : [];
    };

    const isRelatedToActive = (itemId: number): boolean => {
        if (!activeNodeId) return false;
        return getRelatedItems(activeNodeId).includes(itemId);
    };

    return (
        <div
            className="w-full h-[750px] md:h-[850px] flex flex-col items-center justify-center rounded-2xl overflow-hidden relative bg-background border border-subtle"
            ref={containerRef}
            onClick={handleContainerClick}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div
                    className="absolute w-full h-full flex items-center justify-center"
                    ref={orbitRef}
                    style={{ perspective: "1200px" }}
                >
                    {/* Center Orb */}
                    <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-400 animate-pulse flex items-center justify-center z-10">
                        <div className="absolute w-24 h-24 rounded-full border border-foreground/15 animate-ping opacity-60" />
                        <div className="absolute w-28 h-28 rounded-full border border-foreground/8 animate-ping opacity-40" style={{ animationDelay: "0.5s" }} />
                        <div className="w-10 h-10 rounded-full bg-foreground/80 backdrop-blur-md" />
                    </div>

                    {/* Orbit Ring */}
                    <div className="absolute w-[600px] h-[600px] rounded-full border border-foreground/8" />
                    <div className="absolute w-[602px] h-[602px] rounded-full border border-foreground/4" />

                    {/* Nodes */}
                    {mounted && timelineData.map((item, index) => {
                        const position = calculateNodePosition(index, timelineData.length);
                        const isExpanded = expandedItems[item.id];
                        const isRelated = isRelatedToActive(item.id);
                        const isPulsing = pulseEffect[item.id];
                        const Icon = item.icon;
                        const stepNum = String(index + 1).padStart(2, "0");

                        return (
                            <div
                                key={item.id}
                                ref={(el) => { nodeRefs.current[item.id] = el; }}
                                className="absolute transition-all duration-700 ease-out cursor-pointer"
                                style={{
                                    transform: `translate(${position.x}px, ${position.y}px)`,
                                    zIndex: isExpanded ? 200 : position.zIndex,
                                    opacity: isExpanded ? 1 : activeNodeId && !isExpanded && !isRelated ? 0.25 : 1,
                                }}
                                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
                            >
                                {/* Energy Glow */}
                                <div
                                    className={`absolute rounded-full ${isPulsing ? "animate-pulse" : ""}`}
                                    style={{
                                        background: `radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)`,
                                        width: `${item.energy * 0.8 + 60}px`,
                                        height: `${item.energy * 0.8 + 60}px`,
                                        left: `calc(50% - ${(item.energy * 0.8 + 60) / 2}px)`,
                                        top: `calc(50% - ${(item.energy * 0.8 + 60) / 2}px)`,
                                    }}
                                />

                                {/* Morphing Title — moves ABOVE icon when expanded */}
                                <div
                                    className={`
                    absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ease-out
                    ${isExpanded
                                            ? "bottom-full mb-4 text-[22px] md:text-[26px] font-bold text-foreground tracking-tight"
                                            : "top-full mt-4"
                                        }
                  `}
                                >
                                    {isExpanded ? (
                                        <span>{item.title}</span>
                                    ) : (
                                        <span className={`
                      inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide border transition-all duration-300
                      ${activeNodeId
                                                ? "bg-foreground/5 border-foreground/10 text-foreground/40"
                                                : "bg-blue-600/10 border-blue-500/20 text-blue-600 dark:bg-blue-500/15 dark:border-blue-400/25 dark:text-blue-400"
                                            }
                    `}>
                                            <span className="opacity-60">{stepNum}</span>
                                            {item.title}
                                        </span>
                                    )}
                                </div>

                                {/* Node Circle */}
                                <div
                                    className={`
                    rounded-full flex items-center justify-center border-2 transition-all duration-500 ease-out mx-auto
                    ${isExpanded
                                            ? "w-20 h-20 bg-blue-600 text-white border-blue-500 shadow-2xl shadow-blue-600/40"
                                            : isRelated
                                                ? "w-16 h-16 bg-blue-500/60 text-white border-blue-400 animate-pulse shadow-lg shadow-blue-500/25"
                                                : activeNodeId
                                                    ? "w-12 h-12 bg-foreground/8 text-foreground/30 border-foreground/10"
                                                    : "w-16 h-16 bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/35 hover:shadow-xl hover:shadow-blue-600/45 hover:scale-110"
                                        }
                  `}
                                >
                                    <Icon size={isExpanded ? 32 : activeNodeId && !isExpanded ? 18 : 28} />
                                </div>

                                {/* Expanded Card — Below the icon */}
                                {isExpanded && (
                                    <div
                                        className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-80 rounded-2xl shadow-2xl overflow-visible p-6 bg-background/95 backdrop-blur-xl border border-subtle"
                                        style={{ boxShadow: "0 8px 40px rgba(59, 130, 246, 0.12), 0 0 0 1px rgba(59,130,246,0.05)" }}
                                    >
                                        {/* Connector line */}
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-blue-500/50 to-foreground/10" />

                                        <div className="flex justify-between items-center mb-4">
                                            <Badge
                                                className={`px-3 py-1 text-xs font-semibold ${item.status === "completed"
                                                        ? "bg-blue-600 text-white border-blue-600"
                                                        : item.status === "in-progress"
                                                            ? "bg-foreground text-background border-foreground"
                                                            : "bg-foreground/10 text-foreground/60 border-foreground/20"
                                                    }`}
                                            >
                                                {item.status === "completed" ? "COMPLETE" : item.status === "in-progress" ? "IN PROGRESS" : "PENDING"}
                                            </Badge>
                                            <span className="text-xs font-mono text-foreground/40">{item.date}</span>
                                        </div>

                                        <p className="text-sm text-foreground/70 leading-relaxed mb-5">{item.content}</p>

                                        {/* Progress Bar */}
                                        <div className="mb-5 p-3 rounded-xl bg-foreground/[0.03] border border-subtle">
                                            <div className="flex justify-between items-center text-xs mb-2">
                                                <span className="flex items-center gap-1 text-foreground/50 font-medium">
                                                    <Zap size={12} /> Progress
                                                </span>
                                                <span className="font-mono font-semibold text-foreground/60">{item.energy}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-foreground/8 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-700"
                                                    style={{ width: `${item.energy}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Connected Steps */}
                                        {item.relatedIds.length > 0 && (
                                            <div>
                                                <h5 className="text-[11px] uppercase tracking-wider font-semibold text-foreground/40 mb-3">
                                                    Connected Steps
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.relatedIds.map((relatedId) => {
                                                        const relatedItem = timelineData.find((i) => i.id === relatedId);
                                                        return (
                                                            <button
                                                                key={relatedId}
                                                                className="flex items-center gap-1.5 h-8 px-3 text-xs font-medium rounded-lg border border-subtle bg-foreground/[0.03] hover:bg-foreground/[0.06] text-foreground/60 hover:text-foreground transition-all"
                                                                onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                                            >
                                                                {relatedItem?.title}
                                                                <ArrowRight size={10} className="opacity-50" />
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
