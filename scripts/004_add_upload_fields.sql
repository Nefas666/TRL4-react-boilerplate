-- Add fields for file uploads to resources table
alter table public.resources
  add column if not exists file_url text,
  add column if not exists file_type text,
  add column if not exists file_size bigint,
  add column if not exists uploaded_by uuid references auth.users(id) on delete set null;

-- Create index for uploaded_by
create index if not exists idx_resources_uploaded_by on public.resources(uploaded_by);

-- Update RLS policies for resources table
alter table public.resources enable row level security;

-- Allow authenticated users to read all resources
create policy "Resources are viewable by everyone"
  on public.resources for select
  using (true);

-- Allow authenticated users to upload resources
create policy "Authenticated users can upload resources"
  on public.resources for insert
  with check (auth.uid() = uploaded_by);

-- Allow users to update their own resources
create policy "Users can update their own resources"
  on public.resources for update
  using (auth.uid() = uploaded_by);

-- Allow users to delete their own resources
create policy "Users can delete their own resources"
  on public.resources for delete
  using (auth.uid() = uploaded_by);
