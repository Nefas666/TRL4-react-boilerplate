"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import type { CommunityPost } from "@/lib/types"
import { useState } from "react"

interface CommunityPostCardProps {
  post: CommunityPost
}

export function CommunityPostCard({ post }: CommunityPostCardProps) {
  const [showComments, setShowComments] = useState(false)

  const authorInitials =
    post.profiles?.display_name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U"

  const placeholderComments =
    post.comments_count > 0
      ? [
          {
            id: 1,
            author: "Maria Silva",
            initials: "MS",
            content: "This is really helpful! I've been looking for resources like this in my area.",
            time: "2 hours ago",
          },
          {
            id: 2,
            author: "João Santos",
            initials: "JS",
            content: "Great insights! Would love to connect and discuss this further.",
            time: "5 hours ago",
          },
        ].slice(0, Math.min(post.comments_count, 2))
      : []

  return (
    <Card className="hover:soft-shadow-lg transition-all">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-medium text-sm">{post.profiles?.display_name || "Anonymous"}</p>
            <p className="text-xs text-muted-foreground">{new Date(post.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Link href={`/community/${post.id}`}>
          <h3 className="font-semibold text-lg mb-2 font-display hover:text-primary transition-colors">{post.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-3">{post.content}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {post.comments_count > 0 && showComments && (
          <div className="mt-4 pt-4 border-t space-y-3">
            {placeholderComments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">{comment.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-xs">{comment.author}</p>
                    <p className="text-xs text-muted-foreground">{comment.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{comment.content}</p>
                </div>
              </div>
            ))}
            {post.comments_count > 2 && (
              <Link href={`/community/${post.id}`}>
                <p className="text-xs text-primary hover:underline">View all {post.comments_count} comments</p>
              </Link>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button variant="ghost" size="sm" className="gap-2">
          <Heart className="h-4 w-4" />
          <span className="text-xs">{post.likes_count}</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          onClick={() => post.comments_count > 0 && setShowComments(!showComments)}
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-xs">{post.comments_count}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
