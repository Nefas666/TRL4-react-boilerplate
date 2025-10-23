-- Create a test user for development
-- This script should ONLY be run in development environments
-- Password: TestUser123!

-- Note: Supabase auth users are managed through the auth.users table
-- We'll create a profile entry that matches a user you'll create through the UI

-- First, you need to sign up through the UI with these credentials:
-- Email: dev@test.com
-- Password: TestUser123!
-- Display Name: Dev Test User

-- After signing up and confirming the email, the profile will be automatically created
-- via the trigger we set up in 003_create_profile_trigger.sql

-- For development testing without email confirmation, you can:
-- 1. Set NEXT_PUBLIC_DEV_MODE=true in your .env.local
-- 2. Use the "Bypass Auth" button on login/signup pages

-- Alternatively, you can manually confirm the user in Supabase Dashboard:
-- 1. Go to Authentication > Users
-- 2. Find the user with email dev@test.com
-- 3. Click the three dots menu
-- 4. Select "Confirm email"

-- If you want to create additional test data for this user, 
-- you can insert it here after the user is created:

-- Example: Add a test resource for the dev user
-- INSERT INTO resources (title, description, type, url, uploaded_by)
-- VALUES (
--   'Test Resource',
--   'This is a test resource for development',
--   'pdf',
--   'https://example.com/test.pdf',
--   (SELECT id FROM profiles WHERE email = 'dev@test.com')
-- );

-- Example: Add a test community post
-- INSERT INTO community_posts (title, content, author_id)
-- VALUES (
--   'Test Post',
--   'This is a test post for development',
--   (SELECT id FROM profiles WHERE email = 'dev@test.com')
-- );
