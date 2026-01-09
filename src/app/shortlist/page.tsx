import { ShortlistClient } from "@/components/sections/shortlist-client"

export default async function ShortlistPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/shortlist`, {
        cache: "no-store",
    })

    // Shortlist not announced yet
    if (res.status === 403) {
        return (
            <div className="min-h-screen pt-24 pb-12 container mx-auto px-4 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Shortlist Not Announced
                </h1>
                <p className="text-zinc-400">
                    The shortlist has not been announced yet. Please check back later.
                </p>
            </div>
        )
    }

    if (!res.ok) {
        console.error("Failed to fetch shortlist:", await res.text())
        return (
            <div className="min-h-screen pt-24 pb-12 container mx-auto px-4 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-4">System Error</h1>
                <p className="text-zinc-400">
                    Unable to load shortlist data. Please try again later.
                </p>
            </div>
        )
    }

    const teams = await res.json()
    return <ShortlistClient teams={teams} />
}
