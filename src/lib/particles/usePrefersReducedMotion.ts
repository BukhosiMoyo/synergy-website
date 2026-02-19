import { useEffect, useState } from "react";

/**
 * Hook to detect user's prefers-reduced-motion setting
 */
export function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPrefersReducedMotion(mediaQuery.matches);

        const onChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener("change", onChange);
        return () => mediaQuery.removeEventListener("change", onChange);
    }, []);

    return prefersReducedMotion;
}
