"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const team = [
    { name: "Ishaan", role: "Organizer", image: "/images/team/Ishaan.png", github: "#", linkedin: "#", twitter: "#" },
    { name: "Purvi", role: "Organizer", image: "/images/team/Purvi.png", github: "#", linkedin: "#", twitter: "#" },
    { name: "Raman", role: "Organizer", image: "/images/team/Raman.png", github: "#", linkedin: "#", twitter: "#" },
    { name: "Riddhi", role: "Organizer", image: "/images/team/Riddhi.png", github: "#", linkedin: "#", twitter: "#" },
    { name: "Samiksha", role: "Organizer", image: "/images/team/Samiksha.png", github: "#", linkedin: "#", twitter: "#" },
    { name: "Shreya", role: "Organizer", image: "/images/team/Shreya.png", github: "#", linkedin: "#", twitter: "#" },
    { name: "Tanishka", role: "Organizer", image: "/images/team/Tanishka.png", github: "#", linkedin: "#", twitter: "#" },
]

export function Team() {
    return (
        <section id="team" className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-[0.3em] uppercase">
                        Meet the <span className="text-neon-cyan">Team</span>
                    </h2>
                </motion.div>

                <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center justify-center align-center">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 group backdrop-blur-lg"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            {/* Member Info*/}
                            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
                                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest">
                                    {member.role}
                                </p>

                                {/* Subtle Socials */}
                                <div className="flex gap-4 mt-4 opacity-40 hover:opacity-100 transition-opacity">
                                    {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-cyan transition-colors"><Github className="h-5 w-5" /></a>}
                                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-cyan transition-colors"><Linkedin className="h-5 w-5" /></a>}
                                    {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-cyan transition-colors"><Twitter className="h-5 w-5" /></a>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
