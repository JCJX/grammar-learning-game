// Four meaning-led mechanisms for non-finite structures and careful reduction.
export function renderFinale(q,l,locked,art,esc,portraitSVG,answered,feedback){
 const s=l.settings,off=locked?'disabled':'';
 const button=(axis,value,title,extra='')=>`<button data-action="lab-direct" data-axis="${axis}" data-value="${esc(value)}" aria-pressed="${s[axis]===value}" class="${s[axis]===value?'selected ':''}${extra}" ${off}>${esc(title)}</button>`;
 const field=(axis,title)=>`<fieldset><legend>${title}</legend>${q.axes[axis].map(([v,t])=>button(axis,v,t)).join('')}</fieldset>`;
 const person=v=>v==='sign'?art('sign'):v==='book'||/box|book/.test(v)?art('book'):v==='reader'?art('portrait'):portraitSVG({size:'small',color:v==='Leo'?'blue':'red',prop:'hat'});
 let stage='',controls='',preview='';
 if(q.type==='museum'){
  stage=`<div class="activity-museum"><span class="finale-label">把活动作为整体收藏 · 内部语法仍然保留</span><div class="activity-globe ${s.exhibit?'filled':''}"><div class="globe-art">${art(q.activityArt)}</div><p lang="en">${esc(s.exhibit||'〔选择活动表达〕')}</p><span class="globe-base"></span></div><div class="museum-shelves">${q.axes.shelf.map(([v,t])=>`<article class="museum-shelf ${s.shelf===v?'occupied':''}">${button('shelf',v,t)}<span aria-hidden="true">${s.shelf===v?'◉':'◌'}</span></article>`).join('')}</div><p class="stage-note">展架表示在本题句中的工作，不能把活动任意搬进所有结构。</p></div>`;
  controls=field('exhibit','① 选择符合这个搭配的活动表达')+'<p class="stage-note">② 在上方选择整个活动表达所在的展架。</p>';
  preview=q.frame.replace('{exhibit}',s.exhibit||'___');
 }else if(q.type==='launch'){
  const actor=s.pilot,passive=/\bbe (?:delivered|repaired|carried|printed|painted|opened|made)\b/.test(s.form||''),earlier=s.form?.includes('have finished');
  stage=`<div class="launch-pad ${actor?'wired':''} ${s.form?'loaded':''}"><span class="finale-label">先找结构中的参与者，再装任务形式</span><div class="launch-orbit"><div class="launch-person">${actor?person(actor):'<span class="launch-question">?</span>'}<strong>${esc(actor?(q.axes.pilot.find(([v])=>v===actor)?.[1]||actor):'谁与这个动作对应？')}</strong></div><div class="mission-cable"><i></i><span>${passive?'受到动作':earlier?'相对参照更早':'查看具体搭配'}</span></div><div class="task-rocket">${art('rocket')}<p lang="en">${esc(s.form||'〔任务形式〕')}</p></div></div><div class="task-destination">${art(q.taskArt)}<span>${passive?'被动任务关系':earlier?'完成形式 · 不等于未来':'时间与关系要读整句'}</span></div><p class="stage-note">连线表示你选择的对应关系；书也可能是受到动作的主语，不是所有参与者都主动执行。</p></div>`;
  controls=field('pilot','① 哪位参与者与不定式的动作或状态对应？')+field('form','② 选符合意义和搭配的任务形式');
  preview=q.frame.replace('{form}',s.form||'___');
 }else if(q.type==='freeze'){
  const playing=s.preview==='play';
  stage=`<div class="freeze-factory ${playing?'is-playing':'is-frozen'} relation-${s.relation||'waiting'}"><div class="freeze-status"><span>${playing?'▶ 动画观察':'❚❚ 定格观察'}</span>${button('preview',playing?'still':'play',playing?'定格画面':'播放示意')}</div><div class="freeze-film"><div class="freeze-target">${art(q.frameArt)}</div><div class="frame-corners" aria-hidden="true"></div><span class="frame-relation">${s.relation?esc(q.axes.relation.find(([v])=>v===s.relation)[1]):'选择对象和关系'}</span></div><div class="frame-contact"><span>你对准的对象</span><strong>${esc(s.actor?(q.axes.actor.find(([v])=>v===s.actor)[1]):'尚未选择')}</strong><i></i><p lang="en">${esc(s.form||'〔分词结构〕')}</p></div><p class="stage-note">播放与定格只是观察工具，不代表“现在分词=此刻、过去分词=过去”。</p></div>`;
  controls=field('actor','① 分词在本题描述或对应哪个对象？')+field('relation','② 本题强调哪种关系？')+field('form','③ 装入符合该关系的分词结构');
  preview=q.frame.replace('{form}',s.form||'___');
 }else{
  const gone=q.groups[s.edit]||[],restored=s.restore;
  stage=`<div class="compression-room"><span class="finale-label">原句轨道 · 淡出的是你选中的一组词</span><div class="compression-track">${q.parts.map((part,i)=>`<span class="compression-token ${gone.includes(i)?'faded-token':''}">${esc(part)}</span>`).join('')}</div><div class="compression-nozzle"><span>↓</span><i></i><span>保留谁、动作、时间、否定与逻辑</span></div><div class="compressed-output"><small>精简方案预览 · 尚须检查</small><p lang="en">${esc(s.edit?q.previews[s.edit]:'先选一项精简方案')}</p></div><div class="restore-output ${restored?'restored':''}"><small>你的原义还原</small><p lang="en">${esc(restored||'再选择能恢复的原义')}</p></div><p class="stage-note">本题核验给定方案，不把任意自由删词自动判为正确。淡出的词仍留在轨道上供核对。</p></div>`;
  controls=field('edit','① 按任务选择精简方案')+field('restore','② 哪个完整表达恢复了原来的意思？');
  preview=s.edit?q.previews[s.edit]:'请选择精简方案';
 }
 const filled=Object.keys(q.axes).every(k=>s[k]);
 return stage+`<div class="voyage-controls finale-controls">${controls}</div><div class="lab-preview" aria-live="polite"><small>${answered?'这次连接成功':feedback?'试操作 · 请看解释后重试':'你的试操作 · 尚未判定'}</small><p lang="en">${esc(preview)}</p></div><button class="primary" data-action="check-lab" ${locked||!filled?'disabled':''}>${({museum:'检查活动与展架',launch:'检查参与者与任务',freeze:'检查定格关系',compress:'检查精简与还原'})[q.type]} ✓</button>`;
}
