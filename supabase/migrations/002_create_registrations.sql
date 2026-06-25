create extension if not exists pgcrypto;

-- Primary creation path
create table if not exists registrations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  created_at timestamptz not null default now()
);

-- Fallback path for partially existing table structures
alter table registrations
  add column if not exists id uuid,
  add column if not exists name text,
  add column if not exists email text,
  add column if not exists phone text,
  add column if not exists created_at timestamptz;

alter table registrations
  alter column id set default gen_random_uuid(),
  alter column created_at set default now();

-- Apply PK only if missing (safe on reruns)
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'registrations'::regclass
      and contype = 'p'
  ) then
    alter table registrations add constraint registrations_pkey primary key (id);
  end if;
end $$;

create index if not exists registrations_email_idx on registrations (email);
create index if not exists registrations_created_at_idx on registrations (created_at desc);
