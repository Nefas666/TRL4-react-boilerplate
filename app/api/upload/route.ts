import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    // Check authentication
    const supabase = await createServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const tags = formData.get("tags") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate file type (only PDF and video files)
    const allowedTypes = ["application/pdf", "video/mp4", "video/webm", "video/ogg", "video/quicktime"]

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type. Only PDF and video files are allowed." }, { status: 400 })
    }

    // Validate file size (max 100MB)
    const maxSize = 100 * 1024 * 1024 // 100MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "File size exceeds 100MB limit" }, { status: 400 })
    }

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true,
    })

    // Determine resource type based on file type
    const resourceType = file.type === "application/pdf" ? "paper" : "video"

    // Save metadata to Supabase
    const { data: resource, error: dbError } = await supabase
      .from("resources")
      .insert({
        title: title || file.name,
        description: description || "",
        category: category || "general",
        type: resourceType,
        file_url: blob.url,
        file_type: file.type,
        file_size: file.size,
        uploaded_by: user.id,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      })
      .select()
      .single()

    if (dbError) {
      console.error("[v0] Database error:", dbError)
      return NextResponse.json({ error: "Failed to save resource metadata" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      resource,
      blob,
    })
  } catch (error) {
    console.error("[v0] Upload error:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
