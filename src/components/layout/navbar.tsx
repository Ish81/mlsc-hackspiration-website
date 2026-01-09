"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button" // We'll create this later or use a simple button for now
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { NotificationBar } from "../ui/notification-bar"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Tracks", href: "/#tracks" },
    { name: "Timeline", href: "/#timeline" },
    { name: "Prizes", href: "/#prizes" },
    { name: "FAQs", href: "/#faq" },
    { name: "Contest", href: "/contest" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const { scrollYProgress } = useScroll()

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon-cyan z-50 origin-left"
            />
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-6">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img
                            src="/mlsc-logo.jpg"
                            alt="MLSC Logo"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {/* <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-[10px]">MLSC</div> */}
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold text-white">
                            Microsoft Learner's Student Club
                        </span>
                        <span className="text-xs text-white">
                            VIT Pune
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-3 bg-black-900/20 backdrop-blur-md rounded-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-7 py-3 text-md font-medium text-zinc-400 transition-all duration-300 hover:text-white rounded-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>


                {/* Desktop Nav */}
                {/* <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 transition-all duration-300 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)] relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contest"
                        className="text-xs font-mono uppercase tracking-[0.2em] text-neon-purple/80 transition-all duration-300 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)] relative group"
                    >
                        Contest
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                    </Link>
                </nav> */}

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-zinc-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl"
                >
                    <div className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-zinc-400 hover:text-neon-cyan"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://unstop.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-neon-purple px-4 text-sm font-medium text-white"
                        >
                            Register Now
                        </a>
                    </div>
                </motion.div>
            )}
            <NotificationBar />

        </header>
    )
}

export function Navbar2() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/#about" },
        { name: "Events", href: "/#events" },
        { name: "Projects", href: "/#projects" },
        { name: "Our team", href: "/#team" },
        { name: "Industry Connect", href: "/#industry-connect" },
    ]

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
                <nav className="hidden md:flex items-center gap-1 px-2 py-2 bg-[#0f0518]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-purple-900/20">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-6 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white hover:bg-white/5 rounded-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex justify-between items-center px-4 w-screen">
                    {/* Logo for mobile */}
                    <Link href="/" className="flex items-center gap-2 pointer-events-auto">
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img
                                src="/mlsc-logo.jpg"
                                alt="MLSC Logo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </Link>

                    <button
                        className="text-white bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 pointer-events-auto"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 left-4 right-4 p-4 bg-[#0f0518]/95 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden pointer-events-auto"
                >
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Notification Bar - Hidden for now or moved? keeping it out of the pill */}
            {/* <NotificationBar /> */}
        </header>
    )
}
