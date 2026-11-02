/* Fixed internal content ratings. These describe material, not learner proficiency. */
(function(root){'use strict';
 const rows=[
 ['A1','起步',['A1','A1','A1','A1'],'无需已有英语基础；能跟随中文任务说明。','辨认问候与人物信息；用短句介绍自己、提出基本需要。','短句与人物卡为主，有中文及示范支持。','不能据此证明能在自然语速下自由交流。'],
 ['A1','巩固',['A1','A1','A1','A1'],'能完成第1章身份、问候与基本问答。','说明时间和习惯；询问并核对简单日程。','一般现在时、频率与简单时间信息。','日常句型掌握不等于具备A2连续交流。'],
 ['A2','日常事务入门',['A2','A2','A2','A2'],'能听懂清楚的基本时间、地点和需要。','完成点餐、购物、问路与简单预约。','常见事务、高频短消息及直接信息交换。','需继续练习陌生菜单、口音和非预设追问。'],
 ['A2','经历表达',['A2','A2','A2','A2'],'能用简单句完成常见事务交流。','按先后说明过去事件，并补充简单原因和感受。','过去时与基础连接；短篇经历材料。','尚不足以证明能持续展开陌生主题的叙述。'],
 ['A2','旅行应用',['A2','A2','A2','A2'],'能询问日期、价格并描述基本经历。','核对预订、交通、行李和变更；给出简单选择理由。','日常旅行需要与明确条件，仍有示范支架。','较复杂的投诉、协商与连续追问仍需额外训练。'],
 ['A2','求助与协商巩固',['A2','A2','A2','A2'],'能在旅行中表达需要并核对安排。','说明常见故障、请求帮助、复述确认解决方式。','短篇服务说明与礼貌请求，加入B1功能预备。','固定三轮任务不能证明能独立处理不可预测问题。'],
 ['A2','社交巩固与B1预备',['A2','A2','A2','A2'],'能表达经历、需要和简单理由。','邀请、拒绝、追问兴趣、表达偏好与关心。','使用部分较复杂句型，但材料和交流跨度仍短。','出现完成时或关系从句不等于整章已覆盖B1。'],
 ['B1','学习与工作入门',['A2','B1','B1','B1'],'能较独立处理A2熟悉事务并组织简单段落。','说明经历、任务和分工；组织工作邮件并给出理由。','项目邮件与连贯信息组织进入B1功能，听力仍为短段。','不是完整B1课程；需增加自然语速、多说话者和长篇材料。'],
 ['B1','说明与证据阅读',['B1','B1','B1','B1'],'能连贯说明熟悉主题并理解短篇实用材料。','概括过程、区分事实与推测、说明证据局限。','有抽象词和限制表达，但阅读与论证长度有限。','部分B2相关功能作延伸，未覆盖B2较长复杂论证。'],
 ['B1','观点与理由展开',['B1','B1','B1','B1'],'能概括短篇材料并解释基本因果。','提出观点、给理由和例子、回应一个反方顾虑。','练习段落论证和条件让步，仍以短篇与示范为主。','不能据此确认B2流畅讨论、独立长文写作或广泛词汇。'],
 ['B1','考试结构专项',['B1','B1','B1','B1'],'能读懂B1短文并组织相关理由。','识别修正与同义表达；练习图表概述、文章结构和口语展开。','考试题型及150/250词写作格式不等于相应语言等级。','题量、时长、口音和题目等值尚不构成完整雅思或B2测验。'],
 ['B1','综合应用与复核',['B1','B1','B1','B1'],'已学习前章，并能独立完成相关陌生任务。','在新材料中综合信息、修订表达并进行前后与延迟复测。','跨主题任务和证据复核，但题库规模与内容跨度有限。','结业表示完成本课程；实际CEFR结果由四项证据另行评估。']
 ];
 const count=text=>String(text||'').trim().split(/\s+/).filter(Boolean).length;
 const ratings=rows.map((r,i)=>{const chapter=i+1,reading=typeof unitLiteracy==='undefined'?[]:unitLiteracy.filter(t=>t.chapter===chapter),ls=typeof lessons==='undefined'?[]:lessons.filter(l=>l.chapter===chapter);return {chapter,level:r[0],stage:r[1],skills:Object.fromEntries(['listening','reading','speaking','writing'].map((s,j)=>[s,r[2][j]])),prerequisite:r[3],outcome:r[4],basis:r[5],gap:r[6],method:'internal-content-review-v1',externalAlignment:false,stats:{lessons:ls.length,coreSentenceMean:ls.length?Math.round(ls.reduce((n,l)=>n+count(l.en),0)/ls.length):0,readingMin:reading.length?Math.min(...reading.map(t=>count(t.passage))):0,readingMax:reading.length?Math.max(...reading.map(t=>count(t.passage))):0,writingMinimum:reading.map(t=>t.minimumWords)}};});
 root.QuestCourseRatings=ratings;
 if(typeof courseStandards!=='undefined')courseStandards.forEach((c,i)=>{c.cefrTarget=ratings[i].level;c.contentRating=ratings[i];c.cefrStatus='本版固定内部内容评级，不代表学习者已达级或外部CEFR认证';if(root.QuestCEFR)root.QuestCEFR.targets[i]=ratings[i].level;});
 if(typeof module!=='undefined')module.exports=ratings;
})(typeof window!=='undefined'?window:globalThis);
