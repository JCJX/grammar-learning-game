(function(){
 'use strict';
 const F=window.QuestInputFormat,allowed='#literacyText,#talkAnswer,#examText,#routeSummary,#routeSpeech,#routeOriginal,#routeRevision,#routeProject,#expAnswer:not([data-input-assist="off"]),#expOriginal,#expRevision,#expSpeech,#expInteraction,#expProductive,#transcript,#dialogueAnswer';
 let auto=true;try{auto=localStorage.getItem('quest-input-auto-v1')!=='off'}catch{}
 let composing=new WeakSet(),history=new WeakMap(),bars=new WeakMap(),active=null,serial=0;
 const style=document.createElement('style');style.textContent='.input-tools{display:flex;flex-wrap:wrap;gap:7px;align-items:center;margin:8px 0 14px;font-size:13px}.input-tools button{min-height:40px;padding:8px 12px}.input-tools label{display:flex;align-items:center;gap:5px}.input-tools .input-status{flex-basis:100%;line-height:1.55;color:#53685c}.input-tools button:disabled{opacity:.5}.input-voice-dialog{max-width:620px;width:calc(100% - 28px);max-height:85dvh;overflow:auto;padding:24px;border:1px solid #ccd9cd;border-radius:20px}.input-voice-dialog textarea{width:100%;min-height:130px;box-sizing:border-box}.input-voice-dialog button{min-height:44px;margin:5px}';document.head.append(style);
 function eligible(el){return el?.matches?.(allowed)&&!el.disabled&&!el.readOnly}
 function notice(el,text){const bar=bars.get(el);if(bar)bar.querySelector('.input-status').textContent=text}
 function set(el,value,caret){if(el.value===value)return;history.set(el,{value:el.value,start:el.selectionStart,end:el.selectionEnd});el.value=value;if(caret!==undefined)el.setSelectionRange(caret,caret);el.dispatchEvent(new Event('input',{bubbles:true}));el.dataset.inputAssisted='formatting';}
 function tidy(el,explicit=false){if(!eligible(el)||composing.has(el))return;const next=F.format(el.value,{indent:el.tagName==='TEXTAREA',terminal:explicit});set(el,next);if(explicit)notice(el,'已整理英文标点、句首与 I 的大写及段落缩进。未检查语法、专有名词或句意。可撤销。')}
 function mount(el){if(el.dataset.inputTools)return;el.dataset.inputTools='yes';el.setAttribute('autocapitalize','sentences');el.setAttribute('lang','en');el.setAttribute('spellcheck','true');
  const bar=document.createElement('div');bar.className='input-tools';bar.innerHTML='<button type="button" data-edit="format">整理英文</button><button type="button" data-edit="undo">撤销整理／填入</button><button type="button" data-edit="voice">语音填入</button><label><input type="checkbox" data-edit="auto">自动整理</label><span class="input-status" role="status">离开输入框时整理；仅处理排版。语音在本机识别，核对后填入。</span>';(el.closest('label')||el).after(bar);bars.set(el,bar);bar.querySelector('input').checked=auto;
  bar.addEventListener('pointerdown',e=>{if(e.target.closest('button'))e.preventDefault()});
  bar.addEventListener('click',e=>{const button=e.target.closest('button');if(!button)return;const kind=button.dataset.edit;if(kind==='format')tidy(el,true);if(kind==='undo'){const old=history.get(el);if(old){el.value=old.value;el.setSelectionRange(old.start,old.end);history.delete(el);el.dispatchEvent(new Event('input',{bubbles:true}));notice(el,'已恢复整理或填入前的文字。')}else notice(el,'暂无可撤销的整理或语音填入。')}if(kind==='voice')voice(el)});
  bar.querySelector('input').addEventListener('change',e=>{auto=e.target.checked;try{localStorage.setItem('quest-input-auto-v1',auto?'on':'off')}catch{}document.querySelectorAll('.input-tools [data-edit="auto"]').forEach(x=>x.checked=auto)});
 }
 function scan(){document.querySelectorAll(allowed).forEach(mount)}
 document.addEventListener('compositionstart',e=>composing.add(e.target));document.addEventListener('compositionend',e=>composing.delete(e.target));
 document.addEventListener('focusout',e=>{if(auto&&active?.el!==e.target)tidy(e.target)});
 // Capture phase ensures submit/save handlers read the formatted value, including keyboard submits.
 document.addEventListener('click',e=>{const focused=document.activeElement;if(auto&&eligible(focused)&&!e.target.closest('.input-tools'))tidy(focused)},true);
 document.addEventListener('submit',e=>{if(auto)e.target.querySelectorAll(allowed).forEach(el=>tidy(el))},true);
 async function voice(el){
  if(active){notice(el,'已有一个语音填入窗口，请先完成或关闭。');return}const token=++serial,start=el.selectionStart??el.value.length,end=el.selectionEnd??start,original=el.value;
  const d=document.createElement('dialog');d.className='input-voice-dialog';d.innerHTML='<h2>说英文，核对后填入</h2><p>英文在本机识别，最多120秒。识别文字不是语言评分，填入后仍请核对。</p><p data-status role="status">可以录音，也可以导入本地音频。</p><button type="button" data-start>开始录音</button><button type="button" data-stop disabled>停止并识别</button><label>导入录音 <input type="file" accept="audio/*,.wav,.mp3,.m4a,.webm"></label><label>识别结果<textarea aria-label="语音填入预览" spellcheck="true" lang="en"></textarea></label><button type="button" data-insert disabled>核对完成，填入原输入框</button><button type="button" data-close>取消</button>';
  document.body.append(d);const session={token,d,el,capture:null,pending:false,closed:false};active=session;d.showModal();const status=d.querySelector('[data-status]'),preview=d.querySelector('textarea'),begin=d.querySelector('[data-start]'),stop=d.querySelector('[data-stop]'),apply=d.querySelector('[data-insert]'),file=d.querySelector('input');
  const alive=()=>active===session&&!session.closed&&el.isConnected;
  function close(){if(session.closed)return;session.closed=true;session.capture?.cancel();session.capture=null;if(active===session)active=null;d.close();d.remove()}
  d.addEventListener('cancel',e=>{e.preventDefault();close()});d.addEventListener('close',()=>{if(!session.closed)close()});d.querySelector('[data-close]').onclick=close;
  function busy(b){session.pending=b;begin.disabled=b;file.disabled=b;apply.disabled=b||!preview.value.trim()}
  async function recognize(blob){if(!alive())return;busy(true);stop.disabled=true;try{const result=await LocalSpeech.transcribe(blob,{onProgress:t=>{if(alive())status.textContent=t}});if(!alive())return;preview.value=F.format(result.text||'',{terminal:true});status.textContent=result.text?'请核对识别文字，可在这里修改；不会自动提交答案。':result.reason||'没有识别到英文，请重试。'}catch(error){if(alive())status.textContent=error.message}finally{if(alive())busy(false)}}
  async function finish(){if(!session.capture||!alive())return;const cap=session.capture;session.capture=null;stop.disabled=true;const result=await cap.stop();if(alive())await recognize(result.blob)}
  begin.onclick=async()=>{busy(true);status.textContent='正在准备本地模型与麦克风…';try{await LocalSpeech.load(t=>{if(alive())status.textContent=t});if(!alive())return;const cap=await LocalSpeech.capture({maxSeconds:120,onAutoStop:()=>finish(),onLevel:(n,seconds)=>{if(alive())status.textContent='正在录音 · '+Math.floor(seconds)+'秒'}});if(!alive()){cap.cancel();return}session.capture=cap;stop.disabled=false;status.textContent='正在录音，请说英文。'}catch(error){if(alive()){status.textContent=error.message;busy(false)}}};stop.onclick=finish;
  file.onchange=()=>{const f=file.files[0];if(f)recognize(f)};preview.oninput=()=>apply.disabled=session.pending||!preview.value.trim();
  apply.onclick=()=>{if(!alive())return;if(el.value!==original){status.textContent='原输入框文字已变化，请取消后重新打开，以免覆盖新内容。';return}try{const value=F.format(preview.value.trim(),{terminal:true}),result=F.insert(el.value,start,end,value,el.maxLength>0?el.maxLength:Infinity);set(el,result.value,result.caret);close();el.focus();notice(el,'已填入核对后的英文。尚未提交，可继续编辑或撤销。')}catch(error){status.textContent=error.message}};
 }
 new MutationObserver(()=>{scan();if(active&&!active.el.isConnected){active.d.querySelector('[data-close]').click()}}).observe(document.body,{childList:true,subtree:true});scan();
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&active?.capture){active.d.querySelector('[data-stop]').click()}});
})();
