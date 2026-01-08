"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Trophy } from "lucide-react"

const pastEvents = [
    {
        name: "Hackspiration '24",
        date: "April 2024",
        type: "Hackathon",
        stats: "1000+ Registrations",
        prize: "$6000+ Prize Pool",
        color: "border-neon-cyan/50",
        image: "/images/past-events/Hackspiration241.png"
    },
    {
        name: "I Love Hackathon",
        date: "December 2024",
        type: "Hackathon",
        stats: "24 Hours In-Person",
        prize: "VIT Pune",
        color: "border-neon-purple/50",
        image: "/images/past-events/ILOVEHACKATHON1.jpg"
    },
    {
        name: "Designathon",
        date: "Feb 2024",
        type: "Design Hack",
        stats: "2 Days Online",
        prize: "UI/UX Focused",
        color: "border-pink-500/50",
        image: "/images/past-events/Designathon2.jpg"
    },
    {
        name: "Beyond the Browser",
        date: "October 2024",
        type: "Workshop",
        stats: "400+ Attendees",
        prize: "Web2 Fundamentals",
        color: "border-yellow-400/50",
        image: "/images/past-events/BeyondtheBrowsers1.jpg"
    },
    {
        name: "Web3 Odyssey",
        date: "2024",
        type: "Hackathon",
        stats: "Web3 Focused",
        prize: "Blockchain",
        color: "border-blue-500/50",
        image: "/images/past-events/WEB3ODYSSEY1.jpg"
    },
    {
        name: "Cloud Wars",
        date: "2024",
        type: "Competition",
        stats: "Cloud Computing",
        prize: "DevOps",
        color: "border-sky-500/50",
        image: "/images/past-events/CLOUDWARS1.jpg"
    }
]


export function PastEvents() {
    return (
        <section id="past-events" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Past <span className="text-neon-purple">Events</span>
                    </h2>
                    <p className="text-zinc-400 text-xl">
                        Relive the moments from our previous events.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
                    {pastEvents.map((event, index) => (
                        <motion.div
                            key={event.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-xl border ${event.color} bg-zinc-900/50 hover:bg-zinc-900 transition-colors group overflow-hidden`}
                        >
                            <div className="h-48 w-full relative overflow-hidden">
                                <div className="glitch-image-box w-full h-full">
                                    <img
                                        src={event.image}
                                        alt={event.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-mono text-zinc-500 border border-zinc-700 px-2 py-1 rounded">
                                        {event.type}
                                    </span>
                                    <Calendar className="h-4 w-4 text-zinc-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                    {event.name}
                                </h3>
                                <p className="text-zinc-400 text-sm mb-4">{event.date}</p>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-zinc-300">
                                        <Users className="h-4 w-4 text-zinc-500" />
                                        {event.stats}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-300">
                                        <Trophy className="h-4 w-4 text-zinc-500" />
                                        {event.prize}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
