"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const galleryImages = [
    {
        src: "/images/past-events/ILOVEHACKATHON1.jpg",
        title: "I LOVE HACKATHON",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/images/past-events/4.jpg",
        title: "SYSTEM LOG 04",
        className: "md:col-span-1 md:row-span-2",
    },
    {
        src: "/images/past-events/Designathon2.jpg",
        title: "DESIGNATHON",
        className: "md:col-span-2 md:row-span-1",
    },
    {
        src: "/images/past-events/BeyondtheBrowsers1.jpg",
        title: "BEYOND THE BROWSER",
        className: "md:col-span-1 md:row-span-1c",
    },
    {
        src: "/images/past-events/CLOUDWARS1.jpg",
        title: "CLOUD WARS",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        src: "/images/past-events/WEB3ODYSSEY1.jpg",
        title: "WEB3 ODYSSEY",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        src: "/images/past-events/2.jpg",
        title: "SYSTEM LOG 02",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        src: "/images/past-events/1.jpg",
        title: "SYSTEM LOG 01",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/images/past-events/9.jpg",
        title: "SYSTEM LOG 09",
        className: "md:col-span-1 md:row-span-1",
    },
]


export function PastEvents() {
    return (
        <section id="gallery" className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-[0.3em] uppercase">
                        GALLERY
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={cn(
                                "relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 bg-zinc-900/50",
                                image.className
                            )}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Cybersec Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-3 bg-neon-cyan" />
                                        <span className="text-[10px] font-mono text-neon-cyan/60 tracking-widest uppercase">
                                            {/* [ FILE_ID: {index.toString().padStart(2, '0')} ] */}
                                        </span>
                                    </div>
                                    <h3 className="text-sm md:text-base font-mono font-bold text-white tracking-wider uppercase">
                                        {image.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Technical Corner Accents*/}
                            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

