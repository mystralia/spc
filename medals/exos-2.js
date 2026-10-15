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
