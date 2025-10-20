"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MessageSquare, Home, BookOpen, Users, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home", icon: Home, activeColor: "bg-[#1B2431]", hoverColor: "nav-hover-primary" },
    {
      href: "/chat",
      label: "Chat",
      icon: MessageSquare,
      activeColor: "bg-[#FEE17C]",
      hoverColor: "nav-hover-secondary",
    },
    {
      href: "/resources",
      label: "Resources",
      icon: BookOpen,
      activeColor: "bg-[#A2EAF6]",
      hoverColor: "nav-hover-accent",
    },
    { href: "/community", label: "Community", icon: Users, activeColor: "bg-[#C9E0DD]", hoverColor: "nav-hover-aqua" },
    { href: "/profile", label: "Profile", icon: User, activeColor: "bg-[#BEC8F9]", hoverColor: "nav-hover-lavender" },
  ]

  return (
    <nav className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 sticky top-0 z-50 card-shadow grid grid-cols-3 gap-2 px-4 py-6">
        <div className="col-span-1">
          <Link href="/" className="font-bold text-xl md:text-2xl hover:opacity-80 transition-opacity">
            t<span className="text-primary">AI</span>mi
          </Link>
        </div>
          <div className="col-span-2 place-self-end">
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
                    "gap-2 font-medium rounded-full transition-all",
                    isActive && link.activeColor,
                    isActive && link.activeColor === "bg-[#FEE17C]" ? "text-foreground" : isActive && "text-white",
                    !isActive && link.hoverColor,
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
    </nav>
  )
}
