"use client"

import { useState, useActionState, useEffect } from "react"
import { motion } from "framer-motion"
import { useFormStatus } from "react-dom"
import { Loader2, CheckCircle, AlertCircle, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { submitContestEntry, type SubmissionState } from "@/app/actions/submit-contest"

const initialState: SubmissionState = {}

export function OnlineContest() {
    const [state, formAction] = useActionState(submitContestEntry, initialState)
    const [confirmed, setConfirmed] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    // Check if already submitted
    useEffect(() => {
        if (localStorage.getItem("contestSubmitted")) setHasSubmitted(true)
    }, [])

    // Update local storage on success
    useEffect(() => {
        if (state.success) {
            localStorage.setItem("contestSubmitted", "true")
            setHasSubmitted(true)
        }
    }, [state.success])

    return (
        <section id="online-contest" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-[0.1em] uppercase">
                        <span className="text-neon-cyan">Online</span> Contest
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Submit your entry for the online creativity contest.
                    </p>
                </motion.div>

                <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                    {state.success || hasSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Submission Received!</h3>
                            <p className="text-zinc-400 max-w-md mx-auto">
                                Your entry has been successfully recorded. Good luck!
                                <br />
                                <span className="text-sm mt-4 block text-zinc-500">
                                    Need to make changes? Contact the team directly.
                                </span>
                            </p>
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-8">
                            <input type="hidden" name="x-internal-token" value="HACKSPIRATION_SECRET_2026" />
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="teamName" className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
                                        Team Name
                                    </label>
                                    <input
                                        type="text"
                                        id="teamName"
                                        name="teamName"
                                        defaultValue={state.inputs?.teamName}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                        placeholder="Enter your team name"
                                    />
                                    {state.fieldErrors?.teamName && (
                                        <p className="text-red-500 text-xs mt-1">{state.fieldErrors.teamName[0]}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        defaultValue={state.inputs?.email}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                        placeholder="leader@example.com"
                                    />
                                    {state.fieldErrors?.email && (
                                        <p className="text-red-500 text-xs mt-1">{state.fieldErrors.email[0]}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="url" className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
                                    Post URL
                                </label>
                                <input
                                    type="url"
                                    id="url"
                                    name="url"
                                    defaultValue={state.inputs?.url}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="https://instagram.com/p/..."
                                />
                                <p className="text-xs text-zinc-600">
                                    Must be a valid link from Instagram, LinkedIn, Twitter/X, or Facebook.
                                </p>
                                {state.fieldErrors?.url && (
                                    <p className="text-red-500 text-xs mt-1">{state.fieldErrors.url[0]}</p>
                                )}
                            </div>

                            {state.error && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3 text-red-400">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    <p className="text-sm">{state.error}</p>
                                </div>
                            )}

                            <div className="pt-4 border-t border-white/5">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={confirmed}
                                            onChange={(e) => setConfirmed(e.target.checked)}
                                            className="peer sr-only"
                                        />
                                        <div className="w-5 h-5 border border-zinc-600 rounded bg-black/50 peer-checked:bg-neon-cyan peer-checked:border-neon-cyan transition-all" />
                                        <CheckCircle className="w-3.5 h-3.5 text-black absolute left-0.5 top-0.5 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                                    </div>
                                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors select-none">
                                        I confirm that this is my final submission. I understand that I cannot edit or resubmit this entry once sent.
                                    </span>
                                </label>
                            </div>

                            <SubmitButton disabled={!confirmed} />
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

function SubmitButton({ disabled }: { disabled: boolean }) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={disabled || pending}
            className={cn(
                "w-full py-4 rounded-lg font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                disabled || pending
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    : "bg-neon-cyan text-black hover:bg-neon-cyan/90 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            )}
        >
            {pending ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                </>
            ) : (
                <>
                    Submit Entry
                    <Send className="w-5 h-5" />
                </>
            )}
        </button>
    )
}
