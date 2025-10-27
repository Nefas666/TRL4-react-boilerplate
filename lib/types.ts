export interface Profile {
  id: string
  display_name: string | null
  bio: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface Resource {
  id: string
  title: string
  description: string | null
  category: string
  type: "course" | "scholarship" | "funding" | "article" | "pdf" | "video"
  url: string | null
  image_url: string | null
  tags?: string[]
  file_url: string | null
  file_type: string | null
  file_size: number | null
  uploaded_by: string | null
  created_at: string
  updated_at: string
}

export interface ChatConversation {
  id: string
  user_id: string
  title: string | null
  created_at: string
  updated_at: string
}

export interface ChatMessage {
  id: string
  conversation_id: string
  role: "user" | "assistant"
  content: string
  created_at: string
}

export interface CommunityPost {
  id: string
  author_id: string
  title: string
  content: string
  tags: string[] | null
  likes_count: number
  comments_count: number
  created_at: string
  updated_at: string
  profiles?: Profile
}

export interface CommunityComment {
  id: string
  post_id: string
  author_id: string
  content: string
  created_at: string
  profiles?: Profile
}
