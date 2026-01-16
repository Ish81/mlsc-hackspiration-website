"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useProgress } from "@react-three/drei"
import { usePathname } from "next/navigation"

export function Preloader() {
    const pathname = usePathname()
    const { progress, item, active } = useProgress()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 400)
            return () => clearTimeout(timer)
        }
    }, [progress])

    useEffect(() => {
        if (pathname != "/") {
            setIsLoading(false)
        }
    }, [pathname])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black cursor-pointer"
                >
                    <div className="relative flex flex-col items-center w-full max-w-md px-4">
                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-zinc-800 mb-4 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.2, ease: "linear" }}
                                className="h-full bg-neon-cyan"
                            />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-mono animate-pulse mb-4 text-center">
                            {Math.round(progress)}%
                        </h1>

                        {/* Loading Item Name */}
                        <div className="h-6 mb-8 text-center">
                            <AnimatePresence mode="wait">
                                {active && (
                                    <motion.p
                                        key={item}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="text-zinc-500 font-mono text-xs truncate max-w-[300px]"
                                    >
                                        LOADING: {item}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="absolute -inset-4 bg-neon-cyan/20 blur-xl -z-10" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
