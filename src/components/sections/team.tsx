"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Samiksha",
    role: "President",
    image: "/images/team/Samiksha.png",
    social: {
      //twitter: "https://x.com/ChinmayInam19",
      linkedin: "https://www.linkedin.com/in/samiksha-solanke-1611342ba/",
      github: "https://github.com/SamikshaSolanke",
    },
  },
  {
    name: "Ishaan",
    role: "Vice President",
    image: "/images/team/Ishaan.png",
    social: {
      //twitter: "https://x.com/ashishjha1034",
      linkedin: "https://www.linkedin.com/in/ishaan-chepurwar-6a9b98293/",
      github: "https://github.com/Ish81",
    },
  },
  {
    name: "Purvi",
    role: "Treasurer",
    image: "/images/team/Purvi.png",
    social: {
      //twitter: "https://x.com/chiragBelani0",
      linkedin: "https://www.linkedin.com/in/purvi-solanki-bb5312288/",
      github: "https://github.com/Purvi-Solanki",
    },
  },
  {
    name: "Tanishka",
    role: "Technical Head",
    image: "/images/team/Tanishka.png",
    social: {
      twitter: "https://x.com/tanishkaah_here",
      linkedin: "https://www.linkedin.com/in/tanishka-singh-793895291/",
      github: "https://github.com/Tanishka-Singh05",
    },
  },
  {
    name: "Raman",
    role: "Management Head",
    image: "/images/team/Raman.png",
    social: {
      //twitter: "https://x.com/swaraj_phand",
      linkedin: "https://www.linkedin.com/in/raman-gandewar-615983322/",
      github: "https://github.com/RamanGandewar",
    },
  },
  {
    name: "Riddhi",
    role: "PR & Outreach Head",
    image: "/images/team/Riddhi.png",
    social: {
      //twitter: "https://x.com/AnushkaWaghma12",
      linkedin: "https://www.linkedin.com/in/riddhi-sadavarte-42035930b/",
      github: "https://github.com/riddhii52",
    },
  },
  {
    name: "Shreya",
    role: "Branding Head",
    image: "/images/team/Shreya.png",
    social: {
      //twitter: "https://x.com/swarnim_y424",
      linkedin: "https://www.linkedin.com/in/shreya-gade-b73318288/",
      github: "https://github.com/Seaborgi",
    },
  },
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
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 group backdrop-blur-lg"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
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
                                {member.social?.github && (
                                    <a
                                    href={member.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-neon-cyan transition-colors"
                                    >
                                    <Github className="h-5 w-5" />
                                    </a>
                                )}

                                {member.social?.linkedin && (
                                    <a
                                    href={member.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-neon-cyan transition-colors"
                                    >
                                    <Linkedin className="h-5 w-5" />
                                    </a>
                                )}

                                {member.social?.twitter && (
                                    <a
                                    href={member.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-neon-cyan transition-colors"
                                    >
                                    <Twitter className="h-5 w-5" />
                                    </a>
                                )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
