"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send, Sparkles } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { TypingIndicator } from "@/components/typing-indicator"
import { Navbar } from "@/components/navbar"
import type { ChatMessage as ChatMessageType } from "@/lib/types"

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessageType[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      conversation_id: "temp",
      role: "user",
      content: input,
      created_at: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()

      const assistantMessage: ChatMessageType = {
        id: crypto.randomUUID(),
        conversation_id: "temp",
        role: "assistant",
        content: data.message,
        created_at: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedPrompts = [
    "How can I start a sustainable business in rural Finland?",
    "What funding opportunities are available for young entrepreneurs?",
    "Connect me with local mentors in agriculture",
    "Show me training programs for green technology",
  ]

  const handlePromptClick = (prompt: string) => {
    setInput(prompt)
  }

  return (
    <div className="min-h-screen flex flex-col bg-soft-yellow">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-4xl">
        <Card className="flex-1 flex flex-col border-0 card-shadow bg-card">
          <div className="flex-1 overflow-y-auto p-6">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center max-w-2xl space-y-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#BEC8F9] to-[#A2EAF6] mx-auto flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Hi! I'm your AI Mentor 👋</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I'm here to help you navigate your entrepreneurship journey in rural Finland. Ask me about
                      training, funding, mentors, or any guidance you need!
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground">Try asking:</p>
                    <div className="grid gap-3">
                      {suggestedPrompts.map((prompt, index) => (
                        <button
                          key={index}
                          onClick={() => handlePromptClick(prompt)}
                          className="text-left p-4 rounded-2xl bg-soft-mint hover:bg-soft-blue transition-colors border-0 text-sm font-medium"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <div className="border-t p-6 bg-soft-peach/30">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                disabled={isLoading}
                className="flex-1 rounded-full px-6 py-6 text-base border-2 focus:border-[#BEC8F9] bg-white"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="lg"
                className="rounded-full px-8 bg-[#BEC8F9] hover:bg-[#BEC8F9]/90 text-[#1B2431]"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </Card>
      </main>
    </div>
  )
}
