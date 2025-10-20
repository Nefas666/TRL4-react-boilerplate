import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk,MuseoModerno } from "next/font/google"

import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})
const museoModerno = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-museo-moderno",
  display: "swap",
})



export const metadata: Metadata = {
  title: "Taimi - Educational Journey",
  description: "Discover courses, scholarships, and funding opportunities with AI assistance",
  generator: "001100 010010 011110 100001 101101 110011",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${spaceGrotesk.variable, museoModerno.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
