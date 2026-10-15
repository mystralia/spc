// Médaillons dessinés, un par badge (généré depuis medals/lot-*.js et medals/exos-*.js : ne pas modifier à la main, modifier les lots puis relancer medals/build.sh)
window.MEDALS=window.MEDALS||{};
// ---- medals/lot-1.js ----
// Lot 1 : 28 médaillons dessinés (badges communs). Un dessin par badge, silhouette comprise.
// Signature : (c, l, d) => intérieur d'un svg viewBox 0 0 100 110. Matière principale url(#g), cœur sombre #14171C.
window.MEDALS=window.MEDALS||{};
const F='font-family="Barlow,Oswald,sans-serif" font-weight="700"';
Object.assign(MEDALS,{

// Première pesée : balance sur socle dans une plaque bombée, petit fanion
first:(c,l,d)=>`<path d="M8 18 Q50 0 92 18 L92 96 Q50 110 8 96Z" fill="url(#g)"/><path d="M15 24 Q50 10 85 24 L85 92 Q50 103 15 92Z" fill="#14171C"/><rect x="30" y="80" width="40" height="6" rx="2" fill="${c}"/><rect x="46" y="48" width="8" height="34" fill="${c}"/><path d="M22 48 L78 48 L70 36 L30 36Z" fill="${l}"/><circle cx="50" cy="30" r="5" fill="#fff"/><path d="M54 14 L54 32 L66 20 L54 14Z" fill="#FFD93D"/>`,

// Fiche complète : carte d'identité sur sa pince, portrait, lignes, coche verte
profil:(c,l,d)=>`<rect x="36" y="4" width="28" height="16" rx="4" fill="${d}"/><rect x="44" y="8" width="12" height="5" rx="2" fill="#14171C"/><rect x="6" y="16" width="88" height="90" rx="9" fill="url(#g)"/><rect x="13" y="23" width="74" height="76" rx="5" fill="#14171C"/><circle cx="34" cy="48" r="12" fill="#fff"/><path d="M16 80 Q34 56 52 80Z" fill="#fff"/><rect x="58" y="40" width="24" height="7" rx="3.5" fill="${l}"/><rect x="58" y="53" width="24" height="7" rx="3.5" fill="${c}"/><rect x="58" y="66" width="16" height="7" rx="3.5" fill="${c}"/><circle cx="76" cy="86" r="12" fill="#6BCB77"/><path d="M69 86 L74 91 L84 80" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

// Visage découvert : téléphone en mode selfie, visage souriant, éclair de flash
selfie:(c,l,d)=>`<rect x="12" y="4" width="76" height="102" rx="12" fill="url(#g)"/><rect x="18" y="16" width="64" height="78" rx="5" fill="#14171C"/><circle cx="50" cy="10" r="2.5" fill="#14171C"/><rect x="38" y="98" width="24" height="4" rx="2" fill="#14171C"/><path d="M22 94 Q50 62 78 94Z" fill="${l}"/><circle cx="50" cy="50" r="19" fill="#F6DE96"/><circle cx="43" cy="46" r="3" fill="#14171C"/><circle cx="57" cy="46" r="3" fill="#14171C"/><path d="M41 56 Q50 65 59 56" stroke="#14171C" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M86 4 L89 13 L98 16 L89 19 L86 28 L83 19 L74 16 L83 13Z" fill="#FFD93D"/>`,

// Cibles fixées : cible posée sur son chevalet, pas encore de flèche
goalset:(c,l,d)=>`<path d="M50 52 L12 106 L22 106 L50 66 L78 106 L88 106Z" fill="${d}"/><rect x="46" y="60" width="8" height="46" fill="${d}"/><circle cx="50" cy="44" r="40" fill="url(#g)"/><circle cx="50" cy="44" r="31" fill="#fff"/><circle cx="50" cy="44" r="22" fill="${c}"/><circle cx="50" cy="44" r="13" fill="#fff"/><circle cx="50" cy="44" r="6" fill="#14171C"/>`,

// Présent à l'appel : main levée, manchette sombre, coche
dispo1:(c,l,d)=>`<g transform="rotate(-30 28 76)"><rect x="12" y="54" width="14" height="34" rx="7" fill="url(#g)"/></g><rect x="28" y="48" width="56" height="42" rx="10" fill="url(#g)"/><rect x="28" y="14" width="13" height="44" rx="6.5" fill="url(#g)"/><rect x="43" y="6" width="13" height="52" rx="6.5" fill="url(#g)"/><rect x="58" y="12" width="13" height="46" rx="6.5" fill="url(#g)"/><rect x="73" y="24" width="11" height="34" rx="5.5" fill="url(#g)"/><rect x="34" y="86" width="44" height="6" fill="${l}"/><rect x="34" y="90" width="44" height="16" rx="3" fill="#14171C"/><circle cx="86" cy="90" r="11" fill="#6BCB77"/><path d="M80 90 L85 95 L93 85" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

// Mètre ruban complet : boîtier rond de couturière, bouton central, ruban jaune gradué qui sort par la fente et se déroule en bas
ruban:(c,l,d)=>`<circle cx="58" cy="42" r="38" fill="url(#g)"/><circle cx="58" cy="42" r="29" fill="#14171C"/><circle cx="58" cy="42" r="22" fill="${d}"/><circle cx="58" cy="42" r="15" fill="#14171C"/><circle cx="58" cy="42" r="7" fill="${l}"/><rect x="26" y="66" width="18" height="22" rx="2" fill="${d}"/><rect x="4" y="84" width="80" height="22" rx="2" fill="#F6DE96"/>${[16,25,34,43,52,61,70].map((x,i)=>`<rect x="${x}" y="84" width="3.5" height="${i%2?7:12}" fill="#14171C"/>`).join('')}<rect x="2" y="81" width="9" height="28" rx="2" fill="#C3C8CE"/><rect x="5" y="84" width="3" height="22" fill="#14171C"/>`,

// Écrans relevés : moniteur sur pied, barres de performance et éclair
egym:(c,l,d)=>`<rect x="6" y="6" width="88" height="74" rx="8" fill="url(#g)"/><rect x="12" y="12" width="76" height="60" rx="4" fill="#14171C"/><rect x="42" y="80" width="16" height="12" fill="${d}"/><rect x="22" y="92" width="56" height="10" rx="5" fill="url(#g)"/><rect x="18" y="50" width="10" height="16" rx="2" fill="${c}"/><rect x="31" y="40" width="10" height="26" rx="2" fill="${l}"/><rect x="44" y="28" width="10" height="38" rx="2" fill="${c}"/><path d="M82 16 L64 44 L73 44 L66 68 L88 36 L78 36 L86 16Z" fill="#FFD93D"/>`,

// Sous tous les angles : cadre de pellicule perforé, objectif, deux arcs de rotation
photos:(c,l,d)=>`<rect x="6" y="8" width="88" height="94" rx="6" fill="url(#g)"/>${[12,28,44,60,76].map(x=>`<rect x="${x}" y="12" width="10" height="7" rx="1.5" fill="#14171C"/><rect x="${x}" y="91" width="10" height="7" rx="1.5" fill="#14171C"/>`).join('')}<rect x="12" y="24" width="76" height="62" rx="3" fill="#14171C"/><path d="M20 62 A30 30 0 0 1 36 32" stroke="${l}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M80 48 A30 30 0 0 1 64 78" stroke="${l}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="50" cy="55" r="22" fill="${d}"/><circle cx="50" cy="55" r="15" fill="${c}"/><circle cx="50" cy="55" r="8" fill="#14171C"/><circle cx="44" cy="48" r="3.5" fill="#fff"/>`,

// Analyse complète : silhouette segmentée par zone (bras, tronc, jambes) sur le plateau
tanita:(c,l,d)=>`<rect x="8" y="98" width="84" height="8" rx="4" fill="${d}"/><circle cx="50" cy="16" r="11" fill="url(#g)"/><path d="M33 30 L67 30 L71 66 L29 66Z" fill="url(#g)"/><path d="M31 31 L21 36 L10 72 L22 75 L31 48Z" fill="${l}"/><path d="M69 31 L79 36 L90 72 L78 75 L69 48Z" fill="${l}"/><rect x="29" y="69" width="19" height="29" rx="3" fill="${c}"/><rect x="52" y="69" width="19" height="29" rx="3" fill="${c}"/><circle cx="50" cy="48" r="5" fill="#14171C"/><rect x="48" y="32" width="4" height="34" fill="#14171C"/>`,

// Première perte : goutte dans laquelle une flèche descend
firstloss:(c,l,d)=>`<path d="M50 4 C50 4 6 48 6 66 A44 44 0 0 0 94 66 C94 48 50 4 50 4Z" fill="url(#g)"/><path d="M50 26 C50 26 20 56 20 68 A30 30 0 0 0 80 68 C80 56 50 26 50 26Z" fill="#14171C"/><rect x="43" y="42" width="14" height="28" fill="#fff"/><path d="M30 68 L70 68 L50 90Z" fill="#fff"/>`,

// -1 kg de gras : la flamme elle-même, cœur sombre, mention -1
fat1:(c,l,d)=>`<path d="M50 4 C38 20 12 34 8 60 C4 88 26 106 50 106 C74 106 96 88 92 60 C90 44 76 40 70 26 C66 40 58 40 58 30 C60 18 54 10 50 4Z" fill="url(#g)"/><path d="M50 44 C44 54 32 60 32 76 C32 90 40 96 50 96 C60 96 68 90 68 76 C68 64 58 60 56 50 C54 56 50 54 50 44Z" fill="#14171C"/><text x="50" y="90" text-anchor="middle" font-size="26" ${F} fill="#fff">-1</text>`,

// +0,5 kg de muscle : haltère en diagonale, pastille plus
mus05:(c,l,d)=>`<g transform="rotate(-45 50 55)"><rect x="2" y="50" width="96" height="10" rx="4" fill="${d}"/><rect x="2" y="40" width="12" height="30" rx="3" fill="url(#g)"/><rect x="86" y="40" width="12" height="30" rx="3" fill="url(#g)"/><rect x="16" y="36" width="14" height="38" rx="3" fill="url(#g)"/><rect x="70" y="36" width="14" height="38" rx="3" fill="url(#g)"/><rect x="32" y="47" width="6" height="16" rx="2" fill="${l}"/><rect x="62" y="47" width="6" height="16" rx="2" fill="${l}"/></g><circle cx="22" cy="22" r="15" fill="#14171C"/><rect x="14" y="19.5" width="16" height="5" rx="2" fill="#fff"/><rect x="19.5" y="14" width="5" height="16" rx="2" fill="#fff"/>`,

// -2 cm de taille : buste en sablier, ruban à la taille, flèches qui serrent
waist2:(c,l,d)=>`<path d="M14 6 L86 6 Q90 40 66 56 Q62 60 66 64 Q90 80 86 104 L14 104 Q10 80 34 64 Q38 60 34 56 Q10 40 14 6Z" fill="url(#g)"/><rect x="26" y="52" width="48" height="16" rx="2" fill="#F6DE96"/>${[32,40,48,56,64].map((x,i)=>`<rect x="${x}" y="52" width="3" height="${i%2?5:9}" fill="#14171C"/>`).join('')}<path d="M2 60 L16 50 L16 70Z" fill="#14171C"/><path d="M98 60 L84 50 L84 70Z" fill="#14171C"/><text x="50" y="96" text-anchor="middle" font-size="24" ${F} fill="#14171C">-2</text>`,

// Objectif atteint : cible avec une flèche plantée en plein centre
goal1:(c,l,d)=>`<circle cx="46" cy="60" r="44" fill="url(#g)"/><circle cx="46" cy="60" r="35" fill="#fff"/><circle cx="46" cy="60" r="25" fill="${c}"/><circle cx="46" cy="60" r="15" fill="#fff"/><circle cx="46" cy="60" r="7" fill="#14171C"/><g transform="rotate(-45 46 60)"><rect x="50" y="56.5" width="60" height="7" rx="3" fill="#14171C"/><polygon points="98,60 104,52 114,52 108,60 114,68 104,68" fill="${c}"/><polygon points="40,60 54,53 54,67" fill="#fff"/></g>`,

// Doublé : écusson, deux cibles côte à côte, une flèche plantée au centre de chacune (deux touches sur la même pesée)
obj2m:(c,l,d)=>{const cible=(x)=>`<circle cx="${x}" cy="62" r="19" fill="#fff"/><circle cx="${x}" cy="62" r="12" fill="${c}"/><circle cx="${x}" cy="62" r="5" fill="#14171C"/><g transform="translate(${x} 62) rotate(${x<50?-100:-80})"><rect x="3" y="-3.5" width="28" height="7" rx="3" fill="#F6DE96"/><polygon points="22,-9 34,-9 28,0 34,9 22,9 27,0" fill="#fff"/></g><circle cx="${x}" cy="62" r="3" fill="#FF6B6B"/>`;return `<path d="M6 10 L94 10 L94 58 Q94 92 50 106 Q6 92 6 58Z" fill="url(#g)"/><path d="M14 18 L86 18 L86 58 Q86 86 50 97 Q14 86 14 58Z" fill="#14171C"/>${cible(29)}${cible(71)}`;},

// Razzia : éclat en étoile, cinq flèches plantées de tous côtés
obj5m:(c,l,d)=>`<polygon points="${Array.from({length:24},(_,i)=>{const a=i*Math.PI/12-Math.PI/2,r=i%2?37:49;return (50+r*Math.cos(a)).toFixed(1)+','+(56+r*Math.sin(a)).toFixed(1)}).join(' ')}" fill="url(#g)"/><circle cx="50" cy="56" r="31" fill="#14171C"/>${[0,1,2,3,4].map(k=>`<g transform="translate(50 56) rotate(${-90+k*72})"><rect x="7" y="-2.5" width="20" height="5" fill="#F6DE96"/><polygon points="25,-7 35,-7 29,0 35,7 25,7" fill="#fff"/></g>`).join('')}<circle cx="50" cy="56" r="7" fill="#FF6B6B"/>`,

// Tous les objectifs : porte-bloc, cinq lignes toutes cochées
goalall:(c,l,d)=>`<rect x="8" y="12" width="84" height="94" rx="8" fill="url(#g)"/><rect x="34" y="4" width="32" height="16" rx="4" fill="${d}"/><rect x="44" y="8" width="12" height="5" rx="2" fill="#14171C"/><rect x="15" y="24" width="70" height="76" rx="4" fill="#14171C"/>${[28,42,56,70,84].map((y,i)=>`<rect x="21" y="${y}" width="11" height="11" rx="2" fill="#6BCB77"/><path d="M23.5 ${y+5.5} L27 ${y+9} L30.5 ${y+2.5}" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="38" y="${y+2.5}" width="${i%2?30:40}" height="6" rx="3" fill="${l}"/>`).join('')}`,

// Zéro pointé : copie corrigée, coin plié, zéro rouge et croix
zero:(c,l,d)=>`<path d="M12 4 L68 4 L90 26 L90 106 L12 106Z" fill="url(#g)"/><polygon points="68,4 68,26 90,26" fill="${d}"/><rect x="22" y="38" width="30" height="5" rx="2" fill="#14171C"/><rect x="22" y="50" width="22" height="5" rx="2" fill="#14171C"/><circle cx="60" cy="74" r="22" stroke="#FF6B6B" stroke-width="9" fill="none"/><path d="M22 14 L38 30 M38 14 L22 30" stroke="#FF6B6B" stroke-width="6" stroke-linecap="round"/><path d="M22 90 L38 100" stroke="#FF6B6B" stroke-width="5" stroke-linecap="round"/>`,

// Paroles en l'air : bulle de dialogue qui dit BLA, et des bulles de savon qui s'envolent (les promesses s'évaporent)
ivrogne:(c,l,d)=>`<path d="M6 12 Q6 4 14 4 L86 4 Q94 4 94 12 L94 64 Q94 72 86 72 L44 72 L20 92 L28 72 L14 72 Q6 72 6 64Z" fill="url(#g)"/><path d="M13 14 Q13 11 16 11 L84 11 Q87 11 87 14 L87 62 Q87 65 84 65 L16 65 Q13 65 13 62Z" fill="#14171C"/><text x="50" y="50" text-anchor="middle" font-size="30" ${F} fill="#fff">BLA</text><circle cx="62" cy="90" r="5" fill="none" stroke="${l}" stroke-width="3"/><circle cx="78" cy="96" r="8" fill="none" stroke="${l}" stroke-width="3"/><circle cx="90" cy="82" r="5" fill="none" stroke="${l}" stroke-width="3"/>`,

// Deux de suite : deux pages de calendrier côte à côte numérotées 1 et 2, reliées par un maillon de chaîne
streak2:(c,l,d)=>`<rect x="4" y="12" width="42" height="90" rx="5" fill="url(#g)"/><rect x="4" y="12" width="42" height="16" rx="5" fill="${d}"/><rect x="4" y="22" width="42" height="6" fill="${d}"/><rect x="9" y="32" width="32" height="64" rx="3" fill="#14171C"/><text x="25" y="76" text-anchor="middle" font-size="32" ${F} fill="#fff">1</text><rect x="54" y="12" width="42" height="90" rx="5" fill="url(#g)"/><rect x="54" y="12" width="42" height="16" rx="5" fill="${d}"/><rect x="54" y="22" width="42" height="6" fill="${d}"/><rect x="59" y="32" width="32" height="64" rx="3" fill="#14171C"/><text x="75" y="76" text-anchor="middle" font-size="32" ${F} fill="#fff">2</text><rect x="12" y="4" width="6" height="14" rx="3" fill="#C3C8CE"/><rect x="32" y="4" width="6" height="14" rx="3" fill="#C3C8CE"/><rect x="62" y="4" width="6" height="14" rx="3" fill="#C3C8CE"/><rect x="82" y="4" width="6" height="14" rx="3" fill="#C3C8CE"/><rect x="32" y="84" width="36" height="14" rx="7" fill="none" stroke="#F6DE96" stroke-width="5"/>`,

// Toujours là : carnet de trois tickets détachables, chacun coché
dispo3:(c,l,d)=>`<g transform="rotate(-10 50 55)"><rect x="14" y="7" width="72" height="96" rx="6" fill="url(#g)"/><line x1="18" y1="39" x2="82" y2="39" stroke="#14171C" stroke-width="2.5" stroke-dasharray="4 3"/><line x1="18" y1="71" x2="82" y2="71" stroke="#14171C" stroke-width="2.5" stroke-dasharray="4 3"/>${[12,44,76].map(y=>`<rect x="20" y="${y}" width="60" height="22" rx="3" fill="#14171C"/><path d="M38 ${y+11} L46 ${y+18} L62 ${y+4}" stroke="#6BCB77" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`).join('')}</g>`,

// Jour J : boîte cadeau qui s'ouvre, couvercle soulevé, rayons
reveal:(c,l,d)=>`<g stroke="#F6DE96" stroke-width="4" stroke-linecap="round"><line x1="50" y1="36" x2="50" y2="6"/><line x1="40" y1="36" x2="24" y2="12"/><line x1="60" y1="36" x2="76" y2="12"/><line x1="32" y1="40" x2="8" y2="30"/><line x1="68" y1="40" x2="92" y2="30"/></g><rect x="18" y="58" width="64" height="48" rx="4" fill="url(#g)"/><rect x="24" y="58" width="52" height="8" fill="#14171C"/><rect x="44" y="58" width="12" height="48" fill="${c}"/><g transform="rotate(-10 50 46)"><rect x="10" y="38" width="80" height="18" rx="4" fill="${l}"/><rect x="44" y="38" width="12" height="18" fill="${c}"/></g>`,

// Recomposition : flèche qui descend (gras) et flèche qui monte (muscle), côte à côte
recomp:(c,l,d)=>`<polygon points="14,6 40,6 40,66 50,66 27,104 4,66 14,66" fill="url(#g)"/><polygon points="20,14 34,14 34,70 40,70 27,92 14,70 20,70" fill="#14171C"/><polygon points="60,104 86,104 86,44 96,44 73,6 50,44 60,44" fill="url(#g)"/><polygon points="66,96 80,96 80,40 86,40 73,18 60,40 66,40" fill="#14171C"/><path d="M27 36 C27 36 20 45 20 50 A7 7 0 0 0 34 50 C34 45 27 36 27 36Z" fill="#FF9F43"/><rect x="66" y="64" width="14" height="5" rx="2" fill="#FF6B6B"/><rect x="70.5" y="59.5" width="5" height="14" rx="2" fill="#FF6B6B"/>`,

// Symétrie parfaite : balance à deux plateaux parfaitement à l'équilibre
sym:(c,l,d)=>`<rect x="20" y="96" width="60" height="10" rx="5" fill="url(#g)"/><rect x="45" y="18" width="10" height="80" fill="url(#g)"/><rect x="6" y="20" width="88" height="8" rx="4" fill="url(#g)"/><circle cx="50" cy="16" r="8" fill="${l}"/><g stroke="${l}" stroke-width="3" stroke-linecap="round"><line x1="16" y1="26" x2="4" y2="54"/><line x1="16" y1="26" x2="28" y2="54"/><line x1="84" y1="26" x2="72" y2="54"/><line x1="84" y1="26" x2="96" y2="54"/></g><path d="M2 54 L30 54 A14 11 0 0 1 2 54Z" fill="#14171C"/><path d="M70 54 L98 54 A14 11 0 0 1 70 54Z" fill="#14171C"/><circle cx="16" cy="48" r="6" fill="${c}"/><circle cx="84" cy="48" r="6" fill="${c}"/>`,

// Avant · après : deux photos instantanées, silhouette ronde puis fine, flèche
avantapres:(c,l,d)=>`<rect x="4" y="8" width="42" height="94" rx="4" fill="url(#g)"/><rect x="8" y="12" width="34" height="60" rx="2" fill="#14171C"/><circle cx="25" cy="27" r="7" fill="${l}"/><ellipse cx="25" cy="54" rx="14" ry="16" fill="${l}"/><rect x="54" y="8" width="42" height="94" rx="4" fill="url(#g)"/><rect x="58" y="12" width="34" height="60" rx="2" fill="#14171C"/><circle cx="75" cy="27" r="7" fill="#fff"/><rect x="67" y="37" width="16" height="33" rx="7" fill="#fff"/><polygon points="26,83 58,83 58,76 74,88 58,100 58,93 26,93" fill="#14171C"/>`,

// Dossier complet : chemise à onglet, feuille qui dépasse, sceau vert
dossier:(c,l,d)=>`<path d="M6 16 Q6 10 12 10 L36 10 Q40 10 42 13 L46 18 L88 18 Q94 18 94 24 L94 104 L6 104Z" fill="${d}"/><rect x="16" y="24" width="66" height="30" rx="2" fill="#fff"/><rect x="24" y="31" width="40" height="4" rx="2" fill="#C3C8CE"/><rect x="24" y="39" width="50" height="4" rx="2" fill="#C3C8CE"/><path d="M4 44 L96 44 L92 100 Q91 104 87 104 L13 104 Q9 104 8 100Z" fill="url(#g)"/><rect x="18" y="56" width="42" height="8" rx="4" fill="#14171C"/><rect x="18" y="70" width="30" height="8" rx="4" fill="#14171C"/><circle cx="74" cy="80" r="15" fill="#6BCB77"/><path d="M66 80 L72 86 L83 72" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

// Poulet du mois : un pilon de poulet en diagonale, croustillant
kfc1:(c,l,d)=>`<g transform="rotate(-45 50 55)"><rect x="0" y="50" width="52" height="10" rx="5" fill="#fff"/><circle cx="2" cy="47" r="7" fill="#fff"/><circle cx="2" cy="63" r="7" fill="#fff"/><path d="M44 55 C44 36 56 28 72 30 C92 32 102 46 98 62 C94 76 80 82 66 78 C52 74 44 68 44 55Z" fill="url(#g)"/><circle cx="62" cy="44" r="3.5" fill="${d}"/><circle cx="80" cy="50" r="3" fill="${d}"/><circle cx="72" cy="64" r="3.5" fill="${d}"/><circle cx="88" cy="64" r="2.5" fill="${d}"/><path d="M60 38 Q70 32 82 36" stroke="${l}" stroke-width="3" fill="none" stroke-linecap="round"/></g>`,

// Récidive : seau de poulet, deux pilons qui dépassent, chiffre 2
kfc2:(c,l,d)=>`<g transform="translate(34 30) rotate(-145)"><ellipse cx="0" cy="0" rx="15" ry="12" fill="${d}"/><rect x="12" y="-4" width="16" height="8" rx="4" fill="#fff"/><circle cx="28" cy="-5" r="4.5" fill="#fff"/><circle cx="28" cy="3" r="4.5" fill="#fff"/></g><g transform="translate(66 30) rotate(-35)"><ellipse cx="0" cy="0" rx="15" ry="12" fill="${d}"/><rect x="12" y="-4" width="16" height="8" rx="4" fill="#fff"/><circle cx="28" cy="-5" r="4.5" fill="#fff"/><circle cx="28" cy="3" r="4.5" fill="#fff"/></g><path d="M12 42 L88 42 L80 106 L20 106Z" fill="url(#g)"/><polygon points="28,42 38,42 34,106 24,106" fill="#14171C"/><polygon points="62,42 72,42 76,106 66,106" fill="#14171C"/><rect x="8" y="36" width="84" height="10" rx="4" fill="${d}"/><circle cx="50" cy="76" r="14" fill="#14171C"/><text x="50" y="85" text-anchor="middle" font-size="24" ${F} fill="#fff">2</text>`
});

// ---- medals/lot-2.js ----
// Lot 2 : 29 médaillons dessinés (badges rares et épiques). Un dessin par badge, silhouette comprise.
// Signature : (c, l, d) => intérieur d'un svg viewBox 0 0 100 110. Matière principale url(#g), cœur sombre #14171C.
window.MEDALS=window.MEDALS||{};
(()=>{
const F='font-family="Barlow,Oswald,sans-serif" font-weight="700"';
const T=(x,y,s,f,t)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${s}" ${F} fill="${f}">${t}</text>`;
// Flamme : sommet en (cx, base-h), bas arrondi de rayon w posé sur la ligne base
const flame=(cx,base,h,w,fill)=>{const y0=base-w;return `<path d="M${cx} ${base-h} C${cx-w*0.6} ${base-h*0.75} ${cx-w} ${y0-h*0.12} ${cx-w} ${y0} A${w} ${w} 0 0 0 ${cx+w} ${y0} C${cx+w} ${y0-h*0.18} ${cx+w*0.2} ${base-h*0.6} ${cx} ${base-h}Z" fill="${fill}"/>`;};
// Étoile à cinq branches centrée en (x, y), rayon r
const star=(x,y,r,f)=>`<polygon points="${[...Array(10)].map((_,i)=>{const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*0.45:r;return (x+rr*Math.cos(a)).toFixed(1)+','+(y+rr*Math.sin(a)).toFixed(1)}).join(' ')}" fill="${f}"/>`;
Object.assign(MEDALS,{

// Bide King : un burger couronné (le roi du burger), pain, salade, steak, fromage
bk1:(c,l,d)=>`<polygon points="24,32 30,10 42,24 50,4 58,24 70,10 76,32" fill="#F6DE96"/><rect x="24" y="30" width="52" height="8" rx="2" fill="#F6DE96"/><circle cx="36" cy="26" r="2.5" fill="${c}"/><circle cx="50" cy="20" r="2.5" fill="${c}"/><circle cx="64" cy="26" r="2.5" fill="${c}"/><path d="M6 62 Q6 36 50 36 Q94 36 94 62Z" fill="url(#g)"/><ellipse cx="30" cy="48" rx="4" ry="2.2" fill="#fff"/><ellipse cx="50" cy="44" rx="4" ry="2.2" fill="#fff"/><ellipse cx="70" cy="48" rx="4" ry="2.2" fill="#fff"/><rect x="6" y="64" width="88" height="16" rx="4" fill="#14171C"/><path d="M4 62 Q12 72 20 62 Q28 72 36 62 Q44 72 52 62 Q60 72 68 62 Q76 72 84 62 Q92 72 96 62 L96 56 L4 56Z" fill="#6BCB77"/><rect x="8" y="78" width="84" height="6" rx="3" fill="#FFD93D"/><path d="M10 82 L90 82 L90 92 Q90 106 76 106 L24 106 Q10 106 10 92Z" fill="url(#g)"/>`,

// Roi du bide : la bedaine qui déborde du tee-shirt, bouton qui saute, boucle de ceinture qui souffre
bk2:(c,l,d)=>`<path d="M14 4 L86 4 L84 22 Q50 34 16 22Z" fill="#14171C"/><rect x="8" y="82" width="84" height="24" rx="4" fill="#14171C"/><rect x="8" y="82" width="84" height="9" fill="${d}"/><path d="M20 20 C-2 32 -2 80 24 92 Q50 102 76 92 C102 80 102 32 80 20 Q50 32 20 20Z" fill="url(#g)"/><ellipse cx="34" cy="44" rx="9" ry="5" fill="${l}" transform="rotate(-30 34 44)"/><ellipse cx="50" cy="70" rx="4" ry="6" fill="#14171C"/><rect x="36" y="90" width="28" height="14" rx="3" fill="#F6DE96"/><rect x="42" y="94" width="16" height="6" rx="1.5" fill="#14171C"/><circle cx="90" cy="12" r="6" fill="#F6DE96"/><circle cx="88" cy="11" r="1.5" fill="#14171C"/><circle cx="92" cy="13" r="1.5" fill="#14171C"/><g stroke="#fff" stroke-width="3" stroke-linecap="round"><line x1="78" y1="6" x2="70" y2="10"/><line x1="80" y1="18" x2="72" y2="22"/></g>`,

// -5 kg de gras : la flamme fond, trois gouttes tombent dans une flaque, mention -5
fat5:(c,l,d)=>`<ellipse cx="50" cy="101" rx="44" ry="5" fill="url(#g)"/>${flame(50,78,74,34,'url(#g)')}${flame(50,74,40,17,'#14171C')}<path d="M24 64 C24 64 18 80 18 86 A6 6 0 0 0 30 86 C30 80 24 64 24 64Z" fill="${l}"/><path d="M76 64 C76 64 70 80 70 86 A6 6 0 0 0 82 86 C82 80 76 64 76 64Z" fill="${l}"/><path d="M50 76 C50 76 42 90 42 96 A8 8 0 0 0 58 96 C58 90 50 76 50 76Z" fill="${l}"/>${T(50,70,20,'#fff','-5')}`,

// +2 kg de muscle : un bras qui fléchit, biceps gonflé marqué +2, poing serré
mus2:(c,l,d)=>`<g transform="rotate(-14 76 90)"><rect x="62" y="30" width="28" height="64" rx="10" fill="url(#g)"/><rect x="58" y="6" width="36" height="30" rx="8" fill="${l}"/><g stroke="${d}" stroke-width="2.5" stroke-linecap="round"><line x1="67" y1="9" x2="67" y2="20"/><line x1="76" y1="8" x2="76" y2="20"/><line x1="85" y1="9" x2="85" y2="20"/><line x1="62" y1="26" x2="90" y2="26"/></g></g><rect x="6" y="72" width="86" height="32" rx="16" fill="url(#g)"/><rect x="6" y="72" width="22" height="32" rx="8" fill="#14171C"/><ellipse cx="44" cy="68" rx="26" ry="22" fill="url(#g)"/><ellipse cx="38" cy="56" rx="10" ry="5" fill="${l}"/>${T(44,78,26,'#14171C','+2')}`,

// +5 kg de muscle : une enclume, bloc massif marqué +5
mus5:(c,l,d)=>`<path d="M24 56 L76 56 L94 100 Q94 106 88 106 L12 106 Q6 106 6 100Z" fill="${d}"/><path d="M96 6 L44 6 Q8 8 4 24 Q8 40 36 40 L36 56 L64 56 L64 40 L96 40Z" fill="url(#g)"/><path d="M48 12 L90 12" stroke="${l}" stroke-width="4" stroke-linecap="round"/>${T(50,96,28,'#fff','+5')}`,

// -5 cm de taille : un mètre ruban refermé en boucle, embout métallique, -5 au centre
waist5:(c,l,d)=>`<circle cx="50" cy="55" r="42" fill="none" stroke="#F6DE96" stroke-width="12"/>${[...Array(12)].map((_,i)=>`<rect x="48.5" y="7" width="3" height="${i%3?5:9}" fill="#14171C" transform="rotate(${i*30} 50 55)"/>`).join('')}<g transform="rotate(-35 50 55)"><rect x="43" y="4" width="14" height="20" rx="2" fill="#C3C8CE"/><rect x="48.5" y="6" width="3" height="16" fill="#14171C"/></g><circle cx="50" cy="55" r="36" fill="#14171C"/>${T(50,67,34,'#fff','-5')}`,

// Ventre dégonflé : un ballon de baudruche qui se ride et laisse fuir son air par le nœud
visc2:(c,l,d)=>`<ellipse cx="50" cy="48" rx="44" ry="43" fill="none" stroke="${l}" stroke-width="3" stroke-dasharray="6 5"/><path d="M50 22 C66 22 78 36 78 52 C78 68 64 78 56 82 L58 90 L42 90 L44 82 C36 78 22 68 22 52 C22 36 34 22 50 22Z" fill="url(#g)"/><ellipse cx="38" cy="38" rx="6" ry="4" fill="#fff" transform="rotate(-40 38 38)"/><g stroke="#14171C" stroke-width="3" stroke-linecap="round"><line x1="34" y1="72" x2="44" y2="78"/><line x1="66" y1="72" x2="56" y2="78"/><line x1="28" y1="58" x2="36" y2="60"/><line x1="72" y1="58" x2="64" y2="60"/></g><polygon points="40,90 60,90 56,100 44,100" fill="${d}"/><path d="M60 96 Q72 90 80 98 Q88 106 96 96" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="90" cy="84" r="3" fill="#fff"/><circle cx="82" cy="78" r="2" fill="#fff"/>`,

// Poids plume : une grande plume en diagonale, rachis doré, barbes et entaille
plume1:(c,l,d)=>`<g transform="rotate(45 50 55)"><path d="M50 -10 C66 6 76 38 70 78 C68 90 60 100 54 106 L46 106 C40 100 32 90 30 78 C24 38 34 6 50 -10Z" fill="url(#g)"/><path d="M50 60 L64 60 L58 74Z" fill="#14171C"/><g stroke="#14171C" stroke-width="2.5" stroke-linecap="round"><line x1="50" y1="18" x2="66" y2="26"/><line x1="50" y1="34" x2="68" y2="44"/><line x1="50" y1="24" x2="36" y2="34"/><line x1="50" y1="42" x2="34" y2="54"/><line x1="50" y1="80" x2="38" y2="90"/></g><line x1="50" y1="-10" x2="50" y2="120" stroke="#F6DE96" stroke-width="4" stroke-linecap="round"/></g>`,

// Triple plume : trois plumes en éventail tenues par un anneau marqué 3
plume3:(c,l,d)=>{const f=(a)=>`<g transform="translate(50 100) rotate(${a})"><path d="M0 -22 C-13 -40 -14 -66 0 -90 C14 -66 13 -40 0 -22Z" fill="url(#g)"/><line x1="0" y1="-8" x2="0" y2="-90" stroke="#F6DE96" stroke-width="3" stroke-linecap="round"/><path d="M0 -60 L9 -58 L5 -50Z" fill="#14171C"/></g>`;return `${f(-32)}${f(32)}${f(0)}<circle cx="50" cy="94" r="12" fill="#14171C"/>${T(50,102,20,'#fff','3')}`;},

// Poids lourd : une kettlebell massive, anse sombre, reflet
lourd1:(c,l,d)=>`<path d="M26 48 A26 26 0 1 1 74 48" stroke="${d}" stroke-width="14" fill="none" stroke-linecap="round"/><circle cx="50" cy="68" r="38" fill="url(#g)"/><ellipse cx="36" cy="58" rx="7" ry="12" fill="${l}" transform="rotate(20 36 58)"/>`,

// Triple lourd : trois disques de fonte empilés, trou central sur le disque du dessus
lourd3:(c,l,d)=>[74,46,18].map((y,i)=>`<ellipse cx="50" cy="${y+16}" rx="44" ry="12" fill="${d}"/><rect x="6" y="${y}" width="88" height="16" fill="${d}"/><ellipse cx="50" cy="${y}" rx="44" ry="12" fill="url(#g)"/>${i==2?`<ellipse cx="50" cy="${y}" rx="9" ry="3.5" fill="#14171C"/>`:''}`).join(''),

// Ceinture SPC : grande boucle ovale sur sa sangle, étoiles, mention SPC
belt1:(c,l,d)=>`<rect x="2" y="40" width="96" height="30" rx="4" fill="${d}"/><line x1="8" y1="46" x2="92" y2="46" stroke="${l}" stroke-width="2" stroke-dasharray="4 3"/><line x1="8" y1="64" x2="92" y2="64" stroke="${l}" stroke-width="2" stroke-dasharray="4 3"/><circle cx="90" cy="55" r="3.5" fill="#14171C"/><circle cx="10" cy="55" r="3.5" fill="#14171C"/><ellipse cx="50" cy="55" rx="38" ry="47" fill="url(#g)"/><ellipse cx="50" cy="55" rx="30" ry="38" fill="#14171C"/>${T(50,64,24,'#F6DE96','SPC')}${star(50,33,9,'#F6DE96')}${star(50,83,9,'#F6DE96')}`,

// Triple tenant : la ceinture de champion vue de face, plaque centrale et deux plaques latérales, chiffre 3
belt3:(c,l,d)=>`<rect x="2" y="44" width="96" height="24" rx="3" fill="${d}"/><rect x="3" y="34" width="24" height="44" rx="4" fill="url(#g)"/><rect x="73" y="34" width="24" height="44" rx="4" fill="url(#g)"/>${star(15,56,9,'#14171C')}${star(85,56,9,'#14171C')}<path d="M50 4 L74 14 L74 70 Q74 94 50 106 Q26 94 26 70 L26 14Z" fill="url(#g)"/><path d="M50 12 L67 19 L67 70 Q67 88 50 97 Q33 88 33 70 L33 19Z" fill="#14171C"/>${T(50,70,38,'#F6DE96','3')}`,

// Premier titre : une médaille pendue à son ruban, chiffre 1
title1:(c,l,d)=>`<path d="M6 4 L38 4 L50 36 L62 4 L94 4 L64 60 L36 60Z" fill="${c}"/><path d="M20 4 L30 4 L50 48 L70 4 L80 4 L56 56 L44 56Z" fill="#fff"/><circle cx="50" cy="74" r="32" fill="url(#g)"/><circle cx="50" cy="74" r="24" fill="#14171C"/>${T(50,86,34,'#F6DE96','1')}<circle cx="50" cy="42" r="5" fill="${l}"/>`,

// Collectionneur : une vitrine à deux étagères avec cinq médailles accrochées
title5:(c,l,d)=>{const m=(x,y,t)=>`<polygon points="${x-7},${t} ${x+7},${t} ${x},${y-8}" fill="${l}"/><circle cx="${x}" cy="${y}" r="11" fill="#F6DE96"/><circle cx="${x}" cy="${y}" r="6" fill="${d}"/>`;return `<rect x="4" y="4" width="92" height="102" rx="7" fill="url(#g)"/><rect x="10" y="10" width="80" height="90" rx="4" fill="#14171C"/><rect x="10" y="56" width="80" height="5" fill="url(#g)"/>${m(24,40,12)}${m(50,40,12)}${m(76,40,12)}${m(37,86,61)}${m(63,86,61)}`;},

// 3 mois d'affilée : trois pages de calendrier cochées, reliées par une chaîne circulaire, 3 au centre
streak3:(c,l,d)=>{const p=(x,y)=>`<rect x="${x-15}" y="${y-15}" width="30" height="30" rx="3" fill="#fff"/><rect x="${x-15}" y="${y-15}" width="30" height="9" rx="3" fill="${c}"/><rect x="${x-15}" y="${y-9}" width="30" height="3" fill="${c}"/><rect x="${x-9}" y="${y-19}" width="4" height="8" rx="2" fill="${d}"/><rect x="${x+5}" y="${y-19}" width="4" height="8" rx="2" fill="${d}"/><path d="M${x-7} ${y+4} L${x-2} ${y+9} L${x+8} ${y-2}" stroke="#6BCB77" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;return `<circle cx="50" cy="60" r="37" fill="none" stroke="#C3C8CE" stroke-width="7" stroke-dasharray="9 5"/>${p(50,23)}${p(18,78)}${p(82,78)}<circle cx="50" cy="64" r="16" fill="#14171C"/>${T(50,73,26,'#fff','3')}`;},

// 6 mois d'affilée : un hexagone de chaîne à six maillons autour d'une page de calendrier marquée 6
streak6:(c,l,d)=>{const pts=[0,1,2,3,4,5].map(k=>{const a=(30+60*k)*Math.PI/180;return [50+46*Math.cos(a),55+46*Math.sin(a)]});return `<polygon points="${pts.map(p=>p.map(v=>v.toFixed(1)).join(',')).join(' ')}" fill="none" stroke="#C3C8CE" stroke-width="7"/>${pts.map(p=>`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="6.5" fill="url(#g)"/>`).join('')}<rect x="27" y="28" width="46" height="54" rx="4" fill="#fff"/><rect x="27" y="28" width="46" height="14" rx="4" fill="${c}"/><rect x="27" y="38" width="46" height="4" fill="${c}"/><rect x="35" y="22" width="5" height="12" rx="2.5" fill="${d}"/><rect x="60" y="22" width="5" height="12" rx="2.5" fill="${d}"/>${T(50,76,30,'#14171C','6')}`;},

// Trois mois propres : panneau d'interdiction barrant un pilon de poulet
nokfc3:(c,l,d)=>`<circle cx="50" cy="55" r="48" fill="url(#g)"/><circle cx="50" cy="55" r="38" fill="#fff"/><g transform="rotate(-35 50 55)"><rect x="52" y="51" width="30" height="8" rx="4" fill="#C3C8CE"/><circle cx="81" cy="50" r="4.5" fill="#C3C8CE"/><circle cx="81" cy="59" r="4.5" fill="#C3C8CE"/><path d="M60 55 C64 46 54 30 36 30 C18 30 10 46 14 60 C18 72 32 78 44 72 C54 67 58 62 60 55Z" fill="#D9AE4A"/><path d="M24 42 Q34 36 46 40" stroke="#A8693A" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="26" cy="58" r="2.5" fill="#A8693A"/><circle cx="42" cy="62" r="3" fill="#A8693A"/></g><line x1="21" y1="26" x2="79" y2="84" stroke="#FF6B6B" stroke-width="9" stroke-linecap="round"/><circle cx="50" cy="55" r="41" fill="none" stroke="#FF6B6B" stroke-width="7"/>`,

// Jamais de KFC : un brocoli bien vert, étoile de propreté, chiffre 6
nokfc:(c,l,d)=>`<path d="M38 66 L62 66 L58 106 L42 106Z" fill="${l}"/><path d="M50 78 L50 98 M44 84 L50 90 M56 84 L50 90" stroke="${d}" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="30" r="26" fill="url(#g)"/><circle cx="24" cy="44" r="20" fill="url(#g)"/><circle cx="76" cy="44" r="20" fill="url(#g)"/><circle cx="36" cy="60" r="16" fill="url(#g)"/><circle cx="64" cy="60" r="16" fill="url(#g)"/>${[[40,22],[58,30],[22,48],[78,42],[50,46],[30,64],[70,66]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3" fill="${d}"/>`).join('')}${star(88,14,9,'#fff')}<circle cx="84" cy="92" r="12" fill="#14171C"/>${T(84,100,20,'#fff','6')}`,

// En série : trois flammes de plus en plus petites sur la même ligne, le gras baisse mois après mois
fatstreak3:(c,l,d)=>`<rect x="4" y="100" width="92" height="6" rx="3" fill="${d}"/>${flame(22,100,94,18,'url(#g)')}${flame(22,97,52,9,'#14171C')}${flame(54,100,70,15,'url(#g)')}${flame(54,97,38,7.5,'#14171C')}${flame(82,100,48,12,'url(#g)')}${flame(82,97,26,6,'#14171C')}`,

// Carte Argent : carte bancaire argentée inclinée, puce dorée, mention 20%
argent:(c,l,d)=>`<g transform="rotate(-10 50 55)"><rect x="8" y="20" width="84" height="70" rx="7" fill="url(#g)"/><rect x="8" y="30" width="84" height="10" fill="${d}"/><rect x="18" y="50" width="20" height="15" rx="2.5" fill="#F6DE96"/><path d="M18 57.5 L38 57.5 M26 50 L26 65 M30 50 L30 65" stroke="${d}" stroke-width="1.5"/><rect x="18" y="74" width="30" height="5" rx="2.5" fill="#14171C"/>${T(70,72,22,'#14171C','20%')}</g>`,

// Carte Or : carte dorée inclinée dans l'autre sens, couronne, puce sombre, mention OR
or:(c,l,d)=>`<g transform="rotate(10 50 55)"><rect x="8" y="20" width="84" height="70" rx="7" fill="url(#g)"/><polygon points="18,44 22,28 30,38 36,24 42,38 50,28 54,44" fill="#14171C"/><rect x="18" y="42" width="36" height="5" rx="1.5" fill="#14171C"/><rect x="18" y="52" width="20" height="15" rx="2.5" fill="#14171C"/><path d="M18 59.5 L38 59.5 M26 52 L26 67 M30 52 L30 67" stroke="${l}" stroke-width="1.5"/>${T(70,74,30,'#14171C','OR')}<rect x="18" y="76" width="30" height="5" rx="2.5" fill="#14171C"/></g>`,

// Bien proportionné : l'homme de Vitruve, bras en croix dans le cercle et le carré, axe de symétrie
equ:(c,l,d)=>`<rect x="6" y="4" width="88" height="102" rx="6" fill="url(#g)"/><rect x="12" y="10" width="76" height="90" rx="3" fill="#14171C"/><circle cx="50" cy="55" r="37" fill="none" stroke="${l}" stroke-width="3"/><line x1="50" y1="12" x2="50" y2="98" stroke="${l}" stroke-width="2" stroke-dasharray="4 4"/><circle cx="50" cy="28" r="9" fill="#fff"/><rect x="43" y="38" width="14" height="32" rx="5" fill="#fff"/><line x1="16" y1="50" x2="84" y2="50" stroke="#fff" stroke-width="8" stroke-linecap="round"/><line x1="48" y1="66" x2="30" y2="94" stroke="#fff" stroke-width="8" stroke-linecap="round"/><line x1="52" y1="66" x2="70" y2="94" stroke="#fff" stroke-width="8" stroke-linecap="round"/>`,

// -10 kg de gras : le jean devenu trop grand, taille béante autour d'un buste fin, mention -10
fat10:(c,l,d)=>`<path d="M8 24 L92 24 L94 106 L58 106 L50 64 L42 106 L6 106Z" fill="url(#g)"/><rect x="6" y="14" width="88" height="14" rx="2" fill="${d}"/><rect x="40" y="4" width="20" height="22" rx="7" fill="#14171C"/><ellipse cx="50" cy="21" rx="24" ry="8" fill="#14171C"/><path d="M14 36 Q24 46 34 36" stroke="${l}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M66 36 Q76 46 86 36" stroke="${l}" stroke-width="2.5" fill="none" stroke-linecap="round"/><line x1="50" y1="30" x2="50" y2="60" stroke="${l}" stroke-width="2.5"/>${T(76,98,20,'#fff','-10')}`,

// -10 cm de taille : des ciseaux coupent le mètre ruban en deux, mention -10
taille10:(c,l,d)=>`<rect x="2" y="50" width="42" height="22" rx="2" fill="#F6DE96"/>${[6,14,22,30,38].map((x,i)=>`<rect x="${x}" y="50" width="3" height="${i%2?5:9}" fill="#14171C"/>`).join('')}<g transform="rotate(8 76 62)"><rect x="56" y="52" width="42" height="22" rx="2" fill="#F6DE96"/>${[60,68,76,84,92].map((x,i)=>`<rect x="${x}" y="52" width="3" height="${i%2?5:9}" fill="#14171C"/>`).join('')}</g><line x1="50" y1="52" x2="64" y2="104" stroke="#fff" stroke-width="9" stroke-linecap="round"/><line x1="50" y1="52" x2="36" y2="104" stroke="#C3C8CE" stroke-width="9" stroke-linecap="round"/><line x1="50" y1="52" x2="34" y2="28" stroke="url(#g)" stroke-width="8" stroke-linecap="round"/><line x1="50" y1="52" x2="66" y2="28" stroke="url(#g)" stroke-width="8" stroke-linecap="round"/><circle cx="28" cy="18" r="10" fill="none" stroke="url(#g)" stroke-width="7"/><circle cx="72" cy="18" r="10" fill="none" stroke="url(#g)" stroke-width="7"/><circle cx="50" cy="52" r="5" fill="#14171C"/>${T(18,98,20,'#fff','-10')}`,

// Sous les 15 % : une jauge dont l'aiguille pointe dans la zone verte, mention 15%
under15:(c,l,d)=>`<path d="M2 58 A48 48 0 0 1 98 58 L98 98 Q98 106 90 106 L10 106 Q2 106 2 98Z" fill="url(#g)"/><path d="M10 58 A40 40 0 0 1 90 58 L90 98 L10 98Z" fill="#14171C"/><path d="M20 58 A30 30 0 0 1 28.8 36.8" stroke="#6BCB77" stroke-width="9" fill="none"/><path d="M28.8 36.8 A30 30 0 0 1 71.2 36.8" stroke="#FF9F43" stroke-width="9" fill="none"/><path d="M71.2 36.8 A30 30 0 0 1 80 58" stroke="#FF6B6B" stroke-width="9" fill="none"/><line x1="50" y1="58" x2="18" y2="50" stroke="#fff" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="58" r="6" fill="#fff"/>${T(50,96,24,'#fff','15%')}`,

// Top 25 % sèche : une pyramide dont seul le sommet est allumé, mention 25%
top25fat:(c,l,d)=>`<polygon points="50,4 97,104 3,104" fill="#14171C"/><polygon points="50,4 68,42 32,42" fill="url(#g)"/><g stroke="${l}" stroke-width="2.5"><line x1="22" y1="63" x2="78" y2="63"/><line x1="12" y1="84" x2="88" y2="84"/></g>${T(50,78,20,'#fff','25%')}`,

// Colosse : une tête de taureau, cornes dorées, anneau au naseau
bigthree:(c,l,d)=>`<path d="M36 40 C18 42 4 32 4 8 C14 22 24 26 36 28 Q30 34 36 40Z" fill="#F6DE96"/><path d="M64 40 C82 42 96 32 96 8 C86 22 76 26 64 28 Q70 34 64 40Z" fill="#F6DE96"/><path d="M4 8 C8 18 14 22 20 24" stroke="${d}" stroke-width="2" fill="none"/><path d="M96 8 C92 18 86 22 80 24" stroke="${d}" stroke-width="2" fill="none"/><path d="M26 34 Q12 70 34 96 Q50 110 66 96 Q88 70 74 34 Q50 24 26 34Z" fill="url(#g)"/><path d="M36 30 Q50 20 64 30 Q50 38 36 30Z" fill="${d}"/><circle cx="39" cy="56" r="5.5" fill="#14171C"/><circle cx="61" cy="56" r="5.5" fill="#14171C"/><path d="M31 46 L46 50 M69 46 L54 50" stroke="#14171C" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="50" cy="84" rx="18" ry="12" fill="${l}"/><ellipse cx="43" cy="84" rx="4" ry="3" fill="#14171C"/><ellipse cx="57" cy="84" rx="4" ry="3" fill="#14171C"/><circle cx="50" cy="96" r="6" fill="none" stroke="#F6DE96" stroke-width="3"/>`,

// Chirurgical : un scalpel en diagonale, incision pointillée, croix médicale
goalall3:(c,l,d)=>`<g transform="rotate(-45 50 55)"><rect x="-10" y="48" width="66" height="14" rx="4" fill="url(#g)"/><g stroke="#14171C" stroke-width="2.5"><line x1="4" y1="50" x2="4" y2="60"/><line x1="12" y1="50" x2="12" y2="60"/><line x1="20" y1="50" x2="20" y2="60"/></g><path d="M54 48 L84 48 Q110 50 110 58 L54 62Z" fill="#fff"/><path d="M54 61 L108 59 L110 58 Z" fill="#C3C8CE"/></g><line x1="30" y1="100" x2="94" y2="36" stroke="#fff" stroke-width="3" stroke-dasharray="5 4" stroke-linecap="round"/><rect x="8" y="8" width="22" height="22" rx="4" fill="#FF6B6B"/><rect x="16" y="11" width="6" height="16" rx="1" fill="#fff"/><rect x="11" y="16" width="16" height="6" rx="1" fill="#fff"/>`

});
})();

// ---- medals/lot-3.js ----
// Lot 3 : 28 médaillons dessinés (badges épiques, légendaires et petits badges d'usage). Un dessin par badge, silhouette comprise.
// Signature : (c, l, d) => intérieur d'un svg viewBox 0 0 100 110. Matière principale url(#g), cœur sombre #14171C.
window.MEDALS=window.MEDALS||{};
(()=>{
const F='font-family="Barlow,Oswald,sans-serif" font-weight="700"';
const T=(x,y,s,f,t)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${s}" ${F} fill="${f}">${t}</text>`;
// Étoile à cinq branches centrée en (x, y), rayon r
const star=(x,y,r,f)=>`<polygon points="${[...Array(10)].map((_,i)=>{const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*0.45:r;return (x+rr*Math.cos(a)).toFixed(1)+','+(y+rr*Math.sin(a)).toFixed(1)}).join(' ')}" fill="${f}"/>`;
// Coche verte dans une pastille
const check=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#6BCB77"/><path d="M${x-r*0.5} ${y} L${x-r*0.1} ${y+r*0.42} L${x+r*0.55} ${y-r*0.45}" stroke="#fff" stroke-width="${Math.max(3,r*0.3)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
Object.assign(MEDALS,{

// Top 25 % muscle : quatre barres de graphique qui montent, seule la dernière (le quart du haut) est en matière vive, étoile au sommet, mention 25%
top25ffmi:(c,l,d)=>`<rect x="4" y="100" width="92" height="6" rx="3" fill="${l}"/><rect x="6" y="74" width="18" height="28" rx="3" fill="${d}"/><rect x="30" y="58" width="18" height="44" rx="3" fill="${d}"/><rect x="54" y="42" width="18" height="60" rx="3" fill="${d}"/><rect x="76" y="18" width="20" height="84" rx="3" fill="url(#g)"/><rect x="80" y="24" width="4" height="70" rx="2" fill="${l}"/>${star(86,10,9,'#F6DE96')}${T(36,34,22,'#fff','25%')}`,

// Top 25 % viscérale : une loupe braquée sur le ventre, lentille sombre avec l'anneau fin de graisse viscérale et la mention 25%
top25visc:(c,l,d)=>`<line x1="68" y1="72" x2="90" y2="100" stroke="${d}" stroke-width="14" stroke-linecap="round"/><line x1="70" y1="74" x2="88" y2="98" stroke="url(#g)" stroke-width="8" stroke-linecap="round"/><circle cx="44" cy="46" r="38" fill="url(#g)"/><circle cx="44" cy="46" r="30" fill="#14171C"/><circle cx="44" cy="46" r="23" fill="none" stroke="${l}" stroke-width="3"/>${T(44,54,22,'#fff','25%')}<path d="M22 32 A26 26 0 0 1 36 20" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>`,

// Top 25 % taille : un camembert dont le quart supérieur droit se détache, le quart du haut, mention 25% sur le reste
top25waist:(c,l,d)=>`<path d="M46 60 L46 18 A42 42 0 1 0 88 60 Z" fill="url(#g)"/><path d="M46 60 L46 34 A26 26 0 1 0 72 60 Z" fill="#14171C"/><path d="M54 52 L54 10 A42 42 0 0 1 96 52 Z" fill="${l}"/><path d="M54 52 L54 26 A26 26 0 0 1 80 52 Z" fill="#fff"/>${T(42,72,20,'#fff','25%')}`,

// Ventre sain : la tablette de chocolat, six carrés d'abdominaux sur le buste, coche verte
visc:(c,l,d)=>`<path d="M10 4 L90 4 L86 62 Q50 112 14 62 Z" fill="url(#g)"/><rect x="22" y="12" width="24" height="18" rx="5" fill="#14171C"/><rect x="54" y="12" width="24" height="18" rx="5" fill="#14171C"/><rect x="24" y="36" width="22" height="18" rx="5" fill="#14171C"/><rect x="54" y="36" width="22" height="18" rx="5" fill="#14171C"/><rect x="28" y="60" width="18" height="16" rx="5" fill="#14171C"/><rect x="54" y="60" width="18" height="16" rx="5" fill="#14171C"/><circle cx="50" cy="86" r="4" fill="#14171C"/>${check(80,90,14)}`,

// Diamant : la gemme taillée à facettes, table claire, couronne et culasse, éclat d'étoile
diamant:(c,l,d)=>`<polygon points="22,20 78,20 96,46 50,106 4,46" fill="url(#g)"/><polygon points="34,20 66,20 74,46 26,46" fill="${l}"/><polygon points="22,20 34,20 26,46 4,46" fill="#fff"/><polygon points="66,20 78,20 96,46 74,46" fill="${d}"/><polygon points="26,46 74,46 50,106" fill="${c}"/><polygon points="4,46 26,46 50,106" fill="${l}"/><polygon points="74,46 96,46 50,106" fill="${d}"/><g stroke="#14171C" stroke-width="2.5" stroke-linejoin="round" fill="none"><polygon points="22,20 78,20 96,46 50,106 4,46"/><line x1="4" y1="46" x2="96" y2="46"/></g>${star(86,12,9,'#fff')}`,

// Légende : le livre ouvert d'où s'élève une étoile dans son auréole de rayons
leg:(c,l,d)=>`<circle cx="50" cy="34" r="27" fill="none" stroke="${l}" stroke-width="3" stroke-dasharray="6 5"/><g stroke="#F6DE96" stroke-width="3.5" stroke-linecap="round"><line x1="50" y1="2" x2="50" y2="8"/><line x1="24" y1="18" x2="30" y2="22"/><line x1="76" y1="18" x2="70" y2="22"/><line x1="18" y1="46" x2="26" y2="44"/><line x1="82" y1="46" x2="74" y2="44"/></g>${star(50,34,17,'#F6DE96')}<path d="M4 70 Q27 58 50 72 Q73 58 96 70 L96 106 L4 106Z" fill="url(#g)"/><path d="M10 76 Q28 66 47 78 L47 100 Q28 90 10 98Z" fill="#fff"/><path d="M90 76 Q72 66 53 78 L53 100 Q72 90 90 98Z" fill="#fff"/><rect x="47" y="76" width="6" height="26" fill="#14171C"/>`,

// Sous les 10 % : un thermomètre dont le liquide est tombé sous la ligne des 10%
under10:(c,l,d)=>`<rect x="20" y="4" width="28" height="78" rx="14" fill="url(#g)"/><rect x="28" y="12" width="12" height="64" rx="6" fill="#14171C"/><circle cx="34" cy="88" r="18" fill="url(#g)"/><circle cx="34" cy="88" r="12" fill="${c}"/><rect x="30" y="66" width="8" height="18" fill="${c}"/><g stroke="#fff" stroke-width="3" stroke-linecap="round"><line x1="6" y1="22" x2="14" y2="22"/><line x1="6" y1="34" x2="14" y2="34"/><line x1="6" y1="46" x2="14" y2="46"/><line x1="6" y1="58" x2="14" y2="58"/><line x1="6" y1="70" x2="14" y2="70"/></g><line x1="52" y1="58" x2="96" y2="58" stroke="#fff" stroke-width="3.5" stroke-dasharray="5 4" stroke-linecap="round"/>${T(76,48,22,'#fff','10%')}<polygon points="66,64 86,64 76,78" fill="${l}"/>`,

// Titan : la montagne qui perce les nuages, face éclairée et face à l'ombre, sommet enneigé
ffmi23:(c,l,d)=>`<polygon points="50,4 98,106 2,106" fill="url(#g)"/><polygon points="50,4 98,106 50,106" fill="${d}"/><polygon points="50,4 36,34 42,30 50,38 58,30 64,34" fill="#fff"/><ellipse cx="16" cy="62" rx="16" ry="8" fill="#fff"/><ellipse cx="26" cy="56" rx="12" ry="8" fill="#fff"/><ellipse cx="84" cy="66" rx="14" ry="8" fill="#fff"/><ellipse cx="74" cy="60" rx="11" ry="7" fill="#fff"/><rect x="2" y="100" width="96" height="6" fill="#14171C"/>`,

// Champion de saison : la bannière de champion suspendue à sa tringle, étoile et chiffre 1
champ:(c,l,d)=>`<rect x="4" y="6" width="92" height="7" rx="3.5" fill="${d}"/><circle cx="8" cy="9.5" r="5" fill="${l}"/><circle cx="92" cy="9.5" r="5" fill="${l}"/><polygon points="14,13 86,13 86,74 50,106 14,74" fill="url(#g)"/><polygon points="22,21 78,21 78,70 50,95 22,70" fill="#14171C"/>${star(50,44,16,'#F6DE96')}${T(50,84,24,'#F6DE96','1')}`,

// Dynastie : le trône, haut dossier, accoudoirs ronds et chiffre 2 au dossier
champ2:(c,l,d)=>`<circle cx="26" cy="10" r="6" fill="${l}"/><circle cx="74" cy="10" r="6" fill="${l}"/><rect x="18" y="8" width="64" height="70" rx="8" fill="url(#g)"/><rect x="26" y="16" width="48" height="52" rx="4" fill="#14171C"/><rect x="12" y="88" width="12" height="18" rx="3" fill="${d}"/><rect x="76" y="88" width="12" height="18" rx="3" fill="${d}"/><rect x="6" y="74" width="88" height="16" rx="5" fill="url(#g)"/><circle cx="10" cy="66" r="9" fill="${l}"/><circle cx="90" cy="66" r="9" fill="${l}"/>${T(50,56,36,'#F6DE96','2')}`,

// Ceinture à vie : le signe de l'infini en ruban, chiffre 6 dans une boucle, étoile dans l'autre
belt6:(c,l,d)=>`<path d="M50 55 C38 6 10 6 10 55 C10 104 38 104 50 55 C62 6 90 6 90 55 C90 104 62 104 50 55" fill="none" stroke="#14171C" stroke-width="20" stroke-linecap="round"/><path d="M50 55 C38 6 10 6 10 55 C10 104 38 104 50 55 C62 6 90 6 90 55 C90 104 62 104 50 55" fill="none" stroke="url(#g)" stroke-width="12" stroke-linecap="round"/>${T(28,65,26,'#fff','6')}${star(72,55,10,'#F6DE96')}`,

// Invaincu : la forteresse intacte, créneaux, meurtrière, porte et drapeau au vent
perfect:(c,l,d)=>`<line x1="50" y1="2" x2="50" y2="22" stroke="#fff" stroke-width="3"/><polygon points="51,3 74,9 51,15" fill="#FF6B6B"/><rect x="12" y="16" width="14" height="16" fill="url(#g)"/><rect x="43" y="16" width="14" height="16" fill="url(#g)"/><rect x="74" y="16" width="14" height="16" fill="url(#g)"/><rect x="12" y="30" width="76" height="70" fill="url(#g)"/><rect x="47" y="42" width="6" height="16" rx="3" fill="#14171C"/><rect x="22" y="42" width="6" height="16" rx="3" fill="#14171C"/><rect x="72" y="42" width="6" height="16" rx="3" fill="#14171C"/><path d="M38 100 L38 80 A12 12 0 0 1 62 80 L62 100Z" fill="#14171C"/><rect x="4" y="98" width="92" height="8" rx="3" fill="${d}"/>`,

// -20 kg de gras : la bougie a presque fondu, coulures de cire, grande flamme, mention -20
fat20:(c,l,d)=>`<ellipse cx="50" cy="100" rx="46" ry="7" fill="${d}"/><rect x="28" y="54" width="44" height="46" rx="3" fill="url(#g)"/><ellipse cx="50" cy="54" rx="22" ry="6" fill="${l}"/><rect x="30" y="54" width="7" height="24" rx="3.5" fill="${l}"/><rect x="62" y="54" width="7" height="16" rx="3.5" fill="${l}"/><ellipse cx="20" cy="98" rx="10" ry="4" fill="${l}"/><ellipse cx="82" cy="98" rx="8" ry="3.5" fill="${l}"/><line x1="50" y1="52" x2="50" y2="42" stroke="#14171C" stroke-width="3"/><path d="M50 6 C40 20 36 28 36 36 A14 14 0 0 0 64 36 C64 28 58 20 50 6Z" fill="#FFD93D"/><path d="M50 24 C46 30 44 34 44 38 A6 6 0 0 0 56 38 C56 34 54 30 50 24Z" fill="#FF6B6B"/>${T(50,88,22,'#14171C','-20')}`,

// +10 kg de muscle : le plastron d'armure, épaulières rondes, pectoraux marqués, mention +10
mus10:(c,l,d)=>`<circle cx="16" cy="22" r="14" fill="${d}"/><circle cx="84" cy="22" r="14" fill="${d}"/><path d="M14 10 L86 10 L92 58 Q92 90 50 106 Q8 90 8 58 Z" fill="url(#g)"/><path d="M34 10 Q50 30 66 10 Z" fill="#14171C"/><path d="M14 40 Q32 56 50 46 Q68 56 86 40" stroke="#14171C" stroke-width="4" fill="none" stroke-linecap="round"/><line x1="50" y1="46" x2="50" y2="98" stroke="#14171C" stroke-width="4"/>${T(50,86,24,'#14171C','+10')}<circle cx="20" cy="20" r="4" fill="${l}"/><circle cx="80" cy="20" r="4" fill="${l}"/>`,

// -15 cm de taille : la taille de guêpe, la guêpe elle-même, ailes en matière vive, abdomen rayé, mention -15
waist15:(c,l,d)=>`<ellipse cx="22" cy="40" rx="20" ry="9" fill="url(#g)" transform="rotate(-30 22 40)"/><ellipse cx="78" cy="40" rx="20" ry="9" fill="url(#g)" transform="rotate(30 78 40)"/><g stroke="#14171C" stroke-width="3" stroke-linecap="round"><line x1="44" y1="8" x2="36" y2="2"/><line x1="56" y1="8" x2="64" y2="2"/></g><circle cx="50" cy="16" r="11" fill="#14171C"/><circle cx="45" cy="14" r="2.5" fill="#fff"/><circle cx="55" cy="14" r="2.5" fill="#fff"/><ellipse cx="50" cy="42" rx="16" ry="15" fill="#14171C"/><rect x="46" y="54" width="8" height="10" fill="${d}"/><ellipse cx="50" cy="84" rx="22" ry="22" fill="#F6DE96"/><g stroke="#14171C" stroke-width="6"><line x1="31" y1="74" x2="69" y2="74"/><line x1="28" y1="86" x2="72" y2="86"/><line x1="33" y1="98" x2="67" y2="98"/></g><polygon points="45,102 55,102 50,108" fill="#14171C"/>${T(14,104,16,'#fff','-15')}`,

// Un an d'affilée : le planning de l'année, douze cases toutes cochées, anneaux et mention 12
streak12:(c,l,d)=>`<rect x="4" y="4" width="92" height="102" rx="8" fill="url(#g)"/><rect x="10" y="24" width="80" height="76" rx="4" fill="#14171C"/><rect x="24" y="0" width="6" height="14" rx="3" fill="${d}"/><rect x="70" y="0" width="6" height="14" rx="3" fill="${d}"/>${T(50,19,15,'#14171C','12')}${[0,1,2].map(r=>[0,1,2,3].map(k=>`<rect x="${14+k*19}" y="${29+r*23}" width="15" height="19" rx="3" fill="#6BCB77"/><path d="M${18+k*19} ${39+r*23} L${21+k*19} ${42+r*23} L${26+k*19} ${34+r*23}" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`).join('')).join('')}`,

// Face à face : deux bustes qui se regardent, l'un en matière vive, l'autre blanc, VS entre eux
compare:(c,l,d)=>`<circle cx="26" cy="30" r="22" fill="url(#g)"/><path d="M2 106 Q2 64 26 62 Q50 64 50 106Z" fill="url(#g)"/><circle cx="74" cy="30" r="22" fill="#fff"/><path d="M50 106 Q50 64 74 62 Q98 64 98 106Z" fill="#fff"/><circle cx="38" cy="28" r="3.5" fill="#14171C"/><circle cx="62" cy="28" r="3.5" fill="#14171C"/><path d="M44 38 L48 32" stroke="#14171C" stroke-width="3" stroke-linecap="round"/><path d="M56 38 L52 32" stroke="#14171C" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="86" r="15" fill="#14171C"/>${T(50,92,16,'#fff','VS')}`,

// Curieux : le grand œil ouvert, cils en haut et en bas, iris en matière vive
curieux:(c,l,d)=>`<g stroke="${d}" stroke-width="4" stroke-linecap="round"><line x1="28" y1="22" x2="20" y2="8"/><line x1="50" y1="17" x2="50" y2="3"/><line x1="72" y1="22" x2="80" y2="8"/><line x1="28" y1="88" x2="22" y2="100"/><line x1="50" y1="93" x2="50" y2="106"/><line x1="72" y1="88" x2="78" y2="100"/></g><path d="M3 55 Q50 -22 97 55 Q50 132 3 55Z" fill="url(#g)"/><path d="M10 55 Q50 -8 90 55 Q50 118 10 55Z" fill="#fff"/><circle cx="50" cy="55" r="25" fill="${d}"/><circle cx="50" cy="55" r="19" fill="${c}"/><circle cx="50" cy="55" r="10" fill="#14171C"/><circle cx="42" cy="47" r="4.5" fill="#fff"/>`,

// Partageur : l'avion en papier qui file vers le haut, traînée pointillée
share:(c,l,d)=>`<path d="M6 104 Q22 82 42 80" stroke="${l}" stroke-width="3.5" fill="none" stroke-dasharray="6 5" stroke-linecap="round"/><polygon points="4,52 96,4 46,66" fill="url(#g)"/><polygon points="46,66 96,4 62,104" fill="${d}"/><polygon points="46,66 96,4 54,60" fill="#14171C"/><polygon points="54,60 96,4 60,78" fill="${l}"/>`,

// Présent : le repère de carte planté au sol, coche verte au centre
present:(c,l,d)=>`<ellipse cx="50" cy="102" rx="30" ry="5" fill="${d}"/><path d="M50 2 C24 2 4 22 4 46 C4 74 50 108 50 108 C50 108 96 74 96 46 C96 22 76 2 50 2Z" fill="url(#g)"/><circle cx="50" cy="46" r="26" fill="#14171C"/>${check(50,46,20)}`,

// Affûté : la lame qu'on aiguise sur la pierre, étincelles à la pointe
armfat3:(c,l,d)=>`<rect x="4" y="78" width="92" height="28" rx="4" fill="${d}"/><rect x="4" y="78" width="92" height="9" rx="4" fill="${l}"/><g transform="rotate(25 50 56)"><rect x="6" y="44" width="28" height="22" rx="6" fill="url(#g)"/><circle cx="14" cy="55" r="3" fill="#14171C"/><circle cx="26" cy="55" r="3" fill="#14171C"/><path d="M32 46 L84 46 Q100 50 98 60 L32 64Z" fill="#fff"/><path d="M32 60 L96 59 L98 60 L32 64Z" fill="#C3C8CE"/></g><g stroke="#FFD93D" stroke-width="3" stroke-linecap="round"><line x1="88" y1="66" x2="94" y2="58"/><line x1="94" y1="74" x2="98" y2="68"/><line x1="82" y1="60" x2="84" y2="52"/></g>`,

// Hydraté : le grand verre d'eau avec sa paille, vague en surface, bulles, mention 58%
eau58:(c,l,d)=>`<line x1="74" y1="2" x2="60" y2="52" stroke="#FF6B6B" stroke-width="7" stroke-linecap="round"/><polygon points="10,4 90,4 80,106 20,106" fill="${l}"/><polygon points="16,10 84,10 76,100 24,100" fill="#14171C"/><path d="M19.4 48 Q34 38 50 48 Q66 58 80.6 48 L76 100 L24 100Z" fill="url(#g)"/><line x1="60" y1="52" x2="56" y2="66" stroke="#FF6B6B" stroke-width="7" stroke-linecap="round"/><circle cx="34" cy="62" r="3" fill="#fff"/><circle cx="40" cy="72" r="2.5" fill="#fff"/>${T(52,92,20,'#fff','58%')}`,

// Plus jeune que son âge : le réveil dont l'aiguille remonte le temps, flèche à rebours
metaAge:(c,l,d)=>`<circle cx="16" cy="18" r="10" fill="${d}"/><circle cx="84" cy="18" r="10" fill="${d}"/><rect x="44" y="4" width="12" height="12" rx="3" fill="${d}"/><line x1="24" y1="96" x2="14" y2="108" stroke="${d}" stroke-width="6" stroke-linecap="round"/><line x1="76" y1="96" x2="86" y2="108" stroke="${d}" stroke-width="6" stroke-linecap="round"/><circle cx="50" cy="58" r="44" fill="url(#g)"/><circle cx="50" cy="58" r="36" fill="#14171C"/><path d="M76 43 A30 30 0 0 0 24 43" stroke="${l}" stroke-width="5" fill="none" stroke-linecap="round"/><polygon points="14,38 34,38 24,54" fill="${l}"/><line x1="50" y1="58" x2="50" y2="34" stroke="#fff" stroke-width="5" stroke-linecap="round"/><line x1="50" y1="58" x2="70" y2="70" stroke="#fff" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="58" r="5" fill="#fff"/>`,

// Zone sèche : le cactus en plein désert, soleil et sable craquelé
seg15:(c,l,d)=>`<circle cx="82" cy="18" r="12" fill="#FFD93D"/><g stroke="#FFD93D" stroke-width="3" stroke-linecap="round"><line x1="82" y1="0" x2="82" y2="3"/><line x1="66" y1="18" x2="63" y2="18"/><line x1="70" y1="6" x2="68" y2="4"/><line x1="94" y1="6" x2="96" y2="4"/><line x1="70" y1="30" x2="68" y2="32"/><line x1="94" y1="30" x2="96" y2="32"/></g><ellipse cx="50" cy="100" rx="46" ry="7" fill="${l}"/><polyline points="12,100 20,104 28,98 36,104" stroke="${d}" stroke-width="2" fill="none" stroke-linecap="round"/><polyline points="62,102 70,98 78,104 86,100" stroke="${d}" stroke-width="2" fill="none" stroke-linecap="round"/><rect x="40" y="22" width="20" height="78" rx="10" fill="url(#g)"/><rect x="14" y="44" width="12" height="30" rx="6" fill="url(#g)"/><rect x="14" y="64" width="30" height="11" rx="5" fill="url(#g)"/><rect x="74" y="38" width="12" height="28" rx="6" fill="url(#g)"/><rect x="56" y="56" width="30" height="11" rx="5" fill="url(#g)"/><g stroke="#14171C" stroke-width="2" stroke-linecap="round"><line x1="46" y1="34" x2="54" y2="34"/><line x1="46" y1="48" x2="54" y2="48"/><line x1="46" y1="62" x2="54" y2="62"/><line x1="46" y1="76" x2="54" y2="76"/><line x1="46" y1="90" x2="54" y2="90"/></g>`,

// Presse 2,5 × : la presse à cuisses vue de côté, le pousseur assis pousse le plateau sur son rail, mention 2,5
presse25:(c,l,d)=>`<rect x="4" y="98" width="92" height="8" rx="3" fill="${d}"/><line x1="56" y1="96" x2="92" y2="30" stroke="${l}" stroke-width="7" stroke-linecap="round"/><g transform="translate(74 58) rotate(30)"><rect x="-7" y="-38" width="14" height="76" rx="3" fill="#14171C" stroke="${l}" stroke-width="3"/><rect x="-2" y="-30" width="4" height="60" rx="2" fill="${d}"/></g><rect x="4" y="84" width="30" height="14" rx="4" fill="${d}"/><circle cx="12" cy="58" r="10" fill="#fff"/><line x1="12" y1="70" x2="14" y2="86" stroke="#fff" stroke-width="12" stroke-linecap="round"/><line x1="14" y1="88" x2="36" y2="42" stroke="url(#g)" stroke-width="17" stroke-linecap="round"/><line x1="36" y1="42" x2="56" y2="62" stroke="url(#g)" stroke-width="14" stroke-linecap="round"/><line x1="66" y1="50" x2="54" y2="72" stroke="#fff" stroke-width="8" stroke-linecap="round"/>${T(62,22,24,'#fff','2,5')}`,

// Top 10 % sèche : le tampon encreur et son empreinte 10% apposée en biais
top10fat:(c,l,d)=>`<ellipse cx="50" cy="14" rx="16" ry="11" fill="url(#g)"/><rect x="42" y="18" width="16" height="24" fill="url(#g)"/><rect x="10" y="40" width="80" height="18" rx="5" fill="${d}"/><rect x="14" y="56" width="72" height="6" fill="#14171C"/><g transform="rotate(-6 50 86)"><rect x="12" y="68" width="76" height="36" rx="6" fill="none" stroke="#fff" stroke-width="4"/>${T(50,96,24,'#fff','10%')}</g>`,

// Top 10 % muscle : la courbe qui grimpe jusqu'à l'étoile, mention 10%
top10ffmi:(c,l,d)=>`<rect x="4" y="4" width="92" height="102" rx="8" fill="url(#g)"/><rect x="10" y="10" width="80" height="90" rx="4" fill="#14171C"/><g stroke="${d}" stroke-width="3" stroke-linecap="round"><line x1="16" y1="16" x2="16" y2="94"/><line x1="16" y1="94" x2="84" y2="94"/></g><polyline points="16,88 32,78 48,70 62,54 78,24" stroke="${l}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="78" r="4" fill="#fff"/><circle cx="48" cy="70" r="4" fill="#fff"/><circle cx="62" cy="54" r="4" fill="#fff"/>${star(79,22,10,'#F6DE96')}${T(38,40,18,'#fff','10%')}`,

// Ascension : l'escalier qui monte du bronze à l'or, flèche qui grimpe les marches
ascension:(c,l,d)=>`<rect x="4" y="76" width="30" height="30" rx="2" fill="#A8693A"/><rect x="34" y="50" width="30" height="56" rx="2" fill="#C3C8CE"/><rect x="64" y="24" width="32" height="82" rx="2" fill="#F6DE96"/><rect x="4" y="76" width="30" height="5" fill="#14171C"/><rect x="34" y="50" width="30" height="5" fill="#14171C"/><rect x="64" y="24" width="32" height="5" fill="#14171C"/><line x1="12" y1="72" x2="74" y2="20" stroke="#14171C" stroke-width="14" stroke-linecap="round"/><polygon points="90,4 68,8 82,26" fill="#14171C" stroke="#14171C" stroke-width="6" stroke-linejoin="round"/><line x1="12" y1="72" x2="72" y2="22" stroke="url(#g)" stroke-width="8" stroke-linecap="round"/><polygon points="90,4 68,8 82,26" fill="url(#g)"/>`

});
})();

// ---- medals/lot-4.js ----
// Lot 4 : 29 médaillons dessinés (records machines, pronostics, badges secrets). Un dessin par badge, silhouette comprise.
// Signature : (c, l, d) => intérieur d'un svg viewBox 0 0 100 110. Matière principale url(#g), cœur sombre #14171C.
window.MEDALS=window.MEDALS||{};
(()=>{
const F='font-family="Barlow,Oswald,sans-serif" font-weight="700"';
const T=(x,y,s,f,t)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${s}" ${F} fill="${f}">${t}</text>`;
// Étoile à cinq branches centrée en (x, y), rayon r
const star=(x,y,r,f)=>`<polygon points="${[...Array(10)].map((_,i)=>{const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*0.45:r;return (x+rr*Math.cos(a)).toFixed(1)+','+(y+rr*Math.sin(a)).toFixed(1)}).join(' ')}" fill="${f}"/>`;
// Éclat à quatre pointes (brillance) centré en (x, y), rayon r
const spark=(x,y,r,f)=>`<polygon points="${x},${y-r} ${x+r*0.28},${y-r*0.28} ${x+r},${y} ${x+r*0.28},${y+r*0.28} ${x},${y+r} ${x-r*0.28},${y+r*0.28} ${x-r},${y} ${x-r*0.28},${y-r*0.28}" fill="${f}"/>`;
// Flamme de bougie : pointe en (cx, base-h), base arrondie de rayon w
const flame=(cx,base,h,w,fill)=>{const y0=base-w;return `<path d="M${cx} ${base-h} C${cx-w*0.6} ${base-h*0.75} ${cx-w} ${y0-h*0.12} ${cx-w} ${y0} A${w} ${w} 0 0 0 ${cx+w} ${y0} C${cx+w} ${y0-h*0.18} ${cx+w*0.2} ${base-h*0.6} ${cx} ${base-h}Z" fill="${fill}"/>`;};
Object.assign(MEDALS,{

// Tirage 1,5 × : la machine de tirage vertical, poulie, câble, barre large que le tireur assis ramène vers lui, mention 1,5
tirage15:(c,l,d)=>`<circle cx="50" cy="11" r="9" fill="${d}"/><circle cx="50" cy="11" r="3.5" fill="#14171C"/><line x1="50" y1="20" x2="50" y2="36" stroke="${l}" stroke-width="3"/><path d="M6 32 L30 42 L70 42 L94 32" stroke="#14171C" stroke-width="11" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 32 L30 42 L70 42 L94 32" stroke="#C3C8CE" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="26" y1="40" x2="36" y2="70" stroke="#fff" stroke-width="9" stroke-linecap="round"/><line x1="74" y1="40" x2="64" y2="70" stroke="#fff" stroke-width="9" stroke-linecap="round"/><circle cx="26" cy="40" r="6.5" fill="#fff"/><circle cx="74" cy="40" r="6.5" fill="#fff"/><circle cx="50" cy="56" r="11" fill="#fff"/><rect x="32" y="66" width="36" height="32" rx="9" fill="url(#g)"/><rect x="18" y="96" width="64" height="10" rx="4" fill="${d}"/>${T(50,90,17,'#14171C','1,5')}`,

// Cœur de jeune : un grand cœur, tracé d'électrocardiogramme qui bat, mention -10 (dix ans de moins)
cardio10:(c,l,d)=>`<path d="M50 106 C20 82 3 64 3 38 C3 20 17 6 32 6 C40 6 47 11 50 19 C53 11 60 6 68 6 C83 6 97 20 97 38 C97 64 80 82 50 106Z" fill="url(#g)"/><path d="M50 92 C28 74 15 60 15 40 C15 28 24 19 34 19 C40 19 46 23 50 30 C54 23 60 19 66 19 C76 19 85 28 85 40 C85 60 72 74 50 92Z" fill="#14171C"/><polyline points="20,46 32,46 38,34 46,60 52,26 58,52 62,46 80,46" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${T(50,80,17,'#fff','-10')}`,

// Tout en hausse : la fusée qui décolle, hublot, ailerons, flamme de propulsion
egymUp:(c,l,d)=>`<polygon points="18,88 34,60 34,88" fill="${d}"/><polygon points="82,88 66,60 66,88" fill="${d}"/><path d="M36 82 L64 82 C66 94 58 102 50 108 C42 102 34 94 36 82Z" fill="#FF6B6B"/><path d="M42 82 L58 82 C58 90 54 96 50 100 C46 96 42 90 42 82Z" fill="#FFD93D"/><path d="M50 2 C34 16 33 40 33 84 L67 84 C67 40 66 16 50 2Z" fill="url(#g)"/><path d="M50 2 C43 9 38 18 36 28 L64 28 C62 18 57 9 50 2Z" fill="${d}"/><circle cx="50" cy="44" r="10" fill="#14171C"/><circle cx="50" cy="44" r="6" fill="${l}"/><rect x="38" y="62" width="24" height="5" rx="2.5" fill="#14171C"/><rect x="40" y="72" width="20" height="5" rx="2.5" fill="#14171C"/>`,

// Diamant brut : trois cristaux bruts qui sortent de leur roche, un par pesée, éclat de lumière
diamant3:(c,l,d)=>`<polygon points="22,30 36,42 34,76 16,76 12,46" fill="${l}"/><polygon points="22,30 30,42 24,46 16,44" fill="#fff"/><polygon points="78,24 90,44 86,76 66,76 64,40" fill="url(#g)"/><polygon points="78,24 86,42 76,44 70,38" fill="#fff"/><polygon points="50,4 66,28 62,76 38,76 34,28" fill="url(#g)"/><polygon points="50,4 58,28 50,34 42,28" fill="#fff"/><polygon points="50,34 62,30 60,70 50,70" fill="${d}"/><path d="M4 106 L10 80 L24 70 L44 76 L64 68 L84 74 L96 106Z" fill="#14171C"/><path d="M14 92 L30 84 M54 86 L72 80" stroke="${d}" stroke-width="3" stroke-linecap="round"/>${spark(84,10,8,'#fff')}`,

// Grand chelem : la couronne à trois pointes, trois joyaux pour les trois titres (bras, jambes, tronc)
alltitles:(c,l,d)=>`<path d="M6 100 Q6 106 12 106 L88 106 Q94 106 94 100 L94 38 L72 60 L50 16 L28 60 L6 38Z" fill="url(#g)"/><circle cx="6" cy="36" r="6" fill="#fff"/><circle cx="50" cy="14" r="7" fill="#fff"/><circle cx="94" cy="36" r="6" fill="#fff"/><rect x="6" y="78" width="88" height="16" fill="#14171C"/><circle cx="28" cy="86" r="6.5" fill="#FF6B6B"/><circle cx="50" cy="86" r="6.5" fill="#6BCB77"/><circle cx="72" cy="86" r="6.5" fill="#5DA9FF"/><path d="M28 60 L50 36 L72 60" stroke="${d}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

// Deux ans : le sablier presque écoulé, le sable des vingt-quatre mois au fond, mention 24
streak24:(c,l,d)=>`<rect x="12" y="4" width="76" height="11" rx="4" fill="url(#g)"/><rect x="12" y="95" width="76" height="11" rx="4" fill="url(#g)"/><rect x="16" y="14" width="6" height="82" fill="${d}"/><rect x="78" y="14" width="6" height="82" fill="${d}"/><path d="M26 15 L74 15 L74 32 Q74 50 54 55 Q74 60 74 78 L74 95 L26 95 L26 78 Q26 60 46 55 Q26 50 26 32Z" fill="#14171C"/><path d="M38 44 L62 44 Q50 54 38 44Z" fill="${l}"/><rect x="48.5" y="52" width="3" height="18" fill="${l}"/><path d="M29 95 L71 95 L71 86 Q71 70 50 66 Q29 70 29 86Z" fill="${l}"/>${T(50,92,17,'#14171C','24')}`,

// Panthéon : le temple à colonnes, fronton triangulaire, marches, mention 50 au fronton
badges50:(c,l,d)=>`<rect x="4" y="96" width="92" height="10" rx="2" fill="${d}"/><rect x="10" y="88" width="80" height="9" fill="url(#g)"/><rect x="10" y="34" width="80" height="56" fill="#14171C"/>${[13,34,55,76].map(x=>`<rect x="${x}" y="40" width="11" height="48" fill="url(#g)"/><rect x="${x-2}" y="36" width="15" height="6" rx="1" fill="${l}"/>`).join('')}<rect x="6" y="28" width="88" height="9" fill="url(#g)"/><polygon points="2,30 50,4 98,30" fill="url(#g)"/><polygon points="14,27 50,9 86,27" fill="#14171C"/>${T(50,26,14,'#fff','50')}`,

// Trésorier : le coffre au trésor ouvert, pièces d'or qui débordent, cadenas, mention 30
badges30:(c,l,d)=>`<g transform="rotate(-8 50 44)"><path d="M8 46 L92 46 L92 40 Q92 12 50 12 Q8 12 8 40Z" fill="url(#g)"/><path d="M14 44 L86 44 L86 40 Q86 20 50 20 Q14 20 14 40Z" fill="#14171C"/></g><rect x="12" y="38" width="76" height="16" fill="#14171C"/>${[[28,48],[50,44],[72,48],[39,52],[61,52]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="#FFD93D" stroke="#14171C" stroke-width="2"/>`).join('')}<rect x="8" y="54" width="84" height="52" rx="4" fill="url(#g)"/><rect x="8" y="54" width="84" height="7" fill="${d}"/><rect x="22" y="54" width="7" height="52" fill="${d}"/><rect x="71" y="54" width="7" height="52" fill="${d}"/><rect x="40" y="62" width="20" height="18" rx="3" fill="#14171C"/><circle cx="50" cy="69" r="3.5" fill="#FFD93D"/><rect x="48.5" y="69" width="3" height="7" fill="#FFD93D"/>${T(50,99,16,'#14171C','30')}`,

// Voyant : la boule de cristal sur son socle, un œil grand ouvert apparaît dedans, éclat de lumière
voyant:(c,l,d)=>`<path d="M22 106 L78 106 L70 88 L30 88Z" fill="${d}"/><rect x="28" y="84" width="44" height="8" rx="3" fill="#14171C"/><circle cx="50" cy="46" r="42" fill="url(#g)"/><circle cx="50" cy="46" r="33" fill="#14171C"/><path d="M26 48 Q50 24 74 48 Q50 72 26 48Z" fill="#fff"/><circle cx="50" cy="48" r="10" fill="${c}"/><circle cx="50" cy="48" r="4.5" fill="#14171C"/>${spark(30,22,8,'#fff')}${spark(70,70,5,'#fff')}`,

// Nostradamus : le chapeau pointu du mage, étoiles et lune, trois étoiles pour trois mois
nostradamus:(c,l,d)=>`<ellipse cx="50" cy="90" rx="47" ry="13" fill="${d}"/><path d="M50 4 C44 30 20 58 12 84 L88 84 C78 58 58 34 50 4Z" fill="url(#g)"/><path d="M11 84 Q50 72 89 84 L91 92 Q50 104 9 92Z" fill="#14171C"/>${star(48,54,8,'#F6DE96')}${star(34,72,5.5,'#F6DE96')}${star(62,36,5.5,'#F6DE96')}<path d="M66 60 A10 10 0 1 1 60 76 A7 7 0 1 0 66 60Z" fill="#fff"/>`,

// Boule fêlée : la boule de cristal fissurée de haut en bas, un éclat qui saute, point d'interrogation
boulefelee:(c,l,d)=>`<path d="M22 106 L78 106 L70 88 L30 88Z" fill="${d}"/><rect x="28" y="84" width="44" height="8" rx="3" fill="#14171C"/><g transform="rotate(8 50 50)"><circle cx="50" cy="48" r="40" fill="url(#g)"/><circle cx="50" cy="48" r="31" fill="#14171C"/><polyline points="46,8 42,26 56,40 44,56 54,72 48,88" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${T(60,62,30,l,'?')}</g><polygon points="80,4 94,12 84,24" fill="url(#g)"/><polygon points="86,10 90,12 88,16" fill="#14171C"/>`,

// Lecteur : le parchemin déroulé portant un grand point d'interrogation, l'aide a été lue partout
s_lecteur:(c,l,d)=>`<rect x="16" y="12" width="68" height="86" fill="url(#g)"/><rect x="4" y="4" width="92" height="16" rx="8" fill="${d}"/><rect x="4" y="90" width="92" height="16" rx="8" fill="${d}"/><circle cx="12" cy="12" r="4" fill="#14171C"/><circle cx="88" cy="12" r="4" fill="#14171C"/><circle cx="12" cy="98" r="4" fill="#14171C"/><circle cx="88" cy="98" r="4" fill="#14171C"/><rect x="26" y="26" width="48" height="5" rx="2.5" fill="#14171C"/><rect x="26" y="36" width="30" height="5" rx="2.5" fill="#14171C"/>${T(56,84,48,'#14171C','?')}`,

// Lève-tôt : la tête du coq qui chante, crête rouge, bec et barbillon, le soleil se lève derrière
s_aube:(c,l,d)=>`<circle cx="84" cy="18" r="12" fill="#FFD93D"/><g stroke="#FFD93D" stroke-width="3" stroke-linecap="round"><line x1="84" y1="2" x2="84" y2="0"/><line x1="70" y1="6" x2="68" y2="4"/><line x1="98" y1="6" x2="100" y2="4"/><line x1="66" y1="18" x2="63" y2="18"/></g><path d="M30 34 Q26 16 40 24 Q42 6 52 20 Q58 4 62 24 Q70 20 66 38Z" fill="#FF6B6B"/><path d="M26 74 L64 74 L72 106 L16 106Z" fill="url(#g)"/><circle cx="44" cy="56" r="27" fill="url(#g)"/><polygon points="68,50 94,58 68,66" fill="#FFD93D"/><path d="M60 70 Q70 86 58 86 Q50 76 60 70Z" fill="#FF6B6B"/><circle cx="56" cy="50" r="5.5" fill="#14171C"/><circle cx="58" cy="48" r="2" fill="#fff"/>`,

// Noctambule : le hibou perché sur sa branche sous le croissant de lune, grands yeux ronds
s_nuit:(c,l,d)=>`<path d="M22 6 A18 18 0 1 0 22 42 A14 14 0 1 1 22 6Z" fill="#F6DE96"/><rect x="2" y="98" width="96" height="8" rx="4" fill="${d}"/><polygon points="30,38 36,14 48,34" fill="url(#g)"/><polygon points="86,38 80,14 68,34" fill="url(#g)"/><ellipse cx="58" cy="66" rx="32" ry="36" fill="url(#g)"/><ellipse cx="58" cy="84" rx="16" ry="13" fill="#14171C"/><path d="M46 80 Q58 86 70 80 M46 90 Q58 96 70 90" stroke="${l}" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="46" cy="52" r="13" fill="#fff"/><circle cx="70" cy="52" r="13" fill="#fff"/><circle cx="46" cy="52" r="7" fill="#14171C"/><circle cx="70" cy="52" r="7" fill="#14171C"/><circle cx="48" cy="50" r="2.2" fill="#fff"/><circle cx="72" cy="50" r="2.2" fill="#fff"/><polygon points="53,62 63,62 58,72" fill="#FFD93D"/><ellipse cx="48" cy="99" rx="6" ry="3.5" fill="#FFD93D"/><ellipse cx="68" cy="99" rx="6" ry="3.5" fill="#FFD93D"/>`,

// Curieux avant tout : deux yeux qui lorgnent par-dessus le mur, doigts accrochés au bord, regard de côté
s_curieux:(c,l,d)=>`<path d="M18 64 A32 32 0 0 1 82 64Z" fill="#fff"/><circle cx="36" cy="50" r="9" fill="#14171C"/><circle cx="64" cy="50" r="9" fill="#14171C"/><circle cx="40" cy="48" r="4" fill="#fff"/><circle cx="68" cy="48" r="4" fill="#fff"/><path d="M26 36 Q36 30 46 36 M54 36 Q64 30 74 36" stroke="#14171C" stroke-width="3.5" fill="none" stroke-linecap="round"/><rect x="2" y="62" width="96" height="44" rx="3" fill="url(#g)"/><g stroke="#14171C" stroke-width="2.5"><line x1="2" y1="77" x2="98" y2="77"/><line x1="2" y1="92" x2="98" y2="92"/><line x1="26" y1="62" x2="26" y2="77"/><line x1="74" y1="62" x2="74" y2="77"/><line x1="50" y1="77" x2="50" y2="92"/><line x1="18" y1="92" x2="18" y2="106"/><line x1="82" y1="92" x2="82" y2="106"/></g>${[6,14,22].map(x=>`<rect x="${x}" y="56" width="7" height="14" rx="3.5" fill="#fff"/>`).join('')}${[71,79,87].map(x=>`<rect x="${x}" y="56" width="7" height="14" rx="3.5" fill="#fff"/>`).join('')}`,

// Dix doigts : l'index qui tape sur le logo, ondes de la touche, mention 10 pour dix taps
s_doigts:(c,l,d)=>`<circle cx="40" cy="72" r="34" fill="none" stroke="${l}" stroke-width="3" stroke-dasharray="6 5"/><circle cx="40" cy="72" r="27" fill="url(#g)"/><circle cx="40" cy="72" r="19" fill="#14171C"/>${T(40,80,22,'#fff','10')}<g transform="translate(58 46) rotate(-40)"><rect x="-11" y="-54" width="22" height="60" rx="11" fill="url(#g)"/><rect x="-11" y="-54" width="22" height="30" fill="url(#g)"/><ellipse cx="0" cy="-3" rx="7" ry="8" fill="${l}"/><path d="M-11 -24 Q0 -20 11 -24 M-11 -40 Q0 -36 11 -40" stroke="${d}" stroke-width="2.5" fill="none" stroke-linecap="round"/></g><g stroke="#fff" stroke-width="3" stroke-linecap="round"><line x1="66" y1="60" x2="74" y2="64"/><line x1="48" y1="38" x2="46" y2="30"/><line x1="66" y1="44" x2="72" y2="38"/></g>`,

// Bougies : le gâteau d'anniversaire, glaçage qui coule, trois bougies allumées
s_anniv:(c,l,d)=>`<ellipse cx="50" cy="100" rx="47" ry="6" fill="${d}"/><rect x="10" y="60" width="80" height="40" rx="4" fill="url(#g)"/><path d="M10 60 L90 60 L90 72 Q85 82 80 72 Q75 82 70 72 Q65 82 60 72 Q55 82 50 72 Q45 82 40 72 Q35 82 30 72 Q25 82 20 72 Q15 82 10 72Z" fill="#fff"/><rect x="10" y="84" width="80" height="5" fill="#14171C"/>${[28,47,66].map((x,i)=>`<rect x="${x}" y="36" width="7" height="26" rx="2" fill="${i==1?'#fff':'#FF6B6B'}"/><rect x="${x}" y="44" width="7" height="4" fill="${i==1?'#FF6B6B':'#fff'}"/>${flame(x+3.5,36,22,5.5,'#FFD93D')}${flame(x+3.5,35,10,2.5,'#FF9F43')}`).join('')}`,

// Pile poil : deux pièces tombées côté pile, l'une frappée 50, l'autre 77
s_pile:(c,l,d)=>`<circle cx="34" cy="38" r="33" fill="url(#g)"/><circle cx="34" cy="38" r="26" fill="#14171C"/>${T(34,47,24,'#fff','50')}<circle cx="64" cy="72" r="35" fill="#14171C"/><circle cx="64" cy="72" r="32" fill="url(#g)"/><circle cx="64" cy="72" r="25" fill="#14171C"/>${T(64,81,25,'#F6DE96','77')}`,

// Fidèle : la tête du chien, oreilles tombantes, truffe et collier à médaille
s_fidele:(c,l,d)=>`<path d="M16 30 Q2 60 16 84 Q28 88 32 62 Q30 42 16 30Z" fill="${d}"/><path d="M84 30 Q98 60 84 84 Q72 88 68 62 Q70 42 84 30Z" fill="${d}"/><circle cx="50" cy="50" r="33" fill="url(#g)"/><ellipse cx="50" cy="70" rx="18" ry="13" fill="${l}"/><ellipse cx="50" cy="64" rx="8" ry="6" fill="#14171C"/><path d="M50 70 L50 76 M42 78 Q50 84 58 78" stroke="#14171C" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="38" cy="44" r="5.5" fill="#14171C"/><circle cx="62" cy="44" r="5.5" fill="#14171C"/><circle cx="40" cy="42" r="2" fill="#fff"/><circle cx="64" cy="42" r="2" fill="#fff"/><rect x="22" y="88" width="56" height="10" rx="5" fill="#FF6B6B"/><circle cx="50" cy="102" r="6" fill="#F6DE96"/>`,

// Espion : le feutre enfoncé, lunettes noires et col de trench relevé
s_espion:(c,l,d)=>`<path d="M4 106 L30 76 L50 90 L70 76 L96 106Z" fill="${d}"/><path d="M30 76 L50 90 L50 106 L22 106Z" fill="#14171C"/><path d="M70 76 L50 90 L50 106 L78 106Z" fill="#14171C"/><circle cx="50" cy="60" r="25" fill="${l}"/><ellipse cx="50" cy="40" rx="48" ry="9" fill="url(#g)"/><path d="M22 40 L26 12 Q50 2 74 12 L78 40Z" fill="url(#g)"/><rect x="23" y="30" width="54" height="8" fill="#14171C"/><rect x="24" y="52" width="24" height="14" rx="6" fill="#14171C"/><rect x="52" y="52" width="24" height="14" rx="6" fill="#14171C"/><line x1="48" y1="56" x2="52" y2="56" stroke="#14171C" stroke-width="3"/><line x1="28" y1="56" x2="34" y2="56" stroke="#fff" stroke-width="2" stroke-linecap="round"/><line x1="56" y1="56" x2="62" y2="56" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`,

// Comptable : le boulier, quatre tiges et leurs boules de couleur, l'onglet Évolution compté dix fois
s_comptable:(c,l,d)=>`<rect x="4" y="4" width="92" height="102" rx="7" fill="url(#g)"/><rect x="12" y="12" width="76" height="86" rx="4" fill="#14171C"/>${[[24,'#FF6B6B',[22,34,46,78]],[42,'#FFD93D',[22,34,66,78]],[60,'#6BCB77',[22,54,66,78]],[78,'#fff',[22,34,46,58]]].map(([y,f,xs])=>`<line x1="12" y1="${y}" x2="88" y2="${y}" stroke="${l}" stroke-width="3"/>${xs.map(x=>`<ellipse cx="${x}" cy="${y}" rx="6" ry="5.5" fill="${f}"/>`).join('')}`).join('')}`,

// À l'heure : le chronomètre, bouton poussoir, aiguille pile sur le douze, zone rouge des deux minutes
s_chrono:(c,l,d)=>`<rect x="43" y="2" width="14" height="12" rx="3" fill="${d}"/><rect x="46" y="12" width="8" height="8" fill="${l}"/><rect x="78" y="14" width="12" height="9" rx="2" fill="${d}" transform="rotate(45 84 18)"/><circle cx="50" cy="62" r="44" fill="url(#g)"/><circle cx="50" cy="62" r="35" fill="#14171C"/>${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>`<rect x="48.5" y="30" width="3" height="${a%90?5:9}" fill="${a%90?l:'#fff'}" transform="rotate(${a} 50 62)"/>`).join('')}<path d="M43.9 27.5 A35 35 0 0 1 56.1 27.5" stroke="#FF6B6B" stroke-width="6" fill="none"/><line x1="50" y1="62" x2="50" y2="36" stroke="#fff" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="62" r="5.5" fill="#FF6B6B"/>`,

// Vendredi 13 : le chat noir au dos rond devant la pleine lune, yeux jaunes, queue dressée, mention 13
s_v13:(c,l,d)=>`<circle cx="50" cy="52" r="46" fill="url(#g)"/>${T(62,28,20,'#14171C','13')}<rect x="4" y="94" width="92" height="7" rx="3" fill="#14171C"/><polygon points="12,46 18,28 28,44" fill="#14171C"/><polygon points="26,44 36,28 40,46" fill="#14171C"/><path d="M26 66 Q48 30 76 72 L76 94 L26 94Z" fill="#14171C"/><circle cx="27" cy="54" r="14" fill="#14171C"/><path d="M74 90 Q98 86 92 58" stroke="#14171C" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="30" y="80" width="9" height="14" fill="#14171C"/><rect x="62" y="80" width="9" height="14" fill="#14171C"/><ellipse cx="22" cy="54" rx="3" ry="4" fill="#FFD93D"/><ellipse cx="31" cy="54" rx="3" ry="4" fill="#FFD93D"/>`,

// Bonne année : la bouteille de champagne qui saute, bouchon qui s'envole, confettis
s_nouvelan:(c,l,d)=>`<g fill="#FF6B6B"><circle cx="14" cy="22" r="3.5"/><rect x="20" y="40" width="6" height="6" rx="1" transform="rotate(20 23 43)"/><circle cx="90" cy="46" r="3.5"/></g><g fill="#FFD93D"><rect x="8" y="8" width="6" height="6" rx="1" transform="rotate(-15 11 11)"/><circle cx="26" cy="10" r="3.5"/><rect x="92" y="28" width="6" height="6" rx="1" transform="rotate(30 95 31)"/></g><g fill="#6BCB77"><circle cx="8" cy="36" r="3.5"/><rect x="68" y="30" width="6" height="6" rx="1" transform="rotate(25 71 33)"/></g><g stroke="#fff" stroke-width="3" stroke-linecap="round"><line x1="60" y1="12" x2="68" y2="6"/><line x1="62" y1="20" x2="72" y2="18"/><line x1="38" y1="14" x2="32" y2="8"/></g><rect x="76" y="2" width="12" height="16" rx="4" fill="#D9AE4A" transform="rotate(35 82 10)"/><rect x="44" y="12" width="12" height="26" fill="url(#g)"/><rect x="42" y="10" width="16" height="9" rx="3" fill="#F6DE96"/><path d="M30 56 Q30 40 44 34 L56 34 Q70 40 70 56Z" fill="url(#g)"/><rect x="30" y="52" width="40" height="54" rx="6" fill="url(#g)"/><rect x="36" y="64" width="28" height="24" rx="3" fill="#fff"/>${star(50,76,9,c)}`,

// Photographe : le portrait de profil entouré des deux flèches de remplacement, pastille 3
s_photo:(c,l,d)=>`<path d="M16 76 A38 38 0 0 1 30 26" stroke="url(#g)" stroke-width="9" fill="none" stroke-linecap="round"/><polygon points="41,16 21,22 34,37" fill="url(#g)"/><path d="M84 34 A38 38 0 0 1 70 84" stroke="url(#g)" stroke-width="9" fill="none" stroke-linecap="round"/><polygon points="59,94 79,88 66,73" fill="url(#g)"/><circle cx="50" cy="55" r="29" fill="#14171C"/><circle cx="50" cy="45" r="11" fill="#fff"/><path d="M30 75 Q50 54 70 75 Q50 86 30 75Z" fill="#fff"/><circle cx="86" cy="98" r="11" fill="#FF6B6B"/>${T(86,104,16,'#fff','3')}`,

// Premier mot : la plume du stylo qui trace sa première ligne, goutte d'encre
s_mot:(c,l,d)=>`<path d="M24 94 Q44 80 60 94 Q76 108 94 94" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round"/><g transform="rotate(35 50 55)"><rect x="37" y="-2" width="26" height="52" rx="7" fill="#14171C"/><rect x="36" y="46" width="28" height="7" rx="2" fill="${l}"/><polygon points="36,52 64,52 56,88 50,102 44,88" fill="url(#g)"/><line x1="50" y1="68" x2="50" y2="98" stroke="#14171C" stroke-width="2.5" stroke-linecap="round"/><circle cx="50" cy="66" r="3.5" fill="#14171C"/></g><circle cx="22" cy="98" r="4" fill="${c}"/>`,

// Bavard : le porte-voix et ses ondes sonores, mention 10 sur le pavillon
s_bavard:(c,l,d)=>`<rect x="4" y="38" width="12" height="34" rx="4" fill="${d}"/><polygon points="12,40 68,10 68,100 12,70" fill="url(#g)"/><rect x="66" y="6" width="10" height="98" rx="4" fill="${d}"/><rect x="24" y="70" width="14" height="32" rx="5" fill="#14171C"/><path d="M84 44 A14 14 0 0 1 84 66" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M90 36 A22 22 0 0 1 90 74" stroke="${l}" stroke-width="3.5" fill="none" stroke-linecap="round"/>${T(44,62,19,'#14171C','10')}`,

// Mauvaise langue : le serpent lové, langue fourchue tirée vers les autres
s_langue:(c,l,d)=>`<path d="M66 34 C40 40 20 56 30 70 C40 84 70 72 72 86 C74 98 46 102 16 96" stroke="url(#g)" stroke-width="14" fill="none" stroke-linecap="round"/><circle cx="66" cy="20" r="16" fill="url(#g)"/><circle cx="72" cy="15" r="4.5" fill="#14171C"/><circle cx="73.5" cy="13.5" r="1.6" fill="#fff"/><path d="M80 26 L92 30 M92 30 L98 24 M92 30 L98 36" stroke="#FF6B6B" stroke-width="3.5" fill="none" stroke-linecap="round"/>${[[38,46],[30,70],[62,82],[44,96]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3.5" fill="#14171C"/>`).join('')}`,

// Optimiste : l'arc-en-ciel au-dessus du soleil qui sourit, petits nuages aux pieds
s_optimiste:(c,l,d)=>`<path d="M6 56 A44 44 0 0 1 94 56" stroke="#FF6B6B" stroke-width="8" fill="none"/><path d="M14 56 A36 36 0 0 1 86 56" stroke="#FFD93D" stroke-width="8" fill="none"/><path d="M22 56 A28 28 0 0 1 78 56" stroke="#6BCB77" stroke-width="8" fill="none"/><path d="M30 56 A20 20 0 0 1 70 56" stroke="url(#g)" stroke-width="8" fill="none"/><circle cx="50" cy="78" r="18" fill="#FFD93D"/><circle cx="43" cy="74" r="2.8" fill="#14171C"/><circle cx="57" cy="74" r="2.8" fill="#14171C"/><path d="M40 82 Q50 92 60 82" stroke="#14171C" stroke-width="3.5" fill="none" stroke-linecap="round"/><ellipse cx="16" cy="96" rx="14" ry="8" fill="#fff"/><ellipse cx="26" cy="90" rx="9" ry="7" fill="#fff"/><ellipse cx="84" cy="96" rx="14" ry="8" fill="#fff"/><ellipse cx="74" cy="90" rx="9" ry="7" fill="#fff"/>`

});
})();

// ---- medals/exos-1.js ----
// Lot exos-1 : 22 paliers de performance (pf_<key>), signature (c,l,d,t), t = 0 Bronze, 1 Argent, 2 Or, 3 Diamant, 4 Légende.
// Chaque exercice a sa scène propre (geste ou matériel) dans un disque ; chaque palier ajoute des éléments dessinés :
// t1 détail de matériel + bord argenté, t2 lauriers et ruban dorés, t3 rayons, facettes et éclats, t4 couronne et flammes.
(()=>{
window.MEDALS=window.MEDALS||{};
const F='font-family="Barlow,Oswald,sans-serif" font-weight="700"';
const W='#FFFFFF', K='#14171C', G='#F6DE96';
const C=(x,y,r,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`;
const L=(pts,col,w=5)=>`<polyline points="${pts}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const P=(dd,f)=>`<path d="${dd}" fill="${f}"/>`;
const R=(x,y,w,h,f,rx=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}"/>`;
const T=(x,y,s,txt,f=W)=>`<text x="${x}" y="${y}" font-size="${s}" ${F} fill="${f}" text-anchor="middle" dominant-baseline="central">${txt}</text>`;
const rad=a=>a*Math.PI/180;

// Rayons derrière le disque (t3 et t4), huit pointes dans les coins
const rays=(l)=>{let s='';for(let k=0;k<8;k++){const a=rad(22.5+45*k);const cx=50,cy=60;const tx=cx+53*Math.cos(a),ty=cy-53*Math.sin(a);const bx=cx+38*Math.cos(a),by=cy-38*Math.sin(a);const px=-Math.sin(a)*6,py=-Math.cos(a)*6;s+=`<polygon points="${(bx+px).toFixed(1)},${(by+py).toFixed(1)} ${tx.toFixed(1)},${ty.toFixed(1)} ${(bx-px).toFixed(1)},${(by-py).toFixed(1)}" fill="${l}"/>`;}return s;};
// Lauriers dorés sur la couronne métallique (t2 et plus)
const laurels=()=>{let s='';for(const side of[0,1]){const pts=[];for(let i=0;i<=12;i++){const a=rad(side?(-38+6*i):(218-6*i));pts.push((50+40*Math.cos(a)).toFixed(1)+','+(60-40*Math.sin(a)).toFixed(1));}s+=L(pts.join(' '),'#C9A227',2.5);for(let i=0;i<6;i++){const a=rad(side?(-32+12*i):(212-12*i));const x=50+40*Math.cos(a),y=60-40*Math.sin(a);const tang=Math.atan2(-Math.cos(a),-Math.sin(a))*180/Math.PI;const tilt=(i%2?28:-28)*(side?-1:1);s+=`<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="6.5" ry="3" transform="rotate(${(tang+tilt).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${G}"/>`;}}return s;};
const bow=()=>P('M38 95 L50 99 L62 95 L63 104 L50 100 L37 104Z',G)+C(50,99,3,'#C9A227');
// Éclats quatre branches (t3 et plus)
const star=(x,y,r)=>P(`M${x} ${y-r} Q${x} ${y} ${x+r} ${y} Q${x} ${y} ${x} ${y+r} Q${x} ${y} ${x-r} ${y} Q${x} ${y} ${x} ${y-r}Z`,W);
const sparkles=()=>star(15,27,7)+star(86,21,8)+star(90,91,6)+star(10,88,5);
// Couronne (t4)
const crown=(c)=>P('M26 28 L22 8 L36 19 L50 4 L64 19 L78 8 L74 28Z',G)+R(26,22,48,6,'#C9A227')+C(36,25,2.8,c)+C(50,25,2.8,c)+C(64,25,2.8,c)+C(50,6,2.5,W);
// Flammes au pied du disque (t4)
const tongue=(x,y,h,w)=>P(`M${x-w} ${y} Q${x-w-3} ${y-h*.55} ${x} ${y-h} Q${x+w+3} ${y-h*.55} ${x+w} ${y}Z`,'#FF5A2E')+P(`M${x-w*.5} ${y} Q${x-w*.5} ${y-h*.4} ${x} ${y-h*.62} Q${x+w*.5} ${y-h*.4} ${x+w*.5} ${y}Z`,'#FFD93D');
const flames=()=>tongue(24,98,13,6)+tongue(76,98,13,6)+tongue(37,105,19,7)+tongue(63,105,19,7)+tongue(50,107,22,8);
// Anneau de suspension (t0 à t3)
const hanger=(d)=>`<circle cx="50" cy="11" r="5" fill="none" stroke="${d}" stroke-width="4"/>`;

// Cadre complet : fond, disque, bord argenté, cœur sombre. La scène vient ensuite, puis les ornements.
const frame=(t,c,l,d)=>(t>=3?rays(l):'')+(t<4?hanger(d):'')+C(50,60,44,'url(#g)')+(t>=1?`<circle cx="50" cy="60" r="40" fill="none" stroke="#C3C8CE" stroke-width="3"/>`:'')+C(50,60,36,K);
const deco=(t,c)=>(t>=2?laurels():'')+(t>=3?`<circle cx="50" cy="60" r="40" fill="none" stroke="${W}" stroke-width="3" stroke-dasharray="7 5"/>`+sparkles():'')+(t===2||t===3?bow():'')+(t>=4?flames()+crown(c):'');
const med=(scene)=>(c,l,d,t)=>frame(t,c,l,d)+scene(c,l,d,t)+deco(t,c);

// Petits accessoires
const floor=(c,y=84,x1=24,x2=76)=>L(`${x1},${y} ${x2},${y}`,c,4);
const mat=(l,x=28,y=81,w=44)=>R(x,y,w,6,l,3);
const chrono=(x,y,r,c)=>C(x,y,r,K)+`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="3.5"/>`+R(x-3,y-r-5,6,4,c,1)+L(`${x},${y} ${x},${y-r*.6}`,W,2.5)+L(`${x},${y} ${x+r*.45},${y}`,W,2.5);
const dumb=(x,y,c)=>R(x-9,y-2,18,4,W,2)+R(x-12,y-6,5,12,c,1.5)+R(x+7,y-6,5,12,c,1.5);
const heart=(x,y,s,f)=>P(`M${x} ${y+s} C${x-s*1.7} ${y-s*.1} ${x-s*.9} ${y-s*1.3} ${x} ${y-s*.3} C${x+s*.9} ${y-s*1.3} ${x+s*1.7} ${y-s*.1} ${x} ${y+s}Z`,f);
const shoe=(x,y,w,h,c)=>P(`M${x} ${y+h} L${x} ${y+h*.45} Q${x} ${y} ${x+w*.12} ${y} L${x+w*.4} ${y} Q${x+w*.5} ${y} ${x+w*.58} ${y+h*.3} L${x+w*.78} ${y+h*.55} Q${x+w} ${y+h*.62} ${x+w} ${y+h}Z`,c)+R(x,y+h-4,w,4,W,2)+L(`${x+w*.3},${y+h*.2} ${x+w*.4},${y+h*.5}`,W,2.5)+L(`${x+w*.4},${y+h*.12} ${x+w*.5},${y+h*.42}`,W,2.5);
const gem=(x,y,c)=>`<polygon points="${x-7},${y-8} ${x+7},${y-8} ${x+11},${y-1} ${x},${y+11} ${x-11},${y-1}" fill="${c}"/>`+L(`${x-11},${y-1} ${x+11},${y-1}`,W,2)+L(`${x-4},${y-1} ${x},${y+10} ${x+4},${y-1}`,W,1.8);
const bar=(y,c,l)=>L(`23,${y} 77,${y}`,c,5)+C(23,y,3.5,l)+C(77,y,3.5,l);

Object.assign(MEDALS,{

// Pompes : bonhomme en planche sur les mains, bras tendu. t1 tapis.
pf_pompes:med((c,l,d,t)=>(t>=1?mat(l):floor(c))+C(26,56,6,W)+L('35,59 70,78 72,84',W)+L('37,60 40,84',W)),

// Tractions pronation : menton au-dessus de la barre, coudes écartés, jambes repliées. t1 lest à la taille.
pf_tractions:med((c,l,d,t)=>bar(36,c,l)+C(50,31,6,W)+C(36,36,3.5,W)+C(64,36,3.5,W)+L('36,38 33,50 46,47',W)+L('64,38 67,50 54,47',W)+L('50,46 50,70',W)+L('50,70 60,80 52,90',W)+L('50,70 56,84 44,90',W)+(t>=1?C(60,66,5,c)+C(60,66,2,K):'')),

// Tractions supination : mains sous la barre, coudes devant et serrés, jambes droites. t1 kettlebell.
pf_tractsup:med((c,l,d,t)=>bar(32,c,l)+C(40,35,3.5,W)+C(60,35,3.5,W)+L('40,37 36,47 45,51',W)+L('60,37 64,47 55,51',W)+C(50,41,6,W)+L('50,50 50,70',W)+L('50,70 55,83 45,90',W)+L('50,70 45,83 55,90',W)+(t>=1?C(70,86,6,c)+`<path d="M65 82 Q70 73 75 82" fill="none" stroke="${W}" stroke-width="3" stroke-linecap="round"/>`:'')),

// Gainage : planche sur les coudes. t1 chrono.
pf_gainage:med((c,l,d,t)=>floor(c)+C(24,60,6,W)+L('30,82 44,82',W)+L('30,82 34,65',W)+L('34,65 72,78 74,84',W)+(t>=1?chrono(70,42,8,c):'')),

// Squats : cuisses à l'horizontale, bras tendus devant. t1 haltère.
pf_squats:med((c,l,d,t)=>floor(c,86)+C(40,40,6,W)+L('42,48 38,66',W)+L('38,66 60,66',W)+L('60,66 60,84',W)+L('54,86 68,86',W)+L('42,50 66,54',W)+(t>=1?dumb(70,42,c):'')),

// Dips : entre deux barres parallèles, mains sur les barres, jambes repliées. t1 bandeau et sueur.
pf_dips:med((c,l,d,t)=>L('16,56 36,56',c,5)+L('64,56 84,56',c,5)+L('22,56 22,82',c,4)+L('78,56 78,82',c,4)+C(50,34,6,W)+L('50,42 50,66',W)+L('44,42 32,56',W)+L('56,42 68,56',W)+C(32,56,3.5,W)+C(68,56,3.5,W)+L('50,66 60,78 52,88',W)+L('50,66 58,83 47,91',W)+(t>=1?`<path d="M44 33 Q50 28 56 33" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`+C(62,28,2.4,'#7FE3FF')+C(66,35,2.4,'#7FE3FF'):'')),

// Pistol squat : sur une jambe pliée, l'autre tendue devant, bras devant. t1 bidon.
pf_pistol:med((c,l,d,t)=>floor(c,86)+C(34,40,6,W)+L('36,48 32,68',W)+L('32,68 48,70',W)+L('48,70 46,86',W)+L('32,68 74,66',W)+L('36,50 62,50',W)+(t>=1?R(69,74,6,12,c,2)+R(70.5,71,3,3,W,1):'')),

// Burpees : saut bras en V, pieds décollés, traits de vitesse. t1 tapis.
pf_burpees:med((c,l,d,t)=>(t>=1?mat(l,32,85,36):floor(c,88,28,72))+C(50,34,6,W)+L('50,42 50,64',W)+L('50,44 34,30',W)+L('50,44 66,30',W)+L('50,64 38,82',W)+L('50,64 62,82',W)+L('32,78 36,78',l,3)+L('64,78 68,78',l,3)),

// Muscle-up : au-dessus de la barre, bras tendus vers le bas, jambes sous la barre. t1 éclair.
pf_muscleup:med((c,l,d,t)=>bar(62,c,l)+C(50,30,6,W)+L('50,38 50,64',W)+L('44,38 36,62',W)+L('56,38 64,62',W)+C(36,62,3.5,W)+C(64,62,3.5,W)+L('50,64 46,80 44,92',W)+L('50,64 54,80 56,92',W)+(t>=1?`<polygon points="73,34 64,48 71,48 68,60 80,46 73,46 77,34" fill="#FFD93D"/>`:'')),

// Suspension bras tendus : prise serrée, bras verticaux, jambes jointes, sablier. t1 bandes de poignet.
pf_hang:med((c,l,d,t)=>bar(33,c,l)+C(38,33,3.5,W)+C(62,33,3.5,W)+L('38,35 45,56',W)+L('62,35 55,56',W)+C(50,46,6,W)+L('50,56 50,78',W)+L('48,78 47,94',W)+L('52,78 53,94',W)+P('M64 60 L76 60 L76 63 L71.5 70 L76 77 L76 80 L64 80 L64 77 L68.5 70 L64 63Z',G)+`<polygon points="66.5,78 73.5,78 70,73" fill="${c}"/>`+(t>=1?R(35,37,7,5,'#FFD93D',1)+R(58,37,7,5,'#FFD93D',1):'')),

// L-sit : assis en l'air, jambes à l'horizontale, bras tendu au sol. t1 parallettes.
pf_lsit:med((c,l,d,t)=>floor(c,88,28,72)+C(34,40,6,W)+L('36,48 36,72',W)+L('36,72 76,72',W,6)+L('36,50 42,84',W)+C(42,85,3,W)+(t>=1?L('32,86 52,86',c,4)+L('36,86 36,88',c,3)+L('48,86 48,88',c,3):'')),

// Chaise contre le mur : dos au mur, cuisses à l'horizontale. t1 briques.
pf_chaise:med((c,l,d,t)=>R(27,36,6,48,c)+floor(c,84,27,74)+C(41,42,6,W)+L('39,50 39,68',W)+L('39,68 60,68',W)+L('60,68 60,84',W)+L('40,52 54,64',W)+(t>=1?[46,56,66,76].map(y=>L(`27,${y} 33,${y}`,K,2)).join(''):'')),

// Gainage latéral : corps en diagonale sur l'avant-bras, bras libre levé. t1 chrono.
pf_gainlat:med((c,l,d,t)=>floor(c)+C(32,48,6,W)+L('38,56 74,84',W)+L('38,56 34,84',W)+L('34,84 48,84',W)+L('40,57 48,34',W)+(t>=1?chrono(70,44,8,c):'')),

// Pompes diamant : position basse, coude relevé, gemme sous la poitrine. t1 tapis.
pf_pdiamant:med((c,l,d,t)=>(t>=1?mat(l):floor(c))+gem(68,46,c)+C(26,64,6,W)+L('35,67 70,80 72,84',W)+L('36,68 46,72 42,84',W)),

// Pompes claquées : corps décollé du sol, mains qui se rejoignent, éclat. t1 traits de vitesse.
pf_pclap:med((c,l,d,t)=>(t>=1?mat(l,34,86,32):floor(c,88,28,72))+C(26,50,6,W)+L('35,53 70,70 74,78',W)+L('35,55 32,68 42,75',W)+L('38,54 50,64 45,76',W)+star(43,80,6.5)),

// Pompes archer : un bras tendu loin sur le côté, l'autre plié sous le corps. t1 cible.
pf_parcher:med((c,l,d,t)=>floor(c)+C(40,56,6,W)+L('48,61 72,78 74,84',W)+L('47,62 24,80',W)+L('48,63 58,72 52,84',W)+(t>=1?C(72,42,8,W)+C(72,42,5,c)+C(72,42,2,W):'')),

// Pompes à une main : un seul bras au sol, l'autre dans le dos, jambes écartées. t1 haltère.
pf_pone:med((c,l,d,t)=>floor(c)+C(28,54,6,W)+L('37,57 54,66 70,76 72,84',W)+L('54,66 62,84',W)+L('38,58 42,84',W)+L('39,59 50,68',l,4)+(t>=1?dumb(68,42,c):'')),

// Course sans arrêt : coureur en pleine foulée sur une route pointillée. t1 cœur.
pf_course:med((c,l,d,t)=>`<path d="M24 86 L76 86" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-dasharray="9 5"/>`+C(58,34,6,W)+L('56,42 48,62',W)+L('48,62 64,68 66,84',W)+L('48,62 36,72 28,64',W)+L('56,43 70,48',W)+L('56,43 42,34',W)+(t>=1?heart(26,42,6,'#FF6B6B'):'')),

// 5 km chrono : grand chrono marqué 5K, chaussure dessous. t1 drapeau d'arrivée.
pf_c5k:med((c,l,d,t)=>C(50,52,19,K)+`<circle cx="50" cy="52" r="19" fill="none" stroke="${c}" stroke-width="4.5"/>`+R(46,27,8,5,c,1)+T(50,53,18,'5K')+shoe(30,74,42,14,c)+(t>=1?L('20,38 20,58',W,3)+R(20,38,14,10,W)+R(20,38,7,5,K)+R(27,43,7,5,K):'')),

// 10 km chrono : grande chaussure, 10K au-dessus. t1 petit chrono.
pf_c10k:med((c,l,d,t)=>T(54,44,21,'10K')+shoe(24,62,52,22,c)+(t>=1?chrono(24,42,8,c):'')),

// Test de Cooper : piste ovale, chrono marqué 12, coureur sur la piste. t1 plots.
pf_cooper:med((c,l,d,t)=>`<ellipse cx="50" cy="70" rx="27" ry="14" fill="none" stroke="${c}" stroke-width="7"/><ellipse cx="50" cy="70" rx="27" ry="14" fill="none" stroke="${W}" stroke-width="1.5" stroke-dasharray="5 4"/>`+C(50,40,11,K)+`<circle cx="50" cy="40" r="11" fill="none" stroke="${c}" stroke-width="3.5"/>`+R(47,25,6,4,c,1)+T(50,41,12,'12')+C(73,63,3.5,'#FFD93D')+(t>=1?`<polygon points="24,58 32,58 28,48" fill="#FF9F43"/><polygon points="68,58 76,58 72,48" fill="#FF9F43"/>`+L('25.5,55 30.5,55',W,1.5)+L('69.5,55 74.5,55',W,1.5):'')),

// Vélo : vélo de profil, roues, cadre, selle et guidon. t1 traits de vitesse.
pf_velo:med((c,l,d,t)=>`<circle cx="31" cy="74" r="11.5" fill="none" stroke="${c}" stroke-width="4"/><circle cx="69" cy="74" r="11.5" fill="none" stroke="${c}" stroke-width="4"/>`+C(31,74,2.5,W)+C(69,74,2.5,W)+L('31,74 47,72 41,52 61,52 47,72',W,4)+L('61,52 69,74',W,4)+L('36,50 46,50',W,4)+L('60,52 64,45 72,45',W,4)+C(47,72,3,c)+(t>=1?L('20,48 30,48',l,3)+L('18,54 28,54',l,3):''))

});
})();

// ---- medals/exos-2.js ----
// Lot exos-2 : 21 paliers de performance (pf_<key>), signature (c,l,d,t), t = 0 Bronze, 1 Argent, 2 Or, 3 Diamant, 4 Légende.
// Même famille visuelle que exos-1 : les aides de paliers (anneau argenté, lauriers, rayons, facettes, couronne, flammes)
// sont reprises à l'identique. Chaque exercice a sa scène propre (geste ou matériel) ; chaque palier ajoute des éléments dessinés :
// t1 détail de matériel + bord argenté, t2 lauriers et ruban dorés, t3 rayons, facettes et éclats, t4 couronne et flammes.
(()=>{
window.MEDALS=window.MEDALS||{};
const F='font-family="Barlow,Oswald,sans-serif" font-weight="700"';
const W='#FFFFFF', K='#14171C', G='#F6DE96';
const C=(x,y,r,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`;
const L=(pts,col,w=5)=>`<polyline points="${pts}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const P=(dd,f)=>`<path d="${dd}" fill="${f}"/>`;
const R=(x,y,w,h,f,rx=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}"/>`;
const T=(x,y,s,txt,f=W)=>`<text x="${x}" y="${y}" font-size="${s}" ${F} fill="${f}" text-anchor="middle" dominant-baseline="central">${txt}</text>`;
const rad=a=>a*Math.PI/180;

// Rayons derrière le disque (t3 et t4), huit pointes dans les coins
const rays=(l)=>{let s='';for(let k=0;k<8;k++){const a=rad(22.5+45*k);const cx=50,cy=60;const tx=cx+53*Math.cos(a),ty=cy-53*Math.sin(a);const bx=cx+38*Math.cos(a),by=cy-38*Math.sin(a);const px=-Math.sin(a)*6,py=-Math.cos(a)*6;s+=`<polygon points="${(bx+px).toFixed(1)},${(by+py).toFixed(1)} ${tx.toFixed(1)},${ty.toFixed(1)} ${(bx-px).toFixed(1)},${(by-py).toFixed(1)}" fill="${l}"/>`;}return s;};
// Lauriers dorés sur la couronne métallique (t2 et plus)
const laurels=()=>{let s='';for(const side of[0,1]){const pts=[];for(let i=0;i<=12;i++){const a=rad(side?(-38+6*i):(218-6*i));pts.push((50+40*Math.cos(a)).toFixed(1)+','+(60-40*Math.sin(a)).toFixed(1));}s+=L(pts.join(' '),'#C9A227',2.5);for(let i=0;i<6;i++){const a=rad(side?(-32+12*i):(212-12*i));const x=50+40*Math.cos(a),y=60-40*Math.sin(a);const tang=Math.atan2(-Math.cos(a),-Math.sin(a))*180/Math.PI;const tilt=(i%2?28:-28)*(side?-1:1);s+=`<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="6.5" ry="3" transform="rotate(${(tang+tilt).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${G}"/>`;}}return s;};
const bow=()=>P('M38 95 L50 99 L62 95 L63 104 L50 100 L37 104Z',G)+C(50,99,3,'#C9A227');
// Éclats quatre branches (t3 et plus)
const star=(x,y,r)=>P(`M${x} ${y-r} Q${x} ${y} ${x+r} ${y} Q${x} ${y} ${x} ${y+r} Q${x} ${y} ${x-r} ${y} Q${x} ${y} ${x} ${y-r}Z`,W);
const sparkles=()=>star(15,27,7)+star(86,21,8)+star(90,91,6)+star(10,88,5);
// Couronne (t4)
const crown=(c)=>P('M26 28 L22 8 L36 19 L50 4 L64 19 L78 8 L74 28Z',G)+R(26,22,48,6,'#C9A227')+C(36,25,2.8,c)+C(50,25,2.8,c)+C(64,25,2.8,c)+C(50,6,2.5,W);
// Flammes au pied du disque (t4)
const tongue=(x,y,h,w)=>P(`M${x-w} ${y} Q${x-w-3} ${y-h*.55} ${x} ${y-h} Q${x+w+3} ${y-h*.55} ${x+w} ${y}Z`,'#FF5A2E')+P(`M${x-w*.5} ${y} Q${x-w*.5} ${y-h*.4} ${x} ${y-h*.62} Q${x+w*.5} ${y-h*.4} ${x+w*.5} ${y}Z`,'#FFD93D');
const flames=()=>tongue(24,98,13,6)+tongue(76,98,13,6)+tongue(37,105,19,7)+tongue(63,105,19,7)+tongue(50,107,22,8);
// Anneau de suspension (t0 à t3)
const hanger=(d)=>`<circle cx="50" cy="11" r="5" fill="none" stroke="${d}" stroke-width="4"/>`;

// Cadre complet : fond, disque, bord argenté, cœur sombre. La scène vient ensuite, puis les ornements.
const frame=(t,c,l,d)=>(t>=3?rays(l):'')+(t<4?hanger(d):'')+C(50,60,44,'url(#g)')+(t>=1?`<circle cx="50" cy="60" r="40" fill="none" stroke="#C3C8CE" stroke-width="3"/>`:'')+C(50,60,36,K);
const deco=(t,c)=>(t>=2?laurels():'')+(t>=3?`<circle cx="50" cy="60" r="40" fill="none" stroke="${W}" stroke-width="3" stroke-dasharray="7 5"/>`+sparkles():'')+(t===2||t===3?bow():'')+(t>=4?flames()+crown(c):'');
const med=(scene)=>(c,l,d,t)=>frame(t,c,l,d)+scene(c,l,d,t)+deco(t,c);

// Petits accessoires
const floor=(c,y=84,x1=24,x2=76)=>L(`${x1},${y} ${x2},${y}`,c,4);
const D=(pts,col,w,da)=>`<polyline points="${pts}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-dasharray="${da}"/>`;
const ring=(x,y,r,col,w)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${col}" stroke-width="${w}"/>`;
const heart=(x,y,s,f)=>P(`M${x} ${y+s} C${x-s*1.7} ${y-s*.1} ${x-s*.9} ${y-s*1.3} ${x} ${y-s*.3} C${x+s*.9} ${y-s*1.3} ${x+s*1.7} ${y-s*.1} ${x} ${y+s}Z`,f);
const bar=(y,c,l)=>L(`23,${y} 77,${y}`,c,5)+C(23,y,3.5,l)+C(77,y,3.5,l);
// Disques de barre (vus de face), bords arrondis
const plates=(y,c,x1=24,x2=69,h=16)=>R(x1,y-h/2,7,h,c,1.5)+R(x2,y-h/2,7,h,c,1.5);
// Disque vu de côté (cercle, cœur sombre, moyeu blanc)
const plate=(x,y,r,c)=>C(x,y,r,c)+C(x,y,r*.38,K)+C(x,y,r*.18,W);
// Ceinture de lest : ceinture dorée, chaîne, disque suspendu
const lest=(x,y,c)=>R(x-6,y,12,5,G,1.2)+D(`${x},${y+6} ${x},${y+14}`,W,2.5,'2.5 2')+plate(x,y+21,7,c);
// Cadran avec un nombre court (sans bouton)
const dial=(x,y,r,c,txt,s)=>C(x,y,r,K)+ring(x,y,r,c,3)+T(x,y+.5,s,txt);

Object.assign(MEDALS,{

// Rameur : rameur assis en fin de tirage, volant à l'avant, rail, chaîne tendue. t1 moniteur sur son bras.
pf_rameur:med((c,l,d,t)=>L('34,78 80,78',W,4)+L('80,78 80,86',W,3)+ring(26,70,9,c,4)+C(26,70,2.5,W)+L('36,70 40,78',c,4)+R(55,72,11,5,c,2)+D('30,62 52,57',l,2.5,'3 2')+C(64,44,6,W)+L('63,50 60,70',W)+L('60,72 47,64 38,74',W)+L('62,54 48,58',W)+R(45,53,5,10,c,2)+(t>=1?R(20,48,12,8,c,2)+R(22,50,8,4,W,1)+L('26,56 26,61',c,3):'')),

// Natation : nageur en crawl, bras levé, deux vagues. t1 bonnet, lunettes et bulles.
pf_natation:med((c,l,d,t)=>`<path d="M16 72 Q24 64 32 72 T48 72 T64 72 T80 72" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M22 82 Q29 76 36 82 T50 82 T64 82 T78 82" fill="none" stroke="${l}" stroke-width="3" stroke-linecap="round"/>`+L('36,63 70,66',W)+L('44,62 54,42 64,48',W)+L('70,66 80,58',W)+C(30,58,6,W)+(t>=1?P('M24 58 A6 6 0 0 1 36 58Z',c)+C(34,60,2,c)+C(22,68,2.5,l)+C(18,62,2,l)+C(82,66,2.5,l):'')),

// Corde à sauter : sauteur pieds joints en l'air, corde en U sous lui, poignées. t1 bandes de poignet et sol.
pf_corde:med((c,l,d,t)=>`<path d="M30 56 Q50 104 70 56" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`+L('30,88 70,88',c,3)+R(27.5,46,5,11,l,2)+R(67.5,46,5,11,l,2)+C(50,36,6,W)+L('50,44 50,64',W)+L('50,48 32,53',W)+L('50,48 68,53',W)+L('50,64 45,79',W)+L('50,64 55,79',W)+(t>=1?R(29,45,6,4,'#FFD93D',1)+R(65,45,6,4,'#FFD93D',1)+L('38,84 42,84',l,2.5)+L('58,84 62,84',l,2.5):'')),

// Double-unders : saut groupé plus haut, deux passages de corde sous les pieds. t1 traits de vitesse.
pf_du:med((c,l,d,t)=>`<path d="M28 54 Q50 116 72 54" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/><path d="M28 54 Q50 4 72 54" fill="none" stroke="${l}" stroke-width="3" stroke-linecap="round"/>`+L('32,90 68,90',c,3)+R(26,47,4,10,l,2)+R(70,47,4,10,l,2)+C(50,38,6,W)+L('50,46 50,60',W)+L('50,49 32,53',W)+L('50,49 68,53',W)+L('50,60 42,70',W)+L('50,60 58,70',W)+(t>=1?L('22,62 28,62',l,3)+L('72,62 78,62',l,3)+L('24,70 29,70',l,2.5)+L('71,70 76,70',l,2.5):'')),

// Escaliers (stairmaster) : machine à marches tournantes, mât et console, grimpeur main sur la console. t1 écran allumé et pied de la machine.
pf_stairs:med((c,l,d,t)=>R(26,80,14,6,c,1)+R(36,72,14,6,c,1)+R(46,64,14,6,c,1)+R(56,56,14,6,c,1)+L('74,52 74,86',c,5)+R(64,42,16,9,c,2)+L('66,51 60,55',c,4)+C(44,32,6,W)+L('45,40 46,56',W)+L('46,56 42,66 43,72',W)+L('46,56 50,60 53,64',W)+L('45,44 60,48',W)+(t>=1?R(67,44,10,5,W,1)+L('66,86 82,86',c,4)+L('28,78 30,78',l,2)+L('38,70 40,70',l,2)+L('48,62 50,62',l,2):'')),

// 100 étages chrono : tour avec escalier en zigzag et le nombre 100 au sommet. t1 chrono et antenne.
pf_stairs100:med((c,l,d,t)=>R(30,38,34,52,c,4)+L('38,84 56,84 56,74 38,74 38,64 56,64 56,54 38,54',W,3.5)+T(47,45,11,'100',K)+(t>=1?L('47,38 47,30',W,2.5)+C(47,29,2,'#FF5A2E')+dial(74,46,8,c,'',8)+L('74,46 74,41',W,2.5)+L('74,46 77,46',W,2.5)+R(71,34,6,4,c,1):'')),

// Étages en 10 minutes : coureur qui bondit dans un escalier montant, cadran marqué 10. t1 gouttes de sueur et traits de vitesse.
pf_stairs10:med((c,l,d,t)=>P('M28 86 L28 78 L39 78 L39 68 L51 68 L51 58 L62 58 L62 48 L74 48 L74 86Z',c)+C(40,38,6,W)+L('41,46 46,60',W)+L('46,60 36,70 34,78',W)+L('46,60 54,54 58,58',W)+L('42,48 32,54',W)+L('42,48 52,50',W)+dial(66,36,9,c,'10',9)+(t>=1?C(30,40,2.2,'#7FE3FF')+C(32,46,2.2,'#7FE3FF')+L('24,62 30,62',l,2.5)+L('22,68 28,68',l,2.5):'')),

// Étages en 30 minutes : marcheur régulier dans un escalier qui monte vers la gauche, cadran marqué 30. t1 bidon à la main et serviette.
pf_stairs30:med((c,l,d,t)=>P('M26 48 L38 48 L38 58 L50 58 L50 68 L62 68 L62 78 L74 78 L74 86 L26 86Z',c)+dial(34,36,9,c,'30',9)+C(60,31,5.5,W)+L('58,38 54,50',W)+L('54,50 45,50 44,58',W)+L('54,50 58,60 56,68',W)+L('57,42 66,50',W)+L('57,42 49,45',W)+(t>=1?R(64,50,6,11,c,2)+R(65.5,47,3,3,W,1)+L('53,40 61,40',G,3):'')),

// Niveau max tenu : cadran de vitesse, aiguille dans la zone rouge, MAX en toutes lettres. t1 graduations et éclair.
pf_stairsmax:med((c,l,d,t)=>`<path d="M22 72 A28 28 0 0 1 78 72" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/><path d="M66 50 A28 28 0 0 1 78 72" fill="none" stroke="#FF5A2E" stroke-width="7" stroke-linecap="round"/>`+L('50,72 70,54',W,4)+C(50,72,4.5,W)+T(50,86,12,'MAX')+(t>=1?[150,120,90,60,30].map(a=>{const x1=50+22*Math.cos(rad(a)),y1=72-22*Math.sin(rad(a)),x2=50+18*Math.cos(rad(a)),y2=72-18*Math.sin(rad(a));return L(`${x1.toFixed(1)},${y1.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`,W,2);}).join('')+`<polygon points="31,58 25,68 29,68 27,76 34,65 30,65 33,58" fill="#FFD93D"/>`:'')),

// VO2max : poumons avec trachée et embout de masque. t1 bulles d'oxygène.
pf_vo2:med((c,l,d,t)=>`<ellipse cx="38" cy="68" rx="11" ry="18" transform="rotate(12 38 68)" fill="${c}"/><ellipse cx="62" cy="68" rx="11" ry="18" transform="rotate(-12 62 68)" fill="${c}"/>`+L('50,34 50,58',W,5)+L('50,56 42,64',W,4)+L('50,56 58,64',W,4)+R(42,28,16,7,l,2.5)+R(45,30,10,3,K,1)+(t>=1?C(26,44,3,l)+C(32,36,2.2,l)+C(74,44,3,l)+C(68,36,2.2,l)+C(22,56,2,l)+C(78,56,2,l):'')),

// Fréquence cardiaque au repos : grand cœur traversé d'un tracé, pouls calme. t1 lune de la nuit et étoiles.
pf_fcrepos:med((c,l,d,t)=>heart(50,58,20,c)+L('18,64 38,64 44,52 50,76 56,60 62,64 82,64',W,3.5)+(t>=1?P('M68 30 A9 9 0 1 0 78 42 A7 7 0 1 1 68 30Z','#FFD93D')+star(26,34,3.5)+star(20,46,2.8):'')),

// Squat barre : bonhomme cuisses à l'horizontale, barre sur les épaules, disques. t1 ceinture et traits d'effort.
pf_squatbar:med((c,l,d,t)=>L('26,88 74,88',c,3)+L('22,46 78,46',W,5)+plates(46,c)+C(50,36,6,W)+L('50,46 45,64',W)+L('45,64 66,66',W)+L('66,66 64,88',W)+L('59,88 70,88',W,4)+L('49,48 36,47',W,4)+L('49,48 63,47',W,4)+(t>=1?R(42,52,10,5,G,1)+L('30,60 34,62',l,2.5)+L('30,66 34,66',l,2.5):'')),

// Développé couché : banc, athlète allongé, bras tendus vers la barre, pieds au sol. t1 montants du rack.
pf_bench:med((c,l,d,t)=>R(26,70,44,6,c,2)+L('32,76 32,86',c,4)+L('64,76 64,86',c,4)+L('22,44 78,44',W,5)+plates(44,c)+C(24,64,6,W)+L('30,66 62,66',W)+L('36,66 38,46',W)+L('62,66 72,76 72,86',W)+(t>=1?L('20,52 20,70',l,3)+L('80,52 80,70',l,3)+L('17,52 23,52',l,3)+L('77,52 83,52',l,3):'')),

// Soulevé de terre : barre décollée du sol, grands disques, dos penché, bras tendus. t1 ceinture et nuages de craie.
pf_deadlift:med((c,l,d,t)=>L('28,88 72,88',c,3)+L('20,72 80,72',W,5)+plate(26,72,8,c)+plate(74,72,8,c)+C(54,38,6,W)+L('52,46 44,60',W)+L('44,60 50,74 46,88',W)+L('51,48 50,72',W,4)+(t>=1?R(43,51,10,5,G,1)+C(36,80,2.6,l)+C(31,84,2,l)+C(64,80,2.6,l)+C(69,84,2,l):'')),

// Marche du fermier : marcheur de face, deux charges à poignée au bout des bras. t1 sangles de poignet et piste pointillée.
pf_farmer:med((c,l,d,t)=>(t>=1?D('28,88 72,88',l,3,'5 4'):L('28,88 72,88',c,3))+R(30,70,12,14,c,2)+R(58,70,12,14,c,2)+`<path d="M32 70 Q36 62 40 70" fill="none" stroke="${W}" stroke-width="3" stroke-linecap="round"/><path d="M60 70 Q64 62 68 70" fill="none" stroke="${W}" stroke-width="3" stroke-linecap="round"/>`+C(50,36,6,W)+L('50,44 50,66',W)+L('45,46 36,64',W,4)+L('55,46 64,64',W,4)+L('50,66 42,86',W)+L('50,66 58,84',W)+(t>=1?R(33,58,7,4,G,1)+R(60,58,7,4,G,1):'')),

// Développé militaire : barre verrouillée au-dessus de la tête, bras en V, debout. t1 ceinture et sol.
pf_ohp:med((c,l,d,t)=>L('27,38 73,38',W,5)+plates(38,c,27,67,12)+C(50,48,6,W)+L('44,58 56,58',W)+L('44,58 36,40',W)+L('56,58 64,40',W)+L('50,58 50,74',W)+L('50,74 43,90',W)+L('50,74 57,90',W)+(t>=1?R(45,66,10,5,G,1)+L('30,90 70,90',c,3):'')),

// Rowing barre : buste penché à l'horizontale, jambes écartées, disque tiré vers le ventre. t1 ceinture et genouillères.
pf_row:med((c,l,d,t)=>L('28,88 72,88',c,3)+L('40,62 60,46',W)+L('40,62 34,88',W)+L('40,62 46,88',W)+C(66,40,6,W)+L('58,48 58,66',W,4)+plate(58,74,9,c)+(t>=1?R(45,49,10,6,G,1)+R(34,72,6,5,c,1.5)+R(41,72,6,5,c,1.5):'')),

// Hip thrust : dos sur le banc, disque posé sur les hanches, pieds au sol. t1 bande élastique au genou.
pf_hipthrust:med((c,l,d,t)=>L('30,88 70,88',c,3)+R(16,62,20,7,c,2)+L('20,69 20,86',c,4)+L('32,69 32,86',c,4)+C(23,52,6,W)+L('28,58 56,64',W)+L('56,64 70,68',W)+L('70,68 70,88',W)+plate(55,52,11,c)+(t>=1?R(63,64,9,5,G,1)+L('30,62 48,62',W,2):'')),

// Tractions lestées : menton sous la barre, ceinture de lest, disque pendu entre les jambes. t1 nuages de craie aux mains.
pf_pullupW:med((c,l,d,t)=>bar(34,c,l)+C(34,34,3.5,W)+C(66,34,3.5,W)+L('34,36 44,52',W)+L('66,36 56,52',W)+C(50,43,6,W)+L('50,50 50,66',W)+L('50,66 46,88',W)+L('50,66 54,88',W)+lest(50,62,c)+(t>=1?C(27,42,2.6,l)+C(24,48,2,l)+C(73,42,2.6,l)+C(76,48,2,l):'')),

// Dips lestés : coudes à angle droit entre deux barres, ceinture de lest, jambes repliées en arrière. t1 pieds des montants.
pf_dipsW:med((c,l,d,t)=>L('18,54 38,54',c,5)+L('62,54 82,54',c,5)+L('24,54 24,80',c,4)+L('76,54 76,80',c,4)+C(50,34,6,W)+L('50,42 50,60',W)+L('46,44 36,46 36,54',W)+L('54,44 64,46 64,54',W)+L('50,60 62,66 64,82',W)+L('50,60 60,70 62,86',W)+lest(50,56,c)+(t>=1?L('21,80 27,80',c,4)+L('73,80 79,80',c,4):'')),

// Curl barre : de face, coudes au corps, avant-bras relevés vers la barre. t1 bandes de poignet et sol.
pf_curl:med((c,l,d,t)=>C(50,32,6,W)+L('38,42 62,42',W)+L('38,42 38,62',W)+L('62,42 62,62',W)+L('50,42 50,70',W)+L('50,70 42,90',W)+L('50,70 58,90',W)+L('38,62 42,50',W)+L('62,62 58,50',W)+L('24,50 76,50',W,5)+plates(50,c,24,70)+C(42,50,3.5,c)+C(58,50,3.5,c)+(t>=1?R(37,53,7,4,'#FFD93D',1)+R(56,53,7,4,'#FFD93D',1)+L('30,90 70,90',c,3):''))

});
})();

