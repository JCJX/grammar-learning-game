import {expansionChapters} from './expansion.js';
// Original teaching examples; source ranges refer to printed pages of the user's book.
const pick=(sentence,zh,target,answer,options,why,icon='leaf')=>({type:'pick',sentence,zh,target,answer,options,why,icon});
const build=(words,zh,roles,why,pattern='')=>({type:'build',words,sentence:words.join(' ')+'.',zh,roles,why,pattern,icon:'house'});
const role=(sentence,zh,parts,answer,why,icon='train')=>({type:'role',sentence,zh,parts,answer,why,icon});
const POS=['名词 n.','动词 v.','形容词 adj.','副词 adv.'];
const PAT=['S + V','S + V + O','S + V + O + O','S + V + P','S + V + O + C'];
const TENSE=['每天的习惯','此刻正在发生','过去已经发生'];
export const chapters=[
{id:'c1',number:'01',title:'词语职业邮局',subtitle:'每个单词，都有自己的工作',mechanic:'看场景 · 投递词卡',theme:'mint',scene:'post',book:'第 1 章 · 书内 1–6 页',brief:'陪小狐狸阿栗分信件，认识名词、动词、形容词和副词。词性就像职业，同一个词在不同句子里也能换工作。',lessons:[
{title:'先看见，再说出来',body:'名词给人、事物和想法起名字；动词说动作或状态；形容词告诉我们“什么样”；副词可以告诉我们“怎样做”。先认识这四位伙伴，不用一次背完所有术语。',example:'The little fox runs quickly.',zh:'小狐狸跑得很快。',visual:'fox',tags:['fox：狐狸 · 名词','runs：跑 · 动词','little：小的 · 形容词','quickly：很快地 · 副词']},
{title:'词性是职业，词意是意思',body:'词典里的 n.、v.、adj.、adv. 是职业标签。看 play：孩子们“玩”时是动词，一场“戏剧”却是名词。一定把词放回句子里看。',example:'We play. / A play is a story on stage.',zh:'我们玩耍。／戏剧是在舞台上表演的故事。',visual:'post',tags:['什么是四大词性？','它们怎样使用？','哪些结构能做相似工作？']},
{title:'动作也有不同搭档',body:'Birds fly. 不需要宾语；Mia opens the box. 有打开的对象；Mia is happy. 则用 is 连接米娅和她的状态。动词的工作，要看这一次的用法。',example:'Birds fly. Mia opens the box. Mia is happy.',zh:'鸟儿飞翔。米娅打开盒子。米娅很开心。',visual:'bird',tags:['不及物：不带直接宾语','及物：带直接宾语','系动词：连接主体与描述']},
{title:'还有六位小帮手',body:'四大词性之外，先和这些伙伴打个招呼：a 是冠词；she 是代词；and 是连词；in 是介词；two 是数词；Oh! 是感叹词。它们各有工作，后面会逐渐认识。这是本书采用的入门分类，不同语法体系也可能采用不同名称。',example:'Oh! She has two books and a toy in the box.',zh:'哦！她在盒子里放着两本书和一个玩具。',visual:'book',tags:['a → art. 冠词','she → pron. 代词','and → conj. 连词','in → prep. 介词','two → num. 数词','Oh! → int. 感叹词']}
],missions:[
{id:'c1-m1',title:'给词语找职业',note:'点击词卡该去的信箱',pages:'1–6',items:[
pick('The fox sleeps.','狐狸睡着了。','fox',POS[0],POS,'fox 给一种动物起名字，在这里是名词。','fox'),
pick('Birds fly.','鸟儿飞翔。','fly',POS[1],POS,'fly 告诉我们鸟儿在做什么，是动词。','bird'),
pick('The red apple is here.','红苹果在这里。','red',POS[2],POS,'red 描述苹果是什么颜色，修饰名词 apple，是形容词。','apple'),
pick('The rabbit runs quickly.','兔子跑得很快。','quickly',POS[3],POS,'quickly 告诉我们“跑得怎样”，修饰 runs，是副词。','rabbit'),
pick('Hope is important.','希望很重要。','Hope',POS[0],POS,'希望虽然看不见，也可以有名字。hope 在这里是抽象名词。','star'),
pick('The fox is happy.','狐狸很开心。','is',POS[1],POS,'动词不只表示动作。is 是 be 动词，这里连接狐狸与开心的状态。','fox')
]},
{id:'c1-m2',title:'谁在给谁添信息？',note:'看高亮词在描述什么',pages:'5–6',items:[
pick('The small bird sings.','小鸟在唱歌。','small','bird',['bird','sings'],'small 说的是鸟的大小，形容词在这里修饰名词 bird。','bird'),
pick('The bird sings softly.','鸟儿轻轻地唱歌。','softly','sings',['bird','sings'],'softly 描述唱歌的方式，修饰动词 sings。','bird'),
pick('The soup is very hot.','汤很烫。','very','hot',['soup','hot'],'副词 very 也能修饰形容词，这里表示 hot 的程度。','bowl'),
pick('The turtle walks slowly.','乌龟走得慢。','slowly','walks',['turtle','walks'],'slowly 告诉我们走的速度，修饰 walks；不是说乌龟的颜色或大小。','turtle'),
pick('The bright moon shines.','明亮的月亮发着光。','bright','moon',['moon','shines'],'bright 描述月亮，修饰名词 moon，是形容词。','moon')
]},
{id:'c1-m3',title:'同一个词，也能换工作',note:'把词放回句子里看',pages:'1–5',items:[
pick('We play in the park.','我们在公园里玩。','play',POS[1],POS,'这里 play 表示“玩”这个动作，是动词。','ball'),
pick('The play is funny.','这部戏剧很有趣。','play',POS[0],POS,'这里 play 是“戏剧”的名字，是名词。同一个拼写可以做不同工作。','house'),
pick('I drink water.','我喝水。','water',POS[0],POS,'这里 water 是喝的东西“水”，是名词。','water'),
pick('I water the flowers.','我给花浇水。','water',POS[1],POS,'这里 water 表示“浇水”的动作，是动词。','flower'),
pick('I have a book.','我有一本书。','book','名词 n.',['名词 n.','代词 pron.','冠词 art.'],'book 给物品起名字。I 才是代词，a 是冠词；不必把所有词都塞进四大词性。','book'),
pick('We learn what words do.','我们学习词语的工作。','三个核心问题','认识词性、学习用法、认识有相似功能的结构',['认识词性、学习用法、认识有相似功能的结构','只记住每个词的中文意思'],'词意和词性一起学，再认识短语和从句如何做相似的工作。这就是贯穿全书的路线。','post')
]},
{id:'c1-m4',title:'动词搭档观察站',note:'观察动作有没有对象',pages:'4–5',items:[
pick('Birds fly.','鸟儿飞翔。','fly','这里不带直接宾语',['这里不带直接宾语','这里带直接宾语','这里连接主体与状态'],'本句 fly 是不及物用法。Birds 是主语；句子没有飞的直接对象。','bird'),
pick('Mia opens the box.','米娅打开盒子。','opens','这里带直接宾语',['这里不带直接宾语','这里带直接宾语','这里连接主体与状态'],'打开的对象是 the box。opens 在本句是及物用法。','box'),
pick('Mia feels happy.','米娅觉得开心。','feels','这里连接主体与状态',['这里不带直接宾语','这里带直接宾语','这里连接主体与状态'],'happy 描述 Mia 的状态。feels 在这里是系动词，不是说米娅触摸一个东西。','fox'),
pick('I smell the flower.','我闻这朵花。','smell','这里带直接宾语',['这里带直接宾语','这里连接主体与状态'],'这里是我主动闻花，the flower 是对象。下句 The flower smells nice. 才是在描述花闻起来怎么样。','flower'),
pick('The flower smells nice.','花闻起来很香。','smells','这里连接主体与状态',['这里带直接宾语','这里连接主体与状态'],'nice 描述花的气味。smells 在这里连接花和描述；要看本次用法。','flower')
]}
]},
{id:'c2',number:'02',title:'句子小火车',subtitle:'把词语放进合适的车厢',mechanic:'认角色 · 挂接句子车厢',theme:'peach',scene:'train',book:'第 2 章 · 书内 7–17 页',brief:'单词有职业，到了句子里还会扮演角色。让句子小火车带你认识主、谓、宾、定、状、补、表。',lessons:[
{title:'谁？做什么？对谁或什么？',body:'主语是这句话谈论的主体；谓语动词说明动作或状态；宾语是动词涉及的对象。先用简单主动句看清它们，不要把每个名词都叫作主语。',example:'Mia opens the box.',zh:'米娅打开盒子。',visual:'train',tags:['Mia → 主语 S','opens → 谓语动词 V','the box → 宾语 O']},
{title:'给车厢添一点细节',body:'定语描述名词：小小的鸟。状语补充动作等的时间、地点、方式：轻轻地唱歌。词性是“它是什么词”，句子成分是“它在这里做什么工作”，两者不同。',example:'The little bird sings softly.',zh:'小鸟轻轻地唱歌。',visual:'bird',tags:['little → 定语','softly → 状语','the little bird 整体是主语']},
{title:'两面描述小镜子',body:'表语说明主语是什么、怎么样：狐狸很开心。宾语补足语说明宾语是什么、怎么样或做什么：礼物让狐狸开心。找到“开心的到底是谁”，就有了重要线索。',example:'The fox is happy. The gift makes the fox happy.',zh:'狐狸很开心。礼物让狐狸开心。',visual:'mirror',tags:['表语 happy → 描述主语 the fox','宾补 happy → 描述宾语 the fox','本章“补语”特指宾语补足语']}
],missions:[
{id:'c2-m1',title:'主谓宾，准备发车',note:'点击承担指定角色的词块',pages:'7–8',items:[
role('Mia opens the box.','找到主语：这句话在说谁？',['Mia','opens','the box'],'Mia','Mia 是谈论的主体，整个名词短语 the box 是动作的对象。','fox'),
role('Mia opens the box.','找到谓语动词：发生什么？',['Mia','opens','the box'],'opens','opens 是“打开”，是本句谓语动词。','box'),
role('Mia opens the box.','找到宾语：打开什么？',['Mia','opens','the box'],'the box','打开的是盒子，所以 the box 是宾语；包括 the 在内一起看。','box'),
role('The little bird sings.','找到完整的主语词块。',['The little bird','sings'],'The little bird','谈论的是这只小鸟。主语可以是一组词，不只一个单词。','bird'),
role('I like apples.','找到宾语：喜欢什么？',['I','like','apples'],'apples','喜欢的对象是 apples。I 是代词，在本句作主语。','apple')
]},
{id:'c2-m2',title:'装上细节小挂件',note:'定语找名词，状语补充动作等',pages:'8–9',items:[
role('The little bird sings softly.','哪一个词作定语，描述鸟的大小？',['little','bird','sings','softly'],'little','little 是形容词，在本句作定语，描述 bird。','bird'),
role('The little bird sings softly.','哪一个词作状语，描述唱歌的方式？',['little','bird','sings','softly'],'softly','softly 是副词，在本句作状语，修饰 sings。','bird'),
role('Mia reads in the garden.','哪一组词作状语，说明阅读地点？',['Mia','reads','in the garden'],'in the garden','介词短语 in the garden 整体作地点状语。状语不一定只是一个副词。','flower'),
role('The fox in the hat smiles.','哪组词作定语，帮助认出是哪只狐狸？',['The fox','in the hat','smiles'],'in the hat','in the hat 修饰 fox，作后置定语。定语也不一定是形容词。','fox'),
pick('The rabbit runs quickly.','兔子跑得很快。','quickly','副词是词性，状语是这里的句子成分',['副词是词性，状语是这里的句子成分','副词和状语是完全相同的分类'],'“副词”说它属于哪种词；“状语”说它在句子中的功能。','rabbit')
]},
{id:'c2-m3',title:'表语镜子与宾补连线',note:'先问：这份描述在说谁？',pages:'9–16',items:[
pick('Mia is happy.','米娅很开心。','happy','表语：说明主语 Mia',['表语：说明主语 Mia','宾补：说明宾语'],'happy 接在系动词 is 后，说明主语 Mia 的状态，所以是表语。','mirror'),
pick('The story makes Mia happy.','这个故事让米娅开心。','happy','宾补：说明宾语 Mia',['表语：说明主语 The story','宾补：说明宾语 Mia'],'开心的是 Mia，故事使她开心。happy 说明宾语 Mia 的状态，是宾语补足语。','book'),
role('We call the cat Coco.','哪个词是宾语补足语，说明猫的名字？',['We','call','the cat','Coco'],'Coco','the cat 是宾语；Coco 说明我们怎样称呼这只猫。猫与 Coco 指同一对象。','cat'),
role('The soup tastes nice.','哪个词是表语，说明汤怎么样？',['The soup','tastes','nice'],'nice','tastes 是本句系动词；nice 说明主语 the soup 的味道。','bowl'),
role('I see the bird flying.','哪个词块作宾语补足语，说明鸟在做什么？',['I','see','the bird','flying'],'flying','flying 补充说明宾语 the bird 正在飞。补足语也可以是分词结构，后续章再深入。','bird')
]},
{id:'c2-m4',title:'七种角色会合',note:'回到句子关系，不只看位置',pages:'7–17',items:[
pick('The red fox runs slowly.','红狐狸慢慢地跑。','red','定语',['主语','定语','状语','表语'],'red 描述 fox，是定语；The red fox 整体才是主语。','fox'),
pick('The red fox runs slowly.','红狐狸慢慢地跑。','slowly','状语',['谓语动词','宾语','状语','宾补'],'slowly 补充跑的方式，是状语；runs 才是谓语动词。','fox'),
pick('Mia becomes a teacher.','米娅成为一名老师。','a teacher','表语',['宾语','表语','状语'],'a teacher 说明 Mia 的身份，becomes 是系动词。后面有名词不一定是宾语。','house'),
pick('Mia gives Coco a ball.','米娅给可可一个球。','a ball','直接宾语',['直接宾语','宾语补足语'],'球是给的东西，不是在描述 Coco 是一个球。它是直接宾语；Coco 是接收者。','ball'),
pick('We paint the door green.','我们把门漆成绿色。','green','宾语补足语',['直接宾语','宾语补足语'],'绿色描述门漆好后的状态。green 是宾补；门不是礼物的接收者。','door')
]}
]},
{id:'c3',number:'03',title:'句型建筑师',subtitle:'五种骨架，搭出你的第一座小镇',mechanic:'拼词搭建 · 比较五种句型',theme:'lavender',scene:'house',book:'第 3 章 · 书内 18–25 页',brief:'先搭稳句子的骨架，再加上漂亮细节。用五种入门句型造小屋、送礼物、建一座变色工坊。',lessons:[
{title:'先搭骨架，再加树叶',body:'我们先学五种常用基本句型。S 是主语，V 是谓语动词，O 是宾语，P 是表语，C 是宾语补足语。它们是入门地图，英语还会有更多结构。',example:'Birds sing. Mia likes apples. The fox is happy.',zh:'鸟儿唱歌。米娅喜欢苹果。狐狸很开心。',visual:'house',tags:['S + V','S + V + O','S + V + O + O','S + V + P','S + V + O + C']},
{title:'两个小包裹，还是一份描述？',body:'Mia gives Coco a ball. 是“给谁＋给什么”，两个宾语。We call the cat Coco. 是“猫被叫作可可”，后面在描述前面的对象，是宾补。',example:'Mia gives Coco a ball. We call the cat Coco.',zh:'米娅给可可一个球。我们叫这只猫可可。',visual:'gift',tags:['双宾语：接收者 + 东西','宾补：对象 + 对象的描述','看意义，不只数词块']},
{title:'句子长，不等于骨架变多',body:'The little bird sings softly. 先拿掉本句可选的细节 little 和 softly，就看见 The bird sings. 的 SV 骨架。不是所有句子都能随便删地点等信息，要看动词的需要。',example:'The little bird sings softly. → The bird sings.',zh:'小鸟轻轻地唱歌。→ 鸟儿唱歌。',visual:'tree',tags:['修饰语添细节','词组要整体看','Go! 是祈使句，通常省略主语 you']}
],missions:[
{id:'c3-m1',title:'搭好第一排小屋',note:'按顺序点词块，放进建筑槽；点槽中词块可撤回',pages:'18–21',items:[
build(['Birds','sing'],'鸟儿唱歌。',['主语 S','谓语 V'],'Birds 是主语，sing 是不及物用法，SV 骨架已经完整。','S + V'),
build(['Mia','likes','apples'],'米娅喜欢苹果。',['主语 S','谓语 V','宾语 O'],'likes 的对象是 apples：谁＋喜欢＋什么，SVO。','S + V + O'),
build(['The fox','is','happy'],'狐狸很开心。',['主语 S','系动词 V','表语 P'],'happy 说明狐狸的状态，is 把它们连接起来，是 SVP。','S + V + P'),
build(['Mia','gives','Coco','a ball'],'米娅给可可一个球。',['主语 S','谓语 V','间接宾语 O','直接宾语 O'],'给谁？Coco。给什么？a ball。两个宾语，是 SVOO。','S + V + O + O'),
build(['We','paint','the door','green'],'我们把门漆成绿色。',['主语 S','谓语 V','宾语 O','宾补 C'],'green 说明 the door 的结果状态，是宾补，SVOC。','S + V + O + C')
]},
{id:'c3-m2',title:'五种建筑的通行证',note:'根据意思，找到句子的骨架',pages:'19–22',items:[
pick('The baby sleeps.','宝宝睡着了。','整句','S + V',PAT,'The baby 是主语，sleeps 不带直接宾语：SV。','moon'),
pick('Coco likes milk.','可可喜欢牛奶。','整句','S + V + O',PAT,'Coco 喜欢的对象是 milk，是 SVO。','cat'),
pick('Grandma gives Mia a book.','奶奶给米娅一本书。','整句','S + V + O + O',PAT,'Mia 是接收者，a book 是所给的东西，两个宾语。','book'),
pick('The sky looks blue.','天空看起来是蓝色的。','整句','S + V + P',PAT,'blue 说明主语天空的样子，looks 是系动词，SVP。','sky'),
pick('The game makes us happy.','这个游戏让我们开心。','整句','S + V + O + C',PAT,'happy 说明宾语 us 的状态：游戏让我们开心，SVOC。','star')
]},
{id:'c3-m3',title:'相似句型照妖镜',note:'找出后面的词在描述谁',pages:'22–24',items:[
pick('Mia feels the soft toy.','米娅摸着柔软的玩具。','整句','S + V + O',['S + V + O','S + V + P'],'这里 feels 表示触摸，the soft toy 是摸的对象，所以是 SVO。','rabbit'),
pick('Mia feels sleepy.','米娅觉得困了。','整句','S + V + P',['S + V + O','S + V + P'],'这里 feels 连接米娅与她的状态 sleepy，是 SVP。同一个动词可以有不同用法。','moon'),
pick('Mum makes Mia a cake.','妈妈给米娅做一个蛋糕。','整句','S + V + O + O',['S + V + O + O','S + V + O + C'],'Mia 是接收者，a cake 是做出的东西。不是说米娅变成蛋糕。','cake'),
pick('Mum makes Mia happy.','妈妈让米娅开心。','整句','S + V + O + C',['S + V + O + O','S + V + O + C'],'happy 描述 Mia 的状态，并非给 Mia 的一个东西。','fox'),
pick('They call the puppy Max.','他们叫这只小狗马克斯。','整句','S + V + O + C',['S + V + O + O','S + V + O + C'],'Max 是小狗的名字，是对宾语的说明。名词也可以做宾补，不一定是第二个宾语。','dog')
]},
{id:'c3-m4',title:'让小镇长出细节',note:'区分主干、修饰语和省略',pages:'18–25',items:[
pick('The little bird sings softly.','小鸟轻轻地唱歌。','主干','The bird sings.',['The bird sings.','little softly.','The bird softly.'],'本句 little 是可选定语，softly 是可选状语。拿掉后保留主体和动作。','bird'),
pick('Mia reads a red book every day.','米娅每天读一本红色的书。','主干','Mia reads a book.',['Mia reads a book.','Mia red every day.','reads a red.'],'red 和 every day 是本句的可选细节，主干仍然是 SVO。','book'),
pick('The small fox is very happy.','小狐狸很开心。','基本句型','S + V + P',['S + V + P','S + V + O','S + V + O + O'],'small 描述狐狸，very 表程度；骨架 The fox is happy. 是 SVP。','fox'),
pick('Go!','走吧！','省略的主语','you',['you','a box','happy'],'祈使句通常省略主语 you，但不是没有谈论的对象。初学先认识这个特例。','train'),
build(['The little bird','sings','softly'],'小鸟轻轻地唱歌。',['主语词组','谓语动词','方式状语'],'加上细节后主干仍然是 SV。The little bird 整体作主语，softly 修饰 sings。','S + V')
]}
]},
{id:'t1',number:'07',title:'时间旅行照相馆',subtitle:'同一个故事，三个时间镜头',mechanic:'切换镜头 · 观察时间与动作',theme:'blue',scene:'clock',book:'第 7 章样板 · 对应书内 69–92 页的部分目标',brief:'这是时态样板，不是完整第 7 章。先认识每天做、现在正在做和过去做过；未来、完成等会在正式章节加入。',lessons:[
{title:'不是背时间词，是看发生了什么',body:'阿栗每天给花浇水：I water the flowers every day. 此刻正在浇：I am watering the flowers now. 昨天浇过：I watered the flowers yesterday. 动作没变，镜头改变了。',example:'I water. I am watering. I watered.',zh:'我浇水（习惯）。我正在浇水。我浇过水（过去）。',visual:'clock',tags:['每天反复 → 一般现在时','此刻进行 → 现在进行时','过去事件 → 一般过去时']},
{title:'给形式找一位搭档',body:'现在进行时要有 am/is/are + 动词-ing。一般现在时遇到 he/she/it 常要加 -s 或 -es。过去式有规则变化，也有 went 等不规则变化。样板先用明确的场景练习，不把这些当成全部用法。',example:'She waters. She is watering. She watered.',zh:'她（平常）浇水。她正在浇水。她（过去）浇过水。',visual:'flower',tags:['I am / she is / they are','she waters，I water','water → watered']}
],missions:[
{id:'t1-m1',title:'三个镜头，三张照片',note:'点击镜头，看动作轨迹如何变化',pages:'69–92（选取入门目标）',items:[
{...pick('I water the flowers every day.','阿栗每天给花浇水。这是一个习惯。','water','每天的习惯',TENSE,'这里讲反复的习惯，用一般现在时 water。不是说此刻一定正在浇水。','flower'),type:'time',time:'habit'},
{...pick('I am watering the flowers now.','看，阿栗此刻正在给花浇水。','am watering','此刻正在发生',TENSE,'画面正在进行，用 am + watering。I 后面用 am。','flower'),type:'time',time:'now'},
{...pick('I watered the flowers yesterday.','相册里是昨天给花浇水的照片。','watered','过去已经发生',TENSE,'明确讲昨天的事件，用一般过去时 watered。','flower'),type:'time',time:'past'},
{...pick('She reads every evening.','她每天晚上都会读书。','reads','每天的习惯',TENSE,'反复的阅读习惯用一般现在时；she 后的 read 加 -s。','book'),type:'time',time:'habit'},
{...pick('She is reading now.','她此刻正在看这本书。','is reading','此刻正在发生',TENSE,'此刻进行：she + is + reading。不是单独加一个 -ing 就完整了。','book'),type:'time',time:'now'}
]},
{id:'t1-m2',title:'修好时间相机',note:'根据语境选择合适的动词形式',pages:'69–92（选取入门目标）',items:[
pick('Every day, she ___ the flowers.','说的是她每天的习惯。','___','waters',['waters','is watering','watered'],'习惯用一般现在时。主语 she，对应 waters。','flower'),
pick('Look! She ___ the flowers.','请描述眼前正在发生的动作。','___','is watering',['waters','is watering','watered'],'这里明确描述眼前进行的动作，用 is watering。','flower'),
pick('Yesterday, she ___ the flowers.','昨天，她给花浇了水。','___','watered',['waters','is watering','watered'],'这里讲昨天的过去事件，用 watered。','flower'),
build(['I','am','reading','now'],'我此刻正在读书。',['主语','be 动词','动词-ing','时间'],'I 后面用 am；现在进行时是 am reading，不能漏掉 am。','现在进行时'),
pick('I went to the park yesterday.','我昨天去了公园。','went','go 的过去式',['go 的过去式','go 的现在进行式','go 的第三人称单数式'],'went 是 go 的不规则过去式。并非所有动词的过去式都加 -ed。','tree')
]}
]}
];
chapters.splice(3,0,...expansionChapters);
export const roadmap=[
['1','词语职业邮局','三个核心问题与四大词性','post','认识词语的职业，按语境投递词卡。','c1'],
['2','句子小火车','主谓宾定状补表','train','挂接不同角色，观察主语、宾语与描述的关系。','c2'],
['3','句型建筑师','简单句的五种句型','house','搭建句子骨架，辨别双宾语与宾补。','c3'],
['4','名词背包营地','名词和名词性结构','bag','容量与变身台：数、代词与名词性结构。','c4'],
['5','画像工作室','形容词和定语','paint','逐层加线索，从人群中找到被描述的角色。','c5'],
['拓展 1','身份镜屋','be 动词','mirror','人称和数量改变镜面，区分系动词与助动词。','be1'],
['6','动作导演台','副词和状语','bird','用速度、频率、地点控制故事动画。','c6'],
['7','时间旅行照相馆','动词时态','clock','过去相册、进行光圈与反复轨迹；目前仅开放入门样板。','t1'],
['8','平行世界剧院','动词语气','moon','事实、指令、愿望与反事实分屏。'],
['9','主语指挥乐队','主谓一致','music','找到真正指挥，主语核心控制动词节拍。'],
['10','电影换机位','被动语态','camera','换焦点、不换事件，观察施事与受事。'],
['11','空间寻宝地图','介词短语','map','用位置与路径寻找宝藏，再把短语接回句子。'],
['拓展 2','旧日相册与习惯营','used 的用法','book','过去习惯与逐渐适应，用不同轨迹区分。'],
['12','句子胶囊港','名词性从句','box','将整句封装成胶囊，送入主语或宾语位置。'],
['拓展 3','替身舞台','it 的用法','star','长结构移至后台，it 占位；聚光灯展示强调。'],
['13','线索侦探馆','定语从句','search','用线索认出对象；逗号与关系词影响连接。'],
['14','故事机关链','状语从句','link','因果、条件、时间、让步让故事分岔。'],
['15','桥梁与天平','并列句与比较句','bridge','平行搭桥，同类比较让天平保持一致。'],
['16','动作收藏馆','动名词','ball','把活动装进展品，放入名词位置。'],
['17','任务发射站','动词不定式','rocket','目标路径与逻辑主语决定任务怎样出发。'],
['18','动作定格动画厂','分词','film','切换动作与结果、主动与被动，找到描述对象。'],
['19','句子压缩实验室','复杂句省略','leaf','淡出可恢复部分，再还原验证原来的意思。']
];
for(const chapter of chapters) for(const mission of chapter.missions) mission.items.forEach((q,i)=>{q.id=mission.id+'-q'+(i+1);q.chapter=chapter.id;q.mission=mission.id;q.pages=mission.pages;});
export const allQuestions=chapters.flatMap(c=>c.missions.flatMap(m=>m.items));
