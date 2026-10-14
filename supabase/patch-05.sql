-- Correctif 5 (14/10/2026) : réclamation validée par l'arbitre seul (participants.extra->>'arbitre') ou par la majorité des votants ; refusée à la majorité de refus
update participants set extra = extra || '{"arbitre": true}'::jsonb where id = 'p6';

create or replace function reclamations_guard() returns trigger language plpgsql as $$
declare
  v jsonb := coalesce(new.extra->'votes', '{}'::jsonb);
  others int; oks int; nos int; arb int; need int;
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
  select count(*) into arb from jsonb_each_text(v) e join participants p on p.id = e.key where e.value = 'ok' and p.id <> new.participant and coalesce((p.extra->>'arbitre')::boolean, false);
  need := others / 2 + 1;
  if others = 0 then new.statut := 'pending';
  elsif arb > 0 or oks >= need then new.statut := 'ok';
  elsif nos >= need then new.statut := 'no';
  else new.statut := 'pending'; end if;
  if new.statut = 'pending' then new.decided_at := null;
  elsif new.statut is distinct from old.statut then new.decided_at := now(); new.seen := false; end if;
  return new;
end $$;
