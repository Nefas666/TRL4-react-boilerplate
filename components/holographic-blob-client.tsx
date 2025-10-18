"use client"

import dynamic from "next/dynamic"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

const HolographicBlob = dynamic(() => import("./holographic-blob"), {
  ssr: false,
})

export default function HolographicBlobClient() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <HolographicBlob />
        </Suspense>
      </Canvas>
    </div>
  )
}
