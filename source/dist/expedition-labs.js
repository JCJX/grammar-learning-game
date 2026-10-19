// Three distinct semantic stages; answers use the shared review/progress pipeline.
export function renderExpedition(q,l,locked,art,esc,portraitSVG,answered,feedback){
 const s=l.settings,off=locked?'disabled':'',chosen=(axis,value)=>s[axis]===value;
 const button=(axis,value,label,extra='')=>`<button data-action="lab-direct" data-axis="${axis}" data-value="${esc(value)}" aria-pressed="${chosen(axis,value)}" class="${chosen(axis,value)?'selected ':''}${extra}" ${off}>${esc(label)}</button>`;
 const controls=(axis,title)=>`<fieldset><legend>${title}</legend>${q.axes[axis].map(([v,t])=>button(axis,v,t)).join('')}</fieldset>`;
 let stage='',controlsHTML='',preview='';
 if(q.type==='passive'){
  const f=s.focus;
  stage=`<div class="passive-stage focus-${f||'empty'}"><div class="film-perforations" aria-hidden="true">▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪</div><div class="film-context"><span>原事件 · ${esc(q.time)}</span><p lang="en">${esc(q.active)}</p></div><div class="event-cast"><div class="cast-node actor-node"><span>动作发出的一方</span><div>${portraitSVG({size:'small',color:'red',prop:'hat'})}</div><strong>${esc(q.actor)}</strong><small>${f==='agent'?'📷 句子的起点':'事件角色保持'}</small></div><div class="event-arrow"><span>作用方向</span><i></i><b aria-hidden="true">➜</b></div><div class="cast-node patient-node"><span>动作涉及的对象</span><div>${art(q.objectArt)}</div><strong>${esc(q.patient)}</strong><small>${f==='patient'?'📷 句子的起点':'事件角色保持'}</small></div></div><p class="stage-note">机位只换关注点，事件箭头不会反转。选中的动词仍需检查。</p></div>`;
  controlsHTML=controls('focus','① 这句话从哪一方说起？')+controls('film','② 装入保留原时间的动词胶片');
  preview=f?q.frames[f].replace('{film}',s.film||'___'):'先选择句子的起点';
 }else if(q.type==='treasure'){
  const spot=s.spot;
  if(q.mapKind==='space'){
   const coords={inside:[48,55],top:[48,28],below:[48,87],beside:[84,55],behind:[38,34]};
   const pos=coords[spot]||[14,22];
   stage=`<div class="treasure-space pos-${spot||'waiting'}"><div class="map-horizon"></div><div class="chest-shadow"></div><div class="treasure-chest"><span>BOX · 箱子</span><i></i></div><div class="treasure-star" style="left:${pos[0]}%;top:${pos[1]}%">★</div><div class="chest-front" aria-hidden="true"></div>${q.axes.spot.map(([v,t])=>{const [x,y]=coords[v];return `<div class="map-anchor anchor-${v}" style="left:${x}%;top:${y}%">${button('spot',v,t,'map-pin')}</div>`;}).join('')}<span class="map-view-label">从正面看 · 箱下留有空间</span></div>`;
  }else if(q.mapKind==='route'){
   const paths={enter:'M 25 65 L 72 65',exit:'M 72 65 L 25 65',cross:'M 110 125 L 210 125',follow:'M 129 188 L 129 30',toward:'M 220 185 L 278 60'};
   const d=paths[spot]||'';
   stage=`<div class="treasure-route route-${spot||'waiting'}"><svg viewBox="0 0 320 220" role="img" aria-label="路线地图：左侧箱子，中间河流，右上小屋。选路线后显示箭头。"><defs><marker id="route-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0L6 3.5L0 7" fill="none" stroke="#a87c44" stroke-width="1.5"/></marker></defs><rect width="320" height="220" rx="16" fill="#e7efdb"/><path d="M150 0Q181 60 163 110T170 220" stroke="#b6d9df" stroke-width="30" fill="none"/><path d="M150 0Q181 60 163 110T170 220" stroke="#e2f4ed" stroke-width="2" stroke-dasharray="7 10" fill="none"/><rect x="47" y="40" width="50" height="50" rx="5" fill="#d8b77a" stroke="#b59360" stroke-width="2"/><text x="72" y="105" text-anchor="middle" font-size="10" fill="#6b785e">箱子</text><path d="M250 45L278 22L305 45V76H250Z" fill="#b7ca9f"/><path d="M244 45L278 16L311 45" fill="#d2aa7b"/><text x="278" y="93" text-anchor="middle" font-size="10" fill="#6b785e">小屋</text><text x="180" y="201" font-size="10" fill="#668f99">河流</text>${d?`<path class="route-path" d="${d}" fill="none" stroke="#a87c44" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#route-arrow)"/><path class="route-traveller" d="M0 -9L3 -3L9 -3L4 2L6 8L0 4L-6 8L-4 2L-9 -3L-3 -3Z" fill="#d7ac52" stroke="#fff5cd" stroke-width="1" style="offset-path:path('${d}');"/>`:''}</svg>${d?'':'<span class="route-wait">选一条路线，星星就会出发</span>'}</div>`;
  }else{
   const cards={clock:['◷','09:00','一个钟点'],day:['▦','MONDAY','星期一'],month:['❀','JUNE','六月'],earlier:['←','BEFORE','午饭之前'],later:['→','AFTER','午饭之后']};
   stage=`<div class="calendar-board">${q.axes.spot.map(([v,t])=>`<article class="calendar-card ${chosen('spot',v)?'lit':''}"><span>${cards[v][0]}</span><strong>${cards[v][1]}</strong><small>${cards[v][2]}</small>${button('spot',v,t)}</article>`).join('')}</div>`;
  }
  controlsHTML=(q.mapKind==='space'?'<p class="stage-note">① 点击图中位置标签摆放星星；金色星星表示你选的位置。</p>':q.mapKind==='route'?controls('spot','① 选择行走路线'):'<p class="stage-note">① 点亮符合任务的时间卡。</p>')+controls('phrase','② 给地图接上完整介词短语');
  preview=q.frame.replace('{phrase}',s.phrase||'___');
 }else if(q.type==='capsule'){
  stage=`<div class="capsule-port"><div class="port-skeleton"><small>题目的句子骨架</small><p lang="en">${esc(q.frame.replace('{clause}','〔 整个从句 〕'))}</p></div><div class="sealed-capsule ${s.clause?'sealed':''}"><span>◉ 一个完整内容包</span><p lang="en">${esc(s.clause||'先选择内部语序')}</p><i aria-hidden="true"></i></div><div class="shipping-line ${s.dock?'connected':''}"><span>${s.dock?'↓ 试送到所选泊位':'↓ 选择这个整体的工作'}</span></div><div class="port-docks">${q.axes.dock.map(([v,t])=>`<div class="port-dock ${chosen('dock',v)?'docked':''}">${button('dock',v,t)}<span aria-hidden="true">${chosen('dock',v)?'📦':'◌'}</span></div>`).join('')}</div><p class="stage-note">胶囊内部也要语法正确。送到泊位只是试操作，确认后再看是否适合题目。</p></div>`;
  controlsHTML=controls('clause','① 封装从句：选择符合中文任务的内部表达')+'<p class="stage-note">② 在上方五个泊位中，选择这个整体在句子里的工作。</p>';
  preview=(s.clause||'〔尚未封装〕')+(s.dock?' → '+q.axes.dock.find(([v])=>v===s.dock)[1]:' → 等待选择泊位');
 }
 const filled=Object.keys(q.axes).every(k=>s[k]);
 return stage+`<div class="voyage-controls expedition-controls">${controlsHTML}</div><div class="lab-preview" aria-live="polite"><small>${answered?'这次连接成功':feedback?'试操作 · 请看解释后重试':'你的试操作 · 尚未判定'}</small><p lang="en">${esc(preview)}</p></div><button class="primary" data-action="check-lab" ${locked||!filled?'disabled':''}>${q.type==='passive'?'检查这次换机位':q.type==='treasure'?'检查地图与表达':'检查胶囊与泊位'} ✓</button>`;
}
