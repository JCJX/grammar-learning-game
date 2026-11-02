/* Local evidence ledger. Practice success is never a CEFR award. */
(function(root){'use strict';
const DAY=86400000,causes={vocabulary:'词义与搭配：核对本句义项，再用不同对象造句。',grammar:'语法与形式：找出主干、时态及词形，解释选择依据。',listening:'漏听与切分：先盲听，定位漏掉的词，再对照脚本复听。',inference:'推断与证据：区分原文明说、合理推断与无依据猜测。',instructions:'审题与任务：圈出对象、限制、否定词和需要完成的动作。'};
const text=(v,n=5000)=>String(v??'').slice(0,n);
function init(s){const old=s.learningLoop||{};s.learningLoop={version:1,events:Array.isArray(old.events)?old.events.filter(e=>e&&typeof e.id==='string'&&Number.isFinite(e.date)&&typeof e.source==='string'&&typeof e.correct==='boolean').slice(-10000):[],errors:Array.isArray(old.errors)?old.errors.filter(e=>e&&typeof e.key==='string'&&Number.isFinite(e.due)&&Number.isInteger(e.chapter)&&e.chapter>=1&&e.chapter<=88&&Array.isArray(e.history)).slice(-3000):[],records:Array.isArray(old.records)?old.records.filter(r=>r&&typeof r.id==='string'&&typeof r.kind==='string'&&typeof r.text==='string'&&r.text.length<=20000&&Number.isFinite(r.date)).slice(-3000):[],exposures:Array.isArray(old.exposures)?old.exposures.filter(x=>typeof x==='string').slice(-10000):[]};return s.learningLoop}
function ledger(s){return s.learningLoop||init(s)}
function observe(s,input,now=Date.now()){
 const d=ledger(s),e={id:text(input.id||input.source+':'+now,200),source:text(input.source,60),chapter:Math.max(1,Math.min(88,Number(input.chapter)||1)),lesson:Number(input.lesson)||0,skill:text(input.skill||'recall',40),prompt:text(input.prompt),answer:text(input.answer),response:text(input.response),correct:input.correct===true,guessed:input.guessed===true,assisted:input.assisted===true,date:now,explanation:text(input.explanation),cause:Object.hasOwn(causes,input.cause)?input.cause:'instructions'};
 d.events.push(e);if(d.events.length>10000)d.events.shift();
 if(e.correct&&!e.guessed&&!e.assisted)return e;
 const key=e.source+':'+e.id;let item=d.errors.find(x=>x.key===key);
 if(!item){item={...e,key,first:now,due:now+600000,stage:0,status:'待理解',confirmedCause:'',history:[]};d.errors.push(item)}
 Object.assign(item,{response:e.response,date:now,correct:e.correct,guessed:e.guessed,assisted:e.assisted,due:now+600000,stage:0,status:'待理解'});item.history.push({date:now,correct:e.correct,kind:e.guessed?'猜对':e.assisted?'借助提示':'原任务'});item.history=item.history.slice(-100);if(d.errors.length>3000)d.errors.shift();return e;
}
function review(s,key,{correct,assisted=false,taskId,novel=false,targetMatched=true},now=Date.now()){
 const d=ledger(s),e=d.errors.find(x=>x.key===key);if(!e)return null;
 const early=now<e.due,seen=d.exposures.includes(taskId);if(!seen)d.exposures.push(text(taskId,200));
 e.history.push({date:now,correct:!!correct,assisted:!!assisted,early,taskId:text(taskId,200),novel:novel&&!seen,kind:'变式回忆'});e.history=e.history.slice(-100);
 if(!correct||assisted){e.stage=0;e.due=now+600000;e.status='需再理解'}else if(!early&&targetMatched){e.stage=Math.min(4,(e.stage||0)+1);e.due=now+[DAY,7*DAY,21*DAY,30*DAY][e.stage-1];e.status=e.stage>=4?'延迟复练完成 · 非能力认证':'待延迟复练'}
 return {early,seen,item:e};
}
function record(s,kind,value,now=Date.now()){const r={id:kind+':'+now+':'+Math.random().toString(36).slice(2,8),kind:text(kind,60),text:text(value,20000),date:now};const d=ledger(s);d.records.push(r);if(d.records.length>3000)d.records.shift();return r}
function summary(s,now=Date.now()){const d=ledger(s);return {events:d.events.length,errors:d.errors.length,due:d.errors.filter(e=>e.due<=now&&e.stage<4).length,reopened:d.errors.filter(e=>e.status==='需再理解').length,delayed:d.errors.filter(e=>e.stage>=4).length,records:d.records.length,externallyValidated:false}}
root.LearningLoop={init,observe,review,record,summary,causes,DAY};
})(typeof window==='undefined'?globalThis:window);
