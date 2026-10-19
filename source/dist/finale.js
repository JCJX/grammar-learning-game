// Sixth journey: original teaching content aligned to printed pages 179–224.
export const finaleChapters=[
  {
    "id": "c16",
    "number": "16",
    "title": "动作收藏馆",
    "subtitle": "把活动装进展品，看看它在句中做什么",
    "mechanic": "活动封装 · 展架归位 · 参与者寻踪",
    "theme": "mint",
    "scene": "ball",
    "book": "第 16 章 · 书内 179–185 页",
    "brief": "读书、游泳、观鸟都能成为一句话谈论的活动。把动词结构装进收藏球，再放到合适展架；别把每一个 -ing 都当作同一种工作。",
    "lessons": [
      {
        "title": "把动作作为一项活动讨论",
        "body": "Reading books is fun. 里 Reading books 整体作主语，内部还可以有宾语 books。入门把这类用法称为动名词；功能像名词不代表内部就不再有动词性质，也不是任何名词位置都能任意替换。",
        "example": "Reading books is fun.",
        "zh": "读书很有趣。",
        "visual": "book",
        "tags": [
          "整体功能",
          "内部结构",
          "动名词 -ing"
        ]
      },
      {
        "title": "动词搭配像不同的展架",
        "body": "enjoy reading、avoid wasting、finish drawing 是常见搭配。want to read 则不同；有的动词两种结构都可用，但意义或语气可能不同。逐项认识搭配，比硬背“过去用 doing、将来用 to do”可靠。",
        "example": "Mia enjoys reading. Mia wants to read.",
        "zh": "米娅喜欢读书。米娅想读书。",
        "visual": "ball",
        "tags": [
          "enjoy / avoid / finish",
          "want + to",
          "不能套时间口诀"
        ]
      },
      {
        "title": "介词后也能放活动",
        "body": "after reading、good at painting、look forward to meeting 中介词后接 -ing。look forward to 的 to 是介词；want to 的 to 是不定式标记。把整组搭配一起读。",
        "example": "I look forward to meeting Mia.",
        "zh": "我期待见到米娅。",
        "visual": "link",
        "tags": [
          "介词 + -ing",
          "look forward to",
          "to 有不同工作"
        ]
      },
      {
        "title": "谁在做这项活动？",
        "body": "Mia enjoys reading. 通常是米娅读。Mia’s singing surprised us. 明确说米娅唱歌；I do not mind you singing. 也可自然表达。所有格是表明参与者的一种方式，不宣称所有场合只能使用所有格。",
        "example": "Mia’s singing surprised us.",
        "zh": "米娅的歌声让我们吃惊。",
        "visual": "portrait",
        "tags": [
          "逻辑参与者",
          "所有格",
          "非所有格也有用法"
        ]
      },
      {
        "title": "与进行、分词和 it 分开看",
        "body": "Her hobby is drawing. 说明爱好内容；She is drawing. 是进行结构。单个活动通常配单数：Reading is fun。It is no use worrying. 是常见的 it 搭配，但不能把任何动名词长主语都随意后移。",
        "example": "Her hobby is drawing. She is drawing.",
        "zh": "她的爱好是画画。她正在画画。",
        "visual": "mirror",
        "tags": [
          "活动内容 / 进行结构",
          "单个活动通常单数",
          "具体 it 搭配"
        ]
      }
    ],
    "missions": [
      {
        "id": "c16-m1",
        "title": "把活动送上展架",
        "pages": "179–183",
        "items": [
          {
            "type": "museum",
            "sentence": "Reading stories is fun.",
            "zh": "把“读故事这项活动”作为主语。",
            "axes": {
              "exhibit": [
                [
                  "Reading stories",
                  "Reading stories"
                ],
                [
                  "Read stories",
                  "Read stories"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "Reading stories",
              "shelf": "S"
            },
            "answer": "{\"exhibit\":\"Reading stories\",\"shelf\":\"S\"}",
            "why": "Reading stories 整体作主语，内部 stories 仍是 read 的宾语；不是把所有动词都能直接塞进名词位置。",
            "icon": "ball",
            "frame": "{exhibit} is fun.",
            "activityArt": "book"
          },
          {
            "type": "museum",
            "sentence": "Mia enjoys painting.",
            "zh": "enjoy 后收藏“画画”这项活动。",
            "axes": {
              "exhibit": [
                [
                  "painting",
                  "painting"
                ],
                [
                  "to paint",
                  "to paint"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "painting",
              "shelf": "O"
            },
            "answer": "{\"exhibit\":\"painting\",\"shelf\":\"O\"}",
            "why": "enjoy 通常接 -ing 活动结构，在本题用 painting，不接 to paint。",
            "icon": "ball",
            "frame": "Mia enjoys {exhibit}.",
            "activityArt": "paint"
          },
          {
            "type": "museum",
            "sentence": "Mia rests after reading.",
            "zh": "after 后面放读书这项活动。",
            "axes": {
              "exhibit": [
                [
                  "reading",
                  "reading"
                ],
                [
                  "to read",
                  "to read"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "reading",
              "shelf": "Op"
            },
            "answer": "{\"exhibit\":\"reading\",\"shelf\":\"Op\"}",
            "why": "after 是本题介词，后接 reading；整个 after reading 补充休息前做过什么。",
            "icon": "ball",
            "frame": "Mia rests after {exhibit}.",
            "activityArt": "book"
          },
          {
            "type": "museum",
            "sentence": "My hobby is drawing birds.",
            "zh": "把画鸟作为 hobby 的具体内容，不是在说我此刻正在画。",
            "axes": {
              "exhibit": [
                [
                  "drawing birds",
                  "drawing birds"
                ],
                [
                  "draws birds",
                  "draws birds"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "drawing birds",
              "shelf": "P"
            },
            "answer": "{\"exhibit\":\"drawing birds\",\"shelf\":\"P\"}",
            "why": "drawing birds 说明爱好的内容，是本题的表语；不能看到 is 和 -ing 就断言进行时。",
            "icon": "ball",
            "frame": "My hobby is {exhibit}.",
            "activityArt": "bird"
          },
          {
            "type": "museum",
            "sentence": "We call this activity birdwatching.",
            "zh": "我们把这项活动叫作“观鸟”，给 this activity 一个名称。",
            "axes": {
              "exhibit": [
                [
                  "birdwatching",
                  "birdwatching"
                ],
                [
                  "watches birds",
                  "watches birds"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "birdwatching",
              "shelf": "C"
            },
            "answer": "{\"exhibit\":\"birdwatching\",\"shelf\":\"C\"}",
            "why": "这个特定 call 结构用 birdwatching 为活动命名，说明宾语；不代表所有 -ing 都能放进所有宾补结构。",
            "icon": "ball",
            "frame": "We call this activity {exhibit}.",
            "activityArt": "bird"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c16-m2",
        "title": "介词展架与活动内容",
        "pages": "179–183",
        "items": [
          {
            "type": "museum",
            "sentence": "Swimming is good exercise.",
            "zh": "把游泳作为一项运动来讨论，不指某个人正在游泳。",
            "axes": {
              "exhibit": [
                [
                  "Swimming",
                  "Swimming"
                ],
                [
                  "Swim",
                  "Swim"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "Swimming",
              "shelf": "S"
            },
            "answer": "{\"exhibit\":\"Swimming\",\"shelf\":\"S\"}",
            "why": "Swimming 整体表示活动，作主语；单独的 Swim 不用在这个普通陈述句的主语位置。",
            "icon": "ball",
            "frame": "{exhibit} is good exercise.",
            "activityArt": "water"
          },
          {
            "type": "museum",
            "sentence": "Mia avoids wasting water.",
            "zh": "avoid 后接“浪费水”这项要避免的活动。",
            "axes": {
              "exhibit": [
                [
                  "wasting water",
                  "wasting water"
                ],
                [
                  "to waste water",
                  "to waste water"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "wasting water",
              "shelf": "O"
            },
            "answer": "{\"exhibit\":\"wasting water\",\"shelf\":\"O\"}",
            "why": "avoid 通常接 -ing 结构；water 是 wasting 的宾语，动名词内部仍保留动词性质。",
            "icon": "ball",
            "frame": "Mia avoids {exhibit}.",
            "activityArt": "water"
          },
          {
            "type": "museum",
            "sentence": "Mia is good at making toys.",
            "zh": "在 good at 的介词 at 后放制作玩具。",
            "axes": {
              "exhibit": [
                [
                  "making toys",
                  "making toys"
                ],
                [
                  "to make toys",
                  "to make toys"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "making toys",
              "shelf": "Op"
            },
            "answer": "{\"exhibit\":\"making toys\",\"shelf\":\"Op\"}",
            "why": "good at + -ing 是这个搭配；不是所有 to 都是不定式，也不是所有活动表达可自由互换。",
            "icon": "ball",
            "frame": "Mia is good at {exhibit}.",
            "activityArt": "box"
          },
          {
            "type": "museum",
            "sentence": "Her favourite activity is reading.",
            "zh": "说明她最喜欢的活动是什么。",
            "axes": {
              "exhibit": [
                [
                  "reading",
                  "reading"
                ],
                [
                  "reads",
                  "reads"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "reading",
              "shelf": "P"
            },
            "answer": "{\"exhibit\":\"reading\",\"shelf\":\"P\"}",
            "why": "reading 作为活动内容说明主语；这与 She is reading 的进行结构不同，要看主语和意义。",
            "icon": "ball",
            "frame": "Her favourite activity is {exhibit}.",
            "activityArt": "book"
          },
          {
            "type": "museum",
            "sentence": "I look forward to meeting Mia.",
            "zh": "look forward to 中的 to 是介词，后接会见米娅这项活动。",
            "axes": {
              "exhibit": [
                [
                  "meeting Mia",
                  "meeting Mia"
                ],
                [
                  "meet Mia",
                  "meet Mia"
                ]
              ],
              "shelf": [
                [
                  "S",
                  "活动作主语"
                ],
                [
                  "O",
                  "动词后的活动"
                ],
                [
                  "P",
                  "说明主语内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "给活动命名"
                ]
              ]
            },
            "expected": {
              "exhibit": "meeting Mia",
              "shelf": "Op"
            },
            "answer": "{\"exhibit\":\"meeting Mia\",\"shelf\":\"Op\"}",
            "why": "look forward to 后用 -ing；此处 to 不是 to-infinitive 标记，不能因此用 meet。",
            "icon": "ball",
            "frame": "I look forward to {exhibit}.",
            "activityArt": "portrait"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c16-m3",
        "title": "搭配与形式检查",
        "pages": "179–185",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia finished ___ a bird.",
            "zh": "finish 后接什么形式？",
            "target": "___",
            "answer": "drawing",
            "options": [
              "drawing",
              "to draw"
            ],
            "why": "finish 后通常接 -ing：finished drawing；不能仅凭动作已结束随意换成其他形式。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "Mia is interested in ___ birds.",
            "zh": "介词 in 后讨论观察鸟这项活动。",
            "target": "___",
            "answer": "watching",
            "options": [
              "watching",
              "to watch"
            ],
            "why": "interested in + -ing 是这里的搭配，watching 后仍可接宾语 birds。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "Mia enjoys reading stories.",
            "zh": "stories 在活动结构内部做什么？",
            "target": "整句",
            "answer": "reading 的宾语",
            "options": [
              "reading 的宾语",
              "整句主语"
            ],
            "why": "整个 reading stories 是 enjoy 后的活动内容；内部 stories 仍作 reading 的宾语。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "Mia wants ___ a story.",
            "zh": "对照 enjoy，want 在本用法后接什么？",
            "target": "___",
            "answer": "to read",
            "options": [
              "to read",
              "reading"
            ],
            "why": "want to read 是这里的常见搭配；不把所有活动表达当作同一种展架。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "Reading stories ___ fun.",
            "zh": "把读故事作为单项活动。",
            "target": "___",
            "answer": "is",
            "options": [
              "is",
              "are"
            ],
            "why": "单个活动整体作主语通常配 is，不受内部复数 stories 干扰。",
            "icon": "ball"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c16-m4",
        "title": "活动属于谁？",
        "pages": "180–185",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia's singing surprised us.",
            "zh": "谁唱歌？",
            "target": "整句",
            "answer": "Mia",
            "options": [
              "Mia",
              "us"
            ],
            "why": "所有格 Mia’s 明确 singing 的参与者；us 是感到吃惊的人，不是唱歌者。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "Mia enjoys reading.",
            "zh": "按普通语境，谁读书？",
            "target": "整句",
            "answer": "Mia",
            "options": [
              "Mia",
              "不可能判断任何线索"
            ],
            "why": "这个 enjoy 活动的普通理解是主语 Mia 参与 reading；仍需结合具体结构和语境。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "I do not mind you singing.",
            "zh": "此处 you singing 能自然使用吗？",
            "target": "整句",
            "answer": "可以，不是一律只能所有格",
            "options": [
              "可以，不是一律只能所有格",
              "不可以，所有 -ing 前只能 your"
            ],
            "why": "you singing 可自然表达，尤其口语中；your singing 也是另一种常见形式。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "Being late can cause problems.",
            "zh": "没有给出特定人，是否只能理解成主句里的“问题”在迟到？",
            "target": "整句",
            "answer": "不是，活动参与者可由语境泛指",
            "options": [
              "不是，活动参与者可由语境泛指",
              "是，problems 必然是迟到者"
            ],
            "why": "逻辑参与者不总是硬套主句最近名词；本句可泛指迟到这件事。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "I worry about Mia's staying up late.",
            "zh": "我担心的是谁熬夜？",
            "target": "整句",
            "answer": "Mia",
            "options": [
              "Mia",
              "I"
            ],
            "why": "Mia’s 指明 staying up late 的参与者；I 是担心的人。",
            "icon": "ball"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c16-m5",
        "title": "收藏馆综合辨认",
        "pages": "179–185",
        "items": [
          {
            "type": "pick",
            "sentence": "She is reading now.",
            "zh": "本句 reading 与 is 合作做什么？",
            "target": "整句",
            "answer": "构成进行结构",
            "options": [
              "构成进行结构",
              "只是在说爱好名称"
            ],
            "why": "在此刻动作语境中 is reading 构成现在进行；-ing 形式不自动等于名词功能。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "Her hobby is reading.",
            "zh": "本句 reading 说明什么？",
            "target": "整句",
            "answer": "爱好的内容",
            "options": [
              "爱好的内容",
              "保证她此刻正在读书"
            ],
            "why": "reading 说明 hobby 的内容，本句不保证此刻正在进行该活动。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "It is no use worrying.",
            "zh": "在这个常见搭配中选正确表达。",
            "target": "整句",
            "answer": "worrying",
            "options": [
              "worrying",
              "worries"
            ],
            "why": "It is no use + -ing 是具体搭配，不把它当作所有长活动表达都可自由搬动的规则。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "We call this activity birdwatching.",
            "zh": "birdwatching 在这个 call 结构中说明谁？",
            "target": "整句",
            "answer": "this activity",
            "options": [
              "this activity",
              "We"
            ],
            "why": "这是给活动命名的特定结构，不是说我们本身叫作观鸟。",
            "icon": "ball"
          },
          {
            "type": "pick",
            "sentence": "I look forward to meeting Mia.",
            "zh": "此处 to 的工作是什么？",
            "target": "整句",
            "answer": "介词，后接 meeting",
            "options": [
              "介词，后接 meeting",
              "见到 to 就必须接 meet"
            ],
            "why": "look forward to 是需要连同后接 -ing 认识的整体搭配。",
            "icon": "ball"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      }
    ]
  },
  {
    "id": "c17",
    "number": "17",
    "title": "任务发射站",
    "subtitle": "先找动作的参与者，再选择目标路径",
    "mechanic": "参与者接线 · 主动被动路径 · 任务形式",
    "theme": "sky",
    "scene": "rocket",
    "book": "第 17 章 · 书内 186–201 页",
    "brief": "任务卡上的 to read 由谁执行？一本 easy to read 的书是在读，还是被读？选择参与者和结构，让每枚任务火箭沿着正确关系发射。",
    "lessons": [
      {
        "title": "to + 原形，也有不带 to 的用法",
        "body": "want to read、decide to go 里用 to + 原形；can read、make him laugh 用不带 to 的原形。to Paris 是介词短语。非谓语形式可以是谓语动词组的一部分，不教成“永远不是动词”。",
        "example": "Mia wants to read. Mia can read.",
        "zh": "米娅想读书。米娅会读书。",
        "visual": "rocket",
        "tags": [
          "to-infinitive",
          "不带 to",
          "to Paris 是另一种结构"
        ]
      },
      {
        "title": "谁执行，不由最近词决定",
        "body": "Mia wants to read 通常由 Mia 读；Mia asked Leo to read 由 Leo 读。for Leo to read 可明示参与者。语境中也可能泛指人，不能把非谓语一律说成从句机械删主语所得。",
        "example": "Mia asked Leo to read.",
        "zh": "米娅请里奥读书。",
        "visual": "portrait",
        "tags": [
          "主语控制",
          "宾语参与",
          "for + 人 + to",
          "看具体搭配"
        ]
      },
      {
        "title": "在句中能做多种工作",
        "body": "To read is useful. 可作主语；Mia wants to read 作动词补足；Her plan is to read 说明计划；a book to read 修饰名词；came to read 表目的。搭配限制仍在，不是任何位置都能自由替换。",
        "example": "Mia came to read a book.",
        "zh": "米娅来读一本书。",
        "visual": "house",
        "tags": [
          "主语 / 内容",
          "动词补足",
          "后置修饰",
          "目的"
        ]
      },
      {
        "title": "remember 和 stop 会改变故事",
        "body": "remember doing 回忆做过的事；remember to do 记得履行任务。stop reading 停止读书；stop to read 停下其他活动以便读书。like/start 等可有两种形式，但不宣称任何搭配都完全无差别。",
        "example": "Mia stopped walking to read the sign.",
        "zh": "米娅停下脚步去读标牌。",
        "visual": "book",
        "tags": [
          "做过的回忆",
          "要履行的任务",
          "停止动作",
          "停下以便做"
        ]
      },
      {
        "title": "形式不等于未来时间",
        "body": "the first to arrive 可谈已到达的人；seems to have finished 用完成形式指先前完成；to be delivered 表被动。be to 可表示安排或要求，也不等于任何语境都能与 will 完全互换。",
        "example": "Mia seems to have finished.",
        "zh": "米娅看起来已经完成了。",
        "visual": "clock",
        "tags": [
          "完成 to have done",
          "被动 to be done",
          "安排 be to",
          "不是一律将来"
        ]
      },
      {
        "title": "easy、目的和 wh 任务卡",
        "body": "The book is easy to read 中书是被阅读的对象，读者由语境理解。too heavy to lift、light enough to carry 要结合能否和程度。what to do/how to do it 保留 wh 信息；for/of 也按具体评价搭配区别。",
        "example": "I know what to do. The book is easy to read.",
        "zh": "我知道该做什么。这本书很容易读。",
        "visual": "map",
        "tags": [
          "easy to read",
          "too / enough",
          "what / how to",
          "避免悬垂目的"
        ]
      }
    ],
    "missions": [
      {
        "id": "c17-m1",
        "title": "任务由谁来做？",
        "pages": "186–200",
        "items": [
          {
            "type": "launch",
            "sentence": "Mia wants to paint.",
            "zh": "米娅想画画：谁是准备画画的人？",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to paint",
                  "to paint"
                ],
                [
                  "painting",
                  "painting"
                ]
              ]
            },
            "expected": {
              "pilot": "Mia",
              "form": "to paint"
            },
            "answer": "{\"pilot\":\"Mia\",\"form\":\"to paint\"}",
            "why": "want 在这里接 to paint，通常由主语 Mia 来画；不能把主语选择交给最近的物品。",
            "icon": "rocket",
            "frame": "Mia wants {form}.",
            "taskArt": "paint"
          },
          {
            "type": "launch",
            "sentence": "Mia asked Leo to paint.",
            "zh": "米娅请里奥画画；谁被请去画？",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to paint",
                  "to paint"
                ],
                [
                  "painted",
                  "painted"
                ]
              ]
            },
            "expected": {
              "pilot": "Leo",
              "form": "to paint"
            },
            "answer": "{\"pilot\":\"Leo\",\"form\":\"to paint\"}",
            "why": "ask Leo to paint 中 Leo 是 paint 的参与者；不能因 Mia 是主句主语就一律选 Mia。",
            "icon": "rocket",
            "frame": "Mia asked Leo {form}.",
            "taskArt": "paint"
          },
          {
            "type": "launch",
            "sentence": "Mia hopes to read.",
            "zh": "米娅希望读书，选择这个 hope 搭配并找到读的人。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to read",
                  "to read"
                ],
                [
                  "reading",
                  "reading"
                ]
              ]
            },
            "expected": {
              "pilot": "Mia",
              "form": "to read"
            },
            "answer": "{\"pilot\":\"Mia\",\"form\":\"to read\"}",
            "why": "hope 在本用法接 to read；读书者按这里的普通理解是 Mia。",
            "icon": "rocket",
            "frame": "Mia hopes {form}.",
            "taskArt": "book"
          },
          {
            "type": "launch",
            "sentence": "It is time for Leo to sleep.",
            "zh": "现在该里奥睡觉，for Leo 明确谁参与动作。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to sleep",
                  "to sleep"
                ],
                [
                  "sleeping",
                  "sleeping"
                ]
              ]
            },
            "expected": {
              "pilot": "Leo",
              "form": "to sleep"
            },
            "answer": "{\"pilot\":\"Leo\",\"form\":\"to sleep\"}",
            "why": "for Leo to sleep 明确 sleep 的参与者；不把 Leo 只当作与后面动作无关的标签。",
            "icon": "rocket",
            "frame": "It is time for Leo {form}.",
            "taskArt": "moon"
          },
          {
            "type": "launch",
            "sentence": "Mia went out to buy a book.",
            "zh": "米娅出门是为了买书；这是目的，不是已经买到的保证。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to buy a book",
                  "to buy a book"
                ],
                [
                  "bought a book",
                  "bought a book"
                ]
              ]
            },
            "expected": {
              "pilot": "Mia",
              "form": "to buy a book"
            },
            "answer": "{\"pilot\":\"Mia\",\"form\":\"to buy a book\"}",
            "why": "目的不定式 to buy a book 通常由出门的 Mia 去做；单靠目的表达不保证成功。",
            "icon": "rocket",
            "frame": "Mia went out {form}.",
            "taskArt": "bag"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c17-m2",
        "title": "书本与工具不会自己读写",
        "pages": "186–200",
        "items": [
          {
            "type": "launch",
            "sentence": "The book is easy to read.",
            "zh": "本题练 easy to read：书是被阅读的对象，实际阅读者由语境理解。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to read",
                  "to read"
                ],
                [
                  "to be read",
                  "to be read"
                ]
              ]
            },
            "expected": {
              "pilot": "reader",
              "form": "to read"
            },
            "answer": "{\"pilot\":\"reader\",\"form\":\"to read\"}",
            "why": "easy to read 是常见的主动形式表达被读关系；书不是自己读书，不机械改成 to be read。",
            "icon": "rocket",
            "frame": "The book is easy {form}.",
            "taskArt": "book"
          },
          {
            "type": "launch",
            "sentence": "Mia has a pen to write with.",
            "zh": "米娅有用来写字的笔；保留与 pen 的工具关系。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to write with",
                  "to write with"
                ],
                [
                  "to write",
                  "to write"
                ]
              ]
            },
            "expected": {
              "pilot": "Mia",
              "form": "to write with"
            },
            "answer": "{\"pilot\":\"Mia\",\"form\":\"to write with\"}",
            "why": "在本题“用笔写”的意思中需要 with；动笔的人按语境是 Mia。",
            "icon": "rocket",
            "frame": "Mia has a pen {form}.",
            "taskArt": "paint"
          },
          {
            "type": "launch",
            "sentence": "Mia has a book to read.",
            "zh": "米娅有一本可以读的书；找读者和后置修饰结构。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to read",
                  "to read"
                ],
                [
                  "reads",
                  "reads"
                ]
              ]
            },
            "expected": {
              "pilot": "Mia",
              "form": "to read"
            },
            "answer": "{\"pilot\":\"Mia\",\"form\":\"to read\"}",
            "why": "to read 接在 book 后补充用途或待做内容，Mia 是这里的读者，不是书在读。",
            "icon": "rocket",
            "frame": "Mia has a book {form}.",
            "taskArt": "book"
          },
          {
            "type": "launch",
            "sentence": "Leo was the first to arrive.",
            "zh": "里奥是第一个到达的人；到达已经发生，不定式仍可使用。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to arrive",
                  "to arrive"
                ],
                [
                  "arriving",
                  "arriving"
                ]
              ]
            },
            "expected": {
              "pilot": "Leo",
              "form": "to arrive"
            },
            "answer": "{\"pilot\":\"Leo\",\"form\":\"to arrive\"}",
            "why": "the first to arrive 是自然搭配；不定式并不一律指尚未发生的将来。",
            "icon": "rocket",
            "frame": "Leo was the first {form}.",
            "taskArt": "rocket"
          },
          {
            "type": "launch",
            "sentence": "Mia is glad to see Leo.",
            "zh": "米娅见到里奥很开心；选 glad 的本题搭配。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to see Leo",
                  "to see Leo"
                ],
                [
                  "seeing Leo",
                  "seeing Leo"
                ]
              ]
            },
            "expected": {
              "pilot": "Mia",
              "form": "to see Leo"
            },
            "answer": "{\"pilot\":\"Mia\",\"form\":\"to see Leo\"}",
            "why": "glad to see Leo 中 see 的参与者是 Mia；to 不强制把会面解释为遥远将来。",
            "icon": "rocket",
            "frame": "Mia is glad {form}.",
            "taskArt": "portrait"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c17-m3",
        "title": "完成、被动和原形通道",
        "pages": "186–200",
        "items": [
          {
            "type": "launch",
            "sentence": "Mia seems to have finished.",
            "zh": "现在看来米娅先前已经完成，选完成不定式。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to have finished",
                  "to have finished"
                ],
                [
                  "to finish yesterday",
                  "to finish yesterday"
                ]
              ]
            },
            "expected": {
              "pilot": "Mia",
              "form": "to have finished"
            },
            "answer": "{\"pilot\":\"Mia\",\"form\":\"to have finished\"}",
            "why": "to have finished 把完成放在 seems 的参照之前；不是只能用 to + 单个原形词。",
            "icon": "rocket",
            "frame": "Mia seems {form}.",
            "taskArt": "clock"
          },
          {
            "type": "launch",
            "sentence": "Mia wants the book to be delivered.",
            "zh": "本题把 the book 当作不定式的明确主语，它受到递送。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "to be delivered",
                  "to be delivered"
                ],
                [
                  "to deliver",
                  "to deliver"
                ]
              ]
            },
            "expected": {
              "pilot": "book",
              "form": "to be delivered"
            },
            "answer": "{\"pilot\":\"book\",\"form\":\"to be delivered\"}",
            "why": "the book to be delivered 里书是被递送的一方；选择被动不定式，不把书说成递送者。",
            "icon": "rocket",
            "frame": "Mia wants the book {form}.",
            "taskArt": "book"
          },
          {
            "type": "launch",
            "sentence": "Leo decided not to go.",
            "zh": "里奥决定不去，练本题常见的否定排列。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "not to go",
                  "not to go"
                ],
                [
                  "to not goes",
                  "to not goes"
                ]
              ]
            },
            "expected": {
              "pilot": "Leo",
              "form": "not to go"
            },
            "answer": "{\"pilot\":\"Leo\",\"form\":\"not to go\"}",
            "why": "not to go 是本题自然否定形式；本题另一选项 goes 形式也不合此结构。",
            "icon": "rocket",
            "frame": "Leo decided {form}.",
            "taskArt": "rocket"
          },
          {
            "type": "launch",
            "sentence": "Mia can paint.",
            "zh": "情态动词 can 后使用不带 to 的原形，画画者是米娅。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "paint",
                  "paint"
                ],
                [
                  "to paint",
                  "to paint"
                ]
              ]
            },
            "expected": {
              "pilot": "Mia",
              "form": "paint"
            },
            "answer": "{\"pilot\":\"Mia\",\"form\":\"paint\"}",
            "why": "can + 原形 paint，不说 can to paint；不定式还存在不带 to 的用法。",
            "icon": "rocket",
            "frame": "Mia can {form}.",
            "taskArt": "paint"
          },
          {
            "type": "launch",
            "sentence": "Mia made Leo laugh.",
            "zh": "主动使役 make 结构中，里奥是笑的人。",
            "axes": {
              "pilot": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "reader",
                  "语境中的读者"
                ],
                [
                  "book",
                  "书本身"
                ]
              ],
              "form": [
                [
                  "laugh",
                  "laugh"
                ],
                [
                  "to laugh",
                  "to laugh"
                ]
              ]
            },
            "expected": {
              "pilot": "Leo",
              "form": "laugh"
            },
            "answer": "{\"pilot\":\"Leo\",\"form\":\"laugh\"}",
            "why": "make Leo laugh 的主动结构不带 to；Leo 是 laugh 的参与者，后面被动结构要另看。",
            "icon": "rocket",
            "frame": "Mia made Leo {form}.",
            "taskArt": "portrait"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c17-m4",
        "title": "任务路径的工作",
        "pages": "186–194",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia decided ___ home.",
            "zh": "decide 在本用法后接什么？",
            "target": "___",
            "answer": "to go",
            "options": [
              "to go",
              "going"
            ],
            "why": "decide to go 是本题搭配，不能把所有活动形式自由互换。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Her plan is to read.",
            "zh": "to read 在这里说明什么？",
            "target": "整句",
            "answer": "计划的内容",
            "options": [
              "计划的内容",
              "保证此刻正在读书"
            ],
            "why": "它说明 plan 的内容，不等于现在进行，也不保证计划已实现。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "To read every day is useful.",
            "zh": "哪一整组在本句作主语？",
            "target": "整句",
            "answer": "To read every day",
            "options": [
              "To read every day",
              "every day 单独"
            ],
            "why": "不定式结构整体作主语，every day 只是内部时间信息。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "It is useful to read every day.",
            "zh": "it 在这里做什么？",
            "target": "整句",
            "answer": "形式主语占位",
            "options": [
              "形式主语占位",
              "指向一本已经出现的书"
            ],
            "why": "这是具体的 it + 评价 + 不定式结构；不把 it 总当成实物指代。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "I find it easy to read this book.",
            "zh": "it 在这个 find 结构中是什么？",
            "target": "整句",
            "answer": "形式宾语",
            "options": [
              "形式宾语",
              "read 的主语一定是 it"
            ],
            "why": "find it easy to... 是具体搭配，it 先占位置；本题阅读者由 I 理解。",
            "icon": "rocket"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c17-m5",
        "title": "记得、忘记与停下来",
        "pages": "191–193",
        "items": [
          {
            "type": "pick",
            "sentence": "I remember ___ the gate.",
            "zh": "我记得自己已经关过门，这是一段回忆。",
            "target": "___",
            "answer": "closing",
            "options": [
              "closing",
              "to close"
            ],
            "why": "remember closing 回忆关门这件事；remember to close 则强调记得去履行任务。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Please remember ___ the gate.",
            "zh": "请记得执行关门任务，不是在回忆已经关过。",
            "target": "___",
            "answer": "to close",
            "options": [
              "to close",
              "closing"
            ],
            "why": "此处 remember to close 用于提醒履行任务；语境决定两种搭配的区别。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Mia stopped reading.",
            "zh": "这里米娅停止的是什么？",
            "target": "整句",
            "answer": "读书本身",
            "options": [
              "读书本身",
              "为了读书而停下走路"
            ],
            "why": "stop + -ing 表停止这项活动；不等于 stop to read。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Mia stopped to read the sign.",
            "zh": "这里 to read 表达什么？",
            "target": "整句",
            "answer": "停下其他活动以便读标牌",
            "options": [
              "停下其他活动以便读标牌",
              "停止读标牌这项活动"
            ],
            "why": "stop to read 说明停下的目的，不能读成“停止阅读”。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Mia forgot to bring the key.",
            "zh": "在普通语境里，这句话说明什么？",
            "target": "整句",
            "answer": "忘了履行带钥匙这项任务",
            "options": [
              "忘了履行带钥匙这项任务",
              "肯定已经带了，只是忘记带过"
            ],
            "why": "forgot to bring 通常是没有记得去带；不与忘记做过某事的 -ing 用法混同。",
            "icon": "rocket"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c17-m6",
        "title": "wh 与明确参与者",
        "pages": "193–200",
        "items": [
          {
            "type": "pick",
            "sentence": "I know ___ to do.",
            "zh": "我知道该做什么，do 后需要内容。",
            "target": "___",
            "answer": "what",
            "options": [
              "what",
              "how"
            ],
            "why": "what to do 表该做什么；how to do 通常需要补 it 等对象来表达如何做某事。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "I know how to do ___.",
            "zh": "我知道如何做这件事，补出 do 的对象。",
            "target": "___",
            "answer": "it",
            "options": [
              "it",
              "省略一切对象"
            ],
            "why": "how to do it 保留做什么的对象；本题不是 how to do 与 what to do 随意互换。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "It is easy for Leo to read this.",
            "zh": "明确谁来读？",
            "target": "整句",
            "answer": "Leo",
            "options": [
              "Leo",
              "this"
            ],
            "why": "for Leo to read 明确参与者 Leo；this 是被阅读的内容。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "It was kind ___ Mia to help.",
            "zh": "评价米娅帮助人的行为很友善。",
            "target": "___",
            "answer": "of",
            "options": [
              "of",
              "for"
            ],
            "why": "kind of Mia to help 是评价人的行为的常见搭配；不把 for/of 任意替换。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Mia is to leave at nine.",
            "zh": "在安排语境中 be to leave 是否只是 can leave 的能力？",
            "target": "整句",
            "answer": "不是，这里表示安排",
            "options": [
              "不是，这里表示安排",
              "是，所有 be to 都只表示能力"
            ],
            "why": "be to 可表达安排或要求等；不等于单纯能力，也不是任何语境都与 will 完全相同。",
            "icon": "rocket"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c17-m7",
        "title": "程度、关系与省略界限",
        "pages": "195–201",
        "items": [
          {
            "type": "pick",
            "sentence": "The box is too heavy to lift.",
            "zh": "按本题语境，太重带来什么限制？",
            "target": "整句",
            "answer": "难以按条件举起",
            "options": [
              "难以按条件举起",
              "保证盒子自己会举东西"
            ],
            "why": "too heavy to lift 讨论程度带来的限制；box 是被举对象，不是举东西者。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "The box is light enough to carry.",
            "zh": "enough 放在哪里？",
            "target": "整句",
            "answer": "形容词 light 后面",
            "options": [
              "形容词 light 后面",
              "一定放在 light 前面"
            ],
            "why": "本结构为 adjective + enough + to...；名词数量结构的排列另看。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "To read the sign, Mia stopped.",
            "zh": "目的动作的参与者与主句是否清楚对应？",
            "target": "整句",
            "answer": "清楚，Mia 停下去读",
            "options": [
              "清楚，Mia 停下去读",
              "不清楚，标牌在停下"
            ],
            "why": "这里 Mia 同时是停下和读的人，关系清楚。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "To read the sign, the bus was stopped by Mia.",
            "zh": "本题希望明确米娅读标牌，怎样写更清楚？",
            "target": "整句",
            "answer": "To read the sign, Mia stopped the bus.",
            "options": [
              "To read the sign, Mia stopped the bus.",
              "To read the sign, the sign stopped Mia."
            ],
            "why": "让目的动作和主句主语明确对应 Mia，避免把目的不定式悬挂到 bus。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Mia was made ___ laugh.",
            "zh": "对照主动 made Leo laugh，本题是 make 的被动结构。",
            "target": "___",
            "answer": "to",
            "options": [
              "to",
              "省略 to"
            ],
            "why": "be made to laugh 通常恢复 to；主动使役 make + 人 + 原形与此不同。",
            "icon": "rocket"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c17-m8",
        "title": "不定式综合发射",
        "pages": "186–201",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia was the first to arrive yesterday.",
            "zh": "to arrive 是否必须指将来？",
            "target": "整句",
            "answer": "不是，这里到达已发生",
            "options": [
              "不是，这里到达已发生",
              "是，因此 yesterday 必须删掉"
            ],
            "why": "不定式自身不一概规定未来时间，要看整个结构的时间关系。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Mia seems to have finished.",
            "zh": "完成动作与当前 seems 的关系是什么？",
            "target": "整句",
            "answer": "通常先前已经完成",
            "options": [
              "通常先前已经完成",
              "一定在明天才开始"
            ],
            "why": "完成不定式 to have finished 表示相对参照更早，不是把所有 to 读成未来。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "The book needs to be delivered.",
            "zh": "书与 deliver 的关系是什么？",
            "target": "整句",
            "answer": "书受到递送",
            "options": [
              "书受到递送",
              "书负责递送别人"
            ],
            "why": "to be delivered 为被动不定式；书不是动作发出者。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Mia needs a pen to write with.",
            "zh": "本题“用笔写”为什么保留 with？",
            "target": "整句",
            "answer": "维持笔作为工具的关系",
            "options": [
              "维持笔作为工具的关系",
              "只要不定式都必须最后加 with"
            ],
            "why": "with 对应 write with a pen；不是不定式通用词尾。",
            "icon": "rocket"
          },
          {
            "type": "pick",
            "sentence": "Mia wants to go to Paris.",
            "zh": "两个 to 是否工作相同？",
            "target": "整句",
            "answer": "不同，to go 是不定式，to Paris 是介词短语",
            "options": [
              "不同，to go 是不定式，to Paris 是介词短语",
              "相同，后面任何词都算不定式"
            ],
            "why": "要看后接结构，不能仅凭同一个拼写给所有 to 同样分类。",
            "icon": "rocket"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      }
    ]
  },
  {
    "id": "c18",
    "number": "18",
    "title": "动作定格厂",
    "subtitle": "先对准描述对象，再看动作或感受的关系",
    "mechanic": "播放定格 · 对象接线 · 关系显影",
    "theme": "peach",
    "scene": "film",
    "book": "第 18 章 · 书内 202–216 页",
    "brief": "同一张画面，可以描写唱歌的鸟、被涂过的盒子，也可以讲兴奋的人或让人兴奋的故事。播放与定格只是观察工具，语法形式仍由对象、结构和意义共同决定。",
    "lessons": [
      {
        "title": "分词名称不是时间按钮",
        "body": "singing 是 -ing 形式，painted、broken、made 是过去分词形式。它们能参与进行、完成、被动，也可修饰名词或作其他补足。现在分词不总指现在，过去分词也不总指过去或被动。",
        "example": "The fallen leaves are brown.",
        "zh": "落叶是棕色的。",
        "visual": "leaf",
        "tags": [
          "-ing / 过去分词",
          "不规则形式",
          "时间看整个结构"
        ]
      },
      {
        "title": "感受和引起感受要分清",
        "body": "Mia is excited 是她感到兴奋；Mia is exciting 可以说她令人兴奋。故事可 interesting，读者可 interested；动物也可有感受，人物也可引起感受。不要背成“人 -ed、物 -ing”。",
        "example": "Mia is excited. The story is exciting.",
        "zh": "米娅很兴奋。故事令人兴奋。",
        "visual": "portrait",
        "tags": [
          "体验者",
          "感受来源",
          "看意义而非人或物"
        ]
      },
      {
        "title": "定语、表语与动词组",
        "body": "a sleeping cat 的 sleeping 修饰名词；the box painted yesterday 用较长短语后置。Mia is tired 可说状态；Mia is painting 里的 is painting 构成进行。不要把 be 后每个分词都叫同一种表语。",
        "example": "The cat sleeping outside is white.",
        "zh": "在外面睡觉的猫是白色的。",
        "visual": "cat",
        "tags": [
          "短修饰常前置",
          "长短语常后置",
          "词组与功能分开"
        ]
      },
      {
        "title": "感官和保持状态的补足",
        "body": "I saw Leo drawing 描述看到 Leo 的过程；keep the door locked 描述门保持锁住。分词与宾语关系要检查，而不是只跟着主句主语找动作发出者。",
        "example": "Mia saw Leo drawing.",
        "zh": "米娅看见里奥在画画。",
        "visual": "paint",
        "tags": [
          "感官 + 对象 + -ing",
          "keep + 对象 + 过去分词",
          "对象不等于主句主语"
        ]
      },
      {
        "title": "相伴、先前完成和结果",
        "body": "Reading the sign, Mia smiled 可按情境表达相伴。Having finished, Mia rested 明确先前完成。分词也可补充原因、条件或结果；普通 -ing 也可能表达紧接发生，不强制每个早发生动作都改 having done。",
        "example": "Having finished, Mia rested.",
        "zh": "完成之后，米娅休息了。",
        "visual": "clock",
        "tags": [
          "相伴过程",
          "having + 过去分词",
          "结果",
          "时间与逻辑看语境"
        ]
      },
      {
        "title": "给前置修饰找到参与者",
        "body": "Walking home, Mia saw a bird 里走路的是 Mia。若实际是 Leo 走路，就不能随意删去 Leo 再挂到 Mia。独立结构可以保留自己的参与者，下一章再展开；常见固定评论结构也不能一刀切用同主语规则判断。",
        "example": "Walking home, Mia saw a bird.",
        "zh": "走回家时，米娅看见一只鸟。",
        "visual": "map",
        "tags": [
          "避免悬垂",
          "普通前置分词通常同主语",
          "保留不同参与者"
        ]
      }
    ],
    "missions": [
      {
        "id": "c18-m1",
        "title": "感受与动作的第一帧",
        "pages": "202–213",
        "items": [
          {
            "type": "freeze",
            "sentence": "The bird singing outside is blue.",
            "zh": "找到唱歌的鸟；bird 主动唱歌。",
            "axes": {
              "actor": [
                [
                  "the bird",
                  "鸟"
                ],
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ]
              ],
              "relation": [
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ],
                [
                  "feeling",
                  "对象有这种感受"
                ]
              ],
              "form": [
                [
                  "singing outside",
                  "singing outside"
                ],
                [
                  "sung outside",
                  "sung outside"
                ]
              ]
            },
            "expected": {
              "actor": "the bird",
              "relation": "active",
              "form": "singing outside"
            },
            "answer": "{\"actor\":\"the bird\",\"relation\":\"active\",\"form\":\"singing outside\"}",
            "why": "singing outside 修饰 bird，表达鸟主动唱歌；不把分词名称直接当时间标签。",
            "icon": "film",
            "frame": "The bird {form} is blue.",
            "frameArt": "bird"
          },
          {
            "type": "freeze",
            "sentence": "The box painted by Mia is blue.",
            "zh": "盒子受到米娅的涂色动作，不是盒子给米娅涂色。",
            "axes": {
              "actor": [
                [
                  "the box",
                  "盒子"
                ],
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ]
              ],
              "relation": [
                [
                  "passive",
                  "对象受到动作"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "feeling",
                  "对象有这种感受"
                ]
              ],
              "form": [
                [
                  "painted by Mia",
                  "painted by Mia"
                ],
                [
                  "painting Mia",
                  "painting Mia"
                ]
              ]
            },
            "expected": {
              "actor": "the box",
              "relation": "passive",
              "form": "painted by Mia"
            },
            "answer": "{\"actor\":\"the box\",\"relation\":\"passive\",\"form\":\"painted by Mia\"}",
            "why": "painted by Mia 是修饰盒子的过去分词短语，盒子是被涂的一方。",
            "icon": "film",
            "frame": "The box {form} is blue.",
            "frameArt": "box"
          },
          {
            "type": "freeze",
            "sentence": "Mia is excited.",
            "zh": "米娅感到兴奋；本题描述感受，不是她让别人兴奋。",
            "axes": {
              "actor": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "the bird",
                  "鸟"
                ]
              ],
              "relation": [
                [
                  "feeling",
                  "对象有这种感受"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ]
              ],
              "form": [
                [
                  "excited",
                  "excited"
                ],
                [
                  "exciting",
                  "exciting"
                ]
              ]
            },
            "expected": {
              "actor": "Mia",
              "relation": "feeling",
              "form": "excited"
            },
            "answer": "{\"actor\":\"Mia\",\"relation\":\"feeling\",\"form\":\"excited\"}",
            "why": "excited 表感到兴奋；exciting 可表示让人兴奋，不能只凭人物或物品选词。",
            "icon": "film",
            "frame": "Mia is {form}.",
            "frameArt": "fox"
          },
          {
            "type": "freeze",
            "sentence": "Mia is an exciting storyteller.",
            "zh": "米娅讲故事很精彩，能让听众兴奋；本题讲她带给别人的效果。",
            "axes": {
              "actor": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "the bird",
                  "鸟"
                ]
              ],
              "relation": [
                [
                  "source",
                  "对象引起这种感受"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ]
              ],
              "form": [
                [
                  "exciting",
                  "exciting"
                ],
                [
                  "excited",
                  "excited"
                ]
              ]
            },
            "expected": {
              "actor": "Mia",
              "relation": "source",
              "form": "exciting"
            },
            "answer": "{\"actor\":\"Mia\",\"relation\":\"source\",\"form\":\"exciting\"}",
            "why": "人也可以 exciting，这里指引起兴奋的讲述者；不教“人永远 -ed”。",
            "icon": "film",
            "frame": "Mia is an {form} storyteller.",
            "frameArt": "book"
          },
          {
            "type": "freeze",
            "sentence": "The film is boring.",
            "zh": "电影让人觉得无聊。",
            "axes": {
              "actor": [
                [
                  "the film",
                  "电影"
                ],
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ]
              ],
              "relation": [
                [
                  "source",
                  "对象引起这种感受"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ]
              ],
              "form": [
                [
                  "boring",
                  "boring"
                ],
                [
                  "bored",
                  "bored"
                ]
              ]
            },
            "expected": {
              "actor": "the film",
              "relation": "source",
              "form": "boring"
            },
            "answer": "{\"actor\":\"the film\",\"relation\":\"source\",\"form\":\"boring\"}",
            "why": "boring 表引起无聊感，bored 表体验无聊感；这里谈电影带来的效果。",
            "icon": "film",
            "frame": "The film is {form}.",
            "frameArt": "film"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c18-m2",
        "title": "谁在做，谁受到影响？",
        "pages": "202–213",
        "items": [
          {
            "type": "freeze",
            "sentence": "Mia saw Leo drawing.",
            "zh": "米娅看到里奥正在画，分词结构描述谁在画？",
            "axes": {
              "actor": [
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "the bird",
                  "鸟"
                ]
              ],
              "relation": [
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ],
                [
                  "feeling",
                  "对象有这种感受"
                ]
              ],
              "form": [
                [
                  "drawing",
                  "drawing"
                ],
                [
                  "drawn",
                  "drawn"
                ]
              ]
            },
            "expected": {
              "actor": "Leo",
              "relation": "active",
              "form": "drawing"
            },
            "answer": "{\"actor\":\"Leo\",\"relation\":\"active\",\"form\":\"drawing\"}",
            "why": "drawing 说明宾语 Leo 的动作，Mia 是看的人，不是这里画画的人。",
            "icon": "film",
            "frame": "Mia saw Leo {form}.",
            "frameArt": "paint"
          },
          {
            "type": "freeze",
            "sentence": "Mia kept the door locked.",
            "zh": "保持门被锁住的状态，门不是自己锁别的东西。",
            "axes": {
              "actor": [
                [
                  "the door",
                  "门"
                ],
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ]
              ],
              "relation": [
                [
                  "passive",
                  "对象受到动作"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "feeling",
                  "对象有这种感受"
                ]
              ],
              "form": [
                [
                  "locked",
                  "locked"
                ],
                [
                  "locking",
                  "locking"
                ]
              ]
            },
            "expected": {
              "actor": "the door",
              "relation": "passive",
              "form": "locked"
            },
            "answer": "{\"actor\":\"the door\",\"relation\":\"passive\",\"form\":\"locked\"}",
            "why": "locked 说明门的受动或结果状态，keep 的这个搭配不能机械换成 locking。",
            "icon": "film",
            "frame": "Mia kept the door {form}.",
            "frameArt": "house"
          },
          {
            "type": "freeze",
            "sentence": "Reading the sign, Mia smiled.",
            "zh": "米娅一边读标牌一边微笑，前置分词的参与者和主句对应。",
            "axes": {
              "actor": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "the bird",
                  "鸟"
                ]
              ],
              "relation": [
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ],
                [
                  "feeling",
                  "对象有这种感受"
                ]
              ],
              "form": [
                [
                  "Reading the sign",
                  "Reading the sign"
                ],
                [
                  "Read the sign",
                  "Read the sign"
                ]
              ]
            },
            "expected": {
              "actor": "Mia",
              "relation": "active",
              "form": "Reading the sign"
            },
            "answer": "{\"actor\":\"Mia\",\"relation\":\"active\",\"form\":\"Reading the sign\"}",
            "why": "Reading the sign 在本题描述 Mia 的动作，避免把参与者悬挂到别的对象。",
            "icon": "film",
            "frame": "{form}, Mia smiled.",
            "frameArt": "book"
          },
          {
            "type": "freeze",
            "sentence": "Helped by Mia, Leo finished the task.",
            "zh": "里奥受到米娅帮助后完成任务。",
            "axes": {
              "actor": [
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "the bird",
                  "鸟"
                ]
              ],
              "relation": [
                [
                  "passive",
                  "对象受到动作"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "feeling",
                  "对象有这种感受"
                ]
              ],
              "form": [
                [
                  "Helped by Mia",
                  "Helped by Mia"
                ],
                [
                  "Helping Mia",
                  "Helping Mia"
                ]
              ]
            },
            "expected": {
              "actor": "Leo",
              "relation": "passive",
              "form": "Helped by Mia"
            },
            "answer": "{\"actor\":\"Leo\",\"relation\":\"passive\",\"form\":\"Helped by Mia\"}",
            "why": "Helped by Mia 的被帮助者是 Leo；Helping Mia 则会改变谁帮助谁。",
            "icon": "film",
            "frame": "{form}, Leo finished the task.",
            "frameArt": "portrait"
          },
          {
            "type": "freeze",
            "sentence": "Having finished the picture, Mia rested.",
            "zh": "先画完再休息，用完成分词明确先前完成。",
            "axes": {
              "actor": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "the bird",
                  "鸟"
                ]
              ],
              "relation": [
                [
                  "earlier",
                  "先前完成／已发生"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ]
              ],
              "form": [
                [
                  "Having finished the picture",
                  "Having finished the picture"
                ],
                [
                  "Having finish the picture",
                  "Having finish the picture"
                ]
              ]
            },
            "expected": {
              "actor": "Mia",
              "relation": "earlier",
              "form": "Having finished the picture"
            },
            "answer": "{\"actor\":\"Mia\",\"relation\":\"earlier\",\"form\":\"Having finished the picture\"}",
            "why": "having + 过去分词 finished 突出先前完成；不是必须把所有先后事件都写成此形式。",
            "icon": "film",
            "frame": "{form}, Mia rested.",
            "frameArt": "paint"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c18-m3",
        "title": "条件、完成与结果显影",
        "pages": "202–213",
        "items": [
          {
            "type": "freeze",
            "sentence": "Given more time, Mia could finish the picture.",
            "zh": "如果给予米娅更多时间，她就可能完成。",
            "axes": {
              "actor": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "the bird",
                  "鸟"
                ]
              ],
              "relation": [
                [
                  "passive",
                  "对象受到动作"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "feeling",
                  "对象有这种感受"
                ]
              ],
              "form": [
                [
                  "Given more time",
                  "Given more time"
                ],
                [
                  "Giving more time",
                  "Giving more time"
                ]
              ]
            },
            "expected": {
              "actor": "Mia",
              "relation": "passive",
              "form": "Given more time"
            },
            "answer": "{\"actor\":\"Mia\",\"relation\":\"passive\",\"form\":\"Given more time\"}",
            "why": "Given more time 里 Mia 受到给予，语境表达条件；不把这种条件功能说成只有某一后缀永远可用。",
            "icon": "film",
            "frame": "{form}, Mia could finish the picture.",
            "frameArt": "clock"
          },
          {
            "type": "freeze",
            "sentence": "Mia is interested in the story.",
            "zh": "描述米娅对故事感兴趣的感受。",
            "axes": {
              "actor": [
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ],
                [
                  "the bird",
                  "鸟"
                ]
              ],
              "relation": [
                [
                  "feeling",
                  "对象有这种感受"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ]
              ],
              "form": [
                [
                  "interested",
                  "interested"
                ],
                [
                  "interesting",
                  "interesting"
                ]
              ]
            },
            "expected": {
              "actor": "Mia",
              "relation": "feeling",
              "form": "interested"
            },
            "answer": "{\"actor\":\"Mia\",\"relation\":\"feeling\",\"form\":\"interested\"}",
            "why": "be interested in 描述体验者；interesting 表让人感兴趣，搭配和意义都要看。",
            "icon": "film",
            "frame": "Mia is {form} in the story.",
            "frameArt": "book"
          },
          {
            "type": "freeze",
            "sentence": "The story is interesting.",
            "zh": "故事本身让人感兴趣。",
            "axes": {
              "actor": [
                [
                  "the story",
                  "故事"
                ],
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ]
              ],
              "relation": [
                [
                  "source",
                  "对象引起这种感受"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ]
              ],
              "form": [
                [
                  "interesting",
                  "interesting"
                ],
                [
                  "interested",
                  "interested"
                ]
              ]
            },
            "expected": {
              "actor": "the story",
              "relation": "source",
              "form": "interesting"
            },
            "answer": "{\"actor\":\"the story\",\"relation\":\"source\",\"form\":\"interesting\"}",
            "why": "interesting 描述引起兴趣的来源，不是说故事在体验兴趣。",
            "icon": "film",
            "frame": "The story is {form}.",
            "frameArt": "book"
          },
          {
            "type": "freeze",
            "sentence": "The fallen leaves are brown.",
            "zh": "叶子已经落下；fall 是这里叶子自己发生的变化，不是有人把它们“落”。",
            "axes": {
              "actor": [
                [
                  "the leaves",
                  "叶子"
                ],
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ]
              ],
              "relation": [
                [
                  "earlier",
                  "先前完成／已发生"
                ],
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ]
              ],
              "form": [
                [
                  "fallen",
                  "fallen"
                ],
                [
                  "falling",
                  "falling"
                ]
              ]
            },
            "expected": {
              "actor": "the leaves",
              "relation": "earlier",
              "form": "fallen"
            },
            "answer": "{\"actor\":\"the leaves\",\"relation\":\"earlier\",\"form\":\"fallen\"}",
            "why": "fallen 是不及物 fall 的过去分词，表示已落下状态，不是所有过去分词都必然被动。",
            "icon": "film",
            "frame": "The {form} leaves are brown.",
            "frameArt": "leaf"
          },
          {
            "type": "freeze",
            "sentence": "Mia dropped the cup, breaking it.",
            "zh": "杯子掉落这件事导致杯子破裂；后面的 -ing 补充结果。",
            "axes": {
              "actor": [
                [
                  "the event",
                  "前面事件"
                ],
                [
                  "Mia",
                  "米娅"
                ],
                [
                  "Leo",
                  "里奥"
                ]
              ],
              "relation": [
                [
                  "active",
                  "主动／自行发生的关系"
                ],
                [
                  "passive",
                  "对象受到动作"
                ],
                [
                  "feeling",
                  "对象有这种感受"
                ]
              ],
              "form": [
                [
                  "breaking it",
                  "breaking it"
                ],
                [
                  "broken it",
                  "broken it"
                ]
              ]
            },
            "expected": {
              "actor": "the event",
              "relation": "active",
              "form": "breaking it"
            },
            "answer": "{\"actor\":\"the event\",\"relation\":\"active\",\"form\":\"breaking it\"}",
            "why": "breaking it 在本题对前面事件造成的结果作补充，不必硬指向最近某个名词。",
            "icon": "film",
            "frame": "Mia dropped the cup, {form}.",
            "frameArt": "bowl"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c18-m4",
        "title": "形式不等于时间",
        "pages": "202–207",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia was painting yesterday.",
            "zh": "painting 是否因为叫现在分词就一定指现在？",
            "target": "整句",
            "answer": "不是，整体是过去进行",
            "options": [
              "不是，整体是过去进行",
              "是，因此 yesterday 不成立"
            ],
            "why": "was painting 是过去进行，形式名称不直接决定说话时间。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "The fallen leaves are brown.",
            "zh": "fallen 在这个 fall 用法中一定表示被别人施加动作吗？",
            "target": "整句",
            "answer": "不是，可表示已经落下的状态",
            "options": [
              "不是，可表示已经落下的状态",
              "是，所有过去分词必然被动"
            ],
            "why": "fall 在这里为不及物变化，fallen 不需假定有人把叶子落下。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Mia is boring today.",
            "zh": "在本题“她今天让别人觉得无聊”的情境中，是否只能用 bored？",
            "target": "整句",
            "answer": "不是，boring 可以描述人的影响",
            "options": [
              "不是，boring 可以描述人的影响",
              "是，人只能配 -ed"
            ],
            "why": "人也能引起无聊，选择要看体验者还是来源，不看人/物口诀。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Mia has made a toy.",
            "zh": "made 是什么形式？",
            "target": "整句",
            "answer": "make 的过去分词",
            "options": [
              "make 的过去分词",
              "make 的 -ing 形式"
            ],
            "why": "has made 是完成结构，make 的过去分词为 made，不是规则 maked。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "The bird is singing.",
            "zh": "is singing 在此刻动作语境中整体是什么？",
            "target": "整句",
            "answer": "进行动词结构",
            "options": [
              "进行动词结构",
              "singing 一律只是普通名词"
            ],
            "why": "be 与 -ing 合作构成进行；不能忽略结构只按单词末尾判功能。",
            "icon": "film"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c18-m5",
        "title": "修饰与补足的对象",
        "pages": "207–209",
        "items": [
          {
            "type": "pick",
            "sentence": "The box painted by Mia is blue.",
            "zh": "painted by Mia 修饰谁？",
            "target": "整句",
            "answer": "the box",
            "options": [
              "the box",
              "Mia"
            ],
            "why": "米娅是涂色者，盒子是被修饰的对象；by Mia 不使 Mia 变为被涂对象。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Mia heard Leo singing.",
            "zh": "谁唱歌？",
            "target": "整句",
            "answer": "Leo",
            "options": [
              "Leo",
              "Mia"
            ],
            "why": "感官补足结构里 singing 说明宾语 Leo 的活动，Mia 是听的人。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Keep the window closed.",
            "zh": "closed 描述谁的状态？",
            "target": "整句",
            "answer": "the window",
            "options": [
              "the window",
              "省略的 you 在关着自己"
            ],
            "why": "keep + 对象 + 状态补足，closed 描述 window 的关闭状态。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "A sleeping cat is here.",
            "zh": "单个分词 sleeping 在名词前能自然使用吗？",
            "target": "整句",
            "answer": "能",
            "options": [
              "能",
              "不能，所有分词只能后置"
            ],
            "why": "单个 sleeping 可前置；较长 sleeping outside 常后置，不用绝对位置规则。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Mia is busy drawing.",
            "zh": "本题 drawing 表达什么？",
            "target": "整句",
            "answer": "正在忙于的活动",
            "options": [
              "正在忙于的活动",
              "保证活动已在去年结束"
            ],
            "why": "busy + -ing 为常见搭配，具体分析体系可不同，但本题意思是忙着画画。",
            "icon": "film"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c18-m6",
        "title": "先后、原因与条件",
        "pages": "210–215",
        "items": [
          {
            "type": "pick",
            "sentence": "Having finished the task, Mia rested.",
            "zh": "哪个动作先发生？",
            "target": "整句",
            "answer": "完成任务",
            "options": [
              "完成任务",
              "休息之后才开始任务"
            ],
            "why": "having finished 明确完成先于休息；不是将来任务。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Hearing the bell, Mia stood up.",
            "zh": "在铃声触发起身的语境里，是否必须改为 Having heard 才能成立？",
            "target": "整句",
            "answer": "不必，普通 -ing 可按语境表达紧接关系",
            "options": [
              "不必，普通 -ing 可按语境表达紧接关系",
              "必须，普通 -ing 绝不能与顺接有关"
            ],
            "why": "不能把 -ing 强制等同完全同时；明确强调先前完成时可另选完成形式。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Given more time, Mia could finish.",
            "zh": "本题给更多时间是在表达什么？",
            "target": "整句",
            "answer": "条件",
            "options": [
              "条件",
              "肯定早已给予的过去事实"
            ],
            "why": "语境中可理解为如果得到更多时间；过去分词本身不保证条件已实现。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Working carefully, you can avoid mistakes.",
            "zh": "在本题建议语境里，普通 -ing 能否带有条件意味？",
            "target": "整句",
            "answer": "可以，可理解为认真做就能减少错误",
            "options": [
              "可以，可理解为认真做就能减少错误",
              "不可以，只有过去分词能有条件意味"
            ],
            "why": "分词结构的逻辑关系取决于语境，不能绝对排除 -ing 的条件读法。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Mia dropped the cup, breaking it.",
            "zh": "breaking it 在本题补充什么？",
            "target": "整句",
            "answer": "前面事件带来的结果",
            "options": [
              "前面事件带来的结果",
              "Mia 的长期爱好"
            ],
            "why": "这里补充杯子掉落导致的结果，不自动当作名词性活动。",
            "icon": "film"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c18-m7",
        "title": "避免悬垂与综合镜头",
        "pages": "213–216",
        "items": [
          {
            "type": "pick",
            "sentence": "Walking home, Mia saw Leo.",
            "zh": "按普通结构，谁走回家？",
            "target": "整句",
            "answer": "Mia",
            "options": [
              "Mia",
              "Leo"
            ],
            "why": "普通前置分词通常与主句主语对应；不能随意把参与者改成宾语 Leo。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Walking home, the rain surprised Mia.",
            "zh": "本题实际是米娅走路，哪种改法最清楚？",
            "target": "整句",
            "answer": "While Mia was walking home, the rain surprised her.",
            "options": [
              "While Mia was walking home, the rain surprised her.",
              "Walking home, the rain walked Mia."
            ],
            "why": "补回明确的 Mia 避免把 walking 挂到 rain；不是雨在走路。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "The story is interesting, and Mia is interested.",
            "zh": "两边各表达什么？",
            "target": "整句",
            "answer": "故事引起兴趣，米娅体验兴趣",
            "options": [
              "故事引起兴趣，米娅体验兴趣",
              "两边都只说明已经完成过去动作"
            ],
            "why": "这是来源与体验者的意义对照，不是单看 -ed 就讲过去。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Mia went swimming.",
            "zh": "go swimming 应怎样学习更可靠？",
            "target": "整句",
            "answer": "作为常见活动搭配认识",
            "options": [
              "作为常见活动搭配认识",
              "把任何动词都改成 go + -ing"
            ],
            "why": "go + 某些活动 -ing 是词汇搭配，不适用于所有动词。",
            "icon": "film"
          },
          {
            "type": "pick",
            "sentence": "Having been helped by Mia, Leo finished.",
            "zh": "谁先前受到帮助？",
            "target": "整句",
            "answer": "Leo",
            "options": [
              "Leo",
              "Mia"
            ],
            "why": "完成被动分词 having been helped 指向主句 Leo；by Mia 说明提供帮助的人。",
            "icon": "film"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      }
    ]
  },
  {
    "id": "c19",
    "number": "19",
    "title": "句子压缩室",
    "subtitle": "缩短以后，还能把原来的意思找回来",
    "mechanic": "词块淡出 · 信息保留 · 还原核验",
    "theme": "lavender",
    "scene": "leaf",
    "book": "第 19 章 · 书内 217–224 页",
    "brief": "句子不是越短越好。选择本题允许的精简方案，观察词块淡出，再恢复参与者、否定、时间和逻辑关系，检查故事有没有被悄悄改掉。",
    "lessons": [
      {
        "title": "省略要能恢复，关系要保留",
        "body": "Mia sings and dances 可共享主语；Mia can swim and Leo can too 省去第二个 swim 仍能恢复。否定、参与者和关键对比不能因重复就随手删。问答中的短答也可由语境补足，但不必都叫作并列句。",
        "example": "Mia can swim, and Leo can too.",
        "zh": "米娅会游泳，里奥也会。",
        "visual": "leaf",
        "tags": [
          "可恢复内容",
          "保留助动词",
          "保留否定与参与者"
        ]
      },
      {
        "title": "关系线索的精简不是万能删 be",
        "body": "the box which was painted yesterday 可简为 the box painted yesterday；Mia, our guide 是自然身份旁注。但不能为了制造可删的 be，就把成本、知道、拥有等状态用法强改成进行式。",
        "example": "The box painted yesterday is blue.",
        "zh": "昨天涂过的盒子是蓝色的。",
        "visual": "box",
        "tags": [
          "自然的修饰形式",
          "同位旁注",
          "不强改进行时"
        ]
      },
      {
        "title": "时间和让步的短形式",
        "body": "While reading, Mia smiled 与 Although tired, Mia smiled 保留连接词和对应参与者。拿掉 before/after/although 可能丢失关键关系，不能一律删。分词改写不是把每个词逐个划掉就一定成立。",
        "example": "Although tired, Mia smiled.",
        "zh": "虽然累了，米娅仍微笑。",
        "visual": "clock",
        "tags": [
          "同一参与者",
          "保留关系词",
          "意思先行"
        ]
      },
      {
        "title": "不同参与者要留下线索",
        "body": "若 Leo 在读、Mia 微笑，不能随意缩成 Reading, Mia smiled。较正式的独立结构可保留自己的参与者：The task finished, Mia rested。with her bag packed 是另一种明确结构，不把所有不同主语都机械改成同一种格式。",
        "example": "The task finished, Mia rested.",
        "zh": "任务完成后，米娅休息了。",
        "visual": "portrait",
        "tags": [
          "避免悬垂",
          "独立结构保留自身参与者",
          "正式语体"
        ]
      },
      {
        "title": "全书最后一道检查：还原意思",
        "body": "压缩后问四件事：谁做、谁受到影响、什么时候、为什么或在什么条件下？可以有多个自然版本，本游戏只判断题目给出的明确方案。完成正文覆盖后，独立拓展和全书最终精修仍需继续。",
        "example": "While reading, Mia smiled.",
        "zh": "读书时，米娅微笑了。",
        "visual": "house",
        "tags": [
          "还原参与者",
          "还原时间与逻辑",
          "不追求盲目最短",
          "综合应用"
        ]
      }
    ],
    "missions": [
      {
        "id": "c19-m1",
        "title": "重复内容可以淡出吗？",
        "pages": "217–222",
        "items": [
          {
            "type": "compress",
            "sentence": "Mia sings and dances.",
            "zh": "两个动作由同一个米娅完成，缩短重复主语。",
            "axes": {
              "edit": [
                [
                  "repeat",
                  "去掉重复的第二个 Mia"
                ],
                [
                  "verb",
                  "去掉第一个动作"
                ]
              ],
              "restore": [
                [
                  "Mia sings and Mia dances.",
                  "Mia sings and Mia dances."
                ],
                [
                  "Mia sings and Leo dances.",
                  "Mia sings and Leo dances."
                ]
              ]
            },
            "expected": {
              "edit": "repeat",
              "restore": "Mia sings and Mia dances."
            },
            "answer": "{\"edit\":\"repeat\",\"restore\":\"Mia sings and Mia dances.\"}",
            "why": "并列动作可共享主语；不能删掉第一个动作，也不能把恢复后的另一人换成 Leo。",
            "icon": "leaf",
            "full": "Mia sings and Mia dances.",
            "parts": [
              "Mia sings",
              "and",
              "Mia",
              "dances."
            ],
            "groups": {
              "repeat": [
                2
              ],
              "verb": [
                0
              ]
            },
            "previews": {
              "repeat": "Mia sings and dances.",
              "verb": "and Mia dances."
            }
          },
          {
            "type": "compress",
            "sentence": "Mia can swim and Leo can too.",
            "zh": "第二个 can 保留，省去可恢复的 swim。",
            "axes": {
              "edit": [
                [
                  "repeat",
                  "省去第二个重复 swim"
                ],
                [
                  "can",
                  "删掉 Leo can"
                ]
              ],
              "restore": [
                [
                  "Mia can swim and Leo can swim too.",
                  "Mia can swim and Leo can swim too."
                ],
                [
                  "Mia can swim and Leo cannot swim.",
                  "Mia can swim and Leo cannot swim."
                ]
              ]
            },
            "expected": {
              "edit": "repeat",
              "restore": "Mia can swim and Leo can swim too."
            },
            "answer": "{\"edit\":\"repeat\",\"restore\":\"Mia can swim and Leo can swim too.\"}",
            "why": "can 后可省去由前文恢复的动词内容；保留 Leo can 才清楚谁也会。",
            "icon": "leaf",
            "full": "Mia can swim and Leo can swim too.",
            "parts": [
              "Mia can swim",
              "and Leo can",
              "swim",
              "too."
            ],
            "groups": {
              "repeat": [
                2
              ],
              "can": [
                1
              ]
            },
            "previews": {
              "repeat": "Mia can swim and Leo can too.",
              "can": "Mia can swim swim too."
            }
          },
          {
            "type": "compress",
            "sentence": "Mia bought apples and pears.",
            "zh": "保留两种水果，省去重复的主语和动词。",
            "axes": {
              "edit": [
                [
                  "repeat",
                  "省去第二个 Mia bought"
                ],
                [
                  "object",
                  "删去 pears"
                ]
              ],
              "restore": [
                [
                  "Mia bought apples and Mia bought pears.",
                  "Mia bought apples and Mia bought pears."
                ],
                [
                  "Mia bought apples but did not buy pears.",
                  "Mia bought apples but did not buy pears."
                ]
              ]
            },
            "expected": {
              "edit": "repeat",
              "restore": "Mia bought apples and Mia bought pears."
            },
            "answer": "{\"edit\":\"repeat\",\"restore\":\"Mia bought apples and Mia bought pears.\"}",
            "why": "并列宾语 apples and pears 可共享 bought；不能为了短而丢掉购买梨的信息。",
            "icon": "leaf",
            "full": "Mia bought apples and Mia bought pears.",
            "parts": [
              "Mia bought apples",
              "and",
              "Mia bought",
              "pears."
            ],
            "groups": {
              "repeat": [
                2
              ],
              "object": [
                3
              ]
            },
            "previews": {
              "repeat": "Mia bought apples and pears.",
              "object": "Mia bought apples and Mia bought."
            }
          },
          {
            "type": "compress",
            "sentence": "Mia runs faster than Leo.",
            "zh": "保留比较对象与方向，只省去可恢复的重复动词。",
            "axes": {
              "edit": [
                [
                  "repeat",
                  "省去比较中重复的 runs"
                ],
                [
                  "compare",
                  "删去 than Leo"
                ]
              ],
              "restore": [
                [
                  "Mia runs faster than Leo runs.",
                  "Mia runs faster than Leo runs."
                ],
                [
                  "Leo runs faster than Mia.",
                  "Leo runs faster than Mia."
                ]
              ]
            },
            "expected": {
              "edit": "repeat",
              "restore": "Mia runs faster than Leo runs."
            },
            "answer": "{\"edit\":\"repeat\",\"restore\":\"Mia runs faster than Leo runs.\"}",
            "why": "比较部分的 runs 可按语境恢复，不能反转谁更快。",
            "icon": "leaf",
            "full": "Mia runs faster than Leo runs.",
            "parts": [
              "Mia runs faster",
              "than Leo",
              "runs."
            ],
            "groups": {
              "repeat": [
                2
              ],
              "compare": [
                1
              ]
            },
            "previews": {
              "repeat": "Mia runs faster than Leo.",
              "compare": "Mia runs faster runs."
            }
          },
          {
            "type": "compress",
            "sentence": "Mia is ready and Leo too.",
            "zh": "在本题给定语境中，用 Leo too 表达里奥也准备好了。",
            "axes": {
              "edit": [
                [
                  "repeat",
                  "省去第二个 is ready"
                ],
                [
                  "who",
                  "删去 and Leo"
                ]
              ],
              "restore": [
                [
                  "Mia is ready and Leo is ready too.",
                  "Mia is ready and Leo is ready too."
                ],
                [
                  "Mia is ready but Leo is not.",
                  "Mia is ready but Leo is not."
                ]
              ]
            },
            "expected": {
              "edit": "repeat",
              "restore": "Mia is ready and Leo is ready too."
            },
            "answer": "{\"edit\":\"repeat\",\"restore\":\"Mia is ready and Leo is ready too.\"}",
            "why": "可恢复的重复内容可以省，但否定和参与者不能丢；本题不是说 Leo 没准备好。",
            "icon": "leaf",
            "full": "Mia is ready and Leo is ready too.",
            "parts": [
              "Mia is ready",
              "and Leo",
              "is ready",
              "too."
            ],
            "groups": {
              "repeat": [
                2
              ],
              "who": [
                1
              ]
            },
            "previews": {
              "repeat": "Mia is ready and Leo too.",
              "who": "Mia is ready is ready."
            }
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c19-m2",
        "title": "精简线索，保留逻辑",
        "pages": "217–222",
        "items": [
          {
            "type": "compress",
            "sentence": "The box painted yesterday is blue.",
            "zh": "保留昨天被涂色的线索，使用自然的分词修饰形式。",
            "axes": {
              "edit": [
                [
                  "relative",
                  "省去 which was"
                ],
                [
                  "paint",
                  "删去 painted yesterday"
                ]
              ],
              "restore": [
                [
                  "The box which was painted yesterday is blue.",
                  "The box which was painted yesterday is blue."
                ],
                [
                  "The box which will be painted tomorrow is blue.",
                  "The box which will be painted tomorrow is blue."
                ]
              ]
            },
            "expected": {
              "edit": "relative",
              "restore": "The box which was painted yesterday is blue."
            },
            "answer": "{\"edit\":\"relative\",\"restore\":\"The box which was painted yesterday is blue.\"}",
            "why": "painted yesterday 保留受动和时间信息；不能恢复成明天才涂。",
            "icon": "leaf",
            "full": "The box which was painted yesterday is blue.",
            "parts": [
              "The box",
              "which was",
              "painted yesterday",
              "is blue."
            ],
            "groups": {
              "relative": [
                1
              ],
              "paint": [
                2
              ]
            },
            "previews": {
              "relative": "The box painted yesterday is blue.",
              "paint": "The box which was is blue."
            }
          },
          {
            "type": "compress",
            "sentence": "While reading, Mia smiled.",
            "zh": "本题明确要求保留 while 的同时关系，并在主句明确 Mia。",
            "axes": {
              "edit": [
                [
                  "subject",
                  "省去 she was，保留 while"
                ],
                [
                  "time",
                  "删掉 while 和 she was"
                ]
              ],
              "restore": [
                [
                  "While she was reading, Mia smiled.",
                  "While she was reading, Mia smiled."
                ],
                [
                  "After Mia had finished reading, she smiled.",
                  "After Mia had finished reading, she smiled."
                ]
              ]
            },
            "expected": {
              "edit": "subject",
              "restore": "While she was reading, Mia smiled."
            },
            "answer": "{\"edit\":\"subject\",\"restore\":\"While she was reading, Mia smiled.\"}",
            "why": "While reading, Mia smiled 可清楚对应同一参与者；本题要求保留 while，不把相伴改成读完之后。",
            "icon": "leaf",
            "full": "While she was reading, Mia smiled.",
            "parts": [
              "While",
              "she was",
              "reading,",
              "Mia smiled."
            ],
            "groups": {
              "subject": [
                1
              ],
              "time": [
                0,
                1
              ]
            },
            "previews": {
              "subject": "While reading, Mia smiled.",
              "time": "Reading, Mia smiled."
            }
          },
          {
            "type": "compress",
            "sentence": "Although tired, Mia smiled.",
            "zh": "保留“虽然累仍微笑”的让步关系。",
            "axes": {
              "edit": [
                [
                  "subject",
                  "省去 she was，保留 although"
                ],
                [
                  "logic",
                  "把 although 也删掉"
                ]
              ],
              "restore": [
                [
                  "Although she was tired, Mia smiled.",
                  "Although she was tired, Mia smiled."
                ],
                [
                  "Because Mia was tired, she smiled.",
                  "Because Mia was tired, she smiled."
                ]
              ]
            },
            "expected": {
              "edit": "subject",
              "restore": "Although she was tired, Mia smiled."
            },
            "answer": "{\"edit\":\"subject\",\"restore\":\"Although she was tired, Mia smiled.\"}",
            "why": "Although tired 保留让步连接；去掉连接词可能使逻辑关系不再明确，恢复成 because 也改变意思。",
            "icon": "leaf",
            "full": "Although she was tired, Mia smiled.",
            "parts": [
              "Although",
              "she was",
              "tired,",
              "Mia smiled."
            ],
            "groups": {
              "subject": [
                1
              ],
              "logic": [
                0,
                1
              ]
            },
            "previews": {
              "subject": "Although tired, Mia smiled.",
              "logic": "Tired, Mia smiled."
            }
          },
          {
            "type": "compress",
            "sentence": "Mia, our guide, is here.",
            "zh": "把明确的身份旁注写成自然同位表达，保留导游身份。",
            "axes": {
              "edit": [
                [
                  "relative",
                  "省去 who is"
                ],
                [
                  "name",
                  "删去 our guide"
                ]
              ],
              "restore": [
                [
                  "Mia, who is our guide, is here.",
                  "Mia, who is our guide, is here."
                ],
                [
                  "Mia, who is our student, is here.",
                  "Mia, who is our student, is here."
                ]
              ]
            },
            "expected": {
              "edit": "relative",
              "restore": "Mia, who is our guide, is here."
            },
            "answer": "{\"edit\":\"relative\",\"restore\":\"Mia, who is our guide, is here.\"}",
            "why": "our guide 作为旁注身份保留，不能恢复成 student；不把所有同位语都硬说成删关系从句生成。",
            "icon": "leaf",
            "full": "Mia, who is our guide, is here.",
            "parts": [
              "Mia,",
              "who is",
              "our guide,",
              "is here."
            ],
            "groups": {
              "relative": [
                1
              ],
              "name": [
                2
              ]
            },
            "previews": {
              "relative": "Mia, our guide, is here.",
              "name": "Mia, who is is here."
            }
          },
          {
            "type": "compress",
            "sentence": "When asked, Mia answers politely.",
            "zh": "米娅被问时礼貌回答；保留 when 和 asked 的受动关系。",
            "axes": {
              "edit": [
                [
                  "subject",
                  "省去 she is，保留 when"
                ],
                [
                  "asked",
                  "删去 asked"
                ]
              ],
              "restore": [
                [
                  "When she is asked, Mia answers politely.",
                  "When she is asked, Mia answers politely."
                ],
                [
                  "When Mia asks someone, she answers politely.",
                  "When Mia asks someone, she answers politely."
                ]
              ]
            },
            "expected": {
              "edit": "subject",
              "restore": "When she is asked, Mia answers politely."
            },
            "answer": "{\"edit\":\"subject\",\"restore\":\"When she is asked, Mia answers politely.\"}",
            "why": "When asked 的被问者对应 Mia；不能恢复成 Mia 在问别人。",
            "icon": "leaf",
            "full": "When she is asked, Mia answers politely.",
            "parts": [
              "When",
              "she is",
              "asked,",
              "Mia answers politely."
            ],
            "groups": {
              "subject": [
                1
              ],
              "asked": [
                2
              ]
            },
            "previews": {
              "subject": "When asked, Mia answers politely.",
              "asked": "When Mia is she answers politely."
            }
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c19-m3",
        "title": "短答与比较的还原",
        "pages": "217–218",
        "items": [
          {
            "type": "pick",
            "sentence": "Can Mia swim? Yes, she can.",
            "zh": "can 后没有重复 swim，能否成立？",
            "target": "整句",
            "answer": "可以，由问题恢复内容",
            "options": [
              "可以，由问题恢复内容",
              "不可以，任何 can 后都必须写出 swim"
            ],
            "why": "短答可省去可恢复内容，但保留 she can 等必要结构。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "When does Mia leave? At nine.",
            "zh": "本题短答 At nine 在对话中能否自然？",
            "target": "整句",
            "answer": "可以，语境给出离开什么",
            "options": [
              "可以，语境给出离开什么",
              "不能，所有交流必须重复完整主语谓语"
            ],
            "why": "对话里片段答语很常见，能从问题恢复；不与正式独立陈述句要求混同。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "Mia likes Leo more than I do.",
            "zh": "do 使哪个关系更清楚？",
            "target": "整句",
            "answer": "我喜欢 Leo 的对应比较",
            "options": [
              "我喜欢 Leo 的对应比较",
              "Mia 喜欢我比喜欢 Leo 多"
            ],
            "why": "I do 表示我对 Leo 的喜欢，与 Mia 的程度比较；避免另一种对象歧义。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "Mia is ready, but Leo is not.",
            "zh": "能否为了“省重复”删掉 not？",
            "target": "整句",
            "answer": "不能，否定改变故事",
            "options": [
              "不能，否定改变故事",
              "可以，not 太短不重要"
            ],
            "why": "not 是必要语义信息，删去就可能把没准备好变成准备好。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "Mia likes apples and pears.",
            "zh": "并列词组一定只能分析为两个完整句子省略吗？",
            "target": "整句",
            "answer": "不必，可以直接认识同类宾语并列",
            "options": [
              "不必，可以直接认识同类宾语并列",
              "必须，所有词语并列都只来自删句子"
            ],
            "why": "省略是有用对照，但不把任何并列词组都强行说成唯一来源的删除结果。",
            "icon": "leaf"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c19-m4",
        "title": "不同主语与独立结构",
        "pages": "219–224",
        "items": [
          {
            "type": "pick",
            "sentence": "While Leo was reading, Mia smiled.",
            "zh": "实际读书的是 Leo，能否缩成 Reading, Mia smiled 来保留同一意思？",
            "target": "整句",
            "answer": "不能，那会把读者挂到 Mia",
            "options": [
              "不能，那会把读者挂到 Mia",
              "能，名字重复与否无关紧要"
            ],
            "why": "普通前置分词通常与主句主语对应；不同参与者必须明确保留。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "The task finished, Mia rested.",
            "zh": "较正式的独立结构里，finished 对应谁？",
            "target": "整句",
            "answer": "the task",
            "options": [
              "the task",
              "Mia 必须也是 task"
            ],
            "why": "task 为独立结构自身的参与者，不要求它与主句 Mia 相同。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "Mia sat with her bag packed.",
            "zh": "with 结构保留了什么关系？",
            "target": "整句",
            "answer": "bag 受到打包并处于打包状态",
            "options": [
              "bag 受到打包并处于打包状态",
              "Mia 是被装进背包的人"
            ],
            "why": "her bag packed 具有自己的对象和状态关系，不把 packed 硬挂到 Mia。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "The books which Mia owns are blue.",
            "zh": "能否为了制造 be，机械改成 which Mia is owning 再删词？",
            "target": "整句",
            "answer": "不能这样套公式",
            "options": [
              "不能这样套公式",
              "可以，所有动词都能无差别变进行式"
            ],
            "why": "own 的常见状态用法不这样机械改进行；精简必须符合真实用法和结构。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "Although tired, Mia smiled.",
            "zh": "若还原为 Because Mia was tired, she smiled，逻辑是否保持？",
            "target": "整句",
            "answer": "没有，虽然变成因为",
            "options": [
              "没有，虽然变成因为",
              "保持，只要参与者相同就一样"
            ],
            "why": "让步和原因不同；恢复时要核验逻辑，不能只核对主语。",
            "icon": "leaf"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      },
      {
        "id": "c19-m5",
        "title": "全书句子压缩毕业站",
        "pages": "217–224",
        "items": [
          {
            "type": "pick",
            "sentence": "The box painted by Mia is blue.",
            "zh": "哪种还原保留涂色关系？",
            "target": "整句",
            "answer": "The box which was painted by Mia is blue.",
            "options": [
              "The box which was painted by Mia is blue.",
              "The box which painted Mia is blue."
            ],
            "why": "前者保留盒子受到米娅涂色；后者颠倒了动作关系。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "After finishing the picture, Mia rested.",
            "zh": "保留 After 的主要好处是什么？",
            "target": "整句",
            "answer": "明确画完先于休息",
            "options": [
              "明确画完先于休息",
              "保证画画与休息必定同时"
            ],
            "why": "After 指出先后，删掉它可能使关系变得不够明确。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "Mia, our guide, is here.",
            "zh": "our guide 是什么样的信息？",
            "target": "整句",
            "answer": "米娅的补充身份说明",
            "options": [
              "米娅的补充身份说明",
              "整句缺失的主要动词"
            ],
            "why": "同位身份旁注自然成立；整句主要谓语仍是 is here 中的 is。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "While reading, Mia smiled.",
            "zh": "还原时哪一个参与者关系相符？",
            "target": "整句",
            "answer": "While Mia was reading, she smiled.",
            "options": [
              "While Mia was reading, she smiled.",
              "While Leo was reading, Mia smiled."
            ],
            "why": "普通结构将 reading 对应到 Mia；若是 Leo 读，需要显式表达不同参与者。",
            "icon": "leaf"
          },
          {
            "type": "pick",
            "sentence": "Shorter does not always mean clearer.",
            "zh": "全书省略的最后原则是什么？",
            "target": "整句",
            "answer": "结构成立且意思可清楚恢复",
            "options": [
              "结构成立且意思可清楚恢复",
              "能删越多越好，不看对象与时间"
            ],
            "why": "简洁要服务清楚，不能丢掉必要信息；多个自然版本也需要具体语境。",
            "icon": "leaf"
          }
        ],
        "note": "先理解情境，再动手；随时可以重试"
      }
    ]
  }
];
