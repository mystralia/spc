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
