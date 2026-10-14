-- Correctif 2 (14/10/2026) : réclamations de performance (preuve photo ou vidéo, validation)
create table if not exists reclamations (
  id            text primary key,
  participant   text not null references participants(id) on delete cascade,
  exercice      text not null,
  valeur        numeric,
  media         text,                             -- chemin dans le bucket photos (claims/<id>.jpg|mp4)
  media_type    text,
  note          text,
  statut        text not null default 'pending' check (statut in ('pending','ok','no')),
  created_at    timestamptz not null default now(),
  decided_by    text references participants(id),
  decided_at    timestamptz,
  seen          boolean,
  extra         jsonb not null default '{}'::jsonb
);
alter table reclamations enable row level security;

-- Validateur = admin ou participant marqué « validateur » dans son profil (réglé par l'admin)
create or replace function is_validator() returns boolean language sql stable security definer as $$
  select coalesce((select admin or coalesce((extra->>'validateur')::boolean, false) from participants where auth_user = auth.uid()), false)
$$;

create policy "lire reclamations" on reclamations for select to authenticated using (true);
create policy "creer reclamation" on reclamations for insert to authenticated with check (participant = me() and statut = 'pending');
create policy "modifier reclamation" on reclamations for update to authenticated
  using (participant = me() or is_validator()) with check (participant = me() or is_validator());
create policy "supprimer reclamation" on reclamations for delete to authenticated using ((participant = me() and statut = 'pending') or is_admin());

-- Un participant ne décide pas lui-même de sa réclamation
create or replace function reclamations_guard() returns trigger language plpgsql as $$
begin
  if coalesce(auth.role(),'') = 'authenticated' and not is_validator() then
    if new.statut is distinct from old.statut or new.decided_by is distinct from old.decided_by then
      raise exception 'validation réservée aux validateurs';
    end if;
  end if;
  return new;
end $$;
drop trigger if exists reclamations_guard_t on reclamations;
create trigger reclamations_guard_t before update on reclamations for each row execute function reclamations_guard();

alter publication supabase_realtime add table reclamations;

-- Pronostics : on peut compléter après validation (les réponses déjà validées sont figées par l'appli)
drop policy if exists "modifier prono" on pronostics;
create policy "modifier prono" on pronostics for update to authenticated using (participant = me()) with check (participant = me());
