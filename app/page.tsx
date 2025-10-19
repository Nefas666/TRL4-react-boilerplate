import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageSquare,
  BookOpen,
  Users,
  ArrowRight,
  Sprout,
  Network,
  GraduationCap,
  Target,
  TrendingUp,
  Globe,
  CheckCircle2,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import HolographicBlob from "@/components/holographic-blob"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 vertical-slides">
        <section className="slide-section bg-soft-yellow py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-[0.95] tracking-tight">
                  From Soil
                  <br />
                  to Systems
                </h1>
                <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  AI Mentor for Rural Youth Entrepreneurship in Finland
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="relative aspect-square w-full max-w-sm mx-auto">
                  <HolographicBlob />
                </div>
                <div className="text-center mt-8 space-y-4">
                  <h2 className="text-2xl font-bold">Your AI Assistant</h2>
                  <p className="text-muted-foreground">
                    How can I assist you today with your entrepreneurship journey?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide-section bg-soft-aqua py-20 rounded-xl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The Challenge</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground/80">
                  In <span className="font-semibold text-foreground">Northern Ostrobothnia (Finland)</span>, rural youth
                  and unemployed people often lack access to information, mentors, and opportunities.
                </p>
                <p className="text-foreground/80">
                  Bureaucratic complexity and scattered digital resources make it hard to start sustainable initiatives.
                </p>
                <p className="text-foreground/80">
                  Existing training is often static and disconnected from real community needs.
                </p>
                <div className="pt-4">
                  <p className="text-xl font-bold text-foreground">Rural youth face barriers to entrepreneurship</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide-section bg-soft-lavender py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The Solution</h2>
              <div className="space-y-6 text-lg leading-relaxed mb-12">
                <p className="text-foreground/80">
                  <span className="font-semibold text-foreground">From Soil to Systems</span> is an AI-powered platform
                  that acts as a personal digital mentor.
                </p>
                <p className="text-foreground/80">
                  Users describe their ideas in natural language, and the chatbot instantly suggests:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-0 card-shadow bg-card">
                  <CardHeader className="space-y-4">
                    <GraduationCap className="h-10 w-10 text-[#1B2431]" />
                    <CardTitle className="text-xl">Training opportunities</CardTitle>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow bg-card">
                  <CardHeader className="space-y-4">
                    <Target className="h-10 w-10 text-[#FEE17C]" />
                    <CardTitle className="text-xl">Funding and resources</CardTitle>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow bg-card">
                  <CardHeader className="space-y-4">
                    <Users className="h-10 w-10 text-[#A2EAF6]" />
                    <CardTitle className="text-xl">Local mentors or networks</CardTitle>
                  </CardHeader>
                </Card>
              </div>

              <div className="mt-12">
                <p className="text-xl font-bold text-foreground">
                  The system transforms uncertainty into concrete, guided actions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide-section bg-soft-blue py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">Key Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                <CardHeader className="space-y-6 p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B2431]/10 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-[#1B2431]" />
                  </div>
                  <div className="space-y-4">
                    <CardTitle className="text-2xl font-bold">AI Chatbot-Mentor</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Natural language interface for personalized guidance
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                <CardHeader className="space-y-6 p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#FEE17C]/10 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-[#FEE17C]" />
                  </div>
                  <div className="space-y-4">
                    <CardTitle className="text-2xl font-bold">Micro-learning Hub</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Curated training and resources for rural entrepreneurs
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                <CardHeader className="space-y-6 p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#A2EAF6]/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-[#A2EAF6]" />
                  </div>
                  <div className="space-y-4">
                    <CardTitle className="text-2xl font-bold">Community Space</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Connect with mentors and fellow entrepreneurs
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                <CardHeader className="space-y-6 p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#C9E0DD]/10 flex items-center justify-center">
                    <Network className="h-8 w-8 text-[#C9E0DD]" />
                  </div>
                  <div className="space-y-4">
                    <CardTitle className="text-2xl font-bold">Open Architecture</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Replicable model for EU rural regions
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="slide-section bg-soft-yellow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 card-shadow bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-12 h-12 rounded-xl bg-[#1B2431]/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-[#1B2431]" />
                    </div>
                    <CardTitle className="text-xl">Empowers rural youth</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Provides personalized guidance and removes barriers to entrepreneurship
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-12 h-12 rounded-xl bg-soft-yellow flex items-left justify-center">
                      <TrendingUp className="h-6 w-6 text-[#FEE17C]" />
                    </div>
                    <CardTitle className="text-xl">Sustainable innovation</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Encourages new jobs in green sectors and sustainable practices
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-12 h-12 rounded-xl bg-[#A2EAF6]/10 flex items-center justify-center">
                      <Network className="h-6 w-6 text-[#A2EAF6]" />
                    </div>
                    <CardTitle className="text-xl">Strengthens networks</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Builds local connections and promotes digital inclusion
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-12 h-12 rounded-xl bg-[#BEC8F9]/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-[#BEC8F9]" />
                    </div>
                    <CardTitle className="text-xl">Replicable model</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Creates a framework for other EU rural regions
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="slide-section py-24 bg-secondary opacity-100 shadow-none text-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-secondary text-primary">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center">
                <Sprout className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
                We believe that caring for soil
                <br />
                means caring for life
              </h2>
              <p className="text-xl leading-relaxed max-w-2xl mx-auto text-primary">
                We can regenerate not just the land, but the way we live together. Let's grow this vision. Together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 text-base font-semibold bg-white text-[#1B2431] hover:bg-white/90 gap-2"
                >
                  <Link href="/auth/sign-up">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white/10"
                >
                  <Link href="/chat">
                    <MessageSquare className="h-5 w-5" />
                    Talk to AI Mentor
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-cream border-t py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-lg font-bold">From Soil to Systems</p>
            <p className="text-sm text-muted-foreground">A collaboration between Markesing and Settevoci</p>
            <p className="text-xs text-muted-foreground">+39-3463321502 • info@markesing.com</p>
            <p className="text-xs text-muted-foreground">&copy; 2025 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
