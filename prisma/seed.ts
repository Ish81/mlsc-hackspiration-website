import { PrismaClient } from '@prisma/client'
import { PrismaPg } from "@prisma/adapter-pg"
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    const teams = [
        { name: "Neural Nexus", labNumber: "Lab 101", presentationSlot: "10:00 AM", status: "SHORTLISTED", leaderName: "John Doe", leaderEmail: "john.doe@example.com" },
        { name: "Code Crusaders", labNumber: "Lab 102", presentationSlot: "10:15 AM", status: "SHORTLISTED", leaderName: "Jane Smith", leaderEmail: "jane.smith@example.com" },
        { name: "Pixel Pioneers", labNumber: "Lab 103", presentationSlot: "10:30 AM", status: "SHORTLISTED", leaderName: "Alice Johnson", leaderEmail: "alice.j@example.com" },
        { name: "Quantum Quests", labNumber: "Lab 104", presentationSlot: "10:45 AM", status: "SHORTLISTED", leaderName: "Bob Brown", leaderEmail: "bob.b@example.com" },
        { name: "Cyber Synthetics", labNumber: "Lab 105", presentationSlot: "11:00 AM", status: "SHORTLISTED", leaderName: "Charlie Davis", leaderEmail: "charlie.d@example.com" },
    ]

    for (const team of teams) {
        await prisma.team.upsert({
            where: { id: team.name },
            create: {
                name: team.name,
                labNumber: team.labNumber,
                presentationSlot: team.presentationSlot,
                status: team.status as any,
                leaderName: team.leaderName,
                leaderEmail: team.leaderEmail
            },
            update: {},
        })
    }

    console.log(`Seeded ${teams.length} teams`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
