-- Create storage bucket for intro/welcome videos
insert into storage.buckets (id, name, public)
values ('intro-videos', 'intro-videos', true)
on conflict (id) do nothing;

-- Set up storage policies for the bucket
create policy "Public Access for Intro Videos"
on storage.objects for select
using ( bucket_id = 'intro-videos' );

create policy "Authenticated users can upload intro videos"
on storage.objects for insert
with check (
  bucket_id = 'intro-videos' 
  and auth.role() = 'authenticated'
);

create policy "Users can update own intro videos"
on storage.objects for update
using ( 
  bucket_id = 'intro-videos' 
  and auth.uid()::text = (storage.foldername(name))[1]
);

create policy "Users can delete own intro videos"
on storage.objects for delete
using ( 
  bucket_id = 'intro-videos' 
  and auth.uid()::text = (storage.foldername(name))[1]
);
