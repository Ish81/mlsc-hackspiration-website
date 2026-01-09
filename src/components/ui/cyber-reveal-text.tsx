"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface CyberRevealTextProps {
    text: string
    className?: string
    delay?: number
    duration?: number
}

export function CyberRevealText({
    text,
    className,
    delay = 0,
    duration = 0.8
}: CyberRevealTextProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [displayText, setDisplayText] = useState(text.split("").map(() => ""))
    const [lockedIndices, setLockedIndices] = useState<Set<number>>(new Set())
    let chars = "HACKSPIRATION '26".slice(0, text.length)
    useEffect(() => {
        if (!isInView) return

        let timeoutId: NodeJS.Timeout
        const startEffect = () => {
            let frame = 0
            // Flicker interval
            const flickerInterval = setInterval(() => {
                frame++
                setDisplayText(prev =>
                    text.split("").map((char, i) => {
                        if (lockedIndices.has(i)) return char
                        if (char === " ") return " "
                        // Deterministic cycle based on frame and index
                        return chars[(frame + i) % chars.length]
                    })
                )
            }, 10)

            // Locking logic
            const lockSequence = async () => {
                const indices = Array.from({ length: text.length }, (_, i) => i)
                    .filter(i => text[i] !== " ")

                // Faster locking: less delay between characters
                const lockDelay = (duration * 300) / indices.length

                for (let i = 0; i < indices.length; i++) {
                    await new Promise(resolve => setTimeout(resolve, lockDelay))
                    setLockedIndices(prev => new Set(prev).add(indices[i]))
                }
                clearInterval(flickerInterval)
                setDisplayText(text.split(""))
            }

            lockSequence()
            return () => clearInterval(flickerInterval)
        }

        timeoutId = setTimeout(startEffect, delay * 500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [isInView, text, delay, duration])

    return (
        <div ref={ref} className={cn("tracking-tighter", className)}>
            {displayText.map((char, i) => (
                <span
                    key={i}
                    className={cn(
                        lockedIndices.has(i) ? "text-white" : "text-white/20"
                    )}
                >
                    {char || (text[i] === " " ? "\u00A0" : chars[i % chars.length])}
                </span>
            ))}
        </div>
    )
}
