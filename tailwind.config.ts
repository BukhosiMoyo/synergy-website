import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: {
                background: "rgb(var(--background) / <alpha-value>)",
                surface: "rgb(var(--surface) / <alpha-value>)",
                card: "rgb(var(--card) / <alpha-value>)",
                primary: "rgb(var(--primary) / <alpha-value>)",
                "surface-inverse": "rgb(var(--surface-inverse) / <alpha-value>)",
            },
            textColor: {
                foreground: "rgb(var(--foreground) / <alpha-value>)",
                muted: "rgb(var(--muted) / <alpha-value>)",
                accent: "rgb(var(--accent) / <alpha-value>)",
                "foreground-inverse": "rgb(var(--foreground-inverse) / <alpha-value>)",
            },
            borderColor: {
                border: "rgb(15 23 42 / 0.1)", /* Default faint border */
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                marquee: 'marquee 40s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
