import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden p-4">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center"
            >
                {/* Glitch 404 */}
                <div className="relative mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tighter select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-red-500/50 tracking-tighter blur-sm animate-pulse select-none" aria-hidden="true">
                        404
                    </div>
                </div>

                {/* Error Message */}
                <div className="flex items-center justify-center gap-3 mb-6 text-red-500">
                    <span className="font-mono text-lg tracking-[0.2em] uppercase">Failure</span>
                </div>

                <p className="text-zinc-400 max-w-md mx-auto mb-12 font-mono text-sm md:text-base leading-relaxed">
                    The page you are looking for does not exist.
                </p>

                {/* Return Button */}
                <Link
                    href="/"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-red-500/30 hover:border-red-500 text-white rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono uppercase tracking-widest text-sm">Return to Base</span>
                </Link>
            </div>

            {/* Decorative Scanline */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20" />
        </div>
    )
}
