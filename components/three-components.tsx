"use client"

import { Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere } from "@react-three/drei"
import type * as THREE from "three"
import { useRef } from "react"

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
        }
    })

    return (
        <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.5}>
            <MeshDistortMaterial
                color="#8b5cf6"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.1}
                metalness={0.8}
                envMapIntensity={1}
            />
        </Sphere>
    )
}

function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
            <pointLight position={[0, 0, 5]} intensity={1} color="#06b6d4" />
            <AnimatedSphere />
        </Canvas>
    )
}

export default function ThreeScene() {
    return (
        <Suspense fallback={<div className="w-full h-full bg-gray-100 animate-pulse" />}>
            <Scene />
        </Suspense>
    )
}