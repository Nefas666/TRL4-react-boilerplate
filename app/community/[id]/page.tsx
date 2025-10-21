"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, MessageCircle, ArrowLeft, Send, Loader2 } from "lucide-react"
import type { CommunityPost, CommunityComment } from "@/lib/types"

export default function CommunityThreadPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<CommunityPost | null>(null)
  const [comments, setComments] = useState<CommunityComment[]>([])
  const [loading, setLoading] = useState(true)
  const [newComment, setNewComment] = useState("")
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const response = await fetch(`/api/community/mock?postId=${params.id}`)
        const data = await response.json()
        setPost(data.post)
        setComments(data.comments || [])
      } catch (error) {
        console.error("[v0] Error fetching thread:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchThread()
  }, [params.id])

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Add mock comment
    const mockComment: CommunityComment = {
      id: `c${Date.now()}`,
      post_id: params.id as string,
      author_id: "current-user",
      content: newComment,
      created_at: new Date().toISOString(),
      profiles: {
        id: "current-user",
        display_name: "You",
        bio: null,
        avatar_url: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    }

    setComments([...comments, mockComment])
    setNewComment("")
    setSubmitting(false)
  }

  const getInitials = (name: string | null | undefined) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        </main>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Post not found</p>
            <Button onClick={() => router.push("/community")} className="mt-4">
              Back to Community
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => router.push("/community")} className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </Button>

        {/* Main Post */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarFallback>{getInitials(post.profiles?.display_name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{post.profiles?.display_name || "Anonymous"}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-3xl font-bold mb-4 font-display">{post.title}</h1>
            <p className="text-base leading-relaxed whitespace-pre-wrap">{post.content}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              <span>{post.likes_count}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments_count}</span>
            </Button>
          </CardFooter>
        </Card>

        {/* Comments Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-display">Comments ({comments.length})</h2>

          {/* Comment Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmitComment} className="space-y-4">
                <Textarea
                  placeholder="Share your thoughts..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={3}
                  disabled={submitting}
                />
                <div className="flex justify-end">
                  <Button type="submit" disabled={submitting || !newComment.trim()} className="gap-2">
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Posting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Post Comment
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Comments List */}
          {comments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{getInitials(comment.profiles?.display_name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{comment.profiles?.display_name || "Anonymous"}</p>
                    <p className="text-xs text-muted-foreground">{new Date(comment.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{comment.content}</p>
              </CardContent>
            </Card>
          ))}

          {comments.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
