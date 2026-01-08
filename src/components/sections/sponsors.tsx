"use client"

import { motion } from "framer-motion"

// Combined sponsors list for the grid
const sponsors = [1, 2, 4, 5, 7, 8, 11, 12, 13, 14, 15].map((i) => ({
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
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        <span className="text-neon-cyan">Sponsors</span>
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Over <span className="text-white font-bold">$100,000</span> in prizes and resources provided by industry leaders.
                        <br className="hidden md:block" />
                        Fueling the next generation of hackers.
                    </p>
                </motion.div>

                {/* Sponsors Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
                    {sponsors.map((sponsor, index) => (
                        <SponsorCard key={sponsor.name} sponsor={sponsor} index={index} />
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: sponsors.length * 0.05 }}
                        className="group relative h-32 md:h-40 bg-zinc-900/20 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center hover:bg-zinc-900/40 hover:border-neon-cyan/30 transition-all duration-300 cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-3 group-hover:border-neon-cyan/50 group-hover:text-neon-cyan transition-colors text-zinc-500">
                            <span className="text-2xl">+</span>
                        </div>
                        <span className="text-zinc-500 text-sm font-mono group-hover:text-neon-cyan transition-colors">BECOME A SPONSOR</span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function SponsorCard({ sponsor, index }: { sponsor: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative h-40 md:h-52 flex items-center justify-center p-2"
        >
            <div className="glitch-image-box w-full h-full flex items-center justify-center bg-zinc-800/50">
                <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-[100%] max-w-[100%] object-contain"
                />
            </div>
        </motion.div>
    )
}
