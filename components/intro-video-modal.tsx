"use client"

import { useState, useEffect } from "react"
import { X, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const INTRO_VIDEO_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/intro-videos/welcome-video.mp4`
const STORAGE_KEY = "taimi-intro-video-dismissed"

export function IntroVideoModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has dismissed the video before
    const isDismissed = localStorage.getItem(STORAGE_KEY)
    if (!isDismissed) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem(STORAGE_KEY, "true")
  }

  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleMaximize = () => {
    setIsMinimized(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Full Modal View */}
      {!isMinimized && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl mx-4 bg-background rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur">
              <h2 className="text-xl font-semibold font-display">Welcome to tAImi</h2>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleMinimize}
                  className="rounded-full hover:bg-muted"
                  aria-label="Minimize video"
                >
                  <Minimize2 className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="rounded-full hover:bg-muted"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              )}
              <video
                className="w-full h-full"
                controls
                autoPlay
                onLoadedData={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              >
                <source src={INTRO_VIDEO_URL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer */}
            <div className="p-4 bg-background/95 backdrop-blur border-t">
              <p className="text-sm text-muted-foreground text-center">
                Discover how tAImi can help you in your entrepreneurial journey
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Minimized Floating Player */}
      {isMinimized && (
        <div className="fixed bottom-4 right-4 z-50 w-80 bg-background rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Mini Header */}
          <div className="flex items-center justify-between p-2 bg-background/95 backdrop-blur border-b">
            <span className="text-sm font-medium font-display truncate">Welcome video</span>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleMaximize}
                className="h-8 w-8 rounded-full hover:bg-muted"
                aria-label="Maximize video"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="h-8 w-8 rounded-full hover:bg-muted"
                aria-label="Close video"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mini Video Player */}
          <div className="relative aspect-video bg-black">
            <video className="w-full h-full" controls>
              <source src={INTRO_VIDEO_URL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
