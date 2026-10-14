# SPC (SurPoids Championship)

- Appli : `index.html`, un seul fichier (HTML, CSS, JS vanille), environ 560 ko. Hébergée sur GitHub Pages : https://mystralia.github.io/spc/ (branche main, dossier racine). Chaque push sur main met la page à jour en une à deux minutes.
- Manifeste PWA réel : `manifest.json`, icônes `icon-180/192/512.png` (utilisés quand l'hôte finit par github.io, sinon le manifeste est injecté en data URL).
- Supabase : projet `spc` (organisation mystralia, région Paris, eu-west-3), URL https://pusoxpvhdklicqrjqhve.supabase.co, clé publique `sb_publishable_gzh5lXEuHzg8LrsoiCP23A_DCl14OPC`. Schéma et règles d'accès dans `supabase/schema.sql` (déjà exécuté le 14/10/2026). Jamais de clé secrète ni de mot de passe de base dans ce dépôt.
- Règles d'accès : tout participant connecté lit tout ; chacun modifie son profil, ses pronostics (jusqu'à validation), ses dispos (`set_dispo`), ses commentaires ; l'admin seul saisit les pesées et les réglages.
- Style : français, pas de tirets longs, pas d'acronymes seuls.
