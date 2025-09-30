import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, BookOpen, Users, Sparkles, ArrowDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { StarburstIcon } from "@/components/starburst-icon"
import { CircleBadge } from "@/components/circle-badge"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
          {/* Decorative elements */}
          <StarburstIcon className="absolute top-10 left-10 w-16 h-16 text-secondary opacity-60 starburst" />
          <StarburstIcon className="absolute bottom-20 right-20 w-20 h-20 text-accent opacity-40 starburst" />
          <CircleBadge className="absolute top-1/3 right-10 w-24 h-24 bg-primary/20" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-balance leading-[0.95]">
              Your <span className="pill-highlight">AI-Powered</span> Educational Journey
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-pretty max-w-2xl mx-auto font-medium">
              Discover courses, scholarships, and funding opportunities tailored to your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="gap-2 text-lg px-8 py-6 rounded-full font-bold">
                <Link href="/chat">
                  <MessageSquare className="h-5 w-5" />
                  Start Chatting
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 text-lg px-8 py-6 rounded-full font-bold border-2 bg-transparent"
              >
                <Link href="/resources">
                  <BookOpen className="h-5 w-5" />
                  Browse Resources
                </Link>
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 flex justify-center">
              <ArrowDown className="w-8 h-8 animate-bounce text-muted-foreground" />
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <CircleBadge className="absolute top-10 left-1/4 w-32 h-32 bg-secondary/10" />

          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              Everything You Need to <span className="text-outline">Succeed</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-4 border-foreground hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                    <MessageSquare className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-black">AI Chat Assistant</CardTitle>
                  <CardDescription className="text-base">
                    Get instant, personalized recommendations for courses and opportunities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-4 border-foreground hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-black">Resource Library</CardTitle>
                  <CardDescription className="text-base">
                    Access curated courses, scholarships, and funding opportunities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-4 border-foreground hover:translate-y-[-4px] transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-black">Community</CardTitle>
                  <CardDescription className="text-base">
                    Connect with learners, share experiences, and get support
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 relative">
          <StarburstIcon className="absolute top-0 right-1/4 w-24 h-24 text-primary opacity-30 starburst" />

          <Card className="max-w-4xl mx-auto text-center bg-foreground text-background border-4 border-foreground relative overflow-hidden">
            <CardHeader className="py-16">
              <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</CardTitle>
              <CardContent>
                <p className="text-xl mb-8 opacity-90 font-medium">
                  Join thousands of learners finding their perfect educational path
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 py-6 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/auth/sign-up">Create Free Account</Link>
                </Button>
              </CardContent>
            </CardHeader>
          </Card>
        </section>
      </main>

      <footer className="border-t-4 border-foreground py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold">&copy; 2025 EduPlatform</p>
          <p className="text-sm text-muted-foreground mt-2">Built with Next.js and Supabase</p>
        </div>
      </footer>
    </div>
  )
}
