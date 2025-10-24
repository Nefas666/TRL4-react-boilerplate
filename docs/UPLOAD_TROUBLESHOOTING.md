# Upload System Troubleshooting

## Common Issues and Solutions

### 1. "Database schema error" when uploading files

**Error Message:**
\`\`\`
Database schema error. Please run the migration script 004_add_upload_fields.sql first.
\`\`\`

**Cause:** The database is missing the required columns for file uploads (file_url, file_type, file_size, uploaded_by).

**Solution:**
1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Open the file `scripts/004_add_upload_fields.sql` from your project
4. Copy and paste the entire SQL script into the Supabase SQL Editor
5. Click "Run" to execute the migration
6. Try uploading again

**Alternative Solution (using v0):**
If you're in the v0 interface, the SQL script can be executed directly from the scripts folder.

### 2. "Invalid file type" error

**Supported File Types:**
- PDF: `.pdf` (application/pdf)
- Video: `.mp4`, `.webm`, `.ogg`, `.mov`

**Maximum File Size:** 100MB

### 3. Upload succeeds but file doesn't appear

**Possible Causes:**
1. Row Level Security (RLS) policies blocking read access
2. Browser cache showing old data

**Solution:**
1. Check that the migration script `004_add_upload_fields.sql` was run completely (it includes RLS policies)
2. Refresh the page (hard refresh: Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors

### 4. "Unauthorized" error

**Cause:** User is not logged in or session has expired.

**Solution:**
1. Log out and log back in
2. Check that authentication is working correctly
3. Verify that the session cookie is being set

## Database Schema Requirements

The resources table needs these columns for file uploads:

\`\`\`sql
file_url text           -- URL of the uploaded file in Vercel Blob
file_type text          -- MIME type of the file
file_size bigint        -- Size of the file in bytes
uploaded_by uuid        -- Reference to the user who uploaded the file
\`\`\`

## Checking Upload Status

To verify uploads are working:

1. **Check Vercel Blob Storage:**
   - Go to your Vercel dashboard
   - Navigate to Storage → Blob
   - Verify files are being uploaded

2. **Check Supabase Database:**
   - Go to Supabase dashboard
   - Navigate to Table Editor → resources
   - Verify new rows are being created with file_url populated

3. **Check Browser Console:**
   - Open browser DevTools (F12)
   - Look for `[v0]` prefixed logs showing upload progress
   - Check for any error messages

## Need More Help?

If you're still experiencing issues:
1. Check the browser console for detailed error messages
2. Check the Vercel deployment logs
3. Verify all environment variables are set correctly
4. Ensure Supabase and Blob integrations are properly connected
