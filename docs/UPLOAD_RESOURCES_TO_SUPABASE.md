# Uploading Learning Resources to Supabase Storage

This guide explains how to upload the PDF learning resources to your Supabase storage bucket.

## Prerequisites

1. Run the storage bucket creation script:
   \`\`\`bash
   # Execute script 006_create_storage_bucket.sql in your Supabase SQL editor
   \`\`\`

2. Run the seed script to create resource entries:
   \`\`\`bash
   # Execute script 007_seed_real_resources.sql in your Supabase SQL editor
   \`\`\`

## Step 1: Access Supabase Storage

1. Go to your Supabase project dashboard
2. Navigate to **Storage** in the left sidebar
3. You should see a bucket named `learning-resources`

## Step 2: Upload PDF Files

Upload the following PDF files to the `learning-resources` bucket with these exact filenames:

1. **regenerative_agriculture.pdf**
   - Source: "What Is Regenerative Agriculture? A Review of Scholar and Practitioner Definitions"
   
2. **ipcc_land_report.pdf**
   - Source: "IPCC Special Report on climate change, desertification, land degradation..."
   
3. **compost_truth.pdf**
   - Source: "Compost: Truth or Consequences"
   
4. **soil_health_principles.pdf**
   - Source: "Soil Health Principles (USDA NRCS)"
   
5. **ai_sustainable_farming.pdf**
   - Source: "AI for Sustainable Farming (EU JRC)"
   
6. **biodiversity_mapping.pdf**
   - Source: "Biodiversity Mapping Starter Kit"
   
7. **eu_green_opportunities.pdf**
   - Source: "EU Opportunities for Green Entrepreneurship"

## Step 3: Update Resource URLs

After uploading, get the public URL for each file:

1. In Supabase Storage, click on each uploaded file
2. Click "Get URL" or "Copy URL"
3. The URL format will be: `https://[your-project].supabase.co/storage/v1/object/public/learning-resources/[filename].pdf`

## Step 4: Update Database Records

Run this SQL script, replacing the placeholder URLs with your actual Supabase storage URLs:

\`\`\`sql
-- Update file URLs with actual Supabase storage URLs
-- Replace [YOUR_PROJECT_ID] with your actual Supabase project ID

UPDATE public.resources 
SET file_url = 'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/learning-resources/regenerative_agriculture.pdf'
WHERE file_url = 'PLACEHOLDER_regenerative_agriculture.pdf';

UPDATE public.resources 
SET file_url = 'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/learning-resources/ipcc_land_report.pdf'
WHERE file_url = 'PLACEHOLDER_ipcc_land_report.pdf';

UPDATE public.resources 
SET file_url = 'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/learning-resources/compost_truth.pdf'
WHERE file_url = 'PLACEHOLDER_compost_truth.pdf';

UPDATE public.resources 
SET file_url = 'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/learning-resources/soil_health_principles.pdf'
WHERE file_url = 'PLACEHOLDER_soil_health_principles.pdf';

UPDATE public.resources 
SET file_url = 'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/learning-resources/ai_sustainable_farming.pdf'
WHERE file_url = 'PLACEHOLDER_ai_sustainable_farming.pdf';

UPDATE public.resources 
SET file_url = 'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/learning-resources/biodiversity_mapping.pdf'
WHERE file_url = 'PLACEHOLDER_biodiversity_mapping.pdf';

UPDATE public.resources 
SET file_url = 'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/learning-resources/eu_green_opportunities.pdf'
WHERE file_url = 'PLACEHOLDER_eu_green_opportunities.pdf';
\`\`\`

## Step 5: Verify

1. Go to your app's Resources page
2. You should see all 9 resources (2 external links + 7 PDFs)
3. Click on each resource to verify the links work correctly

## Notes

- The storage bucket is configured as **public**, so anyone can view/download the files
- Only authenticated users can upload new files
- Users can only update/delete their own uploaded files
- File size limit is set to 4MB per file in the upload interface
- Supported file types: PDF only for these learning resources

## Troubleshooting

**Issue**: Files won't upload
- Check that the bucket exists and is public
- Verify storage policies are correctly set
- Ensure file size is under 4MB

**Issue**: URLs don't work
- Verify the bucket name is exactly `learning-resources`
- Check that files are in the root of the bucket (not in subfolders)
- Ensure the public URL format matches your Supabase project

**Issue**: Resources don't appear in the app
- Run the seed script again
- Check that the database connection is working
- Verify RLS policies allow reading from the resources table
