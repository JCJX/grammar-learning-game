import assert from 'node:assert/strict';
import {chapters} from '../dist/content.js';
import {newLabState,labAnswer,renderPlayground} from '../dist/playgrounds.js';
import {art} from '../dist/art.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let custom=0;
for(const c of chapters.filter(c=>['c7','c8','c9'].includes(c.id)))for(const m of c.missions.filter(m=>!m.id.includes('-r')))for(const q of m.items){
 if(!q.axes)continue;custom++;
 const blank=newLabState();assert.notEqual(labAnswer(q,blank),q.answer,q.id);
 for(const state of [{lab:blank,answered:false,feedback:null},{lab:{...blank,settings:q.expected},answered:false,feedback:null},{lab:{...blank,settings:q.expected},answered:true,feedback:{correct:true}}]){
  const html=renderPlayground(q,state,art,esc);assert(html.includes('id="playground-host"'),q.id);assert(!html.includes('undefined'),q.id);assert(!html.includes('NaN'),q.id);assert(html.includes('data-action="check-lab"'),q.id);
 }
 assert.equal(labAnswer(q,{...blank,settings:q.expected}),q.answer,q.id);
 for(const axis of Object.keys(q.axes)){const other=q.axes[axis].find(([v])=>v!==q.expected[axis]);assert(other,q.id);assert.notEqual(labAnswer(q,{...blank,settings:{...q.expected,[axis]:other[0]}}),q.answer,q.id);}
}
assert.equal(custom,42);console.log('42 new custom challenges: blank, filled, locked rendering and each incorrect axis passed.');
