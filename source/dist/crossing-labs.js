// A noun-to-clue link, an event relation circuit, and a structural bridge/comparison ruler.
export function renderCrossing(q,l,locked,art,esc,portraitSVG,answered,feedback){
 const s=l.settings,off=locked?'disabled':'';
 const button=(axis,value,label,extra='')=>`<button data-action="lab-direct" data-axis="${axis}" data-value="${esc(value)}" aria-pressed="${s[axis]===value}" class="${s[axis]===value?'selected ':''}${extra}" ${off}>${esc(label)}</button>`;
 const field=(axis,label)=>`<fieldset><legend>${label}</legend>${q.axes[axis].map(([v,t])=>button(axis,v,t)).join('')}</fieldset>`;
 let stage='',controls='',preview='';
 if(q.type==='relative'){
  const index=q.axes.head.findIndex(([v])=>v===s.head),x=index===0?125:375;
  const icon=h=>/sign/i.test(h)?'sign':/map/i.test(h)?'map':/book|news/i.test(h)?'book':/garden/i.test(h)?'flower':/day/i.test(h)?'clock':/box/i.test(h)?'box':/bag|hat/i.test(h)?'bag':/race/i.test(h)?'star':'fox';
  stage=`<div class="relative-desk mode-${s.mode||'waiting'}"><span class="lab-overline">① 找到这条线索要接的对象</span><div class="antecedent-cards">${q.axes.head.map(([v,t])=>`<div class="antecedent ${s.head===v?'anchored':''}"><div>${art(icon(v))}</div>${button('head',v,t)}</div>`).join('')}</div><div class="relative-wire"><svg viewBox="0 0 500 65" aria-hidden="true">${index>=0?`<path d="M${x} 2 Q${x} 31 250 35 L250 63" fill="none" stroke="#aab6a2" stroke-width="3"/><circle cx="${x}" cy="4" r="5" fill="#aab6a2"/><circle class="wire-signal" cx="250" cy="59" r="5" fill="#d0ae6a"/>`:'<path d="M250 0V63" stroke="#ced6c6" stroke-dasharray="5 5"/>'}</svg></div><div class="clue-envelope"><b class="comma-tag">${s.mode==='extra'?',':'◌'}</b><div><span>${s.mode==='extra'?'补充信息的旁注':s.mode==='defining'?'帮助辨认的线索':'先决定线索的工作'}</span><p lang="en">${esc(s.clue||'〔选择关系从句〕')}</p></div><b class="comma-tag">${s.mode==='extra'?',':'◌'}</b></div><p class="stage-note">连线指向所选片段；逗号闸门显示你的试接方式，不预先判定正确。</p></div>`;
  controls=field('clue','② 给这个对象接上符合任务的从句')+field('mode','③ 是辨认哪一个，还是补充旁注？');
  preview=s.mode?q.frames[s.mode].replace('{head}',s.head||'〔对象〕').replace('{clause}',s.clue||'〔从句〕'):'先选线索工作，再观察整句';
 }else if(q.type==='chain'){
  const labels={time:'◷ 时间关系',cause:'? 原因关系',condition:'◇ 条件关系',concession:'↝ 让步关系',contrast:'∥ 对照关系',purpose:'◎ 目的关系',result:'✦ 结果关系'};
  stage=`<div class="story-circuit relation-${s.relation||'waiting'}"><span class="lab-overline">事件卡保持原内容 · 连接词决定它们怎样相关</span><div class="event-pair"><article><div>${art(q.leftArt)}</div><p lang="en">${esc(q.left)}</p></article><div class="circuit-joint"><i></i><span>${s.link?esc(s.link):'？'}</span><i></i></div><article><div>${art(q.rightArt)}</div><p lang="en">${esc(q.right)}</p></article></div><div class="relation-dial">${labels[s.relation]||'选择关系机关'}<div class="circuit-lights"><i></i><i></i><i></i></div></div><p class="stage-note">${s.relation==='condition'?'条件未必发生；先看 if / unless 等具体意思。':s.relation==='time'?'左右排列不代表先后顺序；读 before / after 等具体连接。':s.relation==='purpose'?'目的说明想实现什么，不保证目的已经达成。':'亮灯表示试接；不能单凭两件事相邻就断言因果。'}</p></div>`;
  controls=field('relation','① 故事要求哪种关系？')+field('link','② 装入符合意思的连接词');
  preview=q.frame.replace('{link}',s.link||'___');
 }else if(q.labKind==='bridge'){
  stage=`<div class="parallel-bridge level-${s.level||'waiting'}"><span class="lab-overline">① 两边是什么层级？</span><div class="bridge-islands"><article><span>A</span><p lang="en">${esc(q.left)}</p></article><div class="bridge-plank ${s.link?'connected':''}"><strong>${esc(s.link||'___')}</strong><i></i><i></i><i></i></div><article><span>B</span><p lang="en">${esc(q.right)}</p></article></div><div class="bridge-level">${s.level?esc(q.axes.level.find(([v])=>v===s.level)[1])+' ↔ 同层连接':'先判断：词、短语还是完整分句？'}</div><p class="stage-note">桥搭上不等于句子一定正确；层级、意思和连接词要一起检查。</p></div>`;
  controls=field('level','① 识别两边连接的结构层级')+field('link','② 用符合任务的连词搭桥');
  preview=q.frame.replace('{left}',q.left).replace('{right}',q.right).replace('{link}',s.link||'___');
 }else{
  const metric=s.measure,data=q.readings[metric],names={height:'身高刻度 · 格',books:'书本数量 · 本',speed:'速度刻度 · 格'};
  stage=`<div class="comparison-ruler measure-${metric||'waiting'}"><span class="lab-overline">比较尺 · ${names[metric]||'先选同一个维度'}</span><div class="comparison-people">${['Mia','Leo'].map((name,i)=>`<article><div class="metric-tower">${data?`<div class="metric-bar" style="height:${data[i]*17}px"><strong>${data[i]}</strong></div>`:'<span class="unknown-metric">?</span>'}</div><div class="ruler-person">${portraitSVG({size:'small',color:i?'blue':'red',prop:i?'hat':'book'})}${metric==='speed'?`<span class="speed-spark" style="--lap:${(7-data[i])*.5}s">✧</span>`:''}</div><strong>${name}</strong>${metric==='books'?`<div class="little-books" aria-label="${data[i]} 本书">${'▣ '.repeat(data[i])}</div>`:''}</article>`).join('')}</div><div class="ruler-base"><i></i><i></i><i></i><i></i><i></i><i></i></div><p class="stage-note">只比较所选维度。身高和速度刻度为示意；图中高低不是质量，也不是学习能力。</p></div>`;
  controls=field('measure','① 这次要比较哪一个维度？')+field('line','② 按同一维度的数值选择表达');
  preview=s.line||'请选择符合图中关系的句子';
 }
 const filled=Object.keys(q.axes).every(k=>s[k]);
 return stage+`<div class="voyage-controls crossing-controls">${controls}</div><div class="lab-preview" aria-live="polite"><small>${answered?'这次连接成功':feedback?'试操作 · 请看解释后重试':'你的试操作 · 尚未判定'}</small><p lang="en">${esc(preview)}</p></div><button class="primary" data-action="check-lab" ${locked||!filled?'disabled':''}>${q.type==='relative'?'检查线索与逗号':q.type==='chain'?'检查故事的连接':'检查桥梁与比较'} ✓</button>`;
}
