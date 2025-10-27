"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MessageSquare, Home, BookOpen, Users, User, EllipsisVertical, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      activeBg: "holographic-bg",
      hoverBg: "hover:holographic-bg",
      activeText: "text-foreground/80",
    },
    {
      href: "/chat",
      label: "Chat",
      icon: MessageSquare,
      activeBg: "bg-[#FEE17C]",
      hoverBg: "hover:bg-[#FEE17C]/40",
      activeText: "text-foreground",
    },
    {
      href: "/resources",
      label: "Resources",
      icon: BookOpen,
      activeBg: "bg-[#A2EAF6]",
      hoverBg: "hover:bg-[#A2EAF6]/40",
      activeText: "text-foreground",
    },
    {
      href: "/community",
      label: "Community",
      icon: Users,
      activeBg: "bg-[#C9E0DD]",
      hoverBg: "hover:bg-[#C9E0DD]/40",
      activeText: "text-foreground",
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
      activeBg: "bg-[#BEC8F9]",
      hoverBg: "hover:bg-[#BEC8F9]/40",
      activeText: "text-foreground",
    },
  ]

  return (
    <nav className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 sticky top-0 z-50 card-shadow">
      <div className="mx-auto px-4 md:px-12 py-2.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="font-display font-black holographic-title text-2xl lg:text-[36px] hover:opacity-80 transition-opacity"
            >
              t<span className="text-[28px] lg:text-[32px]">AI</span>mi
            </Link>
          </div>

          <div className="hidden md:flex space-x-2 items-center holographic-bg">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href

              return (
                <Button
                  key={link.href}
                  asChild
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "gap-2 font-medium py-4 rounded-full transition-all duration-200",
                    isActive ? [link.activeBg, link.activeText] : "text-foreground/70",
                    !isActive && [link.hoverBg, "hover:text-foreground"],
                  )}
                >
                  <Link href={link.href}>
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{link.label}</span>
                  </Link>
                </Button>
              )
            })}
          </div>

          <div className="md:hidden bg-card/95 backdrop-blur md:bg-transparent">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <EllipsisVertical className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-screen bg-background">
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full w-14 h-14 bg-white/60 hover:bg-white/80 transition-all"
                  >
                    <X className="h-6 w-6 text-primary" />
                  </Button>
                </div>

                <SheetHeader>
                  <SheetTitle className="font-display font-black text-3xl text-left text-foreground">
                    t<span className="text-[28px]">AI</span>mi
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 flex flex-col space-y-3">
                  {links.map((link) => {
                    const Icon = link.icon
                    const isActive = pathname === link.href

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200",
                          isActive
                            ? [link.activeBg, link.activeText, "font-semibold"]
                            : "text-foreground/70 hover:bg-muted",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-lg">{link.label}</span>
                      </Link>
                    )
                  })}
                </div>

                <div className="absolute bottom-8 left-6 right-6">
                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <p className="text-sm text-muted-foreground">
                      AI-powered platform for rural youth entrepreneurship
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
