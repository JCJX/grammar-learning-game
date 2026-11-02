(function(root){'use strict';
 const names={recognize:'认读理解',listen:'听懂',recall:'独立回忆',transfer:'换景运用'},intervals=[1,3,7,14,30,60],DAY=86400000;
 function observe(old,{success,assisted=false,now=Date.now(),independent=true}={}){
  const c=old?{...old}:{level:0,due:now,first:now,last:0,seen:0,lapses:0,delayed:0};c.seen++;const elapsed=c.last?now-c.last:0,early=!!old&&now<c.due;
  if(!success||assisted){c.level=0;c.due=Math.min(early?c.due:Infinity,now+600000);c.lapses++;c.last=now;return c}
  if(!early){if(old&&independent&&elapsed>=20*3600000){c.level=Math.min(5,c.level+1);c.delayed++}c.due=now+intervals[c.level]*DAY}
  c.last=now;return c;
 }
 function mature(c,now=Date.now()){return !!c&&c.level>=4&&c.delayed>=3&&now-c.first>=7*DAY}
 function dueItems(state,now=Date.now()){
  const out=[];for(const [id,channels] of Object.entries(state.memory||{})){if(!state.completed.includes(Number(id)))continue;for(const [skill,c] of Object.entries(channels)){if(names[skill]&&c&&c.due<=now)out.push({id:Number(id),skill,due:c.due,lapses:c.lapses||0})}}
  return out.sort((a,b)=>a.due-b.due||b.lapses-a.lapses||a.id-b.id);
 }
 function plan(state,date,now=Date.now()){
  const profiles={light:{newLessons:1,reviews:4,minutes:10},standard:{newLessons:2,reviews:8,minutes:20},focus:{newLessons:3,reviews:12,minutes:35}},p=profiles[state.pace]||profiles.standard,q=dueItems(state,now),done=state.daily?.[date]||{newIds:[],reviews:0};
  const cap=q.length>=p.reviews*2?0:q.length>p.reviews?1:p.newLessons;
  return {...p,newRemaining:Math.max(0,cap-(done.newIds?.length||0)),reviewRemaining:Math.max(0,p.reviews-(done.reviews||0)),due:q.length,backlog:q.length>=p.reviews*2};
 }
 function intent(text,groups){const normalized=(root.LearningCore||require('./learning-core.js')).normalize(text),padded=' '+normalized+' ';const missing=groups.filter(group=>!group.some(term=>padded.includes(' '+(root.LearningCore||require('./learning-core.js')).normalize(term)+' ')));return {complete:!!normalized&&missing.length===0,missing,words:normalized?normalized.split(' ').length:0}}
 function assessmentSummary(answers){const skills={listening:{correct:0,total:0},reading:{correct:0,total:0}};for(const a of answers)if(skills[a.skill]){skills[a.skill].total++;if(a.correct)skills[a.skill].correct++}for(const s of Object.values(skills))s.percent=s.total?Math.round(s.correct/s.total*100):null;const objectivePassed=Object.values(skills).every(s=>s.total>0&&s.percent>=80);return {skills,objectivePassed,productiveStatus:'口语与写作质量待复核',ieltsEstimate:null}}
 function validateMemory(memory,max=1248){if(!memory||typeof memory!=='object'||Array.isArray(memory))return false;return Object.entries(memory).every(([id,channels])=>String(Number(id))===id&&Number(id)>=1&&Number(id)<=max&&channels&&typeof channels==='object'&&Object.entries(channels).every(([k,c])=>names[k]&&c&&['due','first','last','seen','lapses','delayed','level'].every(x=>Number.isFinite(c[x])&&c[x]>=0)&&Number.isInteger(c.level)&&c.level<=5))}
 const api={names,observe,mature,dueItems,plan,intent,assessmentSummary,validateMemory};root.MemoryV3=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
