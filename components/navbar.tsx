"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MessageSquare, Home, BookOpen, Users, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/chat", label: "Chat", icon: MessageSquare },
    { href: "/resources", label: "Resources", icon: BookOpen },
    { href: "/community", label: "Community", icon: Users },
    { href: "/profile", label: "Profile", icon: User },
  ]

  return (
    <nav className="border-b-4 border-foreground bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="font-black text-2xl md:text-3xl hover:scale-105 transition-transform">
            Edu<span className="text-primary">Platform</span>
          </Link>
          <div className="flex items-center gap-2">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Button
                  key={link.href}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={cn("gap-2 font-bold rounded-full", isActive && "border-2 border-foreground")}
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
