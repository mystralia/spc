-- Correctif 7 (17/10/2026) : la table commentaires n'avait pas de colonne extra (réponses), tout commentaire était refusé depuis le 14/10 au soir
alter table commentaires add column if not exists extra jsonb not null default '{}'::jsonb;
