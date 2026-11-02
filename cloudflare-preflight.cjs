// Deploy-time compatibility repair. Does not delete legacy assets or touch progress.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=__dirname,docs=path.join(root,'docs'),models=path.join(docs,'models');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const parts=[{file:'english-small.part1.bin',bytes:20971520,sha256:'f67ac82082dad7be09032e0d8c5b848ae884afea5244d6bebce424654d3a51b3'},{file:'english-small.part2.bin',bytes:20189258,sha256:'e73d8c53da9e135c9e76dbd3e091121ff926121f6e030d243ed936d0b6a104fa'}];
function main(){
 if(!fs.existsSync(docs))throw Error('找不到 docs。请把补丁内容放在仓库根目录，不要嵌套补丁文件夹。');
 const legacy=path.join(models,'english-small.tar.gz');
 const valid=p=>{const f=path.join(models,p.file);return fs.existsSync(f)&&fs.statSync(f).size===p.bytes&&sha(fs.readFileSync(f))===p.sha256};
 if(!parts.every(valid)){
  if(!fs.existsSync(legacy))throw Error('模型分片缺失，且找不到旧模型。请使用完整的0.11.1网页包。');
  const b=fs.readFileSync(legacy);if(b.length!==41160778)throw Error('旧模型大小不匹配，已停止部署。');
  let offset=0;const buffers=parts.map(p=>{const slice=b.subarray(offset,offset+p.bytes);offset+=p.bytes;if(sha(slice)!==p.sha256)throw Error('旧模型校验失败，已停止部署。');return slice});
  parts.forEach((p,i)=>{if(!valid(p))fs.writeFileSync(path.join(models,p.file),buffers[i])});
  console.log('已从旧模型生成两个合法分片；原文件保留，但不会上传到 Cloudflare。');
 }
 fs.writeFileSync(path.join(models,'english-small.parts.json'),JSON.stringify({bytes:41160778,parts},null,2));
 const ignore=path.join(docs,'.assetsignore'),previous=fs.existsSync(ignore)?fs.readFileSync(ignore,'utf8'):'';
 if(!previous.split(/\r?\n/).some(s=>s.trim()==='/models/english-small.tar.gz'||s.trim()==='models/english-small.tar.gz'))fs.writeFileSync(ignore,previous+'\n# Legacy speech model: browser uses verified parts instead.\n/models/english-small.tar.gz\n');
 const scan=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?scan(path.join(d,e.name)):[path.join(d,e.name)]);
 const files=scan(docs).filter(f=>path.relative(docs,f).replaceAll('\\','/')!=='models/english-small.tar.gz');
 const tooLarge=files.filter(f=>fs.statSync(f).size>25*1024*1024);if(tooLarge.length)throw Error('仍有其他文件超过25 MiB：'+tooLarge.map(f=>path.relative(docs,f)).join(', '));
 if(files.length>20000)throw Error('静态资源超过免费版20,000个限制。');
 const speech=fs.readFileSync(path.join(docs,'local-speech.js'),'utf8');if(!speech.includes('english-small.parts.json'))throw Error('请同时覆盖补丁中的docs/local-speech.js，否则网页仍会请求旧模型。');
 console.log('PASS: 2 verified model parts; legacy model excluded by docs/.assetsignore; '+files.length+' assets, each <=25 MiB.');
}
try{main()}catch(e){console.error('Cloudflare preflight failed: '+e.message);process.exitCode=1}
