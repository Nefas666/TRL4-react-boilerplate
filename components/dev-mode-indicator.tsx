"use client"

import { useEffect, useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Code } from "lucide-react"

export function DevModeIndicator() {
  const [isDevMode, setIsDevMode] = useState(false)

  useEffect(() => {
    setIsDevMode(process.env.NEXT_PUBLIC_DEV_MODE === "true")
  }, [])

  if (!isDevMode) return null

  return (
    <Alert className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950 mb-4">
      <Code className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800 dark:text-yellow-200">
        <strong>⚠️ DEV MODE ACTIVE</strong> - Authentication is bypassed
      </AlertDescription>
    </Alert>
  )
}
