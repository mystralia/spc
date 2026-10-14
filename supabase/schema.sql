-- SurPoids Championship : schéma Supabase (à coller dans SQL Editor, tout d'un coup)
-- Principe : une table par sujet, données brutes en JSON là où le modèle de l'appli est déjà un objet
-- (zones, perfs, cosmétiques équipés). Tout ce qui se calcule (note, attributs, ceinture) n'est pas stocké.

create extension if not exists pgcrypto;

-- 1. Participants (un par pote). auth_user = compte de connexion Supabase (e-mail)
create table if not exists participants (
  id            text primary key,                  -- 'p1'..'p6' pour garder les identifiants de l'appli
  auth_user     uuid unique references auth.users(id) on delete set null,
  prenom        text not null,
  naissance     date,
  sexe          text check (sexe in ('H','F')),
  taille        numeric,
  objectif      text,
  admin         boolean not null default false,
  hors_concours boolean not null default false,
  avatar        text,                              -- photo de profil (URL Storage)
  devise        text check (char_length(devise) <= 30),
  equip         jsonb not null default '{}'::jsonb, -- {badges:[...],contour,titre,cadre,motif,theme,avatarOff}
  machines      jsonb not null default '{}'::jsonb, -- {cle:{v,date}} max par machine
  machine_log   jsonb not null default '[]'::jsonb,
  goals         jsonb,                             -- objectifs en cours {k:valeur}, goals_valide bool dedans
  flags         jsonb not null default '{}'::jsonb, -- carte révélée, cérémonie vue, dispoLog...
  secret        jsonb not null default '{}'::jsonb, -- traces badges secrets (ouvertures, aides lues, vues)
  updated_at    timestamptz not null default now()
);

-- 2. Pesées (une par participant et par mois)
create table if not exists pesees (
  id            text primary key,                  -- 'p3-2026-10'
  participant   text not null references participants(id) on delete cascade,
  mois          text not null,                     -- '2026-10'
  poids         numeric, gras numeric, muscle numeric, os numeric, eau numeric,
  visc          numeric, bmr numeric, age_meta numeric,
  seg_m         jsonb, seg_g jsonb,                -- zones muscle / gras
  mens          jsonb,                             -- mètre ruban
  egym          jsonb,                             -- perfs EGYM du jour
  perf          jsonb,                             -- perfs paliers (pompes, escaliers...)
  photos        jsonb,                             -- URLs Storage
  goals_result  jsonb,                             -- bilan des objectifs du mois
  pre           jsonb,                             -- badges/rang avant la pesée (pour la cérémonie)
  present       boolean,
  saisi_par     text references participants(id),
  created_at    timestamptz not null default now(),
  unique (participant, mois)
);

-- 3. Badges acquis (un par badge, permanent)
create table if not exists badges_acquis (
  participant   text not null references participants(id) on delete cascade,
  badge         text not null,
  mois          text,
  obtenu_le     timestamptz not null default now(),
  primary key (participant, badge)
);

-- 4. Pronostics (un par pronostiqueur et par mois)
create table if not exists pronostics (
  participant   text not null references participants(id) on delete cascade,
  mois          text not null,
  data          jsonb not null,                    -- {stats:{p1:{poids,gras,muscle}},belt,kfc,plume}
  locked_at     timestamptz,
  seen_by       jsonb not null default '[]'::jsonb,
  primary key (participant, mois)
);

-- 5. Commentaires et réactions
create table if not exists commentaires (
  id            uuid primary key default gen_random_uuid(),
  cle           text not null,                     -- 'card:p3', 'feed:xxx', ...
  auteur        text not null references participants(id) on delete cascade,
  texte         text,
  emoji         text,
  created_at    timestamptz not null default now()
);
create index if not exists commentaires_cle on commentaires(cle);

-- 6. Réglages (une seule ligne) : pesée, saison, palmarès
create table if not exists reglages (
  id            int primary key default 1 check (id = 1),
  pesee         jsonb not null default '{}'::jsonb, -- {date,heure,revealAt,revealMois,forceOpen,dispos,lastDispos}
  season        jsonb not null default '{"num":1,"start":"2026-09","end":"2026-11"}'::jsonb,
  palmares      jsonb not null default '[]'::jsonb,
  updated_at    timestamptz not null default now()
);
insert into reglages (id) values (1) on conflict do nothing;

-- Horodatage automatique
create or replace function touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists participants_touch on participants;
create trigger participants_touch before update on participants for each row execute function touch_updated_at();
drop trigger if exists reglages_touch on reglages;
create trigger reglages_touch before update on reglages for each row execute function touch_updated_at();

-- Qui suis-je ? (identifiant participant du compte connecté) et suis-je admin ?
create or replace function me() returns text language sql stable security definer as $$
  select id from participants where auth_user = auth.uid()
$$;
create or replace function is_admin() returns boolean language sql stable security definer as $$
  select coalesce((select admin from participants where auth_user = auth.uid()), false)
$$;

-- ---------- Le vigile : règles d'accès (RLS) ----------
alter table participants  enable row level security;
alter table pesees        enable row level security;
alter table badges_acquis enable row level security;
alter table pronostics    enable row level security;
alter table commentaires  enable row level security;
alter table reglages      enable row level security;

-- Tout le monde (connecté) lit tout : c'est le principe du jeu
create policy "lire participants"  on participants  for select to authenticated using (true);
create policy "lire pesees"        on pesees        for select to authenticated using (true);
create policy "lire badges"        on badges_acquis for select to authenticated using (true);
create policy "lire pronos"        on pronostics    for select to authenticated using (true);
create policy "lire commentaires"  on commentaires  for select to authenticated using (true);
create policy "lire reglages"      on reglages      for select to authenticated using (true);

-- Chacun gère son propre profil (cosmétiques, devise, objectifs, max machines), l'admin gère tout
create policy "modifier son profil" on participants for update to authenticated
  using (id = me() or is_admin()) with check (id = me() or is_admin());
create policy "creer participant (admin)" on participants for insert to authenticated with check (is_admin());
create policy "supprimer participant (admin)" on participants for delete to authenticated using (is_admin());

-- Pesées : admin seulement
create policy "saisir pesee (admin)"   on pesees for insert to authenticated with check (is_admin());
create policy "modifier pesee (admin)" on pesees for update to authenticated using (is_admin());
create policy "supprimer pesee (admin)" on pesees for delete to authenticated using (is_admin());

-- Badges : écrits par l'appli pour soi-même (au recalcul) ou par l'admin
create policy "gagner badge" on badges_acquis for insert to authenticated with check (participant = me() or is_admin());
create policy "retirer badge (admin)" on badges_acquis for delete to authenticated using (is_admin());

-- Pronostics : chacun les siens, et plus modifiables une fois validés
create policy "creer prono"    on pronostics for insert to authenticated with check (participant = me());
create policy "modifier prono" on pronostics for update to authenticated
  using (participant = me() and locked_at is null) with check (participant = me());
-- « vu par » : on note que je viens de lire le pronostic d'un autre, sans pouvoir toucher au reste
create or replace function prono_seen(p_participant text, p_mois text) returns void language plpgsql security definer as $$
begin
  update pronostics set seen_by = (select to_jsonb(array(select distinct x from jsonb_array_elements_text(seen_by || to_jsonb(array[me()])) x)))
  where participant = p_participant and mois = p_mois and locked_at is not null;
end $$;

-- Commentaires : chacun écrit en son nom, supprime les siens (admin tout)
create policy "ecrire commentaire"    on commentaires for insert to authenticated with check (auteur = me());
create policy "supprimer commentaire" on commentaires for delete to authenticated using (auteur = me() or is_admin());

-- Réglages : admin, sauf ses propres dispos (gérées via une fonction dédiée)
create policy "modifier reglages (admin)" on reglages for update to authenticated using (is_admin());
create or replace function set_dispo(reponse text) returns void language plpgsql security definer as $$
begin
  update reglages set pesee = jsonb_set(coalesce(pesee,'{}'::jsonb), array['dispos', me()], to_jsonb(reponse), true) where id = 1;
end $$;

-- Temps réel : tout le monde voit les changements sans recharger
alter publication supabase_realtime add table participants, pesees, badges_acquis, pronostics, commentaires, reglages;

-- Photos (profil et pesées) : un bucket privé lisible par les participants connectés
insert into storage.buckets (id, name, public) values ('photos','photos', false) on conflict do nothing;
create policy "photos lire"    on storage.objects for select to authenticated using (bucket_id = 'photos');
create policy "photos ecrire"  on storage.objects for insert to authenticated with check (bucket_id = 'photos');
create policy "photos modifier" on storage.objects for update to authenticated using (bucket_id = 'photos');
