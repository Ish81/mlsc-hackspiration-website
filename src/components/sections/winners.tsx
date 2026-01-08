"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Share2, Heart, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { StaggeredText } from "@/components/ui/scroll-animations"

const winnersData = [
  {
    team: "Neural Nexus",
    institution: "IIT Bombay",
    domain: "AI & Machine Learning",
    psId: "PS-101",
    prize: "1st Place",
    color: "text-neon-cyan",
    borderColor: "border-neon-cyan",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]"
  },
  {
    team: "ChainGuardians",
    institution: "VIT Pune",
    domain: "Web3 & Blockchain",
    psId: "PS-204",
    prize: "1st Place",
    color: "text-neon-purple",
    borderColor: "border-neon-purple",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.3)]"
  },
  {
    team: "AgroTech",
    institution: "MIT WPU",
    domain: "Open Innovation",
    psId: "PS-305",
    prize: "1st Place",
    color: "text-green-400",
    borderColor: "border-green-400",
    glow: "shadow-[0_0_30px_rgba(74,222,128,0.3)]"
  },
  {
    team: "MediMind",
    institution: "BITS Pilani",
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
    handle: "@creative_hacker",
    metric: "15.2K Views",
    icon: Eye,
    color: "text-pink-500"
  },
  {
    category: "Top Engagement",
    handle: "@tech_influencer",
    metric: "4.5K Likes",
    icon: Heart,
    color: "text-red-500"
  },
  {
    category: "Best Community Post",
    handle: "@community_lead",
    metric: "850 Shares",
    icon: Share2,
    color: "text-blue-400"
  }
]

export function Winners() {
  return (
    <section id="winners" className="py-24 bg-black relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black z-0" />

      <motion.div
        initial={{ top: "-10%" }}
        whileInView={{ top: "120%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "linear" }}
        className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent z-20 pointer-events-none blur-md"
      />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase">
            <StaggeredText text="Winners" className="animate-glitch" />
          </h2>
          <div className="text-zinc-500 font-mono text-lg tracking-widest">
            <StaggeredText text="Competition Results" delay={0.5} staggerDelay={0.03} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Victory Cards Column */}
          <div className="lg:col-span-2 space-y-8">
            {winnersData.map((winner, index) => (
              <VictoryCard key={index} winner={winner} index={index} />
            ))}
          </div>

          {/* Social Leaderboard Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Share2 className="text-pink-500 h-6 w-6" />
                <h3 className="text-xl font-bold text-white font-mono uppercase tracking-widest">
                  Social Grid
                </h3>
              </div>
              <SocialLeaderboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VictoryCard({ winner, index }: { winner: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 50 }}
      className={cn(
        "relative group overflow-hidden rounded-xl border p-7 px-8",
        // winner.borderColor,
        winner.glow
      )}
    >
      {/* Glitch Flash Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.5, 0] }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.2 }}
        className="absolute inset-0 bg-white z-20 pointer-events-none mix-blend-overlay"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
            {winner.team}
          </h3>
          <p className="text-xl text-zinc-400 font-medium mb-4">
            {winner.institution}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className={cn(
              "px-3 py-1 rounded-md text-xs font-bold font-mono uppercase tracking-wider border bg-black/50",
              winner.borderColor,
              winner.color
            )}>
              {winner.domain}
            </span>
            <span className="text-zinc-600 font-mono text-xs">
              ID: {winner.psId}
            </span>
          </div>
        </div>

        {/* <div className="flex items-center gap-4">
                    <div className={cn(
                        "h-12 w-12 rounded-full flex items-center justify-center border-2 bg-black/50",
                        winner.borderColor
                    )}>
                        <Trophy className={cn("h-6 w-6", winner.color)} />
                    </div>
                    <div className="text-right hidden md:block">
                        <p className={cn("text-xl font-black font-mono", winner.color)}>
                            {winner.prize}
                        </p>
                    </div>
                </div> */}
      </div>

      <div className={cn("absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none")} />
    </motion.div>
  )
}

function SocialLeaderboard() {
  return (
    <div className="bg-zinc-900/30 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
      {/* Terminal Header */}
      {/* <div className="bg-zinc-900/80 border-b border-white/10 p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
            </div> */}

      <div className="p-4 space-y-4">
        {socialWinners.map((winner, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
            <div className={`p-2 rounded-lg bg-zinc-900 border border-white/10 ${winner.color}`}>
              <winner.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-0.5">
                {winner.category}
              </p>
              <p className="text-sm font-bold text-white truncate">
                {winner.handle}
              </p>
            </div>
            <div className="text-right">
              <p className={`text-sm font-bold font-mono ${winner.color}`}>
                {winner.metric}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
