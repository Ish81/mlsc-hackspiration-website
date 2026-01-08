"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export function NotificationBar() {
    return (
        <div className="relative z-50 bg-blue-950/80 border-b border-neon-cyan/30 backdrop-blur-sm overflow-hidden h-10 flex items-center">
            {/* Glitch Overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none mix-blend-overlay" />

            <div className="flex w-full overflow-hidden">
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                    className="flex items-center gap-12 whitespace-nowrap min-w-full"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-neon-cyan font-mono text-xs md:text-sm uppercase tracking-widest flex items-center gap-2">
                                <AlertTriangle className="h-3 w-3 animate-pulse" />
                                Registrations Closing Soon
                            </span>
                            <span className="text-white/50 font-mono text-xs">•</span>
                            <span className="text-white font-bold font-mono text-xs md:text-sm">
                                HACKSPIRATION '26
                            </span>
                            <span className="text-white/50 font-mono text-xs">•</span>
                            <span className="text-neon-purple font-mono text-xs md:text-sm uppercase tracking-widest hover:underline cursor-pointer">
                                Register Now via Unstop
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
