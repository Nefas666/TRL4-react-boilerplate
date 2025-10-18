"use client"

import dynamic from "next/dynamic"

const ThreeScene = dynamic(() => import("./three-components"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />
})

export function HolographicSphere() {
  return (
    <div className="w-full h-full">
      <ThreeScene />
    </div>
  )
}
