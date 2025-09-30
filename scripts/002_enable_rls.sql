-- Enable Row Level Security on all tables
alter table public.profiles enable row level security;
alter table public.resources enable row level security;
alter table public.chat_conversations enable row level security;
alter table public.chat_messages enable row level security;
alter table public.community_posts enable row level security;
alter table public.community_comments enable row level security;

-- Profiles policies
create policy "profiles_select_all"
  on public.profiles for select
  using (true);

create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- Resources policies (public read, admin write)
create policy "resources_select_all"
  on public.resources for select
  using (true);

-- Chat conversations policies
create policy "chat_conversations_select_own"
  on public.chat_conversations for select
  using (auth.uid() = user_id);

create policy "chat_conversations_insert_own"
  on public.chat_conversations for insert
  with check (auth.uid() = user_id);

create policy "chat_conversations_update_own"
  on public.chat_conversations for update
  using (auth.uid() = user_id);

create policy "chat_conversations_delete_own"
  on public.chat_conversations for delete
  using (auth.uid() = user_id);

-- Chat messages policies
create policy "chat_messages_select_own"
  on public.chat_messages for select
  using (
    exists (
      select 1 from public.chat_conversations
      where id = chat_messages.conversation_id
      and user_id = auth.uid()
    )
  );

create policy "chat_messages_insert_own"
  on public.chat_messages for insert
  with check (
    exists (
      select 1 from public.chat_conversations
      where id = chat_messages.conversation_id
      and user_id = auth.uid()
    )
  );

-- Community posts policies
create policy "community_posts_select_all"
  on public.community_posts for select
  using (true);

create policy "community_posts_insert_own"
  on public.community_posts for insert
  with check (auth.uid() = author_id);

create policy "community_posts_update_own"
  on public.community_posts for update
  using (auth.uid() = author_id);

create policy "community_posts_delete_own"
  on public.community_posts for delete
  using (auth.uid() = author_id);

-- Community comments policies
create policy "community_comments_select_all"
  on public.community_comments for select
  using (true);

create policy "community_comments_insert_own"
  on public.community_comments for insert
  with check (auth.uid() = author_id);

create policy "community_comments_update_own"
  on public.community_comments for update
  using (auth.uid() = author_id);

create policy "community_comments_delete_own"
  on public.community_comments for delete
  using (auth.uid() = author_id);
