"use client"

import { useEffect, useState } from "react"
import { CommunityPostCard } from "@/components/community-post-card"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Plus, Loader2 } from "lucide-react"
import type { CommunityPost } from "@/lib/types"

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/community/mock")
        const data = await response.json()
        setPosts(data.posts)
      } catch (error) {
        console.error("[v0] Error fetching posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between flex-wrap mb-8">
          <div>
            <h1 className="text-6xl md:text-7xl mb-8 font-medium font-display tracking-wide text-foreground/80">Community</h1>
           <p className="text-2xl font-light text-foreground/80">
              Connect with fellow rural entrepreneurs, share experiences, and find local mentors
            </p>
          </div>
          <Button className="gap-2 rounded-full">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post: CommunityPost) => (
              <CommunityPostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts yet. Be the first to share your journey!</p>
          </div>
        )}
      </main>
    </div>
  )
}
