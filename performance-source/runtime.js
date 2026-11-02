(function(){
 'use strict';
 const base=new URL('.',document.currentScript.src);let engine=null;
 function ensureSpeechEngine(){
  if(window.Vosk)return Promise.resolve();
  if(engine)return engine;
  engine=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=new URL('vendor/vosk.js',base);s.onload=()=>window.Vosk?resolve():reject(new Error('本地语音引擎初始化失败'));s.onerror=()=>{s.remove();reject(new Error('语音引擎下载失败，请检查网络后重试'))};document.head.append(s)}).catch(e=>{engine=null;throw e});
  return engine;
 }
 const groups=new Map();let sources=null;
 const read=async file=>{const r=await fetch(new URL(file,base));if(!r.ok)throw new Error('词典详情下载失败，请检查网络后重试');return r.json()};
 function sourceData(){if(!sources)sources=read('reference-details/sources.json').then(x=>{window.QuestReferenceSources=x}).catch(e=>{sources=null;throw e});return sources}
 async function ensureEntries(entries){
  const wanted=[...new Set(entries.filter(v=>v._detailGroup!==undefined).map(v=>v._detailGroup))];
  await Promise.all(wanted.map(id=>{if(!groups.has(id))groups.set(id,read('reference-details/'+id+'.json').then(rows=>{for(const row of rows){const v=window.QuestReferenceLexicon[row.index];if(!v||v.id!==row.entry.id)throw new Error('词典索引与详情版本不一致');Object.assign(v,row.entry);delete v._detailGroup}}).catch(e=>{groups.delete(id);throw e}));return groups.get(id)}));
  if(entries.some(v=>v.id?.startsWith('dict:')))await sourceData();
 }
 window.QuestWebRuntime={ensureSpeechEngine,ensureEntries};
})();
