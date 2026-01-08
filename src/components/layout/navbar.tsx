"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button" // We'll create this later or use a simple button for now
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { NotificationBar } from "../ui/notification-bar"

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md supports-[backdrop-filter]:bg-black/30">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-[10px]">MLSC</div>
                    <span className="text-xl font-bold tracking-tighter text-white">
                        HACKPIRATION<span className="text-neon-purple">'26</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-neon-cyan"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contest"
                        className="text-sm font-medium text-neon-purple transition-colors hover:text-neon-cyan"
                    >
                        Contest
                    </Link>
                    <a
                        href="https://unstop.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-neon-purple px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-neon-purple/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg" alt="Unstop" className="h-4 w-auto invert brightness-0" />
                        Register Now
                    </a>
                    <ThemeToggle />
                </nav>

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
