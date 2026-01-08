"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Linkedin, Twitter, Link as LinkIcon } from "lucide-react"

export default function ContestPage() {
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1500)
    }

    return (
        <div className="min-h-screen pt-24 pb-12 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Online <span className="text-neon-cyan">Contest</span>
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
                        Participate in our social media challenges and win exclusive swag!
                        Most viral posts on LinkedIn and X win.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Submission Form */}
                    <Card className="bg-zinc-900/50 border-neon-purple/30 backdrop-blur-md">
                        <CardHeader>
                            <CardTitle className="text-2xl text-white flex items-center gap-2">
                                <LinkIcon className="h-6 w-6 text-neon-purple" />
                                Submit Your Entry
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Submission Received!</h3>
                                    <p className="text-zinc-400">Good luck! Keep checking the leaderboard.</p>
                                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">
                                        Submit Another
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm text-zinc-400">Team Name</label>
                                        <Input placeholder="Enter your team name" required className="bg-zinc-950 border-zinc-800" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-zinc-400">Post Link (LinkedIn/X)</label>
                                        <Input placeholder="https://..." required className="bg-zinc-950 border-zinc-800" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-zinc-400">Platform</label>
                                        <select className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-purple">
                                            <option>LinkedIn</option>
                                            <option>X (Twitter)</option>
                                        </select>
                                    </div>
                                    <Button type="submit" disabled={loading} className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white">
                                        {loading ? "Submitting..." : "Submit Entry"}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>

                    {/* Leaderboard Placeholder */}
                    <div className="space-y-6">
                        <Card className="bg-zinc-900/30 border-white/10">
                            <CardHeader>
                                <CardTitle className="text-xl text-white flex items-center gap-2">
                                    <Linkedin className="h-5 w-5 text-blue-500" />
                                    Top LinkedIn Posts
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-neon-cyan font-bold">#{i}</span>
                                            <span className="text-zinc-300">Team Alpha</span>
                                        </div>
                                        <span className="text-xs text-zinc-500">1.2k likes</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-900/30 border-white/10">
                            <CardHeader>
                                <CardTitle className="text-xl text-white flex items-center gap-2">
                                    <Twitter className="h-5 w-5 text-sky-500" />
                                    Top X Posts
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-neon-cyan font-bold">#{i}</span>
                                            <span className="text-zinc-300">Team Beta</span>
                                        </div>
                                        <span className="text-xs text-zinc-500">850 reposts</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
