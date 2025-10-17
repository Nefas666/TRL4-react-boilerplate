import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, BookOpen, Users, Sparkles, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Your AI-Powered Educational Journey
            </h1>
            <p className="text-lg md:text-xl mb-10 text-pretty max-w-2xl mx-auto text-muted-foreground">
              Discover courses, scholarships, and funding opportunities tailored to your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="gap-2 text-base px-8 rounded-full bg-primary hover:bg-primary/90">
                <Link href="/chat">
                  <MessageSquare className="h-5 w-5" />
                  Start Chatting
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 text-base px-8 rounded-full border-2 bg-transparent"
              >
                <Link href="/resources">
                  <BookOpen className="h-5 w-5" />
                  Browse Resources
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Everything You Need to Succeed</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-0 soft-shadow bg-primary/5 hover:soft-shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold">AI Chat Assistant</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Get instant, personalized recommendations for courses and opportunities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 soft-shadow bg-secondary/5 hover:soft-shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <BookOpen className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold">Resource Library</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Access curated courses, scholarships, and funding opportunities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 soft-shadow bg-accent/5 hover:soft-shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <Users className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold">Community</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Connect with learners, share experiences, and get support
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-20">
          <Card className="max-w-3xl mx-auto text-center border-0 soft-shadow-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
            <CardHeader className="py-12 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 mx-auto flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold">Ready to Get Started?</CardTitle>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join thousands of learners finding their perfect educational path
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 gap-2"
                >
                  <Link href="/auth/sign-up">
                    Create Free Account
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </CardHeader>
          </Card>
        </section>
      </main>

      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">&copy; 2025 From soil to systems</p>
          <p className="text-xs text-muted-foreground mt-1">Built with Next.js and Supabase</p>
        </div>
      </footer>
    </div>
  )
}
