"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageSquare,
  BookOpen,
  Users,
  ArrowRight,
  Network,
  GraduationCap,
  Target,
  TrendingUp,
  Globe,
  CheckCircle2,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import HolographicBlob from "@/components/holographic-blob"
import Image from "next/image"
import { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Pagination } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  const getBlobSize = () => {
    if (activeSlide === 0 || activeSlide === 5) {
      return "w-[300px] h-[300px]" // Large in hero and CTA
    }
    return "w-[220px] h-[220px]" // Smaller in middle slides
  }

  const getBlobPosition = () => {
    switch (activeSlide) {
      case 0: // Hero - center
        return "top-[35%] left-[60%] -translate-x-1/2 -translate-y-1/2"
      case 1: // Challenge - right side (content is on left)
        return "top-1/2 right-[10%] -translate-y-1/2"
      case 2: // Solution - left side (content is on right)
        return "top-1/2 left-[10%] -translate-y-1/2"
      case 3: // Features - bottom right
        return "bottom-[15%] right-[10%]"
      case 4: // Outcomes - top left
        return "top-[20%] left-[10%]"
      case 5: // CTA - center
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div
        className={`fixed pointer-events-none transition-all duration-[1500ms] ease-in-out ${getBlobSize()} ${getBlobPosition()}`}
        style={{ zIndex: 5 }}
      >
        <HolographicBlob />
      </div>

      <style jsx global>{`
     .swiper-container {
          width: 100%;
          height: 100vh;
        }
        
        .swiper-slide {
          display: flex;
          flex-direction: column;
        }
        
        .swiper-pagination {
          right: 20px !important;
          left: auto !important;
          top: 50% !important;
          transform: translateY(-50%);
          width: auto !important;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(27, 36, 49, 0.3);
          opacity: 1;
          margin: 8px 0 !important;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #1B2431;
          width: 12px;
          height: 32px;
          border-radius: 6px;
        }
        
        .slide-content {
          overflow-y: auto;
          height: 100%;
          scrollbar-width: thin;
          scrollbar-color: rgba(27, 36, 49, 0.3) transparent;
        }
        
        .slide-content::-webkit-scrollbar {
          width: 6px;
        }
        
        .slide-content::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .slide-content::-webkit-scrollbar-thumb {
          background-color: rgba(27, 36, 49, 0.3);
          border-radius: 3px;
        }
      `}</style>

      <main className="flex-1">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          mousewheel={{
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          speed={800}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="swiper-container"
          onSlideChange={(swiper: SwiperType) => setActiveSlide(swiper.activeIndex)}
        >
          {/* Slide 1 - Hero */}
          <SwiperSlide>
            <section className="slide-content bg-soft-yellow py-20 md:py-32 relative rounded-t-3xl">
              <div className="container mx-auto px-4 h-full">
                <div className="max-w-6xl mx-auto h-full relative">
                  <div className="absolute top-8 z-40">
                    <h1 className="text-8xl lg:text-8xl font-bold text-balance leading-[0.95] tracking-tight md:text-9xl text-popover">
                      tAImi
                    </h1>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-radial from-yellow-300/60 via-emerald-300/40 to-transparent blur-3xl animate-pulse-slow z-10" />
                    <div className="absolute inset-0 bg-gradient-radial from-white/40 via-yellow-200/30 to-transparent blur-2xl z-15" />

                    <Image
                      src="/images/design-mode/Designer%20%284%29(1).png"
                      alt="Taimi - Your AI Mentor"
                      width={280}
                      height={280}
                      className="object-contain drop-shadow-2xl relative z-30"
                      style={{ filter: "saturate(1.3) contrast(1.1) brightness(1.05)" }}
                      priority
                    />
                  </div>

                  <div className="absolute bottom-8 right-8 z-35 max-w-[360px]">
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/50">
                      <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-right">
                        AI Mentor for Rural Youth Entrepreneurship in Finland
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Slide 2 - The Challenge */}
          <SwiperSlide>
            <section className="slide-content bg-soft-aqua py-20 relative rounded-t-3xl">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto relative z-20">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">The Challenge</h2>
                  <div className="text-lg leading-relaxed bg-soft-aqua/80 backdrop-blur-sm rounded-3xl space-y-3 max-w-lg">
                    <p className="text-foreground/80">
                      In <span className="font-semibold text-foreground">Northern Ostrobothnia (Finland)</span>, rural
                      youth and unemployed people often lack access to information, mentors, and opportunities.
                    </p>
                    <p className="text-foreground/80">
                      Bureaucratic complexity and scattered digital resources make it hard to start sustainable
                      initiatives.
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
          </SwiperSlide>

          {/* Slide 3 - The Solution */}
          <SwiperSlide>
            <section className="slide-content bg-soft-lavender py-20 relative rounded-t-3xl">
              <div className="mx-auto px-4">
                <div className="max-w-4xl mx-auto relative z-20">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-right">The Solution</h2>
                  <div className="space-y-6 text-lg leading-relaxed mb-12 bg-soft-lavender/80 backdrop-blur-sm rounded-3xl max-w-lg">
                    <p className="text-foreground/80 text-right">
                      <span className="font-semibold text-foreground">tAImi</span> is an AI-powered platform that acts
                      as a personal digital mentor.
                    </p>
                    <p className="text-foreground/80 text-right">
                      Users describe their ideas in natural language, and the chatbot instantly suggests:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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

                  <div className="mt-12 bg-soft-lavender/80 backdrop-blur-sm p-6 rounded-3xl">
                    <p className="text-xl font-bold text-foreground">
                      The system transforms uncertainty into concrete, guided actions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Slide 4 - Key Features */}
          <SwiperSlide>
            <section className="slide-content bg-soft-blue py-20 relative rounded-t-3xl">
              <div className="container mx-auto px-4">
                <div className="relative z-20">
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
              </div>
            </section>
          </SwiperSlide>

          {/* Slide 5 - Outcomes */}
          <SwiperSlide>
            <section className="slide-content bg-soft-yellow py-20 relative rounded-t-3xl">
              <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto relative z-20">
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

                    <Card className="border-0 card-shadow bg-card">
                      <CardHeader className="space-y-4 p-8">
                        <div className="w-12 h-12 rounded-xl bg-[#FEE17C]/10 flex items-center justify-center">
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
          </SwiperSlide>

          {/* Slide 6 - CTA */}
          <SwiperSlide>
            <section className="slide-content py-24 bg-secondary relative">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-20">
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
          </SwiperSlide>
        </Swiper>
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
