-- Correctif 3 (14/10/2026) : réclamations validées par le vote de tous les autres participants
-- Les votes vivent dans extra->'votes' ({participant: 'ok'|'no'}). Statut calculé ici : un refus = refusée,
-- tous les autres participants « ok » = validée, sinon en attente.
drop policy if exists "modifier reclamation" on reclamations;
create policy "modifier reclamation" on reclamations for update to authenticated using (true) with check (true);

create or replace function reclamations_guard() returns trigger language plpgsql as $$
declare
  v jsonb := coalesce(new.extra->'votes', '{}'::jsonb);
  others int; oks int; nos int;
begin
  if coalesce(auth.role(),'') = 'authenticated' and not is_admin() then
    -- le déclarant ne vote pas pour sa propre réclamation : il peut seulement la marquer comme vue
    if me() = old.participant then
      if (to_jsonb(new) - 'seen') is distinct from (to_jsonb(old) - 'seen') then raise exception 'on ne vote pas pour sa propre réclamation'; end if;
      return new;
    end if;
    -- les autres ne touchent qu'à leur propre vote
    if new.participant <> old.participant or new.exercice <> old.exercice or new.valeur is distinct from old.valeur
       or new.media is distinct from old.media or new.note is distinct from old.note or new.created_at <> old.created_at
       or (new.extra - 'votes') is distinct from (old.extra - 'votes') then
      raise exception 'modification réservée';
    end if;
    if (v - me()) is distinct from (coalesce(old.extra->'votes','{}'::jsonb) - me()) then raise exception 'on ne vote que pour soi'; end if;
    if old.statut = 'ok' then raise exception 'réclamation déjà validée'; end if;
  end if;
  select count(*) into others from participants where id <> new.participant;
  select count(*) into oks from jsonb_each_text(v) e join participants p on p.id = e.key where e.value = 'ok' and p.id <> new.participant;
  select count(*) into nos from jsonb_each_text(v) e join participants p on p.id = e.key where e.value = 'no' and p.id <> new.participant;
  if nos > 0 then new.statut := 'no'; elsif others > 0 and oks >= others then new.statut := 'ok'; else new.statut := 'pending'; end if;
  if new.statut = 'pending' then new.decided_at := null;
  elsif new.statut is distinct from old.statut then new.decided_at := now(); new.seen := false; end if;
  return new;
end $$;
drop trigger if exists reclamations_guard_t on reclamations;
create trigger reclamations_guard_t before update on reclamations for each row execute function reclamations_guard();
