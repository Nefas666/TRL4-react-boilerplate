"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { upload } from "@vercel/blob/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileVideo, FileText, Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const MAX_PDF_SIZE = 4 * 1024 * 1024 // 4MB
const MAX_VIDEO_SIZE = 4 * 1024 * 1024 // 4MB for now, can be adjusted

export default function UploadResourcePage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      const maxSize = selectedFile.type === "application/pdf" ? MAX_PDF_SIZE : MAX_VIDEO_SIZE
      const fileTypeName = selectedFile.type === "application/pdf" ? "PDF" : "video"

      if (selectedFile.size > maxSize) {
        setError(
          `${fileTypeName} size exceeds 4MB limit. Your file is ${(selectedFile.size / (1024 * 1024)).toFixed(2)}MB`,
        )
        setFile(null)
        return
      }

      setFile(selectedFile)
      setError("")
      if (!title) {
        setTitle(selectedFile.name.replace(/\.[^/.]+$/, ""))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setError("Please select a file to upload")
      return
    }

    const maxSize = file.type === "application/pdf" ? MAX_PDF_SIZE : MAX_VIDEO_SIZE
    if (file.size > maxSize) {
      setError(`File size exceeds 4MB limit. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB`)
      return
    }

    setUploading(true)
    setError("")
    setUploadProgress(0)

    try {
      const newBlob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/upload/blob-token",
        onUploadProgress: ({ percentage }) => {
          setUploadProgress(percentage)
        },
      })

      const metadataResponse = await fetch("/api/upload/save-metadata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blobUrl: newBlob.url,
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
          title,
          description,
          category,
          tags,
        }),
      })

      if (!metadataResponse.ok) {
        const errorData = await metadataResponse.json()
        throw new Error(errorData.error || "Failed to save resource metadata")
      }

      router.push("/resources")
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Failed to upload file. Please try again.")
      }
      console.error("[v0] Upload error:", err)
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const getFileIcon = () => {
    if (!file) return <Upload className="h-12 w-12 text-muted-foreground" />
    if (file.type === "application/pdf") {
      return <FileText className="h-12 w-12 text-red-500" />
    }
    return <FileVideo className="h-12 w-12 text-blue-500" />
  }

  const formatFileSize = (bytes: number) => {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  return (
    <div className="container mx-auto max-w-2xl py-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-3xl">Upload Resource</CardTitle>
          <CardDescription>Upload educational videos or research papers (PDF, max 4MB each)</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="file">File *</Label>
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 transition-colors hover:border-muted-foreground/50">
                {getFileIcon()}
                <div className="mt-4 text-center">
                  <Label htmlFor="file" className="cursor-pointer text-sm font-medium text-primary hover:underline">
                    Choose a file
                  </Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf,.mp4,.webm,.ogg,.mov"
                    onChange={handleFileChange}
                    className="sr-only"
                    disabled={uploading}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">PDF or Video (MP4, WebM, OGG, MOV) - Max 4MB</p>
                  {file && (
                    <div className="mt-2 space-y-1">
                      <p className="text-sm font-medium text-foreground">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                    </div>
                  )}
                </div>
              </div>
              {uploading && uploadProgress > 0 && (
                <div className="mt-2">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <p className="mt-1 text-center text-xs text-muted-foreground">{uploadProgress}% uploaded</p>
                </div>
              )}
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resource title"
                required
                disabled={uploading}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the resource content..."
                rows={4}
                disabled={uploading}
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select value={category} onValueChange={setCategory} disabled={uploading} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="machine learning, AI, tutorial (comma separated)"
                disabled={uploading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button type="submit" disabled={uploading || !file} className="flex-1">
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Resource
                  </>
                )}
              </Button>
              <Button type="button" variant="outline" onClick={() => router.back()} disabled={uploading}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
