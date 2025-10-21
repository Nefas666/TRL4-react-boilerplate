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
import imageSrc from "../public/images/design-mode/avatar_01.png"

// Import Swiper styles


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
        return "top-[30%] left-[10%] -translate-y-1/2"
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
        style={{ zIndex: 10 }}>
        <HolographicBlob />
      </div>

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
            <section className="slide-content bg-amber-50 py-20 md:py-32">
              <div className="container mx-auto px-4 h-full">
                <div className="max-w-6xl mx-auto h-full relative">
                  {/* Titolo Olografico - Top Left */}
                  <div className="absolute top-8 z-10 lg:left-[5%]">
                    <h1 
                      className="holographic-title text-9xl leading-[0.95] tracking-wider md:text-[170px] font-display font-black"
                      data-text="tAImi"
                    >
                      t<span className="tracking-tight after:invert-25 before:invert-25 text-[124px]">AI</span>mi
                    </h1>
                  </div>

                  <div className="flex items-center justify-center">

                    <Image
                      src={imageSrc}
                      alt="Taimi - Your AI Mentor"
                      width={280}
                      height={280}
                      className="object-contain drop-shadow-2xl relative z-20"
                      style={{ filter: "saturate(1.2) contrast(1.1) brightness(1.05)" }}
                      priority
                    />
                  </div>

                  <div className="absolute bottom-12 right-[12%] max-w-[360px] z-10">
                    <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/50">
                      <p className="text-xl md:text-2xl text-foreground/70 leading-tight text-right font-light">
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
            <section className="slide-content bg-soft-aqua py-20">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto relative">
                  <h2 className="text-6xl md:text-7xl mb-8 font-medium font-display tracking-wide">The Challenge</h2>
                  <div className="text-2xl leading-relaxed bg-soft-aqua/80 backdrop-blur-sm space-y-3 md:max-w-2xl">
                    <p className="text-foreground/80 font-light">
                      In <span className="font-semibold text-foreground">Northern Ostrobothnia (Finland)</span>, rural
                      youth and unemployed people often lack access to information, mentors, and opportunities.
                    </p>
                    <p className="text-foreground/80 font-light">
                      Bureaucratic complexity and scattered digital resources make it hard to start sustainable
                      initiatives.
                    </p>
                    <p className="text-foreground/80 font-light">
                      Existing training is often static and disconnected from real community needs.
                    </p>
                   
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Slide 3 - The Solution */}
          <SwiperSlide>
            <section className="slide-content bg-soft-lavender py-20">
                <div className="max-w-4xl mx-auto relative items-stretch flex-col justify-center">
                  <h2 className="text-6xl md:text-7xl mb-8 font-medium font-display text-right text-foreground/80 tracking-wide">The Solution</h2>
                  <div className="space-y-6 text-lg leading-relaxed mb-12 bg-soft-lavender/80 backdrop-blur-sm text-2xl">
                    <p className="text-foreground/80 text-right text-2xl font-light">
                     <Link href="/" className="font-display font-black holographic-title lg:text-[36px] text-2xl hover:opacity-80 transition-opacity">
            t<span className="text-[30px]">AI</span>mi
          </Link> is an AI-powered platform that acts
                      as a personal digital mentor.
                    </p>
                    <p className="text-right text-2xl text-foreground/80 font-light">
                      Users describe their ideas in natural language, and the chatbot instantly suggests:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 grid-rows-2 gap-6">
                    <Card className="border-0 col-span-1 row-span-2 holographic-bg">
                      <CardHeader className="space-y-4 flex items-center justify-center">
                        <CardTitle className="text-2xl text-foreground/80 font-display font-normal text-center">Training opportunities</CardTitle>
                      </CardHeader>
                    </Card>

                    <Card className="border-0 bg-chart-3/70 row-end-2 col-span-1">
                      <CardHeader className="space-y-4">
                        <CardTitle className="text-2xl text-foreground/80 font-display font-normal text-center">Funding and resources</CardTitle>
                      </CardHeader>
                    </Card>

                    <Card className="border-0 row-span-1 bg-chart-2/80">
                      <CardHeader className="space-y-4">
                        <CardTitle className="text-2xl text-foreground/80 font-display font-normal text-center">Local mentors or networks</CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Slide 4 - Key Features */}
          <SwiperSlide>
            <section className="slide-content bg-soft-yellow py-20">
              <div className="container mx-auto px-4">
                  <h2 className="text-6xl md:text-7xl mb-8 font-medium font-display text-right text-foreground/80 tracking-wide">Key Features</h2>
                  <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-7xl mx-auto">
                    <Card className="border-0 col-span-3 row-span-1">
                      <CardHeader className="space-y-6 p-8">
                        <div className="space-y-4">
                          <CardTitle className="text-2xl font-display font-normal">AI Chatbot-Mentor</CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            Natural language interface for personalized guidance
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card className="border-0 row-span-2 col-start-4 bg-chart-1">
                      <CardHeader className="space-y-6 p-8">
                          <CardTitle className="text-2xl font-display font-normal">Micro-learning Hub</CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            Curated training and resources for rural entrepreneurs
                          </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="border-0 col-span-2 row-start-2">
                      <CardHeader className="space-y-6 p-8">
                        <div className="space-y-4">
                          <CardTitle className="text-2xl font-display font-normal">Micro-learning Hub</CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            Curated training and resources for rural entrepreneurs
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
            </section>
          </SwiperSlide>

          {/* Slide 5 - Outcomes */}
          <SwiperSlide>
            <section className="slide-content bg-soft-yellow py-20">
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
            <section className="slide-content py-24 bg-secondary">
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
