import { cn } from "@/lib/utils"

interface StarburstIconProps {
  className?: string
}

export function StarburstIcon({ className }: StarburstIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={cn("w-12 h-12", className)} fill="currentColor">
      <path d="M50 0 L52 48 L50 0 L48 48 L50 0 M50 100 L52 52 L50 100 L48 52 L50 100 M0 50 L48 52 L0 50 L48 48 L0 50 M100 50 L52 52 L100 50 L52 48 L100 50 M14.6 14.6 L46 46 L14.6 14.6 L46 54 L14.6 14.6 M85.4 85.4 L54 54 L85.4 85.4 L54 46 L85.4 85.4 M14.6 85.4 L46 54 L14.6 85.4 L46 46 L14.6 85.4 M85.4 14.6 L54 46 L85.4 14.6 L54 54 L85.4 14.6" />
    </svg>
  )
}
