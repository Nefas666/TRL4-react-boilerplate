"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const HolographicBlob = dynamic(() => import("./holographic-blob"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 opacity-50 animate-pulse" />
    </div>
  ),
})

export default function HolographicBlobWrapper() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 opacity-50 animate-pulse" />
        </div>
      }
    >
      <HolographicBlob />
    </Suspense>
  )
}
