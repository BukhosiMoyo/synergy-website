"use client";

import React from "react";
import Spline from "@splinetool/react-spline";

export function HeroSplineBackground() {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                pointerEvents: "auto",
                overflow: "hidden",
            }}
        >
            <Spline
                style={{
                    width: "100%",
                    height: "100%",
                    pointerEvents: "auto",
                }}
                scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
            />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 35%, rgba(0, 0, 0, 0.15) 60%, transparent 75%),
            linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.7))
          `,
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
