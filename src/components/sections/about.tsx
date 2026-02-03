"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // We'll create Card component
import { Cpu, Globe, Zap } from "lucide-react"
import Image from "next/image"

export function About() {
    const galleryImages = Array.from({ length: 10 }, (_, i) => `/images/past-events/${i + 1}.jpg`);
    const carouselImages = [...galleryImages, ...galleryImages];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-zinc-950 min-h-screen items-center justify-center flex">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-[0.1em] uppercase">
                            About
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            MLSC VIT Pune is a dynamic tech community operating under the aegis of Microsoft, guided by the on-campus Microsoft Learn Student Ambassador. We are dedicated to empowering students by offering a platform to develop both technical and non-technical skills.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mt-6 font-semibold">
                            Hackspiration 26 is a two-phase hybrid hackathon, with an online round on 14th February followed by an offline finale on 15th February.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-neon-cyan/50 transition-colors group">
                            <h3 className="text-5xl font-black text-white mb-2 font-[family-name:var(--font-orbitron)] group-hover:text-neon-cyan transition-colors">
                                1000+
                            </h3>
                            <p className="text-zinc-400 font-medium uppercase tracking-wider text-sm">
                                Participants Expected
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-neon-magenta/50 transition-colors group">
                            <h3 className="text-5xl font-black text-white mb-2 font-[family-name:var(--font-orbitron)] group-hover:text-neon-magenta transition-colors">
                                2 Days
                            </h3>
                            <p className="text-zinc-400 font-medium uppercase tracking-wider text-sm">
                                Of Innovation
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Sliding Gallery Carousel */}
                <div className="w-full overflow-hidden py-10 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {carouselImages.map((img, index) => (
                            <div key={index} className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60">
                                <div className="glitch-image-box w-full h-full rounded-lg bg-zinc-900/50 relative">
                                    <Image
                                        src={img}
                                        alt={`Gallery ${index}`}
                                        fill
                                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
