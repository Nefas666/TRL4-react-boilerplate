"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshTransmissionMaterial, Environment } from "@react-three/drei"
import type * as THREE from "three"

export default function HolographicBlob() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)

  // Animate rotation and subtle morphing
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1
    }

    if (materialRef.current) {
      // Animate iridescence for color shifting effect
      materialRef.current.iridescence = 0.5 + Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <>
      {/* Ambient and colored lights for holographic effect */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff00ff" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[0, 10, -10]} intensity={0.8} color="#ffff00" />

      {/* Environment for reflections */}
      <Environment preset="sunset" />

      {/* Main holographic blob */}
      <mesh ref={meshRef} scale={2.5}>
        {/* Distorted sphere geometry for organic blob shape */}
        <icosahedronGeometry args={[1, 20]} />

        {/* Transmission material for glass-like holographic effect */}
        <MeshTransmissionMaterial
          ref={materialRef}
          backside
          samples={16}
          resolution={512}
          transmission={0.95}
          roughness={0.1}
          thickness={1.5}
          ior={1.5}
          chromaticAberration={0.5}
          anisotropy={1}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[100, 800]}
          color="#ffffff"
          metalness={0.8}
        />
      </mesh>

      {/* Additional inner sphere for depth */}
      <mesh scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.3}
          iridescence={1}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[100, 400]}
        />
      </mesh>
    </>
  )
}
