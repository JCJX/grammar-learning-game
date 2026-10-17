// Second expedition: original examples aligned to printed pages 26–68.
const xPick=(sentence,zh,target,answer,options,why,icon='bag')=>({type:'pick',sentence,zh,target,answer,options,why,icon});
const xBuild=(words,zh,roles,why,pattern='')=>({type:'build',words,sentence:words.join(' ')+'.',zh,roles,why,pattern,icon:'house'});
const xRole=(sentence,zh,parts,answer,why,icon='bag')=>({type:'role',sentence,zh,parts,answer,why,icon});
const xPack=(noun,plural,unit,count,mode,zh,why,icon)=>({type:'pack',noun,plural,unit,count,answer:mode+'|'+count,mode,sentence:`I packed ${['','one','two','three','four','five'][count]} ${mode==='direct'?(count===1?noun:plural):(count===1?unit:unit+'s')+' of '+noun}.`,zh,why,icon});
const xPeople=[{id:'A',size:'big',color:'red',prop:'hat'},{id:'B',size:'small',color:'red',prop:'book'},{id:'C',size:'big',color:'blue',prop:'book'},{id:'D',size:'small',color:'blue',prop:'hat'}];
const xPortrait=(sentence,zh,clues,answer,why)=>({type:'portrait',sentence,zh,clues,answer,characters:xPeople,why,icon:'portrait'});
const xMirror=(subject,time,be,tail,zh,why)=>({type:'mirror',subject,time,be,tail,answer:[subject,time,be].join('|'),sentence:subject+' '+be+' '+tail+'.',zh,why,icon:'mirror'});
const xDirector=(frame,zh,axes,expected,why)=>({type:'director',frame,axes,expected,answer:JSON.stringify(expected),sentence:frame.replace(/\{(\w+)\}/g,(_,k)=>expected[k]),zh,why,icon:'director'});
const xSpeed=[['slowly','慢慢地'],['quickly','快速地']];
const xPlace=[['in the garden','在花园里'],['at home','在家里']];
const xFrequency=[['always','每次都'],['sometimes','有时'],['never','从不']];
export const expansionChapters=[
{id:'c4',number:'04',title:'名词背包营地',subtitle:'装进一个词，也装进一整个想法',mechanic:'分类装包 · 代词换装 · 结构搬运',theme:'mint',scene:'bag',book:'第 4 章 · 书内 26–40 页',brief:'为野餐装背包：苹果能一个个数，水要借助杯子。再给词语换上代词，把一整组词当作一个想法送进句子。',lessons:[
{title:'有名字的，不一定摸得到',body:'apple 是苹果，water 是水，idea 是想法，kindness 是善意。实物和抽象概念都能有名词。可数性则看英语里这个词在这里怎样使用，不能只凭“看不看得见”判断。',example:'I have an apple and an idea.',zh:'我有一个苹果，也有一个想法。',visual:'bag',tags:['实物：apple','抽象概念：idea','可数性看词义与用法']},
{title:'一只背包，两种装法',body:'苹果可以说 one apple、two apples；本关把 water 当作水这种物质，说 two cups of water。数的是杯，不是给 water 加 s。常见复数加 -s 或 -es，也有 child → children 这样的变化。点背包和数量按钮，看英文怎样改变。',example:'Two apples. Two cups of water.',zh:'两个苹果。两杯水。',visual:'bag',tags:['many / a few + 可数复数','much / a little + 不可数','some 两种都可用','a coffee 可指一杯咖啡：语境会改变用法']},
{title:'代词小衣柜',body:'Mia 作主语可以换成 she；动作涉及她，用 her。my book 后面有名词，mine 可以单独表示“我的那本”。Mia 在镜中看自己时用 herself；不表示同一对象时不能机械换成反身代词。something、everyone 等则用来泛指。',example:'She sees herself. This book is mine.',zh:'她看见自己。这本书是我的。',visual:'mirror',tags:['主语 she → 宾语 her','my book → mine','自己：herself','everyone 语法上按单数配动词']},
{title:'整个小包，一起搬',body:'一组词也能做名词式的工作：Reading books 是“读书这项活动”；what Mia wants 是“米娅想要的东西”。把它们整体放进主语、宾语等位置。具体搭配仍有要求：enjoy reading，want to read，介词 after 后可用 reading，不直接用 to read。',example:'Reading books is fun. I know what Mia wants.',zh:'读书很有趣。我知道米娅想要什么。',visual:'capsule',tags:['主语 / 宾语 / 表语 / 宾补 / 介词宾语','动名词 reading','不定式 to read','名词性从句 what Mia wants','认识整体功能；后续章节再深入']}
],missions:[
{id:'c4-m1',title:'野餐背包装起来',note:'选装包方式，再调到任务所需数量',pages:'26–28',items:[
xPack('apple','apples','basket',3,'direct','装进 3 个苹果。先选直接数物品，再调整数量。','apple 在这里是可数名词。三个苹果说 three apples；数量为三时用复数。','apple'),
xPack('water','water','cup',2,'unit','装进 2 杯水。这里 water 指水这种物质。','这里 water 是不可数用法。用 cup 作计量单位；two cups of water 中 cups 加 s，water 不加。','water'),
xPack('box','boxes','bag',2,'direct','装进 2 个盒子。','box 的复数是 boxes。不是 boxs。可数物品直接和数量搭配。','box'),
xPack('rice','rice','bowl',3,'unit','准备 3 碗米饭。rice 在这里指食物。','说 three bowls of rice，数的是碗 bowls。这里不说 three rices。','bowl'),
xPack('bread','bread','slice',2,'unit','带上 2 片面包。bread 在这里指面包这种食物。','一般说 two slices of bread。slice 是一片，可以计数；这里 bread 不加 s。','bread')
]},
{id:'c4-m2',title:'数量与词义观察站',note:'不只凭中文猜可数性',pages:'26–28',items:[
xPick('Two ___ are playing.','两个孩子在玩耍。','___','children',['children','childs','child'],'child 的复数是 children，是需要认识的不规则变化。','rabbit'),
xPick('I have a few ___.','我有几本书。','___','books',['books','water','rice'],'a few 后面接可数名词复数；这里是 books。水和米饭常用 a little 表示少量。','book'),
xPick('There is a little ___.','这里有少量牛奶。','___','milk',['milk','apples','boxes'],'a little 用于这里不可数的 milk；可数复数通常用 a few。','bowl'),
xPick('How ___ water do we need?','我们需要多少水？','___','much',['much','many'],'water 在这里是不可数物质，用 how much；how many 后接可数复数。','water'),
xPick('I have an idea.','我有一个想法。','idea','抽象名词，也可计数',['抽象名词，也可计数','抽象名词，所以一定不可数'],'idea 是抽象概念，但可以说 an idea、two ideas。抽象不等于不可数。','star')
]},
{id:'c4-m3',title:'给代词换衣服',note:'看它在句中做什么工作',pages:'29–33',items:[
xPick('Mia is here. ___ has a book.','米娅在这里。她有一本书。','___','She',['She','Her','Hers'],'这里需要主语形式 She 来代替 Mia。Her 不能在这句单独作主语。','portrait'),
xPick('Coco plays with ___.','可可和她一起玩。这里“她”指米娅。','___','her',['she','her','hers'],'介词 with 后用宾格 her。这不是说可可和自己玩。','cat'),
xPick('This is ___ book.','这是我的书。','___','my',['my','mine','me'],'后面还跟着名词 book，使用 my。mine 可以单独表示“我的那本”。','book'),
xPick('This book is ___.','这本书是我的。','___','mine',['my','mine','I'],'这里没有在空格后重复 book，用 mine。它在句中作表语。','book'),
xPick('Mia sees ___ in the mirror.','米娅在镜子里看见的是她自己。','___','herself',['herself','myself','himself'],'主语 Mia 与看到的对象是同一个人，用 herself；不是仅因名字重复就使用反身代词。','mirror'),
xPick('Everyone ___ ready.','每个人都准备好了。','___','is',['is','are'],'everyone 意思涉及所有人，但在标准英语中语法上按单数配动词，所以用 is。','star')
]},
{id:'c4-m4',title:'名词的五个营位',note:'整组词搬到对应句子位置',pages:'28–34',items:[
xRole('The small rabbit sleeps.','找到完整的主语词组。',['The small rabbit','sleeps'],'The small rabbit','The small rabbit 整体作主语；small 只是其中的定语。','rabbit'),
xRole('Mia likes the blue bag.','找到动词 likes 的宾语。',['Mia','likes','the blue bag'],'the blue bag','喜欢的是整只蓝色背包。the blue bag 整体作宾语。','bag'),
xRole('Coco is our friend.','找到说明 Coco 身份的表语。',['Coco','is','our friend'],'our friend','our friend 说明主语 Coco 是谁，作表语，而不是宾语。','cat'),
xRole('We call the rabbit Snow.','找到表示兔子名字的宾语补足语。',['We','call','the rabbit','Snow'],'Snow','Snow 是我们给兔子的名字，说明宾语 the rabbit，作宾补。','rabbit'),
xRole('Mia sits with her friends.','找到介词 with 的宾语。',['Mia','sits','with','her friends'],'her friends','with 后面的 her friends 是介词宾语，with her friends 整体是介词短语。','portrait')
]},
{id:'c4-m5',title:'把一个想法装进小包',note:'先认识整体功能，不急着背复杂术语',pages:'34–40',items:[
xRole('Reading books is fun.','找出整体作主语的活动。',['Reading books','is','fun'],'Reading books','Reading books 表示“读书这项活动”，整体作主语。','capsule'),
xRole('I know what Mia wants.','找出整体作宾语的从句。',['I','know','what Mia wants'],'what Mia wants','what Mia wants 表示米娅想要的东西，整体作 know 的宾语。这里不是问句语序。','capsule'),
xPick('I enjoy ___ stories.','我喜欢读故事。','___','reading',['reading','to read'],'enjoy 通常接动名词形式 reading。功能相近不表示所有结构都能自由互换。','book'),
xPick('I want ___ a story.','我想读一个故事。','___','to read',['reading','to read'],'want 在这里接 to read。不定式的具体搭配会在第 17 章进一步学习。','book'),
xPick('After ___, Mia rests.','读完书以后，米娅休息。','___','reading',['reading','to read'],'介词 after 后可接 reading。不直接把 to read 放在这里。不是“有名词功能就任何位置都能放”。','capsule')
]}
]},
{id:'c5',number:'05',title:'画像工作室',subtitle:'多一条线索，就更接近那位朋友',mechanic:'逐层筛选 · 画像寻人 · 定语挂接',theme:'peach',scene:'portrait',book:'第 5 章 · 书内 41–48 页',brief:'谁是穿蓝衣服的小个子朋友？把修饰语当作画像线索，亲眼看见候选人变少，再学习短语怎样接在名词后面。',lessons:[
{title:'先问：你说的是哪一个？',body:'bird 只说“鸟”；a small bird 加上大小；the bird in the tree 再说明在哪里。形容词和其他定语都能添加信息，有些用于认出对象，有些只是补充描述。画像游戏先练习认出对象。',example:'The small fox in a blue hat is here.',zh:'戴蓝帽子的小狐狸在这里。',visual:'portrait',tags:['small → 大小线索','in a blue hat → 帽子线索','线索一起看，才找得准']},
{title:'短形容词常在前，长线索常在后',body:'a red bag 的 red 在名词前；the fox with a book 的 with a book 在名词后。something new 里的 new 也在后。分词可以单独放前面，如 a sleeping cat；较长的分词短语常放后面。不要背成“分词永远后置”。',example:'A red bag. Something new. A sleeping cat.',zh:'一个红色背包。新的东西。一只睡着的猫。',visual:'paint',tags:['red bag','something new','the fox with a book','the cat sleeping under the tree']},
{title:'多种形状，都能给名词添信息',body:'the bird in the tree 用介词短语；the bird that sings 用定语从句；a book to read 用不定式；the bird singing outside 用分词短语。先找到它们描述的名词，再认识结构名称。具体用法会在后续各章展开。',example:'The bird that sings is small.',zh:'那只唱歌的鸟很小。',visual:'bird',tags:['介词短语','定语从句','不定式','分词短语']},
{title:'形容词，也会换句中角色',body:'a happy fox 中 happy 作定语；The fox is happy. 中 happy 作表语。多个形容词放在名词前常有自然顺序，先练“看法 → 大小 → 颜色”，如 a lovely small red bag。这是常见次序，不是所有表达都必须套同一条口诀。',example:'A lovely small red bag. The fox is happy.',zh:'一个可爱的小红背包。狐狸很开心。',visual:'mirror',tags:['词性不变，句中功能可以变','限定词 a / the / my 与形容词有区别','先练清楚、自然的短语']}
],missions:[
{id:'c5-m1',title:'循着线索找到朋友',note:'点亮线索，观察候选人缩小，再选朋友',pages:'41–45',items:[
xPortrait('Find the small fox with a book.','找到拿着书的小个子狐狸。',[['size','small','small · 小个子'],['prop','book','with a book · 拿着书']],'B','小个子先留下 B、D；拿着书再留下 B。两条定语一起确定对象。'),
xPortrait('Find the big fox in blue.','找到穿蓝衣服的大个子狐狸。',[['size','big','big · 大个子'],['color','blue','in blue · 穿蓝衣服']],'C','大个子是 A、C；穿蓝衣服的是 C、D。共同符合的是 C。'),
xPortrait('Find the fox in red with a hat.','找到穿红衣服、戴帽子的狐狸。',[['color','red','in red · 穿红衣服'],['prop','hat','with a hat · 戴帽子']],'A','红衣服留下 A、B；戴帽子再确定 A。线索修饰的是 fox。'),
xPortrait('Find the small fox with a hat.','找到戴帽子的小个子狐狸。',[['size','small','small · 小个子'],['prop','hat','with a hat · 戴帽子']],'D','小个子是 B、D；戴帽子的是 A、D，所以选 D。'),
xPortrait('Find the fox in blue with a book.','找到穿蓝衣服、拿着书的狐狸。',[['color','blue','in blue · 穿蓝衣服'],['prop','book','with a book · 拿着书']],'C','in blue 和 with a book 都接在 fox 后面添加线索。共同符合的是 C。')
]},
{id:'c5-m2',title:'把线索放在合适的位置',note:'在给定词块内拼短语或句子',pages:'42–48',items:[
xBuild(['a','red','bag'],'拼出“一个红色背包”。',['冠词','形容词','名词'],'普通形容词 red 在这里放在名词 bag 之前。','前置形容词'),
xBuild(['something','new'],'拼出“新的东西”。',['不定代词','形容词'],'something 等复合不定代词后面放形容词：something new。','不定代词 + 形容词'),
xBuild(['the fox','with a book'],'拼出“拿着书的那只狐狸”。',['名词词组','后置线索'],'with a book 是介词短语，接在 fox 后面修饰它。','名词 + 后置定语'),
xBuild(['a lovely','small','red','bag'],'用给定词块拼出“一个可爱的小红背包”。',['看法','大小','颜色','名词'],'这几个形容词的常见自然顺序是看法 lovely、大小 small、颜色 red，然后是 bag。','看法 → 大小 → 颜色'),
xBuild(['a','sleeping','cat'],'拼出“一只睡着的猫”。',['冠词','分词作修饰语','名词'],'单个分词 sleeping 可以放在名词前。较长的 sleeping under the tree 则常接在名词后。','单个分词可以前置')
]},
{id:'c5-m3',title:'给名词接上不同线索',note:'选择完整的修饰语词块',pages:'44–48',items:[
xRole('The bird in the tree sings.','哪一组词修饰 bird，说明是哪只鸟？',['The bird','in the tree','sings'],'in the tree','介词短语 in the tree 修饰 bird，作后置定语。','bird'),
xRole('The fox that has a book is Mia.','哪一组词给 fox 添加“拿着书”的线索？',['The fox','that has a book','is Mia'],'that has a book','that has a book 是定语从句，在 fox 后面描述它。','portrait'),
xRole('I need a book to read.','哪一组词修饰 book，说明是用来读的书？',['I','need','a book','to read'],'to read','to read 是不定式结构，放在 book 后作定语。','book'),
xRole('The rabbit sitting under the tree is white.','哪一整组词修饰 rabbit？',['The rabbit','sitting under the tree','is white'],'sitting under the tree','sitting under the tree 是较长的分词短语，整体跟在 rabbit 后面。','rabbit'),
xRole('The toy made by Mia is blue.','哪一组词说明 toy 是米娅做的？',['The toy','made by Mia','is blue'],'made by Mia','made by Mia 是过去分词短语，修饰 toy，表达“由米娅制作的”。','box')
]},
{id:'c5-m4',title:'定语还是表语？',note:'看形容词正在做哪份工作',pages:'41–48',items:[
xPick('The happy fox smiles.','开心的狐狸笑了。','happy','定语：描述名词 fox',['定语：描述名词 fox','表语：接在系动词后'],'happy 在名词 fox 前作定语；本句谓语是 smiles。','fox'),
xPick('The fox is happy.','狐狸很开心。','happy','表语：说明主语状态',['定语：接在 fox 前','表语：说明主语状态'],'happy 通过 is 说明主语 the fox 的状态，是表语。','mirror'),
xPick('I want something warm.','我想要暖和的东西。','warm','放在 something 后面',['放在 something 前面','放在 something 后面'],'warm 修饰复合不定代词 something，通常放在它后面。','bag'),
xPick('The cat sleeping on the chair is white.','在椅子上睡觉的猫是白色的。','sleeping on the chair','描述 cat 的后置定语',['描述 cat 的后置定语','整句的谓语动词'],'sleeping on the chair 整体修饰 cat；is 才是本句的限定谓语动词。','cat'),
xPick('Mia has a small red bag.','米娅有一个小红背包。','red','与 small 一起描述 bag',['与 small 一起描述 bag','描述 small 有多小'],'small 和 red 都给 bag 添加不同特征。要表达“非常小”，可用副词 very 修饰 small。','bag')
]}
]},
{id:'be1',number:'BE',kind:'extension',title:'身份镜屋',subtitle:'换一个人物，让 be 找到新搭档',mechanic:'人物切换 · 时间镜面 · be 连接',theme:'lavender',scene:'mirror',book:'拓展 1 · 书内 49–52 页',brief:'I am、she is、they are：人物走到镜子前，连接词也跟着变。再试昨天、否定句和问句，分清 be 的两份工作。',lessons:[
{title:'现在，谁站在镜子前？',body:'I 配 am；he/she/it 和单个名字配 is；you/we/they 配 are。you 指一个人或多个人时都配 are。be 后面可以说身份、状态或位置，不必每次都硬译成“是”。',example:'I am happy. She is a painter. They are here.',zh:'我很开心。她是一位画家。他们在这里。',visual:'mirror',tags:['I am','she / he / it is','you / we / they are','单数名字 Mia is']},
{title:'昨天的镜子',body:'说过去的状态，I/he/she/it 常配 was，you/we/they 常配 were。这里只练普通陈述句；虚拟结构等特殊情形以后再学。be 的家族还包括原形 be、过去分词 been、-ing 形式 being，要按结构选择。',example:'I was tired yesterday. They were happy.',zh:'我昨天很累。他们（那时）很开心。',visual:'clock',tags:['现在 am / is → 过去 was','现在 are → 过去 were','will / can 后用 be','have / has 后可用 been']},
{title:'镜子与动作助手，是两份工作',body:'Mia is happy. 里的 is 连接米娅和状态，是系动词。Mia is reading. 里的 is 与 reading 合作构成进行时，是助动词。被动结构也会用到 be。不能看到 be 后有词，就把后面统统叫作表语。',example:'Mia is happy. Mia is reading.',zh:'米娅很开心。米娅正在读书。',visual:'mirror',tags:['连接身份 / 状态 / 位置','be + 动词-ing → 进行结构','be + 过去分词 → 可构成被动','不能随意删掉 be']},
{title:'加 not，或者换个站位',body:'否定句把 not 放在 be 后：She is not tired. 问句把 be 提到主语前：Is she tired? 简短回答可以说 Yes, she is. 不必加 do。短语 the book on the shelf 可以描述书，但它本身还不是普通的完整陈述句。',example:'Is she tired? No, she is not.',zh:'她累吗？不，她不累。',visual:'book',tags:['she is → she is not','she is → is she?','不能说 she happy 来代替普通陈述句','短语与完整句子分开认识']}
],missions:[
{id:'be1-m1',title:'现在的身份镜',note:'找到任务人物和时间，再连接合适的 be',pages:'49–50',items:[
xMirror('I','now','am','happy','描述现在的“我很开心”。','I 在一般现在时里配 am：I am happy。'),
xMirror('She','now','is','a painter','描述现在的“她是一位画家”。','She 是第三人称单数，配 is。a painter 是身份表语。'),
xMirror('They','now','are','ready','描述现在的“他们准备好了”。','They 表复数，配 are。ready 描述他们的状态。'),
xMirror('You','now','are','kind','描述现在的“你很友善”。you 在这里指一个人。','you 无论指一人还是多人，一般现在时都配 are，不配 is。'),
xMirror('Mia','now','is','here','描述现在的“米娅在这里”。','单个名字 Mia 配 is；here 表示位置。be 不一定翻译成“是”。')
]},
{id:'be1-m2',title:'昨天的回忆镜',note:'普通过去陈述句里，选 was 或 were',pages:'49–50',items:[
xMirror('I','past','was','tired','描述昨天的“我很累”。','普通过去陈述句中，I 配 was。本题不涉及虚拟语气。'),
xMirror('She','past','was','happy','描述昨天的“她很开心”。','She 在普通过去陈述句里配 was。'),
xMirror('They','past','were','here','描述昨天的“他们在这里”。','They 在过去时里配 were。'),
xMirror('You','past','were','ready','描述昨天的“你准备好了”。you 指一个人。','you 即使指一个人，过去时也配 were。'),
xMirror('We','past','were','tired','描述昨天的“我们很累”。','We 配 were；时间换到过去，不能仍用 are。')
]},
{id:'be1-m3',title:'be 的两份工作',note:'看它是在连接描述，还是帮助另一个动词',pages:'49–52',items:[
xPick('Mia is happy.','米娅很开心。','is','系动词，连接主体与描述',['系动词，连接主体与描述','助动词，与 reading 构成进行时'],'这里 happy 是形容词表语，is 连接主体 Mia 与她的状态。','mirror'),
xPick('Mia is reading.','米娅正在读书。','is','助动词，与 reading 构成进行时',['系动词，后面都是表语','助动词，与 reading 构成进行时'],'这里 is reading 是进行结构。reading 不是本句的身份或状态表语。','book'),
xPick('They have been here before.','他们以前来过这里。','been','be 的过去分词',['be 的过去分词','be 的一般过去时形式'],'完成结构中 have 后用 been，不用 was。现在只认识形式，完整用法在时态章学习。','clock'),
xPick('Please be kind.','请友善一点。','be','be 的原形',['be 的原形','be 的过去分词'],'祈使句这里使用原形 be。不是 Please is kind。','fox'),
xPick('Mia is being very patient today.','米娅今天表现得很有耐心。','being','be 的 -ing 形式',['be 的 -ing 形式','be 的一般过去时形式'],'being 是 be 的 -ing 形式。is being 在这里强调当前表现；不能把 being 当成普通过去式。','mirror')
]},
{id:'be1-m4',title:'让镜子学会说不和提问',note:'按给定词块搭句，观察 be 的位置',pages:'49–52（补充入门练习）',items:[
xBuild(['She','is','not','tired'],'拼出“她不累”。',['主语','be','否定词','表语'],'not 接在 is 后；这里不需要 does。','be 后加 not'),
xBuild(['They','are','not','here'],'拼出“他们不在这里”。',['主语','be','否定词','位置'],'They 配 are，not 接在 are 后面。','be 后加 not'),
{...xBuild(['Is','she','ready'],'拼出问句“她准备好了吗？”',['be 提前','主语','表语'],'一般疑问句把 is 放在主语 she 前：Is she ready?','be 提到主语前'),sentence:'Is she ready?',punctuation:'?'},
{...xBuild(['Were','they','happy'],'拼出问句“他们那时开心吗？”',['过去 be 提前','主语','表语'],'过去问句 They were happy. 变成 Were they happy?','过去的 be 问句'),sentence:'Were they happy?',punctuation:'?'},
xBuild(['Mia','can','be','a painter'],'拼出“米娅可以成为一位画家”。',['主语','情态动词','be 原形','身份'],'can 后用动词原形 be，不用 is。','can + be')
]}
]},
{id:'c6',number:'06',title:'动作导演台',subtitle:'一句话，可以拍出不同的故事',mechanic:'调节场景 · 动作播放 · 状语导演',theme:'blue',scene:'director',book:'第 6 章 · 书内 53–68 页',brief:'让阿栗慢慢走、快速走，在花园里走，或者有时才走。用控制台看见副词与状语怎样改变一段故事。',lessons:[
{title:'给动作调一调',body:'quickly 和 slowly 说怎样做；always、sometimes、never 说多常做；today 说什么时候；here 说在哪里；very 可以加强形容词；luckily 可以表达说话者对整件事的看法。副词不只是以 -ly 结尾的词。',example:'The fox walks slowly. The fox walks quickly.',zh:'狐狸慢慢走。狐狸快速走。',visual:'director',tags:['方式 how','频率 how often','时间 when','地点 where','程度 how much','评论整件事']},
{title:'位置灵活，但有自然习惯',body:'频率副词常在普通实义动词前：Mia often reads. 在 be 作主要动词时常放后面：Mia is often happy. 方式副词可在句末；有宾语时不要机械插到动词和宾语之间。并不是所有副词只有一个合法位置。',example:'Mia often reads. Mia is often happy.',zh:'米娅经常读书。米娅经常很开心。',visual:'train',tags:['often reads','is often happy','reads the book carefully','Carefully, ... 等位置也可能成立']},
{title:'一整组词，也能当导演',body:'in the garden 说地点；after lunch 说时间；because it rains 说原因；to help Mia 说目的；smiling 也能说明伴随状态。它们不是同一种词，却都能给句子添信息。分词状语要留心逻辑主语。',example:'In the garden, Mia reads to learn.',zh:'在花园里，米娅读书来学习。',visual:'capsule',tags:['介词短语','状语从句','不定式表目的','分词表伴随等','同一短语在不同句子里功能会变']},
{title:'已经、仍然、还没',body:'already 表示到参照时间前已经发生；still 说状态仍在持续；not ... yet 说到参照时间还没发生，常有期待。它们不是过去、现在、将来的替身。先用现在的生活场景练习，更复杂用法以后展开。',example:'I am still reading. I have not finished yet.',zh:'我仍在读。我还没有读完。',visual:'clock',tags:['already：已经','still：仍然','not ... yet：还没有','yet 常见于否定和问句，但并非永不能用于肯定句']}
],missions:[
{id:'c6-m1',title:'开拍！你来当导演',note:'调好控制台，播放你要表达的故事',pages:'53–58',items:[
xDirector('The fox walks {manner}.','让狐狸慢慢地走。观察速度，再确认这句故事。',{manner:xSpeed},{manner:'slowly'},'slowly 表示走的方式：慢慢地。换成 quickly 时速度会加快，意思也不同。'),
xDirector('The fox walks {manner} {place}.','让狐狸在花园里快速地走。需要同时调节速度和地点。',{manner:xSpeed,place:xPlace},{manner:'quickly',place:'in the garden'},'quickly 给动作添加方式；in the garden 给动作添加地点。两组状语各司其职。'),
xDirector('The fox {frequency} walks in the garden.','狐狸有时去花园散步。把频率调成“有时”，而不是每次或从不。',{frequency:xFrequency},{frequency:'sometimes'},'sometimes 表示有时。示意轨迹不是固定百分比；它只帮助对比频率意义。'),
xDirector('The fox will walk {time}.','让这个散步故事发生在今天。',{time:[['today','今天'],['tomorrow','明天']]},{time:'today'},'today 是时间副词，为将要散步这件事提供时间信息。今天也可以谈论稍后将做的事，不能见到 today 就机械选一种时态。'),
xDirector('The fox is {degree} tired.','狐狸非常累。把程度调高，看看疲倦刻度变化。',{degree:[['slightly','有一点'],['very','非常']]},{degree:'very'},'very 修饰形容词 tired，表示很累；副词也能修饰形容词，而不只修饰动作。')
]},
{id:'c6-m2',title:'给副词找自然站位',note:'在给定词块内拼出常见语序',pages:'59–62',items:[
xBuild(['Mia','often','reads'],'拼出“米娅经常读书”。',['主语','频率副词','实义动词'],'often 在这个常见语序中放在 reads 前；也存在其他强调位置，不把本题当作所有语序的穷尽。','实义动词前'),
xBuild(['Mia','is','often','happy'],'拼出“米娅经常很开心”。',['主语','be','频率副词','表语'],'be 作主要动词时，often 常放在 is 后面。','be 后'),
xBuild(['Mia','reads','the book','carefully'],'用给定词块拼出“米娅仔细地读这本书”。',['主语','动词','宾语','方式状语'],'在本题常见语序中，carefully 放在宾语 the book 后。不把它硬插在 reads 与 the book 之间。','常见的句末方式状语'),
xBuild(['The fox','walks','very','slowly'],'拼出“狐狸走得非常慢”。',['主语','动词','程度副词','方式副词'],'very 修饰副词 slowly，组成 very slowly。','副词也可修饰副词'),
xBuild(['They','are','always','ready'],'拼出“他们总是准备好了”。',['主语','be','频率副词','表语'],'always 在这个中性语序中放在 are 后面。','be 后的频率副词')
]},
{id:'c6-m3',title:'六种导演信息',note:'看高亮词在补充哪种信息',pages:'53–58',items:[
xPick('Mia sings softly.','米娅轻轻地唱歌。','softly','方式',['方式','时间','地点'],'softly 回答“唱得怎样”，是方式信息。','bird'),
xPick('Mia sometimes sings.','米娅有时唱歌。','sometimes','频率',['频率','程度','地点'],'sometimes 回答“多常发生”，不等于某一个具体时间点。','music'),
xPick('Mia will sing tomorrow.','米娅明天会唱歌。','tomorrow','时间',['时间','方式','程度'],'tomorrow 回答“什么时候”。','clock'),
xPick('Mia sings outside.','米娅在外面唱歌。','outside','地点',['地点','频率','评论'],'outside 回答“在哪里”。','tree'),
xPick('Mia is very happy.','米娅很开心。','very','程度',['程度','时间','地点'],'very 加强 happy 的程度；修饰的是形容词。','fox'),
xPick('Luckily, Mia found her book.','幸运的是，米娅找到了书。','Luckily','对整件事的评论',['对整件事的评论','说明找书的速度'],'Luckily 表达说话者觉得这件事幸运，并不是说她以“幸运的速度”找书。','book')
]},
{id:'c6-m4',title:'长短不一的状语镜头',note:'找意义与修饰对象，不只看词类',pages:'64–68',items:[
xRole('Mia reads in the garden.','找出说明阅读地点的词组。',['Mia','reads','in the garden'],'in the garden','in the garden 在这句中给 reads 提供地点，作状语。','flower'),
xRole('Mia rests because it rains.','找出说明休息原因的从句。',['Mia','rests','because it rains'],'because it rains','because it rains 是原因状语从句，补充休息这件事的原因。','water'),
xRole('Mia reads to learn.','找出表示读书目的的词组。',['Mia','reads','to learn'],'to learn','to learn 是不定式，在这里表示目的，而不是作名词的定语。','book'),
xRole('Smiling, Mia opens the gift.','找出说明米娅同时微笑的部分。',['Smiling','Mia','opens','the gift'],'Smiling','Smiling 是分词状语，微笑的人是主句主语 Mia。不能让逻辑主语不相符。','gift'),
xPick('The fox in the garden is Mia.','花园里的狐狸是米娅。','in the garden','定语：帮助认出哪只狐狸',['定语：帮助认出哪只狐狸','状语：说明读书地点'],'本句 in the garden 修饰 fox，是定语。同一个短语在其他句子中可以作状语，要看关系。','portrait')
]},
{id:'c6-m5',title:'已经、仍然、还没',note:'看事件状态，不机械套三个时间',pages:'62–64',items:[
xPick('I have already packed my bag.','我已经把背包装好了。','already','到现在之前已经完成',['到现在之前已经完成','此刻还在继续装包'],'already 表示比当前参照时间更早已完成。它本身不等于一个过去时态。','bag'),
xPick('I am still packing my bag.','我仍然在装背包。','still','装包还在持续',['装包还在持续','装包已经完成'],'still 强调情况继续；本句 am packing 说明动作正在进行。','bag'),
xPick('I have not packed my bag yet.','到现在，我还没把背包装好。','yet','到现在还没有，通常有所期待',['到现在还没有，通常有所期待','保证明天一定装好'],'not ... yet 说明到参照时间还没发生，并不保证某一天一定完成。','bag'),
xPick('Is Mia here yet?','米娅到了吗？说话者期待她来。','yet','询问期待的事情是否已发生',['询问期待的事情是否已发生','询问米娅是否永远不会来'],'疑问句中的 yet 常用于询问期待中的变化是否已经发生。','portrait'),
xPick('Mia is still happy.','米娅仍然很开心。','still','开心的状态继续着',['开心的状态继续着','正在做一种叫 happy 的动作'],'still 也能修饰持续的状态，不只搭配正在进行的动作。','mirror')
]}
]}
];
