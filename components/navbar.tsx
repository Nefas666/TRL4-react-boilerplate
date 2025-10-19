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
      activeColor: "bg-primary text-primary-foreground",
      hoverColor: "hover:bg-primary/40",
    },
    {
      href: "/chat",
      label: "Chat",
      icon: MessageSquare,
      activeColor: "bg-secondary text-secondary-foreground",
      hoverColor: "hover:bg-secondary/40",
    },
    {
      href: "/resources",
      label: "Resources",
      icon: BookOpen,
      activeColor: "bg-accent text-accent-foreground",
      hoverColor: "hover:bg-accent/40",
    },
    {
      href: "/community",
      label: "Community",
      icon: Users,
      activeColor: "bg-highlight text-highlight-foreground",
      hoverColor: "hover:bg-highlight/40",
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
      activeColor: "bg-aqua text-aqua-foreground",
      hoverColor: "hover:bg-aqua/40",
    },
  ]

  return (
    <nav className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 sticky top-0 z-50 card-shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl md:text-2xl hover:opacity-80 transition-opacity">
            From<span className="text-primary">Soil</span>To<span className="text-primary">Systems</span>
          </Link>
          <div className="flex items-center gap-1">
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
                    isActive ? link.activeColor : link.hoverColor,
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
