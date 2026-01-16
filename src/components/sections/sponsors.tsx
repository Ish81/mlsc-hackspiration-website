"use client"

import { motion } from "framer-motion"

// Combined sponsors list for the grid
const sponsors = [1, 2, 4, 5, 7, 8].map((i) => ({
    name: `Sponsor ${i}`,
    logo: `/images/sponsors/${i}.png`,
    tier: "Gold"
}));

export function Sponsors() {
    return (
        <section id="sponsors" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-[0.1em] uppercase">
                        <span className="text-neon-cyan">Sponsors</span>
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Fueling the next generation of hackers.
                    </p>
                </motion.div>

                {/* Sponsors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center px-8">
                    {sponsors.map((sponsor, index) => (
                        <SponsorCard key={sponsor.name} sponsor={sponsor} index={index} />
                    ))}

                    {/* Become a Sponsor section, commented as Sponsors are already decided */}
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: sponsors.length * 0.05 }}
                        className="group relative h-64 md:h-96 bg-zinc-900 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center hover:bg-zinc-800 hover:border-neon-cyan/30 transition-all duration-300 cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-3 group-hover:border-neon-cyan/50 group-hover:text-neon-cyan transition-colors text-zinc-500">
                            <span className="text-2xl">+</span>
                        </div>
                        <span className="text-zinc-500 text-sm font-mono group-hover:text-neon-cyan transition-colors">BECOME A SPONSOR</span>
                    </motion.div> */}
                </div>
            </div>
        </section>
    )
}
import Image from "next/image"

function SponsorCard({ sponsor, index }: { sponsor: any, index: number }) {
    // Generate a consistent random rotation based on index

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
            className="relative group"
        >
            {/* Pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full bg-gradient-to-b from-indigo-400 to-violet-600 shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-red-700">
                <div className="absolute top-1 left-1 right-1 bottom-1 w-1 h-1 bg-white/50 rounded-full" />
            </div>

            {/* Paper Card */}
            <div className="
                relative 
                bg-blue-800/15
                py-4 
                pt-8 
                rounded-lg
                shadow-[0_10px_20px_rgba(0,0,0,0.3)] 
                transform-gpu
                transition-shadow duration-300
                group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
            ">
                {/* Paper Texture/Noise */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-noise mix-blend-multiply" />

                <div className="flex items-center justify-center h-auto w-82 overflow-hidden relative rounded-md">
                    <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="object-contain mix-blend-multiply"
                    />
                </div>

            </div>
        </motion.div>
    )
}
