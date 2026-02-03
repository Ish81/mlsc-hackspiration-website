"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function Eligibility() {
    const criteria = [
        { text: "Open to students and developers across India." },
        { text: <>Participants must register in teams of <span className="text-white font-bold">1-4 members</span>.</> },
        { text: "Inter-department, inter-college teams allowed." },
        { text: <>Each participant must be part of <span className="text-white font-bold">only one team</span>.</> },
        { text: <>All projects must be built on the <span className="text-white font-bold">Algorand blockchain</span>.</> },
    ]

    return (
        <section id="eligibility" className="py-12 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight uppercase">
                        Eligibility <span className="text-neon-cyan">Criteria</span>
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
                        Make sure you meet the following requirements to participate in Hackspiration'26.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <div className="grid gap-3 md:gap-6">
                        {criteria.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-3 md:gap-4 p-3 md:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-neon-cyan/50 transition-colors group"
                            >
                                <div className="mt-1">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-neon-cyan group-hover:text-neon-purple transition-colors" />
                                </div>
                                <p className="text-sm md:text-lg text-zinc-300 font-medium leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
