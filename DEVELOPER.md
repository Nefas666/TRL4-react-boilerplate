# Developer Guide

This guide provides detailed instructions for developers working on the TRL4 Education Platform.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**
- A **Supabase** account

## Initial Setup

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd TRL4-react-boilerplate
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

### 3. Configure Supabase

#### Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the project to be provisioned

#### Set Up Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
\`\`\`

You can find these values in your Supabase project settings under **API**.

#### Run Database Migrations

Execute the SQL scripts in order from the `scripts/` directory in your Supabase SQL Editor:

1. `001_create_tables.sql` - Creates the database schema
2. `002_enable_rls.sql` - Enables Row Level Security
3. `003_create_profile_trigger.sql` - Sets up automatic profile creation
4. `004_seed_resources.sql` - Seeds initial data

### 4. Run the Development Server

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                      # Next.js App Router pages
│   ├── api/                 # API routes
│   │   └── chat/           # Chat API endpoint
│   ├── auth/               # Authentication pages
│   ├── chat/               # Chat feature
│   ├── community/          # Community page
│   ├── profile/            # User profile
│   └── resources/          # Learning resources
├── components/              # React components
│   ├── ui/                 # shadcn/ui components
│   ├── auth-form.tsx       # Authentication form
│   ├── chat-interface.tsx  # Chat UI
│   ├── header.tsx          # Site header
│   └── ...
├── lib/                     # Utility functions
│   ├── supabase/           # Supabase client configuration
│   │   ├── client.ts       # Browser client
│   │   ├── server.ts       # Server client
│   │   └── middleware.ts   # Middleware helper
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Helper functions
├── scripts/                 # Database migration scripts
└── middleware.ts            # Next.js middleware for auth
\`\`\`

## Key Technologies

- **Next.js 15** - React framework with App Router
- **Supabase** - Backend as a Service (Auth + Database)
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI component library
- **SWR** - Data fetching and caching

## Development Workflow

### Working with Supabase

#### Client-Side Data Fetching

Use the browser client for client-side operations:

\`\`\`typescript
import { createBrowserClient } from '@/lib/supabase/client'

const supabase = createBrowserClient()
const { data, error } = await supabase
  .from('resources')
  .select('*')
\`\`\`

#### Server-Side Data Fetching

Use the server client in Server Components and Server Actions:

\`\`\`typescript
import { createServerClient } from '@/lib/supabase/server'

const supabase = await createServerClient()
const { data, error } = await supabase
  .from('resources')
  .select('*')
\`\`\`

#### Authentication

Authentication is handled automatically by the middleware. Protected routes are defined in `middleware.ts`.

To check if a user is authenticated in a component:

\`\`\`typescript
const supabase = createBrowserClient()
const { data: { user } } = await supabase.auth.getUser()
\`\`\`

### Adding New Features

#### 1. Create Database Tables

Add a new migration script in `scripts/` with an incremented number:

\`\`\`sql
-- scripts/005_create_new_table.sql
CREATE TABLE new_table (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE new_table ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own data"
  ON new_table FOR SELECT
  USING (auth.uid() = user_id);
\`\`\`

#### 2. Update TypeScript Types

Add types to `lib/types.ts`:

\`\`\`typescript
export interface NewTable {
  id: string
  user_id: string
  created_at: string
}
\`\`\`

#### 3. Create Components

Follow the existing component structure:

\`\`\`typescript
// components/new-feature.tsx
'use client'

import { useState } from 'react'
import { createBrowserClient } from '@/lib/supabase/client'

export function NewFeature() {
  // Component logic
}
\`\`\`

#### 4. Add Routes

Create new pages in the `app/` directory:

\`\`\`typescript
// app/new-feature/page.tsx
import { NewFeature } from '@/components/new-feature'

export default function NewFeaturePage() {
  return <NewFeature />
}
\`\`\`

## Code Conventions

### TypeScript

- Use TypeScript for all files
- Define interfaces for all data structures
- Avoid `any` types - use `unknown` if necessary

### Components

- Use functional components with hooks
- Prefer Server Components by default
- Add `'use client'` only when necessary (state, effects, browser APIs)
- Keep components small and focused

### Styling

- Use Tailwind CSS utility classes
- Follow the design token system in `globals.css`
- Use semantic color tokens (e.g., `bg-background`, `text-foreground`)
- Prefer `gap` over margin for spacing

### File Naming

- Use kebab-case for files: `user-profile.tsx`
- Use PascalCase for components: `UserProfile`
- Use camelCase for functions and variables: `getUserProfile`

## Database Best Practices

### Row Level Security (RLS)

Always enable RLS on new tables and create appropriate policies:

\`\`\`sql
-- Enable RLS
ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "policy_name"
  ON table_name
  FOR SELECT
  USING (auth.uid() = user_id);
\`\`\`

### Indexes

Add indexes for frequently queried columns:

\`\`\`sql
CREATE INDEX idx_table_user_id ON table_name(user_id);
CREATE INDEX idx_table_created_at ON table_name(created_at DESC);
\`\`\`

## Testing

### Manual Testing Checklist

- [ ] Test authentication flow (sign up, login, logout)
- [ ] Test protected routes redirect to login
- [ ] Test data fetching and display
- [ ] Test form submissions
- [ ] Test error states
- [ ] Test responsive design on mobile

### Browser Testing

Test in multiple browsers:
- Chrome/Edge
- Firefox
- Safari

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel project settings
4. Deploy

### Environment Variables in Production

Ensure these are set in Vercel:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
\`\`\`

Note: `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` is only for local development.

## Troubleshooting

### Common Issues

**Issue: "Invalid API key" error**
- Check that environment variables are set correctly
- Restart the dev server after changing `.env.local`

**Issue: Authentication not working**
- Verify Supabase URL and keys
- Check that RLS policies are correctly configured
- Ensure middleware is running

**Issue: Data not displaying**
- Check browser console for errors
- Verify RLS policies allow the current user to read data
- Check network tab for failed requests

**Issue: CORS errors**
- Ensure Supabase project allows your domain
- Check Site URL in Supabase Authentication settings

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Getting Help

If you encounter issues:

1. Check this guide and the README.md
2. Review Supabase logs in the dashboard
3. Check browser console for errors
4. Review the existing codebase for similar implementations
5. Consult the official documentation for the relevant technology

## Contributing

When contributing to this project:

1. Create a feature branch from `frontend`
2. Follow the code conventions outlined above
3. Test your changes thoroughly
4. Write clear commit messages
5. Submit a pull request with a description of changes

---

Happy coding! 🚀
