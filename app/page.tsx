import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, BookOpen, Users, Sparkles } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Your AI-Powered Educational Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Discover courses, scholarships, and funding opportunities tailored to your goals. Chat with our AI
              assistant for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/chat">
                  <MessageSquare className="h-5 w-5" />
                  Start Chatting
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                <Link href="/resources">
                  <BookOpen className="h-5 w-5" />
                  Browse Resources
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Succeed</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <MessageSquare className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>AI Chat Assistant</CardTitle>
                  <CardDescription>
                    Get instant, personalized recommendations for courses and opportunities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Resource Library</CardTitle>
                  <CardDescription>Access curated courses, scholarships, and funding opportunities</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Community</CardTitle>
                  <CardDescription>Connect with learners, share experiences, and get support</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-3xl mx-auto text-center bg-primary text-primary-foreground">
            <CardHeader>
              <Sparkles className="h-12 w-12 mx-auto mb-4" />
              <CardTitle className="text-3xl mb-4">Ready to Get Started?</CardTitle>
              <CardContent>
                <p className="text-lg mb-6 opacity-90">
                  Join thousands of learners finding their perfect educational path
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/auth/sign-up">Create Free Account</Link>
                </Button>
              </CardContent>
            </CardHeader>
          </Card>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 EduPlatform. Built with Next.js and Supabase.</p>
        </div>
      </footer>
    </div>
  )
}
