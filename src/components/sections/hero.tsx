"use client"

import { motion } from "framer-motion"
import { CyberpunkButton } from "@/components/ui/cyberpunk-button"
import { ArrowRight, Terminal, Code2, Cpu, MapPin } from "lucide-react"
import { StaggeredText, ScrollScale } from "@/components/ui/scroll-animations"
import { CityScene } from "@/components/3d/city-scene"
import { Countdown } from "@/components/sections/countdown"
import { HyperText } from "@/components/ui/hyper-text"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black pt-12">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <CityScene />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="scanline" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex-1 flex flex-col items-center justify-between">

        {/* Spacer */}
        <div className="h-24" />

        <div
          className="flex flex-col items-center"
        >
          <div className="relative z-10 text-center mb-18"
          >
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter relative">
              <span className="absolute -inset-1 blur-2xl bg-neon-cyan/20 rounded-full pointer-events-none" />
              <HyperText text="HACKSPIRATION'26" className="relative z-10" />
            </h1>
            {/* Chips */}
            <div className="flex flex-row gap-3 items-center justify-center mt-5 mb-9">
              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-md backdrop-blur-md group">
                <span className="text-neon-magenta font-[family-name:var(--font-orbitron)] font-bold tracking-wider text-xs">
                  24 HOUR HACKATHON
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-md backdrop-blur-md group">
                <span className="text-neon-cyan font-[family-name:var(--font-orbitron)] font-bold tracking-wider text-xs">
                  VIT Pune
                </span>
              </div>
            </div>
            <div className="text-md md:text-2xl text-zinc-400 font-mono max-w-2xl mx-auto flex justify-center">
              <StaggeredText text="A thrilling 24-hour offline hackathon merging innovation with game-show excitement" delay={0.01} staggerDelay={0.01} className="justify-center" />
            </div>
          </div>
        </div>

        <div className="w-full flex-row mb-6 items-center justify-center">
          <div className="flex flex-col md:gap-8 gap-5 sm:flex-row items-center justify-center">
            <CyberpunkButton
              variant="primary"
              className="md:text-lg text-xs md:py-5 md:px-12 sm:py-4 sm:px-8"
            >
              REGISTER NOW
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </CyberpunkButton>

            <CyberpunkButton
              variant="secondary"
              className="md:text-lg text-xs md:py-5 md:px-12 sm:py-4 sm:px-8"
            >
              <Terminal className="h-5 w-5 mr-2" />
              JOIN DISCORD
            </CyberpunkButton>
          </div>

          <div className="w-full mb-12">
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  )
}
