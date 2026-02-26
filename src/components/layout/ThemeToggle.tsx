"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Avoid hydration mismatch by rendering a placeholder of the exact same size
    if (!mounted) {
        return (
            <div className="w-10 h-10 border border-border rounded-full bg-transparent" aria-hidden="true" />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:bg-surface transition-colors relative overflow-hidden"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                    <motion.div
                        key="light"
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute flex items-center justify-center"
                    >
                        <Sun className="w-5 h-5 text-foreground" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dark"
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute flex items-center justify-center"
                    >
                        <Moon className="w-5 h-5 text-foreground" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
