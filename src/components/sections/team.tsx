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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Meet the <span className="text-neon-cyan">Team</span>
                    </h2>
                    <p className="text-zinc-400 text-xl">
                        The minds behind Hackpiration'26.
                    </p>
                </motion.div>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-sm bg-[#060b22]"
                        >
                            <div className="glitch-image-box w-full h-full p-5">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent duration-300 flex flex-col justify-end p-6 pointer-events-none">
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-neon-cyan text-sm mb-4">{member.role}</p>
                                <div className="flex gap-4 pointer-events-auto">
                                    {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white"><Github className="h-5 w-5" /></a>}
                                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>}
                                    {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white"><Twitter className="h-5 w-5" /></a>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
