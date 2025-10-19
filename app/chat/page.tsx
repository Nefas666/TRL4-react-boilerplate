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

  return (
    <div className="min-h-screen flex flex-col bg-khaki">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-4xl">
        <Card className="flex-1 flex flex-col bg-card border-0 card-shadow">
          <div className="flex-1 overflow-y-auto p-6">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center max-w-md space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-lavender-sky rounded-3xl flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">I'm Your AI Assistant</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    How can I assist you today with your entrepreneurship journey?
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-transparent"
                      onClick={() => setInput("Tell me about funding opportunities")}
                    >
                      Funding opportunities
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-transparent"
                      onClick={() => setInput("How do I start a sustainable business?")}
                    >
                      Start a business
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-transparent"
                      onClick={() => setInput("Find local mentors")}
                    >
                      Find mentors
                    </Button>
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

          <div className="border-t p-6 bg-muted/30">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about your entrepreneurship journey..."
                disabled={isLoading}
                className="flex-1 rounded-full px-6 py-6 text-base border-2 focus-visible:ring-2 focus-visible:ring-primary"
              />
              <Button type="submit" disabled={isLoading || !input.trim()} size="lg" className="rounded-full px-8 gap-2">
                <Send className="h-5 w-5" />
                <span className="hidden sm:inline">Send</span>
              </Button>
            </form>
          </div>
        </Card>
      </main>
    </div>
  )
}
