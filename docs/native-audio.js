/* Android adapter: system permission + native PCM; browser capture stays separate. */
(()=>{'use strict';let job=null,sequence=0;
 const available=()=>typeof window.QuestNative?.startAudioCapture==='function';
 function end(s,result){if(job!==s)return;clearTimeout(s.timer);job=null;s.doneResolve(result)}
 function failure(s,message){if(job!==s)return;try{window.QuestNative.cancelAudioCapture(s.id)}catch{}const error=new Error(message);if(!s.started)s.readyReject(error);end(s,{blob:new Blob([],{type:'audio/wav'}),duration:0,error:message});if(s.started)s.options.onAutoStop?.()}
 window.QuestNativeAudioEvent=event=>{const s=job;if(!s||event.id!==s.id)return;
  if(event.type==='started'){s.started=true;clearTimeout(s.timer);s.timer=setTimeout(()=>{window.QuestNative.cancelAudioCapture(s.id);failure(s,'录音响应超时，请重新进入练习。')},s.seconds*1000+15000);s.readyResolve(s.controller);return}
  if(event.type==='level'){s.options.onLevel?.(Math.max(0,Math.min(1,Number(event.level)||0)),Number(event.seconds)||0);return}
  if(event.type==='chunk'){if(event.index!==s.parts.length){failure(s,'本地录音数据顺序异常，请重录。');return}const raw=atob(event.data),bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));s.bytes+=bytes.length;if(s.bytes>15*1024*1024){window.QuestNative.cancelAudioCapture(s.id);failure(s,'录音超过15 MB，请缩短后重试。');return}s.parts.push(bytes);return}
  if(event.type==='finished'){if(event.bytes!==s.bytes||!s.started){failure(s,'本地录音数据不完整，请重录。');return}end(s,{blob:new Blob(s.parts,{type:'audio/wav'}),duration:Number(event.duration)||0});if(event.automatic)s.options.onAutoStop?.();return}
  if(event.type==='cancelled'){failure(s,'录音已取消。');return}
  if(event.type==='error')failure(s,event.message||'安卓本地录音失败，请检查应用麦克风权限。');
 };
 async function capture(options={}){if(job)throw Error('已有安卓录音或权限请求正在进行。');const s={id:'quest-audio-'+Date.now()+'-'+(++sequence),options,seconds:Math.max(1,Math.min(120,Number(options.maxSeconds)||20)),parts:[],bytes:0,started:false};s.done=new Promise(resolve=>s.doneResolve=resolve);s.ready=new Promise((resolve,reject)=>{s.readyResolve=resolve;s.readyReject=reject});s.controller={done:s.done,stop(){if(job===s)window.QuestNative.stopAudioCapture(s.id);return s.done},cancel(){if(job===s){window.QuestNative.cancelAudioCapture(s.id);failure(s,'录音已取消。')}return s.done}};job=s;s.timer=setTimeout(()=>{window.QuestNative.cancelAudioCapture(s.id);failure(s,'麦克风授权等待超时，请重新点击录音。')},180000);try{window.QuestNative.startAudioCapture(s.id,s.seconds)}catch{failure(s,'安卓录音桥未就绪，请退出应用后重新打开。')}return s.ready}
 window.QuestNativeAudio={available,capture,cancelActive(){if(job)job.controller.cancel()}};
})();
