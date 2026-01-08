"use client"

import { motion } from "framer-motion"
import { CyberpunkButton } from "@/components/ui/cyberpunk-button"
import { ArrowRight, Terminal, Code2, Cpu, MapPin } from "lucide-react"
import { StaggeredText, ScrollScale } from "@/components/ui/scroll-animations"
import { CityScene } from "@/components/3d/city-scene"
import { Countdown } from "@/components/sections/countdown"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <CityScene />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="scanline" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* MLSC Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mb-8 p-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10"
          >
            <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-white/20">
              <img
                src="/mlsc-logo.jpg"
                alt="MLSC Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Glitch Title */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center mb-12"
          >
            <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter relative">
              <span className="absolute -inset-1 blur-2xl bg-neon-cyan/20 rounded-full pointer-events-none" />
              <StaggeredText text="HACKSPIRATION '26" className="relative z-10 animate-glitch" />
            </h1>
            <div className="text-xl md:text-2xl text-zinc-400 font-mono max-w-2xl mx-auto flex justify-center">
              <StaggeredText text="Empowering the Future" delay={0.5} staggerDelay={0.05} className="justify-center" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-8 sm:flex-row items-center mb-12">
            <ScrollScale>
              <CyberpunkButton
                variant="primary"
                className="text-xl py-6 px-10"
              >
                {/* <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg" alt="Unstop" className="h-6 w-auto invert brightness-0 mr-2" /> */}
                REGISTER NOW
                <ArrowRight className="h-6 w-6 ml-2" />
              </CyberpunkButton>
            </ScrollScale>

            <ScrollScale duration={1}>
              <CyberpunkButton
                variant="secondary"
                className="text-xl py-6 px-10"
              >
                JOIN DISCORD
              </CyberpunkButton>
            </ScrollScale>
          </div>

          {/* Countdown */}
          <div className="w-full max-w-4xl">
            <Countdown />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
