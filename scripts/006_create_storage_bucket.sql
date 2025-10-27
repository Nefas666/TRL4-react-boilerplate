-- Create storage bucket for learning resources
insert into storage.buckets (id, name, public)
values ('learning-resources', 'learning-resources', true)
on conflict (id) do nothing;

-- Set up storage policies for the bucket
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'learning-resources' );

create policy "Authenticated users can upload"
on storage.objects for insert
with check (
  bucket_id = 'learning-resources' 
  and auth.role() = 'authenticated'
);

create policy "Users can update own files"
on storage.objects for update
using ( 
  bucket_id = 'learning-resources' 
  and auth.uid()::text = (storage.foldername(name))[1]
);

create policy "Users can delete own files"
on storage.objects for delete
using ( 
  bucket_id = 'learning-resources' 
  and auth.uid()::text = (storage.foldername(name))[1]
);
