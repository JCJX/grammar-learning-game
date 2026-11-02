const fs=require('fs'),path=require('path');
const chapters=[];
function add(title,goal,grammar,rule,voc,dialogue,story,test,qs,tips){
 const n=chapters.length+1,id=`de-${String(n).padStart(2,'0')}`;
 const vocab=voc.trim().split('\n').map(x=>{const [head,zh,example,exampleZh,icon='talk']=x.split('|');return {head,zh,example,exampleZh,icon}});
 const lessons=vocab.slice(0,6).map((v,i)=>({id:`${id}-${i+1}`,text:v.example,zh:v.exampleZh,tip:tips.split('|')[i]}));
 const dg=dialogue.split('\n').map(x=>{let [speaker,text,zh]=x.split('|');return{speaker,text,zh}});
 chapters.push({id,number:n,title,level:n<=6?'A1':n<=12?'A2':'B1',stage:n<=12?'beginner':'intermediate',goal,grammar:{title:grammar,explanation:rule,examples:lessons.slice(0,2).map(x=>({text:x.text,zh:x.zh}))},vocab,lessons,dialogue:dg,reading:{title:`${title}：生活片段`,text:story[0],zh:story[1]},assessment:{reading:{title:`${title}：独立阅读`,text:test},questions:qs.split('\n').map(x=>{let [prompt,a,b,c,answer,explanation]=x.split('|');return {prompt,options:[a,b,c],answer:+answer,explanation}}),writing:`围绕“${title}”，写${n<=6?'3—4个简单句':n<=12?'5—6个句子':'80—100个德语词'}。${goal} 请给出具体人物、时间或地点，不要照抄阅读。`,speaking:`模拟“${title}”中的一次真实交流，${n<=12?'说出4—6句话':'持续约一分钟'}。${goal} 对方不明白时，请换一种说法或提出确认问题。`}});
}
add('问候与礼貌澄清','能打招呼、说明没听懂，并礼貌地请对方重复。','人称代词与动词位置','陈述句中变位动词通常在第二位。正式场合用大写 Sie；与熟人用 du。请重复时可用 Können Sie …?，动词原形放句末。',`
Guten Tag|您好|Guten Tag, ich heiße Lina.|您好，我叫莉娜。|talk
heißen|叫作|Wie heißen Sie?|您叫什么名字？|person
bitte|请；不客气|Sprechen Sie bitte langsam.|请您慢一点说。|talk
verstehen|听懂；理解|Ich verstehe das nicht.|我没听懂这个。|idea
wiederholen|重复|Können Sie das bitte wiederholen?|您能重复一遍吗？|talk
danke|谢谢|Danke für Ihre Hilfe.|谢谢您的帮助。|talk
die Sprache|语言|Deutsch ist eine neue Sprache für mich.|德语对我来说是一门新语言。|study
der Name|姓名|Mein Name ist Chen.|我姓陈。|person
langsam|缓慢地|Bitte lesen Sie langsam.|请您慢慢读。|study
Auf Wiedersehen|再见|Auf Wiedersehen, Frau Koch!|再见，科赫女士！|talk`,
`Lina|Guten Tag, ich heiße Lina.|您好，我叫莉娜。
Herr Koch|Guten Tag, mein Name ist Koch.|您好，我姓科赫。
Lina|Entschuldigung, können Sie Ihren Namen wiederholen?|不好意思，您能重复一下您的姓吗？
Herr Koch|Koch. K-O-C-H.|科赫。K-O-C-H。`,
['Lina besucht zum ersten Mal einen Deutschkurs. Vor dem Raum steht ein Mann. Lina sagt: „Guten Tag, ich heiße Lina.“ Der Mann heißt Herr Koch und ist ihr Lehrer. Er spricht zuerst sehr schnell. Lina versteht seinen Namen nicht und bittet ihn, langsam zu sprechen. Herr Koch wiederholt den Namen und schreibt ihn auf ein Blatt. Lina bedankt sich. Dann gehen beide in den Kursraum. Dort sitzen schon drei andere Personen.','莉娜第一次参加德语课。教室门前站着一位男士。莉娜说：“您好，我叫莉娜。”这位男士姓科赫，是她的老师。他一开始说得很快。莉娜没听懂他的姓，请他慢一点说。科赫先生重复了自己的姓，并把它写在一张纸上。莉娜道了谢。随后两人走进教室，里面已经坐着另外三个人。'],
'Am Montag beginnt Omar einen Sprachkurs. Vor der Tür trifft er Frau Berg. Sie arbeitet im Büro der Schule. Omar sagt seinen Namen und fragt nach dem Kursraum. Frau Berg antwortet leise. Omar versteht die Nummer nicht. Er sagt: „Können Sie die Nummer bitte wiederholen?“ Frau Berg sagt langsam: „Raum acht.“ Omar bedankt sich und geht nach oben. Der Unterricht beginnt erst in zehn Minuten.',
`奥马尔在哪里遇到贝格女士？|教室里面|门前|车站|1|文中说他在门前遇到她。
贝格女士在哪里工作？|学校办公室|餐厅|医院|0|她在学校办公室工作。
奥马尔没听清什么？|自己的姓名|星期几|教室号码|2|他不理解她说的号码。
课程何时开始？|已经开始了|十分钟后|星期二|1|结尾说课程还有十分钟才开始。`,
'ich 后的 heißen 变为 heiße。|正式问姓名用 Wie heißen Sie?。|bitte 可放在请求句中。|nicht 在这里否定 verstehen das。|情态动词 können 变位，wiederholen 留在句末。|für Ihre Hilfe 表示感谢的原因。');
add('介绍自己与联系方式','能说明来自哪里、住在哪里，并交换简单联系方式。','sein、kommen 与疑问词','ich bin、Sie sind 是 sein 的不同形式。wo 问所在地，woher 问来自哪里；aus 表示来自某地，in 表示住在某地。',`
kommen|来|Ich komme aus China.|我来自中国。|person
wohnen|居住|Ich wohne in Bonn.|我住在波恩。|home
die Adresse|地址|Wie ist Ihre Adresse?|您的地址是什么？|home
die Telefonnummer|电话号码|Meine Telefonnummer steht hier.|我的电话号码写在这里。|talk
die E-Mail-Adresse|电子邮箱地址|Ist das Ihre E-Mail-Adresse?|这是您的电子邮箱地址吗？|talk
sein|是|Ich bin neu im Kurs.|我是班里的新学员。|person
das Land|国家|Aus welchem Land kommen Sie?|您来自哪个国家？|travel
die Stadt|城市|Die Stadt ist klein.|这座城市很小。|home
buchstabieren|拼读字母|Bitte buchstabieren Sie Ihren Namen.|请逐个字母拼出您的姓名。|study
zusammen|一起|Wir lernen zusammen Deutsch.|我们一起学德语。|study`,
`Mia|Hallo, ich bin Mia. Woher kommst du?|你好，我是米娅。你来自哪里？
Jun|Ich komme aus China und wohne jetzt in Bonn.|我来自中国，现在住在波恩。
Mia|Ich auch. Möchtest du meine E-Mail-Adresse?|我也住这里。你想要我的邮箱地址吗？
Jun|Ja, gern. Dann können wir zusammen lernen.|好啊。这样我们就可以一起学习。`,
['Jun ist neu in Bonn. Im Sprachkurs sitzt er neben Mia. Sie kommt aus Österreich und lebt seit einem Monat in der Stadt. Jun erzählt, dass er aus China kommt. Beide wohnen in der Nähe der Schule. Nach dem Unterricht tauschen sie ihre E-Mail-Adressen aus. Jun schreibt seine Adresse auf einen Zettel und buchstabiert seinen Familiennamen. Mia möchte am Mittwoch mit ihm Deutsch üben. Sie treffen sich in der Bibliothek.','俊刚到波恩。在语言课上，他坐在米娅旁边。米娅来自奥地利，在这座城市生活了一个月。俊说自己来自中国。两人都住在学校附近。下课后他们交换了邮箱地址。俊把自己的地址写在纸条上，并逐个字母拼出了自己的姓。米娅想在星期三和他练习德语。他们约在图书馆见面。'],
'Sara und Ben lernen sich in einem Zeichenkurs kennen. Sara kommt aus Italien, Ben aus Hamburg. Jetzt wohnen beide in Leipzig. Sara wohnt in der Gartenstraße, Ben neben dem Bahnhof. Ben fragt nach Saras Telefonnummer. Sie möchte lieber ihre E-Mail-Adresse geben. Ben schreibt die Adresse in sein Heft. Am Freitag wollen sie nach dem Kurs zusammen einen Tee trinken. Sara bringt ein Foto ihrer Heimatstadt mit.',
`萨拉来自哪里？|意大利|汉堡|莱比锡|0|开头说萨拉来自意大利。
本现在住在哪里附近？|学校|花园|火车站|2|本住在火车站旁边。
萨拉更愿意提供什么？|家庭住址|邮箱地址|电话号码|1|她更愿意提供邮箱地址。
他们计划星期五做什么？|一起喝茶|去意大利|去拍照|0|他们想下课后一起喝茶。`,
'aus China 中 China 通常不带冠词。|城市前用 in，wohnen 随 ich 变为 wohne。|Wie ist …? 可用于询问地址。|meine 与阴性名词 Telefonnummer 搭配。|判断句把 ist 放句首。|ich 对应 sein 的形式 bin。');
add('数字、日期与约定时间','能询问价格、理解钟点，并约定见面时间。','钟点与时间介词','具体钟点用 um，星期用 am。halb neun 是八点半，即“差半小时到九点”。正式时间可说 acht Uhr dreißig。',`
die Uhr|钟；点钟|Es ist acht Uhr.|现在是八点。|time
halb|半|Wir treffen uns um halb neun.|我们八点半见。|time
der Montag|星期一|Am Montag habe ich Zeit.|星期一我有时间。|time
kosten|价格为|Wie viel kostet das Heft?|这本练习本多少钱？|money
der Euro|欧元|Das Heft kostet drei Euro.|练习本三欧元。|money
die Minute|分钟|Der Bus kommt in zehn Minuten.|公交车十分钟后到。|time
heute|今天|Heute ist der dritte Mai.|今天是五月三日。|time
morgen|明天|Morgen beginnt der Kurs früher.|明天课程开始得更早。|time
der Termin|约定；预约|Mein Termin ist um elf Uhr.|我预约的时间是十一点。|time
spät|晚；迟|Es ist schon spät.|时间已经很晚了。|time`,
`Nora|Wann treffen wir uns morgen?|我们明天什么时候见面？
Ali|Um halb neun vor der Schule.|八点半在学校门前。
Nora|Also um acht Uhr dreißig?|也就是八点三十分？
Ali|Genau. Der Kurs beginnt um neun.|对。课程九点开始。`,
['Nora kauft am Montag ein Heft für ihren Sprachkurs. Es kostet drei Euro. Danach ruft sie Ali an. Beide möchten am nächsten Morgen zusammen zur Schule gehen. Ali schlägt halb neun vor. Nora fragt zur Sicherheit noch einmal nach: „Acht Uhr dreißig?“ Ali sagt ja. Der Unterricht beginnt um neun Uhr. Von ihrem Treffpunkt bis zur Schule brauchen sie fünfzehn Minuten. Nora stellt am Abend ihren Wecker auf sieben Uhr.','星期一，诺拉为语言课买了一本练习本，花了三欧元。随后她给阿里打电话。两人想第二天早晨一起去学校。阿里提议八点半。诺拉为确保无误又问了一次：“八点三十分？”阿里说是。课程九点开始。从碰面地点到学校需要十五分钟。晚上诺拉把闹钟设为七点。'],
'Am Donnerstag möchte Paul seine Freundin Lea besuchen. Er arbeitet bis fünf Uhr und braucht dann zwanzig Minuten mit dem Fahrrad. Lea ist ab halb sechs zu Hause. Sie vereinbaren ein Treffen um sechs Uhr. Paul kauft vorher Brot für zwei Euro und Obst für vier Euro. Er möchte nicht zu spät kommen und fährt um fünf Uhr dreißig los. Lea bereitet in der Küche einen Salat vor.',
`保罗工作到几点？|四点|五点|六点|1|他说工作到五点。
莉娅从几点开始在家？|五点半|六点半|五点|0|halb sechs 表示五点半。
面包和水果一共多少钱？|二欧元|四欧元|六欧元|2|二加四等于六欧元。
他们约定几点见面？|五点二十|六点|五点半|1|vereinbaren ein Treffen um sechs Uhr 明确约在六点。`,
'Uhr 用于表示整点。|halb neun 是八点半，不是九点半。|星期前的 am 是 an dem 的缩合。|Wie viel 询问金额。|具体金额后的 Euro 通常不用复数词尾。|in zehn Minuten 表示十分钟之后。');
add('在咖啡馆点餐','能礼貌点饮品、表达堂食或外带，并结账。','möchten 与宾格','möchte 表达委婉愿望。阳性名词作宾语时 ein 变 einen，如 einen Kaffee；阴性 eine 和中性 ein 不变。',`
der Kaffee|咖啡|Ich möchte einen Kaffee.|我想要一杯咖啡。|food
der Tee|茶|Haben Sie grünen Tee?|您这里有绿茶吗？|food
die Milch|牛奶|Den Kaffee bitte mit Milch.|咖啡请加牛奶。|food
der Kuchen|蛋糕|Ich nehme ein Stück Kuchen.|我要一块蛋糕。|food
mitnehmen|带走|Ich möchte den Tee mitnehmen.|我想把茶带走。|food
bezahlen|付款|Ich möchte bitte bezahlen.|我想结账。|money
das Wasser|水|Ein Glas Wasser, bitte.|请给我一杯水。|food
die Rechnung|账单|Die Rechnung, bitte.|请给我账单。|money
ohne|不加；没有|Für mich bitte ohne Zucker.|我的请不要加糖。|food
zusammen|一起；合并|Wir bezahlen zusammen.|我们一起结账。|money`,
`Gast|Guten Tag, einen Tee und ein Stück Kuchen, bitte.|您好，请给我一杯茶和一块蛋糕。
Service|Gern. Zum Mitnehmen?|好的。外带吗？
Gast|Nein, ich bleibe hier. Was kostet das zusammen?|不，我在这里吃。总共多少钱？
Service|Sechs Euro fünfzig, bitte.|一共六欧元五十分。`,
['Mei hat nach dem Deutschkurs eine Pause. Sie geht in ein kleines Café am Platz. Dort bestellt sie einen Kaffee mit Milch und ein Stück Apfelkuchen. Die Mitarbeiterin fragt, ob Mei alles mitnehmen möchte. Mei bleibt lieber im Café, denn draußen regnet es. Sie setzt sich ans Fenster und liest ihre Notizen. Nach einer halben Stunde bittet sie um die Rechnung. Sie bezahlt zusammen sieben Euro und geht zurück zur Schule.','德语课后梅有一段休息时间。她走进广场上的一家小咖啡馆，点了一杯加奶咖啡和一块苹果蛋糕。店员问她是否要外带。梅更想留在店里，因为外面在下雨。她坐在窗边读自己的笔记。半小时后，她要了账单，总共付了七欧元，然后返回学校。'],
'Tobias wartet am Bahnhof auf seine Schwester. Ihr Zug kommt in vierzig Minuten. Im Café bestellt er einen schwarzen Tee ohne Zucker. Er möchte auch ein Brötchen, aber es gibt nur noch Kuchen. Deshalb nimmt er nichts zu essen. Den Tee trinkt er an einem kleinen Tisch. Als seine Schwester anruft, bezahlt er drei Euro. Dann verlässt er das Café und geht zum Gleis sieben.',
`托比亚斯在等谁？|同事|老师|妹妹或姐姐|2|文中说他在等自己的 Schwester。
他点了什么饮品？|不加糖的红茶|加奶咖啡|矿泉水|0|他点的是 schwarzen Tee ohne Zucker。
他为什么没买吃的？|不饿|没有小面包了|忘带钱了|1|他想要的小面包没有了，只有蛋糕。
他最后去了哪里？|七号站台|妹妹家|售票处|0|结尾说他走向 Gleis sieben。`,
'einen Kaffee 是阳性宾格。|Haben Sie …? 可询问是否提供某物。|mit Milch 表示加牛奶。|ein Stück 后可直接接 Kuchen。|mitnehmen 作原形放在 möchte 后的句末。|bitte 使结账请求更礼貌。');
add('超市购物与数量','能询问商品位置、数量、价格，并说明付款方式。','数量表达与否定 kein','ein Kilo Äpfel 表示一公斤苹果。否定不定名词可用 kein：Ich brauche keine Tüte。brauchen 的宾语通常用宾格。',`
der Apfel|苹果|Ich nehme ein Kilo Äpfel.|我要一公斤苹果。|food
das Brot|面包|Wo finde ich das Brot?|面包在哪里？|food
die Tüte|袋子|Ich brauche keine Tüte.|我不需要袋子。|home
die Karte|卡|Kann ich mit Karte bezahlen?|我可以刷卡付款吗？|money
die Kasse|收银台|Die Kasse ist dort links.|收银台在那边左侧。|money
der Preis|价格|Ist das der Preis für ein Kilo?|这是一公斤的价格吗？|money
das Gemüse|蔬菜|Das Gemüse ist frisch.|蔬菜很新鲜。|food
das Kilo|公斤|Ein Kilo Tomaten kostet vier Euro.|一公斤番茄四欧元。|food
brauchen|需要|Wir brauchen noch Reis.|我们还需要米。|food
der Einkaufszettel|购物清单|Mein Einkaufszettel liegt zu Hause.|我的购物清单落在家里了。|idea`,
`Kundin|Entschuldigung, wo finde ich Reis?|不好意思，米在哪里？
Mitarbeiter|Im zweiten Gang rechts.|在第二条过道右侧。
Kundin|Danke. Kann ich hier mit Karte bezahlen?|谢谢。我能在这里刷卡付款吗？
Mitarbeiter|Ja. An der Kasse können Sie mit Karte bezahlen.|可以。您可以在收银台刷卡付款。`,
['Am Samstag geht Eva mit einem Einkaufszettel zum Supermarkt. Sie braucht Reis, Brot und Gemüse für das Wochenende. Die Tomaten kosten heute vier Euro pro Kilo. Eva nimmt nur ein halbes Kilo, denn sie lebt allein. Den Reis findet sie zuerst nicht. Ein Mitarbeiter zeigt ihr den richtigen Gang. An der Kasse packt Eva alles in ihren eigenen Rucksack. Sie braucht keine Tüte und bezahlt mit ihrer Karte. Danach geht sie zu Fuß nach Hause.','星期六，埃娃拿着购物清单去超市。她需要为周末买米、面包和蔬菜。今天番茄每公斤四欧元。埃娃只拿了半公斤，因为她独自生活。起初她找不到米。一位员工给她指了正确的过道。在收银台，她把所有东西装进自己的背包。她不需要袋子，用卡付了款，随后步行回家。'],
'Luis möchte am Abend für zwei Freunde kochen. Nach der Arbeit geht er einkaufen. Er kauft ein Kilo Kartoffeln und zwei Flaschen Wasser. Käse steht auch auf seiner Liste, doch der Käse im Angebot ist schon ausverkauft. Luis nimmt stattdessen Joghurt für das Frühstück. An der Kasse merkt er, dass seine Karte zu Hause liegt. Zum Glück hat er genug Bargeld. Seine Stofftasche ist groß genug für alles.',
`路易斯为什么去购物？|为朋友做晚饭|给学校采购|买旅行用品|0|他想晚上为两个朋友做饭。
哪种商品已经卖完？|土豆|酸奶|特价奶酪|2|特价奶酪已经售罄。
他怎样付款？|刷卡|现金|朋友代付|1|他的卡在家里，但现金足够。
他用什么装商品？|新塑料袋|背包|布袋|2|结尾提到他的布袋足够大。`,
'Äpfel 是 Apfel 的复数。|finden 后用宾格 das Brot。|keine 否定阴性名词 Tüte。|mit Karte 是常用付款表达。|links 表示在左侧。|für ein Kilo 可确认计价单位。');
add('问路与公共交通','能问路、辨认方向，并确认公交目的地。','祈使句与方向词','正式祈使句用动词加 Sie，如 Gehen Sie …。nach links/rechts 表示向左/右，bis zur 表示一直到某个阴性地点。',`
der Bahnhof|火车站|Wie komme ich zum Bahnhof?|去火车站怎么走？|travel
geradeaus|直行|Gehen Sie bitte geradeaus.|请您直走。|travel
links|向左；左边|Biegen Sie hier links ab.|请您在这里左转。|travel
rechts|向右；右边|Die Haltestelle ist rechts.|车站在右边。|travel
der Bus|公交车|Fährt dieser Bus zum Museum?|这辆公交车去博物馆吗？|travel
die Fahrkarte|车票|Wo kann ich eine Fahrkarte kaufen?|我在哪里能买车票？|travel
die Haltestelle|公交站|Ich warte an der Haltestelle.|我在公交站等。|travel
aussteigen|下车|Steigen Sie am Markt aus.|请您在市场站下车。|travel
umsteigen|换乘|Sie müssen einmal umsteigen.|您必须换乘一次。|travel
die Straße|街道|Überqueren Sie die Straße vorsichtig.|请小心穿过街道。|travel`,
`Besucherin|Entschuldigung, wie komme ich zum Museum?|不好意思，去博物馆怎么走？
Passant|Nehmen Sie den Bus zwölf bis zum Markt.|坐十二路公交车到市场站。
Besucherin|Muss ich umsteigen?|我需要换乘吗？
Passant|Nein. Vom Markt gehen Sie fünf Minuten geradeaus.|不用。从市场站直走五分钟。`,
['Yuna möchte das Stadtmuseum besuchen. Auf ihrem Handy ist der Akku leer, deshalb fragt sie einen Mann nach dem Weg. Er erklärt, dass der Bus zwölf direkt zum Markt fährt. Die Haltestelle liegt rechts neben dem Bahnhof. Yuna kauft eine Fahrkarte am Automaten und steigt ein. Am Markt steigt sie aus. Sie geht geradeaus und biegt an der Apotheke links ab. Nach wenigen Minuten sieht sie das Museum auf der anderen Straßenseite.','优娜想参观市博物馆。她的手机没电了，于是向一位男士问路。他解释说十二路公交车直达市场站。公交站在火车站右侧。优娜在自动售票机买了票后上车，在市场站下车。她直走，到药店左转。几分钟后，她看到博物馆在街道对面。'],
'Heute besucht Deniz seinen Onkel im Krankenhaus. Er fährt mit der Straßenbahn vier bis zur Post. Dort muss er in den Bus neun umsteigen. Eine ältere Frau zeigt ihm die richtige Haltestelle auf der anderen Straßenseite. Deniz kauft seine Fahrkarte am Automaten. Nach drei Stationen steigt er vor dem Krankenhaus aus. Sein Onkel wartet im Garten. Für den Rückweg will Deniz dieselbe Verbindung nehmen, weil sie nur zwanzig Minuten dauert.',
`德尼兹先乘什么？|九路公交车|四路有轨电车|火车|1|他先乘四路有轨电车到邮局。
他在哪里换乘？|邮局|医院|花园|0|到邮局后换乘九路公交车。
公交车坐几站？|一站|两站|三站|2|三站后他在医院前下车。
他为什么想原路返回？|不用买票|只需二十分钟|叔叔有车|1|他觉得同样路线只需二十分钟。`,
'zum 是 zu dem 的缩合。|正式祈使句保留 Sie。|ab 是 abbiegen 的可分前缀，放句末。|地点在右侧用 rechts。|一般疑问句把 fährt 放开头。|kann 与 kaufen 构成情态动词结构。');
add('住宿与入住','能办理入住、确认设施并报告房间问题。','完成时与预订','完成时由 haben 或 sein 的变位和句末过去分词组成。预订房间可说 Ich habe ein Zimmer reserviert。',`
reservieren|预订|Ich habe ein Zimmer reserviert.|我预订了一个房间。|home
die Nacht|夜；晚|Ich bleibe für zwei Nächte.|我住两晚。|time
der Schlüssel|钥匙|Kann ich den Schlüssel bekommen?|我能拿钥匙吗？|home
das Frühstück|早餐|Ist das Frühstück im Preis enthalten?|价格包含早餐吗？|food
das Handtuch|毛巾|Im Bad fehlt ein Handtuch.|浴室里少一条毛巾。|home
funktionieren|正常工作|Die Heizung funktioniert nicht.|暖气不能正常工作。|home
die Rezeption|前台|Die Rezeption ist unten.|前台在楼下。|home
das Zimmer|房间|Mein Zimmer liegt im zweiten Stock.|我的房间在三楼。|home
der Aufzug|电梯|Wo ist der Aufzug?|电梯在哪里？|home
ruhig|安静的|Ich hätte gern ein ruhiges Zimmer.|我想要一间安静的房间。|home`,
`Gast|Guten Abend, ich habe ein Zimmer auf den Namen Li reserviert.|晚上好，我以李这个姓预订了房间。
Rezeption|Ja, für zwei Nächte. Hier ist Ihr Schlüssel.|是的，住两晚。这是您的钥匙。
Gast|Wann gibt es Frühstück?|早餐什么时候供应？
Rezeption|Von sieben bis zehn Uhr im Erdgeschoss.|七点到十点，在底层。`,
['Li kommt am Abend in einem kleinen Hotel an. Sie hat ein Zimmer für zwei Nächte reserviert. An der Rezeption bekommt sie den Schlüssel und Informationen zum Frühstück. Es gibt keinen Aufzug, aber ihr Zimmer liegt im ersten Stock. Li trägt ihren kleinen Koffer nach oben. Im Bad bemerkt sie, dass ein Handtuch fehlt. Sie ruft die Rezeption an. Ein Mitarbeiter bringt ihr ein frisches Handtuch. Danach kann sie sich endlich ausruhen.','李女士晚上到达一家小旅馆。她预订了两晚的房间。在前台，她拿到了钥匙，并了解了早餐信息。旅馆没有电梯，但她的房间在二楼。她把小行李箱提上楼，发现浴室里少一条毛巾，便打电话给前台。一名员工给她送来干净毛巾。之后她终于可以休息了。'],
'Marta reist beruflich nach Dresden und bleibt drei Nächte in einer Pension. Ihr Zimmer liegt zum Innenhof und ist sehr ruhig. Beim Einchecken fragt sie nach dem WLAN. Die Mitarbeiterin schreibt das Passwort auf eine Karte. Frühstück wird erst ab acht Uhr angeboten. Weil Marta morgen um halb acht einen Termin hat, möchte sie darauf verzichten. Sie fragt stattdessen nach einer Bäckerei in der Nähe und bekommt eine Wegbeschreibung.',
`玛尔塔住几晚？|两晚|一晚|三晚|2|她住三晚。
房间朝向哪里？|内院|车站|大街|0|房间朝向 Innenhof。
为何明天不吃旅馆早餐？|太贵|预约早于早餐时间|不喜欢面包|1|预约七点半，早餐八点开始。
她最后问什么？|出租车价格|面包店位置|会议室号码|1|她问附近的面包店。`,
'reserviert 是过去分词。|für zwei Nächte 表示时长。|bekommen 表示获得。|enthalten 表示包含。|fehlen 的主语是缺少的物品。|nicht 否定设备运行状态。');
add('家庭与每日作息','能描述起床、家务和日常安排。','可分动词','aufstehen 在主句拆成 stehe … auf。时间放句首时，变位动词仍在第二位：Am Abend räume ich auf。',`
aufstehen|起床|Ich stehe um sieben Uhr auf.|我七点起床。|time
aufräumen|收拾|Am Abend räume ich die Küche auf.|晚上我收拾厨房。|home
waschen|洗|Ich wasche am Samstag die Wäsche.|我星期六洗衣服。|home
kochen|做饭|Mein Bruder kocht heute das Abendessen.|我哥哥或弟弟今天做晚饭。|food
sich kümmern|照顾；负责|Ich kümmere mich um die Pflanzen.|我照料植物。|nature
der Haushalt|家务；家庭事务|Wir teilen uns die Arbeit im Haushalt.|我们分担家务。|home
die Küche|厨房|Die Küche ist morgens frei.|厨房早上没人用。|home
gewöhnlich|通常|Gewöhnlich frühstücke ich zu Hause.|我通常在家吃早饭。|time
der Alltag|日常生活|Mein Alltag beginnt früh.|我的日常生活很早开始。|time
einschlafen|入睡|Ich schlafe oft vor elf Uhr ein.|我经常十一点前入睡。|health`,
`Kim|Wann stehst du morgen auf?|你明天几点起床？
Jan|Um sieben. Ich muss die Wäsche waschen.|七点。我得洗衣服。
Kim|Dann koche ich das Mittagessen.|那我做午饭。
Jan|Gut, danach räumen wir zusammen auf.|好，之后我们一起收拾。`,
['Kim und Jan wohnen zusammen in einer kleinen Wohnung. Beide arbeiten unter der Woche und haben morgens wenig Zeit. Deshalb bereiten sie ihr Frühstück oft schon am Abend vor. Am Samstag teilen sie die Hausarbeit. Jan wäscht die Wäsche und putzt das Bad. Kim kauft ein und kocht. Nach dem Essen räumen sie gemeinsam die Küche auf. Am Nachmittag machen sie einen Spaziergang. So bleibt neben der Arbeit auch Zeit für Erholung.','金和扬合住在一套小公寓里。两人工作日都上班，早上时间不多，所以常在前一晚准备早餐。星期六他们分担家务。扬洗衣服、打扫浴室，金采购、做饭。饭后他们一起收拾厨房，下午去散步。这样除工作之外也有休息时间。'],
'Seit zwei Wochen arbeitet Rosa am Nachmittag in einer Buchhandlung. Ihr Tagesablauf hat sich deshalb verändert. Sie steht um acht Uhr auf und frühstückt in Ruhe. Danach geht sie mit ihrem Hund spazieren. Um elf kocht sie eine warme Mahlzeit. Bevor sie zur Arbeit fährt, stellt sie das Essen für ihren Sohn in den Kühlschrank. Abends liest sie meistens noch eine halbe Stunde. Die Wäsche wäscht sie jetzt am Sonntag.',
`罗莎什么时候工作？|上午|下午|深夜|1|她下午在书店工作。
早餐后做什么？|遛狗|洗衣服|去书店|0|早餐后她带狗散步。
为儿子把饭放在哪里？|烤箱|餐桌|冰箱|2|她把食物放进冰箱。
她现在何时洗衣服？|星期五|星期日|每天早晨|1|最后一句说星期日洗。`,
'auf 是句末的可分前缀。|Am Abend 后紧接 räume。|Wäsche 指待洗或洗好的衣物。|kocht 与单数主语一致。|sich kümmern um 后接宾格。|sich die Arbeit teilen 表示分担工作。');
add('就医时说明需求','能描述简单不适、预约并确认携带材料。','seit 与持续状态','seit 加第三格表达从过去持续至今，常配现在时。询问该带什么可用 Soll ich … mitbringen?。',`
der Schmerz|疼痛|Seit gestern habe ich Schmerzen im Hals.|从昨天起我喉咙疼。|health
der Termin|预约|Ich brauche einen Termin in der Praxis.|我需要预约到诊所就诊。|health
die Versichertenkarte|医保卡|Soll ich meine Versichertenkarte mitbringen?|我要带医保卡吗？|health
warten|等候|Wie lange muss ich ungefähr warten?|我大概需要等多久？|time
die Praxis|诊所|Die Praxis öffnet um acht Uhr.|诊所八点开门。|health
das Medikament|药物|Ich nehme dieses Medikament regelmäßig.|我定期服用这种药。|health
das Fieber|发烧|Ich habe heute kein Fieber.|我今天没有发烧。|health
der Husten|咳嗽|Der Husten stört mich nachts.|咳嗽让我夜里不舒服。|health
die Apotheke|药店|Die Apotheke ist neben der Praxis.|药店在诊所旁边。|health
mitbringen|带来|Ich bringe meine Medikamentenliste mit.|我会带来用药清单。|health`,
`Patientin|Ich habe seit gestern Halsschmerzen.|我从昨天起喉咙疼。
Empfang|Möchten Sie einen Termin vereinbaren?|您想预约吗？
Patientin|Ja. Haben Sie heute noch etwas frei?|是的。今天还有空的时段吗？
Empfang|Um elf Uhr. Bringen Sie bitte Ihre Versichertenkarte mit.|十一点有。请带医保卡。`,
['Sofia fühlt sich seit gestern nicht gut und ruft ihre Hausarztpraxis an. Sie beschreibt, dass sie Halsschmerzen hat und schlecht schläft. Die Mitarbeiterin bietet ihr einen Termin am Vormittag an. Sofia notiert die Uhrzeit und fragt, was sie mitbringen soll. Sie legt ihre Versichertenkarte und eine Liste ihrer Medikamente in die Tasche. In der Praxis erklärt sie ihre Beschwerden noch einmal. Wenn sie ein Wort nicht versteht, bittet sie um eine einfache Erklärung.','索菲娅从昨天起不舒服，便给家庭医生诊所打电话。她说明自己喉咙疼、睡不好。员工提供了上午的预约时段。她记下时间并问该带什么，然后把医保卡和用药清单放进包里。在诊所她再次说明症状；有词不懂时，她会请对方简单解释。'],
'Herr Wang möchte einen Kontrolltermin vereinbaren. Er hat keine neuen Beschwerden, aber die Ärztin hat beim letzten Besuch eine weitere Untersuchung vorgeschlagen. Am Telefon erfährt er, dass am Dienstag um neun Uhr ein Platz frei ist. Er arbeitet dann jedoch schon. Deshalb wählt er Donnerstag um sechzehn Uhr. Die Mitarbeiterin bittet ihn, vorhandene Unterlagen mitzubringen. Herr Wang schreibt den Termin in seinen Kalender und prüft später, welche Unterlagen er zu Hause hat.',
`王先生为何预约？|买药|做建议的进一步检查|新出现严重不适|1|医生上次建议进一步检查。
为何不选星期二九点？|要工作|诊所关闭|没有车|0|那时他已经在工作。
最终预约何时？|星期二下午|星期四九点|星期四十六点|2|他选择星期四十六点。
员工请他带什么？|现金|已有资料|午餐|1|员工要求带已有资料。`,
'Schmerzen 常用复数。|einen Termin 是宾格。|soll 确认对方要求。|ungefähr 表示大约。|öffnet 的主语是诊所。|dieses 与中性宾格 Medikament 一致。');
add('邀请与婉拒','能发出邀请、说明冲突并提出其他时间。','weil 原因从句','weil 后的从句把变位动词放在末尾。主句与从句之间加逗号；情态动词在从句中位于原形之后。',`
einladen|邀请|Ich lade dich am Samstag zum Essen ein.|我邀请你星期六来吃饭。|talk
die Einladung|邀请|Danke für deine Einladung.|谢谢你的邀请。|talk
leider|遗憾地|Leider kann ich am Samstag nicht kommen.|可惜星期六我来不了。|talk
weil|因为|Ich bleibe zu Hause, weil ich Besuch bekomme.|我在家，因为有客人来。|talk
passen|合适|Passt dir der Sonntag besser?|星期日对你更合适吗？|time
mitbringen|带来|Soll ich etwas zum Trinken mitbringen?|我要带点喝的吗？|food
das Treffen|聚会；见面|Unser Treffen beginnt um sechs Uhr.|我们的聚会六点开始。|talk
absagen|取消|Ich muss das Treffen leider absagen.|可惜我得取消见面。|talk
sich freuen|期待；高兴|Ich freue mich auf den Abend.|我期待这个晚上。|talk
der Besuch|来访；访客|Wir bekommen morgen Besuch.|明天有人来拜访我们。|person`,
`Lena|Möchtest du am Samstag zu mir kommen?|你星期六想来我家吗？
Tao|Leider nicht, weil ich arbeiten muss.|可惜不行，因为我得上班。
Lena|Und am Sonntag? Wir könnten zusammen kochen.|那星期日呢？我们可以一起做饭。
Tao|Gern. Ich bringe Gemüse mit.|好啊。我带蔬菜。`,
['Lena möchte am Wochenende Freunde zum Essen einladen. Sie schreibt Tao eine kurze Nachricht. Tao hat am Samstag Dienst und kann deshalb nicht kommen. Er erklärt den Grund und schlägt Sonntag vor. Lena findet die Idee gut. Sie treffen sich um fünf Uhr in ihrer Wohnung und kochen gemeinsam. Tao bringt frisches Gemüse mit, Lena kauft Reis und Getränke. Ein weiterer Freund kommt erst später, weil er vorher noch einen Familienbesuch hat.','莉娜想周末邀请朋友吃饭，便给涛发消息。涛星期六值班，不能来。他解释原因并提议星期日。莉娜觉得不错。他们五点在她家见面，一起做饭。涛带新鲜蔬菜，莉娜买米和饮料。另一位朋友会晚些来，因为他此前要探望家人。'],
'Am Freitag feiert Nina ihren Geburtstag im Park. Sie lädt ihre Nachbarin Amal ein und schreibt, dass alle ab siebzehn Uhr kommen können. Amal hat bis achtzehn Uhr einen Kurs. Sie fragt, ob sie später dazukommen darf. Nina freut sich und bittet sie, eine Decke mitzubringen. Essen ist schon genug da. Falls es regnet, treffen sich alle in Ninas Wohnung. Die genaue Adresse schickt Nina am Donnerstag noch einmal.',
`妮娜庆祝什么？|搬家|毕业|生日|2|她庆祝生日。
阿玛尔为何晚来？|有课|要做饭|要旅行|0|她的课到十八点才结束。
请阿玛尔带什么？|蛋糕|毯子|饮料|1|妮娜请她带毯子。
下雨在哪里聚会？|车站|妮娜家|学校|1|下雨去妮娜的公寓。`,
'einladen 的 ein 放句末。|für 后接宾格。|leider 表达遗憾。|weil 从句中 bekomme 在末尾。|passen 的对象用第三格 dir。|etwas zum Trinken 指喝的东西。');
add('电话预约与改期','能通过电话改期并确认新时间。','könnten 委婉请求','Könnten wir …? 是委婉的建议。von … auf … 可表达从原预约时间改到新的时间。',`
vereinbaren|约定|Ich möchte einen Termin vereinbaren.|我想约一个时间。|time
verschieben|改期|Könnten wir den Termin verschieben?|我们能改一下预约时间吗？|time
frei|空闲的|Haben Sie am Freitag etwas frei?|您星期五有空位吗？|time
bestätigen|确认|Könnten Sie mir die Uhrzeit bestätigen?|您能向我确认时间吗？|talk
erreichen|联系上|Unter dieser Nummer erreichen Sie mich.|拨这个号码能联系到我。|talk
zurückrufen|回电话|Ich rufe Sie morgen zurück.|我明天给您回电话。|talk
der Anruf|来电|Danke für Ihren Anruf.|谢谢您的来电。|talk
besetzt|占线的|Die Leitung ist gerade besetzt.|线路现在占线。|talk
die Nachricht|消息|Ich hinterlasse eine Nachricht.|我留个消息。|talk
der Kalender|日程表|Ich schaue in meinen Kalender.|我看一下日程表。|time`,
`Kunde|Ich habe morgen um zehn einen Termin bei Ihnen.|我明天十点在您那里有预约。
Salon|Wie ist Ihr Name, bitte?|请问您的姓名是？
Kunde|Zhao. Könnten wir den Termin auf Freitag verschieben?|赵。我们能改到星期五吗？
Salon|Am Freitag ist um vierzehn Uhr noch etwas frei.|星期五十四点还有空位。`,
['Herr Zhao hat einen Termin im Friseursalon. Am Tag davor erfährt er, dass er länger arbeiten muss. Er ruft im Salon an und bittet um einen neuen Termin. Die Mitarbeiterin fragt nach seinem Namen und findet die Buchung im Kalender. Am Freitag um vierzehn Uhr ist noch ein Platz frei. Herr Zhao nimmt den Termin an und wiederholt Datum und Uhrzeit. Die Mitarbeiterin bestätigt beides. Er trägt den neuen Termin sofort in sein Handy ein.','赵先生在理发店有预约。前一天他得知要加班，于是打电话请求改时间。员工问了他的姓名，在日程表里找到预约。星期五十四点还有空位。赵先生接受了时段，复述了日期和时间。员工确认无误。他马上把新预约记到手机里。'],
'Eine Fahrradwerkstatt hat Lea für Mittwoch um fünfzehn Uhr eingeplant. Nun muss Lea an diesem Tag ihre Tochter abholen. Sie ruft am Montag an und fragt nach einem anderen Termin. Der Mechaniker bietet Donnerstagmorgen oder Freitagnachmittag an. Donnerstag passt Lea nicht, weil sie früh arbeitet. Sie entscheidet sich für Freitag um sechzehn Uhr. Das Fahrrad soll sie zehn Minuten vorher bringen. Lea notiert sich auch die neue Adresse der Werkstatt.',
`原预约何时？|星期三十五点|星期四早晨|星期五十六点|0|原定星期三十五点。
为何改期？|车修好了|店搬家了|要接女儿|2|她需要接女儿。
新预约何时？|星期四九点|星期五十六点|星期五十五点|1|她选择星期五十六点。
应提前多久送车？|半小时|一小时|十分钟|2|应提前十分钟送车。`,
'einen Termin vereinbaren 是常用搭配。|Könnten 表示委婉请求。|frei 指尚可预约。|mir 是第三格对象。|Unter dieser Nummer 表示联系方式。|zurückrufen 在主句中拆开。');
add('出行计划与旅行经历','能比较交通选择并讲述一次短途旅行。','完成时的助动词','fahren、ankommen 在表示位移时用 sein 构成完成时；buchen、verpassen 用 haben。过去分词放句末。',`
fahren|乘车；行驶|Ich bin gestern nach Köln gefahren.|我昨天乘车去了科隆。|travel
buchen|预订|Wir haben die Fahrkarten online gebucht.|我们网上订了车票。|travel
die Verspätung|晚点|Der Zug hatte zwanzig Minuten Verspätung.|火车晚点二十分钟。|travel
ankommen|到达|Wir sind am Mittag angekommen.|我们中午到了。|travel
der Anschluss|接续交通|Ich habe meinen Anschluss verpasst.|我错过了接续的车。|travel
die Rückfahrt|返程|Die Rückfahrt dauert zwei Stunden.|返程需要两个小时。|travel
der Ausflug|短途出游|Unser Ausflug war sehr schön.|我们的短途出游很愉快。|travel
der Bahnsteig|站台|Wir warten auf dem Bahnsteig.|我们在站台等候。|travel
direkt|直达的|Dieser Zug fährt direkt nach Bonn.|这班火车直达波恩。|travel
vergleichen|比较|Wir vergleichen die Preise.|我们比较价格。|money`,
`Anna|Wie war dein Ausflug nach Köln?|你去科隆出游怎么样？
Bo|Schön, aber der Zug hatte Verspätung.|很不错，但火车晚点了。
Anna|Habt ihr trotzdem das Museum besucht?|你们还是参观了博物馆吗？
Bo|Ja, wir haben dort zwei Stunden verbracht.|是的，我们在那里待了两个小时。`,
['Anna und Bo planen einen Ausflug nach Köln. Sie vergleichen zuerst verschiedene Zugverbindungen. Ein direkter Zug kostet etwas mehr, aber sie müssen nicht umsteigen. Deshalb buchen sie diese Verbindung. Am Samstag hat der Zug zwanzig Minuten Verspätung. Trotzdem kommen sie rechtzeitig zum Museumsbesuch an. Sie sehen eine Ausstellung und essen danach am Fluss. Am Abend fahren sie müde zurück. Bo schreibt später eine Nachricht an seine Schwester und erzählt von dem schönen Tag.','安娜和博计划去科隆出游。他们先比较不同火车路线。直达车稍贵，但不用换乘，所以订了这趟车。星期六火车晚点二十分钟，但他们仍及时赶到博物馆。他们看展览后在河边吃饭。晚上他们疲惫地返回。随后博给姐姐或妹妹发消息，讲述愉快的一天。'],
'Letzten Sonntag ist Karim mit zwei Freunden an einen See gefahren. Sie wollten zuerst den Bus nehmen, aber am Sonntag fuhr er nur selten. Deshalb sind sie mit dem Fahrrad gefahren. Die Fahrt hat eine Stunde gedauert. Am See haben sie Brot und Obst gegessen. Zum Schwimmen war das Wasser zu kalt. Nach einem langen Spaziergang sind sie zurückgefahren. Karim möchte im Sommer wiederkommen und dann vielleicht ein Boot mieten.',
`最后怎样去湖边？|公交车|自行车|火车|1|公交班次少，所以骑车去了。
骑去用了多久？|一小时|半小时|两小时|0|车程一小时。
为什么没游泳？|忘带泳衣|天黑了|水太冷|2|水太冷。
夏天可能想做什么？|学开车|租船|搬家|1|卡里姆想也许租船。`,
'位移用 bin gefahren。|buchen 用 haben。|hatte 是 haben 过去时。|ankommen 分词为 angekommen。|verpassen 分词无 ge-。|Rückfahrt 指返程。');
add('租房提问与比较','能询问租金构成、设施和看房条件，比较实际需求。','间接疑问句','礼貌询问信息可用 Können Sie mir sagen, ob …? 或 wie …?。间接问句中变位动词放末尾。是否问题用 ob。',`
die Miete|租金|Wie hoch ist die monatliche Miete?|每月租金是多少？|money
die Nebenkosten|杂费；附加费用|Können Sie erklären, was die Nebenkosten enthalten?|您能解释杂费包含什么吗？|money
die Besichtigung|看房|Ich würde gern eine Besichtigung vereinbaren.|我想约个时间看房。|home
die Kaution|押金|Wann soll die Kaution bezahlt werden?|押金应当何时支付？|money
möbliert|带家具的|Ich möchte wissen, ob das Zimmer möbliert ist.|我想知道房间是否带家具。|home
der Mietvertrag|租赁合同|Ich möchte den Mietvertrag in Ruhe lesen.|我想仔细阅读租赁合同。|home
die Heizung|暖气|Sind die Kosten für die Heizung enthalten?|费用里包含暖气费吗？|home
die Wohnfläche|居住面积|Wie groß ist die Wohnfläche?|居住面积有多大？|home
der Vermieter|房东|Der Vermieter beantwortet meine Fragen schriftlich.|房东书面回答了我的问题。|person
verfügbar|可用的；可入住的|Ab wann ist die Wohnung verfügbar?|公寓何时起可以入住？|home`,
`Interessentin|Können Sie mir sagen, ob die Heizkosten enthalten sind?|您能告诉我是否包含暖气费吗？
Vermieter|In diesem Angebot sind sie enthalten, Strom aber nicht.|这份报价包含暖气费，但不含电费。
Interessentin|Dürfte ich vor einer Entscheidung den Vertrag lesen?|我能在决定前阅读合同吗？
Vermieter|Natürlich. Ich schicke Ihnen einen Entwurf.|当然。我给您发一份草案。`,
['Mina sucht eine Wohnung näher an ihrer Arbeitsstelle. Eine Anzeige nennt eine günstige Miete, erklärt aber die Nebenkosten nicht genau. Bei der Besichtigung fragt Mina deshalb nach Strom, Heizung und Internet. Außerdem möchte sie wissen, wie laut die Straße am Abend ist. Der Vermieter beantwortet einige Fragen sofort und verspricht, die übrigen Angaben schriftlich zu schicken. Mina unterschreibt noch nichts. Zuerst möchte sie die gesamten monatlichen Kosten mit denen einer zweiten Wohnung vergleichen.','米娜想找离工作地点更近的公寓。一个广告标价便宜，但没有详细说明杂费。看房时她询问电、暖气和网络，还想知道晚上街道多吵。房东当场回答了一些问题，并答应书面发送其余信息。米娜暂不签字，想先把每月总支出与另一套公寓比较。'],
'Tarek besichtigt zwei Zimmer in einer Wohngemeinschaft. Das erste liegt nahe der Hochschule und hat schon ein Bett und einen Schreibtisch. Das zweite ist größer, liegt aber vierzig Minuten entfernt und ist leer. Bei beiden Angeboten muss Tarek die genauen Kosten noch klären. Er arbeitet oft abends an Studienprojekten und braucht einen ruhigen Platz. Deshalb möchte er die erste Wohnung noch einmal am Abend besuchen, bevor er sich entscheidet.',
`第一间房有什么？|床和书桌|只有衣柜|没有家具|0|第一间已有床和书桌。
第二间房的不足是什么？|更小|没有窗户|距离较远且空置无家具|2|它四十分钟路程且没有家具。
两份报价都需澄清什么？|室友姓名|具体费用|大学地址|1|两者的准确费用都还需澄清。
塔雷克为何想晚上再看第一间？|确认安静程度|量床的尺寸|去交押金|0|他晚上常做项目，需要安静空间。`,
'Wie hoch 询问金额高低。|was 引导的间接问句将 enthalten 放末尾。|würde gern 表示委婉愿望。|被动态 bezahlt werden 询问安排而非假定法规。|ob 引导是否问句。|in Ruhe 表示从容仔细地。');
add('协调多个预约','能说明时间冲突、提出替代方案并确认安排。','obwohl 与 trotzdem','obwohl 引导让步从句，变位动词在末尾；trotzdem 可连接新的主句，置于句首时后面紧接变位动词。',`
die Überschneidung|时间冲突|Es gibt eine Überschneidung mit meinem Kurs.|这与我的课程时间冲突。|time
verschieben|改期|Obwohl ich früh angerufen habe, kann ich den Termin nicht verschieben.|虽然我很早打了电话，仍无法改期。|time
stattfinden|举行|Die Beratung findet am Dienstag statt.|咨询安排在星期二。|time
die Bestätigung|确认函；确认|Ich brauche eine schriftliche Bestätigung.|我需要书面确认。|talk
die Alternative|替代方案|Gibt es eine Alternative am Nachmittag?|下午有替代时段吗？|time
rechtzeitig|及时地|Bitte sagen Sie rechtzeitig ab.|请及时取消预约。|time
die Beratung|咨询|Die Beratung dauert ungefähr eine Stunde.|咨询大约一小时。|talk
verhindert|因故无法参加的|Am Mittwoch bin ich leider verhindert.|星期三我有事不能参加。|time
der Zeitraum|时间段|In diesem Zeitraum bin ich flexibel.|这段时间内我可以灵活安排。|time
eintragen|记入|Ich trage beide Termine in den Kalender ein.|我把两个预约都记入日程表。|time`,
`Kundin|Leider überschneidet sich die Beratung mit meinem Kurs.|可惜咨询与我的课程冲突。
Berater|Könnten Sie am Donnerstag um elf kommen?|您星期四十一点能来吗？
Kundin|Ja. Bekomme ich eine Bestätigung per E-Mail?|可以。我会收到邮件确认吗？
Berater|Ja, ich schicke sie Ihnen heute.|会的，我今天发给您。`,
['Nora hat am Dienstag einen Beratungstermin und am selben Vormittag eine wichtige Prüfung. Obwohl sie beide Termine früh geplant hat, bemerkt sie die Überschneidung erst am Wochenende. Sie schreibt eine E-Mail und nennt zwei mögliche Ersatztermine. Am Montag erhält sie einen Anruf. Die Beratung kann am Donnerstag stattfinden. Nora wiederholt die neue Uhrzeit und bittet um eine schriftliche Bestätigung. Danach löscht sie den alten Eintrag aus ihrem Kalender, damit sie später nicht durcheinanderkommt.','诺拉星期二有咨询预约，同日上午还有重要考试。虽然两个安排都很早就定了，她到周末才发现冲突。她发邮件给出两个备选时间。星期一对方来电，说可改到星期四。她复述新时间并要求书面确认，随后删除日历中的旧记录，以免混淆。'],
'Für einen Computerkurs hat Emil am Freitag ein Aufnahmegespräch vereinbart. Am Donnerstag erfährt er, dass seine Arbeitsbesprechung länger dauern wird und bis in den Freitagvormittag reicht. Er ruft das Kursbüro an. Ein Videogespräch am Freitagabend wäre möglich, ein persönliches Gespräch erst am Montag. Emil möchte die Räume kennenlernen und entscheidet sich für Montag. Das Büro bittet ihn, vorher einen kurzen Fragebogen auszufüllen. Die Bestätigung kommt anschließend per E-Mail.',
`埃米尔原本约了什么？|体检|课程面谈|搬家|1|他约了计算机课程的面谈。
为什么出现冲突？|工作会议延长|生病|火车取消|0|工作会议会延续到星期五上午。
他选择哪个方案？|周五晚视频|周五早到访|周一面谈|2|他想看看场地，选周一到访。
面谈前需做什么？|付押金|填写简短问卷|购买电脑|1|办公室请他提前填问卷。`,
'mit 后用第三格 meinem Kurs。|obwohl 从句的 habe 在末尾。|stattfinden 的 statt 放主句末尾。|schriftlich 表示书面的。|am Nachmittag 指下午时段。|rechtzeitig 指留出足够提前量。');
add('维修与服务咨询','能描述故障、询问报价和服务范围。','被动态与服务流程','现在时被动态用 werden 加过去分词，重点是事情如何处理。情态动词搭配被动态时，句末用分词加 werden。',`
die Reparatur|维修|Wie lange dauert die Reparatur?|维修需要多久？|home
der Kostenvoranschlag|费用预估|Ich möchte zuerst einen Kostenvoranschlag erhalten.|我想先收到费用预估。|money
prüfen|检查|Das Gerät wird zuerst geprüft.|设备会先接受检查。|idea
ersetzen|更换|Muss dieses Teil ersetzt werden?|这个部件必须更换吗？|home
die Gebühr|费用|Fällt für die Prüfung eine Gebühr an?|检查会收费吗？|money
abholen|取走|Wann kann ich das Gerät abholen?|我什么时候能取设备？|travel
der Defekt|故障|Der Defekt tritt nur manchmal auf.|故障只偶尔出现。|idea
der Auftrag|委托；订单|Bitte beginnen Sie erst nach meiner Zustimmung mit dem Auftrag.|请在我同意后再开始执行委托。|work
die Zustimmung|同意|Meine Zustimmung erhalten Sie schriftlich.|我会书面表示同意。|talk
die Werkstatt|维修店|Die Werkstatt ruft mich nach der Prüfung an.|维修店检查后给我打电话。|work`,
`Kunde|Der Laptop geht manchmal plötzlich aus.|笔记本电脑有时会突然关机。
Technikerin|Wir können ihn prüfen. Das kostet dreißig Euro.|我们可以检查，费用三十欧元。
Kunde|Bitte nennen Sie mir vor einer Reparatur die weiteren Kosten.|维修前请告诉我后续费用。
Technikerin|Gern. Wir rufen Sie nach der Prüfung an.|好的。检查后我们会给您打电话。`,
['Als Jonas seinen Laptop zur Werkstatt bringt, beschreibt er den Fehler möglichst genau. Das Gerät geht nach ungefähr zwanzig Minuten aus, besonders wenn er Videos ansieht. Die Technikerin erklärt, dass zuerst eine Prüfung nötig ist. Jonas fragt nach deren Preis und danach, ob weitere Arbeiten gesondert beauftragt werden müssen. Er möchte vor der Reparatur eine Kostenschätzung bekommen. Die Werkstatt notiert seine Telefonnummer und gibt ihm eine Auftragsbestätigung. Jonas bewahrt sie zusammen mit dem Kaufbeleg auf.','约纳斯把笔记本电脑送到维修店时，尽可能准确地描述了问题：设备约二十分钟后关机，尤其是看视频时。技师说需要先检查。约纳斯问检查价格，以及后续工作是否需另行委托。他希望维修前先获得费用估算。维修店记下电话号码并给他委托确认单。他把它和购买凭证一起保存。'],
'Die Waschmaschine von Frau Seidel macht beim Schleudern ein ungewöhnliches Geräusch. Sie kontaktiert einen Reparaturdienst und beschreibt das Problem. Der Mitarbeiter bietet einen Besuch am Mittwoch an. Für die Anfahrt nennt er einen festen Preis; mögliche Ersatzteile sind darin nicht enthalten. Frau Seidel bittet darum, vor dem Einbau neuer Teile über die Kosten informiert zu werden. Bis zum Termin benutzt sie die Maschine nicht mehr. Die Bestätigung erhält sie als Nachricht auf ihr Handy.',
`洗衣机何时出现异响？|进水时|关机后|脱水时|2|Geräusch beim Schleudern 指脱水异响。
维修人员何时上门？|星期三|星期一|星期五|0|对方提供星期三上门。
固定报价包含什么？|所有零件|上门交通费|新洗衣机|1|固定价是 Anfahrt，不包含零件。
她提出什么要求？|直接换全部零件|取消检查|装新零件前告知费用|2|她要提前了解更换零件费用。`,
'dauern 询问耗时。|Kostenvoranschlag 是预估，不能直接当最终账单。|wird geprüft 是现在时被动态。|muss … ersetzt werden 是情态动词被动态。|anfallen 的 an 放句末。|abholen 的原形位于 kann 后句末。');
add('工作沟通与交接','能说明进度、澄清任务并协商截止时间。','条件句 wenn','wenn 表达条件，变位动词在从句末尾。条件从句在前时，主句直接以变位动词开始。',`
die Aufgabe|任务|Könnten Sie die Aufgabe genauer erklären?|您能更具体地解释任务吗？|work
die Frist|截止期限|Bis wann läuft die Frist?|截止期限到什么时候？|time
übernehmen|接手；承担|Ich kann den ersten Teil übernehmen.|我可以负责第一部分。|work
die Übergabe|交接|Bei der Übergabe fehlen zwei Informationen.|交接时缺少两项信息。|work
zuständig|负责的|Wer ist für die Bestellung zuständig?|谁负责订货？|work
der Entwurf|草稿|Wenn der Entwurf fertig ist, schicke ich ihn Ihnen.|草稿完成后，我就发给您。|work
die Rückmeldung|反馈|Ich brauche bis morgen eine Rückmeldung.|我需要在明天之前收到反馈。|talk
erledigen|完成；处理|Ich habe die Aufgabe bereits erledigt.|我已完成任务。|work
die Besprechung|会议；商议|Die Besprechung beginnt um neun.|会议九点开始。|work
verlässlich|可靠的|Wir brauchen verlässliche Angaben.|我们需要可靠的信息。|idea`,
`Kollegin|Kannst du den Bericht bis Donnerstag übernehmen?|你能负责在星期四前完成报告吗？
Kollege|Den Text ja. Für die Zahlen brauche ich deine Hilfe.|文字可以。数据方面我需要你的帮助。
Kollegin|Ich schicke dir die Tabelle heute Nachmittag.|我今天下午发给你表格。
Kollege|Gut. Wenn Fragen offenbleiben, melde ich mich morgen.|好。如果还有问题，我明天联系你。`,
['In einer kleinen Firma bereiten Aylin und Max einen Bericht vor. Aylin soll die Zahlen prüfen, Max schreibt die Erklärung dazu. Bei der Übergabe stellt Max fest, dass Angaben zu zwei Monaten fehlen. Er fragt nach, statt Zahlen zu schätzen. Gemeinsam vereinbaren sie, den ersten Entwurf am Donnerstag zu besprechen. Wenn die fehlenden Daten bis dahin nicht vorliegen, kennzeichnen sie die Lücke deutlich. Ihre Teamleiterin wird noch am selben Tag über den geänderten Ablauf informiert.','在一家小公司，艾琳和马克斯一起准备报告。艾琳检查数据，马克斯写说明。交接时马克斯发现缺少两个月的数据，便询问而不自行估算。他们约定星期四讨论初稿。如果届时数据还没到，就明确标注空缺。当天他们也会把调整后的流程告知组长。'],
'Ravi arbeitet seit Kurzem in einem Lager. Am Dienstag soll er eine Lieferung kontrollieren. Er kennt das digitale Formular noch nicht und bittet seine Kollegin um eine kurze Erklärung. Sie zeigt ihm, wo fehlende Artikel eingetragen werden. Ravi entdeckt danach, dass zwei Kartons weniger angekommen sind als bestellt. Er dokumentiert die Abweichung und informiert den zuständigen Kollegen. Die Ware wird erst weiterverteilt, nachdem die offenen Fragen geklärt wurden. Die Kollegin prüft seinen ersten Eintrag gemeinsam mit ihm.',
`拉维要做什么？|写广告|检查到货|清洗仓库|1|他要检查一批货物。
他请求解释什么？|数字表单|请假流程|薪资|0|他尚不熟悉数字表单。
发现什么差异？|颜色错误|货太多|少了两箱|2|到货比订货少两箱。
什么时候分发货物？|立即|澄清问题后|下个月固定日期|1|问题澄清后才继续分发。`,
'genauer 请求更具体的信息。|bis wann 问截止点。|übernehmen 在这里表示承担工作。|bei der Übergabe 用第三格。|für etwas zuständig 是负责某事。|wenn 从句在前，主句用 schicke 开头。');
add('学校与学习合作','能理解课程要求、申请帮助并协商小组任务。','关系从句','关系从句补充说明名词，变位动词放句末。关系代词的性、数来自所指名词，格由它在从句中的作用决定。',`
die Anmeldung|报名|Die Anmeldung, die ich gestern geschickt habe, ist angekommen.|我昨天发送的报名材料已收到。|study
die Voraussetzung|前提条件|Welche Voraussetzungen gelten für diesen Kurs?|这门课有哪些前提条件？|study
die Abgabe|提交|Die Abgabe ist für Freitag geplant.|提交安排在星期五。|study
die Gruppenarbeit|小组作业|Bei der Gruppenarbeit teilen wir die Aufgaben auf.|做小组作业时我们分配任务。|study
die Sprechstunde|答疑或接待时间|Ich komme in Ihre Sprechstunde.|我会在您的答疑时间来。|study
nachholen|补做；补学|Wie kann ich den versäumten Stoff nachholen?|我怎样补上错过的内容？|study
die Quelle|资料来源|Wir nennen die Quelle jeder Grafik.|我们注明每张图的来源。|study
die Präsentation|展示；报告|Unsere Präsentation dauert zehn Minuten.|我们的报告十分钟。|study
die Teilnahme|参加|Ist eine Teilnahme per Video möglich?|可以通过视频参加吗？|study
die Unterstützung|支持；帮助|Vielen Dank für Ihre Unterstützung.|非常感谢您的帮助。|talk`,
`Studentin|Ich war krank und habe die Einführung verpasst.|我生病了，错过了导论课。
Dozent|Die Unterlagen, die Sie brauchen, liegen auf der Lernplattform.|您需要的材料在学习平台上。
Studentin|Kann ich dazu in Ihre Sprechstunde kommen?|我能在您的答疑时间来问问题吗？
Dozent|Ja, bringen Sie bitte konkrete Fragen mit.|可以，请带具体问题来。`,
['Für eine Gruppenarbeit sollen vier Kursteilnehmer einen kurzen Vortrag vorbereiten. Hana übernimmt die Recherche, die anderen erstellen Folien und Beispiele. Eine Quelle, die Hana zuerst findet, hat kein Veröffentlichungsdatum. Deshalb sucht sie nach besser überprüfbaren Informationen. Bei einem Treffen stellt die Gruppe fest, dass ihr Vortrag zu lang wird. Sie kürzt einige Beispiele und übt gemeinsam. Ein Teilnehmer, der am Treffen nicht teilnehmen kann, erhält anschließend eine Zusammenfassung und schickt seine Ergänzungen per E-Mail.','四名学员要合作准备一个简短报告。哈娜负责查资料，其他人制作幻灯片和例子。哈娜最初找到的一份资料没有发布日期，因此她寻找更易核实的信息。聚会时小组发现报告太长，删去一些例子并一起练习。没能参加的一名学员随后收到摘要，并通过邮件补充意见。'],
'Mira möchte an einem Abendkurs für Fotografie teilnehmen. Auf der Webseite steht, dass eigene Kameras mitgebracht werden sollen. Mira besitzt bisher nur ein Smartphone und fragt das Kursbüro nach einer Lösung. Für die ersten beiden Termine kann sie eine Kamera der Schule ausleihen. Danach muss sie erneut nachfragen, weil die Geräte auch von anderen Gruppen gebraucht werden. Mira meldet sich an und notiert, welche Materialien sie zum ersten Termin mitbringen soll.',
`米拉想上什么课？|烹饪|语言|摄影|2|她想参加摄影晚课。
她目前有什么设备？|只有智能手机|专业相机|两台相机|0|她目前只有智能手机。
前两次课可以怎样解决？|不用参加|借学校相机|只看录像|1|学校可借相机给她上前两次课。
为何之后要再询问？|其他组也要用设备|课程停止|她要当老师|0|其他组同样需要设备。`,
'关系代词 die 指代阴性 Anmeldung，并在从句作宾语。|gelten für 表示适用于。|für Freitag geplant 表示计划安排。|aufteilen 的 auf 在句末。|Sprechstunde 可指教师固定答疑时间。|versäumten Stoff 指错过的课程内容。');
add('银行与支付安全','能咨询费用、核对交易并保护敏感信息。','间接转述与核实','转述客服说明可用 dass 从句。信息核实时区分对方声称的内容与已经确认的事实，句末放变位动词。',`
das Konto|账户|Ich möchte die Gebühren für dieses Konto wissen.|我想了解这个账户的费用。|money
die Überweisung|转账|Die Überweisung ist noch nicht angekommen.|转账还没到账。|money
der Betrag|金额|Ich erkenne diesen Betrag nicht wieder.|我认不出这笔金额。|money
sperren|冻结；停用|Wie kann ich die verlorene Karte sperren lassen?|遗失的卡怎样停用？|money
die PIN|个人识别码；密码|Meine PIN gebe ich am Telefon nicht weiter.|我不会在电话里透露个人识别码。|money
der Kontoauszug|账户流水|Auf dem Kontoauszug steht eine unbekannte Zahlung.|账户流水上有一笔陌生付款。|money
die Zahlung|付款|Ich möchte diese Zahlung prüfen lassen.|我想请人核查这笔付款。|money
der Empfänger|收款人；接收人|Bitte prüfen Sie den Namen des Empfängers.|请核对收款人的姓名。|person
die Gebühr|费用|Welche monatliche Gebühr fällt an?|每月有哪些费用？|money
verdächtig|可疑的|Diese Nachricht wirkt verdächtig.|这条消息看起来可疑。|idea`,
`Kundin|Auf meinem Auszug steht eine Zahlung, die ich nicht kenne.|我的流水上有一笔不认识的付款。
Service|Bitte nennen Sie Datum und Betrag, aber nicht Ihre PIN.|请提供日期和金额，不要提供密码。
Kundin|Ich prüfe zuerst, ob ich die offizielle Servicenummer gewählt habe.|我先核对自己是否拨了官方服务号码。
Service|Das können Sie über die Unterlagen Ihrer Bank prüfen.|您可以通过银行文件核对。`,
['Chen erhält eine Nachricht, die angeblich von seiner Bank kommt. Er soll sofort einen Link öffnen und seine Zugangsdaten eingeben. Weil ihn die Aufforderung überrascht, klickt er nicht darauf. Stattdessen öffnet er die ihm bekannte Bankanwendung und prüft dort die Nachrichten. Anschließend ruft er über eine bereits gespeicherte offizielle Nummer beim Service an. Er fragt, ob eine Handlung erforderlich ist. Im Gespräch nennt er keine PIN und notiert sich, welche nächsten Schritte ihm erklärt werden.','陈收到一条自称来自银行的消息，要求他立即打开链接、输入登录资料。这个要求让他意外，他没有点击，而是打开熟悉的银行应用查看消息。随后他通过已保存的官方号码联系服务人员，询问是否需要采取行动。他不在通话中提供密码，并记下对方说明的后续步骤。'],
'Auf ihrem Kontoauszug entdeckt Eva eine doppelte Abbuchung vom selben Geschäft. Sie vergleicht die beiden Einträge mit ihrem Kassenbon. Datum und Betrag sind jeweils gleich. Zuerst kontaktiert sie das Geschäft und bittet um Prüfung. Eine Mitarbeiterin kann am Telefon noch keine Erklärung geben und fragt nach einer Kopie des Belegs. Eva sendet nur die dafür benötigten Angaben über den vereinbarten Kontaktweg. Parallel notiert sie die Rückfragen, die sie ihrer Bank stellen möchte.',
`埃娃发现什么？|陌生贷款|同一店铺重复扣款|账户关闭|1|流水有同一店铺的两次扣款。
她用什么核对？|购物小票|邻居的流水|广告|0|她与自己的小票比较。
员工当场能做什么？|承诺立即退款|提供完整原因|请求凭证副本以检查|2|员工还不能解释，请她提供副本。
她如何发送资料？|公开发布全部流水|通过约定渠道只发所需信息|发送密码|1|她只按约定渠道发送必要资料。`,
'Gebühren 为费用的复数。|ankommen 的完成时用 sein。|wiedererkennen 表示辨认。|sperren lassen 表示请机构停用。|weitergeben 的 weiter 在句末。|auf dem Kontoauszug 用第三格。');
