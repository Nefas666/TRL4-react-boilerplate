"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Environment } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedBlob() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the blob slowly
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} scale={2.2}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0.1}
        metalness={0.8}
        envMapIntensity={2}
      />
    </mesh>
  )
}

export default function HolographicBlob() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffd700" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ff1493" />
        <pointLight position={[0, 5, 5]} intensity={1} color="#00ffff" />
        <pointLight position={[0, -5, -5]} intensity={0.5} color="#9d4edd" />

        <AnimatedBlob />

        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
