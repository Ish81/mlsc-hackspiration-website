"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const targetDate = Date.UTC(2026, 1, 11, 18, 30, 0) // Feb 11, 18:30 UTC = Feb 12, 00:00 IST
const targetDateLabel = "Registration closing in";

const MS_PER_SECOND = 1000
const MS_PER_MINUTE = 60 * MS_PER_SECOND
const MS_PER_HOUR = 60 * MS_PER_MINUTE
const MS_PER_DAY = 24 * MS_PER_HOUR

function calculateTimeRemaining() {
      const nowUtc = Date.now()
    const diff = targetDate - nowUtc

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    
    const totalDays = Math.floor(diff / MS_PER_DAY) - 1 // subtract 1 to exclude the current day, as Unstop does
    const hours = Math.floor((diff % MS_PER_DAY) / MS_PER_HOUR)
    const minutes = Math.floor((diff % MS_PER_HOUR) / MS_PER_MINUTE)
    const seconds = Math.floor((diff % MS_PER_MINUTE) / MS_PER_SECOND)

    return {
        days: Math.max(0, totalDays),
        hours,
        minutes,
        seconds,
    }
}


export function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const tick = () => setTimeLeft(calculateTimeRemaining())

        tick()
        const intervalId = setInterval(tick, MS_PER_SECOND)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <section className="py-10 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block bg-black/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden group"
                >
                    {/* Module Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan/30" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan/30" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan/30" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan/30" />

                    <p className="text-neon-cyan/60 font-mono mb-10 tracking-[0.2em] uppercase text-md flex items-center justify-center gap-3">
                        {targetDateLabel}
                    </p>

                    <div className="flex flex-nowrap justify-center gap-2 md:gap-8">
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
            <div className="relative group/unit">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg opacity-0 group-hover/unit:opacity-20 transition duration-500 blur-xl" />
                <div className="relative border border-white/10 w-16 h-20 sm:w-20 sm:h-28 md:w-32 md:h-32 rounded-lg flex items-center justify-center overflow-hidden bg-zinc-900/20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,4px_100%] pointer-events-none opacity-40 group-hover/unit:opacity-60 transition-opacity" />


                    <span className="font-mono text-2xl md:text-5xl font-black text-white tracking-tighter group-hover/unit:text-neon-cyan transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        {value.toString().padStart(2, '0')}
                    </span>
                </div>
            </div>
            <span className="mt-4 text-zinc-600 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">{label}</span>
        </div>
    )
}
