"use client"

export default function HolographicBlob() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main holographic blob */}
      <div className="holographic-blob">
        {/* Inner glow layers */}
        <div className="holographic-blob-inner" />
        <div className="holographic-blob-inner-2" />

        {/* Highlight spots */}
        <div className="holographic-highlight holographic-highlight-1" />
        <div className="holographic-highlight holographic-highlight-2" />
        <div className="holographic-highlight holographic-highlight-3" />
      </div>

      {/* Ambient glow */}
      <div className="holographic-glow" />

      {/* Floating particles */}
      <div className="holographic-particle holographic-particle-1" />
      <div className="holographic-particle holographic-particle-2" />
      <div className="holographic-particle holographic-particle-3" />
    </div>
  )
}
