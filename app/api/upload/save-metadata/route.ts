import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const supabase = await createServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { blobUrl, fileName, fileType, fileSize, title, description, category, tags } = body

    const resourceType = fileType === "application/pdf" ? "paper" : "video"

    const tagsArray = tags
      ? tags
          .split(",")
          .map((tag: string) => tag.trim())
          .filter(Boolean)
      : []

    const { data: resource, error: dbError } = await supabase
      .from("resources")
      .insert({
        title: title || fileName,
        description: description || "",
        category: category || "general",
        type: resourceType,
        file_url: blobUrl,
        file_type: fileType,
        file_size: fileSize,
        uploaded_by: user.id,
        tags: tagsArray,
      })
      .select()
      .single()

    if (dbError) {
      console.error("[v0] Database error:", dbError)
      return NextResponse.json(
        {
          error: "Failed to save resource metadata",
          details: dbError.message,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, resource })
  } catch (error) {
    console.error("[v0] Error saving metadata:", error)
    return NextResponse.json(
      {
        error: "Failed to save metadata",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
