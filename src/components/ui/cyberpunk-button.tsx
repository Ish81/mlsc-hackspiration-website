"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface CyberpunkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary"
    children: React.ReactNode
}

export function CyberpunkButton({
    className,
    variant = "primary",
    children,
    ...props
}: CyberpunkButtonProps) {
    return (
        <button
            className={cn(
                "relative group px-8 py-3 font-mono font-bold uppercase tracking-wider transition-all duration-300 outline-none",
                className
            )}
            {...props}
        >
            {/* Main Background Shape */}
            <div
                className={cn(
                    "absolute inset-0 skew-x-[-20deg] transition-all duration-300",
                    variant === "primary"
                        ? "bg-[#F0E800] group-hover:bg-[#D4CD00]"
                        : "border-2 border-[#F0E800] bg-transparent group-hover:bg-[#F0E800]/10"
                )}
            />

            {/* Decorative "Wings" - White Accents */}
            {/* Left Wing */}
            <div className="absolute top-1/2 -left-2 w-1 h-3/4 -translate-y-1/2 bg-white skew-x-[-20deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Right Wing */}
            <div className="absolute top-1/2 -right-2 w-1 h-3/4 -translate-y-1/2 bg-white skew-x-[-20deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Text Content */}
            <span className={cn(
                "relative z-10 flex items-center gap-2",
                variant === "primary" ? "text-black" : "text-[#F0E800]"
            )}>
                {children}
            </span>

            {/* Glitch Effect Elements (Optional, for extra flair) */}
            <div className="absolute inset-0 bg-white/20 skew-x-[-20deg] translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 ease-in-out opacity-0 group-hover:opacity-50" />
        </button>
    )
}
