import { NextResponse } from "next/server"

// Mock data for community posts
const mockPosts = [
  {
    id: "1",
    author_id: "user1",
    title: "How to get started with sustainable farming?",
    content:
      "I recently moved to a rural area and want to start a small sustainable farm. Does anyone have experience with this? What are the first steps I should take?",
    tags: ["farming", "sustainability", "beginner"],
    likes_count: 24,
    comments_count: 8,
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: {
      id: "user1",
      display_name: "Maria Rossi",
      bio: "Aspiring farmer and sustainability advocate",
      avatar_url: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
  {
    id: "2",
    author_id: "user2",
    title: "Success story: My agritourism business",
    content:
      "After 3 years of hard work, my agritourism business is finally profitable! I wanted to share my journey and some lessons learned. The key was combining traditional farming with educational workshops for visitors. Happy to answer any questions!",
    tags: ["agritourism", "success-story", "business"],
    likes_count: 45,
    comments_count: 12,
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: {
      id: "user2",
      display_name: "Giovanni Bianchi",
      bio: "Agritourism entrepreneur",
      avatar_url: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
  {
    id: "3",
    author_id: "user3",
    title: "Looking for funding opportunities",
    content:
      "Does anyone know about EU funding programs for rural development? I have a project idea for a cooperative farm but need financial support to get started.",
    tags: ["funding", "eu-programs", "cooperative"],
    likes_count: 18,
    comments_count: 6,
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: {
      id: "user3",
      display_name: "Laura Verdi",
      bio: "Cooperative farming enthusiast",
      avatar_url: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
  {
    id: "4",
    author_id: "user4",
    title: "Best practices for organic certification",
    content:
      "I want to get organic certification for my farm. The process seems complicated. Can anyone share their experience with the certification process in Italy?",
    tags: ["organic", "certification", "regulations"],
    likes_count: 31,
    comments_count: 15,
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: {
      id: "user4",
      display_name: "Marco Neri",
      bio: "Organic farming advocate",
      avatar_url: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
]

const mockComments: Record<string, any[]> = {
  "1": [
    {
      id: "c1",
      post_id: "1",
      author_id: "user5",
      content:
        "Start small! I recommend beginning with a vegetable garden and a few chickens. Learn the basics before scaling up.",
      created_at: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000).toISOString(),
      profiles: {
        id: "user5",
        display_name: "Sofia Romano",
        bio: "Experienced farmer",
        avatar_url: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    },
    {
      id: "c2",
      post_id: "1",
      author_id: "user6",
      content: "Also, connect with local farming communities. They can provide invaluable advice and support!",
      created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      profiles: {
        id: "user6",
        display_name: "Alessandro Conti",
        bio: "Community organizer",
        avatar_url: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    },
  ],
  "2": [
    {
      id: "c3",
      post_id: "2",
      author_id: "user7",
      content: "Congratulations! How did you market your agritourism business initially?",
      created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      profiles: {
        id: "user7",
        display_name: "Francesca Marino",
        bio: "Marketing consultant",
        avatar_url: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    },
  ],
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const postId = searchParams.get("postId")

  // If postId is provided, return that specific post with comments
  if (postId) {
    const post = mockPosts.find((p) => p.id === postId)
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    const comments = mockComments[postId] || []
    return NextResponse.json({ post, comments })
  }

  // Otherwise return all posts
  return NextResponse.json({ posts: mockPosts })
}
