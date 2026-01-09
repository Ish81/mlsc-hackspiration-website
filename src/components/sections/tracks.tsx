"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Shield, Gamepad2, ExternalLink, Copy, Check, ChevronRight, Terminal, Megaphone, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

const tracks = [
    {
        id: "track-01",
        title: "AI & ML",
        description: "Build intelligent systems that learn and adapt.",
        icon: Brain,
        color: "text-neon-cyan",
        borderColor: "border-neon-cyan",
        bgGradient: "from-neon-cyan/10",
        problems: [
            { id: "PS-101", title: "AI for Accessibility", description: "Build tools to help people with disabilities navigate the digital world. Focus on real-time image recognition, voice-to-text for hearing impaired, or navigation aids for the visually impaired." },
            { id: "PS-102", title: "Predictive Healthcare", description: "Early disease detection using ML algorithms on patient data. Create models that can analyze symptoms or medical imagery to predict potential health issues before they become critical." },
            { id: "PS-103", title: "Smart City Solutions", description: "Optimizing traffic flow and energy usage using real-time data. Develop systems that analyze urban data to improve public transport efficiency or reduce energy consumption in smart buildings." }
        ]
    },
    {
        id: "track-02",
        title: "Cybersecurity",
        description: "Protect systems from digital threats and vulnerabilities.",
        icon: Lock,
        color: "text-green-400",
        borderColor: "border-green-400",
        bgGradient: "from-green-400/10",
        problems: [
            { id: "PS-301", title: "Blockchain Identity", description: "Decentralized identity management using blockchain. Create a self-sovereign identity system that gives users full control over their personal data without central authorities." },
            { id: "PS-302", title: "Phishing Detection", description: "Browser extension to detect and block phishing attempts. Use natural language processing and URL analysis to identify malicious websites in real-time." },
            { id: "PS-303", title: "Secure File Sharing", description: "End-to-end encrypted platform for sensitive data. Build a secure transfer protocol that ensures data privacy and integrity during transit and storage." }
        ]
    },
    {
        id: "track-03",
        title: "Game Dev / AR/VR",
        description: "Immersive experiences and interactive worlds.",
        icon: Gamepad2,
        color: "text-pink-500",
        borderColor: "border-pink-500",
        bgGradient: "from-pink-500/10",
        problems: [
            { id: "PS-601", title: "Educational VR", description: "Immersive history or science lessons in VR. Transport students to historical events or microscopic worlds to enhance learning engagement and retention." },
            { id: "PS-602", title: "AR Navigation", description: "Indoor navigation system for large venues like airports. Overlay directional arrows and points of interest on the real world to help users find their way easily." },
            { id: "PS-603", title: "Social Impact Game", description: "Indie game that raises awareness about social issues. Use storytelling and gameplay mechanics to educate players about topics like climate change or inequality." }
        ]
    },
    {
        id: "contest",
        title: "Viral Velocity",
        description: "Participate in our social media challenges and win exclusive swag!",
        description2: "Most viral posts on LinkedIn and X win.",
        icon: Megaphone,
        color: "text-blue-500",
        borderColor: "border-blue-500",
        bgGradient: "from-blue-500/10",
        problems: [],
        cta: {
            text: "Submit entry",
            href: "/contest"
        }
    }
]

