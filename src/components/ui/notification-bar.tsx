"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export function NotificationBar() {
    return (
        <div className="relative z-50 bg-transparent bg-blur overflow-hidden h-10 flex items-center">
            <div className="flex w-full overflow-hidden">
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 45
                    }}
                    className="flex items-center gap-12 whitespace-nowrap min-w-full"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-neon-cyan font-mono text-xs md:text-xs uppercase tracking-widest flex items-center gap-2">
                                Registrations Closing Soon
                            </span>
                            <span className="text-white/50 font-mono text-xs">•</span>
                            <a
                                href="https://unstop.com/o/mjrhY8O?lb=OSIZMkR&utm_medium=Share&utm_source=mlscvitpune&utm_campaign=Online_coding_challenge"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neon-purple font-mono text-xs md:text-xs uppercase tracking-widest hover:underline cursor-pointer"
                            >
                                Register Now via Unstop
                            </a>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
