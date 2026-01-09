"use server"

import { z } from "zod"
import { headers } from "next/headers"
import prisma from "@/lib/db"

const submissionSchema = z.object({
    teamName: z.string().min(2, "Team name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    url: z.string().url("Invalid URL").refine((val) => {
        return isValidContestPost(val)
    }, "URL must be from a major social media platform (Instagram, LinkedIn, Twitter/X, Facebook)"),
})

function isValidContestPost(urlString: string): boolean {
    let url: URL

    try {
        url = new URL(urlString)
    } catch {
        return false
    }

    const host = url.hostname.replace(/^www\./, "")
    const path = url.pathname.toLowerCase()

    // Instagram
    if (host === "instagram.com") {
        return (
            path.startsWith("/p/") ||
            path.startsWith("/reel/") ||
            path.startsWith("/tv/")
        )
    }

    // LinkedIn
    if (host === "linkedin.com") {
        return (
            path.startsWith("/posts/") ||
            path.startsWith("/feed/update/")
        )
    }

    // Twitter / X
    if (host === "twitter.com" || host === "x.com") {
        return /^\/[^/]+\/status\/\d+/.test(path)
    }

    // Facebook
    if (host === "facebook.com") {
        return (
            path.includes("/posts/") ||
            path.includes("/reel/") ||
            path.includes("/videos/")
        )
    }

    return false
}

export type SubmissionState = {
    success?: boolean
    error?: string
    fieldErrors?: {
        teamName?: string[]
        email?: string[]
        url?: string[]
    }
    inputs?: {
        teamName: string
        email: string
        url: string
    }
}

let cache = new Map();

export async function submitContestEntry(prevState: SubmissionState, formData: FormData): Promise<SubmissionState> {
    const rawData = {
        teamName: formData.get("teamName") as string,
        email: formData.get("email") as string,
        url: formData.get("url") as string,
    }

    // Security Check
    const token = formData.get("x-internal-token")
    if (token !== (process.env.INTERNAL_TOKEN ?? "HACKSPIRATION_SECRET_2026")) {
        return {
            error: "Unauthorized request.",
            inputs: rawData
        }
    }

    // Validate input
    const validatedFields = submissionSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            error: "Validation failed",
            fieldErrors: validatedFields.error.flatten().fieldErrors,
            inputs: rawData
        }
    }

    const { teamName, email, url } = validatedFields.data

    const normalizedUrl = url
        .split(/[?#]/)[0]      // drop ?query and #hash
        .replace(/\/+$/, "")  // remove trailing slashes

    if (!url.startsWith("https://")) return {
        error: "URL must be a valid HTTPS URL",
        inputs: rawData
    }

    try {
        if (cache.has(teamName)) {
            return {
                error: "This team has already submitted an entry.",
                inputs: rawData
            }
        }

        const existingTeam = await prisma.onlineContestSubmission.findUnique({
            where: { teamName },
        })

        if (existingTeam) {
            cache.set(teamName, true);
            return {
                error: "This team has already submitted an entry.",
                inputs: rawData
            }
        }

        const existingEmail = await prisma.onlineContestSubmission.findUnique({
            where: { email },
        })

        if (existingEmail) {
            return {
                error: "This email has already been used for a submission.",
                inputs: rawData
            }
        }

        const existingUrl = await prisma.onlineContestSubmission.findFirst({
            where: {
                url: {
                    equals: normalizedUrl,
                    mode: 'insensitive'
                }
            },
        })

        if (existingUrl) {
            return {
                error: "This post URL has already been submitted.",
                inputs: rawData
            }
        }

        const headersList = await headers()
        const forwardedFor = headersList.get("x-forwarded-for")
        const ipAddress =
            forwardedFor?.split(",")[0]?.trim() ??
            headersList.get("x-real-ip") ??
            "unknown"


        await prisma.onlineContestSubmission.create({
            data: {
                teamName,
                email,
                url: normalizedUrl,
                ipAddress,
            },
        })

        cache.set(teamName, true);

        return { success: true }
    } catch (error) {
        console.error("Submission error:", error)
        return {
            error: "Something went wrong. Please try again later.",
            inputs: rawData
        }
    }
}
