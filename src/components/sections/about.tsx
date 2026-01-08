"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // We'll create Card component
import { Cpu, Globe, Zap } from "lucide-react"

export function About() {
    // Gallery images for the carousel
    const galleryImages = Array.from({ length: 10 }, (_, i) => `/images/past-events/${i + 1}.jpg`);
    // Duplicate images for seamless loop
    const carouselImages = [...galleryImages, ...galleryImages];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-zinc-950">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">

                    {/* MLSC Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">
                            About Us
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            MLSC VIT Pune is a dynamic tech community operating under the aegis of Microsoft, guided by the on-campus Microsoft Learn Student Ambassador. We are dedicated to empowering students by offering a platform to develop both technical and non-technical skills.
                        </p>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            With a strong focus on fostering a culture of Open Source Collaboration and Skill Development, MLSC VIT Pune drives innovation through events, projects, and hackathons.
                        </p>
                    </motion.div>

                    {/* Stats/Mission Cards */}
                    <div className="relative h-[400px] w-full hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-0 right-0 w-72 bg-zinc-900/80 backdrop-blur-md border border-white/10 p-6 rounded-xl z-20"
                        >
                            <Zap className="h-8 w-8 text-neon-cyan mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                            <p className="text-zinc-400 text-sm">
                                To foster a community of young innovators and provide them with the platform to transform their ideas into reality.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute bottom-0 left-10 w-72 bg-zinc-900/80 backdrop-blur-md border border-white/10 p-6 rounded-xl z-10"
                        >
                            <Cpu className="h-8 w-8 text-neon-purple mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Hackspiration'26</h3>
                            <p className="text-zinc-400 text-sm">
                                A thrilling 25-hour offline hackathon merging innovation with game-show excitement.
                            </p>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 blur-3xl -z-10 rounded-full" />
                    </div>
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
                                <div className="glitch-image-box w-full h-full rounded-lg bg-zinc-900/50">
                                    <img
                                        src={img}
                                        alt={`Gallery ${index}`}
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
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
