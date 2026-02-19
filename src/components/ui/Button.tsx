"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    size?: "sm" | "md" | "lg";
}

export default function Button({ children, className, variant = "primary", size = "md", ...props }: ButtonProps) {
    const baseStyles = "rounded-lg font-medium transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-accent text-white hover:opacity-90 shadow-md hover:shadow-lg",
        outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
