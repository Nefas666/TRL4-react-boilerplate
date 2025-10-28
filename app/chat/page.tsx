"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Mic, X, Send, MessageSquare, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import HolographicBlob from "@/components/holographic-blob"
import { ChatMessage } from "@/components/chat-message"
import type { ChatMessage as ChatMessageType } from "@/lib/types"
import { Navbar } from "@/components/navbar"

type InputMode = "voice" | "text"

// Topic suggeriti per iniziare la conversazione
const STARTER_TOPICS = [
  {
    emoji: "🌱",
    text: "Tell me about soil literacy",
    message: "I'd like to learn about soil literacy and regenerative farming"
  },
  {
    emoji: "💡",
    text: "Help me develop a business idea",
    message: "Can you help me develop my business idea for rural entrepreneurship?"
  },
  {
    emoji: "🎓",
    text: "Find training opportunities",
    message: "What training opportunities are available for young rural entrepreneurs?"
  },
  {
    emoji: "💧",
    text: "Climate-smart practices",
    message: "Tell me about climate-smart and sustainable practices"
  }
]

export default function ChatPage() {
  const [inputMode, setInputMode] = useState<InputMode>("voice")
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: crypto.randomUUID(),
      conversation_id: "welcome",
      role: "assistant",
      content: `👋 Hello and welcome! You're now testing the **TAIMI digital mentor**, an experimental chatbot designed to support young people exploring sustainable entrepreneurship in rural areas.

This is a test environment, which means that some of the features and responses are still being improved. Your feedback helps us make the mentor smarter and more useful for everyone.

**Together, we can:**

- 🌱 **Learn** about soil literacy and regenerative farming
- 💧 **Explore** climate-smart and sustainable practices
- 💡 **Develop** your business ideas and find resources to make them real
- 🎓 **Discover** training opportunities and EU programmes for young innovators
- 🤝 **Connect** with the community of rural entrepreneurs

So, tell me, what would you like to explore first?`,
      created_at: new Date().toISOString(),
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [showStarters, setShowStarters] = useState(true)
  const recognitionRef = useRef<any>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = true
      recognitionRef.current.lang = "en-US"

      recognitionRef.current.onresult = (event: any) => {
        let interimTranscript = ""
        let finalTranscript = ""

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPiece = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            finalTranscript += transcriptPiece + " "
          } else {
            interimTranscript += transcriptPiece
          }
        }

        setTranscript(finalTranscript || interimTranscript)

        if (finalTranscript) {
          handleSendMessage(finalTranscript.trim())
        }
      }

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error)
        setIsListening(false)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  const handleMicToggle = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in your browser.")
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      setTranscript("")
      recognitionRef.current.start()
      setIsListening(true)
    }
  }

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return

    // Nascondi i topic suggeriti dopo il primo messaggio
    setShowStarters(false)

    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      conversation_id: "temp",
      role: "user",
      content: messageText,
      created_at: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setTranscript("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      })

      const data = await response.json()

      const assistantMessage: ChatMessageType = {
        id: crypto.randomUUID(),
        conversation_id: "temp",
        role: "assistant",
        content: data.message || data.response,
        created_at: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: ChatMessageType = {
        id: crypto.randomUUID(),
        conversation_id: "temp",
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        created_at: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleStarterClick = (topic: typeof STARTER_TOPICS[0]) => {
    handleSendMessage(topic.message)
  }

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(input)
  }

  const hasMessages = messages.length > 0

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />

      <div className="absolute top-20 left-4 z-50 md:top-24 md:left-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-white/60 hover:bg-white/80 transition-all"
        >
          <ArrowLeft className="h-5 w-5 md:h-6 md:w-6 text-primary" />
        </Button>
      </div>

      <main className="flex-1 flex flex-col overflow-auto">
        {hasMessages ? (
          <div className="flex-1 px-6 py-6 max-w-4xl mx-auto w-full">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {/* Topic suggeriti - mostrati solo all'inizio */}
              {showStarters && messages.length === 1 && !isLoading && (
                <div className="flex flex-col gap-3 my-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-2 text-sm text-primary/60 px-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Try asking about...</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {STARTER_TOPICS.map((topic, index) => (
                      <button
                        key={index}
                        onClick={() => handleStarterClick(topic)}
                        className="group relative flex items-center cursor-pointer gap-3 p-4 rounded-2xl bg-white/60 hover:bg-white/80 backdrop-blur-lg border border-white/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-md text-left"
                      >
                        <span className="text-2xl flex-shrink-0">{topic.emoji}</span>
                        <span className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">
                          {topic.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-soft-lavender flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div className="bg-white/60 backdrop-blur-lg rounded-3xl px-5 py-3 border border-white/50">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
                      <span
                        className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <span
                        className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-between px-6 py-12 max-w-6xl mx-auto w-full">
            <div className="text-center space-y-8 mt-8">
              <h2 className="text-6xl md:text-7xl mb-8 font-medium font-display tracking-wide text-foreground/80">
                Hello, I'm{" "}
                <span className="font-display font-black text-6xl text-foreground/80">
                  t<span className="text-[54px]">AI</span>mi
                </span>
                <br />
                How can I help you today?
              </h2>
            </div>

            <div className="relative flex items-center justify-center my-auto">
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                <HolographicBlob />
              </div>
            </div>

            <div className="text-center space-y-4 mb-8">
              <p className="text-lg md:text-xl text-primary/70 leading-relaxed max-w-lg mx-auto px-4">
                Lorem ipsum tus dis nostra morbi gravida. Nisi sollicitudin{" "}
                <span className="text-primary/50">tincidunt sodales tellus nam</span>
              </p>
            </div>
          </div>
        )}
      </main>

      <div className="pb-8 px-6 border-t border-border/30 pt-6">
        {inputMode === "voice" ? (
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setInputMode("text")}
                className="rounded-full w-14 h-14 bg-white/60 hover:bg-white/80 transition-all"
              >
                <MessageSquare className="h-6 w-6 text-primary" />
              </Button>

              <div className="relative">
                {isListening && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-soft-aqua/30 animate-ping" />
                    <div
                      className="absolute inset-[-20px] rounded-full bg-soft-aqua/20"
                      style={{ animation: "pulse-slow 2s ease-in-out infinite" }}
                    />
                  </>
                )}

                <Button
                  onClick={handleMicToggle}
                  size="icon"
                  className={`relative rounded-full w-20 h-20 transition-all duration-300 ${
                    isListening ? "bg-soft-aqua hover:bg-soft-aqua/90 scale-110" : "bg-white/80 hover:bg-white/90"
                  }`}
                >
                  <Mic className={`h-8 w-8 ${isListening ? "text-primary" : "text-primary/70"}`} />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsListening(false)
                  setTranscript("")
                  if (recognitionRef.current) {
                    recognitionRef.current.stop()
                  }
                }}
                className="rounded-full w-14 h-14 bg-white/60 hover:bg-white/80 transition-all"
              >
                <X className="h-6 w-6 text-primary" />
              </Button>
            </div>

            <div className="mt-6 min-h-[80px]">
              <div
                className={`bg-white/60 backdrop-blur-lg rounded-3xl p-4 border border-white/50 transition-opacity duration-300 ${
                  transcript ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-center text-primary/80 min-h-[24px]">{transcript || "\u00A0"}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleTextSubmit} className="flex gap-3 items-center">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setInputMode("voice")}
                className="rounded-full w-12 h-12 bg-white/60 hover:bg-white/80 transition-all flex-shrink-0 cursor-pointer"
              >
                <Mic className="h-6 w-6 text-primary" />
              </Button>

              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 rounded-full bg-white/60 backdrop-blur-lg border-white/50 px-6 py-6 text-base focus:bg-white/80 transition-all cursor-pointer"
              />

              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
                className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 disabled:opacity-50 flex-shrink-0 cursor-pointer"
              >
                <Send className="h-5 w-5 text-white" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}