export function Tracks() {
    const [activeTrack, setActiveTrack] = useState<string | null>(null)

    return (
        <section id="tracks" className="py-24 bg-black relative border-t border-white/10 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-[0.1em] uppercase">
                        <span className="text-neon-cyan">Tracks</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Select a domain to view the problems statements.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {tracks.map((track) => (
                        <MissionModule
                            key={track.id}
                            track={track}
                            isActive={activeTrack === track.id}
                            onToggle={() => setActiveTrack(activeTrack === track.id ? null : track.id)}
                            isDimmed={activeTrack !== null && activeTrack !== track.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function MissionModule({ track, isActive, onToggle, isDimmed }: { track: any, isActive: boolean, onToggle: () => void, isDimmed: boolean }) {
    return (
        <div
            className={cn(
                "relative rounded-xl border duration-500 overflow-hidden",
                isActive ? `bg-zinc-900/80 border-${track.color.split('-')[1]} shadow-[0_0_30px_rgba(0,0,0,0.5)]` : "bg-zinc-900/80 border-white/10 hover:border-white/30",
                track.id === "contest" ? "border border-yellow-400/50 bg-yellow-400/5" : ""
            )}
        >
            {/* Active Pulse Border */}
            {isActive && (
                <motion.div
                    layoutId="active-glow"
                    className={cn("absolute inset-0 z-0 opacity-20 bg-gradient-to-r", track.bgGradient, "to-transparent")}
                />
            )}

            <button
                onClick={() => {
                    if (track.id === "contest") {
                        window.location.href = "/contest";
                    } else {
                        onToggle();
                    }
                }}
                className="relative z-10 w-full p-5 md:p-6 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-6">
                    <div className={cn(
                        "md:h-16 md:w-16 h-10 w-12 rounded-lg flex items-center justify-center border transition-all duration-300",
                        isActive ? `bg-black ${track.color}` : "bg-zinc-800 border-white/10 text-zinc-500 group-hover:text-white group-hover:border-white/30",
                        track.id === "contest" ? "border border-yellow-400/50 bg-yellow-400/5 text-yellow-400" : ""
                    )}>
                        <track.icon className="md:h-8 md:w-8 h-6 w-6" />
                    </div>
                    <div>

                        {
                            track.id === "contest" ? (
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-orbitron)] uppercase tracking-tight text-white">
                                        Viral <span className="text-yellow-400">Velocity</span>
                                    </h3>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-400 text-black uppercase tracking-wider">
                                        Bonus
                                    </span>
                                </div>
                            ) : (
                                <h3 className={cn(
                                    "text-xl md:text-2xl font-bold font-[family-name:var(--font-orbitron)] uppercase tracking-tight transition-colors",
                                    isActive ? "text-white" : "text-zinc-400 group-hover:text-white"
                                )}>
                                    {track.title}
                                </h3>
                            )
                        }
                        <p className="text-zinc-500 text-sm md:text-base mt-1 me-3">
                            {track.description}
                        </p>
                        <p className="text-zinc-500 text-sm md:text-base mt-1 me-3">
                            {track.description2}
                        </p>
                    </div>
                </div>

                {track.cta && (
                    <div className="relative z-10 shrink-0">
                        <a
                            href={track.cta.href}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-black font-bold font-[family-name:var(--font-orbitron)] uppercase tracking-wider rounded hover:bg-yellow-300 transition-colors"
                        >
                            {track.cta.text}
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                )}

                {track.problems.length > 0 && (
                    <div className={cn(
                        "h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-300",
                        isActive ? `border-${track.color.split('-')[1]} bg-${track.color.split('-')[1]}/10 text-white rotate-90` : "border-white/10 text-zinc-500 group-hover:border-white/30"
                    )}>
                        <ChevronRight className="h-5 w-5" />
                    </div>
                )}
            </button>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                    >
                        <div className="p-6 md:p-8 pt-0 grid gap-4">
                            <div className="h-px w-full bg-white/10 mb-4" />
                            {track.problems.map((problem: any, index: number) => (
                                <MissionCard
                                    key={problem.id}
                                    problem={problem}
                                    index={index}
                                    color={track.color}
                                    borderColor={track.borderColor}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function MissionCard({ problem, index, color, borderColor }: { problem: any, index: number, color: string, borderColor: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation()
        navigator.clipboard.writeText(`${problem.title}\n\n${problem.description}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div
            className={cn(
                "group relative p-6 rounded-lg bg-black/40 border border-white/5 hover:border-white/20 duration-300 hover:-translate-y-1 hover:shadow-lg",
                `hover:${borderColor}`
            )}
        >
            <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className={cn("text-xs font-bold font-mono px-2 py-1 rounded bg-white/5 text-zinc-400 group-hover:text-white transition-colors")}>
                            {problem.id}
                        </span>
                        <h4 className={cn("text-lg font-bold text-zinc-200 group-hover:text-white transition-colors")}>
                            {problem.title}
                        </h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        {problem.description}
                    </p>
                </div>

                <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <button
                        onClick={handleCopy}
                        className="p-2 rounded hover:bg-white/10 text-zinc-500 hover:text-white transition-colors"
                        title="Copy Mission Data"
                    >
                        {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                    <a
                        href="#"
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded text-xs font-bold font-[family-name:var(--font-orbitron)] uppercase tracking-wider border transition-all",
                            `border-white/10 hover:bg-${color.split('-')[1]}/10 hover:${borderColor} ${color}`
                        )}
                    >
                        Docs <ExternalLink className="h-3 w-3" />
                    </a>
                </div>
            </div>
        </div>
    )
}
