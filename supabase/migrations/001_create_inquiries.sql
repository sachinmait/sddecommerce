create extension if not exists pgcrypto;

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(trim(full_name)) between 2 and 120),
  email text not null,
  phone text,
  intent_type text not null check (intent_type in ('register_interest', 'ask_question')),
  message text not null check (char_length(trim(message)) between 10 and 2000),
  source_page text not null,
  duplicate_signature text not null,
  status text not null default 'received' check (status in ('received', 'duplicate_flagged', 'acknowledged', 'closed')),
  submitted_at timestamptz not null default now()
);

create index if not exists inquiries_submitted_at_idx on inquiries (submitted_at desc);
create index if not exists inquiries_duplicate_signature_idx on inquiries (duplicate_signature, submitted_at desc);
