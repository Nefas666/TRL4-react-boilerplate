# Authentication System

This project uses Supabase Authentication with email/password login.

## Features

- ✅ Email/Password authentication
- ✅ Email confirmation required for new accounts
- ✅ Protected routes with middleware
- ✅ Row Level Security (RLS) on database
- ✅ Development mode bypass for testing
- ✅ Automatic profile creation on signup

## Environment Variables

Required environment variables (see `.env.local.example`):

\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Development redirect URL
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/profile

# Development Mode (ONLY for development!)
NEXT_PUBLIC_DEV_MODE=false
\`\`\`

## Development Mode

**⚠️ WARNING: Never enable DEV_MODE in production!**

Development mode allows you to bypass authentication during development:

1. Set `NEXT_PUBLIC_DEV_MODE=true` in your `.env.local`
2. Restart your development server
3. You'll see a yellow warning banner on auth pages
4. Click "Bypass Auth (Dev Mode)" to skip login

**Security Note:** The middleware checks this environment variable and will bypass all authentication checks when enabled. This is ONLY for development convenience.

## Protected Routes

The following routes require authentication:
- `/profile` - User profile page
- `/chat` - Chat interface
- `/community` - Community posts
- Any route not explicitly public

Public routes:
- `/` - Homepage
- `/resources` - Resources page
- `/auth/*` - Authentication pages

## User Flow

### Sign Up
1. User fills out sign-up form with email, password, and display name
2. Password must be at least 8 characters
3. Password confirmation is required
4. User receives confirmation email
5. User clicks link in email to confirm account
6. Profile is automatically created via database trigger
7. User can now log in

### Login
1. User enters email and password
2. System validates credentials
3. On success, user is redirected to `/profile`
4. Session is maintained via HTTP-only cookies

### Logout
Users can log out from the navbar, which clears their session.

## Database Security

All user data is protected with Row Level Security (RLS):

- Users can only read/write their own profile
- Users can only create posts/comments as themselves
- All queries automatically filter by authenticated user ID

See `scripts/002_enable_rls.sql` for RLS policies.

## Implementation Details

### Client-Side Auth
\`\`\`typescript
import { createClient } from "@/lib/supabase/client"

const supabase = createClient()
await supabase.auth.signInWithPassword({ email, password })
\`\`\`

### Server-Side Auth
\`\`\`typescript
import { createClient } from "@/lib/supabase/server"

const supabase = await createClient()
const { data: { user } } = await supabase.auth.getUser()
\`\`\`

### Middleware
The middleware (`lib/supabase/middleware.ts`) handles:
- Session refresh
- Cookie management
- Route protection
- Dev mode bypass

## Troubleshooting

### "User not found" error
- Make sure the user has confirmed their email
- Check Supabase dashboard for user status

### Redirected to login immediately
- Session may have expired
- Check that cookies are enabled
- Verify environment variables are set

### RLS policy errors
- Ensure user is authenticated
- Check that user ID matches the row owner
- Verify RLS policies are enabled

## Best Practices

1. **Never disable email confirmation in production**
2. **Always use RLS on user tables**
3. **Never expose service role key to client**
4. **Keep DEV_MODE disabled in production**
5. **Use server components for sensitive data**
6. **Validate user input on both client and server**
