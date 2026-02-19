/**
 * Particle Wave Configuration
 * Unified configuration for Three.js WebGL simulation
 */

export const PARTICLE_CONFIG = {
    // Counts
    particleCount: 8000,
    particleCountReduced: 2500,

    // Dimensions
    pointSize: 1.5,
    minPointSize: 0.5,
    maxPointSize: 2.5,
    width: 20,
    depth: 4,

    // Wave Physics
    baseWaveAmplitude: 1.2,
    baseWaveFrequency: 0.15,
    flowSpeed: 0.8,

    // Interaction Physics
    springStrength: 0.05,
    repelRadius: 2.5,
    repelStrength: 0.4,
    damping: 0.92,

    // Colors (RGB format matched to theme)
    colors: {
        accent: { r: 14 / 255, g: 165 / 255, b: 165 / 255 }, // #0ea5a5
        primary: { r: 11 / 255, g: 30 / 255, b: 58 / 255 },   // #0b1e3a
    },

    // View
    cameraZ: 10,
    fov: 45
};
