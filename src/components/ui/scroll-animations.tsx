"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollScaleProps {
    children: React.ReactNode
    className?: string
    scaleTo?: number
    duration?: number
}

export function ScrollScale({
    children,
    className,
    scaleTo = 1.1,
    duration = 0.8
}: ScrollScaleProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            whileHover={{ scale: scaleTo }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            className={cn("will-change-transform", className)}
        >
            {children}
        </motion.div>
    )
}

interface StaggeredTextProps {
    text: string
    className?: string
    delay?: number
    staggerDelay?: number
}

export function StaggeredText({
    text,
    className,
    delay = 0,
    staggerDelay = 0.03
}: StaggeredTextProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: staggerDelay, delayChildren: delay * i },
        }),
    }

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn("inline-flex", className)}
        >
            {text.split("").map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    )
}

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    direction?: "up" | "down" | "left" | "right"
    delay?: number
}

export function ScrollReveal({
    children,
    className,
    direction = "up",
    delay = 0
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as any,
                delay: delay,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}
