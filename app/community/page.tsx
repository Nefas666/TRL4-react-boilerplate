import { createClient } from "@/lib/supabase/server"
import { CommunityPostCard } from "@/components/community-post-card"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import type { CommunityPost } from "@/lib/types"

export default async function CommunityPage() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("community_posts")
    .select("*, profiles(*)")
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Community</h1>
            <p className="text-muted-foreground">
              Connect with fellow rural entrepreneurs, share experiences, and find local mentors
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>

        <div className="space-y-4">
          {posts?.map((post: CommunityPost) => (
            <CommunityPostCard key={post.id} post={post} />
          ))}
        </div>

        {(!posts || posts.length === 0) && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts yet. Be the first to share your journey!</p>
          </div>
        )}
      </main>
    </div>
  )
}
