"use client"

import dynamic from "next/dynamic"

const HolographicSphere = dynamic(() => import("./holographic-sphere"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 opacity-50 animate-pulse" />
    </div>
  ),
})

export default function HolographicSphereClient() {
  return <HolographicSphere />
}
