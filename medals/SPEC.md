# Médaillons dessinés, un par badge (spécification pour les dessinateurs)

Appli SurPoids Championship (`/home/claude/spc/index.html`). Les badges épinglés s'affichent sur la carte du joueur en médaillons de 46 px de large sur un fond coloré (bronze #A8693A, argent, or…). Chaque badge doit avoir SON dessin, unique, qui raconte ce que le badge récompense. Pas de combinaison mécanique forme + bordure : une petite illustration vectorielle par badge, silhouette comprise.

## Format

Un fichier JavaScript par lot, qui ajoute des entrées à l'objet global `MEDALS` :

```js
window.MEDALS=window.MEDALS||{};
Object.assign(MEDALS,{
  first:(c,l,d)=>`<path d="…" fill="url(#g)"/><path d="…" fill="#14171C"/>…`,
  profil:(c,l,d)=>`…`
});
```

- Clé = `id` du badge (fourni dans le JSON du lot).
- La fonction reçoit `c` (couleur du badge, hex), `l` (version claire de `c`, hex), `d` (version sombre de `c`, hex) et renvoie le contenu intérieur d'un `<svg viewBox="0 0 100 110">` (sans la balise svg).
- Un dégradé `url(#g)` est déjà défini par l'appli (clair → c → sombre, en diagonale) : l'utiliser pour la matière principale (métal, plaque, coupe…).
- Le cœur sombre des médaillons est `#14171C`. Les détails clairs en `#FFFFFF`, `#F6DE96` (doré), `l` ; les accents en `c`.
- Taille finale : 46 px de large, donc des formes franches, 3 à 8 éléments, traits ≥ 2 unités, pas de texte de plus de 3 caractères (et `font-family="Barlow,Oswald,sans-serif"`, `font-weight="700"`). Le dessin doit remplir la boîte 100×110 (marges ≤ 6).
- Pas d'`id` SVG autres que l'usage de `url(#g)` (plusieurs médaillons cohabitent dans la même page : pas de `<defs>` propres, pas d'ids).
- Pas de `<image>`, pas d'emoji, pas de script. Uniquement path, circle, rect, ellipse, line, polyline, polygon, text, g (avec transform).
- Les paliers de performance (fichiers `exos-*.json`) : une fonction par exercice, clé = `pf_<key>`, signature `(c,l,d,t)` avec `t` le palier 0 à 4 (Bronze, Argent, Or, Diamant, Légende). Le dessin de base montre le geste ou le matériel de l'exercice ; chaque palier AJOUTE des éléments dessinés (pas juste une couleur) : t0 scène seule dans une forme simple ; t1 scène + matériel ou détail supplémentaire + bord argenté ; t2 + lauriers ou ruban doré ; t3 + rayons, éclats, facettes de diamant ; t4 + couronne et flammes. Les cinq versions doivent être reconnaissables comme une famille mais différentes.

## Contrôle

Un harnais existe : `node /home/claude/spc/medals/render.js <fichier.js> <sortie.png> [--perf]` rend tous les médaillons du fichier (à 96 px et 46 px) dans une image. Regarde l'image (outil Read sur le PNG), corrige ce qui est illisible, trop fin, mal centré ou hors boîte, puis rends à nouveau. Vérifie aussi que le fichier se charge sans erreur (le harnais échoue sinon).

## Esprit

Le badge « Première pesée » : une balance sur son socle dans une plaque bombée, petit fanion. « Ceinture SPC » : une boucle de ceinture avec sa sangle qui dépasse. « Champion de saison » : la coupe elle-même, anses et lauriers. « -5 kg de gras » : une flamme qui fond en goutte. « 3 mois d'affilée » : trois pages de calendrier sur une chaîne circulaire. « Sous tous les angles » : un cadre de pellicule avec un objectif. Lis le `name` et le `desc` de chaque badge et invente la scène qui le dit en un coup d'œil. Humour bienvenu pour les badges moqueurs (KFC, Bide King, Zéro pointé…). Français, pas de tirets longs dans les commentaires.
