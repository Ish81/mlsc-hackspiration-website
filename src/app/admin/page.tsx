import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/db"

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
        redirect("/api/auth/signin")
    }

    const teamCount = await prisma.team.count()
    const pendingPhotos = await prisma.photo.count({ where: { status: "PENDING" } })

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Teams</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{teamCount}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Pending Photos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{pendingPhotos}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        {/* We'll add buttons here later */}
                        <button className="bg-blue-600 text-white px-4 py-2 rounded">Upload Shortlist</button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded">Moderate Photos</button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
