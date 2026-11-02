const lessons = [
['第一声问候','Hello!','你好！','hello','你好','见到邻居，先打个招呼。',['Goodbye!','Hello!','Sorry!'],'Hello!','Hello!','用 Hello 开始一段对话。'],
['告诉我你的名字',"My name is Alex.",'我叫 Alex。','name','名字','在旅客登记处介绍自己。',["My name is Alex.",'I am fine.','Thank you.'],"My name is Alex.",'My name is Alex.','My name is 后面接名字。'],
['很高兴认识你','Nice to meet you.','很高兴认识你。','meet','遇见；认识','新朋友向你伸出手。',['See you tomorrow.','Nice to meet you.','Excuse me.'],'Nice to meet you.','Nice to meet you.','第一次见面时可以这样表达友好。'],
['你从哪里来',"I'm from China.",'我来自中国。','from','来自','邻居问：Where are you from?',["I'm from China.","I'm twelve.","I'm tired."],"I'm from China.",'I am from China.','from 后面可以接国家或城市。'],
['今天感觉如何',"I'm fine, thank you.",'我很好，谢谢你。','fine','好的','店主问你：How are you?',['My name is Alex.',"I'm fine, thank you.",'This is a book.'],"I'm fine, thank you.",'I am fine thank you.','How are you? 常用来问候。'],
['认识新朋友','This is my friend.','这是我的朋友。','friend','朋友','向邻居介绍同行的朋友。',['This is my friend.','Where is my bag?','I need water.'],'This is my friend.','This is my friend.','This is 可以用于介绍某个人。'],
['神奇的小物件','This is a key.','这是一把钥匙。','key','钥匙','房东给你一把钥匙，请辨认物品。',['This is a map.','This is a key.','This is a cup.'],'This is a key.','This is a key.','a 用在这里表示“一把”。'],
['我的旅行背包','I have a bag.','我有一个包。','bag','包','告诉向导你带了什么。',['I have a bag.','I like tea.','I am happy.'],'I have a bag.','I have a bag.','I have 表示“我有”。'],
['请帮帮我','Can you help me?','你能帮帮我吗？','help','帮助','你在小镇迷路了，向路人求助。',['Can you help me?','What is your name?','How old are you?'],'Can you help me?','Can you help me?','Can you…? 可以用于请求帮助。'],
['广场在哪里','Where is the park?','公园在哪里？','park','公园','你想找到小镇公园。',['What is this?','Where is the park?','Who is he?'],'Where is the park?','Where is the park?','Where 用来询问地点。'],
['咖啡馆小憩',"I'd like some water.",'我想要一些水。','water','水','走进咖啡馆，礼貌地要一些水。',["I'd like some water.",'I am water.','Where is water?'],"I'd like some water.",'I would like some water.','I would like 比直接说 I want 更委婉。'],
['礼貌的魔法','Thank you very much.','非常感谢你。','thank','感谢','店员帮你找回了背包。',['Good morning.','Thank you very much.','My name is Alex.'],'Thank you very much.','Thank you very much.','very much 加强感谢的语气。'],
['不小心碰到别人',"I'm sorry.",'对不起。','sorry','抱歉的','你不小心撞到了路人。',["I'm sorry.",'You are welcome.','Nice to meet you.'],"I'm sorry.",'I am sorry.','犯了小错误时可以这样道歉。'],
['打开话题','Do you like music?','你喜欢音乐吗？','music','音乐','想了解新朋友的兴趣。',['Do you like music?','Are you music?','Where is music?'],'Do you like music.','Do you like music?','Do you like…? 用来询问喜好。'],
['说说我的喜好','I like reading.','我喜欢阅读。','read','阅读','在读书角介绍自己的兴趣。',['I like reading.','I am a book.','I have read yesterday.'],'I like reading.','I like reading.','like 后可以接动词的 -ing 形式。'],
['今天的心情',"I'm happy today.",'我今天很开心。','happy','开心的','日记里记录第一天的心情。',["I'm happy today.",'I happy today.','I have happy.'],"I'm happy today.",'I am happy today.','表达状态时不要漏掉 am。'],
['这是你的书吗','Is this your book?','这是你的书吗？','book','书','在长椅上找到一本书，询问主人。',['Is this your book?','This your book?','Are this book?'],'Is this your book?','Is this your book?','把 Is 放到句首，构成这里的一般疑问句。'],
['再说一遍好吗','Could you say that again?','你能再说一遍吗？','again','再一次','没有听清向导的话，礼貌请求重复。',['Could you say that again?','I know everything.','Good night.'],'Could you say that again?','Could you say that again?','听不清时主动请求重复，是有效的交流策略。'],
['明天见','See you tomorrow.','明天见。','tomorrow','明天','约好了明天再去公园，向朋友告别。',['See you tomorrow.','Nice to meet you.','I need help.'],'See you tomorrow.','See you tomorrow.','See you 后面可以接下次见面的时间。'],
['小镇通行证',"I'm Alex. I'm from China. I like reading.",'我是 Alex，来自中国。我喜欢阅读。','introduce','介绍','获得通行证：介绍名字、来自哪里和兴趣。',["I'm Alex. I'm from China. I like reading.",'Hello. Goodbye.','This is a key.'],"I'm Alex. I'm from China. I like reading.",'I am Alex. I am from China. I like reading.','把三个熟悉的句型组合成自己的介绍。']
].map((x,i)=>({id:i+1,title:x[0],en:x[1],zh:x[2],word:x[3],meaning:x[4],scene:x[5],options:x[6],answer:i===13?'Do you like music?':x[7],speech:x[8],tip:x[9]}));
const chapters=['初到小镇','我的日常','城市生活','昨天的故事','出发旅行','解决麻烦','建立关系','学习与工作','解释世界','表达观点','雅思训练营','最终远征'];
// Stable lesson IDs preserve progress from 0.1. All chapter additions are original.
const units=[
 {id:1,title:'码头的新朋友',place:'渡船码头',icon:'⛵',reward:'友谊邮票',story:'渡船靠岸了。向导 Mia 带你走进小镇。先认识彼此，再领取第一张旅行地图。',end:'Mia 记住了你的名字。你也有了在小镇的第一位朋友。'},
 {id:2,title:'寻找我的小屋',place:'林间街道',icon:'🗝',reward:'小屋钥匙',story:'房东 Ben 在林间街道等你。拿上钥匙和背包，问清路线，就能找到今晚的住处。',end:'你找到了公园旁的小屋，推开窗就是树叶的声音。'},
 {id:3,title:'广场上的下午',place:'树荫广场',icon:'☕',reward:'咖啡馆徽章',story:'午后，你走进 Nora 的咖啡馆。一次礼貌的请求，一句感谢，让陌生人慢慢熟悉起来。',end:'Nora 邀请你加入小镇读书会。明天，你有了新的约定。'},
 {id:4,title:'属于我的小镇',place:'旧书店',icon:'📚',reward:'小镇通行证',story:'读书会前，你在长椅上发现一本书。找到主人，再向大家介绍自己，成为小镇的新居民。',end:'欢迎成为小镇居民。带着你的名字、故事和好奇心，准备下一段旅程。'}
];
const chapterDetails=[
 {npc:'Mia',line:'Hello! Welcome to the town.',cn:'你好！欢迎来到小镇。',build:['Hello!'],transfer:['晚上离开小店，你想说“再见”。','Goodbye!',['Hello!','Goodbye!','Sorry!']],link:'Mia 向你挥手。你先回应问候。'},
 {npc:'Mia',line:'What is your name?',cn:'你叫什么名字？',build:['My','name','is','Alex.'],transfer:['新同学叫 Lily。她怎样介绍名字？','My name is Lily.',['My name is Lily.','Your name is Lily.','This is my bag.']],link:'先把 Alex 当作你的角色名字，完成旅客登记。'},
 {npc:'Mia',line:'My name is Mia.',cn:'我叫 Mia。',build:['Nice','to','meet','you.'],transfer:['朋友带来一位你第一次见面的人。你会说什么？','Nice to meet you.',['See you tomorrow.','Nice to meet you.','I am sorry.']],link:'Mia 也介绍了自己。现在用一句话表达友好。'},
 {npc:'Mia',line:'Where are you from?',cn:'你来自哪里？',build:["I'm",'from','China.'],gap:["I'm",'from','China.'],transfer:['这次你的角色来自 London。应该怎么说？',"I'm from London.",["I'm from London.","I'm London.",'I have London.']],link:'地图上的小镇欢迎来自不同地方的旅行家。'},
 {npc:'Mia',line:'How are you today?',cn:'你今天怎么样？',build:["I'm",'fine,','thank','you.'],transfer:['Ben 说他今天很累。哪句是在描述状态？',"I'm tired today.",["I'm from China.","I'm tired today.",'I have a key.']],link:'码头有点风。Mia 关心你一路旅行后的状态。'},
 {npc:'Ben',line:'Who is this?',cn:'这是谁？',build:['This','is','my','friend.'],transfer:['你想向别人介绍你的老师。','This is my teacher.',['This is my teacher.','This is my bag.','I have a teacher.']],link:'你和 Mia 来到林间街道，把她介绍给房东 Ben。'},
 {npc:'Ben',line:'Here is your key.',cn:'这是你的钥匙。',build:['This','is','a','key.'],gap:['This','is','a key.'],transfer:['Ben 递来的另一件东西是一张地图。','This is a map.',['This is a map.','This is a cup.','I am a map.']],link:'Ben 递给你小屋钥匙。辨认它，别和地图弄混。'},
 {npc:'Ben',line:'What do you have?',cn:'你带了什么？',build:['I','have','a','bag.'],transfer:['你还带了一本书，怎样表达“我有一本书”？','I have a book.',['I am a book.','I have a book.','This is your book.']],link:'入住前，Ben 帮你检查行李。'},
 {npc:'Mia',line:'Do you need help?',cn:'你需要帮助吗？',build:['Can','you','help','me?'],transfer:['想请 Mia 帮忙搬包，你可以怎样开口？','Can you help me?',['What is your name?','Can you help me?','See you tomorrow.']],link:'路口的指示牌被树叶挡住了。主动求助也很勇敢。'},
 {npc:'Mia',line:'The park is near your house.',cn:'公园就在你家附近。',build:['Where','is','the','park?'],transfer:['想问咖啡馆在哪里，把 park 换成 cafe。','Where is the cafe?',['Where is the cafe?','What is the cafe?','Who is the cafe?']],link:'小屋就在公园旁。问清公园的位置，就能找到家。'},
 {npc:'Nora',line:'What would you like?',cn:'你想要点什么？',build:["I'd",'like','some','water.'],transfer:['你现在想要一些茶，怎样礼貌地说？',"I'd like some tea.",['I am some tea.',"I'd like some tea.",'Where is tea?']],link:'安顿好行李，你走进 Nora 的咖啡馆。'},
 {npc:'Nora',line:'Here is your bag.',cn:'你的包在这里。',build:['Thank','you','very','much.'],transfer:['路人为你指了路，你会怎样回应？','Thank you very much.',['Thank you very much.','What is this?','Good night.']],link:'你把包忘在柜台。Nora 笑着把它交还给你。'},
 {npc:'Nora',line:'That is all right.',cn:'没关系。',build:["I'm",'sorry.'],transfer:['不小心踩到别人的脚，应该先说什么？',"I'm sorry.",['Nice to meet you.',"I'm sorry.",'You are welcome.']],link:'转身时，你不小心碰到了身后的客人。'},
 {npc:'Nora',line:'I like music. How about you?',cn:'我喜欢音乐。你呢？',build:['Do','you','like','music?'],gap:['Do','you','like music?'],transfer:['想问对方是否喜欢阅读。','Do you like reading?',['Do you like reading?','Are you reading yesterday?','Where is reading?']],link:'窗边传来音乐。你想了解 Nora 的兴趣。'},
 {npc:'Nora',line:'What do you like doing?',cn:'你喜欢做什么？',build:['I','like','reading.'],transfer:['这次你的兴趣是游泳。','I like swimming.',['I am swim.','I like swimming.','I have swimming.']],link:'Nora 说小镇有读书会。你正好也喜欢阅读。'},
 {npc:'Mia',line:'How do you feel today?',cn:'你今天感觉怎样？',build:["I'm",'happy','today.'],gap:["I'm",'happy','today.'],transfer:['旅行结束后你很累，怎样表达？',"I'm tired today.",['I tired today.',"I'm tired today.",'I have tired.']],link:'第二天，你带着好心情来到旧书店。'},
 {npc:'Ben',line:'I cannot find my book.',cn:'我找不到我的书了。',build:['Is','this','your','book?'],transfer:['你捡到的是一把钥匙，怎样询问主人？','Is this your key?',['Is this your key?','This your key?','Are this key?']],link:'长椅上有本书。先问问它是不是 Ben 的。'},
 {npc:'Ben',line:'The reading club starts at three.',cn:'读书会三点开始。',build:['Could','you','say','that','again?'],transfer:['没有听清集合时间，你可以怎样请求重复？','Could you say that again?',['I know everything.','Could you say that again?','Nice to meet you.']],link:'街上有点吵。没听清，就礼貌地请 Ben 再说一遍。'},
 {npc:'Mia',line:'Let us meet here tomorrow.',cn:'我们明天在这里见吧。',build:['See','you','tomorrow.'],transfer:['约好稍后再见，把 tomorrow 换成 later。','See you later.',['See you later.','I have later.','Nice to meet later.']],link:'今天的读书会结束了。你们约好明天再见。'},
 {npc:'Mia',line:'Please tell us about yourself.',cn:'请向我们介绍一下自己。',build:["I'm Alex.","I'm from China.",'I like reading.'],transfer:['Lily 来自 London，喜欢游泳。哪段介绍符合她的信息？',"I'm Lily. I'm from London. I like swimming.",["I'm Lily. I'm from London. I like swimming.","I'm Alex. I'm from China. I like reading.",'This is my book.']],link:'把已经学过的句子连起来，领取你的小镇通行证。'}
];
lessons.forEach((l,i)=>Object.assign(l,chapterDetails[i],{unit:Math.floor(i/5)+1,checkpoint:(i+1)%5===0}));
lessons[9].title='公园在哪里';
// Gap questions include plausible distractors; arrangement accepts only the taught form.
lessons.forEach(l=>{if(l.gap){l.gapOptions=l.id===4?['from','have','like']:l.id===7?['is','am','are']:l.id===14?['you','your','yours']:['happy','happily','happiness']}});
const checkpointDialogs={
 5:[{ask:'What is your name?',cn:'请用角色名字 Alex 回答。',answers:['My name is Alex.',"I'm Alex."]},{ask:'Where are you from?',cn:'请告诉 Mia，你来自中国。',answers:["I'm from China."]},{ask:'How are you today?',cn:'请告诉 Mia，你很好，并表示感谢。',answers:["I'm fine, thank you."]}],
 10:[{ask:'Do you need help?',cn:'请向 Mia 求助。',answers:['Can you help me?']},{ask:'What do you have?',cn:'告诉她，你有一个包。',answers:['I have a bag.']},{ask:'The park is near your house.',cn:'你想找到公园，请问路。',answers:['Where is the park?']}],
 15:[{ask:'What would you like?',cn:'请礼貌地要一些水。',answers:["I'd like some water."]},{ask:'Here is your bag.',cn:'请表达非常感谢。',answers:['Thank you very much.']},{ask:'What do you like doing?',cn:'告诉 Nora，你喜欢阅读。',answers:['I like reading.']}],
 20:[{ask:'What is your name?',cn:'请用角色名字 Alex 回答。',answers:["I'm Alex.",'My name is Alex.']},{ask:'Where are you from?',cn:'告诉大家，你来自中国。',answers:["I'm from China."]},{ask:'What do you like doing?',cn:'告诉大家，你喜欢阅读。',answers:['I like reading.']}]
};
const audioTexts=[...new Set(lessons.flatMap(l=>[l.en,l.word,l.line,l.transfer[1]]).concat(Object.values(checkpointDialogs).flatMap(ds=>ds.flatMap(d=>[d.ask,...d.answers])),['A little progress is still progress.']))];
