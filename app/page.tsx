import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageSquare,
  BookOpen,
  Users,
  Sparkles,
  ArrowRight,
  Sprout,
  Network,
  GraduationCap,
  Lightbulb,
} from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 holographic rounded-full blur-2xl opacity-60"></div>
                <div className="relative w-full h-full holographic rounded-full flex items-center justify-center">
                  <Sprout className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              From Soil to Systems
            </h1>
            <p className="text-lg md:text-xl mb-10 text-pretty max-w-2xl mx-auto text-muted-foreground">
              Your AI-powered mentor for rural youth entrepreneurship. Transform uncertainty into concrete, guided
              actions for sustainable innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="gap-2 text-base px-8 rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                <Link href="/chat">
                  <MessageSquare className="h-5 w-5" />
                  Talk to Your AI Mentor
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
                  Explore Resources
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 gradient-yellow-mint">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Features</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Everything you need to start your sustainable entrepreneurship journey
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">AI Chatbot-Mentor</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Describe your ideas in natural language and get instant personalized guidance
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold">Micro-learning Hub</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Access training opportunities and resources tailored to rural entrepreneurship
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold">Community Space</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Connect with local mentors, networks, and fellow rural entrepreneurs
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-highlight/10 flex items-center justify-center">
                    <Network className="h-7 w-7 text-highlight" />
                  </div>
                  <CardTitle className="text-xl font-bold">Open Architecture</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Built on open standards, replicable for other EU rural regions
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From idea to action in four simple steps
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-0 card-shadow hover:card-shadow-hover transition-all bg-card overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <CardHeader className="space-y-4 pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">Share Your Ideas</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Describe your entrepreneurial vision or sustainability project in natural language
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 card-shadow hover:card-shadow-hover transition-all bg-card overflow-hidden">
                <div className="h-2 bg-secondary"></div>
                <CardHeader className="space-y-4 pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold">Get AI Guidance</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Receive personalized suggestions for training, funding, and local mentors
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 card-shadow hover:card-shadow-hover transition-all bg-card overflow-hidden">
                <div className="h-2 bg-accent"></div>
                <CardHeader className="space-y-4 pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Sprout className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold">Take Action</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Transform uncertainty into concrete steps toward sustainable innovation
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-20">
          <Card className="max-w-3xl mx-auto text-center border-0 card-shadow-hover gradient-purple-pink overflow-hidden">
            <CardHeader className="py-12 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center">
                <Sprout className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-white">
                Caring for Soil Means Caring for Life
              </CardTitle>
              <CardContent className="space-y-6">
                <p className="text-lg text-white/90 leading-relaxed">
                  Join us in regenerating not just the land, but the way we live together. Start your sustainable
                  entrepreneurship journey today.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 text-base font-semibold bg-white text-primary hover:bg-white/90 gap-2"
                >
                  <Link href="/auth/sign-up">
                    Get Started
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
          <p className="text-sm font-medium">&copy; 2025 From Soil to Systems</p>
          <p className="text-xs text-muted-foreground mt-1">A collaboration between Markesing and Settevoci</p>
        </div>
      </footer>
    </div>
  )
}
