"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MessageSquare, Home, BookOpen, Users, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { 
      href: "/", 
      label: "Home", 
      icon: Home, 
      activeBg: "holographic-bg",
      hoverBg: "hover:holographic-bg",
      activeText: "text-foreground/80"
    },
    {
      href: "/chat",
      label: "Chat",
      icon: MessageSquare,
      activeBg: "bg-[#FEE17C]",
      hoverBg: "hover:bg-[#FEE17C]/40",
      activeText: "text-foreground"
    },
    {
      href: "/resources",
      label: "Resources",
      icon: BookOpen,
      activeBg: "bg-[#A2EAF6]",
      hoverBg: "hover:bg-[#A2EAF6]/40",
      activeText: "text-foreground"
    },
    { 
      href: "/community", 
      label: "Community", 
      icon: Users, 
      activeBg: "bg-[#C9E0DD]",
      hoverBg: "hover:bg-[#C9E0DD]/40",
      activeText: "text-foreground"
    },
    { 
      href: "/profile", 
      label: "Profile", 
      icon: User, 
      activeBg: "bg-[#BEC8F9]",
      hoverBg: "hover:bg-[#BEC8F9]/40",
      activeText: "text-foreground"
    },
  ]

  return (
    <nav className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 sticky top-0 z-50 card-shadow">
      <div className="mx-auto px-12 py-2.5">
        <div className="grid grid-cols-3 gap-2 items-center">
          <div className="col-span-1">
            <Link 
              href="/" 
              className="font-display font-black holographic-title lg:text-[36px] text-2xl hover:opacity-80 transition-opacity"
            >
              t<span className="text-[32px]">AI</span>mi
            </Link>
          </div>
          
          <div className="col-span-2 flex space-x-2 justify-end items-center">
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
                    "gap-2 font-medium rounded-full transition-all duration-200",
                    // Stato attivo
                    isActive ? [link.activeBg, link.activeText] : "text-foreground/70",
                    // Hover solo quando NON attivo
                    !isActive && [link.hoverBg, "hover:text-foreground"]
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
        </div>
      </div>
    </nav>
  )
}
