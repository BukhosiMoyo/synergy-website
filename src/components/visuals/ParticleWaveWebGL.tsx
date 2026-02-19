"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { PARTICLE_CONFIG } from "@/lib/particles/particleWaveConfig";
import { clamp, lerp } from "@/lib/particles/math";
import { usePrefersReducedMotion } from "@/lib/particles/usePrefersReducedMotion";

/**
 * ParticleWaveWebGL Component
 * Interactive WebGL particle field for hero background.
 */
export default function ParticleWaveWebGL() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    // Simulation state refs (to avoid re-renders)
    const mouseRef = useRef(new THREE.Vector2(-999, -999));
    const raycasterRef = useRef(new THREE.Raycaster());
    const planeRef = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
    const intersectionRef = useRef(new THREE.Vector3());

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Initialization ---
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            PARTICLE_CONFIG.fov,
            width / height,
            0.1,
            1000
        );
        camera.position.z = PARTICLE_CONFIG.cameraZ;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        // --- Particles ---
        const count = prefersReducedMotion
            ? PARTICLE_CONFIG.particleCountReduced
            : PARTICLE_CONFIG.particleCount;

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);
        const basePositions = new Float32Array(count * 3);
        const sizes = new Float32Array(count); // NEW: Varied sizes

        const areaWidth = PARTICLE_CONFIG.width;
        const areaDepth = PARTICLE_CONFIG.depth;

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * areaWidth;
            const y = (Math.random() - 0.5) * 5;
            const z = (Math.random() - 0.5) * areaDepth;

            const i3 = i * 3;
            positions[i3] = x;
            positions[i3 + 1] = y;
            positions[i3 + 2] = z;

            basePositions[i3] = x;
            basePositions[i3 + 1] = y;
            basePositions[i3 + 2] = z;

            velocities[i3] = 0;
            velocities[i3 + 1] = 0;
            velocities[i3 + 2] = 0;

            // Random size between min and max
            sizes[i] = PARTICLE_CONFIG.minPointSize + Math.random() * (PARTICLE_CONFIG.maxPointSize - PARTICLE_CONFIG.minPointSize);
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1)); // NEW attribute

        // Custom Shader for Star-like scaling
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uColor: { value: new THREE.Color(PARTICLE_CONFIG.colors.accent.r, PARTICLE_CONFIG.colors.accent.g, PARTICLE_CONFIG.colors.accent.b) },
                uOpacity: { value: 0.6 }
            },
            vertexShader: `
                attribute float aSize;
                varying float vOpacity;
                void main() {
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    // Size attenuation: closer particles look bigger
                    gl_PointSize = aSize * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                    vOpacity = aSize / ${PARTICLE_CONFIG.maxPointSize.toFixed(1)}; // Brighter stars are larger
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                uniform float uOpacity;
                varying float vOpacity;
                void main() {
                    // Soft circular particles
                    float dist = distance(gl_PointCoord, vec2(0.5));
                    if (dist > 0.5) discard;
                    
                    float strength = 1.0 - (dist * 2.0);
                    gl_FragColor = vec4(uColor, strength * uOpacity * vOpacity);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // --- Interaction ---
        const handleMouseMove = (event: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseRef.current.x = ((event.clientX - rect.left) / width) * 2 - 1;
            mouseRef.current.y = -((event.clientY - rect.top) / height) * 2 + 1;
        };

        const handleResize = () => {
            const W = container.clientWidth;
            const H = container.clientHeight;
            camera.aspect = W / H;
            camera.updateProjectionMatrix();
            renderer.setSize(W, H);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        // --- Loop ---
        let animationFrameId: number;
        let time = 0;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            time += PARTICLE_CONFIG.flowSpeed * 0.01;

            // Get mouse position in world space
            raycasterRef.current.setFromCamera(mouseRef.current, camera);
            raycasterRef.current.ray.intersectPlane(planeRef.current, intersectionRef.current);

            const posAttr = geometry.attributes.position as THREE.BufferAttribute;
            const pos = posAttr.array as Float32Array;

            for (let i = 0; i < count; i++) {
                const i3 = i * 3;

                // 1. Calculate Wave Target (Base Position + Wave)
                // We use basePositions[i3] as the X-anchor
                const x = basePositions[i3];
                const z = basePositions[i3 + 2];

                // Wave function (sine + some noise-like variation)
                const wave = Math.sin(x * PARTICLE_CONFIG.baseWaveFrequency + time) * PARTICLE_CONFIG.baseWaveAmplitude;
                const waveY = wave + Math.sin(z * 0.5 + time * 0.5) * 0.5;

                // 2. Return Force (Spring back to wave)
                const targetY = waveY + (basePositions[i3 + 1] * 0.2); // Maintain original vertical distribution spread

                const ry = targetY - pos[i3 + 1];
                const rx = x - pos[i3];
                const rz = z - pos[i3 + 2];

                if (!prefersReducedMotion) {
                    // Apply mouse repel
                    const dx = pos[i3] - intersectionRef.current.x;
                    const dy = pos[i3 + 1] - intersectionRef.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < PARTICLE_CONFIG.repelRadius) {
                        const force = (1 - distance / PARTICLE_CONFIG.repelRadius) * PARTICLE_CONFIG.repelStrength;
                        velocities[i3] += (dx / distance) * force;
                        velocities[i3 + 1] += (dy / distance) * force;
                    }
                }

                // Spring forces
                velocities[i3] += rx * PARTICLE_CONFIG.springStrength;
                velocities[i3 + 1] += ry * PARTICLE_CONFIG.springStrength;
                velocities[i3 + 2] += rz * PARTICLE_CONFIG.springStrength;

                // Damping
                velocities[i3] *= PARTICLE_CONFIG.damping;
                velocities[i3 + 1] *= PARTICLE_CONFIG.damping;
                velocities[i3 + 2] *= PARTICLE_CONFIG.damping;

                // Apply velocity
                pos[i3] += velocities[i3];
                pos[i3 + 1] += velocities[i3 + 1];
                pos[i3 + 2] += velocities[i3 + 2];
            }

            posAttr.needsUpdate = true;
            renderer.render(scene, camera);
        };

        animate();

        // --- Cleanup ---
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);

            geometry.dispose();
            material.dispose();
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [prefersReducedMotion]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60"
            aria-hidden="true"
        />
    );
}
