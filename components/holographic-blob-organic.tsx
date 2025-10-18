"use client"

export default function HolographicBlobOrganic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main holographic blob with organic shape */}
      <div className="relative w-full h-full max-w-md max-h-md">
        {/* Organic blob shape with holographic gradient */}
        <div
          className="absolute inset-0 animate-rotate-slow"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(255, 100, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(100, 200, 255, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 200, 100, 0.8) 0%, transparent 60%),
              linear-gradient(135deg, 
                oklch(0.75 0.2 350) 0%,
                oklch(0.7 0.25 290) 20%,
                oklch(0.75 0.15 200) 40%,
                oklch(0.8 0.18 60) 60%,
                oklch(0.85 0.18 130) 80%,
                oklch(0.75 0.2 350) 100%
              )
            `,
            backgroundSize: "200% 200%",
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
            filter: "blur(2px) brightness(1.1)",
            animation:
              "holographic-shift 8s ease infinite, rotate-slow 20s linear infinite, morph 10s ease-in-out infinite",
          }}
        />

        {/* Second layer for depth */}
        <div
          className="absolute inset-4 animate-pulse-slow"
          style={{
            background: `
              linear-gradient(225deg,
                rgba(255, 100, 255, 0.6) 0%,
                rgba(100, 200, 255, 0.6) 50%,
                rgba(255, 200, 100, 0.6) 100%
              )
            `,
            borderRadius: "54% 46% 63% 37% / 48% 55% 45% 52%",
            filter: "blur(3px)",
            animation: "pulse-slow 4s ease-in-out infinite, morph-reverse 12s ease-in-out infinite",
          }}
        />

        {/* Glossy highlight overlay */}
        <div
          className="absolute inset-8"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 60%)",
            borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
            filter: "blur(8px)",
            animation: "shine 3s ease-in-out infinite",
          }}
        />

        {/* Floating particles for extra effect */}
        <div className="absolute inset-0">
          <div
            className="absolute w-3 h-3 rounded-full bg-white/60 animate-float-1"
            style={{ top: "20%", left: "30%", filter: "blur(1px)" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-white/50 animate-float-2"
            style={{ top: "60%", right: "25%", filter: "blur(1px)" }}
          />
          <div
            className="absolute w-4 h-4 rounded-full bg-white/40 animate-float-3"
            style={{ bottom: "25%", left: "20%", filter: "blur(1px)" }}
          />
        </div>

        {/* Ambient glow */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(circle, rgba(200, 150, 255, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
            transform: "scale(1.2)",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes morph {
          0%,
          100% {
            border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
          }
          25% {
            border-radius: 48% 52% 68% 32% / 42% 61% 39% 58%;
          }
          50% {
            border-radius: 40% 60% 42% 58% / 65% 38% 62% 35%;
          }
          75% {
            border-radius: 58% 42% 55% 45% / 48% 67% 33% 52%;
          }
        }

        @keyframes morph-reverse {
          0%,
          100% {
            border-radius: 54% 46% 63% 37% / 48% 55% 45% 52%;
          }
          25% {
            border-radius: 42% 58% 48% 52% / 61% 42% 58% 39%;
          }
          50% {
            border-radius: 60% 40% 58% 42% / 38% 65% 35% 62%;
          }
          75% {
            border-radius: 45% 55% 42% 58% / 67% 48% 52% 33%;
          }
        }
      `}</style>
    </div>
  )
}
