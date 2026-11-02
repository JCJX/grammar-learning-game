// Authored transfer workshops. Vocabulary is deliberately recycled from prior units.
const fs=require('fs'),path=require('path');
const titles=['消息与信息核实','投诉与协商解决','讲述过去的经历','计划与备选方案','邻里与共同生活','综合生活任务'];
const data={
'pt-PT':[
[18,`Recebi uma mensagem sobre uma reunião.|我收到一条关于会议的消息。
A mensagem não indica quem a escreveu.|消息没有注明是谁写的。
Antes de mudar os planos, vou confirmar a informação.|改变计划前，我会确认信息。
Prefiro contactar a organização pelo endereço habitual.|我更愿意通过常用地址联系组织方。
Se a hora mudar, aviso também os meus colegas.|如果时间改变，我也会通知同事。
Depois guardo a resposta para a poder consultar.|随后我保存答复，以便查询。`,
`A Ana recebe uma mensagem encaminhada sobre um curso. Segundo a mensagem, a aula de terça-feira passou para quinta-feira. A Ana não encontra o nome de quem enviou o aviso original. Por isso, escreve ao contacto habitual da escola antes de alterar a sua agenda. A escola responde que a aula continua na terça-feira, mas será noutra sala. A Ana guarda a confirmação e informa o colega que lhe enviou a mensagem.`,
`原消息说改到哪天？|周一/周四/周日|1|passou para quinta-feira。
为什么要核实？|不知道原发送者/课程结束/丢了手机|0|não encontra o nome… aviso original。
实际改变了什么？|日期/教师/教室|2|será noutra sala。
她最后通知谁？|医生/发消息的同学/房东|1|informa o colega… enviou a mensagem。`],
[6,`Comprei este produto ontem e guardei o recibo.|我昨天买了这件商品并保留了收据。
Quando cheguei a casa, reparei num problema.|到家时，我发现了一个问题。
Gostava de explicar o que aconteceu com calma.|我想平静地说明发生的情况。
Pode dizer-me quais são as opções neste caso?|您能告诉我这种情况下有哪些选项吗？
Se não for possível resolver hoje, quando devo voltar?|如果今天不能解决，我应该什么时候再来？
Vou guardar a resposta e o número do pedido.|我会保存答复和申请编号。`,
`O Rui comprou uma mochila numa loja na segunda-feira. Ao chegar a casa, viu que uma das alças estava solta. Na quarta-feira voltou à loja com a mochila e o recibo. A funcionária ouviu a explicação e disse que precisava de consultar a responsável antes de indicar uma solução. Pediu um contacto e entregou ao Rui um número de pedido. Ele perguntou quando poderia esperar uma resposta e anotou a informação.`,
`商品是什么？|背包/杯子/桌子|0|uma mochila。
发现什么问题？|颜色太深/肩带松脱/没有口袋|1|uma das alças estava solta。
店员立刻承诺退款了吗？|是/承诺换新/没有，要先咨询负责人|2|precisava de consultar a responsável。
Rui 拿到了什么？|申请编号/免费车票/密码|0|um número de pedido。`],
[8,`No mês passado fui visitar uma amiga.|上个月我去看了一位朋友。
Saí cedo porque não conhecia bem o caminho.|我很早出发，因为不熟悉路线。
Quando cheguei à estação, o comboio já tinha partido.|我到车站时，火车已经开走了。
Pedi ajuda e procurei outra ligação.|我求助并寻找另一个接驳方案。
Avisei a minha amiga de que chegaria mais tarde.|我告诉朋友自己会晚到。
No fim correu tudo bem e aprendi a verificar o horário.|最后一切顺利，我学会了核对时刻表。`,
`No sábado, a Mei planeava visitar um museu com o Chen. Estava a chover quando saiu de casa e demorou mais tempo a chegar à paragem. Perdeu o primeiro autocarro, mas não quis desistir do passeio. Telefonou ao Chen para avisar do atraso e consultou outra ligação. Encontraram-se meia hora depois do previsto. Como já tinham pouco tempo antes do almoço, decidiram visitar apenas uma exposição e deixar as outras para outra ocasião.`,
`天气如何？|下雪/晴朗/下雨|2|Estava a chover。
Mei 为何打电话？|取消房间/告知迟到/买午餐|1|avisar do atraso。
他们晚了多久见面？|半小时/一天/五分钟|0|meia hora depois。
最后怎样安排？|参观所有展览/只看一项展览/回家不去|1|apenas uma exposição。`],
[12,`Gostava de organizar um passeio no próximo fim de semana.|我想在下周末组织一次出游。
Primeiro precisamos de combinar a hora e o lugar.|首先我们需要商量时间和地点。
Se chover, podemos escolher uma atividade dentro de casa.|如果下雨，我们可以选择室内活动。
Prefiro confirmar o plano com todos antes de reservar.|我更愿意预订前和所有人确认计划。
Talvez seja melhor deixar algum tempo livre.|也许最好留出一些空闲时间。
Assim podemos adaptar o passeio sem pressa.|这样我们能从容调整行程。`,
`A Inês e dois amigos querem passar o domingo fora da cidade. Pensam ir de comboio, mas ainda não compraram os bilhetes. Antes de decidir, comparam o preço e o tempo de viagem de duas localidades. Uma delas tem um parque; a outra tem um museu perto da estação. Se a previsão indicar chuva, vão escolher o museu. Combinam voltar antes das oito da noite porque um dos amigos trabalha cedo na segunda-feira.`,
`他们打算哪天出游？|周日/周三/周五|0|passar o domingo。
车票买了吗？|买了/还没有/已经退票|1|ainda não compraram。
下雨会选哪里？|海滩/公园/博物馆|2|vão escolher o museu。
为何八点前返回？|朋友周一早上工作/车站关闭/没有饭店|0|trabalha cedo na segunda-feira。`],
[10,`Partilho a casa com duas pessoas.|我和两个人合住。
Queremos combinar algumas regras para os espaços comuns.|我们想商量公共空间的一些规则。
Durante a semana preciso de descansar mais cedo.|工作日我需要早点休息。
Posso limpar a cozinha se alguém tratar do lixo.|如果有人处理垃圾，我可以清洁厨房。
Quando houver um problema, prefiro falar diretamente.|出现问题时，我更愿意直接交谈。
Podemos rever o acordo daqui a duas semanas.|我们可以两周后重新讨论约定。`,
`O Luís partilha um apartamento com a Sara e o Pedro. Nas últimas semanas, tem sido difícil encontrar a cozinha limpa à noite. Em vez de deixar uma mensagem zangada, o Luís pede uma conversa no domingo. Os três combinam uma lista simples de tarefas e decidem não deixar loiça no lava-loiça até ao dia seguinte. A Sara trabalha por turnos, por isso pede alguma flexibilidade no horário. Concordam em experimentar o plano durante duas semanas.`,
`他们讨论什么？|车票/厨房清洁/学校课程|1|cozinha limpa。
何时交谈？|周日/周二/每天中午|0|uma conversa no domingo。
Sara 为什么需要灵活时间？|要旅游/不住那里/轮班工作|2|trabalha por turnos。
先试多久？|一年/两周/一个月|1|durante duas semanas。`],
[14,`Mudei de casa e tenho vários assuntos para organizar.|我搬家了，有几件事需要安排。
Vou fazer uma lista e escolher o que é mais urgente.|我会列清单并选出最紧急的事情。
Preciso de confirmar a morada e a hora da marcação.|我需要确认地址和预约时间。
Se não conseguir ir, aviso o serviço com antecedência.|如果不能去，我会提前通知机构。
Depois de cada contacto guardo uma nota com a resposta.|每次联系后，我都记下答复。
No fim verifico o que ficou por resolver.|最后我检查还有什么没有解决。`,
`A Li mudou-se para um bairro novo. Tem uma marcação para entregar documentos na quarta-feira e quer também procurar um curso perto de casa. Ao consultar a confirmação, descobre que o atendimento será num edifício diferente do habitual. Envia uma pergunta sobre a morada e prepara os documentos indicados na mensagem. Depois contacta uma escola, mas a turma que prefere está completa. Pede informação sobre outra turma e anota que ainda está à espera dessa resposta.`,
`办事预约在哪天？|周四/周一/周三|2|na quarta-feira。
确认消息有何变化？|另一栋楼/改成电话/已取消|0|num edifício diferente。
课程遇到什么问题？|没有教材/想去的班已满/学校搬走|1|a turma… está completa。
她还在等待什么？|房租/另一班的信息/银行密码|1|informação sobre outra turma。`]
],
'es-ES':[
[2,`He recibido un aviso sobre una actividad del barrio.|我收到一条社区活动通知。
No sé si la información sigue siendo válida.|我不知道信息是否仍然有效。
Antes de reenviarla, voy a consultar la fuente.|转发前，我会查阅来源。
Prefiero escribir al contacto habitual de la organización.|我更愿意写给组织方的常用联系人。
Si cambia la hora, avisaré al resto del grupo.|如果时间变动，我会通知群里其他人。
Después guardaré la confirmación para poder revisarla.|之后我会保存确认消息，以便查看。`,
`Clara recibe en un grupo un mensaje que anuncia la cancelación de una visita. El mensaje no incluye fecha ni nombre de la persona responsable. Antes de cambiar sus planes, Clara consulta el correo que recibió de la organización el día anterior. Como no encuentra ningún aviso nuevo, escribe al contacto habitual. Le responden que la visita sigue prevista para el sábado, aunque empezará media hora más tarde. Clara comparte esta confirmación con el grupo.`,
`最初消息声称什么？|取消参观/门票涨价/提前集合|0|anuncia la cancelación。
消息缺什么？|照片/日期和负责人姓名/地图颜色|1|no incluye fecha ni nombre。
实际何时参观？|周二/周四/周六|2|para el sábado。
开始时间如何变化？|晚半小时/早两小时/没变化|0|media hora más tarde。`],
[15,`Ayer compré este aparato y hoy no funciona.|我昨天买了这台设备，今天不能用了。
He traído el recibo para explicar el problema.|我带了收据来说明问题。
¿Podría indicarme qué opciones hay en este caso?|您能告诉我这种情况有哪些选项吗？
No quiero decidir sin entender las condiciones.|我不想在不明白条件时作决定。
Si necesitan revisarlo, ¿cuándo tendré una respuesta?|如果需要检查，我什么时候能收到答复？
Por favor, anote el número de la consulta.|请记下咨询编号。`,
`El lunes, Diego compró una lámpara para su habitación. Al montarla siguiendo las instrucciones, observó que una pieza no encajaba. El miércoles fue a la tienda con la pieza, unas fotos y el justificante de compra. La empleada escuchó su explicación y pidió consultar al servicio técnico antes de ofrecer una solución. Diego no recibió una promesa de devolución inmediata. Le dieron un número de consulta y le indicaron que esperara una respuesta por correo.`,
`Diego 买了什么？|台灯/冰箱/手机|0|una lámpara。
发现什么问题？|少了收据/部件装不上/颜色错误|1|una pieza no encajaba。
是否已承诺立即退款？|是/只退款一半/没有|2|no recibió una promesa… inmediata。
如何等答复？|邮件/邻居口信/广播|0|una respuesta por correo。`],
[8,`El mes pasado fui a visitar a una amiga.|上个月我去看望了一位朋友。
Salí pronto porque no conocía bien el camino.|我很早出发，因为不熟悉路线。
Cuando llegué a la estación, el tren ya había salido.|我到车站时，火车已经开走了。
Pedí ayuda para buscar otra conexión.|我请求帮助，寻找另一种接驳方式。
Avisé a mi amiga de que llegaría más tarde.|我告诉朋友我会晚到。
Al final pudimos vernos y cambiamos el plan de la tarde.|最后我们见到了面，并调整了下午计划。`,
`El sábado, Mei había quedado con Ana para visitar una exposición. Llovía mucho cuando salió de casa y el autobús tardó más de lo habitual. Mei llamó a Ana para avisarla del retraso. Mientras esperaba, consultó el horario de otra línea, pero al final llegó su autobús. Se encontraron cuarenta minutos después de la hora prevista. Como quedaba poco tiempo antes de comer, decidieron ver una sola sala y volver otro día para visitar el resto.`,
`天气怎样？|下雨/晴天/下雪|0|Llovía mucho。
为何打电话？|订餐/通知迟到/找护照|1|avisarla del retraso。
晚了多久？|四分钟/一小时/四十分钟|2|cuarenta minutos después。
最后怎样参观？|只看一个展厅/看完整个展览/完全没去|0|ver una sola sala。`],
[12,`Nos gustaría organizar una excursión el próximo domingo.|我们想在下周日组织一次出游。
Primero tenemos que acordar la hora de salida.|首先我们要商量出发时间。
Si hace mal tiempo, podemos elegir una actividad cubierta.|如果天气不好，我们可以选室内活动。
Prefiero confirmar el plan antes de comprar los billetes.|我更愿意买票前确认计划。
Quizá sea mejor dejar un rato libre por la tarde.|也许最好下午留出一些空闲时间。
Así podremos cambiar de idea sin tener que correr.|这样我们能从容改变主意，不必赶时间。`,
`Marta y dos amigos quieren salir de Madrid el domingo. Comparan dos destinos a los que se puede llegar en tren. Uno tiene un parque junto al río; el otro ofrece un museo cerca de la estación. Todavía no han comprado los billetes porque esperan la previsión del tiempo. Si llueve, elegirán el museo. Uno de los amigos trabaja temprano el lunes, así que acuerdan regresar antes de las ocho de la tarde y confirmar el plan el viernes.`,
`出游在哪天？|周日/周一/周五|0|el domingo。
为什么还没买票？|没找到车站/等天气预报/忘了名字|1|esperan la previsión。
下雨选什么？|河边公园/海边/博物馆|2|elegirán el museo。
何时确认计划？|周五/周四/周二|0|confirmar el plan el viernes。`],
[10,`Comparto piso con dos personas.|我和两个人合租。
Queremos acordar unas normas para las zonas comunes.|我们想商量公共区域的一些规则。
Entre semana necesito acostarme bastante pronto.|工作日我需要较早睡觉。
Puedo limpiar la cocina si otra persona saca la basura.|如果另一个人倒垃圾，我可以清洁厨房。
Si hay un problema, prefiero hablarlo directamente.|如果有问题，我更愿意直接谈。
Dentro de dos semanas podemos revisar el acuerdo.|两周后我们可以重新讨论约定。`,
`Luis vive con Sara y Pablo en un piso compartido. Últimamente encuentran platos sucios en la cocina por la mañana. Luis propone hablar el domingo en vez de dejar una nota enfadada. Los tres acuerdan repartirse las tareas y no dejar la vajilla hasta el día siguiente. Sara trabaja por turnos y pide cierta flexibilidad con los horarios. Deciden probar el nuevo reparto durante dos semanas y volver a hablar si alguna tarea no queda bien organizada.`,
`问题在哪个区域？|厨房/车库/学校|0|platos sucios en la cocina。
他们何时商量？|周六/周日/周三|1|hablar el domingo。
Sara 为什么要灵活时间？|要出国/不住那里/轮班工作|2|trabaja por turnos。
先试多久？|两周/一年/一天|0|durante dos semanas。`],
[14,`Acabo de mudarme y tengo varias gestiones pendientes.|我刚搬家，还有几件待办事务。
Voy a hacer una lista y empezar por lo más urgente.|我会列清单，从最紧急的开始。
Necesito confirmar la dirección y la hora de la cita.|我需要确认地址和预约时间。
Si no puedo asistir, avisaré con antelación.|如果不能参加，我会提前通知。
Después de cada llamada guardaré una nota con la respuesta.|每次通话后，我都会记下答复。
Al terminar comprobaré qué asuntos siguen sin resolver.|结束时我会检查哪些事务仍未解决。`,
`Lin se ha mudado a un barrio nuevo de Valencia. Tiene una cita para entregar documentos el miércoles y quiere apuntarse a un curso cerca de casa. Al leer la confirmación, ve que la atención será en un edificio distinto del habitual. Escribe para comprobar la dirección y prepara los documentos que le indican. Después llama a una escuela, pero el grupo que prefiere está completo. Pide información sobre otro horario y anota que todavía espera esa respuesta.`,
`预约在哪天？|周三/周五/周日|0|el miércoles。
办事地点怎样？|原地点/另一栋楼/线上办理|1|un edificio distinto。
喜欢的班怎样？|已取消/降价/已经满员|2|está completo。
还在等什么？|其他时段的信息/护照寄送/租金清单|0|información sobre otro horario。`]
],
'de-DE':[
[16,`Ich habe eine Nachricht über einen Kurs bekommen.|我收到了一条关于课程的消息。
In der Nachricht steht nicht, wer sie geschrieben hat.|消息没有写明是谁写的。
Bevor ich meine Pläne ändere, prüfe ich die Information.|改变计划前，我会核实信息。
Ich frage lieber bei der bekannten Adresse der Schule nach.|我更愿意通过学校的已知地址询问。
Wenn sich die Uhrzeit ändert, sage ich den anderen Bescheid.|如果时间改变，我会告诉其他人。
Danach speichere ich die Bestätigung, damit ich sie wiederfinde.|随后我保存确认消息，以便再次找到。`,
`Anna bekommt in einer Gruppe eine weitergeleitete Nachricht. Darin steht, dass der Kurs am Dienstag ausfällt. Die Nachricht enthält aber weder ein Datum noch den Namen einer verantwortlichen Person. Bevor Anna ihren Kalender ändert, schreibt sie an die bekannte Adresse der Schule. Die Antwort kommt am Nachmittag: Der Kurs findet am Dienstag statt, allerdings in einem anderen Raum. Anna speichert die Bestätigung und informiert die Person, die ihr die Nachricht geschickt hat.`,
`最初消息声称什么？|周二停课/更换教材/增加学费|0|der Kurs am Dienstag ausfällt。
消息缺什么？|地图/日期和负责人姓名/照片|1|weder ein Datum noch den Namen。
实际改变什么？|日期/学校/教室|2|in einem anderen Raum。
Anna 保存什么？|确认消息/银行密码/购物单|0|speichert die Bestätigung。`],
[15,`Ich habe dieses Gerät gestern gekauft.|我昨天买了这台设备。
Zu Hause habe ich bemerkt, dass ein Teil fehlt.|在家我发现少了一个部件。
Ich habe den Beleg mitgebracht und möchte das Problem erklären.|我带了凭证，想说明问题。
Können Sie mir sagen, welche Möglichkeiten es gibt?|您能告诉我有哪些解决选项吗？
Falls Sie es prüfen müssen, wann bekomme ich eine Antwort?|如果需要检查，我什么时候能得到答复？
Bitte geben Sie mir eine Nummer für meine Anfrage.|请给我一个咨询编号。`,
`Am Montag kauft Chen eine Lampe für sein Zimmer. Beim Zusammenbauen bemerkt er, dass ein Teil nicht passt. Er liest die Anleitung noch einmal und macht zwei Fotos. Am Mittwoch geht er mit den Fotos und dem Beleg ins Geschäft. Die Mitarbeiterin hört ihm zu, möchte aber erst beim technischen Dienst nachfragen. Eine sofortige Erstattung verspricht sie nicht. Chen bekommt eine Nummer für seine Anfrage und soll die Antwort am Freitag per E-Mail erhalten.`,
`Chen 买了什么？|灯/鞋子/手机|0|eine Lampe。
部件有什么问题？|颜色浅/装配不合适/完全丢失|1|ein Teil nicht passt。
是否立即承诺退款？|是/只退一半/没有|2|Eine sofortige Erstattung verspricht sie nicht。
何时预计收到答复？|周五/周一/当天上午|0|am Freitag per E-Mail。`],
[12,`Letzten Monat habe ich eine Freundin besucht.|上个月我去看望了一位朋友。
Ich bin früh losgefahren, weil ich den Weg nicht gut kannte.|我很早出发，因为不熟悉路线。
Als ich am Bahnhof ankam, war mein Zug schon weg.|我到车站时，火车已经开走了。
Ich habe um Hilfe gebeten und eine andere Verbindung gesucht.|我请求帮助，并寻找另一种接驳。
Dann habe ich meiner Freundin gesagt, dass ich später komme.|随后我告诉朋友我会晚到。
Am Ende konnten wir uns treffen und unseren Plan ändern.|最后我们见到了面，并调整了计划。`,
`Am Samstag wollte Mei mit ihrer Freundin eine Ausstellung besuchen. Als sie aus dem Haus ging, regnete es stark. Der Bus kam später als gewöhnlich, deshalb rief Mei ihre Freundin an und erklärte die Verspätung. Sie prüfte auch eine andere Verbindung, doch dann kam ihr Bus. Die beiden trafen sich vierzig Minuten später als geplant. Vor dem Mittagessen blieb nur wenig Zeit. Deshalb sahen sie sich nur einen Ausstellungsraum an und beschlossen, an einem anderen Tag wiederzukommen.`,
`天气怎样？|下雨/晴朗/下雪|0|regnete es stark。
为何打电话？|订座/解释迟到/找钱包|1|erklärte die Verspätung。
晚了多久见面？|四分钟/一小时/四十分钟|2|vierzig Minuten später。
他们最后怎样安排？|只看一个展厅/看完所有展厅/没见面|0|nur einen Ausstellungsraum。`],
[10,`Wir möchten am nächsten Sonntag einen Ausflug machen.|我们想在下周日出游。
Zuerst müssen wir uns auf eine Abfahrtszeit einigen.|首先我们必须商定出发时间。
Wenn es regnet, können wir etwas drinnen unternehmen.|如果下雨，我们可以安排室内活动。
Ich möchte den Plan bestätigen, bevor ich Fahrkarten kaufe.|我想在买票前确认计划。
Vielleicht sollten wir am Nachmittag etwas Zeit frei lassen.|也许我们应该在下午留些空闲时间。
So können wir ohne Stress auf Änderungen reagieren.|这样我们能从容应对变动。`,
`Lena und zwei Freunde möchten am Sonntag die Stadt verlassen. Sie vergleichen zwei Orte, die mit dem Zug erreichbar sind. In einem Ort gibt es einen Park am Fluss, im anderen ein Museum in Bahnhofsnähe. Sie haben noch keine Fahrkarten gekauft, weil sie auf die Wettervorhersage warten. Bei Regen wollen sie ins Museum gehen. Einer der Freunde arbeitet am Montag früh, deshalb möchten sie vor acht Uhr abends zurück sein. Den endgültigen Plan bestätigen sie am Freitag.`,
`哪天出游？|周日/周三/周一|0|am Sonntag。
为什么未买票？|没钱/等天气预报/找不到车站|1|auf die Wettervorhersage warten。
雨天去哪？|河边/公园/博物馆|2|ins Museum。
为何早些返回？|朋友周一早班/学校关门/餐厅搬走|0|arbeitet am Montag früh。`],
[8,`Ich wohne mit zwei anderen Personen in einer Wohnung.|我和另外两个人合住。
Wir möchten Regeln für die gemeinsamen Räume vereinbaren.|我们想商定公共区域的规则。
Unter der Woche muss ich ziemlich früh schlafen gehen.|工作日我必须较早睡觉。
Ich kann die Küche putzen, wenn jemand den Müll rausbringt.|如果有人倒垃圾，我可以打扫厨房。
Bei einem Problem möchte ich lieber direkt miteinander sprechen.|遇到问题，我更想直接交谈。
In zwei Wochen können wir unsere Vereinbarung überprüfen.|两周后我们可以重新讨论约定。`,
`Luis teilt sich eine Wohnung mit Sara und Paul. In letzter Zeit steht morgens oft schmutziges Geschirr in der Küche. Luis möchte keinen ärgerlichen Zettel schreiben, sondern bittet um ein Gespräch am Sonntag. Die drei verteilen die Aufgaben neu und vereinbaren, das Geschirr nicht bis zum nächsten Tag stehen zu lassen. Sara arbeitet im Schichtdienst und braucht deshalb flexible Zeiten. Sie wollen den neuen Plan zwei Wochen lang ausprobieren und danach gemeinsam überlegen, ob er im Alltag funktioniert.`,
`主要问题在哪？|厨房/火车站/学校|0|schmutziges Geschirr in der Küche。
何时交谈？|周五/周日/周三|1|am Sonntag。
Sara 为什么要灵活时间？|在度假/不合住/轮班工作|2|arbeitet im Schichtdienst。
试行多久？|两周/两年/一天|0|zwei Wochen lang。`],
[14,`Ich bin gerade umgezogen und muss mehrere Dinge erledigen.|我刚搬家，有几件事要办理。
Zuerst schreibe ich eine Liste mit den wichtigsten Aufgaben.|首先我列出最重要的任务。
Ich muss die Adresse und die Uhrzeit meines Termins bestätigen.|我必须确认预约地址和时间。
Wenn ich nicht kommen kann, sage ich rechtzeitig Bescheid.|如果不能来，我会及时通知。
Nach jedem Gespräch notiere ich die Antwort.|每次交谈后，我都记下答复。
Am Ende prüfe ich, welche Fragen noch offen sind.|最后我检查还有哪些问题没有解决。`,
`Lin ist in ein neues Viertel gezogen. Am Mittwoch hat sie einen Termin, um Unterlagen abzugeben. Außerdem sucht sie einen Sprachkurs in der Nähe ihrer Wohnung. In der Terminbestätigung steht, dass die Beratung in einem anderen Gebäude stattfindet. Lin fragt nach der genauen Adresse und bereitet die genannten Unterlagen vor. Danach ruft sie eine Schule an. Ihr bevorzugter Kurs ist schon voll. Sie bittet um Informationen zu einem anderen Termin und notiert, dass diese Antwort noch fehlt.`,
`预约在哪天？|周三/周五/周一|0|Am Mittwoch。
接待地点怎样？|原地址/另一栋楼/只有网上|1|in einem anderen Gebäude。
课程遇到什么问题？|涨价/教材丢了/心仪课程已满|2|bevorzugter Kurs ist schon voll。
还在等待什么？|另一个时段信息/护照/租房合同|0|Informationen zu einem anderen Termin。`]
]};
for(const [locale,workshops] of Object.entries(data)){
const file=path.join(__dirname,locale+'.json'),course=JSON.parse(fs.readFileSync(file));course.chapters=course.chapters.slice(0,18);
workshops.forEach(([source,lines,test,questions],i)=>{const original=course.chapters[source-1],pairs=lines.split('\n').map(x=>x.split('|')),number=19+i,id=locale.slice(0,2)+'-'+number,title=titles[i];course.chapters.push({id,number,title,level:'B1',stage:'intermediate',goal:'将已学表达迁移到'+title+'，说明细节、请求澄清并记录后续行动。',grammar:{title:'综合运用与迁移',explanation:'复用已学句式处理新情境。本章重点是把信息说清楚、按时间顺序说明，并在不确定时请求确认。请对照前章规则，保留重音、名词大小写和礼貌形式。',examples:pairs.slice(0,2).map(([text,zh])=>({text,zh}))},vocab:original.vocab.map(v=>({...v,review:true})),lessons:pairs.map(([text,zh],j)=>({id:id+'-'+(j+1),text,zh,tip:'先理解整句，再替换人物、时间和地点。请用新细节复述，不要只背原句。'})),dialogue:[],reading:{title:'生活表达示范',text:pairs.map(x=>x[0]).join(' '),zh:pairs.map(x=>x[1]).join('')},assessment:{reading:{title:'陌生情境验收',text:test},questions:questions.split('\n').map(x=>{const [prompt,options,answer,explanation]=x.split('|');return{prompt,options:options.split('/'),answer:+answer,explanation}}),writing:'围绕“'+title+'”，写80–100个目标语言词，包含背景、两个具体细节、请求和后续行动。写完检查时态、称呼与衔接，保存后修改一次。',speaking:'用目标语言模拟“'+title+'”，持续约一分钟，再让伙伴提出两个追问。说明一个备选方案；没听懂时请求重复或改述。口语需自行或由合适的评阅者核对，系统不据此自动授予等级。'}})});
fs.writeFileSync(file,JSON.stringify(course,null,2));}
