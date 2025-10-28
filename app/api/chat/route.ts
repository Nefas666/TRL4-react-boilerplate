import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    console.log("[v0] Chat API called")

    if (!process.env.OPENAI_API_KEY) {
      console.error("[v0] OpenAI API key is not configured")
      return NextResponse.json(
        { error: "OpenAI API key is not configured. Please add OPENAI_API_KEY to your environment variables." },
        { status: 500 },
      )
    }

    const OpenAI = (await import("openai")).default

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const body = await req.json()
    console.log("[v0] Request body:", body)

    const { message, isFirstMessage } = body

    if (!message) {
      console.error("[v0] Message is missing from request")
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

    console.log("[v0] Calling OpenAI API...")
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 500,
    })

    const responseMessage = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response."
    console.log("[v0] OpenAI response received")

    return NextResponse.json({ message: responseMessage })
  } catch (error: any) {
    console.error("[v0] Chat API error:", error)
    console.error("[v0] Error details:", {
      message: error?.message,
      status: error?.status,
      type: error?.type,
    })

    if (error?.status === 401) {
      return NextResponse.json(
        { error: "Invalid OpenAI API key. Please check your OPENAI_API_KEY environment variable." },
        { status: 500 },
      )
    }

    if (error?.status === 429) {
      return NextResponse.json({ error: "OpenAI API rate limit exceeded. Please try again later." }, { status: 429 })
    }

    return NextResponse.json(
      { error: `Failed to process message: ${error?.message || "Unknown error"}` },
      { status: 500 },
    )
  }
}
