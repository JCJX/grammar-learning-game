/* Pure learning rules shared by web and future native shells. No network or UI. */
(function(root){
 'use strict';
 function normalize(text){const contractions={"i'm":'i am',"i'd":'i would',"i'll":'i will',"i've":'i have',"it's":'it is',"that's":'that is',"don't":'do not',"doesn't":'does not',"didn't":'did not',"can't":'cannot',"couldn't":'could not',"wouldn't":'would not',"we're":'we are',"we've":'we have',"we'll":'we will',"they're":'they are',"you're":'you are',"he's":'he is',"she's":'she is',"let's":'let us'};return String(text||'').toLowerCase().replace(/[’‘]/g,"'").replace(/\b[a-z]+'[a-z]+\b/g,s=>contractions[s]||s).replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim()}
 function compare(actual,expected){
  const a=normalize(actual).split(' ').filter(Boolean),b=normalize(expected).split(' ').filter(Boolean);
  const dp=Array.from({length:b.length+1},()=>Array(a.length+1).fill(0));
  for(let i=0;i<=b.length;i++)dp[i][0]=i;for(let j=0;j<=a.length;j++)dp[0][j]=j;
  for(let i=1;i<=b.length;i++)for(let j=1;j<=a.length;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(b[i-1]===a[j-1]?0:1));
  let i=b.length,j=a.length,missing=[],extra=[];
  while(i||j){if(i&&j&&dp[i][j]===dp[i-1][j-1]+(b[i-1]===a[j-1]?0:1)){if(b[i-1]!==a[j-1]){missing.unshift(b[i-1]);extra.unshift(a[j-1])}i--;j--}else if(i&&dp[i][j]===dp[i-1][j]+1){missing.unshift(b[--i])}else{extra.unshift(a[--j])}}
  return {exact:a.length>0&&dp[b.length][a.length]===0,missing,extra,words:a.length,expectedWords:b.length};
 }
 function matches(t,lesson){return [lesson.en,lesson.speech,...(lesson.accepted||[])].some(x=>normalize(t)===normalize(x))}
 function schedule(previous,{review=false,assisted=false,now=Date.now()}={}){
  const intervals=[1,3,7,14,30,60];const old=previous?{...previous}:{level:0,due:0};
  const early=!!previous&&old.due>now;const c={...old};
  if(assisted){c.level=0;c.due=Math.min(old.due>now?old.due:Infinity,now+600000)}
  else if(early){/* Early practice never postpones the scheduled check. */}
  else{c.level=review?Math.min(5,(old.level||0)+1):(old.level||0);c.due=now+intervals[c.level]*86400000}
  return {...c,early,intervalDays:intervals[c.level]};
 }
 function validateState(s,{maxLessonId=1248}={}){
  if(!s||!Array.isArray(s.completed)||s.completed.some(n=>!Number.isInteger(n)||n<1||n>maxLessonId)||!Number.isFinite(s.xp)||s.xp<0||!s.cards||typeof s.cards!=='object'||Array.isArray(s.cards)||!s.days||typeof s.days!=='object'||Array.isArray(s.days))return false;
  if(Object.entries(s.cards).some(([id,c])=>String(Number(id))!==id||Number(id)<1||Number(id)>maxLessonId||!c||!Number.isFinite(c.due)||!Number.isInteger(c.level)||c.level<0||c.level>5))return false;
  if(s.completed.some(id=>!s.cards[id]))return false;
  return !Object.entries(s.days).some(([d,n])=>!/^\d{4}-\d{2}-\d{2}$/.test(d)||!Number.isInteger(n)||n<0);
 }
 const api={normalize,compare,matches,schedule,validateState};root.LearningCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
