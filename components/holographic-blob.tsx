"use client"

export default function HolographicBlob() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main holographic blob with organic shape */}
      <div className="absolute w-[280px] h-[280px] rounded-[45%_55%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-emerald-500 via-green-500 to-white opacity-90 blur-sm animate-[morph_8s_ease-in-out_infinite,rotate-slow_20s_linear_infinite]" />

      {/* Secondary layer for depth */}
      <div className="absolute w-[260px] h-[260px] rounded-[55%_45%_40%_60%/60%_40%_60%_40%] bg-gradient-to-tr from-white via-emerald-500 to-yellow-400 opacity-60 blur-md animate-[morph-reverse_10s_ease-in-out_infinite,rotate-slow_25s_linear_infinite_reverse]" />

      {/* Core glow */}
      <div className="absolute w-[240px] h-[240px] rounded-[40%_60%_55%_45%/55%_45%_55%_45%] bg-gradient-to-bl from-yellow-300 via-emerald-400 to-white opacity-70 animate-[morph_12s_ease-in-out_infinite,pulse-slow_4s_ease-in-out_infinite]" />

      {/* Highlight spots for glossy effect */}
      <div className="absolute top-[20%] left-[25%] w-16 h-16 rounded-full bg-white/40 blur-xl animate-pulse-slow" />
      <div className="absolute top-[35%] right-[30%] w-12 h-12 rounded-full bg-white/30 blur-lg animate-[pulse-slow_5s_ease-in-out_infinite]" />
      <div className="absolute bottom-[30%] left-[35%] w-10 h-10 rounded-full bg-white-200/50 blur-md animate-[pulse-slow_6s_ease-in-out_infinite]" />

      {/* Ambient glow */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-radial from-emerald-400/30 via-yellob szxdw-400/20 to-transparent blur-2xl animate-pulse-slow" />

      {/* Floating particles */}
      <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-emerald-400/60 animate-float-1" />
      <div className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-yellow-400/60 animate-float-2" />
      <div className="absolute bottom-[20%] left-[30%] w-2 h-2 rounded-full bg-white/60 animate-float-3" />
    </div>
  )
}
