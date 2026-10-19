import assert from 'node:assert/strict';
import {chapters}from'../dist/content.js';
import{newLabState,labAnswer,renderPlayground}from'../dist/playgrounds.js';
import{renderLessonDemo}from'../dist/renewal-labs.js';
import{art}from'../dist/art.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let count=0,demos=0;
for(const c of chapters){for(const l of c.lessons)if(l.demo&&l.demo.kind!=='atlas'){demos++;for(const state of l.demo.states){const html=renderLessonDemo(l,state.value,art,esc);assert(html.includes('id="lesson-demo"'));assert(!html.includes('undefined'));assert(html.includes(esc(state.text)));}}
for(const m of c.missions)for(const q of m.items)if(['postbox','rail','architect','beacon','album','spotlight'].includes(q.type)){count++;const blank=newLabState();assert.notEqual(labAnswer(q,blank),q.answer,q.id);assert.equal(labAnswer(q,{...blank,settings:q.expected}),q.answer,q.id);for(const settings of [{},q.expected])for(const locked of [false,true]){const html=renderPlayground(q,{lab:{...blank,settings},answered:locked,feedback:locked?{correct:true}:null},art,esc);assert(!html.includes('undefined'),q.id);assert(!html.includes('NaN'),q.id);assert(html.includes('id="playground-host"'));if(locked)assert(!/<button\b(?![^>]*\bdisabled\b)[^>]*>/.test(html),'unlocked '+q.id);}for(const k of Object.keys(q.axes)){for(const[v]of q.axes[k].filter(([v])=>v!==q.expected[k]))assert.notEqual(labAnswer(q,{...blank,settings:{...q.expected,[k]:v}}),q.answer,q.id);}if(q.type==='album')assert.equal(q.frame.replace('{form}',q.expected.form),q.sentence,q.id);if(q.type==='rail')assert(q.blocks.includes(q.expected.block),q.id);}}
assert.equal(count,70);assert.equal(demos,12);console.log('70 new-mechanism challenges and 12 story experiments: render, answers, wrong axes and locked states passed.');
