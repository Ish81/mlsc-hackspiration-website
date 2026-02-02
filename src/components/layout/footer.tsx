import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">
                            Hackspiration <span className="text-neon-cyan">x</span> <span className="text-neon-magenta">Algorand</span>
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Hack. Hustle. Win. <br />
                            The biggest cyberpunk hackathon at VIT Pune.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-white">Links</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#about" className="hover:text-neon-cyan">About</Link></li>
                            <li><Link href="#tracks" className="hover:text-neon-cyan">Tracks</Link></li>
                            <li><Link href="#prizes" className="hover:text-neon-cyan">Prizes</Link></li>
                            <li><Link href="#faq" className="hover:text-neon-cyan">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="/code-of-conduct" className="hover:text-neon-cyan">Code of Conduct</Link></li>
                            <li><Link href="/privacy" className="hover:text-neon-cyan">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-neon-cyan">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-white">Connect</h4>
                        <div className="flex gap-4 text-zinc-400">
                            <a href="#" className="hover:text-neon-cyan"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-neon-cyan"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-neon-cyan"><Instagram className="h-5 w-5" /></a>
                            <a href="mailto:mlsc@vit.edu" className="hover:text-neon-cyan"><Mail className="h-5 w-5" /></a>
                        </div>
                        <p className="mt-4 text-sm text-zinc-400">
                            Powered by <span className="font-bold text-white">MLSC VIT Pune</span>
                        </p>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
                    © 2026 MLSC VIT Pune. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
