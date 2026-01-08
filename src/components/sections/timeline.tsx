"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, Terminal, ChevronRight, CheckCircle2, Circle, Radio, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

// Hardcoded Active Node ID
const CURRENT_EVENT_ID = "registrations_open"

const timelineEvents = [
    {
        day: "Pre-Event",
        date: "Jan 2026",
        events: [
            {
                id: "registrations_open",
                time: "10 Jan 2026",
                title: "Registrations Open till 20 Jan 2026",
                description: "Participant registrations go live",
                type: "system"
            },
        ]
    },
    {
        day: "Round 1",
        date: "Jan 2026",
        events: [
            {
                id: "idea_submission_open",
                time: "20 Jan 2026",
                title: "Idea Submission Deadline",
                description: "Submit your ideas by 20 Jan 2026",
                type: "system"
            },
            {
                id: "shortlist_announcement",
                time: "TBA",
                title: "Shortlisted Teams declared",
                description: "Qualified teams announced on the website",
                type: "alert"
            }
        ]
    },
    {
        day: "Day 1 (30th Jan)",
        date: "Jan 30, 2026",
        events: [
            {
                id: "hacking_begins",
                time: "11:00 AM",
                title: "Build Phase Begins",
                description: "Build your projects for 24 hours in offline mode",
                type: "alert"
            }
        ]
    },
    {
        day: "Day 2 (31st Jan)",
        date: "Jan 31, 2026",
        events: [
            {
                id: "submission_deadline",
                time: "11:00 AM",
                title: "Build Phase Ends",
                description: "Submit your projects by 11:00 AM",
                type: "alert"
            },
            {
                id: "judging_round",
                time: "12:00 PM",
                title: "Judging Round and Winner Announcement",
                description: "Teams present their solutions and winners are announced",
                type: "event"
            }
        ]
    }
]

const allEvents = timelineEvents.flatMap(day => day.events.map(e => ({ ...e, day: day.day })))

export function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Find index of current event
    const currentIndex = allEvents.findIndex(e => e.id === CURRENT_EVENT_ID)

    return (
        <section ref={containerRef} id="timeline" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">
                        Operations <span className="text-neon-cyan">Log</span>
                    </h2>
                    <p className="text-zinc-400 font-mono text-lg">
                        Timeline and execution schedule.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Data Spine */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-900 -translate-x-1/2 overflow-hidden">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-neon-cyan shadow-[0_0_20px_#00E5FF]"
                        />
                    </div>

                    <div className="space-y-16 md:space-y-8">
                        {allEvents.map((event, index) => {
                            let status: 'completed' | 'active' | 'upcoming' = 'upcoming'
                            if (index < currentIndex) status = 'completed'
                            else if (index === currentIndex) status = 'active'

                            return (
                                <TimelineNode
                                    key={index}
                                    event={event}
                                    index={index}
                                    status={status}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

function TimelineNode({ event, index, status }: { event: any, index: number, status: 'completed' | 'active' | 'upcoming' }) {
    const isLeft = index % 2 === 0

    // Status-based styles
    const borderColor = status === 'active' ? 'border-neon-cyan' : status === 'completed' ? 'border-zinc-700' : 'border-zinc-800'
    const bgColor = status === 'active' ? 'bg-zinc-900' : 'bg-black'
    const textColor = status === 'active' ? 'text-white' : status === 'completed' ? 'text-zinc-400' : 'text-zinc-600'
    const glowClass =
        status === 'active'
            ? 'shadow-[0_0_6px_rgba(0,229,255,0.10),_0_0_16px_rgba(0,229,255,0.05)]'
            : ''

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${isLeft ? "md:flex-row-reverse" : ""}`}
        >
            {/* Content Card */}
            <div className="flex-1 w-full md:w-auto">
                <div className={cn(
                    "relative p-6 md:p-8 border-1 duration-500 group",
                    borderColor, bgColor, glowClass,
                    status === 'active' ? "scale-105" : "hover:border-zinc-600"
                )}>
                    {/* Solid Background Block */}
                    <div className="absolute inset-0 bg-zinc-950 -z-10" />

                    {/* Active State Indicators */}
                    {status === 'active' && (
                        <>
                            {/* <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan animate-pulse" /> */}
                            <div className="absolute -left-2 top-1/2 w-1 h-8 bg-neon-cyan -translate-y-1/2" />
                            {/* <div className="absolute -right-2 top-1/2 w-1 h-8 bg-neon-cyan -translate-y-1/2" /> */}
                        </>
                    )}

                    <div className={cn(
                        "flex items-center gap-4 mb-4 font-mono text-xs uppercase tracking-wider border-b border-zinc-800 pb-4",
                        status === 'active' ? "text-neon-cyan" : "text-zinc-500"
                    )}>
                        <span className="px-2 py-1 bg-zinc-900 rounded">{event.day}</span>
                        <span>{event.time}</span>
                        {status === 'active' && (
                            <span className="ml-auto flex items-center gap-2 text-neon-cyan animate-pulse">
                                <Activity className="h-3 w-3" />
                                <b>ACTIVE</b>
                            </span>
                        )}
                        {status === 'completed' && <span className="ml-auto text-zinc-600">COMPLETED</span>}
                    </div>

                    <h3 className={cn(
                        "text-xl md:text-2xl font-black mb-2  tracking-tight",
                        status === 'upcoming' ? "text-zinc-600" : "text-white"
                    )}>
                        {event.title}
                    </h3>

                    <p className={cn(
                        "font-mono text-sm md:text-base",
                        status === 'upcoming' ? "text-zinc-700" : "text-zinc-400"
                    )}>
                        {event.description}
                    </p>
                </div>
            </div>

            {/* Node Connector */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0">
                <div className={cn(
                    "w-4 h-4 rounded-full transition-all duration-500",
                    status === 'active' ? "bg-neon-cyan shadow-[0_0_20px_#00E5FF] scale-150" :
                        status === 'completed' ? "bg-zinc-700" : "bg-zinc-900 border border-zinc-800"
                )} />

                {/* Horizontal Connector Line */}
                <div className={cn(
                    "absolute top-1/2 w-8 md:w-16 h-0.5 -translate-y-1/2 transition-colors duration-500",
                    isLeft ? "left-full" : "right-full",
                    status === 'active' ? "bg-neon-cyan" : "bg-zinc-800"
                )} />
            </div>

            {/* Spacer */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    )
}
