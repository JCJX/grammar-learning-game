// Fourth expedition: original examples aligned to printed pages 111–133 and 137–148.
export const expeditionChapters=[
  {
    "id": "c10",
    "number": "10",
    "title": "电影换机位",
    "subtitle": "同一件事，换一个句子的主角",
    "mechanic": "焦点切换 · 事件箭头 · 时态胶片",
    "theme": "mint",
    "scene": "camera",
    "book": "第 10 章 · 书内 111–117 页",
    "brief": "米娅涂盒子，盒子被米娅涂：事件没有倒过来，只是句子的起点换了。切换机位，保留动作关系，再挑选正确的被动胶片。",
    "lessons": [
      {
        "title": "镜头变了，事件没变",
        "body": "Mia painted the box. 与 The box was painted by Mia. 描述同一次涂色事件。被动把原先的对象作为主语，Mia 仍是动作发出的一方。主语不等于永远执行动作的人。",
        "example": "Mia painted the box. The box was painted by Mia.",
        "zh": "米娅涂了盒子。盒子由米娅涂了颜色。",
        "visual": "camera",
        "tags": [
          "换焦点",
          "事件箭头不反转",
          "主动与被动"
        ]
      },
      {
        "title": "被动助手：be 加过去分词",
        "body": "入门常见被动由 be + 过去分词构成，属于被动动词结构，不一概分析成系动词加表语。be 随时间和新主语搭配；过去分词不按主语单复数再变化。",
        "example": "The box was painted. The boxes were painted.",
        "zh": "盒子涂好了。几个盒子涂好了。",
        "visual": "box",
        "tags": [
          "be + 过去分词",
          "was / were",
          "不能丢掉助手"
        ]
      },
      {
        "title": "把时态胶片一起带过去",
        "body": "进行被动用 be being done；完成被动用 have been done；将来被动可用 will be done。情态动词后用 be done。对照上一章，时态和语态是两个维度。",
        "example": "The box is being painted. The box has been painted.",
        "zh": "盒子正在涂色。盒子已经涂好。",
        "visual": "clock",
        "tags": [
          "进行：being",
          "完成：been",
          "will / can + be"
        ]
      },
      {
        "title": "不必每次都说 by 谁",
        "body": "不知是谁拿走包时，可说 My bag was taken.；已知但不重要时也能省略 by。也可主动说 Someone took my bag.。被动是一种表达选择，不是遇到未知的人就只能用被动。",
        "example": "My bag was taken. Someone took my bag.",
        "zh": "我的包被拿走了。有人拿走了我的包。",
        "visual": "bag",
        "tags": [
          "省略 by 短语",
          "突出对象",
          "较长执行者可后放"
        ]
      },
      {
        "title": "有些镜头需要特别接法",
        "body": "gave Mia a book 可让 Mia 或 the book 作被动主语；painted the box blue 的 blue 仍描述盒子。look after 变被动时 after 保留。sleep 等不及物用法不能照普通宾语步骤被动化；即使有宾语也并非任何搭配都自然可改。",
        "example": "Mia was given a book. A book was given to Mia.",
        "zh": "米娅收到一本书。一本书被送给了米娅。",
        "visual": "train",
        "tags": [
          "双宾语",
          "描述对象保持",
          "look after → be looked after",
          "不是机械换词"
        ]
      }
    ],
    "missions": [
      {
        "id": "c10-m1",
        "title": "让事件换个主角",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "111–113",
        "items": [
          {
            "type": "passive",
            "sentence": "The gate is opened by Mia every morning.",
            "zh": "把大门作为句子主语，仍讲每天早晨发生的事。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "opens",
                  "opens"
                ],
                [
                  "is opened",
                  "is opened"
                ],
                [
                  "are opened",
                  "are opened"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "is opened"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"is opened\"}",
            "why": "一般现在时以单数 gate 为主语，用 is opened；发出动作的仍是 Mia。",
            "icon": "camera",
            "actor": "Mia",
            "patient": "the gate",
            "active": "Mia opens the gate every morning.",
            "frames": {
              "agent": "Mia {film} the gate every morning.",
              "patient": "The gate {film} by Mia every morning."
            },
            "time": "一般现在",
            "objectArt": "house"
          },
          {
            "type": "passive",
            "sentence": "The box was painted by Mia yesterday.",
            "zh": "昨天米娅给盒子上色；把盒子作为句子主语，保留昨天的时间。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "painted",
                  "painted"
                ],
                [
                  "was painted",
                  "was painted"
                ],
                [
                  "is painted",
                  "is painted"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "was painted"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"was painted\"}",
            "why": "过去被动用 was painted；painted 是过去分词。改变焦点不改变谁给盒子上色。",
            "icon": "camera",
            "actor": "Mia",
            "patient": "the box",
            "active": "Mia painted the box yesterday.",
            "frames": {
              "agent": "Mia {film} the box yesterday.",
              "patient": "The box {film} by Mia yesterday."
            },
            "time": "一般过去",
            "objectArt": "box"
          },
          {
            "type": "passive",
            "sentence": "The flowers are watered by the children every day.",
            "zh": "每天孩子们浇花；让复数 flowers 成为句子主语。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "water",
                  "water"
                ],
                [
                  "is watered",
                  "is watered"
                ],
                [
                  "are watered",
                  "are watered"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "are watered"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"are watered\"}",
            "why": "主语改为复数 flowers 后，be 要配 are；不能直接照抄原主语的人称数量。",
            "icon": "camera",
            "actor": "the children",
            "patient": "the flowers",
            "active": "The children water the flowers every day.",
            "frames": {
              "agent": "The children {film} the flowers every day.",
              "patient": "The flowers {film} by the children every day."
            },
            "time": "一般现在",
            "objectArt": "flower"
          },
          {
            "type": "passive",
            "sentence": "The cake will be baked by Mia tomorrow.",
            "zh": "明天米娅会烤蛋糕；镜头先讲蛋糕，保留将来。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "will bake",
                  "will bake"
                ],
                [
                  "will be baked",
                  "will be baked"
                ],
                [
                  "was baked",
                  "was baked"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "will be baked"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"will be baked\"}",
            "why": "将来被动是 will be + 过去分词 baked；will 后不能直接接 baked 表示被动。",
            "icon": "camera",
            "actor": "Mia",
            "patient": "the cake",
            "active": "Mia will bake the cake tomorrow.",
            "frames": {
              "agent": "Mia {film} the cake tomorrow.",
              "patient": "The cake {film} by Mia tomorrow."
            },
            "time": "一般将来",
            "objectArt": "bowl"
          },
          {
            "type": "passive",
            "sentence": "The box is being painted by Mia now.",
            "zh": "此刻米娅正在给盒子上色；突出盒子，保留正在进行。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "is painting",
                  "is painting"
                ],
                [
                  "is being painted",
                  "is being painted"
                ],
                [
                  "has been painted",
                  "has been painted"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "is being painted"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"is being painted\"}",
            "why": "现在进行被动是 is being painted；不是已经完成的 has been painted。",
            "icon": "camera",
            "actor": "Mia",
            "patient": "the box",
            "active": "Mia is painting the box now.",
            "frames": {
              "agent": "Mia {film} the box now.",
              "patient": "The box {film} by Mia now."
            },
            "time": "现在进行",
            "objectArt": "box"
          }
        ]
      },
      {
        "id": "c10-m2",
        "title": "带着时间一起换机位",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "111–113",
        "items": [
          {
            "type": "passive",
            "sentence": "The box was being painted by Mia at nine.",
            "zh": "过去九点那一刻米娅正在给盒子上色；从盒子说起。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "was painting",
                  "was painting"
                ],
                [
                  "was being painted",
                  "was being painted"
                ],
                [
                  "is being painted",
                  "is being painted"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "was being painted"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"was being painted\"}",
            "why": "过去进行被动用 was being painted；being 体现进行，painted 是被动所需的过去分词。",
            "icon": "camera",
            "actor": "Mia",
            "patient": "the box",
            "active": "Mia was painting the box at nine.",
            "frames": {
              "agent": "Mia {film} the box at nine.",
              "patient": "The box {film} by Mia at nine."
            },
            "time": "过去进行",
            "objectArt": "box"
          },
          {
            "type": "passive",
            "sentence": "The box has been painted by Mia.",
            "zh": "向现在汇报盒子已经涂好；选择现在完成的被动。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "has painted",
                  "has painted"
                ],
                [
                  "has been painted",
                  "has been painted"
                ],
                [
                  "is being painted",
                  "is being painted"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "has been painted"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"has been painted\"}",
            "why": "现在完成被动是 has been painted；been 不可遗漏。",
            "icon": "camera",
            "actor": "Mia",
            "patient": "the box",
            "active": "Mia has painted the box.",
            "frames": {
              "agent": "Mia {film} the box.",
              "patient": "The box {film} by Mia."
            },
            "time": "现在完成",
            "objectArt": "box"
          },
          {
            "type": "passive",
            "sentence": "The box had been painted by Mia before lunch.",
            "zh": "回到过去的午饭时刻，盒子在那之前已经涂好。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "had painted",
                  "had painted"
                ],
                [
                  "had been painted",
                  "had been painted"
                ],
                [
                  "has been painted",
                  "has been painted"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "had been painted"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"had been painted\"}",
            "why": "过去完成被动用 had been painted，从过去参照点向前回望。",
            "icon": "camera",
            "actor": "Mia",
            "patient": "the box",
            "active": "Mia had painted the box before lunch.",
            "frames": {
              "agent": "Mia {film} the box before lunch.",
              "patient": "The box {film} by Mia before lunch."
            },
            "time": "过去完成",
            "objectArt": "box"
          },
          {
            "type": "passive",
            "sentence": "The window can be opened by Mia.",
            "zh": "表达窗户可以由米娅打开；让窗户作主语。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "can open",
                  "can open"
                ],
                [
                  "can be opened",
                  "can be opened"
                ],
                [
                  "can opened",
                  "can opened"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "can be opened"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"can be opened\"}",
            "why": "情态动词后是原形 be，再接 opened：can be opened。",
            "icon": "camera",
            "actor": "Mia",
            "patient": "the window",
            "active": "Mia can open the window.",
            "frames": {
              "agent": "Mia {film} the window.",
              "patient": "The window {film} by Mia."
            },
            "time": "情态 can",
            "objectArt": "house"
          },
          {
            "type": "passive",
            "sentence": "Mia painted the box yesterday.",
            "zh": "这次要回答“谁给盒子上了色”，让米娅作主语，使用主动过去式。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "拍动作发出的一方"
                ],
                [
                  "patient",
                  "拍动作涉及的对象"
                ]
              ],
              "film": [
                [
                  "painted",
                  "painted"
                ],
                [
                  "was painted",
                  "was painted"
                ],
                [
                  "is painted",
                  "is painted"
                ]
              ]
            },
            "expected": {
              "focus": "agent",
              "film": "painted"
            },
            "answer": "{\"focus\":\"agent\",\"film\":\"painted\"}",
            "why": "焦点选择由表达目的决定；主动和被动都能描述这个事件，本题明确要求从 Mia 说起。",
            "icon": "camera",
            "actor": "Mia",
            "patient": "the box",
            "active": "Mia painted the box yesterday.",
            "frames": {
              "agent": "Mia {film} the box yesterday.",
              "patient": "The box {film} by Mia yesterday."
            },
            "time": "一般过去",
            "objectArt": "box"
          }
        ]
      },
      {
        "id": "c10-m3",
        "title": "被动助手检查站",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "112–115",
        "items": [
          {
            "type": "pick",
            "sentence": "The boxes ___ painted yesterday.",
            "zh": "昨天几个盒子被涂了色。",
            "target": "___",
            "answer": "were",
            "options": [
              "were",
              "was",
              "are"
            ],
            "why": "boxes 是复数，过去被动用 were painted；不能配单数 was。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The gate must ___ closed at night.",
            "zh": "规定夜间大门必须被关好。",
            "target": "___",
            "answer": "be",
            "options": [
              "be",
              "been",
              "being"
            ],
            "why": "must 后用原形 be，再接过去分词 closed。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The box has ___ painted.",
            "zh": "现在完成被动；补上缺少的助手。",
            "target": "___",
            "answer": "been",
            "options": [
              "been",
              "being",
              "be"
            ],
            "why": "has been painted 表示完成被动；has being painted 不成立。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The cake was ___ by Mia.",
            "zh": "bake 的过去分词是什么？",
            "target": "___",
            "answer": "baked",
            "options": [
              "baked",
              "baking",
              "bake"
            ],
            "why": "was + 过去分词 baked；baking 是 -ing 形式。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The box is being painted.",
            "zh": "这句话在本题中是进行被动，它的整体谓语是什么？",
            "target": "整句",
            "answer": "is being painted",
            "options": [
              "is being painted",
              "painted 单独作普通形容词"
            ],
            "why": "本题描述正在涂色的动作，is being painted 整体构成进行被动，不一概套系表分析。",
            "icon": "camera"
          }
        ]
      },
      {
        "id": "c10-m4",
        "title": "送礼物和保留线索",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "114–115",
        "items": [
          {
            "type": "pick",
            "sentence": "A book was given ___ Mia.",
            "zh": "米娅收到一本书；以书作主语时，用 to 引出接收者。",
            "target": "___",
            "answer": "to",
            "options": [
              "to",
              "by"
            ],
            "why": "原事件是给米娅一本书，to Mia 表接收者；by Mia 会变成米娅是赠送者。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "Mia was ___ a book.",
            "zh": "give 的过去分词是 given。",
            "target": "___",
            "answer": "given",
            "options": [
              "given",
              "gave",
              "giving"
            ],
            "why": "让接收者 Mia 作被动主语：was given a book；gave 是过去式。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The box was painted blue by Mia.",
            "zh": "blue 在这里描述谁？",
            "target": "整句",
            "answer": "the box",
            "options": [
              "the box",
              "Mia"
            ],
            "why": "主动句里 paint the box blue，blue 描述盒子；被动后仍然描述盒子。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The rabbit was looked ___ by Mia.",
            "zh": "米娅照顾兔子；look after 是本题固定搭配。",
            "target": "___",
            "answer": "after",
            "options": [
              "after",
              "省略 after"
            ],
            "why": "look after 表照顾，变为 be looked after 时 after 要保留。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The baby sleeps.",
            "zh": "sleep 在这里无宾语，应怎样处理？",
            "target": "整句",
            "answer": "保留主动，不机械改被动",
            "options": [
              "保留主动，不机械改被动",
              "The baby is slept."
            ],
            "why": "sleep 这个不及物用法没有普通可提升的宾语，不能说 The baby is slept。",
            "icon": "camera"
          }
        ]
      },
      {
        "id": "c10-m5",
        "title": "为什么选这个机位",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "115–117",
        "items": [
          {
            "type": "pick",
            "sentence": "My bag was taken.",
            "zh": "不确定谁拿走包，by 后的信息能省略吗？",
            "target": "整句",
            "answer": "能，未必需要说明执行者",
            "options": [
              "能，未必需要说明执行者",
              "不能，每个被动都要 by"
            ],
            "why": "未知或不重要的执行者常可不说；Someone took my bag 也是可选的主动表达。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The parcel has been packed.",
            "zh": "讨论包裹是否准备好，这个被动突出什么？",
            "target": "整句",
            "answer": "包裹的处理情况",
            "options": [
              "包裹的处理情况",
              "必须查清打包人姓名"
            ],
            "why": "被动可把交谈主题保持在包裹上，执行者不一定需要说明。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The toy was made by the artist who lives near the river.",
            "zh": "by 后放一段较长的执行者信息，有什么作用？",
            "target": "整句",
            "answer": "先说玩具，再补充制作者",
            "options": [
              "先说玩具，再补充制作者",
              "把制作玩具的关系反过来"
            ],
            "why": "长执行者后放可帮助组织信息，但动作关系仍是艺术家制作玩具。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The window was opened by her.",
            "zh": "by 后指代 she 时，使用什么形式？",
            "target": "整句",
            "answer": "her",
            "options": [
              "her",
              "she"
            ],
            "why": "by 是介词，这里后接宾格 her。原主语 she 不能原样放在 by 后。",
            "icon": "camera"
          },
          {
            "type": "pick",
            "sentence": "The cup was broken by Mia.",
            "zh": "变回同一事件的主动表达。",
            "target": "整句",
            "answer": "Mia broke the cup.",
            "options": [
              "Mia broke the cup.",
              "The cup broke Mia."
            ],
            "why": "Mia 仍是打破杯子的一方；主动/被动切换不颠倒事件角色。",
            "icon": "camera"
          }
        ]
      }
    ]
  },
  {
    "id": "c11",
    "number": "11",
    "title": "空间寻宝地图",
    "subtitle": "挪动一颗星，把词语之间的关系看清",
    "mechanic": "星星摆放 · 路径寻宝 · 时间卡片",
    "theme": "sky",
    "scene": "map",
    "book": "第 11 章 · 书内 118–133 页",
    "brief": "星星在箱内、箱顶，还是正穿过河流？亲手选择位置和路线，再把整组介词短语接回句子，找出它描述的是谁。",
    "lessons": [
      {
        "title": "介词像一座关系桥",
        "body": "in the box、with Mia、after lunch 都把事物与其他词联系起来。常见介词后接名词短语、代词或 -ing 形式，也可以接某些从句。先把介词和后面的部分作为整体观察。",
        "example": "The star is in the box. I play with her.",
        "zh": "星星在箱里。我和她一起玩。",
        "visual": "map",
        "tags": [
          "介词 + 补足成分",
          "整体短语",
          "with + her"
        ]
      },
      {
        "title": "位置不同，关系不同",
        "body": "in 常指内部，on 常指表面接触，under 指下方。at 可把地点当作活动点。点、面、内部是理解线索，不是万能几何定律；on the bus、in the car 等也要学习英语习惯搭配。",
        "example": "In the box. On the box. At the gate.",
        "zh": "箱内。箱顶。大门口。",
        "visual": "box",
        "tags": [
          "in / on / at",
          "next to / behind",
          "固定搭配也重要"
        ]
      },
      {
        "title": "路线不同，目的不同",
        "body": "in 描述位置；into 常强调进入，out of 强调出来。across 横穿，along 沿着走，to 指向目的地。操作图中的路线卡，观察星星怎样移动；关闭动画后仍能看到路径箭头。",
        "example": "The star moves across the river.",
        "zh": "星星穿过河流。",
        "visual": "map",
        "tags": [
          "位置与移动",
          "进入 / 离开",
          "横穿 / 沿着"
        ]
      },
      {
        "title": "时间卡，不只看长短",
        "body": "at nine、on Monday、in June 是常见搭配；at night、in the morning、on Monday morning 也要分别认识。last、next、this 等前常不再加这些介词。before/after 则说明事件先后。",
        "example": "At night. In the morning. On Monday morning.",
        "zh": "在夜里。在早晨。在星期一早晨。",
        "visual": "clock",
        "tags": [
          "at / on / in",
          "before / after",
          "next Monday 不另加 on"
        ]
      },
      {
        "title": "短语到底接到谁身上？",
        "body": "the book on the desk 里 on the desk 给书添加线索；Mia reads in the garden. 里短语说明读书地点。Mia is in the garden. 的短语说明主语位置；put the book on the desk 里的位置通常是动词需要的成分，不可机械删除。",
        "example": "The book on the desk is blue.",
        "zh": "桌上的书是蓝色的。",
        "visual": "link",
        "tags": [
          "名词线索",
          "动作信息",
          "主语位置",
          "必要的处所补足语"
        ]
      },
      {
        "title": "搭配和小品词要分清",
        "body": "look at、listen to、good at 等需要连同搭配记。turn the light on / turn on the light 的 on 是小品词，代词则说 turn it on；这不是主语助动词倒装。Who are you talking to? 里的介词可以留在句尾，不能教成介词永远必须紧贴宾语。",
        "example": "Turn it on. Who are you talking to?",
        "zh": "把它打开。你在跟谁说话？",
        "visual": "train",
        "tags": [
          "after + reading",
          "with + her",
          "小品词位置",
          "介词悬置"
        ]
      }
    ],
    "missions": [
      {
        "id": "c11-m1",
        "title": "星星放在哪里？",
        "note": "先操作地图，再选择完整介词短语",
        "pages": "118–122",
        "items": [
          {
            "type": "treasure",
            "sentence": "The star is in the box.",
            "zh": "把星星放在箱子里面。",
            "axes": {
              "spot": [
                [
                  "inside",
                  "箱内"
                ],
                [
                  "top",
                  "箱顶"
                ],
                [
                  "below",
                  "箱下"
                ],
                [
                  "beside",
                  "箱旁"
                ],
                [
                  "behind",
                  "箱后"
                ]
              ],
              "phrase": [
                [
                  "in the box",
                  "in the box"
                ],
                [
                  "on the box",
                  "on the box"
                ],
                [
                  "under the box",
                  "under the box"
                ]
              ]
            },
            "expected": {
              "spot": "inside",
              "phrase": "in the box"
            },
            "answer": "{\"spot\":\"inside\",\"phrase\":\"in the box\"}",
            "why": "in 在这个场景表示箱子的内部；on 则在表面。",
            "icon": "map",
            "mapKind": "space",
            "frame": "The star is {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "The star is on the box.",
            "zh": "把星星放在箱顶的表面上。",
            "axes": {
              "spot": [
                [
                  "inside",
                  "箱内"
                ],
                [
                  "top",
                  "箱顶"
                ],
                [
                  "below",
                  "箱下"
                ],
                [
                  "beside",
                  "箱旁"
                ],
                [
                  "behind",
                  "箱后"
                ]
              ],
              "phrase": [
                [
                  "on the box",
                  "on the box"
                ],
                [
                  "in the box",
                  "in the box"
                ],
                [
                  "under the box",
                  "under the box"
                ]
              ]
            },
            "expected": {
              "spot": "top",
              "phrase": "on the box"
            },
            "answer": "{\"spot\":\"top\",\"phrase\":\"on the box\"}",
            "why": "on 在这里表示与箱顶表面接触；不是悬在箱子上方。",
            "icon": "map",
            "mapKind": "space",
            "frame": "The star is {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "The star is under the box.",
            "zh": "把星星放在架高的箱子下方。",
            "axes": {
              "spot": [
                [
                  "inside",
                  "箱内"
                ],
                [
                  "top",
                  "箱顶"
                ],
                [
                  "below",
                  "箱下"
                ],
                [
                  "beside",
                  "箱旁"
                ],
                [
                  "behind",
                  "箱后"
                ]
              ],
              "phrase": [
                [
                  "under the box",
                  "under the box"
                ],
                [
                  "on the box",
                  "on the box"
                ],
                [
                  "in the box",
                  "in the box"
                ]
              ]
            },
            "expected": {
              "spot": "below",
              "phrase": "under the box"
            },
            "answer": "{\"spot\":\"below\",\"phrase\":\"under the box\"}",
            "why": "under 表示位置在下方；图中箱子架高，星星在箱下。",
            "icon": "map",
            "mapKind": "space",
            "frame": "The star is {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "The star is next to the box.",
            "zh": "把星星放在箱子的右旁边。",
            "axes": {
              "spot": [
                [
                  "inside",
                  "箱内"
                ],
                [
                  "top",
                  "箱顶"
                ],
                [
                  "below",
                  "箱下"
                ],
                [
                  "beside",
                  "箱旁"
                ],
                [
                  "behind",
                  "箱后"
                ]
              ],
              "phrase": [
                [
                  "next to the box",
                  "next to the box"
                ],
                [
                  "in the box",
                  "in the box"
                ],
                [
                  "under the box",
                  "under the box"
                ]
              ]
            },
            "expected": {
              "spot": "beside",
              "phrase": "next to the box"
            },
            "answer": "{\"spot\":\"beside\",\"phrase\":\"next to the box\"}",
            "why": "next to 表示紧邻；具体在右边由本题场景给出。",
            "icon": "map",
            "mapKind": "space",
            "frame": "The star is {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "The star is behind the box.",
            "zh": "把星星放在箱子的后方，看它被箱体遮住一部分。",
            "axes": {
              "spot": [
                [
                  "inside",
                  "箱内"
                ],
                [
                  "top",
                  "箱顶"
                ],
                [
                  "below",
                  "箱下"
                ],
                [
                  "beside",
                  "箱旁"
                ],
                [
                  "behind",
                  "箱后"
                ]
              ],
              "phrase": [
                [
                  "behind the box",
                  "behind the box"
                ],
                [
                  "in the box",
                  "in the box"
                ],
                [
                  "on the box",
                  "on the box"
                ]
              ]
            },
            "expected": {
              "spot": "behind",
              "phrase": "behind the box"
            },
            "answer": "{\"spot\":\"behind\",\"phrase\":\"behind the box\"}",
            "why": "behind 表示相对当前观看方向在箱后，不等于箱内。",
            "icon": "map",
            "mapKind": "space",
            "frame": "The star is {phrase}."
          }
        ]
      },
      {
        "id": "c11-m2",
        "title": "跟着路线去寻宝",
        "note": "先操作地图，再选择完整介词短语",
        "pages": "118–122",
        "items": [
          {
            "type": "treasure",
            "sentence": "The star moves into the box.",
            "zh": "让星星从箱外进入箱内。",
            "axes": {
              "spot": [
                [
                  "enter",
                  "从外到内"
                ],
                [
                  "exit",
                  "从内到外"
                ],
                [
                  "cross",
                  "穿过河面"
                ],
                [
                  "follow",
                  "沿着河岸"
                ],
                [
                  "toward",
                  "走向小屋"
                ]
              ],
              "phrase": [
                [
                  "into the box",
                  "into the box"
                ],
                [
                  "out of the box",
                  "out of the box"
                ],
                [
                  "across the river",
                  "across the river"
                ]
              ]
            },
            "expected": {
              "spot": "enter",
              "phrase": "into the box"
            },
            "answer": "{\"spot\":\"enter\",\"phrase\":\"into the box\"}",
            "why": "into 强调进入的路径；in 常描述已经在里面的位置。",
            "icon": "map",
            "mapKind": "route",
            "frame": "The star moves {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "The star moves out of the box.",
            "zh": "让星星从箱内移到箱外。",
            "axes": {
              "spot": [
                [
                  "enter",
                  "从外到内"
                ],
                [
                  "exit",
                  "从内到外"
                ],
                [
                  "cross",
                  "穿过河面"
                ],
                [
                  "follow",
                  "沿着河岸"
                ],
                [
                  "toward",
                  "走向小屋"
                ]
              ],
              "phrase": [
                [
                  "out of the box",
                  "out of the box"
                ],
                [
                  "into the box",
                  "into the box"
                ],
                [
                  "along the river",
                  "along the river"
                ]
              ]
            },
            "expected": {
              "spot": "exit",
              "phrase": "out of the box"
            },
            "answer": "{\"spot\":\"exit\",\"phrase\":\"out of the box\"}",
            "why": "out of 强调从内部出来，与 into 的方向相反。",
            "icon": "map",
            "mapKind": "route",
            "frame": "The star moves {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "The star moves across the river.",
            "zh": "让星星从河的一岸穿到另一岸。",
            "axes": {
              "spot": [
                [
                  "enter",
                  "从外到内"
                ],
                [
                  "exit",
                  "从内到外"
                ],
                [
                  "cross",
                  "穿过河面"
                ],
                [
                  "follow",
                  "沿着河岸"
                ],
                [
                  "toward",
                  "走向小屋"
                ]
              ],
              "phrase": [
                [
                  "across the river",
                  "across the river"
                ],
                [
                  "along the river",
                  "along the river"
                ],
                [
                  "into the box",
                  "into the box"
                ]
              ]
            },
            "expected": {
              "spot": "cross",
              "phrase": "across the river"
            },
            "answer": "{\"spot\":\"cross\",\"phrase\":\"across the river\"}",
            "why": "across 表示横穿；along 表示沿着河的走向，不是过河。",
            "icon": "map",
            "mapKind": "route",
            "frame": "The star moves {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "The star moves along the river.",
            "zh": "让星星沿着河岸的方向移动，不横穿河流。",
            "axes": {
              "spot": [
                [
                  "enter",
                  "从外到内"
                ],
                [
                  "exit",
                  "从内到外"
                ],
                [
                  "cross",
                  "穿过河面"
                ],
                [
                  "follow",
                  "沿着河岸"
                ],
                [
                  "toward",
                  "走向小屋"
                ]
              ],
              "phrase": [
                [
                  "along the river",
                  "along the river"
                ],
                [
                  "across the river",
                  "across the river"
                ],
                [
                  "out of the box",
                  "out of the box"
                ]
              ]
            },
            "expected": {
              "spot": "follow",
              "phrase": "along the river"
            },
            "answer": "{\"spot\":\"follow\",\"phrase\":\"along the river\"}",
            "why": "along 表示沿着某条路线；本图路线在河岸边。",
            "icon": "map",
            "mapKind": "route",
            "frame": "The star moves {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "The star moves to the house.",
            "zh": "让星星走到小屋这个目的地。",
            "axes": {
              "spot": [
                [
                  "enter",
                  "从外到内"
                ],
                [
                  "exit",
                  "从内到外"
                ],
                [
                  "cross",
                  "穿过河面"
                ],
                [
                  "follow",
                  "沿着河岸"
                ],
                [
                  "toward",
                  "走向小屋"
                ]
              ],
              "phrase": [
                [
                  "to the house",
                  "to the house"
                ],
                [
                  "in the box",
                  "in the box"
                ],
                [
                  "under the box",
                  "under the box"
                ]
              ]
            },
            "expected": {
              "spot": "toward",
              "phrase": "to the house"
            },
            "answer": "{\"spot\":\"toward\",\"phrase\":\"to the house\"}",
            "why": "to 在这里表示到目的地小屋；不是说明静态位置。",
            "icon": "map",
            "mapKind": "route",
            "frame": "The star moves {phrase}."
          }
        ]
      },
      {
        "id": "c11-m3",
        "title": "给见面时间贴卡",
        "note": "先操作地图，再选择完整介词短语",
        "pages": "118–122",
        "items": [
          {
            "type": "treasure",
            "sentence": "We meet at nine.",
            "zh": "约在九点见面；先选钟点卡，再接短语。",
            "axes": {
              "spot": [
                [
                  "clock",
                  "具体钟点"
                ],
                [
                  "day",
                  "具体某一天"
                ],
                [
                  "month",
                  "月份"
                ],
                [
                  "earlier",
                  "事件之前"
                ],
                [
                  "later",
                  "事件之后"
                ]
              ],
              "phrase": [
                [
                  "at nine",
                  "at nine"
                ],
                [
                  "on nine",
                  "on nine"
                ],
                [
                  "in nine",
                  "in nine"
                ]
              ]
            },
            "expected": {
              "spot": "clock",
              "phrase": "at nine"
            },
            "answer": "{\"spot\":\"clock\",\"phrase\":\"at nine\"}",
            "why": "具体钟点常用 at；nine 在这里指九点。",
            "icon": "map",
            "mapKind": "calendar",
            "frame": "We meet {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "We meet on Monday.",
            "zh": "约在星期一见面。",
            "axes": {
              "spot": [
                [
                  "clock",
                  "具体钟点"
                ],
                [
                  "day",
                  "具体某一天"
                ],
                [
                  "month",
                  "月份"
                ],
                [
                  "earlier",
                  "事件之前"
                ],
                [
                  "later",
                  "事件之后"
                ]
              ],
              "phrase": [
                [
                  "on Monday",
                  "on Monday"
                ],
                [
                  "at Monday",
                  "at Monday"
                ],
                [
                  "in Monday",
                  "in Monday"
                ]
              ]
            },
            "expected": {
              "spot": "day",
              "phrase": "on Monday"
            },
            "answer": "{\"spot\":\"day\",\"phrase\":\"on Monday\"}",
            "why": "具体星期几常用 on；不是按字数或时间长度机械判断。",
            "icon": "map",
            "mapKind": "calendar",
            "frame": "We meet {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "We meet in June.",
            "zh": "约在六月见面。",
            "axes": {
              "spot": [
                [
                  "clock",
                  "具体钟点"
                ],
                [
                  "day",
                  "具体某一天"
                ],
                [
                  "month",
                  "月份"
                ],
                [
                  "earlier",
                  "事件之前"
                ],
                [
                  "later",
                  "事件之后"
                ]
              ],
              "phrase": [
                [
                  "in June",
                  "in June"
                ],
                [
                  "on June",
                  "on June"
                ],
                [
                  "at June",
                  "at June"
                ]
              ]
            },
            "expected": {
              "spot": "month",
              "phrase": "in June"
            },
            "answer": "{\"spot\":\"month\",\"phrase\":\"in June\"}",
            "why": "月份常用 in；具体日期如 June 3 则常用 on。",
            "icon": "map",
            "mapKind": "calendar",
            "frame": "We meet {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "We meet before lunch.",
            "zh": "约在午饭之前见面。",
            "axes": {
              "spot": [
                [
                  "clock",
                  "具体钟点"
                ],
                [
                  "day",
                  "具体某一天"
                ],
                [
                  "month",
                  "月份"
                ],
                [
                  "earlier",
                  "事件之前"
                ],
                [
                  "later",
                  "事件之后"
                ]
              ],
              "phrase": [
                [
                  "before lunch",
                  "before lunch"
                ],
                [
                  "after lunch",
                  "after lunch"
                ],
                [
                  "on lunch",
                  "on lunch"
                ]
              ]
            },
            "expected": {
              "spot": "earlier",
              "phrase": "before lunch"
            },
            "answer": "{\"spot\":\"earlier\",\"phrase\":\"before lunch\"}",
            "why": "before lunch 表示午饭之前，after lunch 则在午饭之后。",
            "icon": "map",
            "mapKind": "calendar",
            "frame": "We meet {phrase}."
          },
          {
            "type": "treasure",
            "sentence": "We meet after lunch.",
            "zh": "约在午饭之后见面。",
            "axes": {
              "spot": [
                [
                  "clock",
                  "具体钟点"
                ],
                [
                  "day",
                  "具体某一天"
                ],
                [
                  "month",
                  "月份"
                ],
                [
                  "earlier",
                  "事件之前"
                ],
                [
                  "later",
                  "事件之后"
                ]
              ],
              "phrase": [
                [
                  "after lunch",
                  "after lunch"
                ],
                [
                  "before lunch",
                  "before lunch"
                ],
                [
                  "in lunch",
                  "in lunch"
                ]
              ]
            },
            "expected": {
              "spot": "later",
              "phrase": "after lunch"
            },
            "answer": "{\"spot\":\"later\",\"phrase\":\"after lunch\"}",
            "why": "after lunch 表示午饭之后；before 是之前。",
            "icon": "map",
            "mapKind": "calendar",
            "frame": "We meet {phrase}."
          }
        ]
      },
      {
        "id": "c11-m4",
        "title": "时间与交通小例外",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "120–121",
        "items": [
          {
            "type": "pick",
            "sentence": "We play ___ the morning.",
            "zh": "通常说“在早晨”，使用固定搭配。",
            "target": "___",
            "answer": "in",
            "options": [
              "in",
              "on",
              "at"
            ],
            "why": "常说 in the morning；具体到 Monday morning 时常改为 on。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "We play ___ Monday morning.",
            "zh": "星期一早晨，是具体某天的早晨。",
            "target": "___",
            "answer": "on",
            "options": [
              "on",
              "in",
              "at"
            ],
            "why": "on Monday morning；不能仅看到 morning 就永远选 in。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "The stars shine ___ night.",
            "zh": "夜里星星发光。",
            "target": "___",
            "answer": "at",
            "options": [
              "at",
              "on",
              "in"
            ],
            "why": "at night 是常见固定搭配，不用纯时间长短口诀替代。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "We meet next Monday.",
            "zh": "next Monday 前面还必须加 on 吗？",
            "target": "整句",
            "answer": "通常不加",
            "options": [
              "通常不加",
              "必须加 on"
            ],
            "why": "next/last/this 等限定的这类时间表达通常不加 on：next Monday。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "Mia is ___ the bus.",
            "zh": "本题指米娅乘坐公交车。",
            "target": "___",
            "answer": "on",
            "options": [
              "on",
              "at"
            ],
            "why": "乘公交常说 on the bus；乘私家车则常说 in the car，需学搭配。",
            "icon": "map"
          }
        ]
      },
      {
        "id": "c11-m5",
        "title": "整组短语接到谁？",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "123–129",
        "items": [
          {
            "type": "role",
            "sentence": "The book on the desk is blue.",
            "zh": "找到给 book 添加“哪本书”线索的整个介词短语。",
            "parts": [
              "The book",
              "on the desk",
              "is blue"
            ],
            "answer": "on the desk",
            "why": "on the desk 修饰 book；位置在句中不决定它必然修饰动作。",
            "icon": "map"
          },
          {
            "type": "role",
            "sentence": "Mia reads in the garden.",
            "zh": "找到说明读书地点的整个短语。",
            "parts": [
              "Mia",
              "reads",
              "in the garden"
            ],
            "answer": "in the garden",
            "why": "in the garden 在这里补充读书发生的地点，是状语信息。",
            "icon": "map"
          },
          {
            "type": "role",
            "sentence": "Mia is in the garden.",
            "zh": "找到说明 Mia 位置的整个短语。",
            "parts": [
              "Mia",
              "is",
              "in the garden"
            ],
            "answer": "in the garden",
            "why": "in the garden 接在 be 后说明主语位置；不把 garden 单独当作整个短语。",
            "icon": "map"
          },
          {
            "type": "role",
            "sentence": "Mia put the book on the desk.",
            "zh": "找到 put 在本用法中需要的放置地点。",
            "parts": [
              "Mia",
              "put",
              "the book",
              "on the desk"
            ],
            "answer": "on the desk",
            "why": "这里 put 通常需要说明放在哪里；不同语法体系名称有差异，但不能机械删去该地点。",
            "icon": "map"
          },
          {
            "type": "role",
            "sentence": "The picture in a book by Mia is lovely.",
            "zh": "本题意思是“米娅写的一本书中的图片”：哪组词描述 book？",
            "parts": [
              "The picture",
              "in a book",
              "by Mia",
              "is lovely"
            ],
            "answer": "by Mia",
            "why": "按给定意思，by Mia 描述 book 的作者；多个介词短语要看各自的连接对象，不能只按前后猜。",
            "icon": "map"
          }
        ]
      },
      {
        "id": "c11-m6",
        "title": "搭配、工具和词组整体",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "122–126",
        "items": [
          {
            "type": "pick",
            "sentence": "I listen ___ Mia.",
            "zh": "listen 与“听的对象”连起来。",
            "target": "___",
            "answer": "to",
            "options": [
              "to",
              "at"
            ],
            "why": "listen to 是这项用法的搭配；要连同动词学习。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "Mia is good ___ painting.",
            "zh": "米娅擅长画画，形容词 good 的这个搭配是什么？",
            "target": "___",
            "answer": "at",
            "options": [
              "at",
              "on"
            ],
            "why": "be good at + 名词或 -ing：good at painting。不能任意更换介词。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "After ___, Mia rests.",
            "zh": "介词 after 后描述读书这项活动。",
            "target": "___",
            "answer": "reading",
            "options": [
              "reading",
              "to read"
            ],
            "why": "after 后可接 reading；不直接放 to read。更复杂结构后续章节继续学。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "I play with ___.",
            "zh": "我和她玩；with 后用什么代词？",
            "target": "___",
            "answer": "her",
            "options": [
              "her",
              "she"
            ],
            "why": "介词 with 后这里用宾格 her。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "The door is locked with a key.",
            "zh": "with a key 在这里说明什么？",
            "target": "整句",
            "answer": "使用的工具",
            "options": [
              "使用的工具",
              "执行动作的人"
            ],
            "why": "with a key 指工具；by Mia 可表示执行者。两种关系不同。",
            "icon": "map"
          }
        ]
      },
      {
        "id": "c11-m7",
        "title": "小品词与句尾的介词",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "129–133",
        "items": [
          {
            "type": "pick",
            "sentence": "Turn it ___.",
            "zh": "打开它；代词 it 放在动词和小品词之间。",
            "target": "___",
            "answer": "on",
            "options": [
              "on",
              "to"
            ],
            "why": "说 turn it on；这里 on 是小品词，不能说 turn on it 来表达同一可分搭配。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "Turn on the lamp. Turn the lamp on.",
            "zh": "这两个排列是一般的主语助动词倒装吗？",
            "target": "整句",
            "answer": "不是，是小品词与名词宾语的排列",
            "options": [
              "不是，是小品词与名词宾语的排列",
              "是，主语被移到了句末"
            ],
            "why": "turn on 是可分动词小品词搭配；主语并未发生疑问倒装。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "Who are you talking to?",
            "zh": "这里 to 留在句尾，是否一定错误？",
            "target": "整句",
            "answer": "不一定，这是自然的介词悬置",
            "options": [
              "不一定，这是自然的介词悬置",
              "一定错，介词永远不能在句尾"
            ],
            "why": "英语里这种介词悬置很常见；较正式也可说 To whom are you talking?。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "Mia put a box under the table.",
            "zh": "能否把这里的 under the table 当作任意可删的装饰？",
            "target": "整句",
            "answer": "不能，put 的这个用法通常需要地点",
            "options": [
              "不能，put 的这个用法通常需要地点",
              "能，所有介词短语都可以删掉"
            ],
            "why": "分析要结合动词要求，不用“介词短语全是可选状语”的简化规则。",
            "icon": "map"
          },
          {
            "type": "pick",
            "sentence": "Mia sat with her hands on her knees.",
            "zh": "on her knees 在这个 with 结构里说明谁的位置？",
            "target": "整句",
            "answer": "her hands",
            "options": [
              "her hands",
              "Mia 的书包"
            ],
            "why": "with her hands on her knees 整体中，on her knees 描述 her hands 的位置关系；不把所有后置词组都接到主语。",
            "icon": "map"
          }
        ]
      }
    ]
  },
  {
    "id": "c12",
    "number": "12",
    "title": "句子胶囊港",
    "subtitle": "把一个完整想法，作为整体送进句子",
    "mechanic": "从句封装 · 语序整理 · 五个泊位",
    "theme": "peach",
    "scene": "box",
    "book": "第 12 章 · 书内 137–148 页",
    "brief": "一个词能做主语，一整个想法也可以。先把从句内部排顺，再把胶囊送往主语、宾语等泊位；别让问句里的倒装混进来。",
    "lessons": [
      {
        "title": "整句里的一个小世界",
        "body": "I know where Mia lives. 里，where Mia lives 有自己的主语和动词，但整体是 know 的宾语。初学常把这种整体做名词式工作的结构称为名词性从句；能做类似工作不代表任何位置、搭配都可随意互换。",
        "example": "I know where Mia lives.",
        "zh": "我知道米娅住在哪里。",
        "visual": "box",
        "tags": [
          "从句内部有结构",
          "对主句整体起作用",
          "不是任意替换"
        ]
      },
      {
        "title": "外面问，里面仍按陈述语序",
        "body": "Where does Mia live? 是直接问句。I know where Mia lives. 里的嵌入从句不把 does 放到主语前；去掉提问用 does 后，lives 恢复第三人称形式。who 作主语时通常原本就不需要这种倒装。",
        "example": "Where does Mia live? I know where Mia lives.",
        "zh": "米娅住哪里？我知道她住哪里。",
        "visual": "train",
        "tags": [
          "主语 + 动词",
          "不保留提问用 do/does/did",
          "谁作主语要看清"
        ]
      },
      {
        "title": "that、what 与是否不是同一个包",
        "body": "that 常引入完整陈述内容；what 可表示什么或……的东西，并在从句里担任角色。whether/if 表示是否，仍保留未定的问题内容。用陈述语序不意味着从句内容一定不是问题。",
        "example": "I know that Mia is ready. I wonder whether Mia is ready.",
        "zh": "我知道米娅准备好了。我想知道米娅是否准备好了。",
        "visual": "capsule",
        "tags": [
          "陈述内容",
          "什么 / ……的东西",
          "是否"
        ]
      },
      {
        "title": "找到合适泊位再送进去",
        "body": "一整个从句可做主语、动词宾语或表语；wh 从句还可接在介词后。某些 what 结构也能在特定 make 句型里说明宾语。命名可以帮助找位置，但不能用一个万能替换公式造所有句子。",
        "example": "What Mia drew is lovely. We talk about what Mia drew.",
        "zh": "米娅画的东西很可爱。我们讨论她画的东西。",
        "visual": "house",
        "tags": [
          "主语 S",
          "宾语 O",
          "表语 P",
          "特定结构 C",
          "介词宾语 Op"
        ]
      },
      {
        "title": "连接词有自己的通行规则",
        "body": "I think (that) Mia is ready. 中 that 常可省；句首 That Mia is ready... 一般要保留。about whether... 用 whether 而不是 if。afraid that... 与 afraid of what... 是不同补足方式，不是通用“删介词”规则。",
        "example": "I think Mia is ready. We talk about whether she will come.",
        "zh": "我认为米娅准备好了。我们讨论她是否会来。",
        "visual": "link",
        "tags": [
          "that 并非处处可省",
          "whether / if 有限制",
          "搭配决定结构"
        ]
      },
      {
        "title": "it 可以先替长想法占位",
        "body": "It is clear that Mia is ready. 中 it 先站在主语位，真正说明的内容在后面。I think it important that we rest. 中 it 在宾语位。这些是具体搭配，不是把任何长句搬到后面都自然；it 专题后续继续展开。",
        "example": "It is clear that Mia is ready.",
        "zh": "很明显，米娅准备好了。",
        "visual": "star",
        "tags": [
          "形式主语",
          "形式宾语",
          "按搭配使用",
          "it 拓展仍待精做"
        ]
      }
    ],
    "missions": [
      {
        "id": "c12-m1",
        "title": "五个泊位的第一班船",
        "note": "先封装从句，再选它在主句里的工作",
        "pages": "137–145",
        "items": [
          {
            "type": "capsule",
            "sentence": "I know where Mia lives.",
            "zh": "我知道米娅住在哪里。把“她住在哪里”作为 know 的宾语。",
            "axes": {
              "clause": [
                [
                  "where Mia lives",
                  "where Mia lives"
                ],
                [
                  "where does Mia live",
                  "where does Mia live"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "where Mia lives",
              "dock": "O"
            },
            "answer": "{\"clause\":\"where Mia lives\",\"dock\":\"O\"}",
            "why": "嵌入的 where Mia lives 用主语 Mia 在动词 lives 前的顺序；整个从句作 know 的宾语。",
            "icon": "box",
            "frame": "I know {clause}."
          },
          {
            "type": "capsule",
            "sentence": "What Mia drew surprised me.",
            "zh": "米娅画的东西让我吃惊。把“她画的东西”作为整句主语。",
            "axes": {
              "clause": [
                [
                  "What Mia drew",
                  "What Mia drew"
                ],
                [
                  "What did Mia draw",
                  "What did Mia draw"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "What Mia drew",
              "dock": "S"
            },
            "answer": "{\"clause\":\"What Mia drew\",\"dock\":\"S\"}",
            "why": "What Mia drew 整体表示她画的东西，作主语；不使用直接问句的 did 提前。",
            "icon": "box",
            "frame": "{clause} surprised me."
          },
          {
            "type": "capsule",
            "sentence": "My question is whether Mia is ready.",
            "zh": "我的问题是米娅是否准备好了；把“是否”从句放在 is 后。",
            "axes": {
              "clause": [
                [
                  "whether Mia is ready",
                  "whether Mia is ready"
                ],
                [
                  "whether is Mia ready",
                  "whether is Mia ready"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "whether Mia is ready",
              "dock": "P"
            },
            "answer": "{\"clause\":\"whether Mia is ready\",\"dock\":\"P\"}",
            "why": "whether 引出是否，内部 Mia is 是陈述语序；整体在 is 后说明问题内容。",
            "icon": "box",
            "frame": "My question is {clause}."
          },
          {
            "type": "capsule",
            "sentence": "We talked about what Mia drew.",
            "zh": "我们讨论米娅画的东西；把从句接到介词 about 后。",
            "axes": {
              "clause": [
                [
                  "what Mia drew",
                  "what Mia drew"
                ],
                [
                  "what did Mia draw",
                  "what did Mia draw"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "what Mia drew",
              "dock": "Op"
            },
            "answer": "{\"clause\":\"what Mia drew\",\"dock\":\"Op\"}",
            "why": "what Mia drew 整体作 about 的宾语；不是单独把 Mia 作为介词宾语。",
            "icon": "box",
            "frame": "We talked about {clause}."
          },
          {
            "type": "capsule",
            "sentence": "This experience made Mia what she is today.",
            "zh": "这段经历使米娅成了今天的她；从句说明宾语 Mia 成为了什么。",
            "axes": {
              "clause": [
                [
                  "what she is today",
                  "what she is today"
                ],
                [
                  "what is she today",
                  "what is she today"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "what she is today",
              "dock": "C"
            },
            "answer": "{\"clause\":\"what she is today\",\"dock\":\"C\"}",
            "why": "这个特定 make 结构里 what she is today 说明宾语 Mia；不是所有名词性从句都能任意放入宾补位置。",
            "icon": "box",
            "frame": "This experience made Mia {clause}."
          }
        ]
      },
      {
        "id": "c12-m2",
        "title": "陈述内容还是是否问题？",
        "note": "先封装从句，再选它在主句里的工作",
        "pages": "137–145",
        "items": [
          {
            "type": "capsule",
            "sentence": "I know that Mia is ready.",
            "zh": "我知道“米娅准备好了”这件事；报告内容而不是问是否。",
            "axes": {
              "clause": [
                [
                  "that Mia is ready",
                  "that Mia is ready"
                ],
                [
                  "what Mia is ready",
                  "what Mia is ready"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "that Mia is ready",
              "dock": "O"
            },
            "answer": "{\"clause\":\"that Mia is ready\",\"dock\":\"O\"}",
            "why": "that 连接一个完整的陈述内容；此处 Mia is ready 已完整，what 不能直接替换。",
            "icon": "box",
            "frame": "I know {clause}."
          },
          {
            "type": "capsule",
            "sentence": "I wonder whether Mia is ready.",
            "zh": "我想知道米娅是否准备好了；保留是否的疑问内容。",
            "axes": {
              "clause": [
                [
                  "whether Mia is ready",
                  "whether Mia is ready"
                ],
                [
                  "that Mia is ready",
                  "that Mia is ready"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "whether Mia is ready",
              "dock": "O"
            },
            "answer": "{\"clause\":\"whether Mia is ready\",\"dock\":\"O\"}",
            "why": "wonder 在本题问是否；whether 从句保留未定的问题内容，但内部不倒装。",
            "icon": "box",
            "frame": "I wonder {clause}."
          },
          {
            "type": "capsule",
            "sentence": "I asked if Mia was ready.",
            "zh": "我问过米娅是否准备好了。把 if 从句整体作为 asked 的宾语。",
            "axes": {
              "clause": [
                [
                  "if Mia was ready",
                  "if Mia was ready"
                ],
                [
                  "if was Mia ready",
                  "if was Mia ready"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "if Mia was ready",
              "dock": "O"
            },
            "answer": "{\"clause\":\"if Mia was ready\",\"dock\":\"O\"}",
            "why": "这里 if 表示是否，可引导间接一般疑问；内部 Mia was 不倒装。",
            "icon": "box",
            "frame": "I asked {clause}."
          },
          {
            "type": "capsule",
            "sentence": "We talked about whether Mia would come.",
            "zh": "我们讨论米娅是否会来；紧接介词 about。",
            "axes": {
              "clause": [
                [
                  "whether Mia would come",
                  "whether Mia would come"
                ],
                [
                  "if Mia would come",
                  "if Mia would come"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "whether Mia would come",
              "dock": "Op"
            },
            "answer": "{\"clause\":\"whether Mia would come\",\"dock\":\"Op\"}",
            "why": "标准用法中介词后选 whether，不直接用 if。whether 和 if 不是所有位置都可互换。",
            "icon": "box",
            "frame": "We talked about {clause}."
          },
          {
            "type": "capsule",
            "sentence": "Whether Mia will come is unknown.",
            "zh": "米娅是否会来还不知道。把是否问题放在句首作主语。",
            "axes": {
              "clause": [
                [
                  "Whether Mia will come",
                  "Whether Mia will come"
                ],
                [
                  "If Mia will come",
                  "If Mia will come"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "Whether Mia will come",
              "dock": "S"
            },
            "answer": "{\"clause\":\"Whether Mia will come\",\"dock\":\"S\"}",
            "why": "在这种句首主语从句里用 whether；不能把 if 任意替换到这里。",
            "icon": "box",
            "frame": "{clause} is unknown."
          }
        ]
      },
      {
        "id": "c12-m3",
        "title": "整理 wh 胶囊内部",
        "note": "先封装从句，再选它在主句里的工作",
        "pages": "137–145",
        "items": [
          {
            "type": "capsule",
            "sentence": "I know who painted the box.",
            "zh": "我知道是谁涂了盒子。who 自己就是从句的主语。",
            "axes": {
              "clause": [
                [
                  "who painted the box",
                  "who painted the box"
                ],
                [
                  "who did paint the box",
                  "who did paint the box"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "who painted the box",
              "dock": "O"
            },
            "answer": "{\"clause\":\"who painted the box\",\"dock\":\"O\"}",
            "why": "普通、无强调的间接表达用 who painted；who 已作主语，不另加提问用 did。本题不练 did 的强调用法。",
            "icon": "box",
            "frame": "I know {clause}."
          },
          {
            "type": "capsule",
            "sentence": "I know how Mia opened the box.",
            "zh": "我知道米娅怎样打开盒子，说明方法。",
            "axes": {
              "clause": [
                [
                  "how Mia opened the box",
                  "how Mia opened the box"
                ],
                [
                  "how did Mia open the box",
                  "how did Mia open the box"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "how Mia opened the box",
              "dock": "O"
            },
            "answer": "{\"clause\":\"how Mia opened the box\",\"dock\":\"O\"}",
            "why": "how 表示怎样，内部 Mia opened 不作直接问句的 did 倒装。",
            "icon": "box",
            "frame": "I know {clause}."
          },
          {
            "type": "capsule",
            "sentence": "I remember when Mia arrived.",
            "zh": "我记得米娅什么时候到达，把时间内容整体交给 remember。",
            "axes": {
              "clause": [
                [
                  "when Mia arrived",
                  "when Mia arrived"
                ],
                [
                  "when did Mia arrive",
                  "when did Mia arrive"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "when Mia arrived",
              "dock": "O"
            },
            "answer": "{\"clause\":\"when Mia arrived\",\"dock\":\"O\"}",
            "why": "when Mia arrived 作为 remember 的宾语，保留所记得的时间信息；本题不是 when 引导主句事件的时间状语。",
            "icon": "box",
            "frame": "I remember {clause}."
          },
          {
            "type": "capsule",
            "sentence": "I know whose bag this is.",
            "zh": "我知道这是谁的包。whose bag 整组表示所属。",
            "axes": {
              "clause": [
                [
                  "whose bag this is",
                  "whose bag this is"
                ],
                [
                  "whose bag is this",
                  "whose bag is this"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "whose bag this is",
              "dock": "O"
            },
            "answer": "{\"clause\":\"whose bag this is\",\"dock\":\"O\"}",
            "why": "whose bag 作为一个整体前置，内部主语 this 在 is 前。",
            "icon": "box",
            "frame": "I know {clause}."
          },
          {
            "type": "capsule",
            "sentence": "Take whatever you need.",
            "zh": "拿你需要的任何东西；整个 whatever 从句作为 take 的宾语。",
            "axes": {
              "clause": [
                [
                  "whatever you need",
                  "whatever you need"
                ],
                [
                  "whatever do you need",
                  "whatever do you need"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语 S"
                ],
                [
                  "O",
                  "动词宾语 O"
                ],
                [
                  "P",
                  "表语 P"
                ],
                [
                  "C",
                  "说明宾语 C"
                ],
                [
                  "Op",
                  "介词宾语 Op"
                ]
              ]
            },
            "expected": {
              "clause": "whatever you need",
              "dock": "O"
            },
            "answer": "{\"clause\":\"whatever you need\",\"dock\":\"O\"}",
            "why": "whatever you need 在本题表示你需要的任何东西，整体作宾语；普通嵌入结构不加 do 倒装。",
            "icon": "box",
            "frame": "Take {clause}."
          }
        ]
      },
      {
        "id": "c12-m4",
        "title": "连接词通行证",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "143–146",
        "items": [
          {
            "type": "pick",
            "sentence": "I know ___ Mia drew.",
            "zh": "我知道米娅画的东西；空格需要作 drew 的宾语。",
            "target": "___",
            "answer": "what",
            "options": [
              "what",
              "that"
            ],
            "why": "what 在这里既引导整体，也填入 drew 所画的内容；that 不承担 drew 的宾语角色。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "I think Mia is ready.",
            "zh": "think 后这个句子是否一定缺了不能省的 that？",
            "target": "整句",
            "answer": "不是，此处 that 通常可省",
            "options": [
              "不是，此处 that 通常可省",
              "是，所有从句必须显示 that"
            ],
            "why": "think 后的这类宾语内容从句里 that 常可省；不代表所有位置都一样。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "___ Mia is ready is good news.",
            "zh": "“米娅准备好了”整件事放句首作主语，选完整连接方式。",
            "target": "___",
            "answer": "That",
            "options": [
              "That",
              "省略连接词"
            ],
            "why": "句首 that 主语从句通常保留 That，不能照搬 think 后常省 that 的规则。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "We talked about ___ Mia would come.",
            "zh": "介词 about 后，表达“是否”。",
            "target": "___",
            "answer": "whether",
            "options": [
              "whether",
              "if"
            ],
            "why": "标准表达用 about whether；whether/if 不能在所有位置互换。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "I am afraid ___ Mia is late.",
            "zh": "表达担心米娅迟到；选择这个形容词的内容从句搭配。",
            "target": "___",
            "answer": "that",
            "options": [
              "that",
              "of that"
            ],
            "why": "afraid that... 是内容从句搭配，不说 afraid of that Mia is late；不要把删介词推广成通用生成法。",
            "icon": "box"
          }
        ]
      },
      {
        "id": "c12-m5",
        "title": "把整体和内部都看清",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "140–147",
        "items": [
          {
            "type": "pick",
            "sentence": "Do you know where Mia lives?",
            "zh": "外面是问句，里面的语序应是什么？",
            "target": "整句",
            "answer": "where Mia lives",
            "options": [
              "where Mia lives",
              "where does Mia live"
            ],
            "why": "主句 Do you know...? 可以问问题；嵌入从句仍用 Mia lives 的顺序。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "I wonder whether Mia is ready.",
            "zh": "whether 从句使用陈述语序，是否代表不再包含是否问题？",
            "target": "整句",
            "answer": "不是，仍表达未定的是否问题",
            "options": [
              "不是，仍表达未定的是否问题",
              "是，它只能报告确定事实"
            ],
            "why": "语序和内容要区分：嵌入式是否问题不倒装，但仍在问是否准备好。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "I know who opened the gate.",
            "zh": "普通无强调表达中，为什么不用 who did open？",
            "target": "整句",
            "answer": "who 自己作从句主语",
            "options": [
              "who 自己作从句主语",
              "从句里的动词都必须原形"
            ],
            "why": "主语 wh 在这种普通表达里不另加提问用 did；opened 仍可表达过去。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "I know which book Mia chose.",
            "zh": "which book 在内部一起承担什么工作？",
            "target": "整句",
            "answer": "chose 的宾语词组",
            "options": [
              "chose 的宾语词组",
              "把 book 变成主句主语"
            ],
            "why": "which book 是从句里 chose 的宾语词组；整个从句才作 know 的宾语。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "The picture that Mia drew is blue.",
            "zh": "此处 that Mia drew 前已有 picture，它主要给 book 添加线索，属于哪类？",
            "target": "整句",
            "answer": "定语从句，后续第 13 章展开",
            "options": [
              "定语从句，后续第 13 章展开",
              "只要有 that 就是名词性从句"
            ],
            "why": "连接词相同不等于从句功能相同；这里修饰先行词 picture，而不是整体填一个名词槽。",
            "icon": "box"
          }
        ]
      },
      {
        "id": "c12-m6",
        "title": "长想法与 it 占位",
        "note": "先看情境，再动手；随时可以重试",
        "pages": "146–148",
        "items": [
          {
            "type": "pick",
            "sentence": "It is clear that Mia is ready.",
            "zh": "it 在这里指某个具体物品吗？",
            "target": "整句",
            "answer": "不是，这里作形式主语",
            "options": [
              "不是，这里作形式主语",
              "是，必然指米娅的书包"
            ],
            "why": "这个结构用 it 占主语位置，后面的 that 从句说明具体内容。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "I think it important that we rest.",
            "zh": "it 在这个特定结构中站在哪个位置？",
            "target": "整句",
            "answer": "形式宾语位置",
            "options": [
              "形式宾语位置",
              "代替 rest 的动词位置"
            ],
            "why": "think it important that... 用形式宾语 it，important 是评价，后面从句交代内容。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "What Mia drew ___ lovely.",
            "zh": "把米娅画的东西在本题看作一个整体。",
            "target": "___",
            "answer": "is",
            "options": [
              "is",
              "are"
            ],
            "why": "这个特定句子按单个整体配 is；不推成所有 what 从句一律只能单数。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "Who will lead the team is unknown.",
            "zh": "哪一整组作主语？",
            "target": "整句",
            "answer": "Who will lead the team",
            "options": [
              "Who will lead the team",
              "the team 单独"
            ],
            "why": "Who will lead the team 表示谁来带队这个未定问题，整体作主语。",
            "icon": "box"
          },
          {
            "type": "pick",
            "sentence": "I know where Mia lives.",
            "zh": "能否把从句缩成一个词后，忽略原来的内部语法？",
            "target": "整句",
            "answer": "不能，整体功能和内部语法都要成立",
            "options": [
              "不能，整体功能和内部语法都要成立",
              "能，从句里面怎样排都一样"
            ],
            "why": "胶囊是帮助看整体的比喻；内部主语动词顺序、形式与连接词仍需正确。",
            "icon": "box"
          }
        ]
      }
    ]
  }
];
