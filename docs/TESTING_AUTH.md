# Testing Authentication System

This guide explains how to test the authentication system in both development and production environments.

## Quick Start - Development Testing

### Option 1: Dev Mode (Fastest)

1. **Enable Dev Mode** in your `.env.local`:
   \`\`\`env
   NEXT_PUBLIC_DEV_MODE=true
   \`\`\`

2. **Restart your development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Navigate to any auth page**:
   - You'll see a yellow warning banner indicating dev mode is active
   - Click "Bypass Auth (Dev Mode)" to skip authentication
   - You'll be redirected to the protected page without logging in

⚠️ **WARNING**: Dev mode bypasses ALL authentication. Never enable this in production!

### Option 2: Create Test Credentials

1. **Ensure Dev Mode is OFF** in `.env.local`:
   \`\`\`env
   NEXT_PUBLIC_DEV_MODE=false
   \`\`\`

2. **Sign up with test credentials**:
   - Email: `dev@test.com`
   - Password: `TestUser123!`
   - Display Name: `Dev Test User`

3. **Confirm the email**:
   
   **Method A - Check your email inbox**:
   - Look for the confirmation email from Supabase
   - Click the confirmation link
   
   **Method B - Manual confirmation in Supabase Dashboard**:
   - Go to your Supabase project dashboard
   - Navigate to Authentication > Users
   - Find the user with email `dev@test.com`
   - Click the three dots menu (⋮)
   - Select "Confirm email"

4. **Log in**:
   - Go to `/auth/login`
   - Enter the test credentials
   - You should be redirected to `/profile`

## Testing the Complete Flow

### 1. Sign Up Flow

**Steps**:
1. Navigate to `/auth/sign-up`
2. Fill in the form:
   - Display Name: Your choice
   - Email: Use a real email you can access
   - Password: At least 8 characters
   - Confirm Password: Must match
3. Click "Sign up"
4. You should be redirected to `/auth/sign-up-success`
5. Check your email for the confirmation link
6. Click the confirmation link
7. You should be redirected to `/profile`

**What to verify**:
- ✅ Form validation works (password length, matching passwords)
- ✅ Error messages display correctly
- ✅ Confirmation email is received
- ✅ Profile is automatically created after confirmation
- ✅ User can access protected routes after confirmation

### 2. Login Flow

**Steps**:
1. Navigate to `/auth/login`
2. Enter your credentials
3. Click "Login"
4. You should be redirected to `/profile`

**What to verify**:
- ✅ Correct credentials allow login
- ✅ Incorrect credentials show error message
- ✅ Unconfirmed users cannot log in
- ✅ Session persists across page refreshes
- ✅ Protected routes are accessible after login

### 3. Protected Routes

**Steps**:
1. Log out (if logged in)
2. Try to access `/profile` directly
3. You should be redirected to `/auth/login`
4. Log in
5. You should be redirected back to `/profile`

**What to verify**:
- ✅ Unauthenticated users are redirected to login
- ✅ After login, users are redirected to the original destination
- ✅ Authenticated users can access all protected routes

### 4. Logout Flow

**Steps**:
1. While logged in, click "Logout" in the navbar
2. You should be redirected to the homepage
3. Try to access `/profile`
4. You should be redirected to `/auth/login`

**What to verify**:
- ✅ Session is cleared
- ✅ User is redirected appropriately
- ✅ Protected routes are no longer accessible

## Production Testing

### Before Deploying

1. **Disable Dev Mode**:
   \`\`\`env
   NEXT_PUBLIC_DEV_MODE=false
   \`\`\`

2. **Verify Environment Variables** in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` (should be your production URL)
   - `NEXT_PUBLIC_DEV_MODE=false` (explicitly set to false)

3. **Test Email Configuration**:
   - Ensure Supabase email templates are configured
   - Test that confirmation emails are being sent
   - Verify email links redirect to production URL

### After Deploying

1. **Create a test account** on production:
   - Use a real email address
   - Complete the full sign-up flow
   - Confirm email
   - Log in

2. **Test all flows** as described above

3. **Monitor for errors**:
   - Check Vercel logs for any authentication errors
   - Check Supabase logs for failed auth attempts
   - Verify RLS policies are working correctly

## Common Issues

### "Email not confirmed"
- **Solution**: Check email inbox or manually confirm in Supabase Dashboard

### "Invalid login credentials"
- **Solution**: Verify email is confirmed and password is correct

### Redirected to login immediately after logging in
- **Solution**: Check that cookies are enabled and session is being set correctly

### "User already registered"
- **Solution**: Use the login page instead, or use a different email

### Dev mode not working
- **Solution**: Ensure `NEXT_PUBLIC_DEV_MODE=true` and restart dev server

## Test Checklist

Use this checklist to ensure all authentication features are working:

- [ ] Sign up with new account
- [ ] Receive confirmation email
- [ ] Confirm email via link
- [ ] Profile is automatically created
- [ ] Log in with confirmed account
- [ ] Access protected routes
- [ ] Session persists across refreshes
- [ ] Log out successfully
- [ ] Cannot access protected routes after logout
- [ ] Error messages display correctly
- [ ] Password validation works
- [ ] Dev mode bypass works (development only)
- [ ] Dev mode is disabled in production

## Credentials for Testing

### Development Test User
- **Email**: `dev@test.com`
- **Password**: `TestUser123!`
- **Display Name**: `Dev Test User`

**Note**: You need to create this user through the sign-up flow first, then confirm the email.

### Creating Additional Test Users

You can create additional test users by:
1. Using the sign-up form with different emails
2. Or running the script `scripts/005_create_test_user.sql` and modifying the credentials

## Security Reminders

- ✅ Always disable dev mode in production
- ✅ Never commit real credentials to version control
- ✅ Use strong passwords for test accounts
- ✅ Regularly rotate test credentials
- ✅ Monitor authentication logs for suspicious activity
- ✅ Keep Supabase and dependencies up to date
