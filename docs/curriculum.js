/* Original course expansion. IDs 1–20 are retained unchanged. */
const courseStandards=[
 ['基础开口',['理解问候和简单请求','阅读简短人物卡','介绍自己并请求重复','写出个人信息和简单句'],'be、代词、冠词、基础问句'],
 ['描述日常',['听懂时间与作息','阅读日程和便条','描述习惯并询问安排','写一段日常介绍'],'一般现在时、频率、时间介词'],
 ['完成城市事务',['听懂价格和路线','阅读菜单、告示、营业时间','购物、点餐并澄清信息','写一条预约或询问信息'],'数量、比较、礼貌请求'],
 ['讲述过去',['理解过去事件顺序','阅读旅行记录与人物经历','叙述经历并说明原因','写有先后顺序的经历'],'一般过去时、过去进行时、连接词'],
 ['规划旅行',['听懂行程变化','阅读预订与交通信息','计划行程并解释选择','写旅行计划和询问信'],'将来表达、比较级、条件句入门'],
 ['解释并解决问题',['提取问题、条件和建议','阅读服务说明与解决方案','解释问题、协商并确认','写清问题和希望采取的措施'],'情态动词、条件、因果与礼貌表达'],
 ['维持社交对话',['理解偏好、态度和邀请','阅读社交消息与活动信息','回应邀请、表达感受并追问','写邀请、回复和个人观点'],'现在完成时、关系从句、让步'],
 ['学习与工作交流',['提取任务、期限和分工','阅读项目简报和邮件','介绍经历、讨论方案并汇报','写有组织的工作或学习邮件'],'完成时、被动入门、复杂句与段落'],
 ['解释复杂信息',['理解较长说明','阅读多段材料并概括','解释因果与过程','组织说明段落'],'第9章待制作'],
 ['提出并论证观点',['识别立场与证据','比较论据和限制','展开观点并回应反问','写有论证结构的文章'],'第10章待制作'],
 ['雅思四项专项',['限时听力训练','学术或培训类阅读','口语三部分训练','按所选考试类型完成写作'],'第11章待制作'],
 ['综合模拟与补强',['陌生材料复测','完整阅读测评','人工校准的口语测评','人工校准的写作测评'],'第12章待制作']
].map((x,i)=>({id:i+1,title:chapters[i],stage:x[0],canDo:x[1],grammar:x[2],available:i<8,lessons:i<8?20:0,target:i<8?'日常英语能力建设':'面向6.5 / 7分路线的后续训练；不承诺成绩'}));
const expansionRows={
2:`早晨的闹钟|I get up at seven.|我七点起床。|get up=起床|I get up at six.|我六点起床。|时间点前用 at。|What time do you get up?
早餐时间|I usually have breakfast at home.|我通常在家吃早餐。|usually=通常|I usually have lunch at work.|我通常在工作地点吃午餐。|频率副词通常在实义动词前。|Where do you have breakfast?
选择交通|I go to work by bus.|我乘公交车上班。|by bus=乘公交车|I go to school by train.|我乘火车上学。|交通方式 by 后通常不加冠词。|How do you go to work?
周末的公园|She walks in the park every day.|她每天在公园散步。|every day=每天|He walks in the park every evening.|他每天晚上在公园散步。|第三人称单数主语后，walk 变 walks。|What does your sister do every day?
早餐桌的交流|Do you have breakfast before work?|你上班前吃早餐吗？|before=在……之前|Do you exercise before breakfast?|你早餐前锻炼吗？|Do 用来构成一般现在时问句。|Ask me about breakfast before work.
空闲的下午|I sometimes read in the afternoon.|我有时下午阅读。|sometimes=有时|I sometimes swim in the morning.|我有时早上游泳。|一天中的时段通常用 in。|What do you do in the afternoon?
忙碌的星期一|I do not work on Sundays.|我星期日不工作。|on Sundays=在每个星期日|I do not study on Saturdays.|我星期六不学习。|一般现在时否定用 do not 加动词原形。|Do you work every day?
询问开放时间|What time does the library open?|图书馆几点开门？|open=开门|What time does the museum close?|博物馆几点关门？|does 后的动词用原形。|Ask about the library opening time.
比较两种习惯|My brother drinks tea, but I prefer coffee.|我哥哥喝茶，但我更喜欢咖啡。|prefer=更喜欢|My sister drinks coffee, but I prefer tea.|我姐姐喝咖啡，但我更喜欢茶。|but 连接有对比关系的信息。|What do you and your brother drink?
整理一周|I clean my room twice a week.|我每周打扫房间两次。|twice=两次|I go swimming once a week.|我每周游泳一次。|once、twice 可用于表示频率。|How often do you clean your room?
找到午餐伙伴|Are you free at lunchtime?|你午餐时间有空吗？|free=有空的|Are you free this evening?|你今晚有空吗？|询问状态用 be 动词，不用 do。|Ask whether I am free at lunchtime.
确定见面地点|Let us meet outside the library.|我们在图书馆外见吧。|outside=在……外面|Let us meet outside the station.|我们在车站外见吧。|Let us 后接动词原形。|Where shall we meet?
正在做的事|I am cooking dinner now.|我现在正在做晚饭。|cook=做饭|I am reading a book now.|我现在正在读书。|am 加 -ing 表示此刻正在进行。|What are you doing now?
今天与平时|I usually walk, but today I am taking the bus.|我平时步行，但今天正在乘公交车。|today=今天|I usually cook, but today I am eating out.|我平时做饭，但今天正在外面吃饭。|区分通常的习惯和今天的临时情况。|Is today different from your usual routine?
家里的分工|Could you wash the dishes after dinner?|你晚饭后能洗碗吗？|dishes=餐具|Could you clean the table after lunch?|你午饭后能擦桌子吗？|Could you 加动词原形可礼貌请求。|Ask me to wash the dishes after dinner.
睡前的小习惯|I turn off my phone before bed.|我睡前关闭手机。|turn off=关闭|I read a book before bed.|我睡前读书。|before 可接名词，说明先后时间。|What do you do before bed?
休息的理由|I go to bed early because I need enough sleep.|我早睡，因为我需要充足睡眠。|enough=足够的|I drink water because I feel thirsty.|我喝水，因为我觉得口渴。|because 后面接原因分句。|Why do you go to bed early?
安排学习时间|I spend twenty minutes learning English each day.|我每天花二十分钟学英语。|spend=花费|I spend ten minutes reading each morning.|我每天早上花十分钟阅读。|spend 时间加动词 -ing。|How much time do you spend learning English?
调整计划|Can we meet at four instead of three?|我们能改为四点见，而不是三点吗？|instead of=代替；而不是|Can we meet on Friday instead of Thursday?|我们能改为星期五见，而不是星期四吗？|instead of 后接被替代的时间或事物。|Ask to move our meeting from three to four.
一天的分享|After work, I exercise and then make dinner.|下班后，我锻炼，然后做晚饭。|then=然后|After school, I read and then play tennis.|放学后，我阅读，然后打网球。|用 after 和 then 组织事件顺序。|Tell me what you do after work.`,
3:`买一份早餐|How much is this sandwich?|这个三明治多少钱？|sandwich=三明治|How much is this notebook?|这个笔记本多少钱？|询问价格用 How much。|Ask the price of this sandwich.
计算总价|That is five pounds altogether.|总共五英镑。|altogether=总共|That is eight dollars altogether.|总共八美元。|货币和数字一起构成金额。|What is the total price?
选择尺寸|Do you have this shirt in a smaller size?|这件衬衫有小一点的尺码吗？|size=尺码|Do you have this jacket in a larger size?|这件夹克有大一点的尺码吗？|smaller 和 larger 用来比较大小。|Ask for a smaller shirt.
说清数量|I need two bottles of water.|我需要两瓶水。|bottle=瓶|I need three cups of tea.|我需要三杯茶。|不可数名词可通过容器表达数量。|What would you like to buy?
在商店结账|Can I pay by card?|我能刷卡付款吗？|pay=付款|Can I pay in cash?|我能付现金吗？|by card 与 in cash 的介词不同。|Ask whether card payment is possible.
阅读菜单|I would like the vegetable soup.|我想要蔬菜汤。|vegetable=蔬菜|I would like the chicken sandwich.|我想要鸡肉三明治。|用定冠词指菜单上特定菜品。|What would you like to order?
说明饮食需要|Does this dish contain nuts?|这道菜含坚果吗？|contain=包含|Does this soup contain milk?|这道汤含牛奶吗？|contains 在 does 问句中还原成 contain。|Ask whether the dish contains nuts.
提出小要求|Could I have it without sugar?|可以不给我加糖吗？|without=没有；不带|Could I have it without ice?|可以不给我加冰吗？|without 后接名词。|How would you like your drink?
堂食还是带走|I would like it to take away.|我想打包带走。|take away=打包带走|I would like to eat here.|我想在这里吃。|注意带走食物和在店内用餐的区别。|Will you eat here or take it away?
检查账单|I think there is a mistake on the bill.|我觉得账单上有个错误。|bill=账单|I think there is a mistake on the receipt.|我觉得收据上有个错误。|I think 可委婉地引出问题。|Tell me there may be a problem with the bill.
寻找地铁站|How do I get to the station?|我怎么去车站？|station=车站|How do I get to the hospital?|我怎么去医院？|How do I get to 用来问路线。|Ask me the way to the station.
路口左转|Turn left at the next crossing.|在下一个路口左转。|crossing=路口|Turn right at the next crossing.|在下一个路口右转。|祈使句直接以动词原形开头。|Give me a direction at the next crossing.
判断距离|It is about ten minutes away on foot.|步行大约十分钟就到。|on foot=步行|It is about five minutes away by bus.|乘公交车大约五分钟就到。|about 表示近似时间或数量。|How far is the station?
乘哪一班车|Which bus goes to the museum?|哪班公交车去博物馆？|museum=博物馆|Which train goes to the airport?|哪班火车去机场？|which 用于在选项中询问哪一个。|Ask which bus goes to the museum.
车站确认|Is this the right platform for the city centre?|这是去市中心的正确站台吗？|platform=站台|Is this the right bus for the university?|这是去大学的正确公交车吗？|right 在这里表示正确的。|Check the platform for the city centre.
预约服务|I would like to make an appointment.|我想预约。|appointment=预约|I would like to cancel my appointment.|我想取消预约。|make 和 cancel 表达不同预约操作。|How can I help you today?
找到营业时间|Are you open on public holidays?|你们公共假日营业吗？|public holiday=公共假日|Are you open on Sunday evenings?|你们星期日晚上营业吗？|询问营业状态用 are open。|Ask about public holiday opening.
图书馆规则|How long can I keep this book?|这本书我可以借多久？|keep=保留；借用|How long can I use this computer?|这台电脑我可以使用多久？|How long 询问时长。|Ask about the book loan period.
比较两家店|This shop is cheaper than the one near my house.|这家店比我家附近那家便宜。|cheaper=更便宜的|This cafe is quieter than the one near my school.|这家咖啡馆比我学校附近那家安静。|比较级后用 than 引出比较对象。|Compare this shop with the one near your house.
结束城市采购|I found everything I needed, so I can go home.|我找齐了需要的东西，所以可以回家了。|everything=所有东西|I bought everything I needed, so I can leave now.|我买齐了需要的东西，所以现在可以走了。|so 引出结果。|Did you finish your shopping?`,
4:`昨天的天气|It was sunny yesterday.|昨天是晴天。|yesterday=昨天|It was rainy last night.|昨晚下雨了。|过去的状态用 was 或 were。|What was the weather like yesterday?
去了哪里|I visited the museum last weekend.|我上周末参观了博物馆。|visited=参观了|I visited my grandparents last Sunday.|我上星期日探望了祖父母。|规则动词过去式通常加 -ed。|What did you do last weekend?
一次特别的午餐|We had lunch by the river.|我们在河边吃了午饭。|river=河流|We had dinner by the lake.|我们在湖边吃了晚饭。|have 的过去式是 had。|Where did you have lunch?
没有赶上车|I missed the bus, so I walked home.|我没赶上公交车，所以步行回家。|missed=错过了|I missed the train, so I took a taxi.|我没赶上火车，所以乘了出租车。|用 so 连接事件与后果。|Why did you walk home?
问问昨天|Did you enjoy your visit?|你这次参观玩得开心吗？|enjoy=享受；喜欢|Did you enjoy the concert?|你喜欢这场音乐会吗？|did 后的动词用原形。|Ask me about my visit.
补充细节|The exhibition was more interesting than I expected.|展览比我预想的更有趣。|exhibition=展览|The journey was shorter than I expected.|旅程比我预想的更短。|than I expected 表示与原先预期比较。|What did you think of the exhibition?
描述当时的情境|I was waiting outside when it started to rain.|开始下雨时，我正在外面等候。|waiting=等候|I was reading when the phone rang.|电话响时，我正在阅读。|过去进行时描绘背景，过去时说明发生的事。|What were you doing when the rain started?
找回遗失物|I left my bag on the bus.|我把包落在公交车上了。|left=留下了|I left my phone at the cafe.|我把手机落在咖啡馆了。|leave 的过去式是 left。|Where did you leave your bag?
描述物品|It was a small blue bag with a white label.|那是一个带白色标签的蓝色小包。|label=标签|It was a large black case with a red label.|那是一个带红色标签的黑色大箱子。|用大小、颜色及附加特征描述物品。|Can you describe the missing bag?
找到失主|Someone found it and took it to the driver.|有人找到它，并把它交给了司机。|found=找到了|Someone found it and took it to the office.|有人找到它，并把它交到了办公室。|find 和 take 的过去式是 found 和 took。|What happened to the missing bag?
童年的生活|When I was a child, I lived near the sea.|我小时候住在海边。|child=孩子|When I was a student, I lived near the station.|我当学生时住在车站附近。|when 从句可说明过去的时间背景。|Where did you live as a child?
过去的习惯|I used to ride my bike to school.|我过去常骑自行车上学。|used to=过去常常|I used to walk to work.|我过去常步行上班。|used to 描述过去的习惯或状态。|How did you travel to school in the past?
第一次尝试|The first time I cooked, I forgot to add salt.|我第一次做饭时忘了加盐。|forgot=忘记了|The first time I travelled alone, I lost my ticket.|我第一次独自旅行时弄丢了票。|用 The first time 引出首次经历。|Tell me about your first cooking experience.
说清先后|First we bought tickets, and then we joined the queue.|我们先买票，然后排队。|queue=队列|First we checked the map, and then we crossed the road.|我们先查看地图，然后过马路。|first 和 then 帮助听者理解顺序。|What did you do before joining the queue?
解释原因|I chose that course because I wanted to learn something new.|我选那门课是因为我想学点新东西。|chose=选择了|I chose that job because I wanted to help people.|我选那份工作是因为我想帮助别人。|choose 的过去式是 chose。|Why did you choose that course?
一天的转折|Although the weather was bad, we enjoyed the trip.|尽管天气不好，我们仍然享受了旅程。|although=虽然|Although the room was small, we enjoyed our stay.|尽管房间很小，我们仍然住得愉快。|although 引导让步从句，通常不再搭配 but。|Did the bad weather ruin the trip?
回想一次帮助|A neighbour helped me carry the boxes upstairs.|一位邻居帮我把箱子搬上了楼。|neighbour=邻居|A friend helped me move the table downstairs.|一位朋友帮我把桌子搬下了楼。|help 后可接宾语再接动词原形。|Who helped you with the boxes?
说明感受变化|I felt nervous at first, but I became more confident.|起初我很紧张，但后来更自信了。|confident=自信的|I felt tired at first, but I became more energetic.|起初我很累，但后来更有精神了。|用 at first 和 but 表现变化。|How did your feelings change?
从经历中学习|That experience taught me to check the details.|那次经历教会我要核对细节。|experience=经历|That experience taught me to ask for help.|那次经历教会我要寻求帮助。|teach 的过去式是 taught。|What did you learn from that experience?
讲完一个故事|In the end, we arrived safely and had a wonderful evening.|最后，我们安全抵达，度过了一个美好的夜晚。|in the end=最后|In the end, we found the address and met our friends.|最后，我们找到了地址，见到了朋友。|用结尾交代结果，避免只堆砌事件。|How did your story end?`,
5:`选择目的地|I am going to visit the coast next month.|我打算下个月去海边。|coast=海岸|I am going to visit the mountains next summer.|我打算明年夏天去山区。|be going to 表示已有的打算。|Where are you going next month?
安排出发时间|We are leaving on Friday morning.|我们星期五早上出发。|leaving=离开；出发|We are returning on Sunday evening.|我们星期日晚上回来。|现在进行时可表达已安排的未来计划。|When are you leaving?
说明选择理由|I prefer the train because it is more comfortable.|我更喜欢火车，因为它更舒适。|comfortable=舒适的|I prefer the bus because it is less expensive.|我更喜欢公交车，因为它更便宜。|more 和 less 可用于多音节形容词比较。|Why do you prefer the train?
确认座位|Could I reserve a seat by the window?|我可以预订一个靠窗座位吗？|reserve=预订|Could I reserve a seat near the door?|我可以预订一个靠门座位吗？|by the window 表示靠窗的位置。|What kind of seat would you like?
整理行李|I will pack a light jacket in case it gets cold.|我会带一件薄外套，以防天气变冷。|in case=以防|I will take an umbrella in case it rains.|我会带伞，以防下雨。|in case 后的未来情况通常用现在时。|Why will you pack a jacket?
办理入住|I have a reservation for two nights.|我预订了两晚住宿。|reservation=预订|I have a reservation for three nights.|我预订了三晚住宿。|for 加时间段说明持续时间。|Do you have a reservation?
提出房间偏好|Could we have a room away from the lift?|我们可以要一间远离电梯的房间吗？|away from=远离|Could we have a room away from the street?|我们可以要一间远离街道的房间吗？|away from 引出想避开的地方。|Do you have a room preference?
核对早餐安排|Is breakfast included in the price?|价格包含早餐吗？|included=被包括的|Is parking included in the price?|价格包含停车费吗？|be included in 表示包含在其中。|Ask whether the price includes breakfast.
了解退房时间|What time do we need to check out?|我们需要几点退房？|check out=退房|What time do we need to check in?|我们需要几点办理入住？|区分 check in 和 check out。|Ask about the check-out time.
提出行李寄存|May I leave my luggage here until this afternoon?|我可以把行李放在这里直到今天下午吗？|luggage=行李|May I leave my suitcase here until this evening?|我可以把手提箱放在这里直到今晚吗？|luggage 是不可数名词。|What would you like to do with your luggage?
安排行程|If the weather is good, we will go hiking.|如果天气好，我们就去徒步。|hiking=徒步|If the weather is bad, we will visit the museum.|如果天气不好，我们就参观博物馆。|条件从句用现在时，主句可用 will。|What will you do if the weather is good?
留出充足时间|We should leave early to avoid the traffic.|我们应该早点出发，以避开交通拥堵。|avoid=避免|We should book early to avoid disappointment.|我们应该早点预订，以免失望。|to 加动词原形说明目的。|Why should we leave early?
确认交通延误|How long is the flight delayed?|航班延误多久？|delayed=延误的|How long is the train delayed?|火车延误多久？|delayed 描述交通班次的状态。|Ask about the flight delay.
改变旅行计划|Would it be possible to change my ticket?|可以更改我的票吗？|possible=可能的|Would it be possible to change my booking?|可以更改我的预订吗？|Would it be possible to 是礼貌请求结构。|Ask to change your ticket politely.
比较两种方案|Taking the direct train will save us an hour.|乘直达火车将为我们节省一小时。|direct=直达的|Taking a taxi will save us twenty minutes.|乘出租车将为我们节省二十分钟。|动名词短语可以作主语。|What is the advantage of the direct train?
寻找当地活动|Is there anything interesting to do nearby?|附近有什么有趣的活动吗？|nearby=在附近|Is there anywhere quiet to relax nearby?|附近有什么安静的地方可以休息吗？|形容词通常放在 anything 等不定代词后。|Ask about activities nearby.
说明预算|We would like to keep the total cost under two hundred pounds.|我们希望把总费用控制在两百英镑以内。|total cost=总费用|We would like to keep the total cost under three hundred dollars.|我们希望把总费用控制在三百美元以内。|under 加金额说明预算上限。|What is your budget?
确保安全|Please let me know when you arrive.|你到达时请告诉我。|arrive=到达|Please let me know when you get home.|你到家时请告诉我。|将来时间从句中的 when 后通常用现在时。|What would you like me to do after arriving?
分享期待|I am looking forward to trying the local food.|我期待尝试当地食物。|look forward to=期待|I am looking forward to meeting the local people.|我期待结识当地人。|look forward to 后接名词或 -ing。|What are you looking forward to?
确认完整计划|We will stay for two nights and return on Sunday.|我们将住两晚，并在星期日返回。|return=返回|We will stay for three nights and return on Monday.|我们将住三晚，并在星期一返回。|简明交代时长和返回时间。|Can you confirm the final plan?`,
6:`描述身体不适|I have had a headache since this morning.|我从今天早上开始一直头痛。|headache=头痛|I have had a cough since yesterday.|我从昨天开始一直咳嗽。|since 后接开始时间点。|How long have you felt unwell?
询问使用方法|How often should I take this medicine?|这种药我应该多久服用一次？|medicine=药|How often should I use this cream?|这种乳膏我应该多久使用一次？|这是询问专业人员的表达练习，不提供用药建议。|Ask the pharmacist about the instructions.
说明过敏情况|I am allergic to peanuts.|我对花生过敏。|allergic=过敏的|I am allergic to milk.|我对牛奶过敏。|be allergic to 后接过敏原。|Do you have any allergies?
请求专业帮助|Could I speak to a doctor, please?|请问我可以和医生沟通吗？|doctor=医生|Could I speak to a pharmacist, please?|请问我可以和药剂师沟通吗？|Could I speak to 用于请求与某人沟通。|What kind of help do you need?
确认理解|So I should come back tomorrow, is that right?|所以我应该明天回来，对吗？|is that right=是这样吗|So I should bring my passport, is that right?|所以我应该带护照，对吗？|复述信息再确认，有助于避免误解。|Check that you have understood the plan.
说明设备故障|The heater in my room is not working.|我房间的暖气坏了。|heater=暖气设备|The light in my room is not working.|我房间的灯坏了。|is not working 可说明设备无法正常运转。|What is wrong with your room?
说明问题影响|The noise is making it difficult to sleep.|噪声让我难以入睡。|difficult=困难的|The delay is making it difficult to finish on time.|延误让我难以按时完成。|make it difficult to 加动词说明造成的困难。|How is the noise affecting you?
提出明确请求|Could someone come and check it today?|今天能有人来检查一下吗？|check=检查|Could someone come and repair it tomorrow?|明天能有人来修理一下吗？|请求中说清希望采取的动作和时间。|What would you like us to do?
协商替代方案|If it cannot be repaired, could I change rooms?|如果修不好，我可以换房间吗？|repair=修理|If it cannot be replaced, could I get a refund?|如果无法更换，我可以退款吗？|先说明条件，再提出替代方案。|What if we cannot repair it?
确认处理时间|When can I expect the problem to be resolved?|我可以预期这个问题何时解决？|resolved=被解决的|When can I expect the parcel to be delivered?|我可以预期包裹何时送达？|expect 加宾语再接不定式。|Ask when the problem will be resolved.
退换商品|I bought this yesterday, but it does not fit.|我昨天买了这个，但它不合适。|fit=合适；合身|I bought this last week, but it does not work.|我上周买了这个，但它不能用。|先交代购买时间，再说明问题。|Why would you like to return it?
提供购买证明|I still have the receipt and the original packaging.|我还保留着收据和原包装。|receipt=收据|I still have the receipt and the instruction booklet.|我还保留着收据和说明书。|still 表示某种情况持续到现在。|Do you have proof of purchase?
讨论退款方式|Would you prefer a replacement or a refund?|您更希望换货还是退款？|refund=退款|Would you prefer a repair or a replacement?|您更希望维修还是换货？|用 or 给出明确的可选方案。|Offer me two possible solutions.
温和地坚持|I understand, but I would still like to speak to the manager.|我理解，但我仍然想和经理沟通。|manager=经理|I understand, but I would still like a written explanation.|我理解，但我仍然希望得到书面解释。|先回应对方，再礼貌重申需求。|How can you politely insist on your request?
达成解决办法|That solution would work for me.|那个解决办法对我可行。|solution=解决办法|That appointment time would work for me.|那个预约时间对我合适。|work for someone 在这里表示对某人可行。|Would this solution be acceptable?
请对方澄清|What exactly do you mean by an extra charge?|您说的额外收费具体是什么意思？|extra charge=额外收费|What exactly do you mean by a service fee?|您说的服务费具体是什么意思？|What do you mean by 用于请求解释。|Ask me to explain the extra charge.
解释误会|I think there has been a misunderstanding.|我觉得发生了一些误会。|misunderstanding=误会|I think there has been a mistake.|我觉得出了一个错误。|现在完成时可连接已发生的问题与现在的影响。|How would you introduce a possible misunderstanding?
主动提出帮助|Would you like me to write it down for you?|你需要我为你写下来吗？|write down=写下来|Would you like me to explain it again?|你需要我再解释一遍吗？|Would you like me to 表达主动提供帮助。|Offer to write the information down.
留下一份记录|Could you send me a confirmation by email?|您可以通过邮件给我发送确认信息吗？|confirmation=确认信息|Could you send me the details by email?|您可以通过邮件给我发送详细信息吗？|说清信息内容和发送方式。|Ask for email confirmation.
回顾处理结果|Thank you for helping me sort this out.|谢谢您帮我解决这件事。|sort out=处理；解决|Thank you for helping me arrange the meeting.|谢谢您帮我安排会议。|thank someone for 后接名词或 -ing。|How would you close the conversation?`,
7:`发出一次邀请|Would you like to join us for dinner?|你愿意和我们一起吃晚饭吗？|join=加入|Would you like to join us for a walk?|你愿意和我们一起散步吗？|Would you like to 用来礼貌邀请。|Invite me to dinner.
接受邀请|That sounds lovely. What time should I come?|听起来很棒，我应该几点来？|lovely=令人愉快的|That sounds interesting. Where should we meet?|听起来很有趣，我们应该在哪里见？|回应邀请后，可追问安排细节。|How would you accept the invitation?
礼貌拒绝|I would love to, but I already have plans.|我很想去，但我已经有安排了。|plans=安排|I would love to, but I have to work.|我很想去，但我必须工作。|先表达感谢或意愿，再解释限制。|Can you come to dinner tonight?
提出其他时间|Could we do it another day instead?|我们能改天再做这件事吗？|another=另一个|Could we meet next week instead?|我们能改成下周见面吗？|instead 可以放在句末表示替代。|Suggest a different day.
约定带些什么|I can bring some fruit if that would help.|如果有帮助的话，我可以带些水果。|fruit=水果|I can bring some drinks if that would help.|如果有帮助的话，我可以带些饮料。|提供帮助时说明具体可以做什么。|What could you bring to dinner?
聊聊最近经历|Have you been to the new art gallery?|你去过那家新美术馆吗？|gallery=美术馆|Have you been to the new science museum?|你去过那家新科学博物馆吗？|have been to 询问经历。|Ask me about the new art gallery.
追问经历细节|What did you enjoy most about it?|你最喜欢其中的什么？|most=最|What did you find most difficult about it?|你觉得其中最难的是什么？|确定过去经历后，可用过去时追问细节。|Ask a follow-up question about my visit.
分享共同兴趣|I have been interested in photography for years.|我对摄影感兴趣已经很多年了。|photography=摄影|I have been interested in music for years.|我对音乐感兴趣已经很多年了。|for years 说明持续了一段时间。|How long have you been interested in photography?
介绍一位朋友|She is the friend who helped me move.|她就是帮我搬家的那位朋友。|who=引导修饰人的关系从句|He is the neighbour who found my bag.|他就是找到我包的那位邻居。|who 从句补充说明是哪一个人。|Which friend are you talking about?
让谈话继续|That is interesting. Could you tell me more?|这很有趣，你能再多说一点吗？|tell=告诉；讲述|That is surprising. Could you explain why?|这很令人意外，你能解释原因吗？|回应内容后追问，帮助维持交流。|How can you encourage me to continue?
说出个人偏好|I would rather spend the evening somewhere quiet.|我更愿意在安静的地方度过晚上。|would rather=宁愿|I would rather spend the weekend outdoors.|我更愿意在户外度过周末。|would rather 后接动词原形。|What sort of evening would you prefer?
有礼貌地不同意|I see your point, although I feel differently.|我明白你的观点，不过我的感受不同。|point=观点|I see your point, although I have some doubts.|我明白你的观点，不过我有一些疑问。|表达分歧前先承认听懂了对方。|How would you disagree politely?
给观点一个理由|For me, the main benefit is having more time together.|对我来说，主要好处是有更多共处时间。|benefit=好处|For me, the main benefit is learning from each other.|对我来说，主要好处是互相学习。|用具体理由支持偏好。|What is the main benefit of group activities?
理解另一种选择|Even though I prefer small groups, I enjoyed the party.|虽然我更喜欢小团体，但我很享受那次聚会。|even though=虽然|Even though I prefer quiet places, I enjoyed the concert.|虽然我更喜欢安静的地方，但我很享受那场音乐会。|even though 连接真实的让步情况。|Did you enjoy the large party?
照顾别人的感受|Please let me know if you would prefer something else.|如果你更喜欢其他选择，请告诉我。|prefer=更喜欢|Please let me know if you need any help.|如果你需要帮助，请告诉我。|用 if 从句表达体贴的条件。|How would you make sure everyone is comfortable?
回应一则好消息|Congratulations on your new job!|祝贺你找到新工作！|congratulations=祝贺|Congratulations on passing your exam!|祝贺你通过考试！|congratulations on 后接名词或 -ing。|I have just got a new job.
回应一次失落|I am sorry to hear that. Do you want to talk about it?|听到这个我很难过，你想聊聊吗？|hear=听到|I am sorry to hear that. Is there anything I can do?|听到这个我很难过，有什么我能做的吗？|关心对方时避免直接替对方下结论。|I have had a difficult day.
解释迟到原因|I am sorry I am late. The bus took longer than usual.|抱歉我迟到了，公交车比平时花的时间长。|usual=通常的|I am sorry I am late. The meeting took longer than usual.|抱歉我迟到了，会议比平时花的时间长。|than usual 用于与通常情况比较。|Why are you late?
保持联系|It was great to see you. Let us keep in touch.|见到你真好，我们保持联系吧。|keep in touch=保持联系|It was great to meet you. Let us stay in touch.|认识你真好，我们保持联系吧。|结束谈话时回应相处感受并说明后续联系。|How would you say goodbye after a good conversation?
总结一次合作|We worked well together because everyone had a chance to contribute.|我们合作得很好，因为每个人都有机会作出贡献。|contribute=作出贡献|We learned a lot because everyone shared their ideas.|我们学到了很多，因为每个人都分享了想法。|用 because 说明合作结果背后的原因。|Why did the group work well together?`,
8:`介绍学习经历|I have studied English for two years.|我已经学英语两年了。|studied=学习过；学习了|I have worked here for three years.|我已经在这里工作三年了。|现在完成时配合 for 表达持续情况。|How long have you studied English?
描述自己的长处|I am good at explaining ideas clearly.|我擅长清楚地解释想法。|clearly=清楚地|I am good at organising group activities.|我擅长组织团体活动。|be good at 后接名词或 -ing。|What are you good at?
说明学习目标|My main goal is to communicate more confidently.|我的主要目标是更自信地交流。|goal=目标|My main goal is to write more clearly.|我的主要目标是写得更清楚。|用主语加 is to 说明目标。|What is your main learning goal?
介绍项目经验|I helped organise an event for new students.|我帮忙组织过一场面向新生的活动。|organise=组织|I helped organise a workshop for local residents.|我帮忙组织过一场面向当地居民的工作坊。|用具体经历支持能力介绍。|Can you give an example of your experience?
回应面试追问|The most challenging part was managing the time.|最有挑战性的部分是管理时间。|challenging=有挑战性的|The most challenging part was explaining the changes.|最有挑战性的部分是解释变化。|was 后可接 -ing 短语说明难点。|What was the most challenging part?
了解任务要求|Could you clarify what we need to submit?|您能说明我们需要提交什么吗？|submit=提交|Could you clarify when we need to submit it?|您能说明我们需要何时提交它吗？|嵌入问句使用陈述语序。|Ask me to clarify the submission requirements.
确认截止日期|The report needs to be finished by Friday.|报告需要在星期五之前完成。|deadline=截止日期|The presentation needs to be finished by Monday.|演示需要在星期一之前完成。|by 加时间表示最迟完成时间。|When does the report need to be finished?
分配工作|I can collect the information while you prepare the slides.|我可以收集信息，同时你准备幻灯片。|collect=收集|I can check the figures while you write the summary.|我可以核对数字，同时你写摘要。|while 连接同时进行或分工的事情。|How should we divide the work?
汇报进展|We have completed the first part, but the introduction still needs work.|我们已完成第一部分，但引言仍需完善。|introduction=引言|We have completed the research, but the conclusion still needs work.|我们已完成研究，但结论仍需完善。|分别说明已完成和仍待处理的内容。|How is the project going?
请求延期|Would it be possible to extend the deadline by two days?|可以把截止日期延长两天吗？|extend=延长|Would it be possible to move the meeting by one hour?|可以把会议时间推迟一小时吗？|by 加时长可表示调整幅度。|Ask politely for two more days.
解释图表趋势|The number of visitors increased during the summer.|访客数量在夏季增加了。|increased=增加了|The number of students decreased during the winter.|学生数量在冬季减少了。|描述变化时区分数量和变化方向。|What happened to visitor numbers?
说明比较结果|The second option is more practical because it costs less.|第二个选项更实际，因为它成本更低。|practical=实际可行的|The first option is more convenient because it takes less time.|第一个选项更方便，因为它花的时间更少。|比较方案时给出具体依据。|Which option would you recommend?
表达不确定性|The results suggest that more people prefer flexible hours.|结果表明，更多人偏好灵活工作时间。|suggest=表明；暗示|The results suggest that more students prefer online classes.|结果表明，更多学生偏好线上课程。|suggest 可表达证据支持的推测，避免过度断言。|What do the results suggest?
提出一个改进|One way to improve the service would be to provide clearer information.|改善服务的一种办法是提供更清晰的信息。|improve=改善|One way to improve the course would be to include more practice.|改善课程的一种办法是加入更多练习。|提出措施时说明具体行动。|How could we improve the service?
考虑另一种观点|However, we should also consider the needs of older users.|不过，我们也应考虑老年用户的需求。|consider=考虑|However, we should also consider the cost of the changes.|不过，我们也应考虑这些变化的成本。|however 用来引出另一面，后面需要完整信息。|Is there anything else we should consider?
撰写正式邮件|I am writing to ask for further information about the course.|我写信是想进一步了解这门课程。|further=进一步的|I am writing to ask for further information about the position.|我写信是想进一步了解这个职位。|正式邮件开头可直接说明写作目的。|How would you begin an enquiry email?
有组织地说明原因|There are two main reasons why I would like to join the programme.|我希望参加这个项目有两个主要原因。|programme=项目；课程|There are two main reasons why I would like to apply for the job.|我希望申请这份工作有两个主要原因。|提出理由数量后，后文要逐一展开。|Introduce the reasons for your application.
请求对方回复|I would appreciate it if you could reply by Thursday.|如果您能在星期四前回复，我将不胜感激。|appreciate=感激|I would appreciate it if you could send the details by Tuesday.|如果您能在星期二前发送详情，我将不胜感激。|I would appreciate it if 用于礼貌请求。|Ask for a reply by Thursday.
总结并提出下一步|To sum up, we need a clearer plan before we begin.|总之，我们开始前需要一个更清晰的计划。|sum up=总结|To sum up, we need more information before we decide.|总之，我们决定前需要更多信息。|总结应回应前文，并提出具体下一步。|Summarise what the team needs next.
汇报一次成长|This project has helped me become better at working with others.|这个项目帮助我更擅长与他人合作。|working with others=与他人合作|This course has helped me become better at explaining my ideas.|这门课程帮助我更擅长解释自己的想法。|将经历与获得的能力联系起来。|What have you learned from this project?`
};
const unitPlans={
2:[['清晨的钟声','小屋厨房','⏰','晨光邮票','Mia','和 Mia 交换作息，找到适合自己的学习节奏。'],['一周的节奏','镇立图书馆','🗓','日程邮票','Ben','查看开放时间，比较习惯，安排一周。'],['共享的一天','社区厨房','🍳','合作邮票','Nora','约好午餐，分配家务，区分习惯和正在发生的事。'],['留一点时间给自己','林间小屋','🌙','日常通行证','Mia','调整约定，留出休息和学习时间。']],
3:[['市集采购单','周末市集','🛍','市集邮票','Nora','核对数量、价格和付款方式，完成采购。'],['咖啡馆午餐','广场咖啡馆','🥣','点餐邮票','Ben','阅读菜单，说明需要，核对账单。'],['穿过城市','中央车站','🚏','路线邮票','Mia','问清路线、距离和站台，再出发。'],['办好一件小事','城市服务中心','🏛','城市通行证','Leo','预约服务，阅读规则，比较可选方案。']],
4:[['昨天的旅程','小镇展馆','🎫','回忆邮票','Ben','一起回顾周末，找出事件的先后与原因。'],['遗失的背包','失物招领处','🎒','线索邮票','Mia','描述当时情境与物品，拼起完整经过。'],['第一次的故事','社区故事会','📷','经历邮票','Nora','分享童年和第一次尝试，并解释选择。'],['故事的结尾','河边长椅','🌅','故事通行证','Leo','补充感受、结果和从经历中学到的事。']],
5:[['在地图前出发','旅行社','🧭','计划邮票','Mia','比较交通方式，安排出发与行李。'],['旅店的窗口','海边旅店','🏨','住宿邮票','Ben','核对预订、房间需求和住宿细节。'],['变动的行程','交通信息台','🚆','应变邮票','Leo','面对天气和延误，协商替代安排。'],['把旅程讲清楚','海岸步道','🗺','旅行通行证','Nora','说明预算、期待和最终计划。']],
6:[['向专业人员求助','社区服务点','🩺','求助邮票','Mia','练习说明不适、询问信息和确认理解。'],['小屋出了问题','旅店前台','🔧','协商邮票','Ben','说清故障、影响、请求与处理时间。'],['找到可行方案','顾客服务台','🧾','解决邮票','Nora','提供事实和凭据，礼貌讨论不同解决方式。'],['把误会说开','服务窗口','🤝','沟通通行证','Leo','请求澄清、复述确认，并留下书面记录。']],
7:[['一封晚餐邀请','邻里花园','💌','邀请邮票','Nora','邀请、回应、说明限制并提出替代时间。'],['让谈话继续','新美术馆','🎨','好奇邮票','Mia','分享经历、追问细节、介绍朋友。'],['不同的选择','社团讨论室','💬','倾听邮票','Ben','表达偏好、理由和分歧，也照顾他人的需要。'],['友谊的回声','社区广场','🌻','友谊通行证','Leo','回应喜忧、解释迟到，并总结合作经历。']],
8:[['第一次面试','校园职业中心','🎓','经历邮票','Leo','用具体经历介绍长处、目标与挑战。'],['一起完成项目','协作工作室','🗂','项目邮票','Mia','澄清要求、分工、汇报与协商期限。'],['把发现说清楚','研究展示厅','📊','思考邮票','Ben','比较结果、提出建议，并考虑限制。'],['一封清楚的邮件','社区办公室','✉','成长通行证','Nora','组织目的、理由、请求和下一步。']]
};
lessons.forEach(l=>{l.chapter=1;l.number=l.id});units.forEach(u=>u.chapter=1);
for(let chapter=2;chapter<=8;chapter++){
 const plans=unitPlans[chapter];plans.forEach((p,i)=>units.push({id:(chapter-1)*4+i+1,chapter,title:p[0],place:p[1],icon:p[2],reward:p[3],npc:p[4],story:p[5],end:`你在${p[1]}完成了这段交流，收集到${p[3]}。下一段故事会带来新的表达任务。`}));
 const rows=expansionRows[chapter].split('\n');if(rows.length!==20)throw Error('Chapter row count '+chapter);
 rows.forEach((row,i)=>{const [title,en,zh,vocab,variant,variantZh,tip,line]=row.split('|'),[word,meaning]=vocab.split('='),id=(chapter-1)*20+i+1,unit=(chapter-1)*4+Math.floor(i/5)+1,u=units[unit-1];
  lessons.push({id,chapter,number:i+1,title,en,zh,word,meaning,scene:`${u.npc} 在${u.place}与你交流。请表达：${zh}`,answer:en,speech:en,options:[],build:en.split(' '),transfer:[`换一个情境，请表达：${variantZh}`,variant,[]],tip,line,npc:u.npc,cn:'听一听对方的问题，再根据任务回应。',link:u.story,unit,checkpoint:(i+1)%5===0});
 });
}
// Cross-lesson distractors stay within the chapter and are semantically distinct.
lessons.filter(l=>l.chapter>1).forEach(l=>{const peers=lessons.filter(p=>p.chapter===l.chapter&&p.id!==l.id);const alternatives=[peers[(l.number+4)%19].en,peers[(l.number+10)%19].en];l.options=[l.en,...alternatives];l.transfer[2]=[l.transfer[1],...alternatives.filter(t=>t!==l.transfer[1])].slice(0,3);if(l.checkpoint){const group=lessons.filter(p=>p.unit===l.unit);checkpointDialogs[l.id]=group.slice(0,3).map(p=>({ask:p.line,cn:p.zh,answers:[p.en]}))}});
const allCourseAudio=[...new Set(lessons.flatMap(l=>[l.en,l.word,l.line,l.transfer[1]]).concat(Object.values(checkpointDialogs).flatMap(ds=>ds.flatMap(d=>[d.ask,...d.answers]))))];
for(const text of allCourseAudio)if(!audioTexts.includes(text))audioTexts.push(text);
