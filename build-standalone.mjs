import fs from 'node:fs';
import path from 'node:path';
let html=fs.readFileSync('dist/index.html','utf8');
const css=fs.readFileSync('dist/style.css','utf8')+'\n'+fs.readFileSync('dist/expansion.css','utf8');
const expansion=fs.readFileSync('dist/expansion.js','utf8').replaceAll('export const ','const ');
const playgrounds=fs.readFileSync('dist/playgrounds.js','utf8').replaceAll('export function ','function ');
const content=fs.readFileSync('dist/content.js','utf8').replace(/^import .+;\r?\n/gm,'').replaceAll('export const ','const ');
const art=fs.readFileSync('dist/art.js','utf8').replace('export function art','function art');
const app=fs.readFileSync('dist/app.js','utf8').replace(/^import .+;\r?\n/gm,'');
html=html.replace('<link rel="stylesheet" href="expansion.css">','').replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>')
 .replace('<link rel="icon" href="icon.svg" type="image/svg+xml">','<link rel="icon" href="data:image/svg+xml,'+encodeURIComponent(fs.readFileSync('dist/icon.svg','utf8'))+'" type="image/svg+xml">')
 .replace('<script type="module" src="app.js"></script>','<script type="module">'+expansion+'\n'+playgrounds+'\n'+content+'\n'+art+'\n'+app+'</script>');
if(/(?:src|href)="(?:app.js|style.css|icon.svg)"/.test(html))throw Error('Unbundled dependency');
fs.mkdirSync('release',{recursive:true});fs.writeFileSync('release/语法小岛.html',html);fs.writeFileSync('dist/local-edition.html',html);if(!process.argv.includes('--no-workspace-export'))fs.writeFileSync(path.resolve('../语法小岛.html'),html);
console.log('Standalone HTML created: '+Buffer.byteLength(html)+' bytes.');
