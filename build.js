const fs=require('fs'), path=require('path');
const dir=path.join(__dirname,'content','noticias');
const files=fs.existsSync(dir)?fs.readdirSync(dir).filter(f=>f.endsWith('.json')):[];
const news=files.map(f=>{try{return JSON.parse(fs.readFileSync(path.join(dir,f),'utf8'))}catch(e){console.warn('No se pudo leer',f);return null}}).filter(Boolean).sort((a,b)=>new Date(b.date)-new Date(a.date));
fs.writeFileSync(path.join(__dirname,'content','news.json'),JSON.stringify(news,null,2));
console.log(`Punto Caribe: ${news.length} publicaciones compiladas.`);
