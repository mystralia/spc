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
