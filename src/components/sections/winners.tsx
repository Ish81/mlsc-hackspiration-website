"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Share2, Heart, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { StaggeredText } from "@/components/ui/scroll-animations"

const winnersData = [
  {
    team: "Neural Nexus",
    institution: "Institute name",
    domain: "AI & Machine Learning",
    psId: "PS-101",
    prize: "1st Place",
    color: "text-neon-cyan",
    borderColor: "border-neon-cyan",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]"
  },
  {
    team: "ChainGuardians",
    institution: "Institute name",
    domain: "Web3 & Blockchain",
    psId: "PS-204",
    prize: "1st Place",
    color: "text-neon-purple",
    borderColor: "border-neon-purple",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.3)]"
  },
  {
    team: "AgroTech",
    institution: "Institute name",
    domain: "Open Innovation",
    psId: "PS-305",
    prize: "1st Place",
    color: "text-green-400",
    borderColor: "border-green-400",
    glow: "shadow-[0_0_30px_rgba(74,222,128,0.3)]"
  },
  {
    team: "MediMind",
    institution: "Institute name",
    domain: "AI & Machine Learning",
    psId: "PS-102",
    prize: "Runner Up",
    color: "text-zinc-300",
    borderColor: "border-zinc-500",
    glow: "shadow-[0_0_20px_rgba(212,212,216,0.2)]"
  }
]

const socialWinners = [
  {
    category: "Most Creative Reel",
    handle: "@handle",
    metric: "15.2K Views",
    icon: Eye,
    color: "text-pink-500"
  },
  {
    category: "Top Engagement",
    handle: "@handle",
    metric: "4.5K Likes",
    icon: Heart,
    color: "text-red-500"
  },
  {
    category: "Best Community Post",
    handle: "@handle",
    metric: "850 Shares",
    icon: Share2,
    color: "text-blue-400"
  }
]

export function Winners({ visible }: { visible: boolean }) {
  const emojis = ["🏆", "🎉", "✨", "🚀", "🔥", "💎"]

  if (!visible) return <></>

  return (
    <section id="winners" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
      {/* Repeated Emoji Background */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none select-none overflow-hidden flex flex-wrap gap-12 p-12 justify-center content-center">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="text-4xl filter grayscale">
            {emojis[i % emojis.length]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-[0.1em] uppercase">
            WINNERS
          </h2>
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Official Competition Results
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-md"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">Rank</th>
                <th className="p-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">Team</th>
                <th className="p-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">Institution</th>
                <th className="p-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">Domain</th>
                <th className="p-6 text-xs font-mono text-zinc-500 uppercase tracking-widest text-right">Prize</th>
              </tr>
            </thead>
            <tbody>
              {winnersData.map((winner, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="p-6">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border",
                      index === 0 ? "border-yellow-500/50 text-yellow-500 bg-yellow-500/10" :
                        index === 1 ? "border-zinc-400/50 text-zinc-400 bg-zinc-400/10" :
                          "border-white/10 text-zinc-500 bg-white/5"
                    )}>
                      {index + 1}
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-white font-bold tracking-tight group-hover:text-neon-cyan transition-colors">
                      {winner.team}
                    </span>
                  </td>
                  <td className="p-6 text-zinc-400 text-sm">
                    {winner.institution}
                  </td>
                  <td className="p-6">
                    <span className="px-2 py-1 rounded text-[10px] font-mono border border-white/10 text-zinc-500 uppercase">
                      {winner.domain}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <span className={cn("font-mono font-bold", winner.color)}>
                      {winner.prize}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Social Media Contest Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-widest uppercase">
            Social Media Contest
          </h3>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.2em] uppercase">
            Engagement & Creativity Awards
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-md mb-12"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">Category</th>
                <th className="p-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">Handle</th>
                <th className="p-6 text-xs font-mono text-zinc-500 uppercase tracking-widest text-right">Metric</th>
              </tr>
            </thead>
            <tbody>
              {socialWinners.map((winner, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-5">
                      <div className={cn("p-2 rounded-lg bg-zinc-900 border border-white/10", winner.color)}>
                        <winner.icon className="h-4 w-4" />
                      </div>
                      <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
                        {winner.category}
                      </span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-white font-bold tracking-tight group-hover:text-neon-cyan transition-colors">
                      {winner.handle}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <span className={cn("font-mono font-bold", winner.color)}>
                      {winner.metric}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

