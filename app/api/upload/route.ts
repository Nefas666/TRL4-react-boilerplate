import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

const MAX_FILE_SIZE = 100 * 1024 * 1024 // 100MB

export async function POST(request: Request) {
  try {
    console.log("[v0] Upload request received")

    // Check authentication
    const supabase = await createServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      console.log("[v0] Unauthorized upload attempt")
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    console.log("[v0] User authenticated:", user.id)

    const formData = await request.formData()
    const file = formData.get("file") as File
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const tags = formData.get("tags") as string

    if (!file) {
      console.log("[v0] No file provided")
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    console.log("[v0] File details:", { name: file.name, type: file.type, size: file.size })

    // Validate file type (only PDF and video files)
    const allowedTypes = ["application/pdf", "video/mp4", "video/webm", "video/ogg", "video/quicktime"]

    if (!allowedTypes.includes(file.type)) {
      console.log("[v0] Invalid file type:", file.type)
      return NextResponse.json({ error: "Invalid file type. Only PDF and video files are allowed." }, { status: 400 })
    }

    if (file.size > MAX_FILE_SIZE) {
      console.log("[v0] File too large:", file.size)
      return NextResponse.json(
        {
          error: `File size exceeds 100MB limit. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB`,
        },
        { status: 400 },
      )
    }

    console.log("[v0] Uploading to Vercel Blob...")

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true,
    })

    console.log("[v0] Blob uploaded successfully:", blob.url)

    // Determine resource type based on file type
    const resourceType = file.type === "application/pdf" ? "paper" : "video"

    const tagsArray = tags
      ? tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : []

    console.log("[v0] Saving metadata to database...")
    console.log("[v0] Resource data:", {
      title: title || file.name,
      category: category || "general",
      type: resourceType,
      tags: tagsArray,
    })

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
        tags: tagsArray,
      })
      .select()
      .single()

    if (dbError) {
      console.error("[v0] Database error:", dbError)
      if (dbError.code === "42703") {
        return NextResponse.json(
          {
            error: "Database schema error. Please run the migration script 004_add_upload_fields.sql first.",
            details: dbError.message,
          },
          { status: 500 },
        )
      }
      return NextResponse.json(
        {
          error: "Failed to save resource metadata",
          details: dbError.message,
        },
        { status: 500 },
      )
    }

    console.log("[v0] Resource saved successfully:", resource.id)

    return NextResponse.json({
      success: true,
      resource,
      blob,
    })
  } catch (error) {
    console.error("[v0] Upload error:", error)
    return NextResponse.json(
      {
        error: "Failed to upload file",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
