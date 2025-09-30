import type React from "react"
import { cn } from "@/lib/utils"

interface CircleBadgeProps {
  className?: string
  children?: React.ReactNode
}

export function CircleBadge({ className, children }: CircleBadgeProps) {
  return (
    <div className={cn("rounded-full border-4 border-foreground flex items-center justify-center", className)}>
      {children}
    </div>
  )
}
