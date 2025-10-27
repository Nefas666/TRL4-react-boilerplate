"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ArrowRight } from "lucide-react"
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
    if (activeSlide === 0) {
      return "w-[300px] h-[300px] md:w-[200px] md:h-[200px]" // Added responsive sizing
    } else if (activeSlide === 5) {
      return "w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
    } else return "w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
  }

  const getBlobPosition = () => {
    const baseOpacity = "opacity-0 lg:opacity-100"
    switch (activeSlide) {
      case 0: // Hero - center
        return "md:top-[35%] top-[45%] left-[50%] md:left-[60%] -translate-x-1/2 -translate-y-1/2 z-10 opacity-100"
      case 1: // Challenge - right side (content is on left)
        return `top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 z-10 ${baseOpacity}`
      case 2: // Solution - left side (content is on right)
        return `top-[30%] left-[5%] md:left-[10%] -translate-y-1/2 z-10 ${baseOpacity}`
      case 3: // Features - bottom right
        return `bottom-[25.5%] right-[15%] md:right-[32.5%] z-10 ${baseOpacity}`
      case 4: // Outcomes - top left
        return `top-[55%] left-[50%] md:left-[70%] z-10 ${baseOpacity}`
      case 5: // CTA - center
        return `top-[60%] left-1/2 -translate-x-1/2 opacity-20 transition-opacity z-10 ${baseOpacity.replace('lg:opacity-100', '')}`
      default:
        return "hidden"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div
        className={`fixed pointer-events-none transition-all duration-[1500ms] ease-in-out ${getBlobSize()} ${getBlobPosition()}`}
        style={{ zIndex: 10 }}
      >
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
            <section className="slide-content bg-amber-50 py-12 md:py-20 px-4">
              <div className="container mx-auto h-full flex items-center">
                <div className="max-w-6xl mx-auto w-full h-full relative flex flex-col justify-center">
                  {/* Titolo Olografico - Top Left */}
                  <div className="relative text-center lg:absolute -top-24 md:top-8 left-0 md:left-[5%]  z-10">
                    <div className="relative group">
                      <h1
                        className="holographic-title text-8xl md:text-9xl lg:text-[170px] leading-[0.95] tracking-wider font-display font-black"
                        data-text="tAImi"
                      >
                        t
                        <span className="tracking-tight after:invert-75 lg:after:invert-25 lg:before:invert-25 text-[90px] md:text-[124px]">
                          AI
                        </span>
                        mi
                      </h1>
                      <div className="absolute left-0 top-[110%] mt-2 w-[280px] md:w-[320px] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-lg border border-white/50">
                          <p className="text-sm md:text-base text-foreground/70 leading-tight font-light">
                            <span className="font-medium">taimi</span> (Finnish) means "seedling" or "sapling" — a young
                            plant that grows into something greater with the right care and guidance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:mt-0">
                    <Image
                      src={imageSrc}
                      alt="Taimi - Your AI Mentor"
                      width={200}
                      height={200}
                      className="md:w-[480px] md:h-[480px] object-contain drop-shadow-2xl relative z-30"
                      style={{ filter: "saturate(1.2) contrast(1.1) brightness(1.05)" }}
                      priority
                    />
                  </div>

                  <div className="absolute bottom-28 md:bottom-12 right-[5%] lg:right-[12%] max-w-[320px] md:max-w-[360px] z-40 lg:z-10">
                    <div className="lg:bg-white/60 bg-white/80 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-lg border border-white/50">
                      <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 leading-tight text-center lg:text-right font-light">
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
            <section className="slide-content bg-soft-aqua py-12 md:py-20 px-4">
              <div className="container mx-auto h-full flex items-center">
                <div className="max-w-4xl mx-auto relative">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-medium font-display tracking-wide">
                    The Challenge
                  </h2>
                  <div className="text-lg md:text-xl lg:text-2xl leading-relaxed bg-soft-aqua/80 backdrop-blur-sm space-y-3 md:max-w-2xl">
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
            <section className="slide-content bg-soft-lavender py-12 md:py-20 px-4">
              <div className="container mx-auto h-full flex items-center">
                <div className="max-w-4xl mx-auto relative w-full">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-medium font-display text-right text-foreground/80 tracking-wide">
                    The Solution
                  </h2>
                  <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-2xl leading-relaxed mb-8 md:mb-12 bg-soft-lavender/80 backdrop-blur-sm">
                    <p className="text-foreground/80 text-right font-light">
                      <Link
                        href="/"
                        className="font-display font-black holographic-title text-xl md:text-2xl lg:text-[36px] hover:opacity-80 transition-opacity"
                      >
                        t<span className="text-lg md:text-xl lg:text-[30px]">AI</span>mi
                      </Link>{" "}
                      is an AI-powered platform that acts as a personal digital mentor.
                    </p>
                    <p className="text-right text-foreground/80 font-light">
                      Users describe their ideas in natural language, and the chatbot instantly suggests:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 grid-rows-2 gap-4 md:gap-6">
                    <Card className="border-0 col-span-1 row-span-2 holographic-bg">
                      <CardHeader className="space-y-4 flex items-center justify-center h-full">
                        <CardTitle className="text-2xl md:text-3xl text-foreground/80 font-display font-normal text-center">
                          Training opportunities
                        </CardTitle>
                      </CardHeader>
                    </Card>

                    <Card className="border-0 bg-chart-3/70 row-end-2 col-span-1">
                      <CardHeader className="space-y-4">
                        <CardTitle className="text-2xl md:text-3xl text-foreground/80 font-display font-normal text-center">
                          Funding and resources
                        </CardTitle>
                      </CardHeader>
                    </Card>

                    <Card className="border-0 row-span-1 bg-chart-2/80">
                      <CardHeader className="space-y-4">
                        <CardTitle className="text-2xl md:text-3xl font-display font-normal text-foreground/80 text-center">
                          Local mentors and networks
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Slide 4 - Key Features */}
          <SwiperSlide>
            <section className="slide-content bg-soft-yellow/40 py-12 md:py-20 px-4">
              <div className="container mx-auto h-full flex items-center">
                <div className="w-full">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-medium font-display text-right text-foreground/80 tracking-wide">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 max-w-7xl mx-auto">
                    <Card className="border-0 md:col-span-3 md:row-span-1 bg-soft-aqua">
                      <CardHeader className="space-y-4 md:space-y-6">
                        <div className="space-y-3 md:space-y-4">
                          <CardTitle className="text-2xl md:text-3xl font-display font-normal text-foreground/80">
                            AI Chatbot-Mentor
                          </CardTitle>
                          <CardDescription className="text-lg md:text-xl lg:text-2xl text-foreground/80">
                            Natural language interface for personalized guidance
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card className="border-0 md:row-span-2 md:col-start-4 bg-soft-yellow">
                      <CardHeader className="space-y-4 md:space-y-6">
                        <CardTitle className="text-2xl md:text-3xl font-display font-normal text-foreground/80">
                          Micro-learning Hub
                        </CardTitle>
                        <CardDescription className="text-lg md:text-xl lg:text-2xl text-foreground/80">
                          Curated training and resources for rural entrepreneurs
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="border-0 md:col-span-2 md:row-start-2 bg-soft-lavender">
                      <CardHeader className="space-y-4 md:space-y-6">
                        <div className="space-y-3 md:space-y-4">
                          <CardTitle className="text-2xl md:text-3xl font-display font-normal text-foreground/80">
                            Community Network
                          </CardTitle>
                          <CardDescription className="text-lg md:text-xl lg:text-2xl text-foreground/80">
                            Connect with local mentors and peers
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
            <section className="slide-content bg-amber-50 py-12 px-4">
              <div className="container mx-auto h-full flex items-center">
                <div className="max-w-5xl mx-auto w-full space-y-4">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium font-display text-right text-foreground/80 tracking-wide">
                    Outcomes
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-8">
                    <Card className="border-0 md:col-span-2 md:row-span-1 holographic-bg">
                      <CardHeader className="space-y-2">
                        <CardTitle className="text-2xl md:text-3xl font-display font-normal text-foreground/80">
                          Empowers rural youth
                        </CardTitle>
                        <CardDescription className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/80">
                          Provides personalized guidance and removes barriers to entrepreneurship
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="border-0 md:col-span-2 md:row-span-1 bg-cream">
                      <CardHeader className="space-y-2">
                        <CardTitle className="text-2xl md:text-3xl font-display font-normal text-foreground/80">
                          Sustainable innovation
                        </CardTitle>
                        <CardDescription className="text-lg md:text-xl lg:text-2xl text-foreground/80">
                          Encourages new jobs in green sectors and sustainable practices
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="border-0 md:col-span-3 bg-soft-yellow">
                      <CardHeader className="space-y-2">
                        <CardTitle className="text-2xl md:text-3xl font-display font-normal text-foreground/80">
                          Replicable model
                        </CardTitle>
                        <CardDescription className="text-lg md:text-xl lg:text-2xl text-foreground/80">
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
            <section className="slide-content py-12 md:py-20 px-4 holographic-bg">
              <div className="container mx-auto h-full flex items-center z-30">
                <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8 relative z-30 w-full">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-display leading-tight text-foreground/80 tracking-wide px-4">
                    We believe that caring for soil means caring for life
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto text-foreground/80 px-4">
                    We can regenerate not just the land, but the way we live together. Let's grow this vision together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-8 md:px-10 text-base font-semibold bg-white text-[#1B2431] hover:bg-white/90 gap-2"
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
                      className="rounded-full px-8 md:px-10 text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white/10"
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

      <footer
        className={`fixed bottom-0 left-0 right-0 md:max-w-[320px] max-w-screen px-4 md:rounded-tl-none rounded-tl-[50px] rounded-tr-[50px] bg-amber-50 py-4 md:py-6  transition-all duration-500 ${activeSlide === 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"}`}
      >
        <div className="flex items-center justify-center">
          <div className="col-span-2">
            <Link
              href="/"
              className="font-display font-black holographic-title text-2xl lg:text-[36px] hover:opacity-80 transition-opacity"
            >
              t<span className="text-xl lg:text-[30px]">AI</span>mi
            </Link>
            <div className="col-span-1">
            <p className="text-xs text-black/75">is the AI tool made for From Soil to Systems</p>
            <p className="text-[10px] text-black/55">A collaboration between Markesing and Settevoci</p>
            <p className="text-[8px] text-muted-foreground">+39-3463321502 • info@markesing.com</p>
            <p className="text-[8px] text-muted-foreground">&copy; 2025 All rights reserved</p>
            </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
