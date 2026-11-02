const dialogueSpecs=[
 [1,'登记处的新朋友',[2,4,15],[[['alex']],[['china']],[['reading']]]],
 [1,'咖啡馆的小麻烦',[11,12,18],[[['water']],[['thank']],[['again']]]],
 [2,'和 Mia 交换作息',[21,23,38],[[['seven','7']],[['bus']],[['twenty','20'],['english']]]],
 [2,'调整一个约定',[31,32,39],[[['lunchtime']],[['library']],[['four','4'],['three','3']]]],
 [3,'市集采购交流',[43,41,45],[[['shirt','jacket'],['smaller']],[['how much']],[['card']]]],
 [3,'找路去博物馆',[51,54,53],[[['station']],[['bus'],['museum']],[['ten','10'],['foot']]]],
 [4,'讲讲昨天的经历',[62,63,65],[[['museum']],[['river']],[['enjoy'],['visit']]]],
 [4,'在失物处找背包',[68,69,70],[[['bag'],['bus']],[['blue'],['label']],[['driver']]]],
 [5,'安排海边旅行',[81,82,83],[[['coast'],['month']],[['friday']],[['train'],['comfortable']]]],
 [5,'在旅店前台',[86,88,90],[[['two','2'],['nights']],[['breakfast'],['price']],[['luggage'],['afternoon']]]],
 [6,'请求修理暖气',[106,108,109],[[['heater'],['not working','does not work']],[['today']],[['change'],['rooms','room']]]],
 [6,'退换一件商品',[111,112,115],[[['yesterday'],['not fit','does not fit']],[['receipt']],[['solution'],['work']]]],
 [7,'安排一次晚餐',[121,123,124],[[['dinner']],[['plans','work']],[['another','next week']]]],
 [7,'和朋友继续聊',[126,127,130],[[['gallery']],[['enjoy'],['most']],[['tell'],['more']]]],
 [8,'介绍你的学习与经历',[141,142,144],[[['english'],['two','2']],[['explaining'],['ideas']],[['event'],['students']]]],
 [8,'一次项目进度会',[148,149,150],[[['information'],['slides']],[['completed'],['introduction']],[['deadline'],['two','2']]]]
];
const conversationScenarios=dialogueSpecs.map((s,i)=>({id:'conversation-'+(i+1),chapter:s[0],title:s[1],turns:s[2].map((id,j)=>{const l=lessons[id-1];return {lessonId:id,npc:l.npc,ask:l.line,goal:l.zh,sample:l.en,groups:s[3][j],tip:l.tip}})}));
for(const text of ['Could you explain that another way?','Thank you. Let us continue.'])if(!audioTexts.includes(text))audioTexts.push(text);
