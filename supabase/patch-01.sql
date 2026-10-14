-- Correctif 1 (14/10/2026) : colonnes libres, identifiants de commentaires, dispos, droits admin, garde-fou
alter table participants add column if not exists extra jsonb not null default '{}'::jsonb;
alter table pesees add column if not exists extra jsonb not null default '{}'::jsonb;

-- Les commentaires gardent les identifiants courts générés par l'appli
alter table commentaires alter column id drop default;
alter table commentaires alter column id type text using id::text;

-- Dispos : un objet {date: 'ok'|'no'} par participant, ou null pour effacer
drop function if exists set_dispo(text);
create or replace function set_dispo(reponse jsonb) returns void language plpgsql security definer as $$
begin
  if me() is null then raise exception 'compte non relié'; end if;
  if reponse is null or reponse = 'null'::jsonb then
    update reglages set pesee = jsonb_set(coalesce(pesee,'{}'::jsonb), '{dispos}', coalesce(pesee->'dispos','{}'::jsonb) - me(), true) where id = 1;
  else
    update reglages set pesee = jsonb_set(jsonb_set(coalesce(pesee,'{}'::jsonb), '{dispos}', coalesce(pesee->'dispos','{}'::jsonb), true), array['dispos', me()], reponse, true) where id = 1;
  end if;
end $$;

-- L'admin peut tout faire sur les pronostics, commentaires et badges (restauration d'une sauvegarde, modération)
create policy "admin pronos" on pronostics for all to authenticated using (is_admin()) with check (is_admin());
create policy "admin commentaires" on commentaires for all to authenticated using (is_admin()) with check (is_admin());
create policy "admin badges" on badges_acquis for all to authenticated using (is_admin()) with check (is_admin());
create policy "mettre a jour commentaire" on commentaires for update to authenticated using (auteur = me()) with check (auteur = me());
create policy "modifier badge" on badges_acquis for update to authenticated using (participant = me()) with check (participant = me());

-- Garde-fou : un participant ne peut pas se nommer admin, se mettre hors concours ni changer son compte
create or replace function participants_guard() returns trigger language plpgsql as $$
begin
  if not is_admin() then
    if new.admin is distinct from old.admin or new.hors_concours is distinct from old.hors_concours or new.auth_user is distinct from old.auth_user then
      raise exception 'modification réservée à l''admin';
    end if;
  end if;
  return new;
end $$;
drop trigger if exists participants_guard_t on participants;
create trigger participants_guard_t before update on participants for each row execute function participants_guard();
