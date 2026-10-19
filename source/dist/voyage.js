// Third voyage: original teaching stories and examples, printed pages 69–110.
export const voyageChapters=[
  {
    "id": "c7",
    "number": "07",
    "title": "时间旅行摄影机",
    "subtitle": "选一个参照点，再决定怎样看动作",
    "mechanic": "时间移镜 · 四种镜头 · 动词接片",
    "theme": "sky",
    "scene": "clock",
    "book": "第 7 章 · 书内 69–92 页",
    "brief": "带着浇花纪录片穿越十二种常见时态组合：把摄影机放到过去、现在或将来，再选择看事件、过程、之前的经历或累积的时长。原来的入门样板继续保留。",
    "lessons": [
      {
        "title": "先决定：站在哪里看？",
        "body": "过去、现在、将来是三个参照方向。时态表达时间，也表达看动作的角度。入门沿用教材的十二种常见组合称呼；将来还可用 going to、现在进行等表达，不能认为未来只用 will。",
        "example": "I watered yesterday. I will water tomorrow.",
        "zh": "我昨天浇了花。我明天会浇花。",
        "visual": "clock",
        "tags": [
          "参照点",
          "时间不等于形式",
          "will 不是唯一将来表达"
        ]
      },
      {
        "title": "四种镜头，不是四种时间",
        "body": "一般镜头讲事实、习惯或事件；进行镜头看参照时刻的过程；完成镜头从参照点回望之前；完成进行镜头突出持续过程。一般过去也能讲一次事件，完成时也能描述持续状态。",
        "example": "I water plants. I am watering plants.",
        "zh": "我平时浇花。我正在浇花。",
        "visual": "flower",
        "tags": [
          "一般",
          "进行",
          "完成",
          "完成进行"
        ]
      },
      {
        "title": "动词片场的助手",
        "body": "be + -ing 组成进行结构；have + 过去分词组成完成结构；两种组合成 have been doing。do/does/did 帮助普通实义动词提问和否定，后面用原形。can、must 等情态动词后也接原形；must not 是不许，need not 是不必。",
        "example": "Did Mia go? She did not go. She can go.",
        "zh": "米娅去了吗？她没去。她可以去。",
        "visual": "train",
        "tags": [
          "go / went / gone / going",
          "第三人称单数 goes",
          "did + go",
          "can + go"
        ]
      },
      {
        "title": "完成，不等于一切结束",
        "body": "I have known Mia for years. 可以表示到现在仍认识她。一般过去把事件放在结束的过去时间框架里，但不能仅凭过去式就断言现在相反。现在完成与明确结束的过去时间通常不直接搭配。",
        "example": "I have known Mia for years.",
        "zh": "我认识米娅很多年了。",
        "visual": "book",
        "tags": [
          "状态可以持续",
          "参照点前的经历或结果",
          "yesterday 的时间框架"
        ]
      },
      {
        "title": "过程持续多久？",
        "body": "have been doing 强调到参照点前的持续过程，也可以刚刚停止，留下现在可见的结果。know 等常见状态用法通常用完成一般式，不机械套 -ing。for 接时长，since 接起点。",
        "example": "It has been raining. The ground is wet.",
        "zh": "刚才一直下雨。地面是湿的。",
        "visual": "flower",
        "tags": [
          "for two hours",
          "since nine",
          "不保证仍在进行",
          "状态动词看用法"
        ]
      },
      {
        "title": "镜头会随语境改变",
        "body": "进行时能表达近期安排：I am meeting Mia tomorrow. 时间状语从句谈未来常用现在式：When she arrives, I will wave. 不要见到 tomorrow 就自动选 will，也不要把两个过去事件一律强制改成过去完成。",
        "example": "When Mia arrives, I will wave.",
        "zh": "米娅到达时，我会挥手。",
        "visual": "clock",
        "tags": [
          "看完整情境",
          "进阶题可以慢慢来",
          "先基础，再十二组合"
        ]
      }
    ],
    "missions": [
      {
        "id": "c7-m1",
        "title": "摄影机初次穿越",
        "note": "三个旋钮一起配合；先看中文故事",
        "pages": "69–91",
        "items": [
          {
            "type": "camera",
            "sentence": "I water the plants every morning.",
            "zh": "每天早晨浇花是我的习惯；不说明此刻在做。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "water",
                  "water"
                ],
                [
                  "am watering",
                  "am watering"
                ],
                [
                  "have watered",
                  "have watered"
                ]
              ]
            },
            "expected": {
              "reference": "present",
              "aspect": "simple",
              "film": "water"
            },
            "answer": "{\"reference\":\"present\",\"aspect\":\"simple\",\"film\":\"water\"}",
            "why": "本题的参照点与镜头共同决定形式：water。每天早晨浇花是我的习惯；不说明此刻在做。",
            "icon": "clock",
            "frame": "I {film} the plants every morning."
          },
          {
            "type": "camera",
            "sentence": "I watered the plants yesterday.",
            "zh": "讲述昨天浇花这件事。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "watered",
                  "watered"
                ],
                [
                  "water",
                  "water"
                ],
                [
                  "have watered",
                  "have watered"
                ]
              ]
            },
            "expected": {
              "reference": "past",
              "aspect": "simple",
              "film": "watered"
            },
            "answer": "{\"reference\":\"past\",\"aspect\":\"simple\",\"film\":\"watered\"}",
            "why": "本题的参照点与镜头共同决定形式：watered。讲述昨天浇花这件事。",
            "icon": "clock",
            "frame": "I {film} the plants yesterday."
          },
          {
            "type": "camera",
            "sentence": "I will water the plants tomorrow.",
            "zh": "我承诺明天浇花；本题练习 will 表达将来。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "will water",
                  "will water"
                ],
                [
                  "watered",
                  "watered"
                ],
                [
                  "have watered",
                  "have watered"
                ]
              ]
            },
            "expected": {
              "reference": "future",
              "aspect": "simple",
              "film": "will water"
            },
            "answer": "{\"reference\":\"future\",\"aspect\":\"simple\",\"film\":\"will water\"}",
            "why": "本题的参照点与镜头共同决定形式：will water。我承诺明天浇花；本题练习 will 表达将来。",
            "icon": "clock",
            "frame": "I {film} the plants tomorrow."
          },
          {
            "type": "camera",
            "sentence": "I am watering the plants now.",
            "zh": "直播画面中，我此刻正在浇花。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "am watering",
                  "am watering"
                ],
                [
                  "watered",
                  "watered"
                ],
                [
                  "have watered",
                  "have watered"
                ]
              ]
            },
            "expected": {
              "reference": "present",
              "aspect": "continuous",
              "film": "am watering"
            },
            "answer": "{\"reference\":\"present\",\"aspect\":\"continuous\",\"film\":\"am watering\"}",
            "why": "本题的参照点与镜头共同决定形式：am watering。直播画面中，我此刻正在浇花。",
            "icon": "clock",
            "frame": "I {film} the plants now."
          },
          {
            "type": "camera",
            "sentence": "I was watering the plants when Mia called.",
            "zh": "米娅打电话时，我正在浇花；以那通电话为过去参照点。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "was watering",
                  "was watering"
                ],
                [
                  "am watering",
                  "am watering"
                ],
                [
                  "have watered",
                  "have watered"
                ]
              ]
            },
            "expected": {
              "reference": "past",
              "aspect": "continuous",
              "film": "was watering"
            },
            "answer": "{\"reference\":\"past\",\"aspect\":\"continuous\",\"film\":\"was watering\"}",
            "why": "本题的参照点与镜头共同决定形式：was watering。米娅打电话时，我正在浇花；以那通电话为过去参照点。",
            "icon": "clock",
            "frame": "I {film} the plants when Mia called."
          }
        ]
      },
      {
        "id": "c7-m2",
        "title": "回望与持续镜头",
        "note": "三个旋钮一起配合；先看中文故事",
        "pages": "69–91",
        "items": [
          {
            "type": "camera",
            "sentence": "I will be watering the plants at ten tomorrow.",
            "zh": "想象明天十点的画面：那时我正在浇花。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "will be watering",
                  "will be watering"
                ],
                [
                  "was watering",
                  "was watering"
                ],
                [
                  "have watered",
                  "have watered"
                ]
              ]
            },
            "expected": {
              "reference": "future",
              "aspect": "continuous",
              "film": "will be watering"
            },
            "answer": "{\"reference\":\"future\",\"aspect\":\"continuous\",\"film\":\"will be watering\"}",
            "why": "本题的参照点与镜头共同决定形式：will be watering。想象明天十点的画面：那时我正在浇花。",
            "icon": "clock",
            "frame": "I {film} the plants at ten tomorrow."
          },
          {
            "type": "camera",
            "sentence": "I have watered the plants.",
            "zh": "向现在汇报：浇花已办妥，现在不用再浇；不指定结束的过去日期。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "have watered",
                  "have watered"
                ],
                [
                  "had watered",
                  "had watered"
                ],
                [
                  "will have watered",
                  "will have watered"
                ]
              ]
            },
            "expected": {
              "reference": "present",
              "aspect": "perfect",
              "film": "have watered"
            },
            "answer": "{\"reference\":\"present\",\"aspect\":\"perfect\",\"film\":\"have watered\"}",
            "why": "本题的参照点与镜头共同决定形式：have watered。向现在汇报：浇花已办妥，现在不用再浇；不指定结束的过去日期。",
            "icon": "clock",
            "frame": "I {film} the plants."
          },
          {
            "type": "camera",
            "sentence": "I had watered the plants before Mia arrived.",
            "zh": "回到米娅到达的过去时刻：在那之前我已经浇完。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "had watered",
                  "had watered"
                ],
                [
                  "have watered",
                  "have watered"
                ],
                [
                  "will have watered",
                  "will have watered"
                ]
              ]
            },
            "expected": {
              "reference": "past",
              "aspect": "perfect",
              "film": "had watered"
            },
            "answer": "{\"reference\":\"past\",\"aspect\":\"perfect\",\"film\":\"had watered\"}",
            "why": "本题的参照点与镜头共同决定形式：had watered。回到米娅到达的过去时刻：在那之前我已经浇完。",
            "icon": "clock",
            "frame": "I {film} the plants before Mia arrived."
          },
          {
            "type": "camera",
            "sentence": "I will have watered the plants by noon tomorrow.",
            "zh": "从明天中午回望：我承诺到那之前已完成浇花。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "will have watered",
                  "will have watered"
                ],
                [
                  "had watered",
                  "had watered"
                ],
                [
                  "have watered",
                  "have watered"
                ]
              ]
            },
            "expected": {
              "reference": "future",
              "aspect": "perfect",
              "film": "will have watered"
            },
            "answer": "{\"reference\":\"future\",\"aspect\":\"perfect\",\"film\":\"will have watered\"}",
            "why": "本题的参照点与镜头共同决定形式：will have watered。从明天中午回望：我承诺到那之前已完成浇花。",
            "icon": "clock",
            "frame": "I {film} the plants by noon tomorrow."
          },
          {
            "type": "camera",
            "sentence": "I have been watering the plants for twenty minutes.",
            "zh": "到现在已浇了二十分钟，仍在继续；重点是持续过程。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "have been watering",
                  "have been watering"
                ],
                [
                  "had been watering",
                  "had been watering"
                ],
                [
                  "will have been watering",
                  "will have been watering"
                ]
              ]
            },
            "expected": {
              "reference": "present",
              "aspect": "duration",
              "film": "have been watering"
            },
            "answer": "{\"reference\":\"present\",\"aspect\":\"duration\",\"film\":\"have been watering\"}",
            "why": "本题的参照点与镜头共同决定形式：have been watering。到现在已浇了二十分钟，仍在继续；重点是持续过程。",
            "icon": "clock",
            "frame": "I {film} the plants for twenty minutes."
          }
        ]
      },
      {
        "id": "c7-m3",
        "title": "十二镜头与助手",
        "note": "三个旋钮一起配合；先看中文故事",
        "pages": "69–91",
        "items": [
          {
            "type": "camera",
            "sentence": "I had been watering the plants for twenty minutes when Mia arrived.",
            "zh": "到米娅到达的过去时刻，浇花已持续二十分钟。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "had been watering",
                  "had been watering"
                ],
                [
                  "have been watering",
                  "have been watering"
                ],
                [
                  "will have been watering",
                  "will have been watering"
                ]
              ]
            },
            "expected": {
              "reference": "past",
              "aspect": "duration",
              "film": "had been watering"
            },
            "answer": "{\"reference\":\"past\",\"aspect\":\"duration\",\"film\":\"had been watering\"}",
            "why": "本题的参照点与镜头共同决定形式：had been watering。到米娅到达的过去时刻，浇花已持续二十分钟。",
            "icon": "clock",
            "frame": "I {film} the plants for twenty minutes when Mia arrived."
          },
          {
            "type": "camera",
            "sentence": "I will have been watering the plants for twenty minutes by ten tomorrow.",
            "zh": "从明天十点回望：到那时，浇花将已持续二十分钟。 调参照点、镜头，再装入动词胶片。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照点"
                ],
                [
                  "present",
                  "现在参照点"
                ],
                [
                  "future",
                  "将来参照点"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "一般镜头 · 事实/事件"
                ],
                [
                  "continuous",
                  "进行镜头 · 当时在做"
                ],
                [
                  "perfect",
                  "完成镜头 · 回望之前"
                ],
                [
                  "duration",
                  "完成进行 · 累积过程"
                ]
              ],
              "film": [
                [
                  "will have been watering",
                  "will have been watering"
                ],
                [
                  "had been watering",
                  "had been watering"
                ],
                [
                  "have been watering",
                  "have been watering"
                ]
              ]
            },
            "expected": {
              "reference": "future",
              "aspect": "duration",
              "film": "will have been watering"
            },
            "answer": "{\"reference\":\"future\",\"aspect\":\"duration\",\"film\":\"will have been watering\"}",
            "why": "本题的参照点与镜头共同决定形式：will have been watering。从明天十点回望：到那时，浇花将已持续二十分钟。",
            "icon": "clock",
            "frame": "I {film} the plants for twenty minutes by ten tomorrow."
          },
          {
            "type": "pick",
            "sentence": "Mia has ___ home.",
            "zh": "米娅已经回家了。have 后要接什么形式？",
            "target": "___",
            "answer": "gone",
            "options": [
              "gone",
              "went",
              "going"
            ],
            "why": "完成结构用过去分词 gone；went 是过去式，going 是 -ing 形式。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "Did Mia ___ home?",
            "zh": "用 did 提问，后面的动词恢复原形。",
            "target": "___",
            "answer": "go",
            "options": [
              "go",
              "went",
              "goes"
            ],
            "why": "did 已承担过去时信息，后面用原形 go，而不再用 went。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "Mia can ___ here.",
            "zh": "米娅可以在这里画画。",
            "target": "___",
            "answer": "paint",
            "options": [
              "paint",
              "paints",
              "painting"
            ],
            "why": "情态动词 can 后接动词原形 paint，不随 Mia 再加 s。",
            "icon": "clock"
          }
        ]
      },
      {
        "id": "c7-m4",
        "title": "过去事件与现在回望",
        "note": "先理解故事，再挑合适的表达",
        "pages": "83–87",
        "items": [
          {
            "type": "pick",
            "sentence": "I ___ my bag yesterday.",
            "zh": "说昨天弄丢包这件事。",
            "target": "___",
            "answer": "lost",
            "options": [
              "lost",
              "have lost"
            ],
            "why": "yesterday 是结束的过去时间框架，这里用一般过去 lost。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "I ___ my bag, so I cannot open the door with my key.",
            "zh": "包和钥匙现在找不到；向现在汇报结果，不指定过去日期。",
            "target": "___",
            "answer": "have lost",
            "options": [
              "have lost",
              "had lost"
            ],
            "why": "现在完成把先前丢包与现在的困境连接；had lost 需要过去参照点。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "Mia ___ here since 2020.",
            "zh": "米娅从 2020 年起一直住这里，现在还住这里。",
            "target": "___",
            "answer": "has lived",
            "options": [
              "has lived",
              "lived"
            ],
            "why": "since 给出起点，情境明确持续到现在，用 has lived；不是完成就一定结束。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "Mia ___ here in 2020.",
            "zh": "只讲 2020 年的居住情况，不交代现在住哪里。",
            "target": "___",
            "answer": "lived",
            "options": [
              "lived",
              "has lived"
            ],
            "why": "in 2020 限定结束的过去时间，用 lived；单凭过去式不能断言现在已搬走。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "The show ___ before we arrived.",
            "zh": "我们到达时，演出早已开始；从到达时刻往前看。",
            "target": "___",
            "answer": "had begun",
            "options": [
              "had begun",
              "has begun"
            ],
            "why": "过去参照点 arrived 之前的开始用 had begun。完成结构要用过去分词 begun。",
            "icon": "clock"
          }
        ]
      },
      {
        "id": "c7-m5",
        "title": "进行与状态的边界",
        "note": "先理解故事，再挑合适的表达",
        "pages": "74–84",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia ___ the answer.",
            "zh": "米娅现在知道答案。know 在这里表达状态。",
            "target": "___",
            "answer": "knows",
            "options": [
              "knows",
              "is knowing"
            ],
            "why": "know 表示知道时通常不用进行式；第三人称单数用 knows。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "Look! Mia ___ a kite.",
            "zh": "看，米娅正在放风筝。",
            "target": "___",
            "answer": "is flying",
            "options": [
              "is flying",
              "flies"
            ],
            "why": "本题强调此刻看得见的过程，用 is flying。flies 常用于事实或习惯。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "At eight last night, Mia ___ a story.",
            "zh": "昨晚八点那一刻，米娅正在读故事。",
            "target": "___",
            "answer": "was reading",
            "options": [
              "was reading",
              "is reading"
            ],
            "why": "过去参照点八点时动作正在进行，用 was reading。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "I ___ Mia tomorrow.",
            "zh": "已约好明天见米娅；选择表达安排的进行形式。",
            "target": "___",
            "answer": "am meeting",
            "options": [
              "am meeting",
              "met"
            ],
            "why": "现在进行式可以表达已有安排的将来事件；不是所有 -ing 都指说话瞬间。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "Mia ___ a story yesterday.",
            "zh": "用一般过去讲昨天读故事这件事。",
            "target": "___",
            "answer": "read",
            "options": [
              "read",
              "has read"
            ],
            "why": "read 的过去式拼写仍是 read，读音不同。这里使用过去时间框架。",
            "icon": "clock"
          }
        ]
      },
      {
        "id": "c7-m6",
        "title": "持续的过程与结果",
        "note": "先理解故事，再挑合适的表达",
        "pages": "88–91",
        "items": [
          {
            "type": "pick",
            "sentence": "I ___ Mia for ten years.",
            "zh": "到现在认识米娅十年，know 表示状态。",
            "target": "___",
            "answer": "have known",
            "options": [
              "have known",
              "have been knowing"
            ],
            "why": "这种 know 通常不用进行结构，用 have known 表达持续至今的状态。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "Mia has been painting.",
            "zh": "她刚放下画笔，手上还有颜料。这个表达一定说明什么？",
            "target": "整句",
            "answer": "之前有持续画画的过程",
            "options": [
              "之前有持续画画的过程",
              "她现在一秒也没停"
            ],
            "why": "完成进行可描述刚结束而有现在结果的过程，不能强推此刻仍未停。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "I have been reading ___ two hours.",
            "zh": "我一直读了两小时。",
            "target": "___",
            "answer": "for",
            "options": [
              "for",
              "since"
            ],
            "why": "for 接 two hours 这样的时长；since 接九点、周一等起点。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "I have been reading ___ nine.",
            "zh": "我从九点起一直在读。",
            "target": "___",
            "answer": "since",
            "options": [
              "since",
              "for"
            ],
            "why": "nine 指九点这个起点，使用 since；并不是九小时。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "By next June, I ___ here for a year.",
            "zh": "从明年六月回望，到那时学习过程将持续一年。",
            "target": "___",
            "answer": "will have been studying",
            "options": [
              "will have been studying",
              "had been studying"
            ],
            "why": "将来参照点之前累积的过程，用 will have been studying。",
            "icon": "clock"
          }
        ]
      },
      {
        "id": "c7-m7",
        "title": "将来摄影任务",
        "note": "先理解故事，再挑合适的表达",
        "pages": "78–91",
        "items": [
          {
            "type": "pick",
            "sentence": "I promise I ___ you tomorrow.",
            "zh": "我承诺明天帮助你；选 will 形式。",
            "target": "___",
            "answer": "will help",
            "options": [
              "will help",
              "helped"
            ],
            "why": "承诺在这里可用 will + 原形 help；并非所有将来都必须 will。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "At ten tomorrow, I ___ on the train.",
            "zh": "明天十点那一刻，我将正在火车上读书。",
            "target": "___",
            "answer": "will be reading",
            "options": [
              "will be reading",
              "had been reading"
            ],
            "why": "将来参照时刻中的过程，用 will be reading。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "By ten tomorrow, I ___ the book.",
            "zh": "到明天十点前，我将已读完整本书。",
            "target": "___",
            "answer": "will have finished",
            "options": [
              "will have finished",
              "will be finishing"
            ],
            "why": "强调到将来期限前已完成的结果，用 will have finished。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "When Mia ___, I will wave.",
            "zh": "米娅到达时我会挥手；普通将来时间状语从句。",
            "target": "___",
            "answer": "arrives",
            "options": [
              "arrives",
              "will arrive"
            ],
            "why": "when 引导的这类时间状语从句常用现在式表将来；主句可用 will。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "I ___ plant a tree this weekend.",
            "zh": "我已打算这个周末种树；选 be going to 结构。",
            "target": "___",
            "answer": "am going to",
            "options": [
              "am going to",
              "was going to"
            ],
            "why": "am going to 可表达现在已有的将来打算；本题没有过去计划的情境。",
            "icon": "clock"
          }
        ]
      },
      {
        "id": "c7-m8",
        "title": "时态小导演毕业片",
        "note": "先理解故事，再挑合适的表达",
        "pages": "69–92",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia ___ not like rain.",
            "zh": "米娅一般不喜欢下雨。",
            "target": "___",
            "answer": "does",
            "options": [
              "does",
              "do"
            ],
            "why": "一般现在第三人称单数的否定用 does not，后接原形 like。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "You must not run here.",
            "zh": "这里的 must not 是什么要求？",
            "target": "整句",
            "answer": "不许在这里跑",
            "options": [
              "不许在这里跑",
              "不必在这里跑"
            ],
            "why": "must not 表示禁止；不必通常可用 do not have to 或 need not。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "I ___ reading when the bell rang.",
            "zh": "铃响的过去时刻，我正在读书。",
            "target": "___",
            "answer": "was",
            "options": [
              "was",
              "have"
            ],
            "why": "过去进行结构为 was reading；have reading 不是完成结构。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "Mia has ___ three pictures.",
            "zh": "到现在已完成三幅画，paint 的过去分词是什么？",
            "target": "___",
            "answer": "painted",
            "options": [
              "painted",
              "painting"
            ],
            "why": "完成结构 has + 过去分词 painted；这里强调已完成的数量。",
            "icon": "clock"
          },
          {
            "type": "pick",
            "sentence": "I watered the plants last week.",
            "zh": "这句话能否单独证明我现在再也不浇花？",
            "target": "整句",
            "answer": "不能，需更多语境",
            "options": [
              "不能，需更多语境",
              "能，过去式就是现在相反"
            ],
            "why": "一般过去把事件放到过去；它本身不能逻辑保证现在相反。",
            "icon": "clock"
          }
        ]
      }
    ]
  },
  {
    "id": "c8",
    "number": "08",
    "title": "愿望双世界剧院",
    "subtitle": "把真实发生的，与心中想象的分开",
    "mechanic": "现实与愿望 · 条件搭桥 · 结局改写",
    "theme": "lavender",
    "scene": "moon",
    "book": "第 8 章 · 书内 93–103 页",
    "brief": "左边保留真实故事，右边放入愿望和假想。用桥连接“如果”和“那么”，发现动词形式怎样表达距离、遗憾和可能。",
    "lessons": [
      {
        "title": "舞台上有几种说法？",
        "body": "陈述可以报告事实或看法；祈使可以请求或指令；假想和愿望可通过特殊动词形式表达。先辨认说话目的，再选结构。并非每个 if 都是反事实。",
        "example": "Open the door, please. The door is open.",
        "zh": "请开门。门是开着的。",
        "visual": "moon",
        "tags": [
          "陈述",
          "祈使",
          "愿望与假想"
        ]
      },
      {
        "title": "愿望里的过去形式",
        "body": "现在没自行车却希望有：I wish I had a bike. had 在这里表达与当前现实的距离。较正式的非现实 be 常用 were；I wish I was 在非正式用语中也存在，不教成绝对禁用。",
        "example": "I wish I were taller.",
        "zh": "我真希望自己更高一些。",
        "visual": "mirror",
        "tags": [
          "形式过去 ≠ 时间过去",
          "先看现实",
          "再看愿望"
        ]
      },
      {
        "title": "给过去写一张遗憾卡",
        "body": "wish + had done 表示希望过去不同；would/could have done 可表达过去本会/本可以的结果。modal + have done 是情态完成结构，不把它解释成“现在完成时”。",
        "example": "I wish I had left earlier.",
        "zh": "我真希望自己刚才早点出发。",
        "visual": "book",
        "tags": [
          "had + 过去分词",
          "would have + 过去分词",
          "现实不被真的改写"
        ]
      },
      {
        "title": "如果与那么，分别看时间",
        "body": "If I had time, I would help. 是现在的假想。If I had left earlier, I would have arrived on time. 是过去假想。混合条件可把过去原因与现在结果连接，不能整句机械倒退。",
        "example": "If I had slept, I would feel better now.",
        "zh": "如果之前睡过觉，我现在会舒服些。",
        "visual": "bridge",
        "tags": [
          "现在假想",
          "过去反事实",
          "将来假设",
          "混合时间"
        ]
      },
      {
        "title": "愿望也有不同搭法",
        "body": "wish + would 常盼外界改变；wish + could 可谈能力。as if 可以像真事一样描述，也可以表达假想；would rather 同主语常接原形，换主语可用过去形式。hope 常谈开放的将来可能，不和 wish 生硬互换。",
        "example": "I would rather stay. I would rather you stayed.",
        "zh": "我宁愿留下。我宁愿你留下。",
        "visual": "moon",
        "tags": [
          "as if 看证据",
          "if only",
          "would rather",
          "should not have done"
        ]
      }
    ],
    "missions": [
      {
        "id": "c8-m1",
        "title": "两边舞台先分清",
        "note": "左侧现实不变，选择右侧想说的话",
        "pages": "93–102",
        "items": [
          {
            "type": "worlds",
            "sentence": "Mia is at home.",
            "zh": "现实是米娅在家；直接报告，不添加愿望。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "Mia is at home.",
                  "Mia is at home."
                ],
                [
                  "I wish Mia were here.",
                  "I wish Mia were here."
                ]
              ]
            },
            "expected": {
              "voice": "fact",
              "bridge": "Mia is at home."
            },
            "answer": "{\"voice\":\"fact\",\"bridge\":\"Mia is at home.\"}",
            "why": "陈述报告现实；wish 才会把它变成不同的愿望。",
            "icon": "moon",
            "reality": "Mia 在家",
            "dream": "报告现实"
          },
          {
            "type": "worlds",
            "sentence": "Please open the window.",
            "zh": "屋里热，请对方打开窗户。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "Please open the window.",
                  "Please open the window."
                ],
                [
                  "Please opens the window.",
                  "Please opens the window."
                ]
              ]
            },
            "expected": {
              "voice": "request",
              "bridge": "Please open the window."
            },
            "answer": "{\"voice\":\"request\",\"bridge\":\"Please open the window.\"}",
            "why": "祈使句通常省略 you，用原形 open；please 让请求更客气。",
            "icon": "moon",
            "reality": "窗户关着",
            "dream": "请打开窗户"
          },
          {
            "type": "worlds",
            "sentence": "Do not touch the paint.",
            "zh": "油漆没干，请发出“不要碰”的指令。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "Do not touch the paint.",
                  "Do not touch the paint."
                ],
                [
                  "Not touches the paint.",
                  "Not touches the paint."
                ]
              ]
            },
            "expected": {
              "voice": "request",
              "bridge": "Do not touch the paint."
            },
            "answer": "{\"voice\":\"request\",\"bridge\":\"Do not touch the paint.\"}",
            "why": "否定祈使句用 do not + 原形，不能直接 Not touches。",
            "icon": "moon",
            "reality": "油漆没干",
            "dream": "请不要碰"
          },
          {
            "type": "worlds",
            "sentence": "I wish I had a bike.",
            "zh": "我现在没有自行车，想象现在有一辆。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "I wish I had a bike.",
                  "I wish I had a bike."
                ],
                [
                  "I wish I have a bike.",
                  "I wish I have a bike."
                ]
              ]
            },
            "expected": {
              "voice": "wish",
              "bridge": "I wish I had a bike."
            },
            "answer": "{\"voice\":\"wish\",\"bridge\":\"I wish I had a bike.\"}",
            "why": "这里 had 是与现在现实有距离的形式，并不是讲昨天拥有。",
            "icon": "moon",
            "reality": "现在没有车",
            "dream": "想象现在有车"
          },
          {
            "type": "worlds",
            "sentence": "I wish I were taller.",
            "zh": "我觉得现在不够高；练较正式的愿望表达。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "I wish I were taller.",
                  "I wish I were taller."
                ],
                [
                  "I wish I am taller.",
                  "I wish I am taller."
                ]
              ]
            },
            "expected": {
              "voice": "wish",
              "bridge": "I wish I were taller."
            },
            "answer": "{\"voice\":\"wish\",\"bridge\":\"I wish I were taller.\"}",
            "why": "较正式的非现实 be 常用 were；口语中也可听到 I wish I was，不一概判错。",
            "icon": "moon",
            "reality": "现在不够高",
            "dream": "想象更高"
          }
        ]
      },
      {
        "id": "c8-m2",
        "title": "遗憾与条件桥",
        "note": "左侧现实不变，选择右侧想说的话",
        "pages": "93–102",
        "items": [
          {
            "type": "worlds",
            "sentence": "I wish I had brought my coat.",
            "zh": "我刚才没带外套，现在后悔。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "I wish I had brought my coat.",
                  "I wish I had brought my coat."
                ],
                [
                  "I wish I bring my coat.",
                  "I wish I bring my coat."
                ]
              ]
            },
            "expected": {
              "voice": "wish",
              "bridge": "I wish I had brought my coat."
            },
            "answer": "{\"voice\":\"wish\",\"bridge\":\"I wish I had brought my coat.\"}",
            "why": "对已经发生的过去表示遗憾，用 wish + had + 过去分词 brought。",
            "icon": "moon",
            "reality": "过去没带外套",
            "dream": "想改写过去"
          },
          {
            "type": "worlds",
            "sentence": "I wish it would stop raining.",
            "zh": "雨一直下，我盼它改变；没有宣称天气绝对确定。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "I wish it would stop raining.",
                  "I wish it would stop raining."
                ],
                [
                  "I wish it stops raining.",
                  "I wish it stops raining."
                ]
              ]
            },
            "expected": {
              "voice": "wish",
              "bridge": "I wish it would stop raining."
            },
            "answer": "{\"voice\":\"wish\",\"bridge\":\"I wish it would stop raining.\"}",
            "why": "wish + would 可以表达希望外界情况改变；不是预测绝对必然。",
            "icon": "moon",
            "reality": "雨还在下",
            "dream": "盼雨停"
          },
          {
            "type": "worlds",
            "sentence": "I wish I could fly.",
            "zh": "我不会飞，想象自己具有飞行能力。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "I wish I could fly.",
                  "I wish I could fly."
                ],
                [
                  "I wish I can flying.",
                  "I wish I can flying."
                ]
              ]
            },
            "expected": {
              "voice": "wish",
              "bridge": "I wish I could fly."
            },
            "answer": "{\"voice\":\"wish\",\"bridge\":\"I wish I could fly.\"}",
            "why": "could + 原形 fly 表达愿望中的能力；不使用 can flying。",
            "icon": "moon",
            "reality": "我不会飞",
            "dream": "想象有能力"
          },
          {
            "type": "worlds",
            "sentence": "If I had a bike, I would ride to school.",
            "zh": "现在没有车，想象如果有车会怎样。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "If I had a bike, I would ride to school.",
                  "If I had a bike, I would ride to school."
                ],
                [
                  "If I have a bike, I rode to school.",
                  "If I have a bike, I rode to school."
                ]
              ]
            },
            "expected": {
              "voice": "condition",
              "bridge": "If I had a bike, I would ride to school."
            },
            "answer": "{\"voice\":\"condition\",\"bridge\":\"If I had a bike, I would ride to school.\"}",
            "why": "现在的假想条件用 had，结果用 would + 原形；两个分句不是都去讲过去。",
            "icon": "moon",
            "reality": "现在没有车",
            "dream": "有车就骑去学校"
          },
          {
            "type": "worlds",
            "sentence": "If I had left earlier, I would have caught the bus.",
            "zh": "实际没早点走，也没赶上车；改写过去原因和结果。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "If I had left earlier, I would have caught the bus.",
                  "If I had left earlier, I would have caught the bus."
                ],
                [
                  "If I leave earlier, I catch the bus yesterday.",
                  "If I leave earlier, I catch the bus yesterday."
                ]
              ]
            },
            "expected": {
              "voice": "condition",
              "bridge": "If I had left earlier, I would have caught the bus."
            },
            "answer": "{\"voice\":\"condition\",\"bridge\":\"If I had left earlier, I would have caught the bus.\"}",
            "why": "过去反事实条件用 had left，结果用 would have caught；have caught 在这里不是独立的现在完成时。",
            "icon": "moon",
            "reality": "过去走晚了",
            "dream": "改写赶车结局"
          }
        ]
      },
      {
        "id": "c8-m3",
        "title": "跨时间的愿望",
        "note": "左侧现实不变，选择右侧想说的话",
        "pages": "93–102",
        "items": [
          {
            "type": "worlds",
            "sentence": "If I had slept earlier, I would feel better now.",
            "zh": "昨晚没早点睡，所以现在不舒服；连接过去原因和现在结果。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "If I had slept earlier, I would feel better now.",
                  "If I had slept earlier, I would feel better now."
                ],
                [
                  "If I sleep earlier, I would have felt better now.",
                  "If I sleep earlier, I would have felt better now."
                ]
              ]
            },
            "expected": {
              "voice": "condition",
              "bridge": "If I had slept earlier, I would feel better now."
            },
            "answer": "{\"voice\":\"condition\",\"bridge\":\"If I had slept earlier, I would feel better now.\"}",
            "why": "混合条件分别对准时间：had slept 对准过去，would feel 对准现在。",
            "icon": "moon",
            "reality": "昨晚没早睡",
            "dream": "现在本会更舒服"
          },
          {
            "type": "worlds",
            "sentence": "If Mia were to visit tomorrow, we would bake a cake.",
            "zh": "把米娅明天来访当作较有距离的假设。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "If Mia were to visit tomorrow, we would bake a cake.",
                  "If Mia were to visit tomorrow, we would bake a cake."
                ],
                [
                  "If Mia were to visited tomorrow, we would baked a cake.",
                  "If Mia were to visited tomorrow, we would baked a cake."
                ]
              ]
            },
            "expected": {
              "voice": "condition",
              "bridge": "If Mia were to visit tomorrow, we would bake a cake."
            },
            "answer": "{\"voice\":\"condition\",\"bridge\":\"If Mia were to visit tomorrow, we would bake a cake.\"}",
            "why": "were to + 原形与 would + 原形构成这种将来假设；不是所有将来条件都这样写。",
            "icon": "moon",
            "reality": "明天来访未定",
            "dream": "假设来就烤蛋糕"
          },
          {
            "type": "worlds",
            "sentence": "If Mia should call, I would tell her.",
            "zh": "较正式地假设米娅万一来电；练 should + 原形。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "If Mia should call, I would tell her.",
                  "If Mia should call, I would tell her."
                ],
                [
                  "If Mia should calls, I would told her.",
                  "If Mia should calls, I would told her."
                ]
              ]
            },
            "expected": {
              "voice": "condition",
              "bridge": "If Mia should call, I would tell her."
            },
            "answer": "{\"voice\":\"condition\",\"bridge\":\"If Mia should call, I would tell her.\"}",
            "why": "should 后用原形 call；主句 would 后用 tell。此结构不能机械等同 wish 的所有用法。",
            "icon": "moon",
            "reality": "来电未定",
            "dream": "万一来电就转告"
          },
          {
            "type": "worlds",
            "sentence": "If only I knew the way!",
            "zh": "我现在不认识路，感叹“要是知道就好了”。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "If only I knew the way!",
                  "If only I knew the way!"
                ],
                [
                  "If only I knowed the way!",
                  "If only I knowed the way!"
                ]
              ]
            },
            "expected": {
              "voice": "wish",
              "bridge": "If only I knew the way!"
            },
            "answer": "{\"voice\":\"wish\",\"bridge\":\"If only I knew the way!\"}",
            "why": "if only 可表达强烈愿望；know 的过去形式为 knew，表示与当前现实的距离。",
            "icon": "moon",
            "reality": "现在不识路",
            "dream": "要是知道就好了"
          },
          {
            "type": "worlds",
            "sentence": "I would rather you stayed here.",
            "zh": "我希望你现在留下；would rather 后换了主语 you。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "事实陈述"
                ],
                [
                  "wish",
                  "愿望气泡"
                ],
                [
                  "condition",
                  "假想条件桥"
                ],
                [
                  "request",
                  "请求指令"
                ]
              ],
              "bridge": [
                [
                  "I would rather you stayed here.",
                  "I would rather you stayed here."
                ],
                [
                  "I would rather you stays here.",
                  "I would rather you stays here."
                ]
              ]
            },
            "expected": {
              "voice": "wish",
              "bridge": "I would rather you stayed here."
            },
            "answer": "{\"voice\":\"wish\",\"bridge\":\"I would rather you stayed here.\"}",
            "why": "would rather + 另一个主语 + 过去形式可表达现在/将来的偏好；同主语结构则常接原形。",
            "icon": "moon",
            "reality": "你正准备离开",
            "dream": "希望你留下"
          }
        ]
      },
      {
        "id": "c8-m4",
        "title": "不把每个 if 都当虚拟",
        "note": "看说话目的，也看动作实际发生的时间",
        "pages": "98–103",
        "items": [
          {
            "type": "pick",
            "sentence": "If it rains tomorrow, we will stay home.",
            "zh": "天气尚未确定，谈一种开放的可能。",
            "target": "整句",
            "answer": "普通开放条件",
            "options": [
              "普通开放条件",
              "已经确定的过去反事实"
            ],
            "why": "if + 现在式、主句 will 常用于开放将来条件；不能见 if 就说与事实相反。",
            "icon": "moon"
          },
          {
            "type": "pick",
            "sentence": "If I ___ you, I would ask Mia.",
            "zh": "练较正式的“如果我是你”。",
            "target": "___",
            "answer": "were",
            "options": [
              "were",
              "am"
            ],
            "why": "If I were you 是常用假想结构；were 不表示真的曾经是对方。",
            "icon": "moon"
          },
          {
            "type": "pick",
            "sentence": "I hope Mia ___ tomorrow.",
            "zh": "对明天来访抱有正常期待，练 hope 后现在式。",
            "target": "___",
            "answer": "comes",
            "options": [
              "comes",
              "had come"
            ],
            "why": "hope 可以谈开放的将来可能；这里 comes 可表将来，不是过去遗憾。",
            "icon": "moon"
          },
          {
            "type": "pick",
            "sentence": "It looks as if it is raining.",
            "zh": "窗外有雨点，按眼前证据判断。",
            "target": "整句",
            "answer": "可以陈述真实可能",
            "options": [
              "可以陈述真实可能",
              "as if 后永远必须倒退时态"
            ],
            "why": "as if 不总是反事实；依据真实可能时可使用正常时态。",
            "icon": "moon"
          },
          {
            "type": "pick",
            "sentence": "He talks as if he ___ everything.",
            "zh": "他其实不懂，却说得像什么都知道。",
            "target": "___",
            "answer": "knew",
            "options": [
              "knew",
              "know"
            ],
            "why": "情境明确与现实有距离，knew 表达假想的现在，而不是断言过去知道。",
            "icon": "moon"
          }
        ]
      },
      {
        "id": "c8-m5",
        "title": "把愿望带回生活",
        "note": "看说话目的，也看动作实际发生的时间",
        "pages": "98–103",
        "items": [
          {
            "type": "pick",
            "sentence": "I would rather ___ here.",
            "zh": "主语都是我：我宁愿待在这里。",
            "target": "___",
            "answer": "stay",
            "options": [
              "stay",
              "stayed"
            ],
            "why": "would rather 同一主语后接原形 stay；换成 you 等主语时结构不同。",
            "icon": "moon"
          },
          {
            "type": "pick",
            "sentence": "You should not have ___ the cup.",
            "zh": "杯子已经摔坏，表达本不该打破。",
            "target": "___",
            "answer": "broken",
            "options": [
              "broken",
              "broke"
            ],
            "why": "should not have + 过去分词，break 的过去分词是 broken。这里表示对过去的责备或遗憾。",
            "icon": "moon"
          },
          {
            "type": "pick",
            "sentence": "I could have helped, but I did not.",
            "zh": "这句话在给定的 but I did not 情境里表达什么？",
            "target": "整句",
            "answer": "过去本有能力却没帮",
            "options": [
              "过去本有能力却没帮",
              "保证明天一定帮"
            ],
            "why": "could have helped 表示过去本可；后半句明确没有帮，不是将来保证。",
            "icon": "moon"
          },
          {
            "type": "pick",
            "sentence": "If I had a map, I ___ find the way.",
            "zh": "现在没有地图；想象有地图就有能力找到路。",
            "target": "___",
            "answer": "could",
            "options": [
              "could",
              "can"
            ],
            "why": "这类现在假想结果可用 could + 原形，表达假想能力。",
            "icon": "moon"
          },
          {
            "type": "pick",
            "sentence": "I wish it would stop raining.",
            "zh": "愿望能否证明明天一定不下雨？",
            "target": "整句",
            "answer": "不能，愿望不是天气预报",
            "options": [
              "不能，愿望不是天气预报",
              "能，would 就保证发生"
            ],
            "why": "wish 表达说话者的愿望，不能据此推导客观天气必然变化。",
            "icon": "moon"
          }
        ]
      }
    ]
  },
  {
    "id": "c9",
    "number": "09",
    "title": "主语指挥乐队",
    "subtitle": "找到真正的指挥，让动词跟上节拍",
    "mechanic": "主语寻踪 · 人数节拍 · 动词合奏",
    "theme": "peach",
    "scene": "music",
    "book": "第 9 章 · 书内 104–110 页",
    "brief": "先把指挥棒交给控制动词的词组，再选动词节拍。围观的介词短语不能抢棒；数量词和并列结构则要听清自己的规则。",
    "lessons": [
      {
        "title": "谁握着指挥棒？",
        "body": "The box of pencils is blue. 的核心是 box，不是 pencils。一般现在实义动词第三人称单数常加 -s；复数主语通常用原形。be 的 am/is/are 另记。过去实义动词大多没有这样的单复数差异。",
        "example": "The bird sings. The birds sing.",
        "zh": "鸟儿唱歌。一群鸟唱歌。",
        "visual": "music",
        "tags": [
          "核心，不只看最近词",
          "第三人称单数",
          "be 特殊搭配"
        ]
      },
      {
        "title": "先听第一个助手",
        "body": "She does not sing. does 已与 she 配合，sing 保持原形。They have sung. have 与 they 配合，sung 不再跟着变。情态 can 对多数人称不变化。I 是第一人称单数，却用 I am / I have，不能一概称作复数。",
        "example": "She does not sing. They have sung.",
        "zh": "她不唱歌。他们已经唱过。",
        "visual": "train",
        "tags": [
          "does + sing",
          "has / have + sung",
          "can + sing"
        ]
      },
      {
        "title": "每位、两位与所有",
        "body": "each、everyone 在入门正式书面练习中按单数；both、many 常按复数。all/some 等要看谈的是水还是杯子。none of + 复数名词可有单复数差异，不用有争议的二选一强行判错。",
        "example": "All the water is clean. All the cups are clean.",
        "zh": "所有水都干净。所有杯子都干净。",
        "visual": "bag",
        "tags": [
          "each / everyone",
          "both",
          "数量结构看对象",
          "none 注意用法差异"
        ]
      },
      {
        "title": "一起演奏，还是二选一？",
        "body": "and 连接两个不同对象常用复数；如果整体指一份食物或同一个人，会有不同分析。either...or / neither...nor 一单一复时常按较近的一项搭配；with、as well as 附加说明不照搬这个规则。",
        "example": "Mia and Coco are here. Mia with Coco is here.",
        "zh": "米娅和可可都在。米娅和可可一起来了。",
        "visual": "bridge",
        "tags": [
          "and",
          "either...or",
          "neither...nor",
          "with 不抢指挥棒"
        ]
      },
      {
        "title": "整体和成员的不同视角",
        "body": "team、family 等集合名词在英式英语可按整体或成员选单复数，美式通常更偏好单数或改成 members。单个活动或一个问题作主语通常单数，但并列多个活动、what 从句等仍需具体分析。news、mathematics 常按单数，scissors 常按复数。",
        "example": "The team is ready. The team members are ready.",
        "zh": "队伍准备好了。队员们准备好了。",
        "visual": "music",
        "tags": [
          "方言与语境",
          "单个活动",
          "news is",
          "scissors are"
        ]
      }
    ],
    "missions": [
      {
        "id": "c9-m1",
        "title": "找回真正指挥棒",
        "note": "先选控制词组，再接动词；乐手数只作意义示意",
        "pages": "104–109",
        "items": [
          {
            "type": "conductor",
            "sentence": "The box of pencils is blue.",
            "zh": "一盒铅笔是蓝色的；先找控制动词的主语核心。",
            "axes": {
              "leader": [
                [
                  "The box",
                  "The box"
                ],
                [
                  "pencils",
                  "pencils"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "The box",
              "beat": "is"
            },
            "answer": "{\"leader\":\"The box\",\"beat\":\"is\"}",
            "why": "核心是单数 box，of pencils 添加说明，不能让 pencils 抢指挥棒。",
            "icon": "music",
            "frame": "The box of pencils ___ blue.",
            "players": 1
          },
          {
            "type": "conductor",
            "sentence": "The birds in the tree are singing.",
            "zh": "树上的几只鸟正在唱歌。",
            "axes": {
              "leader": [
                [
                  "The birds",
                  "The birds"
                ],
                [
                  "the tree",
                  "the tree"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "The birds",
              "beat": "are"
            },
            "answer": "{\"leader\":\"The birds\",\"beat\":\"are\"}",
            "why": "主语核心 birds 是复数；in the tree 不改变数量。",
            "icon": "music",
            "frame": "The birds in the tree ___ singing.",
            "players": 3
          },
          {
            "type": "conductor",
            "sentence": "Mia, with her friends, is here.",
            "zh": "米娅和朋友一起来了，with her friends 是附加说明。",
            "axes": {
              "leader": [
                [
                  "Mia",
                  "Mia"
                ],
                [
                  "her friends",
                  "her friends"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "Mia",
              "beat": "is"
            },
            "answer": "{\"leader\":\"Mia\",\"beat\":\"is\"}",
            "why": "with 不等于 and 构成并列主语；这里仍由 Mia 控制 is。",
            "icon": "music",
            "frame": "Mia, with her friends, ___ here.",
            "players": 1
          },
          {
            "type": "conductor",
            "sentence": "I am ready.",
            "zh": "我是一个人，但 be 有特殊人称搭配。",
            "axes": {
              "leader": [
                [
                  "I",
                  "I"
                ],
                [
                  "ready",
                  "ready"
                ]
              ],
              "beat": [
                [
                  "am",
                  "am"
                ],
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "I",
              "beat": "am"
            },
            "answer": "{\"leader\":\"I\",\"beat\":\"am\"}",
            "why": "I 在现在时配 am；不能把 I 的所有动词搭配统称为复数。",
            "icon": "music",
            "frame": "I ___ ready.",
            "players": 1
          },
          {
            "type": "conductor",
            "sentence": "You have a drum.",
            "zh": "你有一个鼓；you 指一个人也用 have。",
            "axes": {
              "leader": [
                [
                  "You",
                  "You"
                ],
                [
                  "a drum",
                  "a drum"
                ]
              ],
              "beat": [
                [
                  "have",
                  "have"
                ],
                [
                  "has",
                  "has"
                ]
              ]
            },
            "expected": {
              "leader": "You",
              "beat": "have"
            },
            "answer": "{\"leader\":\"You\",\"beat\":\"have\"}",
            "why": "you 无论指一人还是多人，这里都配 have，而不是 has。",
            "icon": "music",
            "frame": "You ___ a drum.",
            "players": 1
          }
        ]
      },
      {
        "id": "c9-m2",
        "title": "每位与所有人的节拍",
        "note": "先选控制词组，再接动词；乐手数只作意义示意",
        "pages": "104–109",
        "items": [
          {
            "type": "conductor",
            "sentence": "Everyone has a ticket.",
            "zh": "每个人都有票；不是把每个人加起来就配复数。",
            "axes": {
              "leader": [
                [
                  "Everyone",
                  "Everyone"
                ],
                [
                  "a ticket",
                  "a ticket"
                ]
              ],
              "beat": [
                [
                  "has",
                  "has"
                ],
                [
                  "have",
                  "have"
                ]
              ]
            },
            "expected": {
              "leader": "Everyone",
              "beat": "has"
            },
            "answer": "{\"leader\":\"Everyone\",\"beat\":\"has\"}",
            "why": "everyone 语法上按单数配动词，即使语义涉及多人。",
            "icon": "music",
            "frame": "Everyone ___ a ticket.",
            "players": 1
          },
          {
            "type": "conductor",
            "sentence": "Each of the players is ready.",
            "zh": "正式书面练习：队员每一位都准备好了。",
            "axes": {
              "leader": [
                [
                  "Each",
                  "Each"
                ],
                [
                  "the players",
                  "the players"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "Each",
              "beat": "is"
            },
            "answer": "{\"leader\":\"Each\",\"beat\":\"is\"}",
            "why": "each 作这里的主语核心，按单数配 is；不能只看离动词近的 players。",
            "icon": "music",
            "frame": "Each of the players ___ ready.",
            "players": 1
          },
          {
            "type": "conductor",
            "sentence": "Both of the players are ready.",
            "zh": "两位队员都准备好了。",
            "axes": {
              "leader": [
                [
                  "Both",
                  "Both"
                ],
                [
                  "ready",
                  "ready"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "Both",
              "beat": "are"
            },
            "answer": "{\"leader\":\"Both\",\"beat\":\"are\"}",
            "why": "both 表示两个，配复数 are；与 each 的视角不同。",
            "icon": "music",
            "frame": "Both of the players ___ ready.",
            "players": 2
          },
          {
            "type": "conductor",
            "sentence": "All of the water is clean.",
            "zh": "所有水都干净；water 是不可数物质用法。",
            "axes": {
              "leader": [
                [
                  "All of the water",
                  "All of the water"
                ],
                [
                  "clean",
                  "clean"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "All of the water",
              "beat": "is"
            },
            "answer": "{\"leader\":\"All of the water\",\"beat\":\"is\"}",
            "why": "all of + 不可数 water，整体按单数配 is；不是 all 一定复数。",
            "icon": "music",
            "frame": "All of the water ___ clean.",
            "players": 1
          },
          {
            "type": "conductor",
            "sentence": "All of the cups are clean.",
            "zh": "所有杯子都干净。",
            "axes": {
              "leader": [
                [
                  "All of the cups",
                  "All of the cups"
                ],
                [
                  "clean",
                  "clean"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "All of the cups",
              "beat": "are"
            },
            "answer": "{\"leader\":\"All of the cups\",\"beat\":\"are\"}",
            "why": "all of + 可数复数 cups，配 are。数量结构要看指代对象。",
            "icon": "music",
            "frame": "All of the cups ___ clean.",
            "players": 3
          }
        ]
      },
      {
        "id": "c9-m3",
        "title": "并列和整体大合奏",
        "note": "先选控制词组，再接动词；乐手数只作意义示意",
        "pages": "104–109",
        "items": [
          {
            "type": "conductor",
            "sentence": "Mia and Coco are here.",
            "zh": "米娅和可可两位都在这里。",
            "axes": {
              "leader": [
                [
                  "Mia and Coco",
                  "Mia and Coco"
                ],
                [
                  "here",
                  "here"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "Mia and Coco",
              "beat": "are"
            },
            "answer": "{\"leader\":\"Mia and Coco\",\"beat\":\"are\"}",
            "why": "and 在这里连接两位不同对象，构成复数主语。",
            "icon": "music",
            "frame": "Mia and Coco ___ here.",
            "players": 2
          },
          {
            "type": "conductor",
            "sentence": "Either Mia or the boys are playing.",
            "zh": "练标准书面语的就近搭配，or 后离动词近的是 boys。",
            "axes": {
              "leader": [
                [
                  "Mia",
                  "Mia"
                ],
                [
                  "the boys",
                  "the boys"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "the boys",
              "beat": "are"
            },
            "answer": "{\"leader\":\"the boys\",\"beat\":\"are\"}",
            "why": "either...or 中一单一复，这里按较近的 boys 配 are；不把就近推广到所有句子。",
            "icon": "music",
            "frame": "Either Mia or the boys ___ playing.",
            "players": 3
          },
          {
            "type": "conductor",
            "sentence": "Either the boys or Mia is playing.",
            "zh": "把顺序换过来，离动词近的是 Mia。",
            "axes": {
              "leader": [
                [
                  "the boys",
                  "the boys"
                ],
                [
                  "Mia",
                  "Mia"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "Mia",
              "beat": "is"
            },
            "answer": "{\"leader\":\"Mia\",\"beat\":\"is\"}",
            "why": "这里较近的是单数 Mia，按就近搭配用 is；实际写作也可改写以避免别扭。",
            "icon": "music",
            "frame": "Either the boys or Mia ___ playing.",
            "players": 1
          },
          {
            "type": "conductor",
            "sentence": "Reading stories is fun.",
            "zh": "把“读故事”视为一项活动。",
            "axes": {
              "leader": [
                [
                  "Reading stories",
                  "Reading stories"
                ],
                [
                  "stories",
                  "stories"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "Reading stories",
              "beat": "is"
            },
            "answer": "{\"leader\":\"Reading stories\",\"beat\":\"is\"}",
            "why": "Reading stories 整体作单个活动主语，配 is；内部 stories 不单独控制动词。",
            "icon": "music",
            "frame": "Reading stories ___ fun.",
            "players": 1
          },
          {
            "type": "conductor",
            "sentence": "The number of birds is rising.",
            "zh": "鸟的数量正在上升；描述的是一个数量。",
            "axes": {
              "leader": [
                [
                  "The number",
                  "The number"
                ],
                [
                  "birds",
                  "birds"
                ]
              ],
              "beat": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ]
              ]
            },
            "expected": {
              "leader": "The number",
              "beat": "is"
            },
            "answer": "{\"leader\":\"The number\",\"beat\":\"is\"}",
            "why": "the number of 描述数量本身，主语核心 number 按单数配 is；与 a number of birds are 不同。",
            "icon": "music",
            "frame": "The number of birds ___ rising.",
            "players": 1
          }
        ]
      },
      {
        "id": "c9-m4",
        "title": "特殊名词与整体视角",
        "note": "对照前面的 be、名词与时态知识",
        "pages": "104–110",
        "items": [
          {
            "type": "pick",
            "sentence": "The news ___ good.",
            "zh": "news 看起来有 s，在这里仍作不可数名词。",
            "target": "___",
            "answer": "is",
            "options": [
              "is",
              "are"
            ],
            "why": "news 通常按单数搭配 is，不根据词尾 s 猜复数。",
            "icon": "music"
          },
          {
            "type": "pick",
            "sentence": "These scissors ___ sharp.",
            "zh": "这把剪刀锋利；scissors 是复数形式。",
            "target": "___",
            "answer": "are",
            "options": [
              "are",
              "is"
            ],
            "why": "scissors 通常配复数 are；a pair of scissors 则可由 pair 控制单数。",
            "icon": "music"
          },
          {
            "type": "pick",
            "sentence": "A pair of scissors ___ on the desk.",
            "zh": "一把剪刀在桌上；这里主语核心是 pair。",
            "target": "___",
            "answer": "is",
            "options": [
              "is",
              "are"
            ],
            "why": "a pair of scissors 以单数 pair 作核心，配 is。",
            "icon": "music"
          },
          {
            "type": "pick",
            "sentence": "The team members ___ ready.",
            "zh": "明确谈队伍中的多位成员，避免集合名词的方言差异。",
            "target": "___",
            "answer": "are",
            "options": [
              "are",
              "is"
            ],
            "why": "members 明确是复数；team 单独作主语时英美用法和整体/成员视角可能不同。",
            "icon": "music"
          },
          {
            "type": "pick",
            "sentence": "To help Mia ___ my goal.",
            "zh": "把帮助米娅当作一个目标行动。",
            "target": "___",
            "answer": "is",
            "options": [
              "is",
              "are"
            ],
            "why": "单个不定式结构 To help Mia 作主语，通常按单数配 is。",
            "icon": "music"
          }
        ]
      },
      {
        "id": "c9-m5",
        "title": "合奏毕业：看清整个结构",
        "note": "对照前面的 be、名词与时态知识",
        "pages": "104–110",
        "items": [
          {
            "type": "pick",
            "sentence": "She does not ___ here.",
            "zh": "助动词 does 已按主语配好了。",
            "target": "___",
            "answer": "work",
            "options": [
              "work",
              "works"
            ],
            "why": "does 后用原形 work，不在同一结构再加第三人称 -s。",
            "icon": "music"
          },
          {
            "type": "pick",
            "sentence": "A number of birds ___ here.",
            "zh": "许多鸟在这里；a number of 表示许多。",
            "target": "___",
            "answer": "are",
            "options": [
              "are",
              "is"
            ],
            "why": "a number of + 复数 birds 通常配复数；the number of birds 才是数量本身。",
            "icon": "music"
          },
          {
            "type": "pick",
            "sentence": "Neither Mia nor Coco ___ late.",
            "zh": "两位都是单数，这里练正式书面搭配。",
            "target": "___",
            "answer": "is",
            "options": [
              "is",
              "are"
            ],
            "why": "neither...nor 连接的两项都单数，本题选 is。",
            "icon": "music"
          },
          {
            "type": "pick",
            "sentence": "Half of the milk ___ warm.",
            "zh": "一半牛奶是温热的。",
            "target": "___",
            "answer": "is",
            "options": [
              "is",
              "are"
            ],
            "why": "分量结构指向不可数 milk，配 is；half of the cups 则通常配 are。",
            "icon": "music"
          },
          {
            "type": "pick",
            "sentence": "Whether Mia comes ___ unknown.",
            "zh": "“米娅是否来”作为一个尚未确定的问题。",
            "target": "___",
            "answer": "is",
            "options": [
              "is",
              "are"
            ],
            "why": "whether 从句整体表示一个问题，通常按单数；不要只数从句内部词语。",
            "icon": "music"
          }
        ]
      }
    ]
  }
];
