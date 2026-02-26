"use client";

import React, { useEffect, useRef } from "react";

// --- CONFIGURATION: INFRACORP STYLE ---
const GRID_CLUSTERS = 8;         // How many distinct grid groups to spawn
const DOTS_PER_ROW = 5;          // e.g., 5 means a 5x5 grid (25 dots per cluster)
const GRID_SPACING = 35;         // Pixel spacing between dots in a grid
const INTERACTION_RADIUS = 200;  // How wide the mouse "flashlight" is
const BASE_DRIFT_SPEED = 0.15;   // Extremely slow, majestic parallax drift

interface Dot {
    offsetX: number; // Offset from grid center
    offsetY: number; // Offset from grid center
    size: number;
}

interface GridCluster {
    x: number;
    y: number;
    vx: number;
    vy: number;
    dots: Dot[];
    layerSpeed: number; // Parallax depth layer
}

/**
 * Premium HTML5 Canvas Data Grid Background
 * Inspired by ultra-high-end corporate site mechanics:
 * - Structured dot matrices (Data blocs) instead of random constellations
 * - No connecting lines
 * - Mouse acts as a focus lens / illuminator rather than a physics repeller
 */
export default function HeroParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const clustersRef = useRef<GridCluster[]>([]);
    const mouseRef = useRef({ x: -999, y: -999, targetX: -999, targetY: -999 });
    const isDarkRef = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;

        // --- Theme Detection ---
        const checkTheme = () => {
            isDarkRef.current = document.documentElement.classList.contains("dark");
        };
        checkTheme();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") checkTheme();
            });
        });
        observer.observe(document.documentElement, { attributes: true });

        // --- Sizing & Scaling ---
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (!parent) return;

            const w = parent.clientWidth;
            const h = parent.clientHeight;

            const dpr = window.devicePixelRatio || 1;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.scale(dpr, dpr);

            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;

            initGrids(w, h);
        };

        const initGrids = (width: number, height: number) => {
            clustersRef.current = [];

            for (let i = 0; i < GRID_CLUSTERS; i++) {
                const dots: Dot[] = [];
                // Calculate total width/height of the grid block to center it
                const gridDim = (DOTS_PER_ROW - 1) * GRID_SPACING;
                const halfGrid = gridDim / 2;

                // Create the organized matrix
                for (let row = 0; row < DOTS_PER_ROW; row++) {
                    for (let col = 0; col < DOTS_PER_ROW; col++) {
                        // Very rarely, skip a dot to make it look like organic data
                        if (Math.random() > 0.95) continue;

                        dots.push({
                            offsetX: col * GRID_SPACING - halfGrid,
                            offsetY: row * GRID_SPACING - halfGrid,
                            size: Math.random() > 0.8 ? 1.5 : 1.0, // Occasional slightly larger dot
                        });
                    }
                }

                clustersRef.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * BASE_DRIFT_SPEED,
                    vy: (Math.random() - 0.5) * BASE_DRIFT_SPEED,
                    layerSpeed: 0.5 + Math.random() * 0.8, // Parallax modifier (some drift faster)
                    dots: dots,
                });
            }
        };

        // --- Interaction ---
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            // Smooth mouse trailing: target coordinates
            mouseRef.current.targetX = e.clientX - rect.left;
            mouseRef.current.targetY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseRef.current.targetX = -999;
            mouseRef.current.targetY = -999;
        };

        window.addEventListener("resize", resizeCanvas);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        resizeCanvas();

        // --- Animation Loop ---
        const draw = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const w = parent.clientWidth;
            const h = parent.clientHeight;

            ctx.clearRect(0, 0, w, h);

            // Smooth mouse interpolation (ease the mouse coordinate so lighting feels liquid/slow)
            mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
            mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            const isDark = isDarkRef.current;
            // Base colors (extracted RGB to allow manual alpha passing)
            const r = isDark ? 96 : 37;
            const g = isDark ? 165 : 100; // Adjusted slightly for light mode corporate feel
            const b = isDark ? 250 : 235;

            const baseOpacity = isDark ? 0.25 : 0.15;    // Higher baseline visibility
            const activeOpacity = isDark ? 0.9 : 0.7;    // Bright when illuminated by mouse

            const clusters = clustersRef.current;

            for (let i = 0; i < clusters.length; i++) {
                const cluster = clusters[i];

                // Global Parallax Drift
                cluster.x += cluster.vx * cluster.layerSpeed;
                cluster.y += cluster.vy * cluster.layerSpeed;

                // Seamless looping/wrapping around the screen edges
                // Provide generous padding so grids don't pop abruptly
                const padding = DOTS_PER_ROW * GRID_SPACING;
                if (cluster.x < -padding) cluster.x = w + padding;
                if (cluster.x > w + padding) cluster.x = -padding;
                if (cluster.y < -padding) cluster.y = h + padding;
                if (cluster.y > h + padding) cluster.y = -padding;

                // Draw each dot in the cluster matrix
                for (let j = 0; j < cluster.dots.length; j++) {
                    const dot = cluster.dots[j];
                    const absoluteX = cluster.x + dot.offsetX;
                    const absoluteY = cluster.y + dot.offsetY;

                    // Mouse Focus Lighting (Flashlight effect)
                    const dx = mx - absoluteX;
                    const dy = my - absoluteY;
                    const distSq = dx * dx + dy * dy;

                    let drawOpacity = baseOpacity;

                    // If near the mouse cursor, dynamically illuminate it based on proximity
                    if (mx !== -999 && distSq < INTERACTION_RADIUS * INTERACTION_RADIUS) {
                        const dist = Math.sqrt(distSq);
                        const illuminationFactor = 1 - (dist / INTERACTION_RADIUS);
                        // Easing the illumination factor makes the light falloff feel softer (pow)
                        drawOpacity = baseOpacity + (activeOpacity - baseOpacity) * Math.pow(illuminationFactor, 1.5);
                    }

                    // Only draw if it has opacity to save canvas compute
                    if (drawOpacity > 0.01) {
                        ctx.beginPath();
                        ctx.arc(absoluteX, absoluteY, dot.size, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${drawOpacity})`;
                        ctx.fill();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        // --- Cleanup ---
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-auto block transition-opacity duration-1000"
            style={{ width: "100%", height: "100%" }}
            aria-hidden="true"
        />
    );
}
