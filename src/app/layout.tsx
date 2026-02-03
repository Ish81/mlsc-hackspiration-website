import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { AudioPlayer } from "@/components/layout/audio-player";

export const metadata: Metadata = {
  title: "Hackpiration'26 | MLSC VIT Pune",
  description: "Join Hackpiration'26, the biggest 24-hour hackathon at VIT Pune organized by Microsoft Learner's Student Club. Hack, Hustle, and Win!",
  keywords: ["Hackathon", "VIT Pune", "MLSC", "Coding", "Competition", "Hackpiration", "2026"],
  authors: [{ name: "MLSC VIT Pune" }],
  openGraph: {
    title: "Hackpiration'26 | MLSC VIT Pune",
    description: "Join Hackpiration'26, the biggest 24-hour hackathon at VIT Pune. 1000+ participants, 24 hours of innovation.",
    siteName: "Hackpiration'26",
    images: [
      {
        url: "/mlsc-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hackpiration'26 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackpiration'26 | MLSC VIT Pune",
    description: "Join Hackpiration'26, the biggest 24-hour hackathon at VIT Pune.",
    images: ["/mlsc-logo.jpg"],
  },
};

import { Preloader } from "@/components/ui/preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Load Google Fonts via CDN to avoid build-time fetch issues */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=JetBrains+Mono:wght@100..800&family=Orbitron:wght@400..900&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-background text-foreground font-sans cursor-none overflow-x-hidden"
      >
        <Preloader />
        <CustomCursor />
        <div className="bg-noise" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen w-full">
            {children}
          </main>
          <AudioPlayer />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

