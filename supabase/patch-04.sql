-- Correctif 4 (14/10/2026) : chacun peut retirer ses réclamations, même validées (l'admin peut tout supprimer)
drop policy if exists "supprimer reclamation" on reclamations;
create policy "supprimer reclamation" on reclamations for delete to authenticated using (participant = me() or is_admin());
-- Un participant peut retirer ses propres badges de palier (quand il retire une réclamation validée)
create policy "retirer son badge" on badges_acquis for delete to authenticated using (participant = me() and badge like 'pf\_%');
