// Harnais de contrôle : node render.js <fichier.js> <sortie.png> [--perf]
const {chromium}=require('playwright');const path=require('path');const fs=require('fs');
const [,,file,out,flag]=process.argv; if(!file||!out){console.error('usage: node render.js <fichier.js> <sortie.png> [--perf]');process.exit(1);}
const src=fs.readFileSync(path.resolve(file),'utf8');
const hexMix=(h,t,to)=>{const a=parseInt(h.slice(1),16),b=parseInt(to.slice(1),16);const f=(s)=>Math.round(((a>>s)&255)*(1-t)+((b>>s)&255)*t);return '#'+[16,8,0].map(s=>f(s).toString(16).padStart(2,'0')).join('');};
const meta=JSON.parse(fs.readFileSync(path.resolve(__dirname,'badges.json'),'utf8'));
const html=`<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700&display=swap" rel="stylesheet"><style>body{margin:0;background:#0B0D10;color:#eee;font-family:Barlow,sans-serif;padding:12px}.g{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}.c{background:#14171C;border-radius:10px;padding:8px 4px;display:flex;flex-direction:column;align-items:center;gap:4px}.c svg{width:96px;height:106px;filter:drop-shadow(0 3px 4px rgba(0,0,0,.6))}.c .s{display:flex;gap:4px;background:#A8693A;border-radius:8px;padding:4px}.c .s svg{width:46px;height:51px}.n{font-size:11px;text-align:center;line-height:1.2}.err{color:#ff6b6b;font-size:11px}</style></head><body><div class="g" id="g"></div><script>window.MEDALS={};window.__err=null;try{${src}}catch(e){window.__err=String(e)}</script></body></html>`;
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium/chrome-linux/chrome'}).catch(async()=>chromium.launch());
const pg=await (await b.newContext({viewport:{width:760,height:800},deviceScaleFactor:2})).newPage(); const errs=[]; pg.on('pageerror',e=>errs.push(e.message));
await pg.setContent(html); await pg.waitForTimeout(400);
const r=await pg.evaluate(({meta,perf,hexMixSrc})=>{ const hexMix=eval(hexMixSrc); if(window.__err) return {err:window.__err};
  const wrap=(inner,c)=>`<svg viewBox="0 0 100 110"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${hexMix(c,.35,'#FFFFFF')}"/><stop offset=".5" stop-color="${c}"/><stop offset="1" stop-color="${hexMix(c,.55,'#000000')}"/></linearGradient></defs>${inner}</svg>`;
  const cells=[]; const bad=[];
  for(const key of Object.keys(MEDALS)){ const f=MEDALS[key];
    if(perf){ const ex=meta.exercises.find(x=>'pf_'+x.key===key); const c=ex?ex.c1:'#D9AE4A'; const l=hexMix(c,.4,'#FFFFFF'), d=hexMix(c,.5,'#000000'); let big='',small=''; try{ for(let t=0;t<5;t++){ const inner=f(c,l,d,t); if(!inner) throw new Error('vide'); big+=wrap(inner,c); } small=big; }catch(e){ bad.push(key+': '+e.message); big='<div class="err">'+e.message+'</div>'; }
      cells.push(`<div class="c" style="grid-column:span 3"><div style="display:flex;gap:4px">${big}</div><div class="s">${small}</div><div class="n">${key}${ex?' · '+ex.name:''}</div></div>`); }
    else { const m=meta.badges.find(x=>x.id===key); const c=m?m.color:'#D9AE4A'; const l=hexMix(c,.4,'#FFFFFF'), d=hexMix(c,.5,'#000000'); let inner=''; try{ inner=f(c,l,d); if(!inner) throw new Error('vide'); }catch(e){ bad.push(key+': '+e.message); }
      cells.push(`<div class="c">${inner?wrap(inner,c):'<div class="err">erreur</div>'}<div class="s">${inner?wrap(inner,c):''}</div><div class="n">${key}<br>${m?m.name:'(id inconnu)'}</div></div>`); } }
  document.getElementById('g').innerHTML=cells.join(''); return {n:Object.keys(MEDALS).length,bad};},{meta,perf:flag==='--perf',hexMixSrc:hexMix.toString()});
if(r.err){ console.error('ERREUR DE CHARGEMENT:',r.err); await b.close(); process.exit(1); }
await pg.screenshot({path:path.resolve(out),fullPage:true}); console.log(JSON.stringify({dessins:r.n,erreurs:r.bad,pageErrors:errs})); await b.close(); if(r.bad.length||errs.length) process.exit(1); })();
