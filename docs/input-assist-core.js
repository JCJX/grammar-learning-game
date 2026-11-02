(function(root){
 'use strict';
 function format(value,{indent=false,terminal=false}={}){
  let text=String(value).replace(/\r\n?/g,'\n');
  const marks={'，':',','。':'.','！':'!','？':'?','；':';','：':':','（':'(', '）':')','“':'"','”':'"','‘':"'",'’':"'"};
  text=text.split('\n').map(line=>{
   // Leave Chinese notes and mixed-language quotations alone.
   if(/[\u3400-\u9fff]/u.test(line)||!/[A-Za-z]/.test(line))return line;
   const protectedTokens=[];
   let s=line.replace(/https?:\/\/[^\s，。！？]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g,token=>{protectedTokens.push(token);return '\u0001'+(protectedTokens.length-1)+'\u0002'}).replace(/[，。！？；：（）“”‘’]/g,c=>marks[c]);
   s=s.replace(/\bi\b/g,'I').replace(/(^\s*["'(]*|[!?]\s+["'(]*|\.\s+["'(]*)([a-z])/g,(_,a,b)=>a+b.toUpperCase());
   s=s.replace(/\s+([,;:!?])/g,'$1').replace(/([,;:!?])(?=[A-Za-z])/g,'$1 ');
   // Do not split decimals, URLs, email addresses or abbreviations at periods.
   if(terminal&&/[A-Za-z0-9]$/.test(s.trim())&&!/https?:\/\/|\S+@\S+/.test(s))s=s.trimEnd()+'.';
   if(indent)s='  '+s.trimStart();
   return s.replace(/\u0001(\d+)\u0002/g,(_,n)=>protectedTokens[Number(n)]);
  }).join('\n');
  return text;
 }
 function insert(value,start,end,spoken,maxLength=Infinity){
  const gap=start>0&&!/\s$/.test(value.slice(0,start))?' ':'';
  const tail=end<value.length&&!/^\s|^[.,!?;:]/.test(value.slice(end))?' ':'';
  const addition=gap+spoken+tail;
  if(value.length-(end-start)+addition.length>maxLength)throw Error('识别结果超过输入框长度上限，请缩短录音或先分段保存。');
  return {value:value.slice(0,start)+addition+value.slice(end),caret:start+addition.length};
 }
 const api={format,insert};root.QuestInputFormat=api;if(typeof module==='object')module.exports=api;
})(typeof window==='object'?window:globalThis);
