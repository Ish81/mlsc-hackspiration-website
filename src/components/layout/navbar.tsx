"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
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

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl supports-[backdrop-filter]:bg-blue-900/5">
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
                        <span className="text-md font-semibold text-white">
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

                {/* Mobile Menu Toggle */}
                <button
                    className="text-white p-2 rounded-full pointer-events-auto md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="fixed top-20 left-4 right-4 p-4 bg-[#0f0518]/95 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden pointer-events-auto z-50 shadow-2xl shadow-purple-900/20"
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
            </AnimatePresence>

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
            {/* <NotificationBar /> */}

        </header>
    )
}