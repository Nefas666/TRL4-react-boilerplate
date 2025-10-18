"use client"

export default function HolographicSphereCss() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main holographic sphere */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Animated gradient sphere */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 opacity-80 blur-xl animate-pulse-slow" />

        {/* Main sphere with holographic effect */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-500/90 via-pink-500/90 to-cyan-500/90 animate-rotate-slow shadow-2xl">
          {/* Shine overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-transparent animate-shine" />

          {/* Inner glow */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-bl from-yellow-300/30 via-purple-400/30 to-blue-400/30 animate-pulse-slow" />
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-cyan-400 animate-float-1 blur-sm" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-pink-400 animate-float-2 blur-sm" />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-purple-400 animate-float-3 blur-sm" />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-yellow-400 animate-float-1 blur-sm" />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent animate-pulse-slow" />
    </div>
  )
}
