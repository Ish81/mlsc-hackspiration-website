"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a")) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener("mousemove", updateMousePosition)
        window.addEventListener("mouseover", handleMouseOver)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
            window.removeEventListener("mouseover", handleMouseOver)
        }
    }, [])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 border border-neon-cyan rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "#FF2D95" : "#00E5FF"
                }}
            // transition={{ type: "spring", stiffness: 1500, damping: 50, mass: 0.1 }}
            >
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-neon-purple/50 rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 0.5 : 1,
                    opacity: isHovering ? 0 : 1
                }}
            // transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
            />
        </>
    )
}
