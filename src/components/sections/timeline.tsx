"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, Terminal, ChevronRight, CheckCircle2, Circle, Radio, Activity, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Hardcoded Active Node ID
const CURRENT_EVENT_ID = "idea_submission_open"

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
    const currentIndex = allEvents.findIndex(e => e.id === CURRENT_EVENT_ID)

    return (
        <section ref={containerRef} id="timeline" className="py-12 bg-black relative overflow-hidden border-t border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-[0.1em] uppercase">
                        <span className="text-neon-cyan">Timeline</span><ArrowDownRight className="inline-block ml-2 text-neon-cyan" size={62} />
                    </h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Data Spine */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-900 -translate-x-1/2 overflow-hidden">
                        {/* <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-neon-cyan shadow-[0_0_20px_#00E5FF]"
                        /> */}
                        <div
                            className="w-full h-full bg-blue-900 shadow-[0_0_20px_#00E5FF]"
                        />

                    </div>

                    <div className="space-y-8 md:space-y-4">
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
    const borderColor = status === 'active' ? 'border-neon-cyan' : status === 'completed' ? 'border-zinc-700' : 'border-zinc-800'
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`flex flex-col md:flex-row gap-4 md:gap-8 items-center ${isLeft ? "md:flex-row-reverse" : ""}`}
        >
            {/* Content Card */}
            <div className="flex-1 w-full md:w-auto">
                <div className={cn(
                    "relative p-4 md:p-6 border-1 duration-500 group rounded-md",
                    // borderColor, //bgColor, glowClass,
                )}>
                    <div className="absolute inset-0 bg-zinc-950 -z-10" />
                    {status === 'active' && (
                        <>
                            <div className="absolute -left-2 top-1/2 w-1 h-8 bg-neon-cyan -translate-y-1/2" />
                        </>
                    )}

                    <div className={cn(
                        "flex items-center gap-4 mb-4 font-mono text-xs uppercase tracking-wider",
                        status === 'active' ? "text-neon-cyan" : "text-zinc-500"
                    )}>
                        <span className="px-2 py-1 bg-zinc-900 rounded">{event.day}</span>
                        <span>{event.time}</span>
                        {status === 'completed' && <span className="ml-auto text-zinc-600">COMPLETED</span>}
                    </div>

                    <h3 className={cn(
                        "text-xl md:text-2xl font-semibold mb-2 tracking-tight text-white",
                    )}>
                        {event.title}
                    </h3>

                    <p className={cn(
                        "font-mono text-sm md:text-base text-zinc-400",
                    )}>
                        {event.description}
                    </p>
                </div>
            </div>

            {/* Node Connector */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0">
                <div className={cn(
                    "w-4 h-4 rounded-full transition-all duration-500 bg-neon-cyan",
                    status === 'active' ? " scale-150 shadow-[0_0_20px_#00E5FF]" :
                        status === 'completed' ? "hidden" : "bg-blue-900 border border-zinc-800"
                )} />
                {
                    status === 'completed' && (
                        <div className="flex items-center justify-center p-1 bg-black">
                            <CheckCircle2 className="w-6 h-6 rounded-full bg-black text-green-500" />
                        </div>
                    )
                }

                {/* Horizontal Connector Line */}
                <div className={cn(
                    "absolute top-1/2 w-4 md:w-8 h-0.5 -translate-y-1/2 transition-colors duration-500",
                    isLeft ? "left-full" : "right-full",
                    status === 'active' ? "bg-neon-cyan  animate-pulse" : "bg-zinc-800"
                )} />
            </div>

            {/* Spacer */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    )
}
