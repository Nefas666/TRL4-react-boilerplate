import { cn } from "@/lib/utils"
import type { ChatMessage as ChatMessageType } from "@/lib/types"
import ReactMarkdown from "react-markdown"
import { useState, useEffect } from "react"


interface ChatMessageProps {
  message: ChatMessageType
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"
   const [formattedTime, setFormattedTime] = useState("")

  useEffect(() => {
    setFormattedTime(
      new Date(message.created_at).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    )
  }, [message.created_at])


  return (
    <div className={cn("flex w-full mb-4", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-3 font-light",
          isUser ? "bg-primary text-primary-foreground" : "bg-amber-50/80 backdrop-blur-md text-foreground",
        )}
      >
        <div className="text-md">
          <ReactMarkdown
            components={{
              strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              ul: ({ children }) => <ul className="space-y-1 my-2">{children}</ul>,
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
         {formattedTime && (
          <span className="text-xs opacity-70 mt-1 block">
            {formattedTime}
          </span>
        )}
      </div>
    </div>
  )
}
