'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
    const { resolvedTheme } = useTheme();

    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        particles: THREE.Points[];
        animationId: number;
        count: number;
    } | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const isDark = resolvedTheme === 'dark';

        const SEPARATION = 150;
        const AMOUNTX = 40;
        const AMOUNTY = 60;

        // Intro animation config
        const INTRO_DURATION = 2.0;
        const introStartTime = performance.now();

        // Scene setup — adapt fog to theme
        const fogColor = isDark ? 0x0a0a14 : 0xfafafc;
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(fogColor, 2000, 10000);

        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            1,
            10000,
        );
        camera.position.set(0, 355, 1220);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(fogColor, 0);

        containerRef.current.appendChild(renderer.domElement);

        // Create particles
        const positions: number[] = [];
        const colors: number[] = [];
        const startYPositions: number[] = [];

        const geometry = new THREE.BufferGeometry();

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

                const startY = 800 + Math.random() * 1200;
                startYPositions.push(startY);

                positions.push(x, startY, z);

                // THREE.js vertex colors use 0-1 range
                if (isDark) {
                    colors.push(59 / 255, 130 / 255, 246 / 255);
                } else {
                    colors.push(5 / 255, 15 / 255, 40 / 255);
                }
            }
        }

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3),
        );
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: isDark ? 8 : 10,
            vertexColors: true,
            transparent: true,
            opacity: 0,
            sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let count = 0;
        let animationId: number = 0;
        let introComplete = false;

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const now = performance.now();
            const elapsed = (now - introStartTime) / 1000;
            const introProgress = Math.min(elapsed / INTRO_DURATION, 1);
            const easedProgress = easeOutCubic(introProgress);

            const positionAttribute = geometry.attributes.position;
            const posArray = positionAttribute.array as Float32Array;

            if (!introComplete) {
                material.opacity = Math.min(easedProgress * 1.5, 0.8);
            }

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    const index = i * 3;

                    const waveY =
                        Math.sin((ix + count) * 0.3) * 50 +
                        Math.sin((iy + count) * 0.5) * 50;

                    if (introProgress < 1) {
                        const distFromCenter = Math.sqrt(
                            Math.pow(ix - AMOUNTX / 2, 2) + Math.pow(iy - AMOUNTY / 2, 2)
                        );
                        const maxDist = Math.sqrt(Math.pow(AMOUNTX / 2, 2) + Math.pow(AMOUNTY / 2, 2));
                        const stagger = (distFromCenter / maxDist) * 0.3;
                        const particleProgress = easeOutCubic(
                            Math.max(0, Math.min(1, (introProgress - stagger) / (1 - stagger)))
                        );

                        posArray[index + 1] =
                            startYPositions[i] * (1 - particleProgress) +
                            waveY * particleProgress;
                    } else {
                        posArray[index + 1] = waveY;
                        if (!introComplete) {
                            introComplete = true;
                            material.opacity = 0.8;
                            window.dispatchEvent(new CustomEvent('dotted-surface-ready'));
                        }
                    }

                    i++;
                }
            }

            positionAttribute.needsUpdate = true;
            renderer.render(scene, camera);
            count += 0.1;
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();

        sceneRef.current = {
            scene,
            camera,
            renderer,
            particles: [points],
            animationId,
            count,
        };

        return () => {
            window.removeEventListener('resize', handleResize);

            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);

                sceneRef.current.scene.traverse((object) => {
                    if (object instanceof THREE.Points) {
                        object.geometry.dispose();
                        if (Array.isArray(object.material)) {
                            object.material.forEach((material) => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });

                sceneRef.current.renderer.dispose();

                if (containerRef.current && sceneRef.current.renderer.domElement) {
                    containerRef.current.removeChild(
                        sceneRef.current.renderer.domElement,
                    );
                }
            }
        };
    }, [resolvedTheme]);

    return (
        <div
            ref={containerRef}
            className={cn('pointer-events-none absolute inset-0 -z-1', className)}
            {...props}
        />
    );
}
