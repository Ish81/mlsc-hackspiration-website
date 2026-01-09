// app/api/teams/shortlisted/route.ts
import prisma from "@/lib/db"
import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function GET() {
    try {
        const config = await prisma.config.findFirst()
        if (!config) {
            return NextResponse.json({ error: "Config not found" }, { status: 500 })
        }
        if (!config.shortlistAnnounced) {
            return NextResponse.json({ error: "Shortlist not announced" }, { status: 403 })
        }
        const teams = await prisma.team.findMany({
            where: { status: "SHORTLISTED" },
            orderBy: { name: "asc" },
        })

        return NextResponse.json(teams)
    } catch (error) {
        console.error("Failed to fetch shortlist:", error)
        return NextResponse.json({ error: "Failed to fetch shortlist" }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const h = await headers()
        const providedSecret = h.get("x-admin-secret")
        let _shortlistAnnounced = false
        try {
            const { shortlistAnnounced } = await request.json()
            _shortlistAnnounced = shortlistAnnounced
        } catch (error) {
            return NextResponse.json(
                { error: "Invalid request" },
                { status: 400 }
            )
        }

        if (!providedSecret || providedSecret !== process.env.AUTH_SECRET) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            )
        }

        await prisma.config.update({
            where: { id: 1 },
            data: { shortlistAnnounced: _shortlistAnnounced },
        })

        return NextResponse.json(
            { message: "Shortlist announcement updated" },
            { status: 200 }
        )
    } catch (error) {
        console.error("Failed to announce shortlist:", error)
        return NextResponse.json(
            { error: "Failed to announce shortlist" },
            { status: 500 }
        )
    }
}
