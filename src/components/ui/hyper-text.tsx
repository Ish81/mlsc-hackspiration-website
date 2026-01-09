"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface HyperTextProps {
    text: string
    className?: string
    duration?: number
}

export function HyperText({
    text,
    className,
}: HyperTextProps) {
    return (
        <div
            className={cn(
                "relative inline-block transition-all duration-1500 super-glitch",
                className
            )}
            data-text={text}
        >
            {text}
        </div>
    )
}
