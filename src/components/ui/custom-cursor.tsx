"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"

export function CustomCursor() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a") || target.closest('[role="button"]')) {
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
    }, [mouseX, mouseY])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 border border-neon-cyan rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "#FF2D95" : "#00E5FF"
                }}
                transition={{ duration: 0.1 }}
            >
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-neon-purple/50 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0.5 : 1,
                    opacity: isHovering ? 0 : 1
                }}
                transition={{ duration: 0.15 }}
            />
        </>
    )
}
