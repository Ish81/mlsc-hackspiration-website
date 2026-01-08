"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input" // We'll create this
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function ShortlistPage() {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    const handleSearch = async () => {
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            if (query.toLowerCase() === "test") {
                setResult({
                    name: "Team Alpha",
                    lab: "Lab 404",
                    slot: "10:00 AM",
                    status: "SHORTLISTED"
                })
            } else {
                setResult(null)
            }
            setLoading(false)
        }, 1000)
    }

    return (
        <div className="min-h-screen pt-24 pb-12 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold text-white mb-8">
                    Check <span className="text-neon-cyan">Shortlist Status</span>
                </h1>

                <div className="flex gap-4 mb-12">
                    <Input
                        placeholder="Enter Team Name or Leader Email"
                        value={query}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                        className="bg-zinc-900 border-zinc-700 text-white"
                    />
                    <Button onClick={handleSearch} disabled={loading} className="bg-neon-purple hover:bg-neon-purple/80">
                        {loading ? "Checking..." : <Search className="h-4 w-4" />}
                    </Button>
                </div>

                {result && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-zinc-900/50 border border-neon-cyan/50 p-8 rounded-xl backdrop-blur-md"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">{result.name}</h2>
                        <div className="grid grid-cols-2 gap-4 text-left">
                            <div>
                                <p className="text-zinc-400 text-sm">Status</p>
                                <p className="text-green-400 font-bold">{result.status}</p>
                            </div>
                            <div>
                                <p className="text-zinc-400 text-sm">Lab Number</p>
                                <p className="text-white font-bold">{result.lab}</p>
                            </div>
                            <div>
                                <p className="text-zinc-400 text-sm">Presentation Slot</p>
                                <p className="text-white font-bold">{result.slot}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}
