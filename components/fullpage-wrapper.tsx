"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface FullPageWrapperProps {
  children: React.ReactNode
}

export function FullPageWrapper({ children }: FullPageWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = container.querySelectorAll(".fullpage-section")
    let currentSection = 0

    const scrollToSection = (index: number) => {
      if (index < 0 || index >= sections.length) return

      isScrollingRef.current = true
      sections[index].scrollIntoView({ behavior: "smooth" })
      currentSection = index

      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000)
    }

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) {
        e.preventDefault()
        return
      }

      if (e.deltaY > 0) {
        // Scroll down
        if (currentSection < sections.length - 1) {
          e.preventDefault()
          scrollToSection(currentSection + 1)
        }
      } else {
        // Scroll up
        if (currentSection > 0) {
          e.preventDefault()
          scrollToSection(currentSection - 1)
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollingRef.current) return

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault()
        scrollToSection(currentSection + 1)
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        scrollToSection(currentSection - 1)
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      container.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {children}
    </div>
  )
}
