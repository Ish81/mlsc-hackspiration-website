"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const PLAY_ON_LOAD = true

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio("audio/hero.mp3")
        audioRef.current.loop = true
        audioRef.current.volume = 1.0

        const handleInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true)
                        removeListeners()
                    })
                    .catch((e) => console.error("Playback failed on interaction:", e))
            }
        }

        const removeListeners = () => {
            document.removeEventListener('click', handleInteraction)
            document.removeEventListener('keydown', handleInteraction)
            document.removeEventListener('touchstart', handleInteraction)
        }

        if (PLAY_ON_LOAD) {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((e) => {
                    console.log("Autoplay blocked. Waiting for user interaction.")
                    setIsPlaying(false)
                    document.addEventListener('click', handleInteraction)
                    document.addEventListener('keydown', handleInteraction)
                    document.addEventListener('touchstart', handleInteraction)
                })
        }

        return () => {
            removeListeners()
            audioRef.current?.pause()
            audioRef.current = null
        }
    }, [])

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play().catch((e) => console.error("Audio playback failed:", e))
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <motion.div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={toggleAudio}
                className="relative group flex items-center justify-center w-full p-3 bg-black/80 border border-neon-cyan/50 rounded-full backdrop-blur-md overflow-hidden transition-colors"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-neon-cyan/20 blur-md opacity-0 hover:opacity-100 transition-opacity" />

                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="playing"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <div className="relative flex flex-row items-center gap-3 justify-center w-full backdrop-blur-md px-2">
                                <Volume2 className="w-5 h-5 text-neon-cyan" />
                                {/* Visualizer bars (decorative) */}
                                {isPlaying && (
                                    <div className="flex items-center justify-center gap-[2px] opacity-80">
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-[2px] bg-white rounded-full user-select-none"
                                                animate={{
                                                    height: [8, 16, 8],
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    repeat: Infinity,
                                                    delay: i * 0.2,
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                        </motion.div>
                    ) : (
                        <motion.div
                            key="muted"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <VolumeX className="w-5 h-5 text-zinc-400 transition-colors" />
                        </motion.div>
                    )}
                </AnimatePresence>


            </button>
        </motion.div>
    )
}
