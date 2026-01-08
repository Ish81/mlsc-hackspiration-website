"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Medal, Star } from "lucide-react"

export function Prizes() {
    return (
        <section id="prizes" className="py-28 bg-black relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Header Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full text-center mb-24"
                >
                    <h2 className="text-xl md:text-2xl font-mono text-neon-purple mb-6 uppercase tracking-[0.2em]">
                        Total Prize Pool
                    </h2>
                    <div className="relative inline-block group mt-8">
                        <div className="absolute -inset-4 bg-neon-purple/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="text-3xl md:text-[5rem] font-black text-white tracking-tighter font-mono animate-glitch drop-shadow-[0_0_30px_rgba(124,58,237,0.6)]" data-text="₹1,00,000">
                            ₹1,00,000
                        </div>
                    </div>
                </motion.div>

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PrizeCard
                        rank="1st Prize"
                        amount="₹50,000"
                        color="text-neon-cyan"
                        borderColor="border-neon-cyan"
                        icon={Trophy}
                        delay={0}
                    />
                    <PrizeCard
                        rank="2nd Prize"
                        amount="₹30,000"
                        color="text-neon-purple"
                        borderColor="border-neon-purple"
                        icon={Medal}
                        delay={0.1}
                    />
                    <PrizeCard
                        rank="3rd Prize"
                        amount="₹20,000"
                        color="text-yellow-400"
                        borderColor="border-yellow-400"
                        icon={Award}
                        delay={0.2}
                    />
                </div> */}
            </div>
        </section>
    )
}

function PrizeCard({ rank, amount, color, borderColor, icon: Icon, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={`relative border-2 px-8 py-12 flex flex-col items-center justify-center text-center group hover:bg-zinc-900 transition-colors`}
        >
            {/* Cut Corners */}
            <div className={`absolute -top-[2px] -left-[2px] w-6 h-6 border-t-2 border-l-2 ${borderColor}`} />
            <div className={`absolute -bottom-[2px] -right-[2px] w-6 h-6 border-b-2 border-r-2 ${borderColor}`} />

            {/* <div className="mb-6 relative">
                <Icon className={`h-16 w-16 ${color} stroke-[1.5]`} />
                <div className={`absolute inset-0 ${color} blur-xl opacity-20`} />
            </div> */}

            <h3 className={`text-xl font-mono ${color} mb-2 uppercase tracking-widest`}>{rank}</h3>
            <div className="text-xl md:text-2xl font-black text-white font-mono tracking-tighter">
                {amount}
            </div>
        </motion.div>
    )
}
