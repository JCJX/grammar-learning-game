import assert from 'node:assert/strict';
import {chapters} from '../dist/content.js';
import {newLabState,labAnswer,renderPlayground} from '../dist/playgrounds.js';
import {art} from '../dist/art.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let custom=0;
for(const c of chapters.filter(c=>['c16','c17','c18','c19'].includes(c.id)))for(const m of c.missions.filter(m=>!m.id.includes('-r')))for(const q of m.items){
 if(!q.axes)continue;custom++;
 const blank=newLabState();assert.notEqual(labAnswer(q,blank),q.answer,q.id);
 for(const state of [{lab:blank,answered:false,feedback:null},{lab:{...blank,settings:q.expected},answered:false,feedback:null},{lab:{...blank,settings:q.expected},answered:true,feedback:{correct:true}},{lab:{...blank,settings:q.expected},answered:false,feedback:{correct:false}}]){
 const html=renderPlayground(q,state,art,esc);assert(html.includes('id="playground-host"'),q.id);assert(!html.includes('undefined'),q.id);assert(!html.includes('NaN'),q.id);assert(html.includes('data-action="check-lab"'),q.id);
 if(state.answered||state.feedback)assert(!/<button\b(?![^>]*\bdisabled\b)[^>]*>/.test(html),'Unlocked feedback '+q.id);
 }
 assert.equal(labAnswer(q,{...blank,settings:q.expected}),q.answer,q.id);
 for(const axis of Object.keys(q.axes)){const other=q.axes[axis].find(([v])=>v!==q.expected[axis]);assert(other,q.id);assert.notEqual(labAnswer(q,{...blank,settings:{...q.expected,[axis]:other[0]}}),q.answer,q.id);}
 if(['museum','launch','freeze'].includes(q.type)){const axis=q.type==='museum'?'exhibit':'form';assert.equal(q.frame.replace('{'+axis+'}',q.expected[axis]),q.sentence,q.id);}
 if(q.type==='freeze')assert.equal(labAnswer(q,{...blank,settings:{...q.expected,preview:'play'}}),q.answer,q.id);
 if(q.type==='compress'){assert.equal(q.previews[q.expected.edit],q.sentence,q.id);assert.equal(q.expected.restore,q.full,q.id);for(const indices of Object.values(q.groups)){assert(indices.every(i=>Number.isInteger(i)&&i>=0&&i<q.parts.length));}for(const [edit]of q.axes.edit)assert(q.previews[edit]&&q.groups[edit]);}
}
assert.equal(custom,50);console.log('50 custom challenges: blank/filled/locked rendering, wrong axes, frame composition and ungraded playback passed.');
