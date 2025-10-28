import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key is not configured" }, { status: 500 })
    }

    const OpenAI = (await import("openai")).default

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const { message, isFirstMessage } = await req.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const messages = [
      {
        role: "system",
        content:
          "You are tAImi, an AI mentor for rural youth entrepreneurship in Northern Ostrobothnia, Finland. You help users discover training opportunities, funding resources, and local mentors. Be friendly, supportive, and practical.",
      },
    ]

    if (isFirstMessage) {
      messages.push({
        role: "assistant",
        content: [
          "Hello and welcome! You're now testing the **TAIMI digital mentor**, an experimental chatbot designed to support young people exploring sustainable entrepreneurship in rural areas.",
          "",
          "This is a test environment, which means that some of the features and responses are still being improved. Your feedback helps us make the mentor smarter and more useful for everyone.",
          "",
          "Together, we can:",
          "",
          "- **Learn** about soil literacy and regenerative farming",
          "- **Explore** climate-smart and sustainable practices",
          "- **Develop** your business ideas and find resources to make them real",
          "- **Discover** training opportunities and EU programmes for young innovators",
          "- **Connect** with the community of rural entrepreneurs",
          "",
          "So, tell me, what would you like to explore first?",
        ].join("\n"),
      })
    }

    messages.push({
      role: "user",
      content: message,
    })

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 500,
    })

    const responseMessage = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response."

    return NextResponse.json({ message: responseMessage })
  } catch (error) {
    console.error("OpenAI API error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
