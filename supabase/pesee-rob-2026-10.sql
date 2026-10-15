-- Rob, pesée d'octobre 2026 : compléments relevés dans l'appli EGYM (analyse du 28 septembre 2026, presse à cuisses du 3 octobre)
update pesees set
  eau = 52.6,
  bmr = 1867,
  age_meta = 45,
  egym = coalesce(egym,'{}'::jsonb) || '{"bioAge":49,"forceAge":53,"metaAge":45,"tirageV":79,"devAssis":61,"devEpaules":45,"tirageH":67,"adducteur":67,"abdos":44,"lombaires":102,"extJambes":111,"presse":238,"flexJambes":65}'::jsonb
where participant = 'p2' and mois = '2026-10';
select id, poids, gras, muscle, eau, bmr, age_meta, visc, egym from pesees where participant = 'p2' and mois = '2026-10';
