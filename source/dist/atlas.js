// Full-book refinement and original cross-chapter celebration.
export const atlasData={
  "refinements": {
    "c7": {
      "missions": [
        {
          "id": "c7-r1",
          "title": "把时间与镜头分开调",
          "pages": "69–92",
          "items": [
            {
              "type": "camera",
              "sentence": "The team practises every Friday.",
              "zh": "每周五的常规练习，不保证此刻正在练。",
              "axes": {
                "reference": [
                  [
                    "past",
                    "过去参照"
                  ],
                  [
                    "present",
                    "现在参照"
                  ],
                  [
                    "future",
                    "将来参照"
                  ]
                ],
                "aspect": [
                  [
                    "simple",
                    "事实 / 一般"
                  ],
                  [
                    "continuous",
                    "进行观察"
                  ],
                  [
                    "perfect",
                    "回望之前"
                  ],
                  [
                    "duration",
                    "过程累积"
                  ]
                ],
                "film": [
                  [
                    "practises",
                    "practises"
                  ],
                  [
                    "is practising",
                    "is practising"
                  ]
                ]
              },
              "expected": {
                "reference": "present",
                "aspect": "simple",
                "film": "practises"
              },
              "answer": "{\"reference\":\"present\",\"aspect\":\"simple\",\"film\":\"practises\"}",
              "why": "本题明确参照点与观看方式，选择 practises。不只看时间词，也不把完成理解为只能发生很久以前。",
              "icon": "clock",
              "frame": "The team {film} every Friday."
            },
            {
              "type": "camera",
              "sentence": "At ten yesterday, Mia was making a sign.",
              "zh": "镜头放在昨天十点，当时正在做标牌。",
              "axes": {
                "reference": [
                  [
                    "past",
                    "过去参照"
                  ],
                  [
                    "present",
                    "现在参照"
                  ],
                  [
                    "future",
                    "将来参照"
                  ]
                ],
                "aspect": [
                  [
                    "simple",
                    "事实 / 一般"
                  ],
                  [
                    "continuous",
                    "进行观察"
                  ],
                  [
                    "perfect",
                    "回望之前"
                  ],
                  [
                    "duration",
                    "过程累积"
                  ]
                ],
                "film": [
                  [
                    "was making a sign",
                    "was making a sign"
                  ],
                  [
                    "has made a sign",
                    "has made a sign"
                  ]
                ]
              },
              "expected": {
                "reference": "past",
                "aspect": "continuous",
                "film": "was making a sign"
              },
              "answer": "{\"reference\":\"past\",\"aspect\":\"continuous\",\"film\":\"was making a sign\"}",
              "why": "本题明确参照点与观看方式，选择 was making a sign。不只看时间词，也不把完成理解为只能发生很久以前。",
              "icon": "clock",
              "frame": "At ten yesterday, Mia {film}."
            },
            {
              "type": "camera",
              "sentence": "By noon tomorrow, Leo will have finished the sign.",
              "zh": "明确站在明天中午回看：标牌届时已做完。",
              "axes": {
                "reference": [
                  [
                    "past",
                    "过去参照"
                  ],
                  [
                    "present",
                    "现在参照"
                  ],
                  [
                    "future",
                    "将来参照"
                  ]
                ],
                "aspect": [
                  [
                    "simple",
                    "事实 / 一般"
                  ],
                  [
                    "continuous",
                    "进行观察"
                  ],
                  [
                    "perfect",
                    "回望之前"
                  ],
                  [
                    "duration",
                    "过程累积"
                  ]
                ],
                "film": [
                  [
                    "will have finished the sign",
                    "will have finished the sign"
                  ],
                  [
                    "finished the sign",
                    "finished the sign"
                  ]
                ]
              },
              "expected": {
                "reference": "future",
                "aspect": "perfect",
                "film": "will have finished the sign"
              },
              "answer": "{\"reference\":\"future\",\"aspect\":\"perfect\",\"film\":\"will have finished the sign\"}",
              "why": "本题明确参照点与观看方式，选择 will have finished the sign。不只看时间词，也不把完成理解为只能发生很久以前。",
              "icon": "clock",
              "frame": "By noon tomorrow, Leo {film}."
            },
            {
              "type": "camera",
              "sentence": "Mia has been painting for an hour, and she is still doing it.",
              "zh": "现在回看持续到现在的工作过程，用完成进行镜头。",
              "axes": {
                "reference": [
                  [
                    "past",
                    "过去参照"
                  ],
                  [
                    "present",
                    "现在参照"
                  ],
                  [
                    "future",
                    "将来参照"
                  ]
                ],
                "aspect": [
                  [
                    "simple",
                    "事实 / 一般"
                  ],
                  [
                    "continuous",
                    "进行观察"
                  ],
                  [
                    "perfect",
                    "回望之前"
                  ],
                  [
                    "duration",
                    "过程累积"
                  ]
                ],
                "film": [
                  [
                    "has been painting",
                    "has been painting"
                  ],
                  [
                    "had been painting",
                    "had been painting"
                  ]
                ]
              },
              "expected": {
                "reference": "present",
                "aspect": "duration",
                "film": "has been painting"
              },
              "answer": "{\"reference\":\"present\",\"aspect\":\"duration\",\"film\":\"has been painting\"}",
              "why": "本题明确参照点与观看方式，选择 has been painting。不只看时间词，也不把完成理解为只能发生很久以前。",
              "icon": "clock",
              "frame": "Mia {film} for an hour, and she is still doing it."
            },
            {
              "type": "camera",
              "sentence": "When Leo arrived, Mia had finished painting.",
              "zh": "到达是过去参照，画画在到达前已完成。",
              "axes": {
                "reference": [
                  [
                    "past",
                    "过去参照"
                  ],
                  [
                    "present",
                    "现在参照"
                  ],
                  [
                    "future",
                    "将来参照"
                  ]
                ],
                "aspect": [
                  [
                    "simple",
                    "事实 / 一般"
                  ],
                  [
                    "continuous",
                    "进行观察"
                  ],
                  [
                    "perfect",
                    "回望之前"
                  ],
                  [
                    "duration",
                    "过程累积"
                  ]
                ],
                "film": [
                  [
                    "had finished painting",
                    "had finished painting"
                  ],
                  [
                    "has finished painting",
                    "has finished painting"
                  ]
                ]
              },
              "expected": {
                "reference": "past",
                "aspect": "perfect",
                "film": "had finished painting"
              },
              "answer": "{\"reference\":\"past\",\"aspect\":\"perfect\",\"film\":\"had finished painting\"}",
              "why": "本题明确参照点与观看方式，选择 had finished painting。不只看时间词，也不把完成理解为只能发生很久以前。",
              "icon": "clock",
              "frame": "When Leo arrived, Mia {film}."
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c7-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "69–92",
          "items": [
            {
              "type": "pick",
              "sentence": "The train leaves at nine tomorrow.",
              "zh": "时刻表语境中现在形式能指未来吗？",
              "target": "整句",
              "answer": "可以，具体结构与语境决定",
              "options": [
                "可以，具体结构与语境决定",
                "不可以，未来只能用 will"
              ],
              "why": "一般现在可用于时刻表，不把形式和实际时间一一硬配。",
              "icon": "clock"
            },
            {
              "type": "pick",
              "sentence": "Mia has lived here for years.",
              "zh": "这句是否一定表示已经搬走？",
              "target": "整句",
              "answer": "不是，普通语境可持续到现在",
              "options": [
                "不是，普通语境可持续到现在",
                "是，完成就表示不再持续"
              ],
              "why": "完成体连接先前状态与参照点，不强制表示状态终止。",
              "icon": "house"
            },
            {
              "type": "pick",
              "sentence": "Mia was reading when Leo arrived.",
              "zh": "昨天 Leo 到时，正在读的人是谁？",
              "target": "整句",
              "answer": "Mia",
              "options": [
                "Mia",
                "Leo"
              ],
              "why": "was reading 描述 Mia 当时进行的动作，when 从句给参照。",
              "icon": "book"
            },
            {
              "type": "pick",
              "sentence": "Mia has finished the sign.",
              "zh": "通常强调什么？",
              "target": "整句",
              "answer": "到现在标牌已经完成",
              "options": [
                "到现在标牌已经完成",
                "明天一定会完成"
              ],
              "why": "has finished 用现在完成，回望此前完成，不保证任何未来任务。",
              "icon": "paint"
            },
            {
              "type": "pick",
              "sentence": "Mia is meeting Leo tomorrow.",
              "zh": "已安排会面语境里，进行形式可表示什么？",
              "target": "整句",
              "answer": "已安排的未来会面",
              "options": [
                "已安排的未来会面",
                "只能是此刻正在会面"
              ],
              "why": "进行形式也可表达安排，需要具体语境，不把 -ing 当此刻的唯一标签。",
              "icon": "portrait"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "时间点不等于观看镜头",
          "body": "相同现在参照可看习惯或正在做；镜头不同，形式不同。 点两种观察方式，再用自己的话解释区别。",
          "example": "I paint signs every Friday.",
          "zh": "每周反复，不保证此刻在画。",
          "visual": "paint",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c7",
            "kind": "atlas",
            "scene": "time",
            "states": [
              {
                "value": "habit",
                "label": "观察一",
                "text": "I paint signs every Friday.",
                "note": "每周反复，不保证此刻在画。",
                "art": "paint"
              },
              {
                "value": "live",
                "label": "观察二",
                "text": "I am painting a sign now.",
                "note": "此刻镜头，画画正在进行。",
                "art": "paint"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "I am painting a sign now.",
          "zh": "此刻镜头，画画正在进行。",
          "visual": "paint",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c8": {
      "missions": [
        {
          "id": "c8-r1",
          "title": "现实、愿望和请求分屏",
          "pages": "93–103",
          "items": [
            {
              "type": "worlds",
              "sentence": "Please bring the signs.",
              "zh": "温和请求对方带来标牌，不是在报告已带来。",
              "axes": {
                "voice": [
                  [
                    "fact",
                    "报告事实"
                  ],
                  [
                    "wish",
                    "表达愿望"
                  ],
                  [
                    "condition",
                    "假想条件"
                  ],
                  [
                    "request",
                    "指令请求"
                  ]
                ],
                "bridge": [
                  [
                    "Please bring the signs.",
                    "Please bring the signs."
                  ],
                  [
                    "You brought the signs.",
                    "You brought the signs."
                  ]
                ]
              },
              "expected": {
                "voice": "request",
                "bridge": "Please bring the signs."
              },
              "answer": "{\"voice\":\"request\",\"bridge\":\"Please bring the signs.\"}",
              "why": "按给定现实与表达目标选择，不把愿望当作事实，也不把所有 if 都判为不真实。",
              "icon": "moon",
              "reality": "尚未报告标牌已到",
              "dream": "请求带标牌"
            },
            {
              "type": "worlds",
              "sentence": "I wish I could sing.",
              "zh": "现实是我现在不会唱；表达不同愿望。",
              "axes": {
                "voice": [
                  [
                    "fact",
                    "报告事实"
                  ],
                  [
                    "wish",
                    "表达愿望"
                  ],
                  [
                    "condition",
                    "假想条件"
                  ],
                  [
                    "request",
                    "指令请求"
                  ]
                ],
                "bridge": [
                  [
                    "I wish I could sing.",
                    "I wish I could sing."
                  ],
                  [
                    "I can sing.",
                    "I can sing."
                  ]
                ]
              },
              "expected": {
                "voice": "wish",
                "bridge": "I wish I could sing."
              },
              "answer": "{\"voice\":\"wish\",\"bridge\":\"I wish I could sing.\"}",
              "why": "按给定现实与表达目标选择，不把愿望当作事实，也不把所有 if 都判为不真实。",
              "icon": "moon",
              "reality": "目前不会唱",
              "dream": "希望会唱"
            },
            {
              "type": "worlds",
              "sentence": "If Mia had a ladder, she could reach the shelf.",
              "zh": "明确现在没有梯子；搭现在假想的条件桥。",
              "axes": {
                "voice": [
                  [
                    "fact",
                    "报告事实"
                  ],
                  [
                    "wish",
                    "表达愿望"
                  ],
                  [
                    "condition",
                    "假想条件"
                  ],
                  [
                    "request",
                    "指令请求"
                  ]
                ],
                "bridge": [
                  [
                    "If Mia had a ladder, she could reach the shelf.",
                    "If Mia had a ladder, she could reach the shelf."
                  ],
                  [
                    "Mia has a ladder, so she can reach the shelf.",
                    "Mia has a ladder, so she can reach the shelf."
                  ]
                ]
              },
              "expected": {
                "voice": "condition",
                "bridge": "If Mia had a ladder, she could reach the shelf."
              },
              "answer": "{\"voice\":\"condition\",\"bridge\":\"If Mia had a ladder, she could reach the shelf.\"}",
              "why": "按给定现实与表达目标选择，不把愿望当作事实，也不把所有 if 都判为不真实。",
              "icon": "moon",
              "reality": "现在没梯子",
              "dream": "假想有梯子"
            },
            {
              "type": "worlds",
              "sentence": "Mia is in the garden.",
              "zh": "直接报告她在花园的事实。",
              "axes": {
                "voice": [
                  [
                    "fact",
                    "报告事实"
                  ],
                  [
                    "wish",
                    "表达愿望"
                  ],
                  [
                    "condition",
                    "假想条件"
                  ],
                  [
                    "request",
                    "指令请求"
                  ]
                ],
                "bridge": [
                  [
                    "Mia is in the garden.",
                    "Mia is in the garden."
                  ],
                  [
                    "I wish Mia were in the garden.",
                    "I wish Mia were in the garden."
                  ]
                ]
              },
              "expected": {
                "voice": "fact",
                "bridge": "Mia is in the garden."
              },
              "answer": "{\"voice\":\"fact\",\"bridge\":\"Mia is in the garden.\"}",
              "why": "按给定现实与表达目标选择，不把愿望当作事实，也不把所有 if 都判为不真实。",
              "icon": "moon",
              "reality": "在花园",
              "dream": "报告位置"
            },
            {
              "type": "worlds",
              "sentence": "I wish Leo had arrived earlier.",
              "zh": "Leo 已经迟到；表达对过去的遗憾。",
              "axes": {
                "voice": [
                  [
                    "fact",
                    "报告事实"
                  ],
                  [
                    "wish",
                    "表达愿望"
                  ],
                  [
                    "condition",
                    "假想条件"
                  ],
                  [
                    "request",
                    "指令请求"
                  ]
                ],
                "bridge": [
                  [
                    "I wish Leo had arrived earlier.",
                    "I wish Leo had arrived earlier."
                  ],
                  [
                    "Leo will arrive earlier.",
                    "Leo will arrive earlier."
                  ]
                ]
              },
              "expected": {
                "voice": "wish",
                "bridge": "I wish Leo had arrived earlier."
              },
              "answer": "{\"voice\":\"wish\",\"bridge\":\"I wish Leo had arrived earlier.\"}",
              "why": "按给定现实与表达目标选择，不把愿望当作事实，也不把所有 if 都判为不真实。",
              "icon": "moon",
              "reality": "已迟到",
              "dream": "但愿当时早点到"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c8-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "93–103",
          "items": [
            {
              "type": "pick",
              "sentence": "If it rains tomorrow, we will stay inside.",
              "zh": "这一定是在说不可能的事吗？",
              "target": "整句",
              "answer": "不是，这是开放的未来条件",
              "options": [
                "不是，这是开放的未来条件",
                "是，任何 if 都不真实"
              ],
              "why": "未来条件可能发生，也可能不发生；不能只凭 if 判虚拟。",
              "icon": "cloud"
            },
            {
              "type": "pick",
              "sentence": "If I were taller, I could reach it.",
              "zh": "本题已说明我现在不够高，这句表达？",
              "target": "整句",
              "answer": "与当前事实不同的假想",
              "options": [
                "与当前事实不同的假想",
                "已发生的过去事实"
              ],
              "why": "were 在这里表达假想距离，不只是时间在过去。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "Please be quiet.",
              "zh": "这句的普通作用？",
              "target": "整句",
              "answer": "提出请求或指令",
              "options": [
                "提出请求或指令",
                "报告某人昨天安静"
              ],
              "why": "祈使句常省略 you，但请求不保证对方已经照做。",
              "icon": "music"
            },
            {
              "type": "pick",
              "sentence": "I wish Mia were here.",
              "zh": "能据此断言 Mia 现在就在这里吗？",
              "target": "整句",
              "answer": "不能，愿望与现实分开",
              "options": [
                "不能，愿望与现实分开",
                "能，句子出现 here 就是现实"
              ],
              "why": "wish 表达希望不同，不能用愿望直接替代现实报告。",
              "icon": "moon"
            },
            {
              "type": "pick",
              "sentence": "If Mia had checked, she would have noticed.",
              "zh": "本题“当时没检查”语境中，假想针对？",
              "target": "整句",
              "answer": "过去未发生的检查",
              "options": [
                "过去未发生的检查",
                "明天确定的检查"
              ],
              "why": "had checked 与 would have noticed 在本题回看过去的不同可能，不保证实际发生。",
              "icon": "clock"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "现实与愿望分开看",
          "body": "愿望气泡不是现实报告，条件桥也不保证发生。 点两种观察方式，再用自己的话解释区别。",
          "example": "Mia is away.",
          "zh": "现实卡：米娅不在这里。",
          "visual": "moon",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c8",
            "kind": "atlas",
            "scene": "world",
            "states": [
              {
                "value": "fact",
                "label": "观察一",
                "text": "Mia is away.",
                "note": "现实卡：米娅不在这里。",
                "art": "moon"
              },
              {
                "value": "wish",
                "label": "观察二",
                "text": "I wish Mia were here.",
                "note": "愿望卡：希望她在这里，不等于她已在。",
                "art": "moon"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "I wish Mia were here.",
          "zh": "愿望卡：希望她在这里，不等于她已在。",
          "visual": "moon",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c9": {
      "missions": [
        {
          "id": "c9-r1",
          "title": "别让插入信息抢指挥棒",
          "pages": "104–110",
          "items": [
            {
              "type": "conductor",
              "sentence": "The basket of flowers is ready.",
              "zh": "准备好的是一篮花；找数量核心。",
              "axes": {
                "leader": [
                  [
                    "The basket",
                    "The basket"
                  ],
                  [
                    "flowers",
                    "flowers"
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
                "leader": "The basket",
                "beat": "is"
              },
              "answer": "{\"leader\":\"The basket\",\"beat\":\"is\"}",
              "why": "本句由 The basket 控制动词形式，不由最近的名词或词组内部复数决定。",
              "icon": "music",
              "frame": "The basket of flowers ___ ready.",
              "players": 1
            },
            {
              "type": "conductor",
              "sentence": "The signs near the gate are blue.",
              "zh": "门边的几块标牌，核心是 signs。",
              "axes": {
                "leader": [
                  [
                    "The signs",
                    "The signs"
                  ],
                  [
                    "the gate",
                    "the gate"
                  ]
                ],
                "beat": [
                  [
                    "are",
                    "are"
                  ],
                  [
                    "is",
                    "is"
                  ]
                ]
              },
              "expected": {
                "leader": "The signs",
                "beat": "are"
              },
              "answer": "{\"leader\":\"The signs\",\"beat\":\"are\"}",
              "why": "本句由 The signs 控制动词形式，不由最近的名词或词组内部复数决定。",
              "icon": "music",
              "frame": "The signs near the gate ___ blue.",
              "players": 3
            },
            {
              "type": "conductor",
              "sentence": "Each of the helpers has a map.",
              "zh": "each 是本题单数核心，不让 helpers 抢指挥棒。",
              "axes": {
                "leader": [
                  [
                    "Each",
                    "Each"
                  ],
                  [
                    "helpers",
                    "helpers"
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
                "leader": "Each",
                "beat": "has"
              },
              "answer": "{\"leader\":\"Each\",\"beat\":\"has\"}",
              "why": "本句由 Each 控制动词形式，不由最近的名词或词组内部复数决定。",
              "icon": "music",
              "frame": "Each of the helpers ___ a map.",
              "players": 1
            },
            {
              "type": "conductor",
              "sentence": "Reading the notices is useful.",
              "zh": "把读通知看成一项活动整体。",
              "axes": {
                "leader": [
                  [
                    "Reading the notices",
                    "Reading the notices"
                  ],
                  [
                    "notices",
                    "notices"
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
                "leader": "Reading the notices",
                "beat": "is"
              },
              "answer": "{\"leader\":\"Reading the notices\",\"beat\":\"is\"}",
              "why": "本句由 Reading the notices 控制动词形式，不由最近的名词或词组内部复数决定。",
              "icon": "music",
              "frame": "Reading the notices ___ useful.",
              "players": 1
            },
            {
              "type": "conductor",
              "sentence": "Mia and Leo are ready.",
              "zh": "两位不同的人并列作主语。",
              "axes": {
                "leader": [
                  [
                    "Mia and Leo",
                    "Mia and Leo"
                  ],
                  [
                    "Mia",
                    "Mia"
                  ]
                ],
                "beat": [
                  [
                    "are",
                    "are"
                  ],
                  [
                    "is",
                    "is"
                  ]
                ]
              },
              "expected": {
                "leader": "Mia and Leo",
                "beat": "are"
              },
              "answer": "{\"leader\":\"Mia and Leo\",\"beat\":\"are\"}",
              "why": "本句由 Mia and Leo 控制动词形式，不由最近的名词或词组内部复数决定。",
              "icon": "music",
              "frame": "Mia and Leo ___ ready.",
              "players": 2
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c9-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "104–110",
          "items": [
            {
              "type": "pick",
              "sentence": "The news is good.",
              "zh": "news 末尾有 s，标准搭配选？",
              "target": "整句",
              "answer": "is",
              "options": [
                "is",
                "are"
              ],
              "why": "news 在本用法按不可数单数配 is，不凭词尾 s 直接判复数。",
              "icon": "post"
            },
            {
              "type": "pick",
              "sentence": "The scissors are on the table.",
              "zh": "普通指一把剪刀时，scissors 常配？",
              "target": "整句",
              "answer": "are",
              "options": [
                "are",
                "is"
              ],
              "why": "scissors 形态按复数；a pair of scissors 的数量核心另看 pair。",
              "icon": "star"
            },
            {
              "type": "pick",
              "sentence": "A pair of scissors is here.",
              "zh": "本例控制 is 的核心是什么？",
              "target": "整句",
              "answer": "pair",
              "options": [
                "pair",
                "scissors"
              ],
              "why": "a pair 是单数核心，of scissors 提供说明。",
              "icon": "star"
            },
            {
              "type": "pick",
              "sentence": "Everyone has a ticket.",
              "zh": "every 个人很多，为什么用 has？",
              "target": "整句",
              "answer": "everyone 在标准搭配中按单数",
              "options": [
                "everyone 在标准搭配中按单数",
                "因为最近的 ticket 是单数"
              ],
              "why": "主语 everyone 控制动词，不是宾语 ticket 控制。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "The team is ready. / The team are ready.",
              "zh": "集合名词在不同英语变体或整体/成员视角中是否可能不同？",
              "target": "整句",
              "answer": "可能，需看变体与语境",
              "options": [
                "可能，需看变体与语境",
                "不可能，只有一种永远正确"
              ],
              "why": "不同英语变体对集合名词一致有差异；本套单选只使用明确限定的场景。",
              "icon": "music"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "谁握指挥棒",
          "body": "插入的复数不能抢单数核心的指挥棒。 点两种观察方式，再用自己的话解释区别。",
          "example": "The basket of flowers is ready.",
          "zh": "一只篮子控制 is，flowers 是内部说明。",
          "visual": "music",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c9",
            "kind": "atlas",
            "scene": "agreement",
            "states": [
              {
                "value": "one",
                "label": "观察一",
                "text": "The basket of flowers is ready.",
                "note": "一只篮子控制 is，flowers 是内部说明。",
                "art": "music"
              },
              {
                "value": "many",
                "label": "观察二",
                "text": "The baskets of flowers are ready.",
                "note": "几只篮子控制 are，核心数变了。",
                "art": "music"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "The baskets of flowers are ready.",
          "zh": "几只篮子控制 are，核心数变了。",
          "visual": "music",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c10": {
      "missions": [
        {
          "id": "c10-r1",
          "title": "换焦点，保留时间和角色",
          "pages": "111–117",
          "items": [
            {
              "type": "passive",
              "sentence": "The sign was painted by Mia yesterday.",
              "zh": "改从 the sign 说起，保持 过去事件 和原角色。",
              "axes": {
                "focus": [
                  [
                    "agent",
                    "发出动作方"
                  ],
                  [
                    "patient",
                    "动作涉及对象"
                  ]
                ],
                "film": [
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
              "why": "焦点变化但事件角色保持。被动用 was painted，不能在换焦点时把时间或数量改掉。",
              "icon": "camera",
              "actor": "Mia",
              "patient": "the sign",
              "active": "Mia painted the sign yesterday.",
              "frames": {
                "agent": "Mia {film} the sign yesterday.",
                "patient": "The sign {film} by Mia yesterday."
              },
              "time": "过去事件",
              "objectArt": "paint"
            },
            {
              "type": "passive",
              "sentence": "The boxes are being carried by Leo now.",
              "zh": "改从 the boxes 说起，保持 正在进行 和原角色。",
              "axes": {
                "focus": [
                  [
                    "agent",
                    "发出动作方"
                  ],
                  [
                    "patient",
                    "动作涉及对象"
                  ]
                ],
                "film": [
                  [
                    "are being carried",
                    "are being carried"
                  ],
                  [
                    "were carried",
                    "were carried"
                  ]
                ]
              },
              "expected": {
                "focus": "patient",
                "film": "are being carried"
              },
              "answer": "{\"focus\":\"patient\",\"film\":\"are being carried\"}",
              "why": "焦点变化但事件角色保持。被动用 are being carried，不能在换焦点时把时间或数量改掉。",
              "icon": "camera",
              "actor": "Leo",
              "patient": "the boxes",
              "active": "Leo is carrying the boxes now.",
              "frames": {
                "agent": "Leo {film} the boxes now.",
                "patient": "The boxes {film} by Leo now."
              },
              "time": "正在进行",
              "objectArt": "box"
            },
            {
              "type": "passive",
              "sentence": "The gate has been repaired by Mia.",
              "zh": "改从 the gate 说起，保持 到现在已完成 和原角色。",
              "axes": {
                "focus": [
                  [
                    "agent",
                    "发出动作方"
                  ],
                  [
                    "patient",
                    "动作涉及对象"
                  ]
                ],
                "film": [
                  [
                    "has been repaired",
                    "has been repaired"
                  ],
                  [
                    "has repaired",
                    "has repaired"
                  ]
                ]
              },
              "expected": {
                "focus": "patient",
                "film": "has been repaired"
              },
              "answer": "{\"focus\":\"patient\",\"film\":\"has been repaired\"}",
              "why": "焦点变化但事件角色保持。被动用 has been repaired，不能在换焦点时把时间或数量改掉。",
              "icon": "camera",
              "actor": "Mia",
              "patient": "the gate",
              "active": "Mia has repaired the gate.",
              "frames": {
                "agent": "Mia {film} the gate.",
                "patient": "The gate {film} by Mia."
              },
              "time": "到现在已完成",
              "objectArt": "house"
            },
            {
              "type": "passive",
              "sentence": "The map will be printed by Leo tomorrow.",
              "zh": "改从 the map 说起，保持 未来事件 和原角色。",
              "axes": {
                "focus": [
                  [
                    "agent",
                    "发出动作方"
                  ],
                  [
                    "patient",
                    "动作涉及对象"
                  ]
                ],
                "film": [
                  [
                    "will be printed",
                    "will be printed"
                  ],
                  [
                    "was printed",
                    "was printed"
                  ]
                ]
              },
              "expected": {
                "focus": "patient",
                "film": "will be printed"
              },
              "answer": "{\"focus\":\"patient\",\"film\":\"will be printed\"}",
              "why": "焦点变化但事件角色保持。被动用 will be printed，不能在换焦点时把时间或数量改掉。",
              "icon": "camera",
              "actor": "Leo",
              "patient": "the map",
              "active": "Leo will print the map tomorrow.",
              "frames": {
                "agent": "Leo {film} the map tomorrow.",
                "patient": "The map {film} by Leo tomorrow."
              },
              "time": "未来事件",
              "objectArt": "map"
            },
            {
              "type": "passive",
              "sentence": "The room is cleaned by the helpers every day.",
              "zh": "改从 the room 说起，保持 日常安排 和原角色。",
              "axes": {
                "focus": [
                  [
                    "agent",
                    "发出动作方"
                  ],
                  [
                    "patient",
                    "动作涉及对象"
                  ]
                ],
                "film": [
                  [
                    "is cleaned",
                    "is cleaned"
                  ],
                  [
                    "are cleaned",
                    "are cleaned"
                  ]
                ]
              },
              "expected": {
                "focus": "patient",
                "film": "is cleaned"
              },
              "answer": "{\"focus\":\"patient\",\"film\":\"is cleaned\"}",
              "why": "焦点变化但事件角色保持。被动用 is cleaned，不能在换焦点时把时间或数量改掉。",
              "icon": "camera",
              "actor": "the helpers",
              "patient": "the room",
              "active": "The helpers clean the room every day.",
              "frames": {
                "agent": "The helpers {film} the room every day.",
                "patient": "The room {film} by the helpers every day."
              },
              "time": "日常安排",
              "objectArt": "house"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c10-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "111–117",
          "items": [
            {
              "type": "pick",
              "sentence": "The door is open.",
              "zh": "open 在这个状态句中一定是被动分词吗？",
              "target": "整句",
              "answer": "不是，open 在这里为形容词",
              "options": [
                "不是，open 在这里为形容词",
                "是，be 后总是被动"
              ],
              "why": "open 直接描述状态；不能看到 be 后有词就断言被动。",
              "icon": "door"
            },
            {
              "type": "pick",
              "sentence": "The sign was painted yesterday.",
              "zh": "没有 by 短语是否仍能有被动？",
              "target": "整句",
              "answer": "可以，动作发出者可不说",
              "options": [
                "可以，动作发出者可不说",
                "不可以，必须出现 by"
              ],
              "why": "被动不要求一定写出施事；可因未知、不重要或焦点而省略。",
              "icon": "paint"
            },
            {
              "type": "pick",
              "sentence": "Mia arrived.",
              "zh": "能把 arrive 本用法直接改成 Mia was arrived 吗？",
              "target": "整句",
              "answer": "不能这样改，arrive 在这里不及物",
              "options": [
                "不能这样改，arrive 在这里不及物",
                "能，任何动词都直接加 be"
              ],
              "why": "本用法没有可提为被动主语的直接宾语，不机械给任意动词加被动。",
              "icon": "house"
            },
            {
              "type": "pick",
              "sentence": "The boxes are being moved.",
              "zh": "being 在本句帮助保留什么？",
              "target": "整句",
              "answer": "进行中的被动",
              "options": [
                "进行中的被动",
                "只有一般过去"
              ],
              "why": "are being moved 为现在进行被动，不等同于 are moved 的一般表达。",
              "icon": "box"
            },
            {
              "type": "pick",
              "sentence": "The map has been printed.",
              "zh": "主语 map 在事件中是？",
              "target": "整句",
              "answer": "受到打印的对象",
              "options": [
                "受到打印的对象",
                "打印地图的人"
              ],
              "why": "被动主语未必是动作执行者，识别语义角色比只按主语名称更重要。",
              "icon": "map"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "换机位不倒转箭头",
          "body": "被动改变句子起点，事件施受保持。 点两种观察方式，再用自己的话解释区别。",
          "example": "Mia painted the sign.",
          "zh": "动作方向：Mia → sign。",
          "visual": "paint",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c10",
            "kind": "atlas",
            "scene": "passive",
            "states": [
              {
                "value": "agent",
                "label": "观察一",
                "text": "Mia painted the sign.",
                "note": "动作方向：Mia → sign。",
                "art": "paint"
              },
              {
                "value": "patient",
                "label": "观察二",
                "text": "The sign was painted by Mia.",
                "note": "从 sign 说起，动作仍是 Mia → sign。",
                "art": "paint"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "The sign was painted by Mia.",
          "zh": "从 sign 说起，动作仍是 Mia → sign。",
          "visual": "paint",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c11": {
      "missions": [
        {
          "id": "c11-r1",
          "title": "位置、路径和到达分开看",
          "pages": "118–133",
          "items": [
            {
              "type": "treasure",
              "sentence": "The star is beside the box.",
              "zh": "把星星放到箱旁，不在箱内。",
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
                    "beside the box",
                    "beside the box"
                  ],
                  [
                    "in the box",
                    "in the box"
                  ]
                ]
              },
              "expected": {
                "spot": "beside",
                "phrase": "beside the box"
              },
              "answer": "{\"spot\":\"beside\",\"phrase\":\"beside the box\"}",
              "why": "beside the box 保留本题的空间关系；星星的位置和语言必须对应。",
              "icon": "map",
              "mapKind": "space",
              "frame": "The star is {phrase}."
            },
            {
              "type": "treasure",
              "sentence": "The star is behind the box.",
              "zh": "把星星放到箱后，被箱子部分遮住。",
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
              "why": "behind the box 保留本题的空间关系；星星的位置和语言必须对应。",
              "icon": "map",
              "mapKind": "space",
              "frame": "The star is {phrase}."
            },
            {
              "type": "treasure",
              "sentence": "The star moves into the box.",
              "zh": "从外面进入箱子。",
              "axes": {
                "spot": [
                  [
                    "enter",
                    "进入箱子"
                  ],
                  [
                    "exit",
                    "离开箱子"
                  ],
                  [
                    "toward",
                    "朝向小屋"
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
                  ]
                ]
              },
              "expected": {
                "spot": "enter",
                "phrase": "into the box"
              },
              "answer": "{\"spot\":\"enter\",\"phrase\":\"into the box\"}",
              "why": "方向与静止位置不同。into the box 符合本题路径，towards 不单独保证到达。",
              "icon": "map",
              "mapKind": "route",
              "frame": "The star moves {phrase}."
            },
            {
              "type": "treasure",
              "sentence": "The star moves out of the box.",
              "zh": "从箱内移到外面。",
              "axes": {
                "spot": [
                  [
                    "enter",
                    "进入箱子"
                  ],
                  [
                    "exit",
                    "离开箱子"
                  ],
                  [
                    "toward",
                    "朝向小屋"
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
                  ]
                ]
              },
              "expected": {
                "spot": "exit",
                "phrase": "out of the box"
              },
              "answer": "{\"spot\":\"exit\",\"phrase\":\"out of the box\"}",
              "why": "方向与静止位置不同。out of the box 符合本题路径，towards 不单独保证到达。",
              "icon": "map",
              "mapKind": "route",
              "frame": "The star moves {phrase}."
            },
            {
              "type": "treasure",
              "sentence": "The star moves towards the house.",
              "zh": "朝小屋走，但不保证已经到屋内。",
              "axes": {
                "spot": [
                  [
                    "enter",
                    "进入箱子"
                  ],
                  [
                    "exit",
                    "离开箱子"
                  ],
                  [
                    "toward",
                    "朝向小屋"
                  ]
                ],
                "phrase": [
                  [
                    "towards the house",
                    "towards the house"
                  ],
                  [
                    "in the house",
                    "in the house"
                  ]
                ]
              },
              "expected": {
                "spot": "toward",
                "phrase": "towards the house"
              },
              "answer": "{\"spot\":\"toward\",\"phrase\":\"towards the house\"}",
              "why": "方向与静止位置不同。towards the house 符合本题路径，towards 不单独保证到达。",
              "icon": "map",
              "mapKind": "route",
              "frame": "The star moves {phrase}."
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c11-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "118–133",
          "items": [
            {
              "type": "pick",
              "sentence": "Mia walks towards the gate.",
              "zh": "是否仅凭 towards 就保证她到了门口？",
              "target": "整句",
              "answer": "不保证，只给出方向",
              "options": [
                "不保证，只给出方向",
                "保证，方向词都表示到达"
              ],
              "why": "towards 指朝向；到达结果需由其他表达或语境交代。",
              "icon": "map"
            },
            {
              "type": "pick",
              "sentence": "The sign near the gate is blue.",
              "zh": "near the gate 在此修饰？",
              "target": "整句",
              "answer": "sign",
              "options": [
                "sign",
                "blue 的程度"
              ],
              "why": "它辨认门边的标牌，作名词修饰；并非每个介词短语都修饰动词。",
              "icon": "post"
            },
            {
              "type": "pick",
              "sentence": "Mia waits near the gate.",
              "zh": "near the gate 在此主要补充？",
              "target": "整句",
              "answer": "等待的地点",
              "options": [
                "等待的地点",
                "Mia 的职业"
              ],
              "why": "相同短语可在另一句补充动作地点，要看连接关系。",
              "icon": "house"
            },
            {
              "type": "pick",
              "sentence": "Mia is interested in drawing.",
              "zh": "介词 in 后本题选的活动形式是？",
              "target": "整句",
              "answer": "drawing",
              "options": [
                "drawing",
                "draw"
              ],
              "why": "介词后可接 -ing 活动，具体搭配为 interested in drawing。",
              "icon": "paint"
            },
            {
              "type": "pick",
              "sentence": "We meet on Monday at nine.",
              "zh": "本题两个时间短语分别是？",
              "target": "整句",
              "answer": "on + 星期，at + 钟点",
              "options": [
                "on + 星期，at + 钟点",
                "at + 星期，on + 钟点"
              ],
              "why": "按明确时间单位认识常见搭配，不把所有时间都用同一个介词。",
              "icon": "clock"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "在里面与进入里面",
          "body": "位置不等于移动路径，先看是否跨过边界。 点两种观察方式，再用自己的话解释区别。",
          "example": "The star is in the box.",
          "zh": "静止位置：星星在内部。",
          "visual": "map",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c11",
            "kind": "atlas",
            "scene": "space",
            "states": [
              {
                "value": "inside",
                "label": "观察一",
                "text": "The star is in the box.",
                "note": "静止位置：星星在内部。",
                "art": "map"
              },
              {
                "value": "enter",
                "label": "观察二",
                "text": "The star moves into the box.",
                "note": "路径：从外到内，跨过边界。",
                "art": "map"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "The star moves into the box.",
          "zh": "路径：从外到内，跨过边界。",
          "visual": "map",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c12": {
      "missions": [
        {
          "id": "c12-r1",
          "title": "胶囊内部语序与外部泊位",
          "pages": "137–148",
          "items": [
            {
              "type": "capsule",
              "sentence": "I wonder when the show starts.",
              "zh": "想知道演出什么时候开始，嵌入普通陈述语序。",
              "axes": {
                "clause": [
                  [
                    "when the show starts",
                    "when the show starts"
                  ],
                  [
                    "when does the show start",
                    "when does the show start"
                  ]
                ],
                "dock": [
                  [
                    "S",
                    "主语"
                  ],
                  [
                    "O",
                    "动词宾语"
                  ],
                  [
                    "P",
                    "表语"
                  ],
                  [
                    "C",
                    "说明宾语"
                  ],
                  [
                    "Op",
                    "介词宾语"
                  ]
                ]
              },
              "expected": {
                "clause": "when the show starts",
                "dock": "O"
              },
              "answer": "{\"clause\":\"when the show starts\",\"dock\":\"O\"}",
              "why": "整个 when the show starts 在主句中作动词宾语；从句内部也要成立，不能照搬直接问句的 do 倒装。",
              "icon": "capsule",
              "frame": "I wonder {clause}."
            },
            {
              "type": "capsule",
              "sentence": "What Leo made surprised us.",
              "zh": "里奥做出的东西整体使我们惊喜。",
              "axes": {
                "clause": [
                  [
                    "What Leo made",
                    "What Leo made"
                  ],
                  [
                    "What did Leo make",
                    "What did Leo make"
                  ]
                ],
                "dock": [
                  [
                    "S",
                    "主语"
                  ],
                  [
                    "O",
                    "动词宾语"
                  ],
                  [
                    "P",
                    "表语"
                  ],
                  [
                    "C",
                    "说明宾语"
                  ],
                  [
                    "Op",
                    "介词宾语"
                  ]
                ]
              },
              "expected": {
                "clause": "What Leo made",
                "dock": "S"
              },
              "answer": "{\"clause\":\"What Leo made\",\"dock\":\"S\"}",
              "why": "整个 What Leo made 在主句中作主语；从句内部也要成立，不能照搬直接问句的 do 倒装。",
              "icon": "capsule",
              "frame": "{clause} surprised us."
            },
            {
              "type": "capsule",
              "sentence": "The question is whether Mia can come.",
              "zh": "问题是米娅是否能来，用表语从句。",
              "axes": {
                "clause": [
                  [
                    "whether Mia can come",
                    "whether Mia can come"
                  ],
                  [
                    "if can Mia come",
                    "if can Mia come"
                  ]
                ],
                "dock": [
                  [
                    "S",
                    "主语"
                  ],
                  [
                    "O",
                    "动词宾语"
                  ],
                  [
                    "P",
                    "表语"
                  ],
                  [
                    "C",
                    "说明宾语"
                  ],
                  [
                    "Op",
                    "介词宾语"
                  ]
                ]
              },
              "expected": {
                "clause": "whether Mia can come",
                "dock": "P"
              },
              "answer": "{\"clause\":\"whether Mia can come\",\"dock\":\"P\"}",
              "why": "整个 whether Mia can come 在主句中作表语；从句内部也要成立，不能照搬直接问句的 do 倒装。",
              "icon": "capsule",
              "frame": "The question is {clause}."
            },
            {
              "type": "capsule",
              "sentence": "We talked about what Mia suggested.",
              "zh": "about 后装入米娅建议的内容。",
              "axes": {
                "clause": [
                  [
                    "what Mia suggested",
                    "what Mia suggested"
                  ],
                  [
                    "what did Mia suggest",
                    "what did Mia suggest"
                  ]
                ],
                "dock": [
                  [
                    "S",
                    "主语"
                  ],
                  [
                    "O",
                    "动词宾语"
                  ],
                  [
                    "P",
                    "表语"
                  ],
                  [
                    "C",
                    "说明宾语"
                  ],
                  [
                    "Op",
                    "介词宾语"
                  ]
                ]
              },
              "expected": {
                "clause": "what Mia suggested",
                "dock": "Op"
              },
              "answer": "{\"clause\":\"what Mia suggested\",\"dock\":\"Op\"}",
              "why": "整个 what Mia suggested 在主句中作介词宾语；从句内部也要成立，不能照搬直接问句的 do 倒装。",
              "icon": "capsule",
              "frame": "We talked about {clause}."
            },
            {
              "type": "capsule",
              "sentence": "I know who opened the gate.",
              "zh": "谁开的门，who 自身作嵌入从句主语。",
              "axes": {
                "clause": [
                  [
                    "who opened the gate",
                    "who opened the gate"
                  ],
                  [
                    "who did opened the gate",
                    "who did opened the gate"
                  ]
                ],
                "dock": [
                  [
                    "S",
                    "主语"
                  ],
                  [
                    "O",
                    "动词宾语"
                  ],
                  [
                    "P",
                    "表语"
                  ],
                  [
                    "C",
                    "说明宾语"
                  ],
                  [
                    "Op",
                    "介词宾语"
                  ]
                ]
              },
              "expected": {
                "clause": "who opened the gate",
                "dock": "O"
              },
              "answer": "{\"clause\":\"who opened the gate\",\"dock\":\"O\"}",
              "why": "整个 who opened the gate 在主句中作动词宾语；从句内部也要成立，不能照搬直接问句的 do 倒装。",
              "icon": "capsule",
              "frame": "I know {clause}."
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c12-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "137–148",
          "items": [
            {
              "type": "pick",
              "sentence": "I wonder who is ready.",
              "zh": "who 作从句主语，是否还必须加 do？",
              "target": "整句",
              "answer": "不必，who 自身作主语",
              "options": [
                "不必，who 自身作主语",
                "必须，所有问词后都加 do"
              ],
              "why": "主语疑问词不能被“陈述语序”口诀机械改坏；who is ready 自身成立。",
              "icon": "capsule"
            },
            {
              "type": "pick",
              "sentence": "What Mia needs is a map.",
              "zh": "哪一整组是主句主语？",
              "target": "整句",
              "answer": "What Mia needs",
              "options": [
                "What Mia needs",
                "Mia 单独"
              ],
              "why": "整个名词性从句作主语，Mia 是内部主语，不是整个主句的唯一主语。",
              "icon": "map"
            },
            {
              "type": "pick",
              "sentence": "I know that Mia is ready.",
              "zh": "that 本句是否本身表示一个被需要的物品？",
              "target": "整句",
              "answer": "不是，它在此引出陈述内容",
              "options": [
                "不是，它在此引出陈述内容",
                "是，that 一定是实物代词"
              ],
              "why": "that 在此为连接成分，不承担与 what 同样的从句内部对象角色。",
              "icon": "capsule"
            },
            {
              "type": "pick",
              "sentence": "I know what Mia needs.",
              "zh": "what 同时关联哪项功能？",
              "target": "整句",
              "answer": "needs 的对象内容",
              "options": [
                "needs 的对象内容",
                "只有多余装饰"
              ],
              "why": "what 引出所需的东西，并与 needs 的对象关系对应，不能在本例随意换 that。",
              "icon": "map"
            },
            {
              "type": "pick",
              "sentence": "It is clear that the show is ready.",
              "zh": "it 先占位后面是什么？",
              "target": "整句",
              "answer": "整个 that 从句内容",
              "options": [
                "整个 that 从句内容",
                "只有 show 这个单词"
              ],
              "why": "与 it 专题衔接：后置的是内容整体，不把任何长结构都自由搬移。",
              "icon": "star"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "胶囊内部与外部",
          "body": "从句内部按具体结构排列，整体再装进主句位置。 点两种观察方式，再用自己的话解释区别。",
          "example": "Where does Mia live?",
          "zh": "直接问句可使用 does 倒装。",
          "visual": "capsule",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c12",
            "kind": "atlas",
            "scene": "clause",
            "states": [
              {
                "value": "direct",
                "label": "观察一",
                "text": "Where does Mia live?",
                "note": "直接问句可使用 does 倒装。",
                "art": "capsule"
              },
              {
                "value": "embedded",
                "label": "观察二",
                "text": "I know where Mia lives.",
                "note": "嵌入内容：Mia 在 lives 前，整体作 know 的宾语。",
                "art": "capsule"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "I know where Mia lives.",
          "zh": "嵌入内容：Mia 在 lives 前，整体作 know 的宾语。",
          "visual": "capsule",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c13": {
      "missions": [
        {
          "id": "c13-r1",
          "title": "先连对象，再开逗号闸门",
          "pages": "152–161",
          "items": [
            {
              "type": "relative",
              "sentence": "The helper who wears a red hat is at the gate.",
              "zh": "用红帽线索认出哪位助手。",
              "axes": {
                "head": [
                  [
                    "The helper",
                    "The helper"
                  ],
                  [
                    "The map",
                    "The map"
                  ]
                ],
                "clue": [
                  [
                    "who wears a red hat",
                    "who wears a red hat"
                  ],
                  [
                    "which is folded",
                    "which is folded"
                  ]
                ],
                "mode": [
                  [
                    "defining",
                    "限定辨认"
                  ],
                  [
                    "extra",
                    "补充旁注"
                  ]
                ]
              },
              "expected": {
                "head": "The helper",
                "clue": "who wears a red hat",
                "mode": "defining"
              },
              "answer": "{\"head\":\"The helper\",\"clue\":\"who wears a red hat\",\"mode\":\"defining\"}",
              "why": "先行词为 The helper，从句保留本题人物和关系；旁注用逗号与主句隔开，限定辨认本例不用逗号。",
              "icon": "search",
              "frames": {
                "defining": "{head} {clause} is at the gate.",
                "extra": "{head}, {clause}, is at the gate."
              },
              "anchorArt": "portrait"
            },
            {
              "type": "relative",
              "sentence": "The sign which points to the garden is blue.",
              "zh": "用指向花园的线索辨认标牌。",
              "axes": {
                "head": [
                  [
                    "The sign",
                    "The sign"
                  ],
                  [
                    "The helper",
                    "The helper"
                  ]
                ],
                "clue": [
                  [
                    "which points to the garden",
                    "which points to the garden"
                  ],
                  [
                    "who carries a bag",
                    "who carries a bag"
                  ]
                ],
                "mode": [
                  [
                    "defining",
                    "限定辨认"
                  ],
                  [
                    "extra",
                    "补充旁注"
                  ]
                ]
              },
              "expected": {
                "head": "The sign",
                "clue": "which points to the garden",
                "mode": "defining"
              },
              "answer": "{\"head\":\"The sign\",\"clue\":\"which points to the garden\",\"mode\":\"defining\"}",
              "why": "先行词为 The sign，从句保留本题人物和关系；旁注用逗号与主句隔开，限定辨认本例不用逗号。",
              "icon": "search",
              "frames": {
                "defining": "{head} {clause} is blue.",
                "extra": "{head}, {clause}, is blue."
              },
              "anchorArt": "post"
            },
            {
              "type": "relative",
              "sentence": "Mia, who is our guide, is here.",
              "zh": "Mia 已明确，补充她是导游的旁注。",
              "axes": {
                "head": [
                  [
                    "Mia",
                    "Mia"
                  ],
                  [
                    "The gate",
                    "The gate"
                  ]
                ],
                "clue": [
                  [
                    "who is our guide",
                    "who is our guide"
                  ],
                  [
                    "which is blue",
                    "which is blue"
                  ]
                ],
                "mode": [
                  [
                    "defining",
                    "限定辨认"
                  ],
                  [
                    "extra",
                    "补充旁注"
                  ]
                ]
              },
              "expected": {
                "head": "Mia",
                "clue": "who is our guide",
                "mode": "extra"
              },
              "answer": "{\"head\":\"Mia\",\"clue\":\"who is our guide\",\"mode\":\"extra\"}",
              "why": "先行词为 Mia，从句保留本题人物和关系；旁注用逗号与主句隔开，限定辨认本例不用逗号。",
              "icon": "search",
              "frames": {
                "defining": "{head} {clause} is here.",
                "extra": "{head}, {clause}, is here."
              },
              "anchorArt": "portrait"
            },
            {
              "type": "relative",
              "sentence": "The box that Leo made is on the table.",
              "zh": "辨认里奥做的盒子，别颠倒制作者。",
              "axes": {
                "head": [
                  [
                    "The box",
                    "The box"
                  ],
                  [
                    "The helper",
                    "The helper"
                  ]
                ],
                "clue": [
                  [
                    "that Leo made",
                    "that Leo made"
                  ],
                  [
                    "who made Leo",
                    "who made Leo"
                  ]
                ],
                "mode": [
                  [
                    "defining",
                    "限定辨认"
                  ],
                  [
                    "extra",
                    "补充旁注"
                  ]
                ]
              },
              "expected": {
                "head": "The box",
                "clue": "that Leo made",
                "mode": "defining"
              },
              "answer": "{\"head\":\"The box\",\"clue\":\"that Leo made\",\"mode\":\"defining\"}",
              "why": "先行词为 The box，从句保留本题人物和关系；旁注用逗号与主句隔开，限定辨认本例不用逗号。",
              "icon": "search",
              "frames": {
                "defining": "{head} {clause} is on the table.",
                "extra": "{head}, {clause}, is on the table."
              },
              "anchorArt": "box"
            },
            {
              "type": "relative",
              "sentence": "Leo, whose bag is blue, will help us.",
              "zh": "已明确 Leo，旁注他的包是蓝色。",
              "axes": {
                "head": [
                  [
                    "Leo",
                    "Leo"
                  ],
                  [
                    "The book",
                    "The book"
                  ]
                ],
                "clue": [
                  [
                    "whose bag is blue",
                    "whose bag is blue"
                  ],
                  [
                    "which is blue",
                    "which is blue"
                  ]
                ],
                "mode": [
                  [
                    "defining",
                    "限定辨认"
                  ],
                  [
                    "extra",
                    "补充旁注"
                  ]
                ]
              },
              "expected": {
                "head": "Leo",
                "clue": "whose bag is blue",
                "mode": "extra"
              },
              "answer": "{\"head\":\"Leo\",\"clue\":\"whose bag is blue\",\"mode\":\"extra\"}",
              "why": "先行词为 Leo，从句保留本题人物和关系；旁注用逗号与主句隔开，限定辨认本例不用逗号。",
              "icon": "search",
              "frames": {
                "defining": "{head} {clause} will help us.",
                "extra": "{head}, {clause}, will help us."
              },
              "anchorArt": "bag"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c13-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "152–161",
          "items": [
            {
              "type": "pick",
              "sentence": "The map that Mia drew is here.",
              "zh": "that 在从句里对应什么角色？",
              "target": "整句",
              "answer": "drew 的宾语",
              "options": [
                "drew 的宾语",
                "整个主句的谓语"
              ],
              "why": "Mia drew the map 中 map 对应宾语；不能看到 that 就说它一定作主语。",
              "icon": "map"
            },
            {
              "type": "pick",
              "sentence": "The helper who opened the gate is Mia.",
              "zh": "这里 who 可否不加其他改动就删？",
              "target": "整句",
              "answer": "不能，who 在从句里作主语",
              "options": [
                "不能，who 在从句里作主语",
                "可以，所有关系词都可删"
              ],
              "why": "限定关系从句主语关系词不能按宾语省略法直接删掉。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "The map Mia drew is here.",
              "zh": "本例为什么可不写宾语关系词？",
              "target": "整句",
              "answer": "限定从句里该位置对应宾语",
              "options": [
                "限定从句里该位置对应宾语",
                "因为所有从句都无须连接"
              ],
              "why": "本例是限定的宾语关系词可省条件，不能推广到非限定或主语位置。",
              "icon": "map"
            },
            {
              "type": "pick",
              "sentence": "Mia, who is our guide, is here.",
              "zh": "逗号本题表达什么？",
              "target": "整句",
              "answer": "对已明确 Mia 的补充说明",
              "options": [
                "对已明确 Mia 的补充说明",
                "从许多 Mia 中靠此句唯一认出"
              ],
              "why": "旁注与限定信息不同，逗号不是任意装饰；解释按明确语境判断。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "The box whose lid is blue is here.",
              "zh": "whose lid 表达谁的盖子？",
              "target": "整句",
              "answer": "box 的盖子",
              "options": [
                "box 的盖子",
                "说话者的手"
              ],
              "why": "whose 可连接物的所属关系，不是只能描述人。",
              "icon": "box"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "线索与旁注的闸门",
          "body": "限定帮助辨认，旁注补充已明确对象；逗号不是随意装饰。 点两种观察方式，再用自己的话解释区别。",
          "example": "The helper who wears red is Mia.",
          "zh": "用红衣线索辨认哪一位 helper。",
          "visual": "search",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c13",
            "kind": "atlas",
            "scene": "relative",
            "states": [
              {
                "value": "identify",
                "label": "观察一",
                "text": "The helper who wears red is Mia.",
                "note": "用红衣线索辨认哪一位 helper。",
                "art": "search"
              },
              {
                "value": "note",
                "label": "观察二",
                "text": "Mia, who is our guide, is here.",
                "note": "Mia 已明确，逗号包住导游旁注。",
                "art": "search"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "Mia, who is our guide, is here.",
          "zh": "Mia 已明确，逗号包住导游旁注。",
          "visual": "search",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c14": {
      "missions": [
        {
          "id": "c14-r1",
          "title": "让连接词决定故事方向",
          "pages": "162–168",
          "items": [
            {
              "type": "chain",
              "sentence": "We move inside if it rains.",
              "zh": "本题说如果下雨就进屋，不断言已经下雨。",
              "axes": {
                "relation": [
                  [
                    "time",
                    "时间"
                  ],
                  [
                    "cause",
                    "原因"
                  ],
                  [
                    "condition",
                    "条件"
                  ],
                  [
                    "concession",
                    "让步"
                  ],
                  [
                    "purpose",
                    "目的"
                  ]
                ],
                "link": [
                  [
                    "if",
                    "if"
                  ],
                  [
                    "because",
                    "because"
                  ]
                ]
              },
              "expected": {
                "relation": "condition",
                "link": "if"
              },
              "answer": "{\"relation\":\"condition\",\"link\":\"if\"}",
              "why": "if 与题目要求的条件关系对应，连接相邻事件并不能自动证明因果或结果。",
              "icon": "link",
              "frame": "We move inside {link} it rains.",
              "left": "We move inside",
              "right": "it rains",
              "leftArt": "house",
              "rightArt": "cloud"
            },
            {
              "type": "chain",
              "sentence": "Mia checks the map before she leaves.",
              "zh": "先看地图，再出发。",
              "axes": {
                "relation": [
                  [
                    "time",
                    "时间"
                  ],
                  [
                    "cause",
                    "原因"
                  ],
                  [
                    "condition",
                    "条件"
                  ],
                  [
                    "concession",
                    "让步"
                  ],
                  [
                    "purpose",
                    "目的"
                  ]
                ],
                "link": [
                  [
                    "before",
                    "before"
                  ],
                  [
                    "after",
                    "after"
                  ]
                ]
              },
              "expected": {
                "relation": "time",
                "link": "before"
              },
              "answer": "{\"relation\":\"time\",\"link\":\"before\"}",
              "why": "before 与题目要求的时间关系对应，连接相邻事件并不能自动证明因果或结果。",
              "icon": "link",
              "frame": "Mia checks the map {link} she leaves.",
              "left": "Mia checks the map",
              "right": "she leaves",
              "leftArt": "map",
              "rightArt": "fox"
            },
            {
              "type": "chain",
              "sentence": "Leo carries a lamp because it is dark.",
              "zh": "把天黑明确说成带灯的原因。",
              "axes": {
                "relation": [
                  [
                    "time",
                    "时间"
                  ],
                  [
                    "cause",
                    "原因"
                  ],
                  [
                    "condition",
                    "条件"
                  ],
                  [
                    "concession",
                    "让步"
                  ],
                  [
                    "purpose",
                    "目的"
                  ]
                ],
                "link": [
                  [
                    "because",
                    "because"
                  ],
                  [
                    "although",
                    "although"
                  ]
                ]
              },
              "expected": {
                "relation": "cause",
                "link": "because"
              },
              "answer": "{\"relation\":\"cause\",\"link\":\"because\"}",
              "why": "because 与题目要求的原因关系对应，连接相邻事件并不能自动证明因果或结果。",
              "icon": "link",
              "frame": "Leo carries a lamp {link} it is dark.",
              "left": "Leo carries a lamp",
              "right": "it is dark",
              "leftArt": "star",
              "rightArt": "moon"
            },
            {
              "type": "chain",
              "sentence": "Mia helps although she is tired.",
              "zh": "虽然疲倦仍帮忙，不把疲倦说成帮忙原因。",
              "axes": {
                "relation": [
                  [
                    "time",
                    "时间"
                  ],
                  [
                    "cause",
                    "原因"
                  ],
                  [
                    "condition",
                    "条件"
                  ],
                  [
                    "concession",
                    "让步"
                  ],
                  [
                    "purpose",
                    "目的"
                  ]
                ],
                "link": [
                  [
                    "although",
                    "although"
                  ],
                  [
                    "because",
                    "because"
                  ]
                ]
              },
              "expected": {
                "relation": "concession",
                "link": "although"
              },
              "answer": "{\"relation\":\"concession\",\"link\":\"although\"}",
              "why": "although 与题目要求的让步关系对应，连接相邻事件并不能自动证明因果或结果。",
              "icon": "link",
              "frame": "Mia helps {link} she is tired.",
              "left": "Mia helps",
              "right": "she is tired",
              "leftArt": "portrait",
              "rightArt": "moon"
            },
            {
              "type": "chain",
              "sentence": "We speak slowly so that everyone can follow.",
              "zh": "慢说是为了大家能跟上，不保证目的必然实现。",
              "axes": {
                "relation": [
                  [
                    "time",
                    "时间"
                  ],
                  [
                    "cause",
                    "原因"
                  ],
                  [
                    "condition",
                    "条件"
                  ],
                  [
                    "concession",
                    "让步"
                  ],
                  [
                    "purpose",
                    "目的"
                  ]
                ],
                "link": [
                  [
                    "so that",
                    "so that"
                  ],
                  [
                    "even though",
                    "even though"
                  ]
                ]
              },
              "expected": {
                "relation": "purpose",
                "link": "so that"
              },
              "answer": "{\"relation\":\"purpose\",\"link\":\"so that\"}",
              "why": "so that 与题目要求的目的关系对应，连接相邻事件并不能自动证明因果或结果。",
              "icon": "link",
              "frame": "We speak slowly {link} everyone can follow.",
              "left": "We speak slowly",
              "right": "everyone can follow",
              "leftArt": "music",
              "rightArt": "portrait"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c14-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "162–168",
          "items": [
            {
              "type": "pick",
              "sentence": "I will call when the show starts.",
              "zh": "明确未来时间从句，本题常用？",
              "target": "整句",
              "answer": "starts",
              "options": [
                "starts",
                "will start"
              ],
              "why": "普通未来时间从句用现在形式表达未来，不机械两边都加 will。",
              "icon": "clock"
            },
            {
              "type": "pick",
              "sentence": "Unless it rains, we will go outside.",
              "zh": "本题 unless 大致表示？",
              "target": "整句",
              "answer": "如果不下雨",
              "options": [
                "如果不下雨",
                "因为正在下雨"
              ],
              "why": "unless 引出否定条件，不断言雨已经发生；不能一律和任何 if not 脱离语境互换。",
              "icon": "cloud"
            },
            {
              "type": "pick",
              "sentence": "Although Mia is tired, she helps.",
              "zh": "本题中可再机械加一个 but 连接主句吗？",
              "target": "整句",
              "answer": "本课标准结构不这样叠加",
              "options": [
                "本课标准结构不这样叠加",
                "必须同时 although 和 but"
              ],
              "why": "本课训练 although 从句加主句，不把两种连接结构机械叠加。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "After Leo arrived, Mia left.",
              "zh": "明确事件先后为？",
              "target": "整句",
              "answer": "Leo 到达在先，Mia 离开在后",
              "options": [
                "Leo 到达在先，Mia 离开在后",
                "Mia 离开在先"
              ],
              "why": "after 的具体连接决定先后，不按从左到右或谁先出场猜。",
              "icon": "clock"
            },
            {
              "type": "pick",
              "sentence": "We practise so that the show can go well.",
              "zh": "目的表达是否保证演出成功？",
              "target": "整句",
              "answer": "不保证，说明目标",
              "options": [
                "不保证，说明目标",
                "保证，目的就是结果"
              ],
              "why": "目的和已实现的结果不同，需要其他事实来确认成功。",
              "icon": "star"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "同一事件，关系不同",
          "body": "下雨与进屋不能只靠相邻位置判因果。 点两种观察方式，再用自己的话解释区别。",
          "example": "We go inside because it is raining.",
          "zh": "明确原因：因为下雨，所以进屋。",
          "visual": "cloud",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c14",
            "kind": "atlas",
            "scene": "logic",
            "states": [
              {
                "value": "cause",
                "label": "观察一",
                "text": "We go inside because it is raining.",
                "note": "明确原因：因为下雨，所以进屋。",
                "art": "cloud"
              },
              {
                "value": "condition",
                "label": "观察二",
                "text": "We will go inside if it rains.",
                "note": "条件尚不保证发生；先看是否下雨。",
                "art": "cloud"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "We will go inside if it rains.",
          "zh": "条件尚不保证发生；先看是否下雨。",
          "visual": "cloud",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c15": {
      "missions": [
        {
          "id": "c15-r1",
          "title": "平行搭桥，同一把尺子比较",
          "pages": "169–178",
          "items": [
            {
              "type": "balance",
              "sentence": "Mia wants to sing and to dance.",
              "zh": "识别同层结构，并表达两项都发生或都想做。",
              "axes": {
                "level": [
                  [
                    "word",
                    "词语"
                  ],
                  [
                    "phrase",
                    "短语"
                  ],
                  [
                    "clause",
                    "完整分句"
                  ]
                ],
                "link": [
                  [
                    "and",
                    "and"
                  ],
                  [
                    "because",
                    "because"
                  ]
                ]
              },
              "expected": {
                "level": "phrase",
                "link": "and"
              },
              "answer": "{\"level\":\"phrase\",\"link\":\"and\"}",
              "why": "本例并列两个不定式短语，结构平行。 结构和连接意义一起看，不只看两边字数。",
              "icon": "bridge",
              "labKind": "bridge",
              "frame": "Mia wants {left} {link} {right}.",
              "left": "to sing",
              "right": "to dance"
            },
            {
              "type": "balance",
              "sentence": "Mia sings, and Leo dances.",
              "zh": "识别同层结构，并表达两项都发生或都想做。",
              "axes": {
                "level": [
                  [
                    "word",
                    "词语"
                  ],
                  [
                    "phrase",
                    "短语"
                  ],
                  [
                    "clause",
                    "完整分句"
                  ]
                ],
                "link": [
                  [
                    "and",
                    "and"
                  ],
                  [
                    "although",
                    "although"
                  ]
                ]
              },
              "expected": {
                "level": "clause",
                "link": "and"
              },
              "answer": "{\"level\":\"clause\",\"link\":\"and\"}",
              "why": "本例并列两个完整分句，参与者分别保留。 结构和连接意义一起看，不只看两边字数。",
              "icon": "bridge",
              "labKind": "bridge",
              "frame": "{left}, {link} {right}.",
              "left": "Mia sings",
              "right": "Leo dances"
            },
            {
              "type": "balance",
              "sentence": "Mia is taller than Leo.",
              "zh": "只比较身高：Mia 五格、Leo 三格。",
              "axes": {
                "measure": [
                  [
                    "height",
                    "身高"
                  ],
                  [
                    "books",
                    "书本数"
                  ],
                  [
                    "speed",
                    "速度"
                  ]
                ],
                "line": [
                  [
                    "Mia is taller than Leo.",
                    "Mia is taller than Leo."
                  ],
                  [
                    "Leo is taller than Mia.",
                    "Leo is taller than Mia."
                  ]
                ]
              },
              "expected": {
                "measure": "height",
                "line": "Mia is taller than Leo."
              },
              "answer": "{\"measure\":\"height\",\"line\":\"Mia is taller than Leo.\"}",
              "why": "只用所选维度的数据判断方向，不能拿身高去替代速度，刻度不表示人的优劣。",
              "icon": "bridge",
              "labKind": "scale",
              "readings": {
                "height": [
                  5,
                  3
                ],
                "books": [
                  2,
                  4
                ],
                "speed": [
                  3,
                  5
                ]
              }
            },
            {
              "type": "balance",
              "sentence": "Leo has more books than Mia.",
              "zh": "只比较书本数：Mia 两本、Leo 五本。",
              "axes": {
                "measure": [
                  [
                    "height",
                    "身高"
                  ],
                  [
                    "books",
                    "书本数"
                  ],
                  [
                    "speed",
                    "速度"
                  ]
                ],
                "line": [
                  [
                    "Leo has more books than Mia.",
                    "Leo has more books than Mia."
                  ],
                  [
                    "Mia has more books than Leo.",
                    "Mia has more books than Leo."
                  ]
                ]
              },
              "expected": {
                "measure": "books",
                "line": "Leo has more books than Mia."
              },
              "answer": "{\"measure\":\"books\",\"line\":\"Leo has more books than Mia.\"}",
              "why": "只用所选维度的数据判断方向，不能拿身高去替代速度，刻度不表示人的优劣。",
              "icon": "bridge",
              "labKind": "scale",
              "readings": {
                "height": [
                  4,
                  2
                ],
                "books": [
                  2,
                  5
                ],
                "speed": [
                  4,
                  2
                ]
              }
            },
            {
              "type": "balance",
              "sentence": "Leo runs faster than Mia.",
              "zh": "只比较速度示意：Mia 二格、Leo 五格。",
              "axes": {
                "measure": [
                  [
                    "height",
                    "身高"
                  ],
                  [
                    "books",
                    "书本数"
                  ],
                  [
                    "speed",
                    "速度"
                  ]
                ],
                "line": [
                  [
                    "Leo runs faster than Mia.",
                    "Leo runs faster than Mia."
                  ],
                  [
                    "Mia runs faster than Leo.",
                    "Mia runs faster than Leo."
                  ]
                ]
              },
              "expected": {
                "measure": "speed",
                "line": "Leo runs faster than Mia."
              },
              "answer": "{\"measure\":\"speed\",\"line\":\"Leo runs faster than Mia.\"}",
              "why": "只用所选维度的数据判断方向，不能拿身高去替代速度，刻度不表示人的优劣。",
              "icon": "bridge",
              "labKind": "scale",
              "readings": {
                "height": [
                  5,
                  2
                ],
                "books": [
                  4,
                  1
                ],
                "speed": [
                  2,
                  5
                ]
              }
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c15-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "169–178",
          "items": [
            {
              "type": "pick",
              "sentence": "Mia is taller than Leo.",
              "zh": "这句话是在比较？",
              "target": "整句",
              "answer": "Mia 与 Leo 的身高",
              "options": [
                "Mia 与 Leo 的身高",
                "Mia 的身高与 Leo 的书数"
              ],
              "why": "比较需要相同维度，不能偷偷更换对象属性。",
              "icon": "bridge"
            },
            {
              "type": "pick",
              "sentence": "This bag is heavier than that one.",
              "zh": "one 这里代替什么？",
              "target": "整句",
              "answer": "另一个 bag",
              "options": [
                "另一个 bag",
                "一个人的数量"
              ],
              "why": "one 在本例代替同类可数物 bag，避免重复而保留比较对象。",
              "icon": "bag"
            },
            {
              "type": "pick",
              "sentence": "Mia has more books than Leo does.",
              "zh": "does 帮助恢复什么？",
              "target": "整句",
              "answer": "Leo 拥有书的对应关系",
              "options": [
                "Leo 拥有书的对应关系",
                "Leo 跑步速度"
              ],
              "why": "比较从句用 does 可避免重复，恢复内容要保持同一关系。",
              "icon": "book"
            },
            {
              "type": "pick",
              "sentence": "Of the three boxes, this one is the lightest.",
              "zh": "给定三个盒子，最高级本题比较范围？",
              "target": "整句",
              "answer": "这三个盒子",
              "options": [
                "这三个盒子",
                "全世界所有盒子"
              ],
              "why": "最高级需要明确比较范围，不默认无限扩大到所有物品。",
              "icon": "box"
            },
            {
              "type": "pick",
              "sentence": "Mia likes singing and dancing.",
              "zh": "一定只能分析为两个完整句子删除而来吗？",
              "target": "整句",
              "answer": "不必，可直接认识同类活动并列",
              "options": [
                "不必，可直接认识同类活动并列",
                "是，所有并列只能先造两句再删"
              ],
              "why": "平行成分可直接理解，省略分析不是所有并列结构的唯一来源。",
              "icon": "music"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "保持同一把比较尺",
          "body": "选择身高或书本数会改变比较方向，不评价人的优劣。 点两种观察方式，再用自己的话解释区别。",
          "example": "Mia is taller than Leo.",
          "zh": "身高示意：Mia 五格，Leo 三格。",
          "visual": "bridge",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c15",
            "kind": "atlas",
            "scene": "compare",
            "states": [
              {
                "value": "height",
                "label": "观察一",
                "text": "Mia is taller than Leo.",
                "note": "身高示意：Mia 五格，Leo 三格。",
                "art": "bridge"
              },
              {
                "value": "books",
                "label": "观察二",
                "text": "Leo has more books than Mia.",
                "note": "书本数：Mia 两本，Leo 五本。",
                "art": "bridge"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "Leo has more books than Mia.",
          "zh": "书本数：Mia 两本，Leo 五本。",
          "visual": "bridge",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c16": {
      "missions": [
        {
          "id": "c16-r1",
          "title": "收藏活动，保留内部结构",
          "pages": "179–185",
          "items": [
            {
              "type": "museum",
              "sentence": "Making signs takes time.",
              "zh": "做标牌作为一项活动需要时间。",
              "axes": {
                "exhibit": [
                  [
                    "Making signs",
                    "Making signs"
                  ],
                  [
                    "Make signs",
                    "Make signs"
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
                    "主语的内容"
                  ],
                  [
                    "Op",
                    "介词后的活动"
                  ],
                  [
                    "C",
                    "活动名称说明"
                  ]
                ]
              },
              "expected": {
                "exhibit": "Making signs",
                "shelf": "S"
              },
              "answer": "{\"exhibit\":\"Making signs\",\"shelf\":\"S\"}",
              "why": "Making signs 作为整体进入本题搭配，内部仍可包含宾语或方式信息，不能任意替换成其他形式。",
              "icon": "ball",
              "frame": "{exhibit} takes time.",
              "activityArt": "paint"
            },
            {
              "type": "museum",
              "sentence": "Mia enjoys helping visitors.",
              "zh": "enjoy 后放帮助访客的活动。",
              "axes": {
                "exhibit": [
                  [
                    "helping visitors",
                    "helping visitors"
                  ],
                  [
                    "to help visitors",
                    "to help visitors"
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
                    "主语的内容"
                  ],
                  [
                    "Op",
                    "介词后的活动"
                  ],
                  [
                    "C",
                    "活动名称说明"
                  ]
                ]
              },
              "expected": {
                "exhibit": "helping visitors",
                "shelf": "O"
              },
              "answer": "{\"exhibit\":\"helping visitors\",\"shelf\":\"O\"}",
              "why": "helping visitors 作为整体进入本题搭配，内部仍可包含宾语或方式信息，不能任意替换成其他形式。",
              "icon": "ball",
              "frame": "Mia enjoys {exhibit}.",
              "activityArt": "portrait"
            },
            {
              "type": "museum",
              "sentence": "Leo left after checking the gate.",
              "zh": "after 后表示检查门这项活动。",
              "axes": {
                "exhibit": [
                  [
                    "checking the gate",
                    "checking the gate"
                  ],
                  [
                    "to check the gate",
                    "to check the gate"
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
                    "主语的内容"
                  ],
                  [
                    "Op",
                    "介词后的活动"
                  ],
                  [
                    "C",
                    "活动名称说明"
                  ]
                ]
              },
              "expected": {
                "exhibit": "checking the gate",
                "shelf": "Op"
              },
              "answer": "{\"exhibit\":\"checking the gate\",\"shelf\":\"Op\"}",
              "why": "checking the gate 作为整体进入本题搭配，内部仍可包含宾语或方式信息，不能任意替换成其他形式。",
              "icon": "ball",
              "frame": "Leo left after {exhibit}.",
              "activityArt": "house"
            },
            {
              "type": "museum",
              "sentence": "Her job is welcoming visitors.",
              "zh": "说明工作的具体内容，不是此刻进行。",
              "axes": {
                "exhibit": [
                  [
                    "welcoming visitors",
                    "welcoming visitors"
                  ],
                  [
                    "welcomes visitors",
                    "welcomes visitors"
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
                    "主语的内容"
                  ],
                  [
                    "Op",
                    "介词后的活动"
                  ],
                  [
                    "C",
                    "活动名称说明"
                  ]
                ]
              },
              "expected": {
                "exhibit": "welcoming visitors",
                "shelf": "P"
              },
              "answer": "{\"exhibit\":\"welcoming visitors\",\"shelf\":\"P\"}",
              "why": "welcoming visitors 作为整体进入本题搭配，内部仍可包含宾语或方式信息，不能任意替换成其他形式。",
              "icon": "ball",
              "frame": "Her job is {exhibit}.",
              "activityArt": "portrait"
            },
            {
              "type": "museum",
              "sentence": "We practise speaking clearly.",
              "zh": "practise 后接清晰表达这项活动。",
              "axes": {
                "exhibit": [
                  [
                    "speaking clearly",
                    "speaking clearly"
                  ],
                  [
                    "to speak clearly",
                    "to speak clearly"
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
                    "主语的内容"
                  ],
                  [
                    "Op",
                    "介词后的活动"
                  ],
                  [
                    "C",
                    "活动名称说明"
                  ]
                ]
              },
              "expected": {
                "exhibit": "speaking clearly",
                "shelf": "O"
              },
              "answer": "{\"exhibit\":\"speaking clearly\",\"shelf\":\"O\"}",
              "why": "speaking clearly 作为整体进入本题搭配，内部仍可包含宾语或方式信息，不能任意替换成其他形式。",
              "icon": "ball",
              "frame": "We practise {exhibit}.",
              "activityArt": "music"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c16-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "179–185",
          "items": [
            {
              "type": "pick",
              "sentence": "Making signs takes time.",
              "zh": "signs 在活动内部是？",
              "target": "整句",
              "answer": "making 的宾语",
              "options": [
                "making 的宾语",
                "整个主句的主语核心"
              ],
              "why": "Making signs 整体作主语，内部 signs 是 making 的对象。",
              "icon": "paint"
            },
            {
              "type": "pick",
              "sentence": "Mia is welcoming visitors.",
              "zh": "这里 -ing 与 is 合作做什么？",
              "target": "整句",
              "answer": "构成进行结构",
              "options": [
                "构成进行结构",
                "只能是名词性表语"
              ],
              "why": "主语 Mia 在此执行接待动作，不同于 Her job is welcoming visitors。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "Her job is welcoming visitors.",
              "zh": "按本题工作内容语境，后项说明？",
              "target": "整句",
              "answer": "job 的内容",
              "options": [
                "job 的内容",
                "此刻一定正在接待"
              ],
              "why": "工作内容不保证此刻在做；同样 -ing 要看主体和意义。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "We look forward to opening day.",
              "zh": "此处 to 后可接名词短语吗？",
              "target": "整句",
              "answer": "可以，to 是这个搭配中的介词",
              "options": [
                "可以，to 是这个搭配中的介词",
                "不行，to 后只能原形"
              ],
              "why": "look forward to 中 to 是介词，可接名词或 -ing，与 want to 不同。",
              "icon": "star"
            },
            {
              "type": "pick",
              "sentence": "Mia avoids wasting paper.",
              "zh": "wasting 后的 paper 表示？",
              "target": "整句",
              "answer": "浪费的对象",
              "options": [
                "浪费的对象",
                "避免活动的参与者"
              ],
              "why": "avoid 后接活动，内部 wasting 的宾语为 paper；整体功能与内部角色分开。",
              "icon": "post"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "活动内容和进行动作",
          "body": "同样 -ing，整体工作要看主语和语境。 点两种观察方式，再用自己的话解释区别。",
          "example": "Her job is painting signs.",
          "zh": "job 的内容：画标牌。",
          "visual": "paint",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c16",
            "kind": "atlas",
            "scene": "activity",
            "states": [
              {
                "value": "content",
                "label": "观察一",
                "text": "Her job is painting signs.",
                "note": "job 的内容：画标牌。",
                "art": "paint"
              },
              {
                "value": "progress",
                "label": "观察二",
                "text": "Mia is painting signs.",
                "note": "Mia 此刻在做：进行动作。",
                "art": "paint"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "Mia is painting signs.",
          "zh": "Mia 此刻在做：进行动作。",
          "visual": "paint",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c17": {
      "missions": [
        {
          "id": "c17-r1",
          "title": "连接参与者、用途与先前完成",
          "pages": "186–201",
          "items": [
            {
              "type": "launch",
              "sentence": "Mia asked Leo to carry the signs.",
              "zh": "Mia 请 Leo 搬标牌，谁搬？",
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
                    "sign",
                    "标牌本身"
                  ]
                ],
                "form": [
                  [
                    "to carry the signs",
                    "to carry the signs"
                  ],
                  [
                    "carrying the signs",
                    "carrying the signs"
                  ]
                ]
              },
              "expected": {
                "pilot": "Leo",
                "form": "to carry the signs"
              },
              "answer": "{\"pilot\":\"Leo\",\"form\":\"to carry the signs\"}",
              "why": "形式为 to carry the signs，参与者与动作关系按本题主体和搭配判断；不把所有 to 理解为未来，也不把物件都当执行者。",
              "icon": "rocket",
              "frame": "Mia asked Leo {form}.",
              "taskArt": "post"
            },
            {
              "type": "launch",
              "sentence": "Leo went out to buy paint.",
              "zh": "Leo 出门的目的是买颜料，不保证买到了。",
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
                    "sign",
                    "标牌本身"
                  ]
                ],
                "form": [
                  [
                    "to buy paint",
                    "to buy paint"
                  ],
                  [
                    "buying paint",
                    "buying paint"
                  ]
                ]
              },
              "expected": {
                "pilot": "Leo",
                "form": "to buy paint"
              },
              "answer": "{\"pilot\":\"Leo\",\"form\":\"to buy paint\"}",
              "why": "形式为 to buy paint，参与者与动作关系按本题主体和搭配判断；不把所有 to 理解为未来，也不把物件都当执行者。",
              "icon": "rocket",
              "frame": "Leo went out {form}.",
              "taskArt": "paint"
            },
            {
              "type": "launch",
              "sentence": "The map is easy to read.",
              "zh": "本题 easy to read 常见结构，读的人由语境泛指。",
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
                    "sign",
                    "标牌本身"
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
              "why": "形式为 to read，参与者与动作关系按本题主体和搭配判断；不把所有 to 理解为未来，也不把物件都当执行者。",
              "icon": "rocket",
              "frame": "The map is easy {form}.",
              "taskArt": "map"
            },
            {
              "type": "launch",
              "sentence": "Mia wants the sign to be repaired.",
              "zh": "把 sign 当作受到修理的对象，本题物件对应标牌。",
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
                    "sign",
                    "标牌本身"
                  ]
                ],
                "form": [
                  [
                    "to be repaired",
                    "to be repaired"
                  ],
                  [
                    "to repair",
                    "to repair"
                  ]
                ]
              },
              "expected": {
                "pilot": "sign",
                "form": "to be repaired"
              },
              "answer": "{\"pilot\":\"sign\",\"form\":\"to be repaired\"}",
              "why": "形式为 to be repaired，参与者与动作关系按本题主体和搭配判断；不把所有 to 理解为未来，也不把物件都当执行者。",
              "icon": "rocket",
              "frame": "Mia wants the sign {form}.",
              "taskArt": "post"
            },
            {
              "type": "launch",
              "sentence": "Leo seems to have left.",
              "zh": "现在看来 Leo 已经先前离开。",
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
                    "sign",
                    "标牌本身"
                  ]
                ],
                "form": [
                  [
                    "to have left",
                    "to have left"
                  ],
                  [
                    "to leave yesterday",
                    "to leave yesterday"
                  ]
                ]
              },
              "expected": {
                "pilot": "Leo",
                "form": "to have left"
              },
              "answer": "{\"pilot\":\"Leo\",\"form\":\"to have left\"}",
              "why": "形式为 to have left，参与者与动作关系按本题主体和搭配判断；不把所有 to 理解为未来，也不把物件都当执行者。",
              "icon": "rocket",
              "frame": "Leo seems {form}.",
              "taskArt": "house"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c17-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "186–201",
          "items": [
            {
              "type": "pick",
              "sentence": "Mia stopped to read the notice.",
              "zh": "米娅停下原来的事，是为了？",
              "target": "整句",
              "answer": "读通知",
              "options": [
                "读通知",
                "停止读通知"
              ],
              "why": "stop to read 的不定式给出目的，区别 stopped reading 停止阅读。",
              "icon": "post"
            },
            {
              "type": "pick",
              "sentence": "Mia remembered locking the gate.",
              "zh": "在她回忆已锁过门的本题语境，locking 表示？",
              "target": "整句",
              "answer": "回忆做过的锁门",
              "options": [
                "回忆做过的锁门",
                "提醒将来必须锁门"
              ],
              "why": "remember doing 回忆做过的活动，remember to do 提醒履行任务。",
              "icon": "house"
            },
            {
              "type": "pick",
              "sentence": "Leo was made to wait.",
              "zh": "与主动 made Leo wait 比，本例通常需要？",
              "target": "整句",
              "answer": "to wait",
              "options": [
                "to wait",
                "waited"
              ],
              "why": "make 的主动使役与被动结构形式不同，be made to do 用 to。",
              "icon": "clock"
            },
            {
              "type": "pick",
              "sentence": "Mia has a chair to sit on.",
              "zh": "保留 on 的作用是？",
              "target": "整句",
              "answer": "表达坐在椅子上的关系",
              "options": [
                "表达坐在椅子上的关系",
                "让任何不定式都必须加 on"
              ],
              "why": "sit on a chair 对应本例位置关系，不定式短语并非通用加尾。",
              "icon": "house"
            },
            {
              "type": "pick",
              "sentence": "Mia was the last to leave.",
              "zh": "离开已发生时，不定式可这样用吗？",
              "target": "整句",
              "answer": "可以，时间由整个结构理解",
              "options": [
                "可以，时间由整个结构理解",
                "不可以，to 必须指将来"
              ],
              "why": "the last to leave 可描述已发生顺序，不定式不必全部指未来。",
              "icon": "clock"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c17-r3",
          "title": "try 与 regret：形式相近，目标不同",
          "pages": "186–201（补充迁移）",
          "items": [
            {
              "type": "pick",
              "sentence": "Mia tried turning the key.",
              "zh": "本题把转钥匙作为解决问题的一种试验。",
              "target": "整句",
              "answer": "试试转钥匙这个办法",
              "options": [
                "试试转钥匙这个办法",
                "一定努力了却绝未转动"
              ],
              "why": "try doing 在本题为尝试一种办法，不等于努力完成却未必做到。",
              "icon": "house"
            },
            {
              "type": "pick",
              "sentence": "Mia tried to turn the key, but it was stuck.",
              "zh": "本题强调想转动钥匙，却被卡住。",
              "target": "整句",
              "answer": "努力转动这项任务",
              "options": [
                "努力转动这项任务",
                "试验一个已确定成功的办法"
              ],
              "why": "try to do 强调尝试完成任务，but it was stuck 说明本题遇到障碍。",
              "icon": "house"
            },
            {
              "type": "pick",
              "sentence": "Mia regrets wasting paper.",
              "zh": "本题她后悔已经浪费了纸。",
              "target": "整句",
              "answer": "对做过的事感到遗憾",
              "options": [
                "对做过的事感到遗憾",
                "现在正式通知别人一个消息"
              ],
              "why": "regret doing 回看对某事遗憾，不与 regret to inform 的正式告知混同。",
              "icon": "post"
            },
            {
              "type": "pick",
              "sentence": "We regret to inform you that the show is cancelled.",
              "zh": "这是正式通知坏消息的表达。",
              "target": "整句",
              "answer": "遗憾地告知这个消息",
              "options": [
                "遗憾地告知这个消息",
                "后悔以前已经通知过这句话"
              ],
              "why": "regret to inform 是正式语境中的常见搭配，不把 to 一律解释为未来。",
              "icon": "post"
            },
            {
              "type": "pick",
              "sentence": "Try reading the notice aloud.",
              "zh": "本题建议一种帮助理解的办法。",
              "target": "整句",
              "answer": "尝试朗读这个办法",
              "options": [
                "尝试朗读这个办法",
                "必须理解为过去的遗憾"
              ],
              "why": "try doing 的具体意义取决于建议语境，不按过去/将来口诀归类。",
              "icon": "book"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "谁参与目的或被动任务",
          "body": "主语不总是执行者，按具体结构连接动作。 点两种观察方式，再用自己的话解释区别。",
          "example": "Mia wants to carry the sign.",
          "zh": "Mia 参与搬运，sign 是对象。",
          "visual": "rocket",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c17",
            "kind": "atlas",
            "scene": "purpose",
            "states": [
              {
                "value": "active",
                "label": "观察一",
                "text": "Mia wants to carry the sign.",
                "note": "Mia 参与搬运，sign 是对象。",
                "art": "rocket"
              },
              {
                "value": "passive",
                "label": "观察二",
                "text": "Mia wants the sign to be carried.",
                "note": "sign 是被搬运方；Mia 表达愿望。",
                "art": "rocket"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "Mia wants the sign to be carried.",
          "zh": "sign 是被搬运方；Mia 表达愿望。",
          "visual": "rocket",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c18": {
      "missions": [
        {
          "id": "c18-r1",
          "title": "分词先对准对象再定格",
          "pages": "202–216",
          "items": [
            {
              "type": "freeze",
              "sentence": "The helper carrying the signs is Leo.",
              "zh": "修饰搬标牌的助手，主动执行。",
              "axes": {
                "actor": [
                  [
                    "the helper",
                    "the helper"
                  ],
                  [
                    "the visitors",
                    "the visitors"
                  ],
                  [
                    "the gate",
                    "the gate"
                  ]
                ],
                "relation": [
                  [
                    "active",
                    "主动 / 自行发生"
                  ],
                  [
                    "passive",
                    "受到动作"
                  ],
                  [
                    "feeling",
                    "感受"
                  ],
                  [
                    "earlier",
                    "先前完成"
                  ],
                  [
                    "source",
                    "引起感受"
                  ]
                ],
                "form": [
                  [
                    "carrying the signs",
                    "carrying the signs"
                  ],
                  [
                    "carried the signs",
                    "carried the signs"
                  ]
                ]
              },
              "expected": {
                "actor": "the helper",
                "relation": "active",
                "form": "carrying the signs"
              },
              "answer": "{\"actor\":\"the helper\",\"relation\":\"active\",\"form\":\"carrying the signs\"}",
              "why": "先对准 the helper，再按关系选择 carrying the signs。分词形式名称不能直接当实际时间，感受与来源也不按人/物硬分。",
              "icon": "film",
              "frame": "The helper {form} is Leo.",
              "frameArt": "post"
            },
            {
              "type": "freeze",
              "sentence": "The signs painted by Mia are blue.",
              "zh": "标牌受到米娅涂色。",
              "axes": {
                "actor": [
                  [
                    "the signs",
                    "the signs"
                  ],
                  [
                    "the visitors",
                    "the visitors"
                  ],
                  [
                    "the gate",
                    "the gate"
                  ]
                ],
                "relation": [
                  [
                    "active",
                    "主动 / 自行发生"
                  ],
                  [
                    "passive",
                    "受到动作"
                  ],
                  [
                    "feeling",
                    "感受"
                  ],
                  [
                    "earlier",
                    "先前完成"
                  ],
                  [
                    "source",
                    "引起感受"
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
                "actor": "the signs",
                "relation": "passive",
                "form": "painted by Mia"
              },
              "answer": "{\"actor\":\"the signs\",\"relation\":\"passive\",\"form\":\"painted by Mia\"}",
              "why": "先对准 the signs，再按关系选择 painted by Mia。分词形式名称不能直接当实际时间，感受与来源也不按人/物硬分。",
              "icon": "film",
              "frame": "The signs {form} are blue.",
              "frameArt": "paint"
            },
            {
              "type": "freeze",
              "sentence": "Mia is excited about the show.",
              "zh": "米娅感到兴奋，不是在说她让人兴奋。",
              "axes": {
                "actor": [
                  [
                    "Mia",
                    "Mia"
                  ],
                  [
                    "the visitors",
                    "the visitors"
                  ],
                  [
                    "the gate",
                    "the gate"
                  ]
                ],
                "relation": [
                  [
                    "active",
                    "主动 / 自行发生"
                  ],
                  [
                    "passive",
                    "受到动作"
                  ],
                  [
                    "feeling",
                    "感受"
                  ],
                  [
                    "earlier",
                    "先前完成"
                  ],
                  [
                    "source",
                    "引起感受"
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
              "why": "先对准 Mia，再按关系选择 excited。分词形式名称不能直接当实际时间，感受与来源也不按人/物硬分。",
              "icon": "film",
              "frame": "Mia is {form} about the show.",
              "frameArt": "portrait"
            },
            {
              "type": "freeze",
              "sentence": "Having checked the map, Leo opened the gate.",
              "zh": "先检查完地图，再开门，用完成形式突出先后。",
              "axes": {
                "actor": [
                  [
                    "Leo",
                    "Leo"
                  ],
                  [
                    "the visitors",
                    "the visitors"
                  ],
                  [
                    "the gate",
                    "the gate"
                  ]
                ],
                "relation": [
                  [
                    "active",
                    "主动 / 自行发生"
                  ],
                  [
                    "passive",
                    "受到动作"
                  ],
                  [
                    "feeling",
                    "感受"
                  ],
                  [
                    "earlier",
                    "先前完成"
                  ],
                  [
                    "source",
                    "引起感受"
                  ]
                ],
                "form": [
                  [
                    "Having checked the map",
                    "Having checked the map"
                  ],
                  [
                    "Checking the map tomorrow",
                    "Checking the map tomorrow"
                  ]
                ]
              },
              "expected": {
                "actor": "Leo",
                "relation": "earlier",
                "form": "Having checked the map"
              },
              "answer": "{\"actor\":\"Leo\",\"relation\":\"earlier\",\"form\":\"Having checked the map\"}",
              "why": "先对准 Leo，再按关系选择 Having checked the map。分词形式名称不能直接当实际时间，感受与来源也不按人/物硬分。",
              "icon": "film",
              "frame": "{form}, Leo opened the gate.",
              "frameArt": "map"
            },
            {
              "type": "freeze",
              "sentence": "The show is exciting.",
              "zh": "演出令人兴奋，描述带来的效果。",
              "axes": {
                "actor": [
                  [
                    "the show",
                    "the show"
                  ],
                  [
                    "the visitors",
                    "the visitors"
                  ],
                  [
                    "the gate",
                    "the gate"
                  ]
                ],
                "relation": [
                  [
                    "active",
                    "主动 / 自行发生"
                  ],
                  [
                    "passive",
                    "受到动作"
                  ],
                  [
                    "feeling",
                    "感受"
                  ],
                  [
                    "earlier",
                    "先前完成"
                  ],
                  [
                    "source",
                    "引起感受"
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
                "actor": "the show",
                "relation": "source",
                "form": "exciting"
              },
              "answer": "{\"actor\":\"the show\",\"relation\":\"source\",\"form\":\"exciting\"}",
              "why": "先对准 the show，再按关系选择 exciting。分词形式名称不能直接当实际时间，感受与来源也不按人/物硬分。",
              "icon": "film",
              "frame": "The show is {form}.",
              "frameArt": "star"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c18-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "202–216",
          "items": [
            {
              "type": "pick",
              "sentence": "The visitors were excited.",
              "zh": "excited 在此说明？",
              "target": "整句",
              "answer": "访客的感受",
              "options": [
                "访客的感受",
                "访客一定让别人无聊"
              ],
              "why": "描述体验者兴奋，不以过去分词名称判断情绪只存在于过去。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "Mia is an interesting guide.",
              "zh": "人可以用 interesting 描述吗？",
              "target": "整句",
              "answer": "可以，表示她能引起兴趣",
              "options": [
                "可以，表示她能引起兴趣",
                "不能，人必须只用 interested"
              ],
              "why": "人也可以是兴趣来源；不能把人/物简化为 -ed/-ing 的固定规则。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "Having checked the gate, Leo left.",
              "zh": "前后参与者普通对应谁？",
              "target": "整句",
              "answer": "Leo",
              "options": [
                "Leo",
                "the gate"
              ],
              "why": "检查的人是 Leo，gate 是对象，不按最近名词猜参与者。",
              "icon": "house"
            },
            {
              "type": "pick",
              "sentence": "Walking to the gate, the rain surprised Mia.",
              "zh": "实际走路的人是 Mia，清楚改法？",
              "target": "整句",
              "answer": "While Mia was walking to the gate, the rain surprised her.",
              "options": [
                "While Mia was walking to the gate, the rain surprised her.",
                "The rain was walking to the gate."
              ],
              "why": "补出实际参与者避免悬垂，不让 walking 错挂在 rain 上。",
              "icon": "cloud"
            },
            {
              "type": "pick",
              "sentence": "The fallen flowers are on the ground.",
              "zh": "fallen 一定表示受到别人的动作吗？",
              "target": "整句",
              "answer": "不是，这里表示已落下",
              "options": [
                "不是，这里表示已落下",
                "是，任何过去分词都被动"
              ],
              "why": "fall 为不及物变化，fallen 可表示落下后的状态，不强造被动施事。",
              "icon": "flower"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "感受与引起感受",
          "body": "不按人或物硬分 -ed/-ing，先看意义方向。 点两种观察方式，再用自己的话解释区别。",
          "example": "Mia is an exciting guide.",
          "zh": "人也可以引起他人的兴奋。",
          "visual": "film",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c18",
            "kind": "atlas",
            "scene": "participle",
            "states": [
              {
                "value": "source",
                "label": "观察一",
                "text": "Mia is an exciting guide.",
                "note": "人也可以引起他人的兴奋。",
                "art": "film"
              },
              {
                "value": "feeling",
                "label": "观察二",
                "text": "Mia is excited about the show.",
                "note": "米娅是体验兴奋的人。",
                "art": "film"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "Mia is excited about the show.",
          "zh": "米娅是体验兴奋的人。",
          "visual": "film",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    },
    "c19": {
      "missions": [
        {
          "id": "c19-r1",
          "title": "压缩后逐项核对原义",
          "pages": "217–224",
          "items": [
            {
              "type": "compress",
              "sentence": "Leo checks the map and opens the gate.",
              "zh": "同一参与者，保留检查与开门两件事。 选本题允许的精简，再恢复原义。",
              "axes": {
                "edit": [
                  [
                    "valid",
                    "删重复的第二个 Leo"
                  ],
                  [
                    "damage",
                    "删掉关键动作或连接词"
                  ]
                ],
                "restore": [
                  [
                    "Leo checks the map and Leo opens the gate.",
                    "Leo checks the map and Leo opens the gate."
                  ],
                  [
                    "Leo checks the map and Mia opens the gate.",
                    "Leo checks the map and Mia opens the gate."
                  ]
                ]
              },
              "expected": {
                "edit": "valid",
                "restore": "Leo checks the map and Leo opens the gate."
              },
              "answer": "{\"edit\":\"valid\",\"restore\":\"Leo checks the map and Leo opens the gate.\"}",
              "why": "同一参与者，保留检查与开门两件事。 不是越短越好，人物、时间、否定和逻辑必须可清楚恢复。",
              "icon": "leaf",
              "full": "Leo checks the map and Leo opens the gate.",
              "parts": [
                "Leo checks the map",
                "and",
                "Leo",
                "opens the gate."
              ],
              "groups": {
                "valid": [
                  2
                ],
                "damage": [
                  0
                ]
              },
              "previews": {
                "valid": "Leo checks the map and opens the gate.",
                "damage": "and Leo opens the gate."
              }
            },
            {
              "type": "compress",
              "sentence": "Mia can sing and Leo can too.",
              "zh": "保留 can 与 too，恢复两人都会唱的意思。 选本题允许的精简，再恢复原义。",
              "axes": {
                "edit": [
                  [
                    "valid",
                    "省去第二个 sing"
                  ],
                  [
                    "damage",
                    "删掉关键动作或连接词"
                  ]
                ],
                "restore": [
                  [
                    "Mia can sing and Leo can sing too.",
                    "Mia can sing and Leo can sing too."
                  ],
                  [
                    "Mia can sing and Leo cannot sing.",
                    "Mia can sing and Leo cannot sing."
                  ]
                ]
              },
              "expected": {
                "edit": "valid",
                "restore": "Mia can sing and Leo can sing too."
              },
              "answer": "{\"edit\":\"valid\",\"restore\":\"Mia can sing and Leo can sing too.\"}",
              "why": "保留 can 与 too，恢复两人都会唱的意思。 不是越短越好，人物、时间、否定和逻辑必须可清楚恢复。",
              "icon": "leaf",
              "full": "Mia can sing and Leo can sing too.",
              "parts": [
                "Mia can sing",
                "and Leo can",
                "sing",
                "too."
              ],
              "groups": {
                "valid": [
                  2
                ],
                "damage": [
                  0
                ]
              },
              "previews": {
                "valid": "Mia can sing and Leo can too.",
                "damage": "and Leo can sing too."
              }
            },
            {
              "type": "compress",
              "sentence": "The signs painted today are blue.",
              "zh": "保留今天受到涂色的关系。 选本题允许的精简，再恢复原义。",
              "axes": {
                "edit": [
                  [
                    "valid",
                    "省去 which were"
                  ],
                  [
                    "damage",
                    "删掉关键动作或连接词"
                  ]
                ],
                "restore": [
                  [
                    "The signs which were painted today are blue.",
                    "The signs which were painted today are blue."
                  ],
                  [
                    "The signs which will be painted tomorrow are blue.",
                    "The signs which will be painted tomorrow are blue."
                  ]
                ]
              },
              "expected": {
                "edit": "valid",
                "restore": "The signs which were painted today are blue."
              },
              "answer": "{\"edit\":\"valid\",\"restore\":\"The signs which were painted today are blue.\"}",
              "why": "保留今天受到涂色的关系。 不是越短越好，人物、时间、否定和逻辑必须可清楚恢复。",
              "icon": "leaf",
              "full": "The signs which were painted today are blue.",
              "parts": [
                "The signs",
                "which were",
                "painted today",
                "are blue."
              ],
              "groups": {
                "valid": [
                  1
                ],
                "damage": [
                  0
                ]
              },
              "previews": {
                "valid": "The signs painted today are blue.",
                "damage": "which were painted today are blue."
              }
            },
            {
              "type": "compress",
              "sentence": "Although nervous, Mia sang.",
              "zh": "明确本题 she 指 Mia，保留让步关系。 选本题允许的精简，再恢复原义。",
              "axes": {
                "edit": [
                  [
                    "valid",
                    "保留 Although，省去 she was"
                  ],
                  [
                    "damage",
                    "删掉关键动作或连接词"
                  ]
                ],
                "restore": [
                  [
                    "Although she was nervous, Mia sang.",
                    "Although she was nervous, Mia sang."
                  ],
                  [
                    "Because Mia was nervous, she sang.",
                    "Because Mia was nervous, she sang."
                  ]
                ]
              },
              "expected": {
                "edit": "valid",
                "restore": "Although she was nervous, Mia sang."
              },
              "answer": "{\"edit\":\"valid\",\"restore\":\"Although she was nervous, Mia sang.\"}",
              "why": "明确本题 she 指 Mia，保留让步关系。 不是越短越好，人物、时间、否定和逻辑必须可清楚恢复。",
              "icon": "leaf",
              "full": "Although she was nervous, Mia sang.",
              "parts": [
                "Although",
                "she was",
                "nervous,",
                "Mia sang."
              ],
              "groups": {
                "valid": [
                  1
                ],
                "damage": [
                  0
                ]
              },
              "previews": {
                "valid": "Although nervous, Mia sang.",
                "damage": "she was nervous, Mia sang."
              }
            },
            {
              "type": "compress",
              "sentence": "When asked, Leo answers.",
              "zh": "明确 he 指 Leo，保留 Leo 受到提问的关系。 选本题允许的精简，再恢复原义。",
              "axes": {
                "edit": [
                  [
                    "valid",
                    "保留 When，省去 he is"
                  ],
                  [
                    "damage",
                    "删掉关键动作或连接词"
                  ]
                ],
                "restore": [
                  [
                    "When he is asked, Leo answers.",
                    "When he is asked, Leo answers."
                  ],
                  [
                    "When Leo asks, someone answers.",
                    "When Leo asks, someone answers."
                  ]
                ]
              },
              "expected": {
                "edit": "valid",
                "restore": "When he is asked, Leo answers."
              },
              "answer": "{\"edit\":\"valid\",\"restore\":\"When he is asked, Leo answers.\"}",
              "why": "明确 he 指 Leo，保留 Leo 受到提问的关系。 不是越短越好，人物、时间、否定和逻辑必须可清楚恢复。",
              "icon": "leaf",
              "full": "When he is asked, Leo answers.",
              "parts": [
                "When",
                "he is",
                "asked,",
                "Leo answers."
              ],
              "groups": {
                "valid": [
                  1
                ],
                "damage": [
                  0
                ]
              },
              "previews": {
                "valid": "When asked, Leo answers.",
                "damage": "he is asked, Leo answers."
              }
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        },
        {
          "id": "c19-r2",
          "title": "换场景核对：意思有没有变",
          "pages": "217–224",
          "items": [
            {
              "type": "pick",
              "sentence": "Mia is ready, but Leo is not.",
              "zh": "not 是可随意删掉的重复信息吗？",
              "target": "整句",
              "answer": "不是，否定改变意思",
              "options": [
                "不是，否定改变意思",
                "是，短句总应删更多"
              ],
              "why": "not 保留 Leo 没准备好的对照，删去会改变信息。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "While Mia was reading, Leo opened the gate.",
              "zh": "能否保留原意改成 While reading, Leo opened the gate？",
              "target": "整句",
              "answer": "不能，那会让 Leo 成为读者",
              "options": [
                "不能，那会让 Leo 成为读者",
                "可以，不同人也可随便省"
              ],
              "why": "普通省略后的分词通常对应主句主语，这里原参与者不同需明确保留。",
              "icon": "book"
            },
            {
              "type": "pick",
              "sentence": "Can Leo help? Yes, he can.",
              "zh": "can 后的内容可从哪里恢复？",
              "target": "整句",
              "answer": "前面的问题",
              "options": [
                "前面的问题",
                "任意另一个故事"
              ],
              "why": "短答省略依赖语境，不能脱离问题随意补成别的动作。",
              "icon": "portrait"
            },
            {
              "type": "pick",
              "sentence": "The map that Mia owns is here.",
              "zh": "能否机械改成 that Mia is owning 再删？",
              "target": "整句",
              "answer": "不能这样套删除公式",
              "options": [
                "不能这样套删除公式",
                "任何动词都可先改进行再删"
              ],
              "why": "own 的普通状态用法不能如此机械制造进行结构，精简要符合真实用法。",
              "icon": "map"
            },
            {
              "type": "pick",
              "sentence": "Mia checks the map and opens the gate.",
              "zh": "恢复时最重要核对什么？",
              "target": "整句",
              "answer": "两件事的参与者与关系是否保持",
              "options": [
                "两件事的参与者与关系是否保持",
                "只数剩了几个词"
              ],
              "why": "删词后的可恢复信息与原意对应，比长度本身重要。",
              "icon": "map"
            }
          ],
          "note": "先观察意义，再操作；确认后读完整句子"
        }
      ],
      "lessons": [
        {
          "title": "让词块淡出，保留关系",
          "body": "只省略可清楚恢复的部分，不把参与者悄悄换掉。 点两种观察方式，再用自己的话解释区别。",
          "example": "Mia can sing and Leo can sing too.",
          "zh": "完整两项：两人都会唱。",
          "visual": "leaf",
          "tags": [
            "先看意义",
            "切换观察",
            "不计时"
          ],
          "demo": {
            "id": "c19",
            "kind": "atlas",
            "scene": "reduce",
            "states": [
              {
                "value": "full",
                "label": "观察一",
                "text": "Mia can sing and Leo can sing too.",
                "note": "完整两项：两人都会唱。",
                "art": "leaf"
              },
              {
                "value": "short",
                "label": "观察二",
                "text": "Mia can sing and Leo can too.",
                "note": "省去第二个 sing，can 和 too 仍在。",
                "art": "leaf"
              }
            ]
          }
        },
        {
          "title": "迁移前，先保留什么？",
          "body": "换一个人、物或时间后，重新检查参与者、结构和逻辑。能说出为什么另一方案不合本题，才算完成一次有意义的练习；不要求只记术语。",
          "example": "Mia can sing and Leo can too.",
          "zh": "省去第二个 sing，can 和 too 仍在。",
          "visual": "leaf",
          "tags": [
            "新场景迁移",
            "听一句完整表达",
            "解释而非猜按钮"
          ]
        }
      ]
    }
  },
  "quest": {
    "id": "quest",
    "number": "综合",
    "kind": "integrated",
    "title": "小岛开园庆典",
    "subtitle": "把全书知识带进一场完整冒险",
    "mechanic": "八幕故事 · 混合操作 · 改写核对",
    "scene": "island",
    "theme": "mint",
    "book": "全书跨章综合 · 原创情境",
    "brief": "从筹备清单到最终介绍稿，把词语、句子、时间、从句与省略放回同一个故事。没有倒计时，可回看相关小故事；完成不等于已经永久掌握，重玩时试着自己解释证据。",
    "lessons": [
      {
        "title": "先想要表达什么",
        "body": "不要先猜这是哪一章。先问发生了什么、谁参与、时间在哪里，再挑语言结构。",
        "example": "Mia painted the sign yesterday.",
        "zh": "米娅昨天给标牌涂了色。",
        "visual": "paint",
        "tags": [
          "参与者",
          "时间",
          "信息重心"
        ]
      },
      {
        "title": "同一事件可以有不同焦点",
        "body": "报道从 Mia 或 sign 开始都可以，但动作方向不能反转，时间也不能悄悄改变。",
        "example": "The sign was painted by Mia yesterday.",
        "zh": "标牌昨天由米娅涂了色。",
        "visual": "camera",
        "tags": [
          "焦点改变",
          "角色保持"
        ]
      },
      {
        "title": "错误也能提供复习线索",
        "body": "综合题答错会进入同一个复习背包。题目后的相关小故事可以帮助回看，再回来重玩对应任务。",
        "example": "Mia can sing and Leo can too.",
        "zh": "米娅会唱歌，里奥也会。",
        "visual": "book",
        "tags": [
          "错题复习",
          "相关小故事",
          "保留稳定进度"
        ]
      },
      {
        "title": "完成后，带走解释方法",
        "body": "检查缩短、换词或换机位后，参与者、时间、肯定否定和逻辑是否仍符合任务。学习足迹记录练习，不给人贴能力标签。",
        "example": "Shorter is not always clearer.",
        "zh": "更短不一定更清楚。",
        "visual": "star",
        "tags": [
          "恢复原意",
          "寻找证据",
          "迁移再试"
        ]
      }
    ],
    "missions": [
      {
        "id": "quest-m1",
        "title": "第一幕：写好开园清单",
        "pages": "跨章 1–4、be",
        "items": [
          {
            "type": "pick",
            "sentence": "The small team is ready.",
            "zh": "开园清单里 small 做什么工作？",
            "target": "整句",
            "answer": "形容词，修饰 team",
            "options": [
              "形容词，修饰 team",
              "副词，修饰 ready"
            ],
            "why": "small 描述名词 team；词类和修饰对象一起核对。",
            "icon": "star",
            "links": [
              "c1",
              "c5"
            ]
          },
          {
            "type": "pick",
            "sentence": "Mia gives Leo a map.",
            "zh": "分发任务中，Leo 与 map 的关系？",
            "target": "整句",
            "answer": "接收者与递交物",
            "options": [
              "接收者与递交物",
              "Leo 被叫作 map"
            ],
            "why": "给谁和给什么是双宾语，不是把人描述成地图。",
            "icon": "map",
            "links": [
              "c2",
              "c3",
              "c4"
            ]
          },
          {
            "type": "conductor",
            "sentence": "The basket of flowers is ready.",
            "zh": "清单中这一篮花已经备好。 准备好的是一篮花；找数量核心。",
            "axes": {
              "leader": [
                [
                  "The basket",
                  "The basket"
                ],
                [
                  "flowers",
                  "flowers"
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
              "leader": "The basket",
              "beat": "is"
            },
            "answer": "{\"leader\":\"The basket\",\"beat\":\"is\"}",
            "why": "本句由 The basket 控制动词形式，不由最近的名词或词组内部复数决定。",
            "icon": "music",
            "frame": "The basket of flowers ___ ready.",
            "players": 1,
            "links": [
              "c4",
              "c9"
            ]
          },
          {
            "type": "museum",
            "sentence": "Making signs takes time.",
            "zh": "我们需要给画标牌这项活动排时间。 做标牌作为一项活动需要时间。",
            "axes": {
              "exhibit": [
                [
                  "Making signs",
                  "Making signs"
                ],
                [
                  "Make signs",
                  "Make signs"
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
                  "主语的内容"
                ],
                [
                  "Op",
                  "介词后的活动"
                ],
                [
                  "C",
                  "活动名称说明"
                ]
              ]
            },
            "expected": {
              "exhibit": "Making signs",
              "shelf": "S"
            },
            "answer": "{\"exhibit\":\"Making signs\",\"shelf\":\"S\"}",
            "why": "Making signs 作为整体进入本题搭配，内部仍可包含宾语或方式信息，不能任意替换成其他形式。",
            "icon": "ball",
            "frame": "{exhibit} takes time.",
            "activityArt": "paint",
            "links": [
              "c4",
              "c16"
            ]
          },
          {
            "type": "pick",
            "sentence": "The door is open.",
            "zh": "开园前只报告门的状态。 open 在这个状态句中一定是被动分词吗？",
            "target": "整句",
            "answer": "不是，open 在这里为形容词",
            "options": [
              "不是，open 在这里为形容词",
              "是，be 后总是被动"
            ],
            "why": "open 直接描述状态；不能看到 be 后有词就断言被动。",
            "icon": "door",
            "links": [
              "be1",
              "c10"
            ]
          }
        ],
        "note": "先辨认角色与数量，把一张清单写清楚。"
      },
      {
        "id": "quest-m2",
        "title": "第二幕：通知怎样送到",
        "pages": "跨章 6、7、10–12",
        "items": [
          {
            "type": "camera",
            "sentence": "By noon tomorrow, Leo will have finished the sign.",
            "zh": "印刷进度要站在明天中午回看。 明确站在明天中午回看：标牌届时已做完。",
            "axes": {
              "reference": [
                [
                  "past",
                  "过去参照"
                ],
                [
                  "present",
                  "现在参照"
                ],
                [
                  "future",
                  "将来参照"
                ]
              ],
              "aspect": [
                [
                  "simple",
                  "事实 / 一般"
                ],
                [
                  "continuous",
                  "进行观察"
                ],
                [
                  "perfect",
                  "回望之前"
                ],
                [
                  "duration",
                  "过程累积"
                ]
              ],
              "film": [
                [
                  "will have finished the sign",
                  "will have finished the sign"
                ],
                [
                  "finished the sign",
                  "finished the sign"
                ]
              ]
            },
            "expected": {
              "reference": "future",
              "aspect": "perfect",
              "film": "will have finished the sign"
            },
            "answer": "{\"reference\":\"future\",\"aspect\":\"perfect\",\"film\":\"will have finished the sign\"}",
            "why": "本题明确参照点与观看方式，选择 will have finished the sign。不只看时间词，也不把完成理解为只能发生很久以前。",
            "icon": "clock",
            "frame": "By noon tomorrow, Leo {film}.",
            "links": [
              "c7",
              "c10"
            ]
          },
          {
            "type": "passive",
            "sentence": "The map will be printed by Leo tomorrow.",
            "zh": "通知里改从地图说起。 改从 the map 说起，保持 未来事件 和原角色。",
            "axes": {
              "focus": [
                [
                  "agent",
                  "发出动作方"
                ],
                [
                  "patient",
                  "动作涉及对象"
                ]
              ],
              "film": [
                [
                  "will be printed",
                  "will be printed"
                ],
                [
                  "was printed",
                  "was printed"
                ]
              ]
            },
            "expected": {
              "focus": "patient",
              "film": "will be printed"
            },
            "answer": "{\"focus\":\"patient\",\"film\":\"will be printed\"}",
            "why": "焦点变化但事件角色保持。被动用 will be printed，不能在换焦点时把时间或数量改掉。",
            "icon": "camera",
            "actor": "Leo",
            "patient": "the map",
            "active": "Leo will print the map tomorrow.",
            "frames": {
              "agent": "Leo {film} the map tomorrow.",
              "patient": "The map {film} by Leo tomorrow."
            },
            "time": "未来事件",
            "objectArt": "map",
            "links": [
              "c7",
              "c10"
            ]
          },
          {
            "type": "capsule",
            "sentence": "I wonder when the show starts.",
            "zh": "访客想知道开演时间。 想知道演出什么时候开始，嵌入普通陈述语序。",
            "axes": {
              "clause": [
                [
                  "when the show starts",
                  "when the show starts"
                ],
                [
                  "when does the show start",
                  "when does the show start"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语"
                ],
                [
                  "O",
                  "动词宾语"
                ],
                [
                  "P",
                  "表语"
                ],
                [
                  "C",
                  "说明宾语"
                ],
                [
                  "Op",
                  "介词宾语"
                ]
              ]
            },
            "expected": {
              "clause": "when the show starts",
              "dock": "O"
            },
            "answer": "{\"clause\":\"when the show starts\",\"dock\":\"O\"}",
            "why": "整个 when the show starts 在主句中作动词宾语；从句内部也要成立，不能照搬直接问句的 do 倒装。",
            "icon": "capsule",
            "frame": "I wonder {clause}.",
            "links": [
              "c12"
            ]
          },
          {
            "type": "pick",
            "sentence": "Mia reads the notice carefully.",
            "zh": "carefully 在通知任务中补充？",
            "target": "整句",
            "answer": "读的方式",
            "options": [
              "读的方式",
              "通知的颜色"
            ],
            "why": "方式信息连到 reads，不是名词本身的颜色。",
            "icon": "post",
            "links": [
              "c1",
              "c6"
            ]
          },
          {
            "type": "treasure",
            "sentence": "The star moves into the box.",
            "zh": "通知上的路径箭头从箱外进入箱内。 从外面进入箱子。",
            "axes": {
              "spot": [
                [
                  "enter",
                  "进入箱子"
                ],
                [
                  "exit",
                  "离开箱子"
                ],
                [
                  "toward",
                  "朝向小屋"
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
                ]
              ]
            },
            "expected": {
              "spot": "enter",
              "phrase": "into the box"
            },
            "answer": "{\"spot\":\"enter\",\"phrase\":\"into the box\"}",
            "why": "方向与静止位置不同。into the box 符合本题路径，towards 不单独保证到达。",
            "icon": "map",
            "mapKind": "route",
            "frame": "The star moves {phrase}.",
            "links": [
              "c11"
            ]
          }
        ],
        "note": "把时间、语态、嵌入问题和路径放进同一份通知。"
      },
      {
        "id": "quest-m3",
        "title": "第三幕：认出正确的助手",
        "pages": "跨章 5、9、13、18",
        "items": [
          {
            "type": "relative",
            "sentence": "The helper who wears a red hat is at the gate.",
            "zh": "门口有几位助手，先靠红帽辨认。 用红帽线索认出哪位助手。",
            "axes": {
              "head": [
                [
                  "The helper",
                  "The helper"
                ],
                [
                  "The map",
                  "The map"
                ]
              ],
              "clue": [
                [
                  "who wears a red hat",
                  "who wears a red hat"
                ],
                [
                  "which is folded",
                  "which is folded"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定辨认"
                ],
                [
                  "extra",
                  "补充旁注"
                ]
              ]
            },
            "expected": {
              "head": "The helper",
              "clue": "who wears a red hat",
              "mode": "defining"
            },
            "answer": "{\"head\":\"The helper\",\"clue\":\"who wears a red hat\",\"mode\":\"defining\"}",
            "why": "先行词为 The helper，从句保留本题人物和关系；旁注用逗号与主句隔开，限定辨认本例不用逗号。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is at the gate.",
              "extra": "{head}, {clause}, is at the gate."
            },
            "anchorArt": "portrait",
            "links": [
              "c5",
              "c13"
            ]
          },
          {
            "type": "freeze",
            "sentence": "The helper carrying the signs is Leo.",
            "zh": "再用搬标牌的动作确认助手。 修饰搬标牌的助手，主动执行。",
            "axes": {
              "actor": [
                [
                  "the helper",
                  "the helper"
                ],
                [
                  "the visitors",
                  "the visitors"
                ],
                [
                  "the gate",
                  "the gate"
                ]
              ],
              "relation": [
                [
                  "active",
                  "主动 / 自行发生"
                ],
                [
                  "passive",
                  "受到动作"
                ],
                [
                  "feeling",
                  "感受"
                ],
                [
                  "earlier",
                  "先前完成"
                ],
                [
                  "source",
                  "引起感受"
                ]
              ],
              "form": [
                [
                  "carrying the signs",
                  "carrying the signs"
                ],
                [
                  "carried the signs",
                  "carried the signs"
                ]
              ]
            },
            "expected": {
              "actor": "the helper",
              "relation": "active",
              "form": "carrying the signs"
            },
            "answer": "{\"actor\":\"the helper\",\"relation\":\"active\",\"form\":\"carrying the signs\"}",
            "why": "先对准 the helper，再按关系选择 carrying the signs。分词形式名称不能直接当实际时间，感受与来源也不按人/物硬分。",
            "icon": "film",
            "frame": "The helper {form} is Leo.",
            "frameArt": "post",
            "links": [
              "c5",
              "c18"
            ]
          },
          {
            "type": "conductor",
            "sentence": "The signs near the gate are blue.",
            "zh": "门边几块标牌准备好了，别让 gate 抢指挥棒。 门边的几块标牌，核心是 signs。",
            "axes": {
              "leader": [
                [
                  "The signs",
                  "The signs"
                ],
                [
                  "the gate",
                  "the gate"
                ]
              ],
              "beat": [
                [
                  "are",
                  "are"
                ],
                [
                  "is",
                  "is"
                ]
              ]
            },
            "expected": {
              "leader": "The signs",
              "beat": "are"
            },
            "answer": "{\"leader\":\"The signs\",\"beat\":\"are\"}",
            "why": "本句由 The signs 控制动词形式，不由最近的名词或词组内部复数决定。",
            "icon": "music",
            "frame": "The signs near the gate ___ blue.",
            "players": 3,
            "links": [
              "c9"
            ]
          },
          {
            "type": "pick",
            "sentence": "The helper with the blue bag is Leo.",
            "zh": "with the blue bag 在此帮助？",
            "target": "整句",
            "answer": "辨认 helper",
            "options": [
              "辨认 helper",
              "说明 is 的速度"
            ],
            "why": "名词后的介词短语提供身份线索，和动作方式不同。",
            "icon": "bag",
            "links": [
              "c5",
              "c11"
            ]
          },
          {
            "type": "relative",
            "sentence": "Mia, who is our guide, is here.",
            "zh": "导游名字已确定，添加身份旁注。 Mia 已明确，补充她是导游的旁注。",
            "axes": {
              "head": [
                [
                  "Mia",
                  "Mia"
                ],
                [
                  "The gate",
                  "The gate"
                ]
              ],
              "clue": [
                [
                  "who is our guide",
                  "who is our guide"
                ],
                [
                  "which is blue",
                  "which is blue"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定辨认"
                ],
                [
                  "extra",
                  "补充旁注"
                ]
              ]
            },
            "expected": {
              "head": "Mia",
              "clue": "who is our guide",
              "mode": "extra"
            },
            "answer": "{\"head\":\"Mia\",\"clue\":\"who is our guide\",\"mode\":\"extra\"}",
            "why": "先行词为 Mia，从句保留本题人物和关系；旁注用逗号与主句隔开，限定辨认本例不用逗号。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is here.",
              "extra": "{head}, {clause}, is here."
            },
            "anchorArt": "portrait",
            "links": [
              "c13",
              "it1"
            ]
          }
        ],
        "note": "把画像、主语核心和修饰线索合在一次寻人任务中。"
      },
      {
        "id": "quest-m4",
        "title": "第四幕：排练与适应",
        "pages": "跨章 6–8、16–18、used",
        "items": [
          {
            "type": "pick",
            "sentence": "Leo is getting used to speaking aloud.",
            "zh": "排练中 Leo 正在适应朗读，后面用？",
            "target": "整句",
            "answer": "speaking aloud",
            "options": [
              "speaking aloud",
              "speak aloud"
            ],
            "why": "适应结构的 to 为介词，接活动 -ing；不等于过去常朗读。",
            "icon": "music",
            "links": [
              "used1",
              "c16"
            ]
          },
          {
            "type": "pick",
            "sentence": "Mia is welcoming visitors.",
            "zh": "排练此刻正在接待访客。 这里 -ing 与 is 合作做什么？",
            "target": "整句",
            "answer": "构成进行结构",
            "options": [
              "构成进行结构",
              "只能是名词性表语"
            ],
            "why": "主语 Mia 在此执行接待动作，不同于 Her job is welcoming visitors。",
            "icon": "portrait",
            "links": [
              "c7",
              "c16"
            ]
          },
          {
            "type": "worlds",
            "sentence": "I wish I could sing.",
            "zh": "有人不会唱歌，表达愿望而非事实。 现实是我现在不会唱；表达不同愿望。",
            "axes": {
              "voice": [
                [
                  "fact",
                  "报告事实"
                ],
                [
                  "wish",
                  "表达愿望"
                ],
                [
                  "condition",
                  "假想条件"
                ],
                [
                  "request",
                  "指令请求"
                ]
              ],
              "bridge": [
                [
                  "I wish I could sing.",
                  "I wish I could sing."
                ],
                [
                  "I can sing.",
                  "I can sing."
                ]
              ]
            },
            "expected": {
              "voice": "wish",
              "bridge": "I wish I could sing."
            },
            "answer": "{\"voice\":\"wish\",\"bridge\":\"I wish I could sing.\"}",
            "why": "按给定现实与表达目标选择，不把愿望当作事实，也不把所有 if 都判为不真实。",
            "icon": "moon",
            "reality": "目前不会唱",
            "dream": "希望会唱",
            "links": [
              "c8"
            ]
          },
          {
            "type": "launch",
            "sentence": "Mia asked Leo to carry the signs.",
            "zh": "Mia 请 Leo 搬标牌，找真正搬的人。 Mia 请 Leo 搬标牌，谁搬？",
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
                  "sign",
                  "标牌本身"
                ]
              ],
              "form": [
                [
                  "to carry the signs",
                  "to carry the signs"
                ],
                [
                  "carrying the signs",
                  "carrying the signs"
                ]
              ]
            },
            "expected": {
              "pilot": "Leo",
              "form": "to carry the signs"
            },
            "answer": "{\"pilot\":\"Leo\",\"form\":\"to carry the signs\"}",
            "why": "形式为 to carry the signs，参与者与动作关系按本题主体和搭配判断；不把所有 to 理解为未来，也不把物件都当执行者。",
            "icon": "rocket",
            "frame": "Mia asked Leo {form}.",
            "taskArt": "post",
            "links": [
              "c17"
            ]
          },
          {
            "type": "freeze",
            "sentence": "Mia is excited about the show.",
            "zh": "米娅自己感到兴奋。 米娅感到兴奋，不是在说她让人兴奋。",
            "axes": {
              "actor": [
                [
                  "Mia",
                  "Mia"
                ],
                [
                  "the visitors",
                  "the visitors"
                ],
                [
                  "the gate",
                  "the gate"
                ]
              ],
              "relation": [
                [
                  "active",
                  "主动 / 自行发生"
                ],
                [
                  "passive",
                  "受到动作"
                ],
                [
                  "feeling",
                  "感受"
                ],
                [
                  "earlier",
                  "先前完成"
                ],
                [
                  "source",
                  "引起感受"
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
            "why": "先对准 Mia，再按关系选择 excited。分词形式名称不能直接当实际时间，感受与来源也不按人/物硬分。",
            "icon": "film",
            "frame": "Mia is {form} about the show.",
            "frameArt": "portrait",
            "links": [
              "c18"
            ]
          }
        ],
        "note": "区别正在做、逐渐适应、想做以及体验到的感受。"
      },
      {
        "id": "quest-m5",
        "title": "第五幕：风雨备用计划",
        "pages": "跨章 7、8、11、14",
        "items": [
          {
            "type": "chain",
            "sentence": "We move inside if it rains.",
            "zh": "天还没下雨，先准备条件计划。 本题说如果下雨就进屋，不断言已经下雨。",
            "axes": {
              "relation": [
                [
                  "time",
                  "时间"
                ],
                [
                  "cause",
                  "原因"
                ],
                [
                  "condition",
                  "条件"
                ],
                [
                  "concession",
                  "让步"
                ],
                [
                  "purpose",
                  "目的"
                ]
              ],
              "link": [
                [
                  "if",
                  "if"
                ],
                [
                  "because",
                  "because"
                ]
              ]
            },
            "expected": {
              "relation": "condition",
              "link": "if"
            },
            "answer": "{\"relation\":\"condition\",\"link\":\"if\"}",
            "why": "if 与题目要求的条件关系对应，连接相邻事件并不能自动证明因果或结果。",
            "icon": "link",
            "frame": "We move inside {link} it rains.",
            "left": "We move inside",
            "right": "it rains",
            "leftArt": "house",
            "rightArt": "cloud",
            "links": [
              "c8",
              "c14"
            ]
          },
          {
            "type": "chain",
            "sentence": "Leo carries a lamp because it is dark.",
            "zh": "灯已经带上，明确天黑是原因。 把天黑明确说成带灯的原因。",
            "axes": {
              "relation": [
                [
                  "time",
                  "时间"
                ],
                [
                  "cause",
                  "原因"
                ],
                [
                  "condition",
                  "条件"
                ],
                [
                  "concession",
                  "让步"
                ],
                [
                  "purpose",
                  "目的"
                ]
              ],
              "link": [
                [
                  "because",
                  "because"
                ],
                [
                  "although",
                  "although"
                ]
              ]
            },
            "expected": {
              "relation": "cause",
              "link": "because"
            },
            "answer": "{\"relation\":\"cause\",\"link\":\"because\"}",
            "why": "because 与题目要求的原因关系对应，连接相邻事件并不能自动证明因果或结果。",
            "icon": "link",
            "frame": "Leo carries a lamp {link} it is dark.",
            "left": "Leo carries a lamp",
            "right": "it is dark",
            "leftArt": "star",
            "rightArt": "moon",
            "links": [
              "c14"
            ]
          },
          {
            "type": "chain",
            "sentence": "We speak slowly so that everyone can follow.",
            "zh": "慢说是为了访客能跟上。 慢说是为了大家能跟上，不保证目的必然实现。",
            "axes": {
              "relation": [
                [
                  "time",
                  "时间"
                ],
                [
                  "cause",
                  "原因"
                ],
                [
                  "condition",
                  "条件"
                ],
                [
                  "concession",
                  "让步"
                ],
                [
                  "purpose",
                  "目的"
                ]
              ],
              "link": [
                [
                  "so that",
                  "so that"
                ],
                [
                  "even though",
                  "even though"
                ]
              ]
            },
            "expected": {
              "relation": "purpose",
              "link": "so that"
            },
            "answer": "{\"relation\":\"purpose\",\"link\":\"so that\"}",
            "why": "so that 与题目要求的目的关系对应，连接相邻事件并不能自动证明因果或结果。",
            "icon": "link",
            "frame": "We speak slowly {link} everyone can follow.",
            "left": "We speak slowly",
            "right": "everyone can follow",
            "leftArt": "music",
            "rightArt": "portrait",
            "links": [
              "c6",
              "c14"
            ]
          },
          {
            "type": "treasure",
            "sentence": "The star moves towards the house.",
            "zh": "朝小屋走不等于已经进屋。 朝小屋走，但不保证已经到屋内。",
            "axes": {
              "spot": [
                [
                  "enter",
                  "进入箱子"
                ],
                [
                  "exit",
                  "离开箱子"
                ],
                [
                  "toward",
                  "朝向小屋"
                ]
              ],
              "phrase": [
                [
                  "towards the house",
                  "towards the house"
                ],
                [
                  "in the house",
                  "in the house"
                ]
              ]
            },
            "expected": {
              "spot": "toward",
              "phrase": "towards the house"
            },
            "answer": "{\"spot\":\"toward\",\"phrase\":\"towards the house\"}",
            "why": "方向与静止位置不同。towards the house 符合本题路径，towards 不单独保证到达。",
            "icon": "map",
            "mapKind": "route",
            "frame": "The star moves {phrase}.",
            "links": [
              "c11"
            ]
          },
          {
            "type": "pick",
            "sentence": "If it rains, we will use the hall.",
            "zh": "本题开放未来条件，rains 在 if 从句中？",
            "target": "整句",
            "answer": "现在形式表达未来条件",
            "options": [
              "现在形式表达未来条件",
              "说明所有雨只在现在发生"
            ],
            "why": "从句形式与真实时间不是机械一一对应。",
            "icon": "cloud",
            "links": [
              "c7",
              "c8",
              "c14"
            ]
          }
        ],
        "note": "为同一场活动分别表达原因、条件、目的和方向。"
      },
      {
        "id": "quest-m6",
        "title": "第六幕：舞台介绍与焦点",
        "pages": "跨章 3、12、15、17、it",
        "items": [
          {
            "type": "pick",
            "sentence": "It was Leo that opened the gate.",
            "zh": "主持人想强调打开者，聚光灯落在？",
            "target": "整句",
            "answer": "Leo",
            "options": [
              "Leo",
              "the gate"
            ],
            "why": "强调人但不颠倒开门事件，gate 仍是对象。",
            "icon": "star",
            "links": [
              "it1",
              "c2"
            ]
          },
          {
            "type": "capsule",
            "sentence": "The question is whether Mia can come.",
            "zh": "介绍时说出尚待确认的问题。 问题是米娅是否能来，用表语从句。",
            "axes": {
              "clause": [
                [
                  "whether Mia can come",
                  "whether Mia can come"
                ],
                [
                  "if can Mia come",
                  "if can Mia come"
                ]
              ],
              "dock": [
                [
                  "S",
                  "主语"
                ],
                [
                  "O",
                  "动词宾语"
                ],
                [
                  "P",
                  "表语"
                ],
                [
                  "C",
                  "说明宾语"
                ],
                [
                  "Op",
                  "介词宾语"
                ]
              ]
            },
            "expected": {
              "clause": "whether Mia can come",
              "dock": "P"
            },
            "answer": "{\"clause\":\"whether Mia can come\",\"dock\":\"P\"}",
            "why": "整个 whether Mia can come 在主句中作表语；从句内部也要成立，不能照搬直接问句的 do 倒装。",
            "icon": "capsule",
            "frame": "The question is {clause}.",
            "links": [
              "c3",
              "c12"
            ]
          },
          {
            "type": "balance",
            "sentence": "Mia wants to sing and to dance.",
            "zh": "节目安排包含唱歌与跳舞两个平行短语。 识别同层结构，并表达两项都发生或都想做。",
            "axes": {
              "level": [
                [
                  "word",
                  "词语"
                ],
                [
                  "phrase",
                  "短语"
                ],
                [
                  "clause",
                  "完整分句"
                ]
              ],
              "link": [
                [
                  "and",
                  "and"
                ],
                [
                  "because",
                  "because"
                ]
              ]
            },
            "expected": {
              "level": "phrase",
              "link": "and"
            },
            "answer": "{\"level\":\"phrase\",\"link\":\"and\"}",
            "why": "本例并列两个不定式短语，结构平行。 结构和连接意义一起看，不只看两边字数。",
            "icon": "bridge",
            "labKind": "bridge",
            "frame": "Mia wants {left} {link} {right}.",
            "left": "to sing",
            "right": "to dance",
            "links": [
              "c15",
              "c17"
            ]
          },
          {
            "type": "balance",
            "sentence": "Leo has more books than Mia.",
            "zh": "只按图中的书本数比较，不按身高猜。 只比较书本数：Mia 两本、Leo 五本。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高"
                ],
                [
                  "books",
                  "书本数"
                ],
                [
                  "speed",
                  "速度"
                ]
              ],
              "line": [
                [
                  "Leo has more books than Mia.",
                  "Leo has more books than Mia."
                ],
                [
                  "Mia has more books than Leo.",
                  "Mia has more books than Leo."
                ]
              ]
            },
            "expected": {
              "measure": "books",
              "line": "Leo has more books than Mia."
            },
            "answer": "{\"measure\":\"books\",\"line\":\"Leo has more books than Mia.\"}",
            "why": "只用所选维度的数据判断方向，不能拿身高去替代速度，刻度不表示人的优劣。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                4,
                2
              ],
              "books": [
                2,
                5
              ],
              "speed": [
                4,
                2
              ]
            },
            "links": [
              "c4",
              "c15"
            ]
          },
          {
            "type": "pick",
            "sentence": "A brush is used to paint signs.",
            "zh": "后台介绍刷子的用途，此处 to 后？",
            "target": "整句",
            "answer": "paint signs",
            "options": [
              "paint signs",
              "painting signs"
            ],
            "why": "这是 use 的被动加用途，不是人习惯于画画。",
            "icon": "paint",
            "links": [
              "used1",
              "c10",
              "c17"
            ]
          }
        ],
        "note": "从句、平行结构、比较维度和强调焦点服务于一次清晰介绍。"
      },
      {
        "id": "quest-m7",
        "title": "第七幕：编辑台，换表达不换事件",
        "pages": "全书综合",
        "items": [
          {
            "type": "editor",
            "sentence": "The sign was painted by Mia yesterday.",
            "zh": "报道要改从标牌说起，保留昨天发生的事。",
            "axes": {
              "version": [
                [
                  "The sign was painted by Mia yesterday.",
                  "The sign was painted by Mia yesterday."
                ],
                [
                  "The sign is painted by Mia tomorrow.",
                  "The sign is painted by Mia tomorrow."
                ]
              ],
              "evidence": [
                [
                  "Mia 仍是涂色者，时间仍是昨天",
                  "Mia 仍是涂色者，时间仍是昨天"
                ],
                [
                  "标牌变成涂色者，时间任意变",
                  "标牌变成涂色者，时间任意变"
                ]
              ]
            },
            "expected": {
              "version": "The sign was painted by Mia yesterday.",
              "evidence": "Mia 仍是涂色者，时间仍是昨天"
            },
            "answer": "{\"version\":\"The sign was painted by Mia yesterday.\",\"evidence\":\"Mia 仍是涂色者，时间仍是昨天\"}",
            "why": "Mia 仍是涂色者，时间仍是昨天。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "Mia painted the sign yesterday.",
            "parts": [
              "Mia",
              "painted",
              "the sign",
              "yesterday"
            ],
            "links": [
              "c7",
              "c10"
            ]
          },
          {
            "type": "editor",
            "sentence": "Mia can sing and Leo can too.",
            "zh": "压缩重复动作，保留两个人都会唱。",
            "axes": {
              "version": [
                [
                  "Mia can sing and Leo can too.",
                  "Mia can sing and Leo can too."
                ],
                [
                  "Mia can sing, but Leo cannot.",
                  "Mia can sing, but Leo cannot."
                ]
              ],
              "evidence": [
                [
                  "参与者、能力和肯定意义都保持",
                  "参与者、能力和肯定意义都保持"
                ],
                [
                  "只要更短就不必管否定",
                  "只要更短就不必管否定"
                ]
              ]
            },
            "expected": {
              "version": "Mia can sing and Leo can too.",
              "evidence": "参与者、能力和肯定意义都保持"
            },
            "answer": "{\"version\":\"Mia can sing and Leo can too.\",\"evidence\":\"参与者、能力和肯定意义都保持\"}",
            "why": "参与者、能力和肯定意义都保持。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "Mia can sing and Leo can sing too.",
            "parts": [
              "Mia can sing",
              "Leo can sing too"
            ],
            "links": [
              "c15",
              "c19"
            ]
          },
          {
            "type": "editor",
            "sentence": "Leo was asked by Mia to carry the sign.",
            "zh": "换成 Leo 为主语，仍是 Mia 请 Leo 搬。",
            "axes": {
              "version": [
                [
                  "Leo was asked by Mia to carry the sign.",
                  "Leo was asked by Mia to carry the sign."
                ],
                [
                  "Mia was asked by Leo to carry the sign.",
                  "Mia was asked by Leo to carry the sign."
                ]
              ],
              "evidence": [
                [
                  "请求者是 Mia，搬运参与者是 Leo",
                  "请求者是 Mia，搬运参与者是 Leo"
                ],
                [
                  "主语位置换了就应把请求者也换",
                  "主语位置换了就应把请求者也换"
                ]
              ]
            },
            "expected": {
              "version": "Leo was asked by Mia to carry the sign.",
              "evidence": "请求者是 Mia，搬运参与者是 Leo"
            },
            "answer": "{\"version\":\"Leo was asked by Mia to carry the sign.\",\"evidence\":\"请求者是 Mia，搬运参与者是 Leo\"}",
            "why": "请求者是 Mia，搬运参与者是 Leo。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "Mia asked Leo to carry the sign.",
            "parts": [
              "Mia",
              "asked",
              "Leo",
              "to carry the sign"
            ],
            "links": [
              "c2",
              "c10",
              "c17"
            ]
          },
          {
            "type": "editor",
            "sentence": "Although tired, Mia helped.",
            "zh": "本题只省去能恢复的主语与 be，保留让步。",
            "axes": {
              "version": [
                [
                  "Although tired, Mia helped.",
                  "Although tired, Mia helped."
                ],
                [
                  "Because Mia was tired, she helped.",
                  "Because Mia was tired, she helped."
                ]
              ],
              "evidence": [
                [
                  "疲倦与帮助仍是让步关系",
                  "疲倦与帮助仍是让步关系"
                ],
                [
                  "虽然和因为可随意互换",
                  "虽然和因为可随意互换"
                ]
              ]
            },
            "expected": {
              "version": "Although tired, Mia helped.",
              "evidence": "疲倦与帮助仍是让步关系"
            },
            "answer": "{\"version\":\"Although tired, Mia helped.\",\"evidence\":\"疲倦与帮助仍是让步关系\"}",
            "why": "疲倦与帮助仍是让步关系。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "Although Mia was tired, she helped.",
            "parts": [
              "Although",
              "Mia was tired",
              "she helped"
            ],
            "links": [
              "c14",
              "c18",
              "c19"
            ]
          },
          {
            "type": "editor",
            "sentence": "The map Mia drew is here.",
            "zh": "去掉限定从句中的宾语关系词，保留谁画地图。",
            "axes": {
              "version": [
                [
                  "The map Mia drew is here.",
                  "The map Mia drew is here."
                ],
                [
                  "The map drew Mia here.",
                  "The map drew Mia here."
                ]
              ],
              "evidence": [
                [
                  "Mia 仍是画者，map 仍是画的对象",
                  "Mia 仍是画者，map 仍是画的对象"
                ],
                [
                  "删词后无需保持施受关系",
                  "删词后无需保持施受关系"
                ]
              ]
            },
            "expected": {
              "version": "The map Mia drew is here.",
              "evidence": "Mia 仍是画者，map 仍是画的对象"
            },
            "answer": "{\"version\":\"The map Mia drew is here.\",\"evidence\":\"Mia 仍是画者，map 仍是画的对象\"}",
            "why": "Mia 仍是画者，map 仍是画的对象。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "The map which Mia drew is here.",
            "parts": [
              "The map",
              "which",
              "Mia drew",
              "is here"
            ],
            "links": [
              "c13",
              "c19"
            ]
          }
        ],
        "note": "逐项核对改写的参与者、时间、能力与逻辑。"
      },
      {
        "id": "quest-m8",
        "title": "终幕：陌生稿件也能核对",
        "pages": "全书综合",
        "items": [
          {
            "type": "editor",
            "sentence": "Mia knows where Leo lives.",
            "zh": "新的介绍稿中，嵌入句保持自然语序；正确稿无需改动。",
            "axes": {
              "version": [
                [
                  "Mia knows where Leo lives.",
                  "Mia knows where Leo lives."
                ],
                [
                  "Mia knows where does Leo live.",
                  "Mia knows where does Leo live."
                ]
              ],
              "evidence": [
                [
                  "Leo 在嵌入从句的 lives 前",
                  "Leo 在嵌入从句的 lives 前"
                ],
                [
                  "有 where 就必须直接问句倒装",
                  "有 where 就必须直接问句倒装"
                ]
              ]
            },
            "expected": {
              "version": "Mia knows where Leo lives.",
              "evidence": "Leo 在嵌入从句的 lives 前"
            },
            "answer": "{\"version\":\"Mia knows where Leo lives.\",\"evidence\":\"Leo 在嵌入从句的 lives 前\"}",
            "why": "Leo 在嵌入从句的 lives 前。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "Mia knows where Leo lives.",
            "parts": [
              "Mia knows",
              "where",
              "Leo lives"
            ],
            "links": [
              "c12",
              "c1"
            ]
          },
          {
            "type": "editor",
            "sentence": "Reading aloud is familiar to Leo.",
            "zh": "换一种说法，保留已经熟悉朗读的意义。",
            "axes": {
              "version": [
                [
                  "Reading aloud is familiar to Leo.",
                  "Reading aloud is familiar to Leo."
                ],
                [
                  "Leo only read aloud in the past.",
                  "Leo only read aloud in the past."
                ]
              ],
              "evidence": [
                [
                  "熟悉状态保留，不偷换成过去习惯",
                  "熟悉状态保留，不偷换成过去习惯"
                ],
                [
                  "used 的拼写意味着一定是过去",
                  "used 的拼写意味着一定是过去"
                ]
              ]
            },
            "expected": {
              "version": "Reading aloud is familiar to Leo.",
              "evidence": "熟悉状态保留，不偷换成过去习惯"
            },
            "answer": "{\"version\":\"Reading aloud is familiar to Leo.\",\"evidence\":\"熟悉状态保留，不偷换成过去习惯\"}",
            "why": "熟悉状态保留，不偷换成过去习惯。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "Leo is used to reading aloud.",
            "parts": [
              "Leo",
              "is used to",
              "reading aloud"
            ],
            "links": [
              "used1",
              "c16"
            ]
          },
          {
            "type": "editor",
            "sentence": "Mia makes the tour exciting for visitors.",
            "zh": "按本题米娅的讲解令人兴奋的意思改述。",
            "axes": {
              "version": [
                [
                  "Mia makes the tour exciting for visitors.",
                  "Mia makes the tour exciting for visitors."
                ],
                [
                  "Mia is excited, so she cannot excite anyone.",
                  "Mia is excited, so she cannot excite anyone."
                ]
              ],
              "evidence": [
                [
                  "Mia 是引起兴奋的来源",
                  "Mia 是引起兴奋的来源"
                ],
                [
                  "人永远只能是 -ed 的感受者",
                  "人永远只能是 -ed 的感受者"
                ]
              ]
            },
            "expected": {
              "version": "Mia makes the tour exciting for visitors.",
              "evidence": "Mia 是引起兴奋的来源"
            },
            "answer": "{\"version\":\"Mia makes the tour exciting for visitors.\",\"evidence\":\"Mia 是引起兴奋的来源\"}",
            "why": "Mia 是引起兴奋的来源。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "Mia is an exciting guide.",
            "parts": [
              "Mia",
              "an exciting guide"
            ],
            "links": [
              "c5",
              "c18"
            ]
          },
          {
            "type": "editor",
            "sentence": "Reading the map is useful.",
            "zh": "把具体内容放回主语位置，保留读地图有用的评价。",
            "axes": {
              "version": [
                [
                  "Reading the map is useful.",
                  "Reading the map is useful."
                ],
                [
                  "The map is reading a useful person.",
                  "The map is reading a useful person."
                ]
              ],
              "evidence": [
                [
                  "读地图这项活动与 useful 评价保持",
                  "读地图这项活动与 useful 评价保持"
                ],
                [
                  "地图成为读者也算保留原意",
                  "地图成为读者也算保留原意"
                ]
              ]
            },
            "expected": {
              "version": "Reading the map is useful.",
              "evidence": "读地图这项活动与 useful 评价保持"
            },
            "answer": "{\"version\":\"Reading the map is useful.\",\"evidence\":\"读地图这项活动与 useful 评价保持\"}",
            "why": "读地图这项活动与 useful 评价保持。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "It is useful to read the map.",
            "parts": [
              "It is useful",
              "to read the map"
            ],
            "links": [
              "it1",
              "c4",
              "c16",
              "c17"
            ]
          },
          {
            "type": "editor",
            "sentence": "Mia is ready; Leo is not ready.",
            "zh": "最后核对清单，不能为了简短抹去 Leo 的否定。",
            "axes": {
              "version": [
                [
                  "Mia is ready; Leo is not ready.",
                  "Mia is ready; Leo is not ready."
                ],
                [
                  "Mia and Leo are both ready.",
                  "Mia and Leo are both ready."
                ]
              ],
              "evidence": [
                [
                  "两位参与者及其不同准备状态保持",
                  "两位参与者及其不同准备状态保持"
                ],
                [
                  "把 not 删掉不影响故事",
                  "把 not 删掉不影响故事"
                ]
              ]
            },
            "expected": {
              "version": "Mia is ready; Leo is not ready.",
              "evidence": "两位参与者及其不同准备状态保持"
            },
            "answer": "{\"version\":\"Mia is ready; Leo is not ready.\",\"evidence\":\"两位参与者及其不同准备状态保持\"}",
            "why": "两位参与者及其不同准备状态保持。选择改写后还须核对参与者、时间、否定和逻辑，本题按给定方案判断。",
            "icon": "post",
            "original": "Mia is ready, but Leo is not.",
            "parts": [
              "Mia is ready",
              "but",
              "Leo is not"
            ],
            "links": [
              "be1",
              "c9",
              "c15",
              "c19"
            ]
          }
        ],
        "note": "不看章节提示先判断，再用证据解释；仍可回看相关小故事。"
      }
    ]
  },
  "corrections": [
    {
      "id": "c12-m5-q5",
      "before": {
        "zh": "此处 that Mia drew 前已有 picture，它主要给 book 添加线索，属于哪类？"
      },
      "after": {
        "zh": "此处 that Mia drew 前已有 picture，它主要给 picture 添加线索，属于哪类？"
      },
      "reason": "修饰对象误写 book，实际为 picture"
    },
    {
      "id": "c12-m3-q1",
      "before": {
        "zh": "我知道是谁涂了盒子。who 自己就是从句的主语。"
      },
      "after": {
        "zh": "在普通、无强调的表达中，我知道是谁涂了盒子。who 自己就是从句的主语。"
      },
      "reason": "把普通无强调语境限定提前，避免把强调 do 误当普遍错误"
    },
    {
      "id": "c19-m3-q2",
      "before": {
        "answer": "可以，语境给出离开什么",
        "options": [
          "可以，语境给出离开什么",
          "不能，所有交流必须重复完整主语谓语"
        ]
      },
      "after": {
        "answer": "可以，问句提供省略部分的语境",
        "options": [
          "可以，问句提供省略部分的语境",
          "不能，所有交流必须重复完整主语谓语"
        ]
      },
      "reason": "中文选项把何时离开误说成离开什么"
    }
  ]
};
export function applyAtlas(chapters){for(const [id,data]of Object.entries(atlasData.refinements)){const c=chapters.find(c=>c.id===id);c.lessons[0].demo=data.lessons[0].demo;c.lessons.push(...data.lessons);c.missions.unshift(...data.missions);c.refined=true;}chapters.push(atlasData.quest);for(const p of atlasData.corrections){const [chapterId,missionId,num]=p.id.split('-');const q=chapters.find(c=>c.id===chapterId).missions.find(m=>m.id===chapterId+'-'+missionId).items[Number(num.slice(1))-1];Object.assign(q,p.after);}const c12=chapters.find(c=>c.id==='c12');for(const l of c12.lessons){l.body=l.body.replace('it 专题后续继续展开','it 独立专题已开放，可继续回看');l.tags=l.tags.map(t=>t.replace('it 拓展仍待精做','it 专题已开放'));}const c19=chapters.find(c=>c.id==='c19');for(const l of c19.lessons)l.body=l.body.replace('独立拓展和全书最终精修仍需继续','独立拓展和跨章综合已开放，可继续迁移与复习');}
