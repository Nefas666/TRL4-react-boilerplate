import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Users, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Taimi</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An AI-powered platform empowering rural youth entrepreneurship in Northern Ostrobothnia, Finland
          </p>
        </div>

        <section className="mb-16">
          <Card className="border-0 card-shadow bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In Northern Ostrobothnia, Finland, rural youth and unemployed people often lack access to information,
                mentors, and opportunities.
              </p>
              <p>
                Bureaucratic complexity and scattered digital resources make it hard to start sustainable initiatives.
                Existing training is often static and disconnected from real community needs.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="border-0 card-shadow bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-secondary" />
                The Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Taimi is an AI-powered platform that acts as a personal digital mentor. Users describe
                their ideas in natural language, and the chatbot instantly suggests:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Training opportunities</li>
                <li>Funding and resources</li>
                <li>Local mentors or networks</li>
              </ul>
              <p className="font-medium text-foreground">
                The system transforms uncertainty into concrete, guided actions.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Expected Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Empower Rural Youth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Provide personalized guidance to help young people in rural areas start their entrepreneurial journey
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Sustainable Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Encourage sustainable innovation and create new jobs in green sectors
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Strengthen Networks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Build stronger local networks and improve digital inclusion in rural communities
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 card-shadow hover:card-shadow-hover transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-highlight" />
                </div>
                <CardTitle className="text-xl">Replicable Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Create a replicable model that can be adapted for other EU rural regions
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 card-shadow bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Markesing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  An Italian-based organization that develops digital solutions aimed at generating social and cultural
                  impact.
                </p>
                <p>
                  With over 400 hours of training delivered across 12 public schools, they have built strong connections
                  in the educational field.
                </p>
                <p>
                  In "Taimi", Markesing leads the digital development and strategic coordination of the
                  platform.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 card-shadow bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Settevoci</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A grassroots initiative that has revived an abandoned rural masseria in Castiglione di Sicilia,
                  transforming it into a hub for permaculture and cultural exchange.
                </p>
                <p>
                  Through regenerative agriculture, hands-on learning, and inclusive gatherings, they have created a
                  living space rooted in sustainability and shared knowledge.
                </p>
                <p>
                  Their on-the-ground expertise is key in shaping the content, piloting the platform, and anchoring the
                  project in real-world practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
