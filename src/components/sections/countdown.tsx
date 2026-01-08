"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const targetDate = new Date("2026-01-30T00:00:00");
const targetDateLabel = "Registration closing in";

export function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const difference = targetDate.getTime() - now.getTime()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-10 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block"
                >
                    <p className="text-neon-cyan font-mono mb-8 tracking-widest uppercase text-sm md:text-base">
                        {targetDateLabel}:
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <TimeUnit value={timeLeft.days} label="DAYS" />
                        <TimeUnit value={timeLeft.hours} label="HOURS" />
                        <TimeUnit value={timeLeft.minutes} label="MINS" />
                        <TimeUnit value={timeLeft.seconds} label="SECS" isLast />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function TimeUnit({ value, label, isLast }: { value: number, label: string, isLast?: boolean }) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg opacity-10 group-hover:opacity-50 transition duration-500" />
                <div className="relative border border-white/10 w-24 h-32 md:w-40 md:h-32 rounded-lg flex items-center justify-center overflow-hidden">
                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

                    <span className="font-mono text-4xl md:text-6xl font-bold text-white tracking-tighter group-hover:text-neon-cyan transition-colors duration-300">
                        {value.toString().padStart(2, '0')}
                    </span>
                </div>
            </div>
            <span className="mt-4 text-zinc-500 font-mono text-xs md:text-sm tracking-widest">{label}</span>
        </div>
    )
}
