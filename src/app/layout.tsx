import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { AudioPlayer } from "@/components/layout/audio-player";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackspiration'26 | MLSC VIT Pune",
  description: "Join Hackspiration'26, a hybrid hackathon at VIT Pune organized by Microsoft Learner's Student Club. Online round on 14th February, offline finale on 15th February. Hack, Hustle, and Win!",
  keywords: ["Hackathon", "VIT Pune", "MLSC", "Coding", "Competition", "Hackspiration", "2026"],
  authors: [{ name: "MLSC VIT Pune" }],
  openGraph: {
    title: "Hackspiration'26 | MLSC VIT Pune",
    description: "Join Hackspiration'26, a hybrid hackathon at VIT Pune. 1000+ participants, two-phase event with online round on 14th Feb and offline finale on 15th Feb.",
    siteName: "Hackspiration'26",
    images: [
      {
        url: "/mlsc-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hackspiration'26 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackspiration'26 | MLSC VIT Pune",
    description: "Join Hackspiration'26, a hybrid hackathon at VIT Pune. Online round on 14th Feb, offline finale on 15th Feb.",
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
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} ${orbitron.variable} antialiased bg-background text-foreground font-sans cursor-none overflow-x-hidden`}
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

