import prisma from "@/lib/db"
import { ShortlistClient } from "@/components/sections/shortlist-client"
import { unstable_cache } from "next/cache"

async function fetchShortlistedTeams() {
    return prisma.team.findMany({
        where: {
            status: "SHORTLISTED"
        },
        orderBy: { name: 'asc' }
    })
}

const getShortlistedTeams = unstable_cache(
    fetchShortlistedTeams,
    ['shortlist-teams'],
    {
        revalidate: 30 * 60
    }
)

export default async function ShortlistPage() {
    try {
        const teams = await getShortlistedTeams();
        return <ShortlistClient teams={teams} />
    } catch (error) {
        console.error("Failed to fetch shortlist:", error)
        return (
            <div className="min-h-screen pt-24 pb-12 container mx-auto px-4 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-4">System Error</h1>
                <p className="text-zinc-400">Unable to load shortlist data. Please try again later.</p>
            </div>
        )
    }
}