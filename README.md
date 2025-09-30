# TRL4 – From Soil to System

A modern educational platform built with Next.js and Supabase, featuring AI-powered chat assistance for course and scholarship recommendations.

## Stack (Option B - Simplified)

- **Frontend**: Next.js 15 with App Router
- **Backend**: Supabase (Database + Auth + Edge Functions)
- **UI**: shadcn/ui + Tailwind CSS
- **AI**: OpenAI API (via Supabase Edge Functions)

## Features

### ✅ Implemented
- 🏠 Landing page with hero and features
- 💬 Chat interface with typing indicators
- 📚 Resource library with cards and filtering
- 👥 Community space with posts
- 👤 User profile dashboard
- 🔐 Complete authentication flow (login/signup)
- 🗄️ Database schema with RLS policies
- 🎨 Responsive design with dark mode support

### 🚧 To Implement
- OpenAI integration via Supabase Edge Functions
- Real-time chat persistence
- Resource filtering and search
- Community post creation
- User profile editing
- Saved resources feature

## Getting Started

### Prerequisites
- Node.js 18+
- Supabase account (already connected)

### Installation

1. Clone and install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run database migrations:
The SQL scripts in `/scripts` folder need to be executed in order:
- `001_create_tables.sql` - Creates all database tables
- `002_enable_rls.sql` - Enables Row Level Security
- `003_create_profile_trigger.sql` - Auto-creates user profiles
- `004_seed_resources.sql` - Seeds sample resources

3. Start development server:
\`\`\`bash
npm run dev
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Landing page
│   ├── chat/page.tsx            # AI chat interface
│   ├── resources/page.tsx       # Resource library
│   ├── community/page.tsx       # Community forum
│   ├── profile/page.tsx         # User dashboard
│   ├── auth/                    # Authentication pages
│   └── api/chat/route.ts        # Chat API endpoint
├── components/
│   ├── navbar.tsx               # Main navigation
│   ├── resource-card.tsx        # Resource display component
│   ├── chat-message.tsx         # Chat message bubble
│   ├── typing-indicator.tsx     # Chat typing animation
│   └── community-post-card.tsx  # Community post component
├── lib/
│   ├── supabase/                # Supabase client setup
│   └── types.ts                 # TypeScript types
└── scripts/                     # Database migrations
\`\`\`

## Database Schema

- **profiles** - User profile information
- **resources** - Courses, scholarships, funding opportunities
- **chat_conversations** - User chat sessions
- **chat_messages** - Individual chat messages
- **community_posts** - Community forum posts
- **community_comments** - Post comments

All tables have Row Level Security (RLS) enabled for data protection.

## Next Steps

1. **Set up OpenAI Integration**:
   - Create Supabase Edge Function for OpenAI API calls
   - Update `/app/api/chat/route.ts` to use the Edge Function

2. **Implement Real-time Features**:
   - Use Supabase Realtime for live chat updates
   - Add real-time community post updates

3. **Add Search & Filtering**:
   - Implement full-text search for resources
   - Add category and tag filtering

4. **Enhance Community**:
   - Add post creation modal
   - Implement likes and comments functionality

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL`

## License

