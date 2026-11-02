/* All audio inference stays on-device. No Web Speech API and no cloud fallback. */
(function(){
 'use strict';
 // Inline/offline models need no page base (file previews can be about:srcdoc).
 const runtimeScriptURL=document.currentScript?.src||'';
 let playback=null,model=null,loading=null,currentCapture=null,inferenceBusy=false;
 const source=text=>window.LocalAudioClips?.[text];
 async function audioBlob(text){const url=source(text);if(!url)throw new Error('本地示范音频未找到。');if(url.startsWith('data:')){const comma=url.indexOf(','),binary=atob(url.slice(comma+1)),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);return new Blob([bytes],{type:url.slice(5,url.indexOf(';'))})}const base=new URL('.',runtimeScriptURL||document.baseURI||location.href);const response=await fetch(new URL(url,base));if(!response.ok)throw new Error('本地示范音频文件未找到。');return response.blob()}
 function stopPlayback(){if(playback){playback.pause();playback.currentTime=0;playback=null}}
 async function play(text,rate=1){stopPlayback();const url=source(text);if(!url)throw new Error('这句的本地音频尚未打包。');const a=new Audio(url);playback=a;a.playbackRate=rate;await a.play();return a}
 async function embeddedModel(){
  const tags=Array.from(document.querySelectorAll('script[data-model-chunk]'));
  if(!tags.length){let base;try{base=new URL('.',runtimeScriptURL||document.baseURI||location.href)}catch{throw new Error('请打开完整的英语冒险岛.html，或从游戏目录的本地预览启动。')}const response=await fetch(new URL('models/english-small.parts.json',base));if(!response.ok)throw new Error('无法读取分片模型清单');const manifest=await response.json();if(!Array.isArray(manifest.parts)||manifest.parts.length!==2||manifest.bytes!==41160778)throw new Error('模型清单无效');const bytes=new Uint8Array(manifest.bytes);let offset=0;for(const part of manifest.parts){if(!/^english-small\.part[12]\.bin$/.test(part.file)||!Number.isSafeInteger(part.bytes)||part.bytes<=0||offset+part.bytes>bytes.length)throw new Error('模型分片信息无效');const r=await fetch(new URL('models/'+part.file,base));if(!r.ok)throw new Error('模型分片下载失败：'+part.file);const b=new Uint8Array(await r.arrayBuffer());if(b.length!==part.bytes)throw new Error('模型分片不完整');const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',b)),x=>x.toString(16).padStart(2,'0')).join('');if(hash!==part.sha256)throw new Error('模型分片校验失败');bytes.set(b,offset);offset+=b.length}if(offset!==bytes.length)throw new Error('模型总长度不匹配');return {url:'english-quest-embedded-vosk-0.15',buffer:bytes.buffer}}
  const size=tags.reduce((n,tag)=>{const s=tag.textContent.trim();return n+s.length/4*3-(s.endsWith('==')?2:s.endsWith('=')?1:0)},0);
  const bytes=new Uint8Array(size);let offset=0;
  for(const tag of tags){const chunk=atob(tag.textContent.trim());for(let i=0;i<chunk.length;i++)bytes[offset+i]=chunk.charCodeAt(i);offset+=chunk.length}
  return {url:'english-quest-embedded-vosk-0.15',buffer:bytes.buffer};
 }
 async function load(onProgress=()=>{}){
  if(model?.ready)return model;if(loading)return loading;
  if(window.QuestWebRuntime&&!window.Vosk){onProgress('正在加载本地语音引擎…');await QuestWebRuntime.ensureSpeechEngine()}
  if(model?.ready)return model;if(loading)return loading;
  if(!window.Vosk||!window.WebAssembly||!window.Worker)throw new Error('当前浏览器不支持本地语音模型，请使用新版 Edge、Chrome 或 Safari。');
  onProgress('正在从本地文件读取英语模型，首次加载可能需要几十秒…');
  loading=new Promise((resolve,reject)=>{
   let candidate=null,settled=false;
   const fail=error=>{if(settled)return;settled=true;clearTimeout(timer);candidate?.terminate();model=null;loading=null;const detail=error?.error||error?.message||'加载超时或设备内存不足';console.error('Local speech model:',detail);reject(new Error('本地语音模型未能加载：'+detail+'。文字与听力仍可离线游玩。'))};
   const timer=setTimeout(fail,90000);
   (async()=>{try{const embedded=await embeddedModel();if(settled)return;candidate=new Vosk.Model(embedded.url,-1,embedded.buffer);candidate.on('load',m=>{if(settled)return;if(!m.result){fail(m);return}settled=true;clearTimeout(timer);model=candidate;onProgress('本地英语模型已就绪 · 音频不会上传');resolve(model)});candidate.on('error',fail)}catch(e){fail(e)}})();
  });const attempt=loading;attempt.catch(()=>{if(loading===attempt)loading=null});return attempt;
 }
 function wav(samples,rate){const b=new ArrayBuffer(44+samples.length*2),v=new DataView(b);const str=(o,s)=>{for(let i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i))};str(0,'RIFF');v.setUint32(4,36+samples.length*2,true);str(8,'WAVE');str(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,rate,true);v.setUint32(28,rate*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,samples.length*2,true);for(let i=0;i<samples.length;i++)v.setInt16(44+i*2,Math.max(-1,Math.min(1,samples[i]))*(samples[i]<0?32768:32767),true);return new Blob([b],{type:'audio/wav'})}
 async function capture({onLevel=()=>{},onAutoStop=()=>{},maxSeconds=20}={}){
  maxSeconds=Math.max(1,Math.min(120,Number(maxSeconds)||20));
  stopPlayback();if(currentCapture)throw new Error('已有录音正在进行。');
  if(window.QuestNativeAudio?.available())return window.QuestNativeAudio.capture({onLevel,onAutoStop,maxSeconds});
  const AC=window.AudioContext||window.webkitAudioContext;
  if(!AC||!navigator.mediaDevices?.getUserMedia)throw new Error('此环境没有麦克风接口。可以导入本地录音；手机端请从安全页面或原生应用打开。');
  const ctx=new AC();await ctx.resume();let stream;
  try{stream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:true,noiseSuppression:true,autoGainControl:true},video:false})}catch(error){await ctx.close();const name=error?.name||'UnknownError';if(name==='NotReadableError'||name==='AbortError')throw new Error('麦克风无法启动（'+name+'）。请关闭其他录音或通话应用，检查系统麦克风开关后重试。');if(name==='NotFoundError')throw new Error('没有找到可用麦克风。请连接设备，或导入本地录音。');if(name==='OverconstrainedError')throw new Error('设备不支持当前录音设置。请更新浏览器，或导入本地录音。');throw new Error('浏览器未允许麦克风（'+name+'）。请在当前网站权限中允许麦克风，并检查系统授权；也可导入本地录音。')}
  if(document.hidden){stream.getTracks().forEach(t=>t.stop());await ctx.close();throw new Error('页面已进入后台，请回到练习后重新录音。')}
  const input=ctx.createMediaStreamSource(stream),processor=ctx.createScriptProcessor(4096,1,1),mute=ctx.createGain();mute.gain.value=0;
  let chunks=[],length=0,stopped=false,resolveDone;const done=new Promise(r=>resolveDone=r);
  processor.onaudioprocess=e=>{if(stopped)return;const data=e.inputBuffer.getChannelData(0).slice();chunks.push(data);length+=data.length;let power=0;for(const x of data)power+=x*x;onLevel(Math.min(1,Math.sqrt(power/data.length)*8),length/ctx.sampleRate);if(length>=ctx.sampleRate*maxSeconds){controller.stop();onAutoStop()}};
  input.connect(processor);processor.connect(mute);mute.connect(ctx.destination);
  const controller={done,stop(){if(stopped)return done;stopped=true;clearTimeout(timer);processor.disconnect();input.disconnect();mute.disconnect();stream.getTracks().forEach(t=>t.stop());const samples=new Float32Array(length);let offset=0;for(const chunk of chunks){samples.set(chunk,offset);offset+=chunk.length}chunks=[];const rate=ctx.sampleRate;ctx.close().catch(()=>{});currentCapture=null;resolveDone({blob:wav(samples,rate),duration:length/rate});return done},cancel(){return this.stop()}};
  const timer=setTimeout(()=>{controller.stop();onAutoStop()},maxSeconds*1000+500);currentCapture=controller;return controller;
 }
 function analyze(buffer){let sum=0,peak=0,clipped=0;const samples=buffer.getChannelData(0);for(const x of samples){sum+=x*x;peak=Math.max(peak,Math.abs(x));if(Math.abs(x)>.99)clipped++}return {duration:buffer.duration,rms:Math.sqrt(sum/Math.max(1,samples.length)),peak,clipped:clipped/Math.max(1,samples.length)}}
 async function transcribe(blob,{onProgress=()=>{}}={}){
  if(inferenceBusy)throw new Error('上一段录音仍在处理，请稍候。');inferenceBusy=true;
  let ctx=null,rec=null;
  try{
   if(blob.size>15*1024*1024)throw new Error('请使用15 MB以内、120秒以内的录音。');
   const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw new Error('当前浏览器无法解码音频。');ctx=new AC();let buf;try{buf=await ctx.decodeAudioData(await blob.arrayBuffer())}catch{throw new Error('无法读取这个录音文件，请使用有效的 WAV、MP3 或当前浏览器支持的音频格式。')}
   if(buf.duration>120.6)throw new Error('请使用120秒以内的录音。');const quality=analyze(buf);
   if(quality.duration<.3||quality.rms<.002)return {text:'',words:[],quality,reason:'没有检测到足够清晰的声音，请靠近麦克风再试一次。'};
   const m=await load(onProgress);onProgress('正在设备内识别录音…');rec=new m.KaldiRecognizer(buf.sampleRate);rec.setWords(true);
   const mono=new Float32Array(buf.length);for(let c=0;c<buf.numberOfChannels;c++){const channel=buf.getChannelData(c);for(let i=0;i<mono.length;i++)mono[i]+=channel[i]/buf.numberOfChannels}
   const result=await new Promise((resolve,reject)=>{
    const parts=[],words=[];let finalRequested=false;
    const timeout=setTimeout(()=>reject(new Error('识别时间较长，请缩短录音后重试。')),Math.max(45000,buf.duration*1800));
    function message(msg){
     if(msg.event==='result'){if(msg.result?.text)parts.push(msg.result.text);if(msg.result?.result)words.push(...msg.result.result)}
     if(finalRequested&&msg.event==='result'){clearTimeout(timeout);resolve({text:parts.join(' ').trim(),words,quality});return}
     // acceptWaveform responds with result OR partialresult. Only then request
     // the final result, so endpoint replies cannot be mistaken for the final.
     if(!finalRequested){finalRequested=true;rec.retrieveFinalResult()}
    }
    rec.on('result',message);rec.on('partialresult',message);
    rec.on('error',()=>{clearTimeout(timeout);reject(new Error('本地识别失败，请重新尝试。'))});
    rec.acceptWaveformFloat(mono,buf.sampleRate);
   });
   return result;
  }finally{rec?.remove();if(ctx)await ctx.close().catch(()=>{});inferenceBusy=false}
 }
 window.LocalSpeech={play,stopPlayback,load,capture,transcribe,source,audioBlob,get ready(){return !!model?.ready},get busy(){return inferenceBusy}};
})();
