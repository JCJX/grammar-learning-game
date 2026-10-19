import fs from 'node:fs';
import path from 'node:path';
let html=fs.readFileSync('dist/index.html','utf8');
const css=fs.readFileSync('dist/style.css','utf8')+'\n'+fs.readFileSync('dist/expansion.css','utf8')+'\n'+fs.readFileSync('dist/expedition.css','utf8')+'\n'+fs.readFileSync('dist/crossing.css','utf8')+'\n'+fs.readFileSync('dist/finale.css','utf8')+'\n'+fs.readFileSync('dist/renewal.css','utf8')+'\n'+fs.readFileSync('dist/atlas.css','utf8');
const atlas=fs.readFileSync('dist/atlas.js','utf8').replaceAll('export const ','const ').replaceAll('export function ','function ');
const atlasLabs=fs.readFileSync('dist/atlas-labs.js','utf8').replaceAll('export function ','function ');
const renewal=fs.readFileSync('dist/renewal.js','utf8').replaceAll('export const ','const ').replaceAll('export function ','function ');
const renewalLabs=fs.readFileSync('dist/renewal-labs.js','utf8').replace(/^import .+;\r?\n/gm,'').replaceAll('export function ','function ');
const finale=fs.readFileSync('dist/finale.js','utf8').replaceAll('export const ','const ');
const finaleLabs=fs.readFileSync('dist/finale-labs.js','utf8').replaceAll('export function ','function ');
const crossing=fs.readFileSync('dist/crossing.js','utf8').replaceAll('export const ','const ');
const crossingLabs=fs.readFileSync('dist/crossing-labs.js','utf8').replaceAll('export function ','function ');
const expedition=fs.readFileSync('dist/expedition.js','utf8').replaceAll('export const ','const ');
const expeditionLabs=fs.readFileSync('dist/expedition-labs.js','utf8').replaceAll('export function ','function ');
const voyage=fs.readFileSync('dist/voyage.js','utf8').replaceAll('export const ','const ');
const expansion=fs.readFileSync('dist/expansion.js','utf8').replaceAll('export const ','const ');
const playgrounds=fs.readFileSync('dist/playgrounds.js','utf8').replace(/^import .+;\r?\n/gm,'').replaceAll('export function ','function ');
const content=fs.readFileSync('dist/content.js','utf8').replace(/^import .+;\r?\n/gm,'').replaceAll('export const ','const ');
const art=fs.readFileSync('dist/art.js','utf8').replace('export function art','function art');
const app=fs.readFileSync('dist/app.js','utf8').replace(/^import .+;\r?\n/gm,'');
html=html.replace('<link rel="stylesheet" href="atlas.css">','').replace('<link rel="stylesheet" href="renewal.css">','').replace('<link rel="stylesheet" href="finale.css">','').replace('<link rel="stylesheet" href="crossing.css">','').replace('<link rel="stylesheet" href="expedition.css">','').replace('<link rel="stylesheet" href="expansion.css">','').replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>')
 .replace('<link rel="icon" href="icon.svg" type="image/svg+xml">','<link rel="icon" href="data:image/svg+xml,'+encodeURIComponent(fs.readFileSync('dist/icon.svg','utf8'))+'" type="image/svg+xml">')
 .replace('<script type="module" src="app.js"></script>','<script type="module">'+atlas+'\n'+atlasLabs+'\n'+renewal+'\n'+renewalLabs+'\n'+finale+'\n'+finaleLabs+'\n'+crossing+'\n'+crossingLabs+'\n'+expedition+'\n'+expeditionLabs+'\n'+voyage+'\n'+expansion+'\n'+playgrounds+'\n'+content+'\n'+art+'\n'+app+'</script>');
if(/(?:src|href)="(?:app.js|style.css|icon.svg)"/.test(html))throw Error('Unbundled dependency');
fs.mkdirSync('release',{recursive:true});fs.writeFileSync('release/语法小岛.html',html);fs.writeFileSync('dist/local-edition.html',html);if(!process.argv.includes('--no-workspace-export'))fs.writeFileSync(path.resolve('../语法小岛.html'),html);
console.log('Standalone HTML created: '+Buffer.byteLength(html)+' bytes.');
