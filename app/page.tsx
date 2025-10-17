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
  Target,
  Globe,
  Leaf,
} from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="gradient-yellow-mint py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-[0.95]">
                  From Soil
                  <br />
                  to Systems
                </h1>
                <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  AI Mentor for Rural Youth Entrepreneurship in Finland
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 holographic rounded-[3rem] blur-3xl opacity-30"></div>
                <div className="relative w-full h-full holographic rounded-[3rem] flex items-center justify-center">
                  <Sprout className="w-24 h-24 md:w-32 md:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">The Challenge</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
                Rural youth face barriers to entrepreneurship
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-foreground text-background border-0 card-shadow-hover">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Target className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">Limited Access</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-white/80">
                      Rural youth and unemployed people often lack access to information, mentors, and opportunities
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-foreground text-background border-0 card-shadow-hover">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Network className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">Bureaucratic Complexity</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-white/80">
                      Scattered digital resources and complex bureaucracy make it hard to start sustainable initiatives
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-foreground text-background border-0 card-shadow-hover">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <BookOpen className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">Disconnected Training</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-white/80">
                      Existing training is often static and disconnected from real community needs
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[oklch(0.92_0.12_155)]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">The Solution</h2>
              <p className="text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto leading-relaxed">
                A digital mentor for the next generation of rural entrepreneurs
              </p>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">AI-Powered Platform</h3>
                    <p className="text-lg leading-relaxed text-foreground/70">
                      From Soil to Systems acts as a personal digital mentor. Users describe their ideas in natural
                      language, and the chatbot instantly suggests:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Training Opportunities</h4>
                        <p className="text-foreground/70">Personalized learning paths for your goals</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Funding and Resources</h4>
                        <p className="text-foreground/70">Access to grants and support programs</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Local Mentors or Networks</h4>
                        <p className="text-foreground/70">Connect with experienced entrepreneurs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-2xl"></div>
                  <div className="relative w-full h-full bg-card rounded-[3rem] card-shadow-hover flex items-center justify-center">
                    <MessageSquare className="w-24 h-24 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 gradient-yellow-mint">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Key Features</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">AI Chatbot-Mentor</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Natural language interface for instant personalized guidance
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                      <GraduationCap className="h-7 w-7 text-secondary" />
                    </div>
                    <CardTitle className="text-xl font-bold">Micro-learning Hub</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Curated training and resources for rural entrepreneurship
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Users className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-bold">Community Space</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Connect with mentors and fellow entrepreneurs
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-14 h-14 rounded-2xl bg-highlight/10 flex items-center justify-center">
                      <Network className="h-7 w-7 text-highlight" />
                    </div>
                    <CardTitle className="text-xl font-bold">Open Architecture</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Replicable model for other EU rural regions
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[oklch(0.92_0.08_40)]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Outcomes</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 card-shadow-hover bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="text-5xl font-bold text-primary">1</div>
                    <CardTitle className="text-2xl font-bold">Empowers Rural Youth</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      Provides personalized guidance and removes barriers to entrepreneurship
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow-hover bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="text-5xl font-bold text-secondary">2</div>
                    <CardTitle className="text-2xl font-bold">Sustainable Innovation</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      Encourages new jobs in green sectors and sustainable practices
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow-hover bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="text-5xl font-bold text-accent">3</div>
                    <CardTitle className="text-2xl font-bold">Strengthens Networks</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      Builds local connections and promotes digital inclusion
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow-hover bg-card">
                  <CardHeader className="space-y-4 p-8">
                    <div className="text-5xl font-bold text-highlight">4</div>
                    <CardTitle className="text-2xl font-bold">Replicable Model</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      Creates a blueprint for other EU rural regions
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[oklch(0.92_0.08_220)]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">The Partners</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 card-shadow-hover bg-card">
                  <CardHeader className="space-y-6 p-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Markesing</CardTitle>
                    <CardDescription className="text-base leading-relaxed space-y-4">
                      <p>
                        Italian-based organization developing digital solutions for social and cultural impact. With
                        over 400 hours of training delivered across 12 public schools.
                      </p>
                      <p>
                        Recent project: <span className="font-semibold">EmpathyBot</span>, an AI platform supporting
                        parents in high-conflict divorces.
                      </p>
                      <p className="font-semibold text-foreground">
                        Leads digital development and strategic coordination.
                      </p>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 card-shadow-hover bg-card">
                  <CardHeader className="space-y-6 p-10">
                    <div className="w-16 h-16 rounded-2xl bg-highlight/10 flex items-center justify-center">
                      <Leaf className="h-8 w-8 text-highlight" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Settevoci</CardTitle>
                    <CardDescription className="text-base leading-relaxed space-y-4">
                      <p>
                        Grassroots initiative that revived an abandoned rural masseria in Castiglione di Sicilia into a
                        hub for permaculture and cultural exchange.
                      </p>
                      <p>
                        Through regenerative agriculture, hands-on learning, and inclusive gatherings, they created a
                        living space rooted in sustainability.
                      </p>
                      <p className="font-semibold text-foreground">
                        Shapes content, pilots the platform, and anchors it in real-world practice.
                      </p>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto text-center border-0 card-shadow-hover gradient-purple-pink overflow-hidden">
              <CardHeader className="py-16 space-y-8">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center">
                  <Sprout className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Caring for Soil Means
                  <br />
                  Caring for Life
                </CardTitle>
                <CardContent className="space-y-8">
                  <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                    We believe we can regenerate not just the land, but the way we live together. Let's grow this
                    vision. Together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-10 text-lg font-semibold bg-white text-primary hover:bg-white/90 gap-2"
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
                      className="rounded-full px-10 text-lg font-semibold border-2 border-white text-white hover:bg-white/10 gap-2 bg-transparent"
                    >
                      <Link href="/chat">
                        <MessageSquare className="h-5 w-5" />
                        Talk to AI Mentor
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-2">
            <p className="text-base font-semibold">&copy; 2025 From Soil to Systems</p>
            <p className="text-sm text-muted-foreground">A collaboration between Markesing and Settevoci</p>
            <p className="text-xs text-muted-foreground">info@markesing.com • +39-3463321502</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
