"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Team } from "@prisma/client"

interface ShortlistClientProps {
    teams: Team[]
}

export function ShortlistClient({ teams }: ShortlistClientProps) {
    const [tableQuery, setTableQuery] = useState("")
    const filteredTeams = teams.filter(team =>
        team.name.toLowerCase().includes(tableQuery.toLowerCase()) ||
        (team.labNumber && team.labNumber.toLowerCase().includes(tableQuery.toLowerCase()))
    )

    return (
        <div className="min-h-screen pt-24 pb-12 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold text-white mb-8">
                    <span className="text-neon-cyan">All Shortlisted Teams</span>
                </h1>

                {/* Searchable Table Section */}
                <div className="text-left">
                    <div className="mb-6">
                        <Input
                            placeholder="Search table by Team Name or Lab..."
                            value={tableQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTableQuery(e.target.value)}
                            className="bg-zinc-900/50 border-zinc-700 text-white max-w-md"
                        />
                    </div>

                    <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-zinc-400 uppercase font-mono tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Team Name</th>
                                        <th className="px-6 py-4 font-medium">Lab</th>
                                        <th className="px-6 py-4 font-medium">Slot</th>
                                        <th className="px-6 py-4 font-medium">Leader Name</th>
                                        <th className="px-6 py-4 font-medium">Leader Email</th>
                                        {/* <th className="px-6 py-4 font-medium">Status</th> */}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {filteredTeams.length > 0 ? (
                                        filteredTeams.map((team) => (
                                            <tr key={team.id} className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">{team.name}</td>
                                                <td className="px-6 py-4 text-zinc-30">{team.labNumber || 'N/A'}</td>
                                                <td className="px-6 py-4 text-zinc-300 font-mono">{team.presentationSlot || 'N/A'}</td>
                                                {/* <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${team.status === 'SHORTLISTED' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                                        team.status === 'REJECTED' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                                                            'bg-red-500/10 text-red-400 border border-red-500/20'
                                                        }`}>
                                                        {team.status}
                                                    </span>
                                                </td> */}
                                                <td className="px-6 py-4 text-zinc-30">{team.leaderName || 'N/A'}</td>
                                                <td className="px-6 py-4 text-zinc-30">{team.leaderEmail || 'N/A'}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-8 text-center text-zinc-500">
                                                No teams found matching your search.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
