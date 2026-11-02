(function(){
 'use strict';const KEY='quest-answer-sounds-v1';let enabled=true,ctx=null,voices=[],generation=0;
 try{enabled=localStorage.getItem(KEY)!=='off'}catch{}
 function stop(){generation++;for(const v of voices)try{v.stop()}catch{}voices=[]}
 function result(correct){
  if(!enabled||document.hidden)return;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
  try{ctx||=new AC();stop();const token=generation;Promise.resolve(ctx.resume()).then(()=>{if(!enabled||token!==generation||document.hidden)return;const now=ctx.currentTime,notes=correct?[[660,0,.11],[880,.10,.14]]:[[330,0,.12],[247,.10,.15]];for(const [hz,delay,duration]of notes){const oscillator=ctx.createOscillator(),gain=ctx.createGain();oscillator.type='sine';oscillator.frequency.value=hz;gain.gain.setValueAtTime(0,now+delay);gain.gain.linearRampToValueAtTime(.065,now+delay+.012);gain.gain.exponentialRampToValueAtTime(.001,now+delay+duration);oscillator.connect(gain);gain.connect(ctx.destination);oscillator.start(now+delay);oscillator.stop(now+delay+duration+.01);oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();voices=voices.filter(v=>v!==oscillator)};voices.push(oscillator)}}).catch(()=>{})}catch{}
 }
 function mount(){if(document.getElementById('answerSoundToggle'))return;const b=document.createElement('button');b.id='answerSoundToggle';b.type='button';b.style.cssText='font:inherit;font-size:13px;padding:7px 10px;border-radius:12px;white-space:nowrap;min-height:40px';const sync=()=>{b.textContent=enabled?'♪ 答题音效开':'♪ 答题音效关';b.setAttribute('aria-pressed',String(enabled));b.setAttribute('aria-label',enabled?'关闭答题音效':'开启答题音效')};sync();b.onclick=()=>{enabled=!enabled;try{localStorage.setItem(KEY,enabled?'on':'off')}catch{}if(!enabled)stop();sync()};const parent=document.querySelector('.main header>div')||document.querySelector('header');if(parent)parent.append(b);else{b.style.position='fixed';b.style.right='12px';b.style.bottom='86px';b.style.zIndex='901';document.body.append(b)}}
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});window.addEventListener('pagehide',stop);
 window.QuestAnswerSounds={result,get enabled(){return enabled},mount};mount();
})();
