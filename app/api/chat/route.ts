// import { type NextRequest, NextResponse } from "next/server"

// export async function POST(request: NextRequest) {
//   try {
//     const { message } = await request.json()

//     // TODO: Integrate with OpenAI API via Supabase Edge Function
//     // For now, return a mock response
//     const mockResponse = `Thank you for your message: "${message}". 
    
// This is a placeholder response. To enable real AI chat:
// 1. Set up OpenAI API key in your environment
// 2. Create a Supabase Edge Function to handle OpenAI requests
// 3. Update this route to call the Edge Function

// I can help you find courses, scholarships, and funding opportunities. What are you interested in learning?`

//     return NextResponse.json({ message: mockResponse })
//   } catch (error) {
//     console.error("Chat API error:", error)
//     return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
//   }
// }

// import { NextRequest, NextResponse } from "next/server"
// import OpenAI from "openai"

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// })

// export async function POST(req: NextRequest) {
//   try {
//     const { message } = await req.json()

//     if (!message) {
//       return NextResponse.json({ error: "Message is required" }, { status: 400 })
//     }

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4-turbo-preview", // o "gpt-3.5-turbo" per risparmiare
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are tAImi, an AI mentor for rural youth entrepreneurship in Northern Ostrobothnia, Finland. You help users discover training opportunities, funding resources, and local mentors. Be friendly, supportive, and practical.",
//         },
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//       temperature: 0.7,
//       max_tokens: 500,
//     })

//     const responseMessage = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response."

//     return NextResponse.json({ message: responseMessage })
//   } catch (error) {
//     console.error("OpenAI API error:", error)
//     return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
//   }
// }