import assert from 'node:assert/strict';
import {chapters} from '../dist/content.js';
import {newLabState,labAnswer,renderPlayground} from '../dist/playgrounds.js';
import {art} from '../dist/art.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let custom=0;
for(const c of chapters.filter(c=>['c13','c14','c15'].includes(c.id)))for(const m of c.missions.filter(m=>!m.id.includes('-r')))for(const q of m.items){
 if(!q.axes)continue;custom++;
 const blank=newLabState();assert.notEqual(labAnswer(q,blank),q.answer,q.id);
 for(const state of [{lab:blank,answered:false,feedback:null},{lab:{...blank,settings:q.expected},answered:false,feedback:null},{lab:{...blank,settings:q.expected},answered:true,feedback:{correct:true}},{lab:{...blank,settings:q.expected},answered:false,feedback:{correct:false}}]){
 const html=renderPlayground(q,state,art,esc);assert(html.includes('id="playground-host"'),q.id);assert(!html.includes('undefined'),q.id);assert(!html.includes('NaN'),q.id);assert(html.includes('data-action="check-lab"'),q.id);
 if(state.answered||state.feedback)assert(!/<button\b(?![^>]*\bdisabled\b)[^>]*>/.test(html),'Unlocked feedback '+q.id);
 }
 assert.equal(labAnswer(q,{...blank,settings:q.expected}),q.answer,q.id);
 for(const axis of Object.keys(q.axes)){const other=q.axes[axis].find(([v])=>v!==q.expected[axis]);assert(other,q.id);assert.notEqual(labAnswer(q,{...blank,settings:{...q.expected,[axis]:other[0]}}),q.answer,q.id);}
 if(q.type==='relative')assert.equal(q.frames[q.expected.mode].replace('{head}',q.expected.head).replace('{clause}',q.expected.clue),q.sentence,q.id);
 if(q.type==='chain')assert.equal(q.frame.replace('{link}',q.expected.link),q.sentence,q.id);
 if(q.labKind==='bridge')assert.equal(q.frame.replace('{left}',q.left).replace('{right}',q.right).replace('{link}',q.expected.link),q.sentence,q.id);
 if(q.labKind==='scale'){assert.equal(q.expected.line,q.sentence,q.id);for(const pair of Object.values(q.readings)){assert.equal(pair.length,2);assert(pair.every(n=>Number.isInteger(n)&&n>0&&n<=6));}}
}
assert.equal(custom,35);console.log('35 custom challenges: blank/filled/locked rendering, each wrong axis and composed expressions passed.');
