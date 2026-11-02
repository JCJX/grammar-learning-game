// Chapter-specific openings. The learner's six target sentences remain the authored course material.
const rows={
'pt-PT':`Inês|小镇入口|你刚到葡萄牙，邻居主动向你打招呼。先回应，再慢慢介绍自己。|Olá! É a sua primeira visita aqui?|你好！您是第一次来这里吗？|person
Inês|街角咨询处|对方说得太快。用礼貌的方式让交流慢下来，不必假装听懂。|Podemos falar mais devagar. Qual é a sua dúvida?|我们可以慢一点说。您有什么疑问？|talk
Rui|社区登记桌|工作人员需要了解你的基本情况。只练习虚构资料，不填写真实联系方式。|Como se chama e de onde vem?|您叫什么名字，来自哪里？|person
Rui|活动公告栏|你们要约好见面。把数字、日期和钟点说清楚，再确认一次。|A que horas lhe dá jeito encontrarmo-nos?|我们几点见面对您方便？|time
Ana|街角咖啡馆|咖啡香从柜台飘来。轮到你点单了，先说需求，再核对价格。|Bom dia! O que deseja tomar?|早上好！您想喝点什么？|food
Ana|社区超市|你在货架间寻找晚餐材料。遇到不确定的数量或价格，就开口问。|Está à procura de algum produto?|您在找什么商品吗？|food
Inês|路口地图旁|你第一次独自出门。先问方向，再用左右和地标核对路线。|Para onde quer ir? Posso indicar-lhe o caminho.|您想去哪里？我可以给您指路。|travel
Rui|火车站售票窗|站台上人来人往。你要问清车次和目的地，再决定买票。|Qual é o seu destino e quando quer partir?|您的目的地是哪里，想什么时候出发？|travel
Ana|旅馆前台|旅途结束，你来到预订的住处。说明来意，也说清自己的需要。|Boa tarde! Tem uma reserva em seu nome?|下午好！您有以自己名字作的预订吗？|home
Inês|合住公寓|搬进新家后，你和室友交换作息。简单说明日常安排就能减少误会。|Como costuma organizar o seu dia?|您通常怎样安排一天？|home
Rui|药房咨询台|你需要说明哪里不舒服。先描述感受，再询问该向谁求助。|O que está a sentir e há quanto tempo?|您有什么不适，持续多久了？|health
Ana|公园长椅|朋友提议周末见面。试着接受、改时间，或礼貌说明不能参加。|Queres combinar alguma coisa para o fim de semana?|你想商量一下周末做点什么吗？|talk
Inês|看房现场|房间看上去不错，但你还需要了解租金、费用和条件。不要急着答应。|Que informações gostaria de confirmar sobre a casa?|您想确认这所房子的哪些信息？|home
Rui|办事服务台|你有一项待办事务。先说明目的，再核对本次预约和材料要求。|Tem uma marcação ou precisa de pedir uma?|您已有预约，还是需要预约？|time
Ana|工作交接桌|同事正在安排任务。你可以澄清要求、请求协助，也可以协商时间。|Podemos confirmar o que falta fazer e até quando?|我们能确认还要做什么，以及何时完成吗？|work
Inês|课程咨询室|你想找到合适的课程。把自己的目标说出来，再问清学习安排。|O que gostaria de aprender neste curso?|您想在这门课中学到什么？|study
Rui|银行咨询台|账单中有一项不明白的记录。使用虚构信息练习提问，不提供密码。|Pode explicar qual é a sua dúvida sobre o pagamento?|您能说明对这笔付款有什么疑问吗？|money
Ana|家中的书桌|你要发一条消息。先想想收件人是谁，再选择合适的称呼和语气。|A quem vai escrever e o que precisa de esclarecer?|您要写给谁，需要弄清什么？|talk
Inês|社区消息栏|群里转来一条通知。先核实来源，再决定要不要改变计划。|Já confirmou esta informação com a organização?|您已向组织方确认这项信息了吗？|idea
Rui|商店服务台|买到的东西出现问题。平静描述经过，再询问可以采取哪些步骤。|Pode contar-me o que aconteceu com o produto?|您能告诉我商品出了什么情况吗？|talk
Ana|朋友家的餐桌|朋友想听你的经历。按先后顺序讲清发生了什么，以及你怎样处理。|Como correu o passeio? Aconteceu algum imprevisto?|出游怎么样？有没有意外情况？|travel
Inês|周末计划桌|你们想一起出游。提出一个计划，也为天气或时间变化留个备选。|E se chover? Temos outra opção para o passeio?|如果下雨呢？我们有另一个出游选择吗？|nature
Rui|公寓公共厨房|你和室友需要重新分配家务。把困难说清楚，也听听对方的安排。|Como podemos dividir melhor as tarefas da casa?|我们怎样才能更好地分配家务？|home
Ana|新社区的早晨|搬家后有几件事要办。列出优先顺序，逐项确认还缺哪些信息。|Qual destes assuntos precisa de resolver primeiro?|这些事情中，您需要先解决哪一件？|idea`,
'es-ES':`Ana|小镇入口|你刚到西班牙，新邻居向你打招呼。先回应，再介绍自己。|¡Hola! ¿Es la primera vez que vienes por aquí?|你好！你是第一次来这里吗？|person
Pablo|街角咨询处|对方说得太快。礼貌请求重复，比假装听懂更有帮助。|Podemos hablar más despacio. ¿Qué necesitas aclarar?|我们可以说慢一点。你需要弄清什么？|talk
Lucía|社区登记桌|你需要介绍基本情况。用虚构资料练习名字、来源和联系方式。|¿Cómo te llamas y de dónde eres?|你叫什么名字，来自哪里？|person
Ana|活动公告栏|你们要约一个时间。把数字、日期和钟点核对清楚。|¿Qué día y a qué hora te viene bien quedar?|哪天几点见面对你方便？|time
Pablo|街角咖啡馆|轮到你点单了。先说想要什么，再问清数量和价格。|Buenos días. ¿Qué te pongo?|早上好。你要点什么？|food
Lucía|社区市场|你在为晚餐买材料。试着询问商品位置、数量和付款方式。|¿Buscas algún producto en particular?|你在找某种特定商品吗？|food
Ana|路口地图旁|你第一次独自出门。先问路，再用地标确认自己没有听反。|¿Adónde quieres ir? Puedo indicarte el camino.|你想去哪里？我可以给你指路。|travel
Pablo|车站售票窗|你准备坐车去另一个街区。确认目的地、车票和出发时间。|¿Cuál es tu destino y cuándo quieres salir?|你的目的地在哪里，想什么时候出发？|travel
Lucía|旅馆前台|你来到预订的住处。说明来意，也把自己的需要说清楚。|Buenas tardes. ¿Tienes una reserva a tu nombre?|下午好。你有以自己名字作的预订吗？|home
Ana|合住公寓|新室友想了解你的作息。说说日常安排，再商量共用空间。|¿Cómo sueles organizar tu día?|你通常怎样安排一天？|home
Pablo|就医接待处|你需要说明不适。先讲感受和持续时间，再寻求适当帮助。|¿Qué te pasa y desde cuándo te encuentras así?|你哪里不舒服，这种情况持续多久了？|health
Lucía|公园长椅|朋友邀请你周末见面。接受、改期和婉拒都可以好好说。|¿Te apetece hacer algo juntos este fin de semana?|你想这周末一起做点什么吗？|talk
Ana|看房现场|房子看上去合适。作决定前，先核对费用和自己不理解的条件。|¿Qué te gustaría saber sobre el piso?|关于这套房，你想了解什么？|home
Pablo|预约服务台|原来的时间不方便了。说明原因，再提出可以安排的时间。|¿Necesitas confirmar la cita o cambiarla?|你需要确认预约，还是更改预约？|time
Lucía|维修咨询台|家里有一件东西需要维修。描述问题，再确认下一步怎么做。|¿Puedes describir qué no funciona?|你能描述一下什么地方不能正常使用吗？|work
Ana|工作交接桌|同事正在安排任务。问清要求、提出困难，一起商量可行时间。|¿Revisamos las tareas y el plazo de entrega?|我们核对一下任务和提交期限好吗？|work
Pablo|课程咨询室|你想找到适合的课程。先说目标，再询问要求和学习安排。|¿Qué te gustaría aprender en este curso?|你想在这门课中学到什么？|study
Lucía|银行咨询台|付款记录让你有疑问。用虚构信息说明问题，不输入真实密码。|¿Qué duda tienes sobre este pago?|你对这笔付款有什么疑问？|money
Ana|社区消息栏|群里转来一条活动通知。先核实，再决定是否改变计划。|¿Has comprobado esta información con la organización?|你向组织方核实过这项信息了吗？|idea
Pablo|商店服务台|买到的东西出了问题。平静说明经过，再询问解决步骤。|¿Puedes contarme qué ha pasado con el producto?|你能告诉我商品出了什么情况吗？|talk
Lucía|朋友家的餐桌|朋友想听你的经历。按先后顺序讲清事情怎样发生，又怎样结束。|¿Qué tal fue la excursión? ¿Hubo algún imprevisto?|出游怎么样？有没有意外情况？|travel
Ana|周末计划桌|你们想一起出游。提出计划，也为天气或时间变化准备备选。|¿Y si llueve? ¿Tenemos otro plan?|如果下雨呢？我们有另一个计划吗？|nature
Pablo|公寓公共厨房|家务安排需要调整。说出具体困难，也给对方留出商量的余地。|¿Cómo podemos repartir mejor las tareas de casa?|我们怎样才能更好地分配家务？|home
Lucía|新社区的早晨|搬家后还有几件事要办。先排出顺序，再逐项确认信息。|¿Cuál de estas gestiones necesitas hacer primero?|这些事务中，你需要先办哪一件？|idea`,
'de-DE':`Lena|小镇入口|你刚到德国，一位邻居向你打招呼。先回应，不明白时可以请求重复。|Guten Tag! Sind Sie neu hier?|您好！您是新来的吗？|person
Jonas|社区登记桌|你需要介绍基本情况。用虚构资料练习姓名、来源和联系方式。|Wie heißen Sie und woher kommen Sie?|您叫什么名字，来自哪里？|person
Mia|活动公告栏|你们要约好见面。把日期、钟点和数字确认清楚。|An welchem Tag und um wie viel Uhr passt es Ihnen?|哪天几点对您方便？|time
Lena|街角咖啡馆|轮到你点单了。先说明需要，再核对数量和价格。|Guten Tag! Was möchten Sie bestellen?|您好！您想点些什么？|food
Jonas|社区超市|你在寻找晚餐材料。找不到商品或看不懂价格时，就开口问。|Suchen Sie ein bestimmtes Produkt?|您在找某种特定商品吗？|food
Mia|车站地图旁|你第一次独自出门。问清方向和交通方式，再确认路线。|Wohin möchten Sie fahren? Ich kann Ihnen helfen.|您想坐车去哪里？我可以帮您。|travel
Lena|旅馆前台|你来到预订的住处。说明来意，也把自己的需要说出来。|Guten Abend! Haben Sie ein Zimmer reserviert?|晚上好！您预订房间了吗？|home
Jonas|合住公寓|新室友想了解你的作息。说说日常安排，再商量共用空间。|Wie sieht Ihr Alltag normalerweise aus?|您平时的日常生活是怎样的？|home
Mia|就医接待处|你需要描述哪里不舒服。先说明感受和时间，再寻求帮助。|Welche Beschwerden haben Sie und seit wann?|您有什么不适，从什么时候开始的？|health
Lena|公园长椅|朋友邀请你周末见面。接受、改时间和婉拒都可以礼貌表达。|Hast du am Wochenende Zeit für ein Treffen?|你周末有时间见个面吗？|talk
Jonas|电话预约台|你要打电话预约或改期。先说清来意，再核对日期与钟点。|Möchten Sie einen Termin vereinbaren oder verschieben?|您想预约，还是更改预约？|time
Mia|车站候车区|你们聊起旅行。试着说清计划，也讲讲过去遇到的小插曲。|Wohin möchten Sie reisen und wie kommen Sie dorthin?|您想去哪里旅行，怎么去那里？|travel
Lena|看房现场|房子看上去不错。作决定前，先把租金、费用和条件问清楚。|Was möchten Sie über die Wohnung wissen?|关于这套住房，您想了解什么？|home
Jonas|日程安排桌|几个预约撞在一起。解释冲突，再提出可以协调的时间。|Welche Termine überschneiden sich bei Ihnen?|您的哪些预约时间冲突了？|time
Mia|维修咨询台|家里有东西坏了。描述问题，再确认检查、维修和联络步骤。|Können Sie beschreiben, was nicht funktioniert?|您能描述一下什么不能正常使用吗？|work
Lena|工作交接桌|同事需要了解任务进展。说明已完成什么，以及还需要什么帮助。|Welche Aufgaben sind erledigt und was ist noch offen?|哪些任务已完成，还有什么待办？|work
Jonas|学习小组|你们准备一起学习。说明自己的目标，也请求具体帮助。|Wobei brauchen Sie Unterstützung beim Lernen?|您在学习的哪些方面需要支持？|study
Mia|银行咨询台|付款记录让你有疑问。用虚构信息练习，不提供密码或验证码。|Welche Frage haben Sie zu dieser Zahlung?|您对这笔付款有什么问题？|money
Lena|社区消息栏|群里转来一条通知。先核实来源，再决定要不要改变计划。|Haben Sie diese Information schon bei der Schule überprüft?|您已向学校核实过这项信息了吗？|idea
Jonas|商店服务台|买到的商品出了问题。平静讲经过，再询问可以采取的步骤。|Was ist mit dem Produkt passiert?|商品出了什么情况？|talk
Mia|朋友家的餐桌|朋友想听你的经历。按顺序说明发生了什么，以及你怎样处理。|Wie war der Ausflug? Gab es eine unerwartete Situation?|出游怎么样？有没有意外情况？|travel
Lena|周末计划桌|你们一起商量出游。提出一个计划，再准备一个备选方案。|Was können wir machen, wenn es regnet?|如果下雨，我们可以做什么？|nature
Jonas|公寓公共厨房|你和室友需要分配家务。把自己的困难说清楚，也回应对方的需要。|Wie können wir die Aufgaben im Haushalt besser verteilen?|我们怎样才能更好地分配家务？|home
Mia|新社区的早晨|搬家后有几件事要办。先排出优先顺序，再确认还缺哪些信息。|Welche Angelegenheit müssen Sie zuerst erledigen?|您需要先处理哪件事情？|idea`
};
module.exports=function scenes(locale){return rows[locale].split('\n').map((row,i)=>{const [npc,place,scene,text,zh,icon]=row.split('|');return{id:locale.slice(0,2)+'-'+String(i+1).padStart(2,'0'),npc,place,scene,text,zh,icon}})};
