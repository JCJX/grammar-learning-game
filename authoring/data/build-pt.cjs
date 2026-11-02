const fs=require('fs');
const chapters=[];
function add(title,goal,grammarTitle,explanation,vocab,lessons,reading,assessment,questions,writing,speaking){
 const number=chapters.length+1,id=`pt-${String(number).padStart(2,'0')}`;
 const pairs=s=>s.split('\n').filter(Boolean).map(x=>x.split('|'));
 const ls=pairs(lessons).map(([text,zh,tip],i)=>({id:`${id}-${i+1}`,text,zh,tip:tip||'先理解整句的交际目的，再替换其中的信息进行练习。'}));
 const vs=pairs(vocab).map(([head,zh,example,exampleZh,icon])=>({head,zh,example,exampleZh,icon:icon||'talk'}));
 const [rtitle,rtext,rzh]=reading;
 const [atitle,atext]=assessment;
 chapters.push({id,number,title,level:number<=6?'A1':number<=12?'A2':'B1',stage:number<=12?'beginner':'intermediate',goal,grammar:{title:grammarTitle,explanation,examples:ls.slice(0,2).map(({text,zh})=>({text,zh}))},vocab:vs,lessons:ls,dialogue:ls.slice(2,6).map(({text,zh},i)=>({speaker:i%2?'乙':'甲',text,zh})),reading:{title:rtitle,text:rtext,zh:rzh},assessment:{reading:{title:atitle,text:atext},questions:questions.map(([prompt,options,answer,explanation])=>({prompt,options,answer,explanation})),writing,speaking}});
}
add('见面与告别','能问候、自我介绍并礼貌结束短对话。','ser 的现在时与简单介绍','Sou 表示“我是”，é 可表示“您是／他是／她是”；名字常用 Chamo-me。葡萄牙语通常省略可由动词判断的人称代词。',
`bom dia|早上好|Bom dia, Ana.|早上好，安娜。|talk
boa tarde|下午好|Boa tarde, senhor Silva.|下午好，席尔瓦先生。|talk
boa noite|晚上好；晚安|Boa noite, até amanhã.|晚安，明天见。|time
olá|你好|Olá, sou a Li.|你好，我是小李。|talk
adeus|再见|Adeus, até breve.|再见，回头见。|talk
até amanhã|明天见|Até amanhã, Rui.|鲁伊，明天见。|time
nome|名字|O meu nome é Chen.|我的名字是陈。|person
prazer|幸会；高兴|Muito prazer, Ana.|很高兴认识你，安娜。|talk
obrigado / obrigada|谢谢|Obrigada pela ajuda.|谢谢你的帮助。|talk
senhor / senhora|先生／女士|A senhora é a Ana?|您是安娜女士吗？|person`,
`Bom dia, sou a Li.|早上好，我是小李。|sou 来自 ser，用于介绍身份。
O meu nome é Chen.|我的名字是陈。|meu nome 前常用定冠词 o。
Olá, chamo-me Ana. E tu?|你好，我叫安娜。你呢？|tu 适合双方接受的非正式语境。
Chamo-me Li. Muito prazer.|我叫小李。很高兴认识你。|chamo-me 是欧洲葡语常见的自我介绍方式。
Muito prazer. Até amanhã!|很高兴认识你。明天见！|até 加时间表达告别。
Até amanhã, Ana!|明天见，安娜！|与对方呼应即可。`,
['第一天的邻居',`A Li chega a uma casa em Coimbra. À porta encontra a vizinha Ana. A Li diz: «Bom dia, sou a Li.» A Ana responde com um sorriso e apresenta o marido, o Rui. Os três falam um pouco no jardim. A Li ainda sabe poucas palavras de português, mas consegue dizer o seu nome e agradecer. Antes de entrar em casa, despede-se dos vizinhos: «Até amanhã!»`,'小李来到科英布拉的一所房子。她在门口遇到邻居安娜。小李说：“早上好，我是小李。”安娜微笑着回应，并介绍她的丈夫鲁伊。三人在花园里聊了一会儿。小李懂的葡语词汇还不多，但能说自己的名字并道谢。进屋前，她向邻居告别：“明天见！”'],
['图书馆初见',`O Chen vai à biblioteca de manhã. À entrada, uma funcionária diz «Bom dia» e pergunta o nome dele. Ele responde: «Chamo-me Chen.» A funcionária chama-se Marta. Ela apresenta o colega Pedro, que está ao lado da porta. O Chen agradece e vai ler uma revista. Quando sai, ainda antes do almoço, diz «Até breve» aos dois funcionários. No dia seguinte quer voltar à biblioteca.`,],
[['陈什么时候到图书馆？',['早上','下午','晚上'],0,'文中说 de manhã。'],['工作人员玛尔塔介绍了谁？',['邻居','同事佩德罗','老师'],1,'文中说 apresenta o colega Pedro。'],['陈读了什么？',['报纸','合同','杂志'],2,'文中是 ler uma revista。'],['陈离开时说了什么？',['Até breve','Boa noite','Desculpe'],0,'文末明确写出 Até breve。']], '写四句初次见面的介绍，包括名字和告别语。','模拟在上午与新邻居初次见面，问候、报名字并告别。');
add('听不清时的礼貌求助','能请对方放慢、重复或写下词语。','礼貌请求与否定','Pode + 动词原形构成礼貌请求。não 放在变位动词前表示否定。欧洲葡语的词尾元音常较弱，初学时可主动要求书面提示。',
`desculpe|劳驾；对不起|Desculpe, não percebi.|不好意思，我没听明白。|talk
repetir|重复|Pode repetir?|您能重复一下吗？|talk
devagar|慢慢地|Fale mais devagar, por favor.|请说慢一点。|talk
perceber|听懂；理解|Não consigo perceber esta palavra.|我听不懂这个词。|idea
escrever|写|Pode escrever o nome?|您能写下名字吗？|study
palavra|词|Esta palavra é nova.|这个词是新的。|study
letra|字母|Qual é a primeira letra?|第一个字母是什么？|study
som|声音|Este som é difícil para mim.|这个音对我来说很难。|study
por favor|请|Uma informação, por favor.|请提供一条信息。|talk
como|如何；怎么|Como se diz isto?|这个怎么说？|talk`,
`Pode repetir, por favor?|请您重复一下好吗？|pode 后用原形 repetir。
Não percebi a última palavra.|我没听明白最后一个词。|percebi 表示刚才理解了；加 não 否定。
Desculpe, como se escreve o seu nome?|不好意思，您的名字怎么拼写？|seu 可用于礼貌地指对方。
Escreve-se Sara, com esse.|写作 Sara，用字母 s。|esse 是字母 s 的名称。
Pode falar mais devagar?|您能说慢一点吗？|mais devagar 意为更慢一些。
Claro. Vou repetir o nome.|当然。我会把名字再说一遍。|vou + 原形可表达即将做的事。`,
['在接待处',`O Chen está na receção de uma escola. A funcionária diz o nome da professora, mas ele não percebe a última palavra. Pede para ela falar mais devagar. A funcionária repete o nome e escreve-o num papel. O Chen lê o papel e pergunta como se diz uma letra. Depois agradece. Em casa, ouve uma gravação curta e repete as palavras sem tentar falar muito depressa.`,'陈在一所学校的接待处。工作人员说出老师的名字，但他没听懂最后一个词。他请她说慢一点。工作人员重复名字，并把它写在一张纸上。陈看了纸条，问一个字母怎么读。然后他道谢。回家后，他听一段简短录音，重复词语，不急着说得很快。'],
['确认街道名称',`A Mei procura uma loja numa rua desconhecida. Pergunta o caminho a um senhor, mas o nome da rua é novo para ela. A Mei pede para ele repetir mais devagar. O senhor escreve «Rua da Escola» num papel e aponta para a direita. Ela lê o nome e agradece. Antes de continuar, compara o papel com o mapa do telemóvel. A loja fica perto de uma escola.`],
[['梅不熟悉什么？',['商店营业时间','街道名称','手机品牌'],1,'文中说 o nome da rua é novo para ela。'],['那位先生把什么写在纸上？',['姓名','电话号码','Rua da Escola'],2,'纸上写的是 Rua da Escola。'],['他指向哪个方向？',['右边','左边','后面'],0,'aponta para a direita 表示指向右边。'],['梅用什么核对纸条？',['课本','手机地图','收据'],1,'文中说 compara o papel com o mapa do telemóvel。']], '写一段三句的求助信息：说明没听懂，请求慢说并请对方写下名称。','模拟询问陌生词语的拼写，并重复确认你听到的内容。');
add('个人资料与联系方式','能提供国籍、居住地和联系方式。','ser、morar 和 ter','ser 说明身份，morar em 说明居住地点，ter 可表达年龄。em 与定冠词合成 no、na，例如 no Porto。',
`nacionalidade|国籍|Qual é a sua nacionalidade?|您的国籍是什么？|person
chinês / chinesa|中国人；中国的|Sou chinesa.|我是中国人。|person
morar|居住|Moro em Lisboa.|我住在里斯本。|home
idade|年龄|Qual é a sua idade?|您的年龄是多少？|person
anos|岁；年|Tenho vinte anos.|我二十岁。|time
morada|住址|Esta é a minha morada.|这是我的住址。|home
telemóvel|手机|O meu telemóvel está aqui.|我的手机在这里。|talk
correio eletrónico|电子邮件|Qual é o seu correio eletrónico?|您的电子邮箱是什么？|talk
apelido|姓氏|O meu apelido é Wang.|我姓王。|person
país|国家|De que país é?|您来自哪个国家？|travel`,
`Sou chinesa e moro em Lisboa.|我是中国人，住在里斯本。|女性可用 chinesa，男性可用 chinês。
Tenho vinte e oito anos.|我二十八岁。|年龄用 ter，不用 ser。
Qual é o seu apelido?|您的姓是什么？|葡萄牙语的 apelido 指姓氏。
O meu apelido é Wang.|我姓王。|回答可以保留自己的姓名顺序并解释。
E qual é a sua morada?|那您的住址是什么？|morada 表示通讯或居住地址。
Moro na Rua Nova, no número dez.|我住在新街十号。|na = em + a；no = em + o。`,
['填写报名资料',`A Wang vai a um curso de português no Porto. Na ficha escreve o nome completo, a nacionalidade e a morada. Tem vinte e oito anos e mora com uma amiga numa rua perto da escola. A professora pede também um contacto para enviar informações sobre as aulas. A Wang prefere dar o correio eletrónico. Antes de entregar a ficha, confirma todas as letras do apelido e verifica o endereço.`,'王去波尔图参加葡语课程。她在表格上填写全名、国籍和住址。她二十八岁，与一位朋友住在学校附近的一条街上。老师还要一个联系方式，以便发送课程信息。王更愿意提供电子邮箱。交表前，她确认姓氏的所有字母，并检查地址。'],
['新同学的资料',`O Liu inscreve-se num curso de desenho em Braga. Tem trinta anos e é chinês. Na ficha escreve o nome e a morada da casa onde vive com o irmão. Para receber os horários, deixa o endereço de correio eletrónico. Não escreve o número de telemóvel porque prefere mensagens por email. A funcionária pede-lhe que confirme o apelido. O Liu verifica a ficha e entrega-a no balcão.`],
[['刘报名学习什么？',['葡语','音乐','绘画'],2,'curso de desenho 指绘画课程。'],['刘与谁同住？',['兄弟','老师','同事'],0,'vive com o irmão 表示与兄弟同住。'],['他希望如何收到课表？',['电话','电子邮件','纸质信件'],1,'他留下邮箱以接收 horários。'],['工作人员请他确认什么？',['年龄','房租','姓氏'],2,'文中为 confirme o apelido。']], '用虚构资料填写六行信息：姓名、国籍、年龄、城市、住址和邮箱。','用五句话介绍自己，再询问对方的居住城市与联系方式。');
add('数字、日期与时间','能听懂简单价格、预约日期和钟点。','钟点表达与疑问词','问时间用 Que horas são?；一点用 É uma hora，其余通常用 São。活动发生在某时用 à / às，例如 às duas。',
`hora|小时；钟点|A que hora começa?|几点开始？|time
hoje|今天|Hoje tenho uma aula.|今天我有一节课。|time
amanhã|明天|Amanhã é sábado.|明天是星期六。|time
segunda-feira|星期一|A aula é na segunda-feira.|课在星期一。|time
manhã|上午|Trabalho de manhã.|我上午工作。|time
tarde|下午|Estudo à tarde.|我下午学习。|time
minuto|分钟|Espere um minuto.|请等一分钟。|time
meia|半点|São duas e meia.|现在两点半。|time
quanto|多少|Quanto custa o bilhete?|票多少钱？|money
data|日期|Qual é a data da visita?|参观日期是哪天？|time`,
`São nove horas e dez minutos.|现在是九点十分。|复数钟点使用 são。
A aula começa à uma da tarde.|课在下午一点开始。|à uma 表示在一点。
A visita é amanhã?|参观是在明天吗？|语调可将陈述句变为问句。
Sim, às dez e meia.|是的，十点半。|meia 在这里省略了 hora。
Quanto custa o bilhete?|票多少钱？|quanto custa 用来问单件物品的价格。
Custa oito euros.|八欧元。|欧元复数为 euros。`,
['周六的安排',`É sexta-feira e a Li organiza o dia seguinte. De manhã quer visitar um museu com o Rui. A visita começa às dez e meia e o bilhete custa oito euros. Combinam encontrar-se à porta às dez e vinte. Depois do almoço, a Li tem uma aula às três da tarde. Escreve as horas no caderno para não se esquecer e prepara o dinheiro para o bilhete do museu.`,'星期五，小李在安排第二天的活动。上午她想和鲁伊参观博物馆。参观十点半开始，门票八欧元。他们约好十点二十分在门口见面。午饭后，小李下午三点有课。她把时间写在笔记本上，以免忘记，并准备好买博物馆门票的钱。'],
['周日的音乐活动',`No domingo, o Chen quer ouvir música num jardim. O concerto começa às quatro da tarde e termina às cinco e meia. A entrada custa seis euros. Ele combina encontrar-se com a Marta às três e quarenta, junto ao café do jardim. De manhã fica em casa a estudar. Antes de sair, consulta a hora no telemóvel e leva uma garrafa de água. Não precisa de levar uma cadeira.`],
[['音乐会几点开始？',['下午四点','下午三点四十分','下午五点半'],0,'开始时间为 às quatro da tarde。'],['门票多少钱？',['八欧元','六欧元','十欧元'],1,'entrada custa seis euros。'],['他们在哪里见面？',['车站门口','陈家里','花园咖啡馆旁'],2,'junto ao café do jardim 指花园咖啡馆旁。'],['陈上午做什么？',['在家学习','买椅子','听音乐会'],0,'De manhã fica em casa a estudar。']], '写明天的三项安排，每项包括时间；再写一个虚构票价。','询问一场活动的日期、开始时间、会面时间和价格。');
add('在咖啡馆点单','能点简单饮食并核对账单。','querer 与礼貌点单','Queria… 常用于较委婉的点单；Quero… 也能表达想要。数量加名词，um café、duas águas；带气或不带气可用 com gás / sem gás。',
`café|咖啡|Queria um café.|我想要一杯咖啡。|food
água|水|Uma água sem gás, por favor.|请给我一瓶不带气的水。|food
chá|茶|Tem chá de limão?|有柠檬茶吗？|food
pão|面包|Queria pão com queijo.|我想要夹奶酪的面包。|food
queijo|奶酪|Este queijo é suave.|这种奶酪味道温和。|food
tosta|烤三明治|A tosta está quente.|烤三明治是热的。|food
leite|牛奶|O café leva leite?|咖啡里有牛奶吗？|food
conta|账单|A conta, por favor.|请结账。|money
sem gás|不带气|Prefiro água sem gás.|我更喜欢不带气的水。|food
esplanada|露天座位区|Há lugar na esplanada?|露天座位区有位置吗？|home`,
`Queria um café e uma tosta.|我想要一杯咖啡和一份烤三明治。|queria 可让点单更委婉。
Tem água sem gás?|有不带气的水吗？|tem 可用于问店里是否供应。
Bom dia. O que deseja?|早上好。您想要什么？|des ejar 的变位 deseja 用于询问需求。
Queria um chá e pão com queijo.|我想要一杯茶和夹奶酪的面包。|com 表示搭配或含有。
É para aqui ou para levar?|在这里吃还是带走？|para levar 是外带的常见表达。
É para aqui, obrigada.|在这里吃，谢谢。|说话者为女性时通常用 obrigada。`,
['露台上的早餐',`A Mei toma o pequeno-almoço num café perto de casa. Escolhe uma mesa na esplanada e pede um chá e pão com queijo. O empregado pergunta se quer mais alguma coisa. Ela pede também uma água sem gás. Enquanto espera, lê a ementa e aprende duas palavras novas. No fim, pede a conta e confirma os três produtos. Paga e agradece antes de voltar para casa a pé.`,'梅在家附近的一家咖啡馆吃早餐。她选了露天座位区的一张桌子，点了一杯茶和夹奶酪的面包。服务员问她还要别的东西吗。她又要了一瓶不带气的水。等待时，她看菜单，学了两个新词。最后她要账单，核对了三样东西。她付款并道谢，然后步行回家。'],
['外带午点',`O Rui entra num café depois do trabalho. Pede uma tosta e um café para levar, porque vai encontrar a irmã no parque. A empregada pergunta se ele quer uma bebida fria. O Rui escolhe uma água com gás. Quando recebe o saco, verifica que falta a tosta e avisa a empregada. Ela traz a tosta e pede desculpa. O Rui paga e segue para o parque.`],
[['鲁伊为什么选择外带？',['要回办公室','要去公园见姐妹','店里没有座位'],1,'他要在公园见 irmã。'],['他点了哪种水？',['热水','不带气的水','带气的水'],2,'文中说 água com gás。'],['袋子里最初少了什么？',['烤三明治','咖啡','水'],0,'falta a tosta 表示缺少烤三明治。'],['服务员随后怎么做？',['让他重新点单','补上食物并道歉','关店'],1,'她拿来 tosta 并 pede desculpa。']], '写一份三样物品的点单，并注明堂食或外带。','模拟点一杯饮品和一份食物，询问是否含奶，最后要账单。');
add('超市购物','能找商品、问数量和确认付款方式。','数量表达与指示词','um quilo de… 表示一公斤；este/esta 指较近的单数事物，estes/estas 为复数。名词与形容词通常保持性数一致。',
`supermercado|超市|Vou ao supermercado.|我要去超市。|food
fruta|水果|A fruta fica ali.|水果在那边。|food
maçã|苹果|Queria duas maçãs.|我想要两个苹果。|food
arroz|大米|Este arroz é barato.|这种大米便宜。|food
quilo|公斤|Quero um quilo de batatas.|我要一公斤土豆。|food
saco|袋子|Preciso de um saco.|我需要一个袋子。|home
caixa|收银台；箱子|A caixa está aberta.|收银台开放着。|money
cartão|卡|Posso pagar com cartão?|我能用卡付款吗？|money
dinheiro|现金；钱|Vou pagar em dinheiro.|我要用现金付款。|money
talão|小票|Pode dar-me o talão?|能给我小票吗？|money`,
`Queria um quilo de maçãs.|我想要一公斤苹果。|重量后接 de 加商品名。
Estas maçãs são portuguesas.|这些苹果是葡萄牙产的。|estas、maçãs、portuguesas 都为阴性复数。
Desculpe, onde está o arroz?|劳驾，大米在哪里？|onde está 用于寻找位置。
Está ao lado da massa.|在意大利面旁边。|ao lado de 表示在旁边。
Posso pagar com cartão?|我可以用卡付款吗？|posso + 原形询问能否做某事。
Sim. Quer um saco?|可以。您要袋子吗？|购物时可直接用 quer 询问需求。`,
['带着清单购物',`A Li leva uma lista para o supermercado: arroz, leite, maçãs e pão. Primeiro procura a fruta e escolhe um quilo de maçãs portuguesas. Não encontra o arroz e pede ajuda a uma funcionária. Depois vai à caixa com os quatro produtos. Traz um saco de casa e paga com cartão. Guarda o talão na carteira para poder conferir a compra quando chegar a casa depois das aulas.`,'小李带着清单去超市：大米、牛奶、苹果和面包。她先找到水果，选了一公斤葡萄牙产苹果。她没找到大米，向一位工作人员求助。然后她带着四样商品去收银台。她自己带了袋子，用卡付款。她把小票放进钱包，准备上完课到家后核对购物情况。'],
['一次晚间购物',`A Sara vai ao supermercado à noite. Quer comprar batatas, queijo e água. As batatas estão perto dos legumes, mas ela não encontra o queijo. Um funcionário mostra-lhe a zona dos produtos frescos. Na caixa, a Sara pede um saco porque deixou o seu em casa. Paga em dinheiro e guarda o talão. Ao sair, confirma que comprou os três produtos da lista e telefona ao irmão.`],
[['萨拉找不到哪样商品？',['土豆','水','奶酪'],2,'文中为 não encontra o queijo。'],['奶酪位于哪个区域？',['生鲜区','收银台旁','面包区'],0,'工作人员指给她 zona dos produtos frescos。'],['她为什么要袋子？',['买了太多水果','自己的袋子忘在家','袋子坏了'],1,'deixou o seu em casa 表示忘在家里。'],['她如何付款？',['银行卡','手机','现金'],2,'Paga em dinheiro。']], '写一份五样商品的清单，其中两样带数量，再写两句结账用语。','向店员询问商品位置，购买一定重量的水果，并询问能否刷卡。');
add('问路与方位','能询问附近地点并确认步行路线。','位置介词与 ir','perto de、longe de 表示远近；à direita、à esquerda 表示左右。到某地点常用 ir a，a 与 o/a 可合成 ao/à。',
`rua|街道|Esta rua é estreita.|这条街很窄。|travel
praça|广场|A praça fica perto.|广场很近。|travel
ponte|桥|A ponte está à esquerda.|桥在左边。|travel
à direita|向右；在右边|Vire à direita.|请右转。|travel
à esquerda|向左；在左边|Vire à esquerda.|请左转。|travel
em frente|向前；前面|Siga em frente.|请一直向前走。|travel
perto|近|O banco fica perto.|银行很近。|travel
longe|远|A estação fica longe.|车站很远。|travel
mapa|地图|Pode mostrar no mapa?|能在地图上指出来吗？|travel
a pé|步行|Vou a pé.|我步行去。|travel`,
`A farmácia fica perto da praça.|药房在广场附近。|de 与 a 合成 da。
Vou ao mercado a pé.|我步行去市场。|ao = a + o。
Desculpe, como vou para a biblioteca?|劳驾，去图书馆怎么走？|como vou para 用于问路线。
Siga em frente até à praça.|一直向前走到广场。|até à 表示到达某处为止。
Depois viro à direita?|然后我右转吗？|可复述路线确认理解。
Sim, a biblioteca fica ao lado do café.|对，图书馆在咖啡馆旁边。|ao lado do = ao lado de + o。`,
['走到市场',`O Chen quer ir ao mercado, mas ainda não conhece bem o bairro. Na rua pergunta o caminho a uma senhora. Ela diz para seguir em frente até à praça e depois virar à esquerda. O mercado fica ao lado de uma padaria. O Chen repete as indicações para confirmar e mostra o mapa. Como o caminho é curto, decide ir a pé e guardar o telemóvel no bolso.`,'陈想去市场，但还不熟悉这个街区。他在街上向一位女士问路。她说一直走到广场，然后左转。市场在一家面包店旁边。陈复述路线以确认，并拿出地图。因为路很短，他决定步行，把手机放进口袋。'],
['去邮局的路线',`A Mei precisa de encontrar os correios. Um rapaz explica que deve seguir pela rua principal até à ponte. Depois da ponte, tem de virar à direita. Os correios ficam em frente a um jardim, entre uma papelaria e um café. A Mei confirma a direção e pergunta se pode ir a pé. O rapaz diz que o caminho demora cerca de dez minutos. Ela agradece e continua.`],
[['梅首先要走到哪里？',['桥','公园','咖啡馆'],0,'先沿主街走到桥。'],['过桥后往哪边转？',['左边','右边','回头'],1,'Depois da ponte… virar à direita。'],['邮局对面是什么？',['文具店','车站','花园'],2,'em frente a um jardim 表示在花园对面。'],['步行大约多久？',['十分钟','半小时','一小时'],0,'cerca de dez minutos。']], '写四步从一个虚构广场到图书馆的路线，包括左右和地标。','模拟问路，并用自己的话重复路线以确认。');
add('公交与火车','能查询车次、购票并核对站台。','ter de 与时间范围','ter de + 动词原形表示需要做某事。de… a… 表示起终点；交通方式常用 de autocarro、de comboio。不同运营方规则需现场核对。',
`autocarro|公交车；长途客车|Vou de autocarro.|我乘公交车去。|travel
comboio|火车|O comboio chega cedo.|火车很早到。|travel
bilhete|票|Preciso de um bilhete.|我需要一张票。|travel
ida|去程|Queria um bilhete de ida.|我想要一张单程票。|travel
volta|回程|A volta é amanhã.|回程是明天。|travel
paragem|公交站|Onde fica a paragem?|公交站在哪里？|travel
estação|火车站；站|A estação está aberta.|车站开着。|travel
linha|线路；股道|Qual é a linha?|是哪条线路／股道？|travel
atraso|延误|Há um atraso de dez minutos.|延误十分钟。|time
validar|验票；使票生效|Onde tenho de validar o bilhete?|我要在哪里验票？|travel`,
`Tenho de mudar de comboio?|我需要换乘火车吗？|ter de 表示有必要。
+Vou de autocarro até à estação.|我乘公交车到火车站。|交通工具前通常不用冠词。
Queria um bilhete para Coimbra.|我想买一张去科英布拉的票。|para 引出目的地。
Só de ida ou de ida e volta?|单程还是往返？|ida e volta 是往返。
Só de ida. De que linha sai?|单程。从哪条股道出发？|按现场用词核对股道或站台。
Sai da linha três; confirme no painel.|从三号股道出发；请在显示屏上确认。|出发信息可能变化，需再次核对。`.replace('\n+','\n'),
['去邻城',`A Li vai visitar uma amiga em Aveiro. Na estação compra um bilhete de ida e volta e pergunta se tem de mudar de comboio. O funcionário explica o percurso e pede que confirme a linha no painel. A Li consulta também a hora da volta. Antes de entrar, pergunta onde deve validar o bilhete. Guarda o bilhete durante a viagem e envia uma mensagem à amiga quando chega.`,'小李要去阿威罗看朋友。她在车站买了一张往返票，询问是否需要换乘火车。工作人员说明路线，让她在显示屏上确认股道。小李还查询回程时间。上车前，她询问应在哪里验票。旅途中她保管好票，到达后给朋友发消息。'],
['出发时间变化',`O Rui quer ir de Braga ao Porto de comboio. Compra apenas a ida, pois ainda não sabe quando volta. O painel indica um atraso de quinze minutos. Ele pergunta a uma funcionária se a linha continua a ser a mesma. Ela confirma a linha dois e pede-lhe que acompanhe as informações no painel. O Rui avisa o colega de que vai chegar mais tarde e espera junto à linha indicada.停`.replace('停','')],
[['鲁伊买了什么票？',['往返票','单程票','月票'],1,'compra apenas a ida 表示只买去程。'],['延误多久？',['五分钟','半小时','十五分钟'],2,'atraso de quinze minutos。'],['工作人员确认哪条股道？',['二号','三号','一号'],0,'文中为 linha dois。'],['鲁伊通知了谁？',['医生','同事','房东'],1,'avisa o colega。']], '写一条给朋友的信息：交通方式、目的地、出发时间及延误情况。','模拟购票，询问是否换乘、去程或往返以及股道信息。');
add('住宿与入住','能核对预订、说明基本需求并询问设施。','há 与 estar','há 表示存在，不随后面名词的复数变化；estar 表示某人或物目前的位置和状态。预订条件以住宿方确认为准。',
`reserva|预订|Tenho uma reserva.|我有预订。|home
quarto|房间|O quarto fica no segundo andar.|房间在三楼。|home
chave|钥匙|Aqui está a chave.|钥匙在这里。|home
casa de banho|卫生间|Há casa de banho no quarto?|房间里有卫生间吗？|home
pequeno-almoço|早餐|O pequeno-almoço está incluído?|包含早餐吗？|food
andar|楼层|Em que andar fica?|在第几层？|home
receção|接待处|A receção fica à entrada.|接待处在入口处。|home
mala|行李箱|Posso deixar a mala aqui?|我能把行李箱留在这里吗？|travel
incluído|包含在内的|O jantar não está incluído.|晚餐不包含在内。|money
saída|离开；退房|A saída é às onze.|退房时间是十一点。|time`,
`Há uma toalha no quarto.|房间里有一条毛巾。|há 用于说明存在。
A chave está na receção.|钥匙在接待处。|estar 用于说明位置。
Boa tarde, tenho uma reserva em nome de Li.|下午好，我有一个以李为名的预订。|em nome de 指以某人的名义。
Sim, são duas noites, certo?|是的，住两晚，对吗？|用 certo 请求核对。
Sim. O pequeno-almoço está incluído?|对。包含早餐吗？|incluído 随被修饰名词变化。
Está incluído e começa às oito.|包含，八点开始。|省略上下文已明确的主语。`,
['两晚短住',`A Mei chega a um alojamento em Évora ao fim da tarde. Na receção confirma uma reserva de duas noites. O quarto fica no primeiro andar e tem uma casa de banho pequena. O funcionário entrega a chave e explica o horário do pequeno-almoço. A Mei pergunta a que horas deve sair no último dia. Depois pede para deixar a mala na receção durante algumas horas, se houver espaço disponível.`,'梅傍晚到达埃武拉的一处住宿。她在接待处确认住两晚的预订。房间在二楼，有一个小卫生间。工作人员交给她钥匙，说明早餐时间。梅询问最后一天应几点退房。随后她问，如果有空余地方，能否把行李箱寄放在接待处几个小时。'],
['住宿信息确认',`O Chen chega a uma pensão em Viseu com uma reserva para três noites. A rececionista informa que o quarto fica no rés do chão. O pequeno-almoço não está incluído no preço, mas pode ser pedido no café ao lado. O Chen pergunta pela ligação à internet e recebe um papel com a palavra-passe. Antes de subir para descansar, confirma que a saída está prevista para as dez da manhã.`.replace('subir para descansar','ir descansar')],
[['陈住几晚？',['一晚','两晚','三晚'],2,'reserva para três noites。'],['房间在哪层？',['底层','二楼','三楼'],0,'rés do chão 指底层。'],['早餐在哪里可以点？',['房间里','旁边的咖啡馆','车站'],1,'no café ao lado。'],['陈拿到的纸条上有什么？',['火车时刻','菜单','网络密码'],2,'papel com a palavra-passe。']], '写一封简短住宿询问信，询问房间、早餐、退房时间及行李寄存。','模拟到达接待处，报预订姓名并确认两项住宿服务。');
add('家居与日常作息','能描述住处、家务及日常时间安排。','现在时与频率','规则 -ar 动词第一人称单数通常以 -o 结尾，如 trabalho。todos os dias 表示每天；às vezes 表示有时。levantar-se 等反身动词在肯定句中常后接代词。',
`cozinha|厨房|A cozinha é pequena.|厨房很小。|home
sala|客厅|Estudo na sala.|我在客厅学习。|home
janela|窗户|Abro a janela.|我打开窗户。|home
limpar|打扫|Vou limpar a cozinha.|我要打扫厨房。|home
lavar|洗|Preciso de lavar a roupa.|我需要洗衣服。|home
cozinhar|做饭|Gosto de cozinhar.|我喜欢做饭。|food
levantar-se|起床|Levanto-me às sete.|我七点起床。|time
deitar-se|上床睡觉|Deito-me cedo.|我很早上床睡觉。|time
às vezes|有时|Às vezes almoço em casa.|我有时在家吃午饭。|time
todos os dias|每天|Leio todos os dias.|我每天读书。|study`,
`Levanto-me às sete todos os dias.|我每天七点起床。|肯定句中 me 接在变位动词后。
Às vezes cozinho com uma amiga.|我有时和一位朋友做饭。|às vezes 表示不固定的频率。
A que horas usas a cozinha?|你几点用厨房？|usar 的 tu 形式为 usas。
Costumo cozinhar às sete da noite.|我通常晚上七点做饭。|costumar + 原形表示习惯。
Posso lavar a roupa depois do jantar?|我能晚饭后洗衣服吗？|depois de 表示在某事之后。
Sim, eu limpo a cozinha entretanto.|可以，我同时打扫厨房。|entretanto 在这里表示在这期间。`,
['合住的一天',`A Li e a Ana partilham uma casa em Setúbal. A Li levanta-se cedo e toma o pequeno-almoço na cozinha. A Ana trabalha à tarde e costuma estudar de manhã na sala. Para organizarem a casa, escrevem uma lista de tarefas. A Li lava a roupa à quarta-feira e a Ana limpa a cozinha ao sábado. Às vezes cozinham juntas ao domingo e abrem as janelas depois do almoço.`,'小李和安娜在塞图巴尔合住一所房子。小李很早起床，在厨房吃早餐。安娜下午工作，通常上午在客厅学习。为了安排家务，她们列出任务清单。小李周三洗衣服，安娜周六打扫厨房。她们有时周日一起做饭，午饭后开窗。'],
['不同的作息',`O Liu vive com o Pedro num apartamento pequeno. O Liu trabalha de manhã e sai de casa às oito. O Pedro tem aulas à noite e costuma levantar-se às nove. Durante a semana, cada um prepara o seu almoço. Ao sábado, fazem as compras juntos. O Liu limpa a sala enquanto o Pedro lava a roupa. Depois combinam cozinhar uma sopa para o jantar e deixam a cozinha arrumada.`],
[['刘几点出门？',['八点','九点','晚上'],0,'sai de casa às oito。'],['佩德罗什么时候上课？',['上午','晚上','周日中午'],1,'tem aulas à noite。'],['谁洗衣服？',['刘','邻居','佩德罗'],2,'Pedro lava a roupa。'],['两人准备晚饭做什么？',['汤','烤鱼','三明治'],0,'cozinhar uma sopa para o jantar。']], '写六句你的虚构日常作息，至少用两个频率表达和两项家务。','与室友商量厨房和洗衣时间，并分配两项家务。');
add('药房与就医求助','能简述不适并询问适当的服务途径。','doer 与 há 表示持续时间','Dói-me a cabeça 表示“我头痛”，复数部位用 doem。há dois dias 表示已持续两天。本课练习表达与求助，不提供诊断、用药方案或固定服务资格判断。',
`farmácia|药房|Onde fica a farmácia?|药房在哪里？|health
dor|疼痛|Tenho uma dor no braço.|我手臂疼。|health
cabeça|头|Dói-me a cabeça.|我头疼。|health
febre|发热|Tenho febre desde ontem.|我从昨天开始发热。|health
tosse|咳嗽|Tenho tosse.|我咳嗽。|health
alergia|过敏|Tenho uma alergia conhecida.|我有已知的过敏情况。|health
medicamento|药物|Tomo este medicamento.|我在服用这个药。|health
consulta|就诊；咨询|Queria marcar uma consulta.|我想预约就诊。|health
ajuda|帮助|Preciso de ajuda.|我需要帮助。|health
urgente|紧急的|Preciso de ajuda urgente.|我需要紧急帮助。|health`,
`Dói-me a garganta há dois dias.|我喉咙痛两天了。|há 加时长说明持续时间。
Tenho uma alergia a este medicamento.|我对这种药过敏。|已知过敏情况应清楚表达。
Bom dia, precisava de uma informação.|早上好，我想咨询一下。|precisava 可用于委婉请求。
Diga, em que posso ajudar?|请说，我能怎样帮您？|固定问句用于邀请说明需求。
Tenho tosse e queria saber onde posso pedir orientação.|我咳嗽，想知道可以在哪里寻求指导。|说明需求并寻求专业人员指引。
Podemos falar com a farmacêutica.|我们可以跟药剂师谈谈。|本句是对话安排，不是治疗建议。`,
['先说明情况',`O Chen entra numa farmácia porque tem uma dúvida sobre um medicamento que já toma. Leva a embalagem e uma lista das suas alergias conhecidas. Diz à farmacêutica há quanto tempo sente desconforto e pergunta onde pode obter orientação adequada. Não compreende uma palavra e pede que a escrevam. Antes de sair, confirma o que foi explicado. Se precisar de outra avaliação, quer saber como contactar um serviço de saúde.`,'陈走进药房，因为他对正在服用的一种药有疑问。他带着包装和已知过敏清单。他告诉药剂师不适持续了多久，并询问在哪里能得到适当指导。有一个词他没听懂，请对方写下来。离开前，他确认了刚才的说明。如果需要进一步评估，他想知道怎样联系医疗服务。'],
['打电话询问预约',`A Mei telefona para uma clínica para perguntar como pode marcar uma consulta. Diz que tem uma dor no ombro há três dias. A rececionista pergunta o nome e explica que precisa de confirmar os horários disponíveis. A Mei pede que enviem a informação por escrito, porque não percebeu tudo ao telefone. Ela tem consigo uma lista dos medicamentos que toma. A conversa termina com a confirmação do seu endereço de email.`],
[['梅哪里痛？',['头部','肩膀','喉咙'],1,'dor no ombro 为肩膀痛。'],['症状持续多久？',['一天','一周','三天'],2,'há três dias。'],['她为什么要求书面信息？',['电话里未全听懂','不愿提供姓名','没有手机'],0,'文中为 não percebeu tudo ao telefone。'],['通话最后确认什么？',['付款金额','电子邮箱','检查结果'],1,'confirmação do seu endereço de email。']], '写一段向专业人员说明不适的文字，含部位、开始时间、已知过敏及求助问题；不要自行给出诊断。','模拟致电询问就诊预约方式，并要求重复或书面确认信息。');
add('朋友、邀请与婉拒','能提出邀请、协商时间并礼貌拒绝。','gostar de 与 poder','gostar de 后接名词或动词原形；podes / pode 表示能否。Gostava de… 可委婉表达愿望。拒绝时可先感谢，再简述原因并提出其他时间。',
`amigo / amiga|朋友|A Ana é minha amiga.|安娜是我的朋友。|person
convidar|邀请|Quero convidar o Rui.|我想邀请鲁伊。|talk
jantar|晚餐；吃晚饭|Vamos jantar juntos?|我们一起吃晚饭好吗？|food
passear|散步；逛|Gosto de passear.|我喜欢散步。|nature
livre|有空的|Estás livre amanhã?|你明天有空吗？|time
ocupado / ocupada|忙的|Estou ocupada hoje.|我今天很忙。|work
combinar|约定|Podemos combinar outra hora.|我们可以另约时间。|talk
talvez|也许|Talvez no domingo.|也许周日。|idea
pena|遗憾|Que pena!|真遗憾！|talk
aceitar|接受|Obrigada por aceitar o convite.|谢谢您接受邀请。|talk`,
`Gosto de passear junto ao rio.|我喜欢在河边散步。|gostar 后保留介词 de。
+Gostava de te convidar para jantar.|我想邀请你吃晚饭。|gostava de 使语气更委婉。
Queres ir ao cinema no sábado?|你想周六去看电影吗？|queres 是 tu 的变位形式。
Obrigada, mas no sábado trabalho.|谢谢，但周六我工作。|先感谢，再说明不方便的原因。
E no domingo, estás livre?|那周日呢，你有空吗？|可提出具体的替代时间。
Sim, podemos combinar às cinco.|有空，我们可以约五点。|用具体时间确认邀请。`.replace('\n+','\n'),
['改到星期日',`A Li quer convidar a Ana para um passeio junto ao rio no sábado. A Ana agradece, mas nesse dia tem de trabalhar até tarde. Propõe o domingo à tarde. A Li aceita e sugere que se encontrem às quatro, perto da ponte. As duas combinam levar água e fazer um passeio curto. Se estiver a chover, preferem encontrar-se num café e conversar um pouco antes de voltar para casa.`,'小李想邀请安娜周六沿河散步。安娜感谢她，但那天要工作到很晚。她提议周日下午。小李同意，建议四点在桥附近见面。两人约定带水，散步一小段。如果下雨，她们更愿意在咖啡馆见面，聊一会儿再回家。'],
['晚餐邀请',`O Pedro convida o Liu para jantar em sua casa na sexta-feira. O Liu agradece, mas explica que tem uma aula nesse dia. Pergunta se o jantar pode ser no sábado. O Pedro concorda e propõe as oito da noite. O Liu aceita e pergunta se deve levar alguma coisa. O Pedro pede apenas fruta. Antes de terminar a conversa, envia a morada por mensagem para facilitar a chegada.`],
[['刘为什么不能周五去？',['要旅行','有工作会议','有课'],2,'tem uma aula nesse dia。'],['最后约在何时？',['周六晚八点','周五晚八点','周日下午四点'],0,'sábado… oito da noite。'],['佩德罗请刘带什么？',['面包','水果','饮料'],1,'pede apenas fruta。'],['佩德罗最后发送什么？',['账单','菜单','地址'],2,'envia a morada por mensagem。']], '写一条婉拒邀请的信息：感谢、简述原因并提出一个替代时间。','邀请朋友参加活动；听到对方拒绝后，协商新的日期和时间。');
add('租房与合同问题','能询问租金、费用、期限及需进一步确认的条款。','间接疑问句','Pode explicar se… / Gostava de saber quando… 可把问题嵌入请求中。使用陈述语序。租约词语用于理解和提问，不构成法律意见；具体义务应查阅实际文件并寻求合适的专业解释。',
`renda|租金|A renda inclui água?|租金包含水费吗？|money
contrato|合同|Quero ler o contrato.|我想阅读合同。|home
caução|押金|Qual é o valor da caução?|押金金额是多少？|money
prazo|期限|O prazo está escrito aqui.|期限写在这里。|time
senhorio / senhoria|房东|Vou falar com a senhoria.|我要和女房东谈谈。|person
inquilino / inquilina|租客|O inquilino pediu uma cópia.|租客要了一份副本。|person
despesa|费用；开支|Que despesas estão incluídas?|包含哪些费用？|money
reparação|维修|Quem trata desta reparação?|谁负责这项维修？|home
cláusula|条款|Não percebo esta cláusula.|我不理解这一条款。|study
cópia|副本|Posso ficar com uma cópia?|我能留一份副本吗？|home`,
`Gostava de saber se a água está incluída.|我想知道是否包含水费。|se 引出是否的问题。
Pode explicar quando termina o contrato?|您能解释合同何时结束吗？|间接问句保持通常语序。
Antes de decidir, queria esclarecer as despesas.|决定前，我想弄清费用。|antes de 加原形说明先后顺序。
A eletricidade é paga à parte.|电费另付。|à parte 表示另外计算。
Pode enviar-me essa informação por escrito?|您能把这项信息以书面形式发给我吗？|请求留存可复核的信息。
Sim, envio uma proposta para poder ler com calma.|可以，我发一份方案，让您从容阅读。|para poder 说明目的。`,
['看房之后',`Depois de visitar um apartamento, a Mei recebe uma proposta de arrendamento. A casa parece adequada, mas ela tem dúvidas sobre as despesas e o prazo. Envia perguntas à senhoria e pede uma cópia do documento para ler com calma. Quer também saber como são comunicados os problemas da casa. Uma amiga ajuda-a com o vocabulário. Se uma cláusula continuar pouco clara, a Mei pretende pedir esclarecimento profissional antes de tomar uma decisão.`,'看过一套公寓后，梅收到一份租赁方案。房子看起来合适，但她对费用和期限有疑问。她给房东发问题，并要一份文件副本，以便从容阅读。她还想知道如何报告房屋问题。一位朋友帮她理解词汇。如果某项条款仍不清楚，梅打算在作决定前寻求专业解释。'],
['比较两份方案',`O Chen compara dois quartos. O primeiro tem uma renda mais baixa, mas a proposta não esclarece as despesas da internet. O segundo inclui internet e fica mais perto do trabalho. O Chen pede ao primeiro senhorio informação por escrito sobre os custos e o prazo. Ainda não escolheu nenhum quarto. Quer ler os documentos completos e esclarecer uma cláusula sobre reparações antes de decidir qual proposta corresponde melhor às suas necessidades.停`.replace('停','')],
[['第一间房的方案有什么不清楚？',['网络费用','房屋位置','家具颜色'],0,'方案未说明 despesas da internet。'],['第二间房有什么位置优势？',['靠近机场','靠近工作地点','靠近海边'],1,'fica mais perto do trabalho。'],['陈目前决定了吗？',['已选第一间','已选第二间','尚未选择'],2,'Ainda não escolheu nenhum quarto。'],['他还想弄清哪类条款？',['维修','宠物食品','火车票'],0,'cláusula sobre reparações。']], '写一封租房询问信，询问四项具体条件；对不理解的条款请求解释。','模拟看房后与房东核对费用、期限和维修沟通方式，最后请求书面说明。');
add('预约与公共服务沟通','能说明办理目的、确认材料并更改预约。','条件句 se 与将来虚拟式','Se faltar um documento, contacto o serviço 表达未来可能发生的条件；faltar 在这里是将来虚拟式，与该动词不定式同形，并不是现在时 falta。请求中可用 seria possível…；服务流程与所需文件应向具体机构核对。',
`marcação|预约|Tenho uma marcação para amanhã.|我预约了明天。|time
atendimento|接待；办事服务|O atendimento começa às nove.|办事服务九点开始。|work
documento|文件；证件|Que documento devo levar?|我应带什么文件？|study
formulário|表格|Preciso de preencher o formulário.|我需要填写表格。|work
comprovativo|证明材料|Este comprovativo é suficiente?|这份证明材料足够吗？|study
disponível|可用的；有空的|Há uma hora disponível?|有可预约的时间吗？|time
adiar|推迟|Preciso de adiar a marcação.|我需要推迟预约。|time
cancelar|取消|Posso cancelar pela internet?|我能在线取消吗？|time
confirmar|确认|Quero confirmar o horário.|我想确认时间。|talk
balcão|柜台|Onde fica o balcão de informações?|咨询柜台在哪里？|work`,
`Se faltar algum documento, volto a contactar o serviço.|如果缺文件，我会再次联系该机构。|se 引出未来可能条件，faltar 为将来虚拟式。
Seria possível alterar a marcação?|可以更改预约吗？|seria possível 是委婉询问。
Tenho uma marcação, mas não posso ir nessa data.|我有预约，但那个日期不能去。|nessa data 指前述日期。
Pode indicar outra data disponível?|您能提供另一个可预约日期吗？|indicar 表示告知或指出。
Há algum documento que deva preparar?|有什么文件是我应该准备的吗？|deva 表达尚待确认的要求。
Consulte a lista enviada com a confirmação.|请查看随确认信息发出的清单。|以本次确认资料核实要求。`,
['更改办事时间',`A Li tinha uma marcação num serviço municipal, mas recebeu um novo horário de trabalho. Como as horas coincidem, contacta o serviço para pedir outra data. Explica o motivo de forma breve e pergunta se pode manter os documentos já preparados. A funcionária envia uma nova confirmação e uma lista para consultar. A Li guarda a mensagem e verifica a morada do balcão, pois o atendimento pode ser num edifício diferente.`,'小李原本预约了市政服务，但收到了新的工作时间。由于时间冲突，她联系机构申请另一个日期。她简短说明原因，询问已准备的文件是否仍可使用。工作人员发送新的确认信息和供查看的清单。小李保存消息，并核对柜台地址，因为办事地点可能在另一栋楼。'],
['确认所需材料',`O Liu marcou um atendimento para sexta-feira de manhã. Ao ler a confirmação, percebe que não sabe qual comprovativo de morada deve apresentar. Em vez de adivinhar, envia uma pergunta ao serviço e pede exemplos dos documentos aceites para o seu caso. A resposta chega na quinta-feira e indica também um novo balcão no mesmo edifício. O Liu prepara os documentos, guarda a resposta e confirma a hora antes de sair de casa.`],
[['刘预约在何时？',['周四下午','周五上午','周六晚上'],1,'sexta-feira de manhã。'],['他对什么有疑问？',['车票价格','午餐地点','住址证明材料'],2,'qual comprovativo de morada deve apresentar。'],['回复还说明什么变化？',['同楼内更换柜台','改到另一个城市','预约取消'],0,'novo balcão no mesmo edifício。'],['刘如何处理疑问？',['自行猜测','向机构询问','让邻居代签'],1,'他发送问题并要求适用于自身情况的例子。']], '写一封更改预约邮件，说明原时间、简短原因、两个可行时间并请求确认。','模拟致电办事机构，确认目的、地点和针对本人的材料要求。');
add('工作请求与协作','能说明任务、请求协助并协商截止时间。','条件式礼貌请求与目的','Poderia ajudar-me… 比直接命令更委婉。para + 原形表达目的；当动作主体不同时，可用 para que 并搭配虚拟式。本章先练常用请求。',
`tarefa|任务|Esta tarefa demora uma hora.|这项任务需要一小时。|work
prazo de entrega|交付期限|Qual é o prazo de entrega?|交付期限是什么时候？|work
reunião|会议|A reunião começa às dez.|会议十点开始。|work
ficheiro|文件|Enviei o ficheiro correto.|我发了正确的文件。|work
anexo|附件|O relatório segue em anexo.|报告随信附上。|work
equipa|团队|A equipa precisa de ajuda.|团队需要帮助。|work
prioridade|优先事项|Esta tarefa é a prioridade?|这项任务是优先事项吗？|work
rever|复核；修订|Pode rever o texto?|您能复核文字吗？|work
partilhar|分享；共享|Vou partilhar a pasta.|我要共享文件夹。|work
concluir|完成|Espero concluir hoje.|我希望今天完成。|work`,
`Poderia rever este ficheiro antes da reunião?|您能在开会前复核这个文件吗？|poderia 让请求更委婉。
Envio o rascunho para receber os teus comentários.|我发送草稿，以便收到你的意见。|para + 原形表示目的。
Consigo terminar amanhã, mas preciso dos dados de hoje.|我能明天完成，但需要今天的数据。|先说明可交付时间，再提出依赖条件。
Eu envio os dados até às quatro.|我会在四点前发送数据。|até às 表示最晚时间。
Se houver alterações, podes avisar-me?|如果有变化，你能通知我吗？|houver 为 haver 的将来虚拟式，指可能发生的变化。
Claro, deixo uma mensagem na pasta da equipa.|当然，我会在团队文件夹里留一条消息。|明确协作信息放在哪里。`,
['重新安排任务',`A Mei prepara uma apresentação com a equipa. Precisa de dados que ainda não recebeu, por isso avisa o colega antes do prazo. Explica o que já concluiu e pede que ele envie a tabela até ao fim da tarde. Propõe entregar um rascunho no dia seguinte, para haver tempo de revisão. O colega aceita e confirma quais são os números mais recentes. A Mei regista o acordo numa mensagem curta.`,'梅正在和团队准备演示文稿。她还没收到所需数据，因此在截止时间前通知同事。她说明已完成的部分，请他在下午结束前发送表格。她提议第二天提交草稿，好留出复核时间。同事同意，并确认哪些数字是最新的。梅用一条简短消息记录了约定。'],
['核对文件版本',`O Chen recebe dois ficheiros com nomes parecidos antes de uma reunião. Não sabe qual contém os valores corrigidos. Pergunta à colega qual deve usar e explica que a apresentação depende dessa confirmação. A colega responde que a versão com a data de terça-feira é a mais recente. Pede ainda que ele retire um gráfico antigo. O Chen faz a alteração, envia o rascunho e solicita comentários até ao meio-dia seguinte.`],
[['陈最初遇到什么问题？',['电脑断电','数据全丢了','无法确认文件版本'],2,'两个名称相近的文件让他不知用哪份。'],['最新版本带什么日期？',['周二','周一','周五'],0,'versão com a data de terça-feira。'],['同事要求删去什么？',['整份报告','旧图表','会议日期'],1,'retire um gráfico antigo。'],['他希望何时前收到意见？',['当天四点','下周五','次日中午'],2,'até ao meio-dia seguinte。']], '写一条工作请求：说明任务、所需帮助、截止时间及无法按时完成时的沟通安排。','与同事协商一项有依赖条件的任务，确认分工及时间。');
add('学校与持续学习','能询问课程要求、解释学习困难并商量改进。','比较级与学习目标','mais… do que… 表示比……更……；tão… como… 表示与……一样……。为了表达学习目标，可用 quero conseguir + 原形，避免把进步等同于正式等级认证。',
`inscrição|报名|A inscrição termina amanhã.|报名明天截止。|study
propina|学费|Qual é o valor da propina?|学费是多少？|money
horário|时间表|Este horário é melhor para mim.|这个时间表更适合我。|time
exercício|练习|Preciso de repetir o exercício.|我需要重做练习。|study
dúvida|疑问|Tenho uma dúvida sobre o texto.|我对文章有一个疑问。|study
avaliação|评估|Como funciona a avaliação?|评估如何进行？|study
melhorar|改进；提高|Quero melhorar a pronúncia.|我想改善发音。|study
pronúncia|发音|A pronúncia exige prática.|发音需要练习。|study
faltar|缺席；缺少|Vou faltar à aula de hoje.|我今天要缺课。|study
apoio|支持；辅导|Existe apoio para esta atividade?|这项活动有辅导吗？|study`,
`Ler é mais fácil para mim do que ouvir.|对我来说，阅读比听力容易。|mais… do que… 构成比较。
Este exercício é tão útil como o anterior.|这个练习和上一个一样有用。|tão… como… 表示同等程度。
Tenho dificuldade em perceber conversas rápidas.|我难以听懂快速的对话。|ter dificuldade em 加原形描述困难。
Podemos praticar com gravações mais curtas.|我们可以用更短的录音练习。|提出具体、可执行的练习调整。
Quanto tempo devo estudar entre as aulas?|两次课之间我应学习多久？|devo 表示询问合适安排。
Começa com períodos curtos e regista as tuas dúvidas.|先从短时间学习开始，并记下疑问。|本句是学习安排建议。`,
['调整学习方法',`O Liu frequenta um curso à noite. Lê os textos com alguma facilidade, mas perde informação quando várias pessoas falam depressa. Na aula pede à professora uma estratégia para praticar em casa. Ela sugere ouvir um excerto curto, anotar palavras importantes e voltar a ouvir. O Liu decide experimentar durante uma semana. Depois quer comparar o que percebeu na primeira e na última tentativa, sem esperar compreender tudo imediatamente.`,'刘在上夜课。他阅读文章较为轻松，但多人快速说话时会漏掉信息。课堂上，他请老师提供在家练习的方法。老师建议听一小段录音，记下关键词，再听一遍。刘决定试一周。之后他想比较第一次与最后一次听懂的内容，不期待立刻全部听懂。'],
['选课前询问',`A Li procura um curso de fotografia. Encontra duas opções: uma tem aulas de manhã e outra funciona ao sábado. Como trabalha durante a semana, prefere a segunda. Antes de se inscrever, pergunta se precisa de levar uma máquina própria e como são avaliados os trabalhos. A escola responde que pode começar com o equipamento disponível nas aulas, mas deve confirmar a reserva. A Li pede também informação sobre o custo total.`],
[['小李偏好哪种上课时间？',['周六','工作日上午','每天晚上'],0,'prefere a segunda，即周六课程。'],['她问了哪项评估问题？',['老师国籍','作品如何评估','考试地点'],1,'como são avaliados os trabalhos。'],['开始时可以使用什么？',['必须新买相机','只能手机','课堂可用设备'],2,'equipamento disponível nas aulas。'],['她还询问什么？',['总费用','周末天气','住址证明'],0,'informação sobre o custo total。']], '写一封课程询问信，说明时间限制，询问设备、费用与评估方式。','向老师描述一项学习困难，协商一周练习计划并约定如何观察进步。');
add('银行与日常付款','能核对费用、说明支付问题并保护敏感信息。','直接宾语代词与否定位置','o/a/os/as 可代替已提及的物品。肯定句常后置，如 recebi-o；带 não 时通常前置，如 não o recebi。涉及费用和账户条件时应向具体机构核实。',
`conta bancária|银行账户|Quero informação sobre uma conta bancária.|我想了解银行账户。|money
transferência|转账|A transferência ainda não chegou.|转账还没到账。|money
saldo|余额|Preciso de consultar o saldo.|我需要查询余额。|money
comissão|手续费|Esta operação tem comissão?|这项操作收手续费吗？|money
pagamento|付款|O pagamento foi recusado.|付款被拒绝了。|money
levantamento|取款|Quero confirmar o limite de levantamento.|我想确认取款限额。|money
recibo|收据|Preciso de um recibo.|我需要收据。|money
montante|金额|O montante está correto.|金额正确。|money
código|代码；密码|Não vou partilhar o código.|我不会分享验证码／密码。|money
movimento|账户交易记录|Não reconheço este movimento.|我不认识这笔交易。|money`,
`Recebi o recibo e guardei-o.|我收到收据并把它保存了。|o 代替阳性单数 recibo，肯定句后置。
Pedi o comprovativo, mas não o recebi.|我要求了凭证，但没收到。|não 使代词位于动词前。
O cartão foi recusado, mas o valor aparece na aplicação.|卡付款被拒绝，但应用里显示了这笔金额。|陈述看到的情况，避免自行断言扣款状态。
Tem o comprovativo da tentativa de pagamento?|您有付款尝试的凭证吗？|tentativa 区别于已确认完成的付款。
Sim. Pode explicar o estado desta operação?|有。您能解释这项操作的状态吗？|询问具体状态。
Vamos verificar a informação pelo canal oficial.|我们通过官方渠道核实信息。|渠道应独立核实，避免传递敏感代码。`,
['核对一笔付款',`A Mei tenta pagar uma compra com cartão, mas o terminal apresenta uma mensagem de erro. Na aplicação do banco aparece um valor relacionado com a tentativa. Ela guarda o talão e pergunta à loja se a compra ficou registada. Depois contacta o banco pelo canal oficial para perceber o estado da operação. Descreve a hora e o montante, sem enviar códigos de segurança por mensagem. Quer uma explicação antes de repetir o pagamento.`,'梅尝试刷卡购物，但终端显示错误消息。银行应用中出现了与此次尝试有关的一笔金额。她保存小票，询问商店购物是否已记录。随后她通过官方渠道联系银行，了解操作状态。她说明时间和金额，不通过消息发送安全代码。她想先得到解释再重新付款。'],
['一笔不认识的记录',`O Rui consulta os movimentos da conta e encontra um nome que não reconhece. Antes de concluir que existe um erro, compara o montante e a data com os recibos guardados. Um recibo tem o mesmo valor, mas apresenta outro nome comercial. O Rui continua com dúvidas e contacta o apoio do banco através da aplicação habitual. Pede informação sobre a operação e anota a referência do contacto para acompanhar a resposta.`],
[['鲁伊发现了什么？',['余额为零','不认识的交易名称','丢失的银行卡'],1,'encontra um nome que não reconhece。'],['他首先做什么？',['再次付款','删除应用','核对收据金额与日期'],2,'compara o montante e a data com os recibos。'],['他用什么渠道联系银行？',['平时使用的应用','陌生链接','社交媒体评论'],0,'através da aplicação habitual。'],['他记下什么以跟进？',['商店菜单','联系参考编号','朋友密码'],1,'anota a referência do contacto。']], '写一条向银行查询交易状态的信息，使用虚构日期与金额，避免包含账户密码或验证码。','模拟向客服说明一次付款问题，询问状态、可能费用及后续联系参考号。');
add('数字消息与沟通语气','能写清晰消息、区分语气并核实可疑请求。','口语与书面语体','对熟悉的人可用 Olá 和 tu；较正式消息可用 Bom dia 与礼貌请求。间接引语可用 diz que…；消息中先说明事项，再写需要对方做什么。',
`mensagem|消息|Recebi a tua mensagem.|我收到你的消息了。|talk
assunto|主题|O assunto está no início.|主题在开头。|talk
ligação|链接；连接|Não abri a ligação.|我没有打开链接。|talk
palavra-passe|密码|Esqueci-me da palavra-passe.|我忘记密码了。|talk
remetente|发件人|Conheces o remetente?|你认识发件人吗？|person
destinatário|收件人|Confirma o destinatário.|请确认收件人。|person
rascunho|草稿|Guardei um rascunho.|我保存了一份草稿。|study
responder|回复|Vou responder amanhã.|我会明天回复。|talk
encaminhar|转发|Posso encaminhar esta informação?|我能转发这项信息吗？|talk
verificar|核实|É melhor verificar a origem.|最好核实来源。|idea`,
`A mensagem diz que a reunião mudou de sala.|消息说会议换了房间。|diz que 引出间接转述。
+Bom dia, poderia confirmar a receção deste email?|您好，您能确认收到这封邮件吗？|用于较正式的书面请求。
Recebi uma ligação, mas não reconheço o remetente.|我收到一个链接，但不认识发件人。|先说明不确定之处。
A mensagem pede alguma informação pessoal?|消息要求提供个人信息吗？|alguma 在问句中表示某些。
Sim, pede uma palavra-passe e cria muita urgência.|是的，要求密码，还催得很急。|说明消息的具体特征。
Vou contactar o serviço através do endereço que já conheço.|我会通过已知地址联系该服务。|独立核实渠道，不依赖消息提供的链接。`.replace('\n+','\n'),
['发送前检查',`A Li escreve uma mensagem à escola para perguntar sobre uma aula. Coloca um assunto claro e explica a dúvida em poucas frases. Antes de enviar, confirma o destinatário e verifica se o anexo está correto. Mais tarde recebe uma mensagem inesperada que pede a palavra-passe da conta. Como não reconhece o remetente, não responde com dados pessoais. Prefere contactar a escola através do endereço que utiliza habitualmente para esclarecer a situação.`,'小李写消息给学校，询问一节课。她填写清晰主题，用几句话说明疑问。发送前，她确认收件人，检查附件是否正确。后来她收到一条意外消息，要求账户密码。因为不认识发件人，她不回复个人数据。她选择通过平时使用的地址联系学校，以弄清情况。'],
['确认活动变动',`O Chen recebe no grupo uma mensagem a dizer que a visita de sábado foi cancelada. A mensagem foi encaminhada e não indica quem tomou a decisão. Antes de alterar os planos, o Chen consulta o email enviado pela organização. Não encontra qualquer aviso novo, por isso escreve diretamente para o contacto habitual. A organização responde que a visita se mantém, mas começa meia hora mais tarde. O Chen partilha a confirmação com o grupo.`],
[['群里最初的消息声称什么？',['活动提前','集合地点变更','参观取消'],2,'a visita… foi cancelada。'],['陈为什么核实？',['消息是转发且未注明决定者','他丢了票','他想换城市'],0,'foi encaminhada e não indica quem tomou a decisão。'],['组织方确认什么？',['活动取消','照常但晚半小时开始','推迟一个月'],1,'se mantém, mas começa meia hora mais tarde。'],['陈最后做什么？',['删除群聊','再买一张票','向群里分享确认信息'],2,'partilha a confirmação com o grupo。']], '分别给朋友和办事机构写一条同主题消息，注意称呼与请求语气。','复述一条尚未核实的活动消息，说明不确定点并商量核实方法。');
