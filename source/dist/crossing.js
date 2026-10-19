// Fifth journey: original examples aligned to printed pages 152–178.
export const crossingChapters=[
  {
    "id": "c13",
    "number": "13",
    "title": "线索侦探馆",
    "subtitle": "让从句找到它描述的对象",
    "mechanic": "先行词挂接 · 逗号闸门 · 关系角色",
    "theme": "lavender",
    "scene": "search",
    "book": "第 13 章 · 书内 152–161 页",
    "brief": "从句像一条线索：先找到它描述的对象，再决定是在辨认“哪一个”，还是补充已经明确对象的信息。开启逗号闸门，亲眼看句子怎样改变。",
    "lessons": [
      {
        "title": "线索接到谁身上？",
        "body": "The fox who carries a book is here. 里 who carries a book 给 fox 添加线索；fox 是先行词。先看从句内部 who 在做什么，不要再重复放一个 he 当主语。",
        "example": "The fox who carries a book is here.",
        "zh": "拿着书的狐狸在这里。",
        "visual": "search",
        "tags": [
          "先行词",
          "从句中的角色",
          "不重复主语"
        ]
      },
      {
        "title": "指人、指物，还要看缺口",
        "body": "who 常指人，which 常指物，that 可引导一些限定关系从句。whom 是较正式的宾语形式；whose 表所属。地点后也不一定用 where：the garden which Mia visited 中 visited 缺宾语。",
        "example": "The garden where Mia plays. The garden which Mia visited.",
        "zh": "米娅玩耍的花园。米娅参观过的花园。",
        "visual": "map",
        "tags": [
          "who / whom",
          "which / that",
          "whose",
          "where / when 看角色"
        ]
      },
      {
        "title": "逗号是旁注的闸门",
        "body": "限定从句帮助辨认是哪一个，通常不加逗号；非限定从句给已明确对象加旁注，用逗号隔开。判断靠语境，不凭人名、亲属名称就断言必须或绝不能限定。非限定从句不使用 that，也不省关系代词。",
        "example": "Mia, who paints every day, is here.",
        "zh": "米娅在这里，她每天画画。",
        "visual": "portrait",
        "tags": [
          "辨认对象",
          "补充信息",
          "逗号",
          "非限定不用 that"
        ]
      },
      {
        "title": "哪些连接可以省？",
        "body": "限定从句中，作宾语的关系代词常可省：the book (that) I read。作主语的 who/that 不能只删掉留下 reads。介词留在句尾时有的宾语关系词可省；介词前置时则保留 whom/which，不用 that。",
        "example": "The book I read. The friend to whom I spoke.",
        "zh": "我读的书。我说过话的那位朋友。",
        "visual": "link",
        "tags": [
          "宾语可省的条件",
          "主语不可单删",
          "to whom / in which"
        ]
      },
      {
        "title": "内容包和关系线索不同",
        "body": "the news that Mia won 里 that 后是完整内容，说明消息是什么；the news that Mia shared 里 that 对应 shared 的宾语，说明是哪条消息。前一种常称内容或同位语从句，不当作删掉 be 生成的普通关系从句。",
        "example": "The news that Mia shared was good.",
        "zh": "米娅分享的消息很好。",
        "visual": "capsule",
        "tags": [
          "完整内容",
          "内部有角色的关系词",
          "不要只看 that"
        ]
      },
      {
        "title": "精简线索，不能随意删",
        "body": "the box which was painted yesterday 可在合适语境简为 the box painted yesterday；the fox who is in blue 可简为 the fox in blue。但不能把 who is happy 一律删成任意 happy 后置结构，也不能因见 be 就随意删除。",
        "example": "The box painted yesterday is blue.",
        "zh": "昨天涂过色的盒子是蓝色的。",
        "visual": "box",
        "tags": [
          "分词修饰",
          "介词短语",
          "保留意义",
          "后续分词章节继续展开"
        ]
      }
    ],
    "missions": [
      {
        "id": "c13-m1",
        "title": "找到线索的落点",
        "pages": "152–159",
        "items": [
          {
            "type": "relative",
            "sentence": "The fox who carries a book is here.",
            "zh": "找到拿着书的狐狸；用从句辨认是哪只狐狸。",
            "axes": {
              "head": [
                [
                  "The fox",
                  "The fox"
                ],
                [
                  "The book",
                  "The book"
                ]
              ],
              "clue": [
                [
                  "who carries a book",
                  "who carries a book"
                ],
                [
                  "who wears a hat",
                  "who wears a hat"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "The fox",
              "clue": "who carries a book",
              "mode": "defining"
            },
            "answer": "{\"head\":\"The fox\",\"clue\":\"who carries a book\",\"mode\":\"defining\"}",
            "why": "who 在从句内作主语，指向 fox；限定信息与主句之间不加逗号。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is here.",
              "extra": "{head}, {clause}, is here."
            },
            "anchorArt": "fox"
          },
          {
            "type": "relative",
            "sentence": "The book which Mia painted is here.",
            "zh": "找米娅画过封面的那本书；Mia 是画的人，书是被画的对象。",
            "axes": {
              "head": [
                [
                  "The book",
                  "The book"
                ],
                [
                  "The fox",
                  "The fox"
                ]
              ],
              "clue": [
                [
                  "which Mia painted",
                  "which Mia painted"
                ],
                [
                  "which painted Mia",
                  "which painted Mia"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "The book",
              "clue": "which Mia painted",
              "mode": "defining"
            },
            "answer": "{\"head\":\"The book\",\"clue\":\"which Mia painted\",\"mode\":\"defining\"}",
            "why": "which 在从句内作 painted 的宾语，不要颠倒谁画谁；限制性 which 在标准英语中可用。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is here.",
              "extra": "{head}, {clause}, is here."
            },
            "anchorArt": "book"
          },
          {
            "type": "relative",
            "sentence": "The garden where Mia plays is quiet.",
            "zh": "说明米娅玩耍的那个花园；从句需要“在这个地方”的关系。",
            "axes": {
              "head": [
                [
                  "The garden",
                  "The garden"
                ],
                [
                  "The book",
                  "The book"
                ]
              ],
              "clue": [
                [
                  "where Mia plays",
                  "where Mia plays"
                ],
                [
                  "which Mia plays",
                  "which Mia plays"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "The garden",
              "clue": "where Mia plays",
              "mode": "defining"
            },
            "answer": "{\"head\":\"The garden\",\"clue\":\"where Mia plays\",\"mode\":\"defining\"}",
            "why": "where 表示在该地点玩耍；不是看到地点名词就无条件用 where，要看从句缺的角色。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is quiet.",
              "extra": "{head}, {clause}, is quiet."
            },
            "anchorArt": "flower"
          },
          {
            "type": "relative",
            "sentence": "The day when Mia arrived was sunny.",
            "zh": "描述米娅到达的那一天；到达发生在这个时间。",
            "axes": {
              "head": [
                [
                  "The day",
                  "The day"
                ],
                [
                  "The garden",
                  "The garden"
                ]
              ],
              "clue": [
                [
                  "when Mia arrived",
                  "when Mia arrived"
                ],
                [
                  "which Mia arrived",
                  "which Mia arrived"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "The day",
              "clue": "when Mia arrived",
              "mode": "defining"
            },
            "answer": "{\"head\":\"The day\",\"clue\":\"when Mia arrived\",\"mode\":\"defining\"}",
            "why": "when 在这里表示到达的时间；arrived 不直接把 day 当普通宾语。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} was sunny.",
              "extra": "{head}, {clause}, was sunny."
            },
            "anchorArt": "clock"
          },
          {
            "type": "relative",
            "sentence": "The child whose hat is blue is here.",
            "zh": "找到帽子是蓝色的孩子；帽子属于这个孩子。",
            "axes": {
              "head": [
                [
                  "The child",
                  "The child"
                ],
                [
                  "The hat",
                  "The hat"
                ]
              ],
              "clue": [
                [
                  "whose hat is blue",
                  "whose hat is blue"
                ],
                [
                  "who hat is blue",
                  "who hat is blue"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "The child",
              "clue": "whose hat is blue",
              "mode": "defining"
            },
            "answer": "{\"head\":\"The child\",\"clue\":\"whose hat is blue\",\"mode\":\"defining\"}",
            "why": "whose + 名词 hat 表达所属；不能直接用 who hat。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is here.",
              "extra": "{head}, {clause}, is here."
            },
            "anchorArt": "portrait"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c13-m2",
        "title": "给已知对象添旁注",
        "pages": "152–159",
        "items": [
          {
            "type": "relative",
            "sentence": "Mia, who paints every day, is here.",
            "zh": "已明确说的是朋友米娅，再补充她每天画画的消息；不用从人群里选哪位米娅。",
            "axes": {
              "head": [
                [
                  "Mia",
                  "Mia"
                ],
                [
                  "The book",
                  "The book"
                ]
              ],
              "clue": [
                [
                  "who paints every day",
                  "who paints every day"
                ],
                [
                  "which paints every day",
                  "which paints every day"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "Mia",
              "clue": "who paints every day",
              "mode": "extra"
            },
            "answer": "{\"head\":\"Mia\",\"clue\":\"who paints every day\",\"mode\":\"extra\"}",
            "why": "补充说明用逗号隔开；指人可用 who，不能在这种非限制性关系从句里换成 that。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is here.",
              "extra": "{head}, {clause}, is here."
            },
            "anchorArt": "fox"
          },
          {
            "type": "relative",
            "sentence": "This box, which is blue, is mine.",
            "zh": "双方已经认出这一只盒子；补充它是蓝色的，再说明它是我的。",
            "axes": {
              "head": [
                [
                  "This box",
                  "This box"
                ],
                [
                  "Mia",
                  "Mia"
                ]
              ],
              "clue": [
                [
                  "which is blue",
                  "which is blue"
                ],
                [
                  "that is blue",
                  "that is blue"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "This box",
              "clue": "which is blue",
              "mode": "extra"
            },
            "answer": "{\"head\":\"This box\",\"clue\":\"which is blue\",\"mode\":\"extra\"}",
            "why": "已明确的对象加旁注，用逗号和 which；that 不引导这类非限制性关系从句。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is mine.",
              "extra": "{head}, {clause}, is mine."
            },
            "anchorArt": "box"
          },
          {
            "type": "relative",
            "sentence": "Mia, whom we met yesterday, is here.",
            "zh": "朋友米娅已明确；用较正式形式补充“我们昨天见过她”。",
            "axes": {
              "head": [
                [
                  "Mia",
                  "Mia"
                ],
                [
                  "The garden",
                  "The garden"
                ]
              ],
              "clue": [
                [
                  "whom we met yesterday",
                  "whom we met yesterday"
                ],
                [
                  "who met we yesterday",
                  "who met we yesterday"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "Mia",
              "clue": "whom we met yesterday",
              "mode": "extra"
            },
            "answer": "{\"head\":\"Mia\",\"clue\":\"whom we met yesterday\",\"mode\":\"extra\"}",
            "why": "whom 在从句内作 met 的宾语；we 是主语。非正式用法也可使用 who，不能据此说 whom 永远必需。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is here.",
              "extra": "{head}, {clause}, is here."
            },
            "anchorArt": "portrait"
          },
          {
            "type": "relative",
            "sentence": "Mia, whose bag is blue, is here.",
            "zh": "已明确说米娅，补充她的背包是蓝色的。",
            "axes": {
              "head": [
                [
                  "Mia",
                  "Mia"
                ],
                [
                  "The bag",
                  "The bag"
                ]
              ],
              "clue": [
                [
                  "whose bag is blue",
                  "whose bag is blue"
                ],
                [
                  "who bag is blue",
                  "who bag is blue"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "Mia",
              "clue": "whose bag is blue",
              "mode": "extra"
            },
            "answer": "{\"head\":\"Mia\",\"clue\":\"whose bag is blue\",\"mode\":\"extra\"}",
            "why": "whose 表所属，也可以出现在补充说明的关系从句中；这里用两侧逗号隔开。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause} is here.",
              "extra": "{head}, {clause}, is here."
            },
            "anchorArt": "bag"
          },
          {
            "type": "relative",
            "sentence": "Mia won the race, which made Leo smile.",
            "zh": "把米娅赢得比赛整个事件作为补充 which 的指向：这件事让里奥笑了。",
            "axes": {
              "head": [
                [
                  "Mia won the race",
                  "Mia won the race"
                ],
                [
                  "The race",
                  "The race"
                ]
              ],
              "clue": [
                [
                  "which made Leo smile",
                  "which made Leo smile"
                ],
                [
                  "that made Leo smile",
                  "that made Leo smile"
                ]
              ],
              "mode": [
                [
                  "defining",
                  "限定 · 认出哪一个"
                ],
                [
                  "extra",
                  "补充 · 添加旁注"
                ]
              ]
            },
            "expected": {
              "head": "Mia won the race",
              "clue": "which made Leo smile",
              "mode": "extra"
            },
            "answer": "{\"head\":\"Mia won the race\",\"clue\":\"which made Leo smile\",\"mode\":\"extra\"}",
            "why": "补充 which 可以指向前面整个事件，不总是只替代最近的名词；此处不用 that。",
            "icon": "search",
            "frames": {
              "defining": "{head} {clause}.",
              "extra": "{head}, {clause}."
            },
            "anchorArt": "star"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c13-m3",
        "title": "关系词看内部角色",
        "pages": "153–158",
        "items": [
          {
            "type": "pick",
            "sentence": "The garden ___ Mia visited is small.",
            "zh": "visited 需要被参观的对象；地点名词不自动决定 where。",
            "target": "___",
            "answer": "which",
            "options": [
              "which",
              "where"
            ],
            "why": "which 在这里作 visited 的宾语；where 不能直接填这个宾语缺口。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The garden ___ Mia plays is small.",
            "zh": "play 在此不直接接 garden 作宾语，需要地点关系。",
            "target": "___",
            "answer": "where",
            "options": [
              "where",
              "which"
            ],
            "why": "where 表在花园里；也可改成 in which 或 which...in 的合适结构。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The girl ___ bag is blue is here.",
            "zh": "蓝色背包属于这个女孩。",
            "target": "___",
            "answer": "whose",
            "options": [
              "whose",
              "who"
            ],
            "why": "whose bag 是所属词组；who 不能直接放在 bag 前替代所属。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The room in ___ we read is warm.",
            "zh": "介词 in 已经前置，选择对应事物的关系词。",
            "target": "___",
            "answer": "which",
            "options": [
              "which",
              "that"
            ],
            "why": "介词前置的这种关系结构用 in which，不说 in that 来表示同一关系。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The friend to ___ I spoke is here.",
            "zh": "练较正式的介词前置、指人的宾语形式。",
            "target": "___",
            "answer": "whom",
            "options": [
              "whom",
              "that"
            ],
            "why": "to whom 为较正式搭配；口语也可用 the friend I spoke to，不能把两种结构混接。",
            "icon": "search"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c13-m4",
        "title": "省略之前先找角色",
        "pages": "155–160",
        "items": [
          {
            "type": "pick",
            "sentence": "The book that I read is blue.",
            "zh": "that 在限定从句中作 read 的宾语，能否常规省去？",
            "target": "整句",
            "answer": "可以：The book I read is blue.",
            "options": [
              "可以：The book I read is blue.",
              "不可以，所有关系词都不能省"
            ],
            "why": "这里 I 是从句主语，that 作宾语；符合限定宾语关系词常可省的条件。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The girl who reads is Mia.",
            "zh": "能否只删去 who，写 The girl reads is Mia？",
            "target": "整句",
            "answer": "不能，who 在从句中作主语",
            "options": [
              "不能，who 在从句中作主语",
              "能，关系词都只是装饰"
            ],
            "why": "主语关系词不能按宾语省略规则单独删掉，否则出现没有正确连接的两个谓语。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "Mia, whom we met, is here.",
            "zh": "这是补充说明，能否照限定宾语关系词规则省掉 whom？",
            "target": "整句",
            "answer": "不能这样省",
            "options": [
              "不能这样省",
              "可以，宾语关系词在任何从句都能省"
            ],
            "why": "非限定关系从句不按这种规则省略关系代词；要保留引导和逗号。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The box which was painted yesterday is blue.",
            "zh": "在本题语境中选择自然的精简形式。",
            "target": "整句",
            "answer": "The box painted yesterday is blue.",
            "options": [
              "The box painted yesterday is blue.",
              "The box was yesterday is blue."
            ],
            "why": "可用过去分词短语 painted yesterday 保留盒子被涂色的关系，不能乱删谓语成分。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The fox who is in blue is here.",
            "zh": "保留“穿蓝衣服”线索的自然精简。",
            "target": "整句",
            "answer": "The fox in blue is here.",
            "options": [
              "The fox in blue is here.",
              "The fox who blue is here."
            ],
            "why": "in blue 是可作后置修饰的介词短语；不是见 be 就能任意删出新结构。",
            "icon": "search"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c13-m5",
        "title": "逗号与 which 的边界",
        "pages": "156–159",
        "items": [
          {
            "type": "pick",
            "sentence": "The book which I read is blue.",
            "zh": "限制性 which 是否在标准英语中一概错误？",
            "target": "整句",
            "answer": "不是，which 可以这样用",
            "options": [
              "不是，which 可以这样用",
              "是，所有限定从句只能用 that"
            ],
            "why": "限定从句中 which 可以指物；有些写作风格偏好 that，不等于 which 普遍错误。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "Mia, ___ is here, has a book.",
            "zh": "已确定米娅，逗号内补充她在这里。",
            "target": "___",
            "answer": "who",
            "options": [
              "who",
              "that"
            ],
            "why": "非限定关系从句指人用 who；that 不用于这一补充结构。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "Mia won, which made Leo smile.",
            "zh": "这里 which 按题目意思指向什么？",
            "target": "整句",
            "answer": "米娅获胜整件事",
            "options": [
              "米娅获胜整件事",
              "只能指向 Leo"
            ],
            "why": "补充 which 可对前面整个分句内容作评论，不只指最近名词。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The Mia I knew was shy.",
            "zh": "在明确比较过去和现在版本的语境中，人名能否受限定修饰？",
            "target": "整句",
            "answer": "可以，判断要看语境",
            "options": [
              "可以，判断要看语境",
              "不可以，人名永远只能非限定"
            ],
            "why": "可以谈我从前认识的那位米娅；不要把名字等同于任何语境都只能加逗号。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The books that are blue are mine.",
            "zh": "给一堆不同颜色的书分类，本句说明哪部分是我的？",
            "target": "整句",
            "answer": "蓝色的那些书",
            "options": [
              "蓝色的那些书",
              "全部书，而且只是顺便说颜色"
            ],
            "why": "限定从句缩小到蓝色书这一组；补充说明需要不同语境和标点。",
            "icon": "search"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c13-m6",
        "title": "线索侦探毕业案",
        "pages": "152–161",
        "items": [
          {
            "type": "pick",
            "sentence": "The news that Mia won surprised us.",
            "zh": "that 后 Mia won 结构完整，本题是说明消息内容。",
            "target": "整句",
            "answer": "内容从句，说明消息是什么",
            "options": [
              "内容从句，说明消息是什么",
              "that 在从句中作 won 的宾语"
            ],
            "why": "这里 that 不填 won 的宾语位置；这是内容说明，与关系从句内部缺口不同。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The news that Mia shared surprised us.",
            "zh": "shared 缺少分享的对象，that 对应什么？",
            "target": "整句",
            "answer": "shared 的宾语，指 news",
            "options": [
              "shared 的宾语，指 news",
              "没有任何内部角色，只连接完整内容"
            ],
            "why": "that 在关系从句内部对应被分享的消息，帮助识别是哪条消息。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The girl who carries a book smiles.",
            "zh": "能否再写成 who she carries a book？",
            "target": "整句",
            "answer": "不能，在此重复了主语",
            "options": [
              "不能，在此重复了主语",
              "能，who 后必须再有 she"
            ],
            "why": "who 自己担任从句主语，普通标准关系结构不再加 she 重复该角色。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "The day when Mia arrived was sunny.",
            "zh": "when 的工作是什么？",
            "target": "整句",
            "answer": "连接到达发生的时间",
            "options": [
              "连接到达发生的时间",
              "作 arrived 的普通宾语"
            ],
            "why": "when 在本题表示在那一天，属于时间关系，不是 arrived 的直接宾语。",
            "icon": "search"
          },
          {
            "type": "pick",
            "sentence": "Mia, whose bag is blue, smiles.",
            "zh": "whose 只能用于限定从句吗？",
            "target": "整句",
            "answer": "不是，这里也可补充所属信息",
            "options": [
              "不是，这里也可补充所属信息",
              "是，逗号内不能出现 whose"
            ],
            "why": "whose 可出现在限定和非限定关系从句里；仍要看结构和语境。",
            "icon": "search"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      }
    ]
  },
  {
    "id": "c14",
    "number": "14",
    "title": "故事机关链",
    "subtitle": "同样两件事，接法不同，故事就不同",
    "mechanic": "事件机关 · 关系搭线 · 条件与结果",
    "theme": "mint",
    "scene": "link",
    "book": "第 14 章 · 书内 162–168 页",
    "brief": "响铃之后才离校，或者虽然下雨仍出门？选一块连接机关，再给关系命名，让时间、原因、条件和让步在故事里各司其职。",
    "lessons": [
      {
        "title": "两张事件卡，怎样连？",
        "body": "Mia stays home because it rains. 里 because 从句说明原因；After the bell rang, Mia left. 里 After 从句说明时间。先辨认故事关系，再挑连接词；不按中文一个字生硬对照。",
        "example": "After the bell rang, Mia left.",
        "zh": "铃响后，米娅离开了。",
        "visual": "link",
        "tags": [
          "事件卡",
          "从属连接",
          "主句与从句"
        ]
      },
      {
        "title": "先后和同时都属于时间",
        "body": "before、after 说明相对顺序；while 常把两个过程放在同一时间里；when/as soon as 可定位事件。事件卡摆在左边不等于一定先发生，要看连接词。",
        "example": "Before Mia sleeps, she reads.",
        "zh": "米娅睡觉之前会读书。",
        "visual": "clock",
        "tags": [
          "before / after",
          "when / while",
          "as soon as"
        ]
      },
      {
        "title": "如果，与因为不是一回事",
        "body": "because 给出原因；if 提出条件，未必保证条件发生。as long as 表只要，unless 可在合适语境表达除非。普通谈将来的时间/条件从句常用现在式，主句可用 will；不是所有 if 从句都遵守同一个时态口诀。",
        "example": "If it rains tomorrow, we will stay home.",
        "zh": "如果明天下雨，我们会待在家。",
        "visual": "house",
        "tags": [
          "原因",
          "开放条件",
          "现在式表将来",
          "回顾第 8 章假想"
        ]
      },
      {
        "title": "虽然、对照、目的和结果",
        "body": "although/even though 让步：事实如此但仍有意外结果；whereas/while 可作对照。so that 常可表示目的，so...that/such...that 可引出结果。even if 可谈假设性让步，不与 even though 的事实让步完全等同。",
        "example": "Although it rains, we go out.",
        "zh": "虽然下雨，我们仍出门。",
        "visual": "flower",
        "tags": [
          "让步",
          "对照",
          "目的",
          "结果"
        ]
      },
      {
        "title": "给连接词和标点留位置",
        "body": "前置的状语从句通常用逗号与主句分开；后置是否加逗号还受语义、语气影响。同一层“虽然……但是……”通常用 although 或 but 的一种结构，不教成整篇英语里这两个词绝对不能共存。",
        "example": "Although Mia is tired, she smiles. Mia is tired, but she smiles.",
        "zh": "虽然米娅累了，她仍微笑。米娅累了，但仍微笑。",
        "visual": "bridge",
        "tags": [
          "从句前置常用逗号",
          "不要双重连接",
          "看整句的层级"
        ]
      }
    ],
    "missions": [
      {
        "id": "c14-m1",
        "title": "给事件装上关系机关",
        "pages": "162–167",
        "items": [
          {
            "type": "chain",
            "sentence": "We stay home because it is raining.",
            "zh": "把下雨明确说成待在家的原因。",
            "axes": {
              "relation": [
                [
                  "cause",
                  "原因"
                ],
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "condition",
                  "条件"
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
            "why": "because 从句回答为什么；不是仅仅并排摆放两件事。",
            "icon": "link",
            "frame": "We stay home {link} it is raining.",
            "left": "We stay home",
            "right": "it is raining",
            "leftArt": "house",
            "rightArt": "flower"
          },
          {
            "type": "chain",
            "sentence": "After the bell rang, Mia left school.",
            "zh": "先响铃，米娅随后离校。",
            "axes": {
              "relation": [
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "cause",
                  "原因"
                ],
                [
                  "condition",
                  "条件"
                ]
              ],
              "link": [
                [
                  "After",
                  "After"
                ],
                [
                  "Before",
                  "Before"
                ]
              ]
            },
            "expected": {
              "relation": "time",
              "link": "After"
            },
            "answer": "{\"relation\":\"time\",\"link\":\"After\"}",
            "why": "After 指铃响之后离校；Before 会把先后关系改掉。",
            "icon": "link",
            "frame": "{link} the bell rang, Mia left school.",
            "left": "the bell rang",
            "right": "Mia left school",
            "leftArt": "clock",
            "rightArt": "fox"
          },
          {
            "type": "chain",
            "sentence": "Before Mia sleeps, she brushes her teeth.",
            "zh": "米娅先刷牙，再睡觉。",
            "axes": {
              "relation": [
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "cause",
                  "原因"
                ],
                [
                  "condition",
                  "条件"
                ]
              ],
              "link": [
                [
                  "Before",
                  "Before"
                ],
                [
                  "After",
                  "After"
                ]
              ]
            },
            "expected": {
              "relation": "time",
              "link": "Before"
            },
            "answer": "{\"relation\":\"time\",\"link\":\"Before\"}",
            "why": "Before Mia sleeps 意为在睡觉之前，主句刷牙先发生；不是总把左边事件看成较早。",
            "icon": "link",
            "frame": "{link} Mia sleeps, she brushes her teeth.",
            "left": "Mia sleeps",
            "right": "she brushes her teeth",
            "leftArt": "moon",
            "rightArt": "fox"
          },
          {
            "type": "chain",
            "sentence": "While Mia reads, Leo draws.",
            "zh": "描述米娅读书时，里奥同时画画；本题不表达因果。",
            "axes": {
              "relation": [
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "cause",
                  "原因"
                ],
                [
                  "condition",
                  "条件"
                ]
              ],
              "link": [
                [
                  "While",
                  "While"
                ],
                [
                  "Because",
                  "Because"
                ]
              ]
            },
            "expected": {
              "relation": "time",
              "link": "While"
            },
            "answer": "{\"relation\":\"time\",\"link\":\"While\"}",
            "why": "while 在此表示时间重叠；并非每个 while 都只能表时间，其他语境可作对照。",
            "icon": "link",
            "frame": "{link} Mia reads, Leo draws.",
            "left": "Mia reads",
            "right": "Leo draws",
            "leftArt": "book",
            "rightArt": "paint"
          },
          {
            "type": "chain",
            "sentence": "If it rains tomorrow, we will stay home.",
            "zh": "明天天气未定；下雨是待在家的条件。",
            "axes": {
              "relation": [
                [
                  "condition",
                  "条件"
                ],
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "cause",
                  "原因"
                ]
              ],
              "link": [
                [
                  "If",
                  "If"
                ],
                [
                  "Because",
                  "Because"
                ]
              ]
            },
            "expected": {
              "relation": "condition",
              "link": "If"
            },
            "answer": "{\"relation\":\"condition\",\"link\":\"If\"}",
            "why": "if 表开放条件，从句 rains 用现在式谈未来；没有断言明天一定下雨。",
            "icon": "link",
            "frame": "{link} it rains tomorrow, we will stay home.",
            "left": "it rains tomorrow",
            "right": "we will stay home",
            "leftArt": "flower",
            "rightArt": "house"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c14-m2",
        "title": "出乎预期也能连起来",
        "pages": "162–167",
        "items": [
          {
            "type": "chain",
            "sentence": "Although it is raining, we go out.",
            "zh": "虽然下雨，我们仍出门，突出出乎预期。",
            "axes": {
              "relation": [
                [
                  "concession",
                  "让步"
                ],
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "cause",
                  "原因"
                ]
              ],
              "link": [
                [
                  "Although",
                  "Although"
                ],
                [
                  "Because",
                  "Because"
                ]
              ]
            },
            "expected": {
              "relation": "concession",
              "link": "Although"
            },
            "answer": "{\"relation\":\"concession\",\"link\":\"Although\"}",
            "why": "although 引导让步，与主句形成预期反差；同一层连接不再多加 but。",
            "icon": "link",
            "frame": "{link} it is raining, we go out.",
            "left": "it is raining",
            "right": "we go out",
            "leftArt": "flower",
            "rightArt": "fox"
          },
          {
            "type": "chain",
            "sentence": "Mia likes tea, whereas Leo likes milk.",
            "zh": "只对照两人的偏好，不把一人偏好当成另一人的原因。",
            "axes": {
              "relation": [
                [
                  "contrast",
                  "对照"
                ],
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "cause",
                  "原因"
                ]
              ],
              "link": [
                [
                  "whereas",
                  "whereas"
                ],
                [
                  "because",
                  "because"
                ]
              ]
            },
            "expected": {
              "relation": "contrast",
              "link": "whereas"
            },
            "answer": "{\"relation\":\"contrast\",\"link\":\"whereas\"}",
            "why": "whereas 在此引出对照，两个偏好不是因果或时间先后。",
            "icon": "link",
            "frame": "Mia likes tea, {link} Leo likes milk.",
            "left": "Mia likes tea",
            "right": "Leo likes milk",
            "leftArt": "bowl",
            "rightArt": "bowl"
          },
          {
            "type": "chain",
            "sentence": "Mia fills the bowl so that the birds can drink.",
            "zh": "米娅装水的目的，是让鸟儿能喝水。",
            "axes": {
              "relation": [
                [
                  "purpose",
                  "目的"
                ],
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "cause",
                  "原因"
                ]
              ],
              "link": [
                [
                  "so that",
                  "so that"
                ],
                [
                  "although",
                  "although"
                ]
              ]
            },
            "expected": {
              "relation": "purpose",
              "link": "so that"
            },
            "answer": "{\"relation\":\"purpose\",\"link\":\"so that\"}",
            "why": "so that 在这个语境表达目的，can drink 说明想实现的情况；不是保证目的已经达成。",
            "icon": "link",
            "frame": "Mia fills the bowl {link} the birds can drink.",
            "left": "Mia fills the bowl",
            "right": "the birds can drink",
            "leftArt": "bowl",
            "rightArt": "bird"
          },
          {
            "type": "chain",
            "sentence": "Mia is so tired that she falls asleep.",
            "zh": "米娅累到睡着；that 接在 so tired 后引出结果。",
            "axes": {
              "relation": [
                [
                  "result",
                  "结果"
                ],
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "cause",
                  "原因"
                ]
              ],
              "link": [
                [
                  "that",
                  "that"
                ],
                [
                  "although",
                  "although"
                ]
              ]
            },
            "expected": {
              "relation": "result",
              "link": "that"
            },
            "answer": "{\"relation\":\"result\",\"link\":\"that\"}",
            "why": "so + 形容词 + that... 可表示程度带来的结果；与 so that 表目的的构成不同。",
            "icon": "link",
            "frame": "Mia is so tired {link} she falls asleep.",
            "left": "Mia is so tired",
            "right": "she falls asleep",
            "leftArt": "fox",
            "rightArt": "moon"
          },
          {
            "type": "chain",
            "sentence": "Unless it rains, we will go out.",
            "zh": "除非下雨，否则我们会出去；雨是这里提出的例外条件。",
            "axes": {
              "relation": [
                [
                  "condition",
                  "条件"
                ],
                [
                  "time",
                  "时间先后 / 同时"
                ],
                [
                  "cause",
                  "原因"
                ]
              ],
              "link": [
                [
                  "Unless",
                  "Unless"
                ],
                [
                  "If",
                  "If"
                ]
              ]
            },
            "expected": {
              "relation": "condition",
              "link": "Unless"
            },
            "answer": "{\"relation\":\"condition\",\"link\":\"Unless\"}",
            "why": "unless 在此可理解为 if it does not rain；不把 unless 与 if 在所有语境里机械互换。",
            "icon": "link",
            "frame": "{link} it rains, we will go out.",
            "left": "it rains",
            "right": "we will go out",
            "leftArt": "flower",
            "rightArt": "fox"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c14-m3",
        "title": "时间机关和未来约定",
        "pages": "164–168",
        "items": [
          {
            "type": "pick",
            "sentence": "When Mia ___ tomorrow, I will wave.",
            "zh": "普通时间状语从句，谈明天到达。",
            "target": "___",
            "answer": "arrives",
            "options": [
              "arrives",
              "will arrive"
            ],
            "why": "这个普通将来时间从句用现在式 arrives；不能见 tomorrow 就在每个分句放 will。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "I will wait until Mia ___.",
            "zh": "我会等到米娅来，普通未来时间关系。",
            "target": "___",
            "answer": "comes",
            "options": [
              "comes",
              "will come"
            ],
            "why": "until 引导的这类时间从句常用现在式，主句可以 will wait。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "As soon as the bell rings, we leave.",
            "zh": "as soon as 在这里表示什么关系？",
            "target": "整句",
            "answer": "一……就……的时间关系",
            "options": [
              "一……就……的时间关系",
              "因为铃声好听所以离开"
            ],
            "why": "它把离开定位在铃响后紧接着；本题没有评价铃声。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "Before Mia sleeps, she reads.",
            "zh": "按句子，哪个动作先发生？",
            "target": "整句",
            "answer": "读书",
            "options": [
              "读书",
              "睡觉"
            ],
            "why": "before 从句提到睡觉，但主句读书发生在那之前，不按左右文字顺序猜。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "While Mia was reading, Leo was drawing.",
            "zh": "本题明确两个过程重叠，while 表示什么？",
            "target": "整句",
            "answer": "同时发生的时间关系",
            "options": [
              "同时发生的时间关系",
              "一定由读书导致画画"
            ],
            "why": "while 的时间用法不保证因果。完整语境决定含义。",
            "icon": "link"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c14-m4",
        "title": "原因、条件与假设",
        "pages": "165–168",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia needs an umbrella ___ it is raining.",
            "zh": "按题目要求明确解释需要伞的原因。",
            "target": "___",
            "answer": "because",
            "options": [
              "because",
              "although"
            ],
            "why": "because 引出解释原因；although 会表达让步，改变题目要求的关系。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "You can play as long as you finish the task.",
            "zh": "as long as 在这里表示什么？",
            "target": "整句",
            "answer": "完成任务是条件",
            "options": [
              "完成任务是条件",
              "玩耍的时间必须很长"
            ],
            "why": "这里是只要完成任务这一条件，不是按 long 字面推成时间很长。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "Unless it rains, we will go out.",
            "zh": "在本题简单情境中，哪种理解对应？",
            "target": "整句",
            "answer": "如果不下雨，我们就出去",
            "options": [
              "如果不下雨，我们就出去",
              "只有下雨我们才出去"
            ],
            "why": "unless 提出下雨这个例外；不能把它直接当成 if it rains。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "Even if it rains, we will go out.",
            "zh": "说话时天气还未定，even if 强调什么？",
            "target": "整句",
            "answer": "即使下雨也不改变打算",
            "options": [
              "即使下雨也不改变打算",
              "已经确认现在在下雨"
            ],
            "why": "even if 可以表达假设性的让步，不必断言所提条件已经成真。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "If I had a bike, I would ride to school.",
            "zh": "联系第 8 章，本句在现在没车的语境中是什么？",
            "target": "整句",
            "answer": "现在的假想条件",
            "options": [
              "现在的假想条件",
              "所有普通将来条件都必须用 had"
            ],
            "why": "这是带距离的现在假想，不应把普通时间从句的规则机械推广过来。",
            "icon": "link"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c14-m5",
        "title": "让步、目的和结果",
        "pages": "166–168",
        "items": [
          {
            "type": "pick",
            "sentence": "Although Mia is tired, she smiles.",
            "zh": "同一层连接选择自然的标准表达。",
            "target": "整句",
            "answer": "保留 although，不再加 but",
            "options": [
              "保留 although，不再加 but",
              "Although Mia is tired, but she smiles."
            ],
            "why": "本题用 although 从句加主句；也可另改成 Mia is tired, but she smiles，别双重连接同一层关系。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "Mia saves money so that she can buy a bike.",
            "zh": "按这个语境 so that 表达什么？",
            "target": "整句",
            "answer": "存钱的目的",
            "options": [
              "存钱的目的",
              "已经买好车的确定结果"
            ],
            "why": "can buy 表示想实现的目标，本句不保证自行车已经买到。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "It was such a cold day that we stayed home.",
            "zh": "such a...that 在本题中引出什么？",
            "target": "整句",
            "answer": "程度带来的结果",
            "options": [
              "程度带来的结果",
              "为了让天气变冷的目的"
            ],
            "why": "如此冷的一天，以至于待在家，后半部分是结果。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "Mia likes tea, whereas Leo likes milk.",
            "zh": "两种偏好在这里是什么关系？",
            "target": "整句",
            "answer": "对照",
            "options": [
              "对照",
              "因果"
            ],
            "why": "whereas 突出差别，并不说明谁导致谁。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "Although it rains, we go out.",
            "zh": "句中已经断言下雨，仍出门，这与 even if 的未定条件完全一样吗？",
            "target": "整句",
            "answer": "不完全一样，要区分事实与假设",
            "options": [
              "不完全一样，要区分事实与假设",
              "完全一样，连词永远互换"
            ],
            "why": "although 通常让步于所陈述情况；even if 可以假设条件，选词要看语境。",
            "icon": "link"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c14-m6",
        "title": "三类从句综合机关",
        "pages": "162–168",
        "items": [
          {
            "type": "pick",
            "sentence": "I know when Mia arrives.",
            "zh": "本题意思是“我知道她到达的时间”；when 从句整体做什么？",
            "target": "整句",
            "answer": "know 的宾语内容",
            "options": [
              "know 的宾语内容",
              "修饰 know 发生时间的状语"
            ],
            "why": "这里知道的是她何时到达，整体是宾语；不能只凭 when 判状语从句。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "I smile when Mia arrives.",
            "zh": "本题意思是“她到达时我微笑”；when 从句说明什么？",
            "target": "整句",
            "answer": "微笑发生的时间",
            "options": [
              "微笑发生的时间",
              "Mia 的帽子颜色"
            ],
            "why": "这里 when 从句给主句微笑定位时间，是状语信息。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "The day when Mia arrived was sunny.",
            "zh": "when 从句接在 day 后识别哪天，属于哪类？",
            "target": "整句",
            "answer": "定语从句",
            "options": [
              "定语从句",
              "只要有 when 就是状语从句"
            ],
            "why": "看整体工作和连接对象：这里修饰 day，回顾上一章关系从句。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "Because Mia is ready, we can leave.",
            "zh": "从句在前，本题通常怎样标点？",
            "target": "整句",
            "answer": "ready 后用逗号分开",
            "options": [
              "ready 后用逗号分开",
              "把 because 去掉但不加任何连接"
            ],
            "why": "前置原因从句通常以逗号与主句分开；不能随意删掉从属关系留下逗号拼接。",
            "icon": "link"
          },
          {
            "type": "pick",
            "sentence": "Mia is tired, but she smiles.",
            "zh": "若要改成 although 结构，哪句保留相同基本让步关系？",
            "target": "整句",
            "answer": "Although Mia is tired, she smiles.",
            "options": [
              "Although Mia is tired, she smiles.",
              "Although Mia smiles, she is not tired."
            ],
            "why": "第一句保留累但仍微笑的关系；第二句改变了事实和指向。",
            "icon": "link"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      }
    ]
  },
  {
    "id": "c15",
    "number": "15",
    "title": "桥梁与天平",
    "subtitle": "接好同类词组，选准比较维度",
    "mechanic": "并列搭桥 · 维度切换 · 比较刻度",
    "theme": "peach",
    "scene": "bridge",
    "book": "第 15 章 · 书内 169–178 页",
    "brief": "词语可以并列，完整分句也可以。搭一座结构清楚的桥，再比较两人的身高、书本数量和速度：先问比什么，再决定怎样说。",
    "lessons": [
      {
        "title": "桥的两端要看层级",
        "body": "and、but、or 等可连接词、短语或分句。Mia sings and dances. 是同一主语下的动作并列；不把所有词语并列都说成删除完整句子后的产物。FANBOYS 是常见并列连词的记忆法。",
        "example": "Mia likes apples and pears. Mia sings, and Leo draws.",
        "zh": "米娅喜欢苹果和梨。米娅唱歌，里奥画画。",
        "visual": "bridge",
        "tags": [
          "词",
          "短语",
          "分句",
          "for / and / nor / but / or / yet / so"
        ]
      },
      {
        "title": "连词传达关系，标点帮助读懂",
        "body": "and 添加，but/yet 转折，or 提供选择，so 可引结果，for 可补原因，nor 续接否定。两个完整分句常用逗号加并列连词；不能仅用逗号拼接。短分句和不同写作风格也会有标点弹性。",
        "example": "Mia was tired, but she smiled.",
        "zh": "米娅很累，但她微笑了。",
        "visual": "link",
        "tags": [
          "添加 / 转折 / 选择 / 结果",
          "逗号拼接要避免",
          "不把 usually 教成永远"
        ]
      },
      {
        "title": "成对的桥要保持对应",
        "body": "both...and、either...or、neither...nor、not only...but also 连接平行成分。把名词对名词、动作词组对动作词组，仍结合意义。both 主语常配复数，either/or 等可回顾主谓一致。",
        "example": "Mia likes both reading and drawing.",
        "zh": "米娅既喜欢读书也喜欢画画。",
        "visual": "book",
        "tags": [
          "both...and",
          "either...or",
          "neither...nor",
          "not only...but also"
        ]
      },
      {
        "title": "比较之前先选维度",
        "body": "Mia is taller than Leo. 比身高；Mia has more books than Leo. 比书本数量。不能把一个人的身高与另一个人的书数放在同一比较尺度；天平图是程度示意，不表示质量。比较结构有自己的规则，不把它简单当作普通 and 并列。",
        "example": "Mia has more books than Leo.",
        "zh": "米娅的书比里奥多。",
        "visual": "bridge",
        "tags": [
          "对象对应",
          "维度对应",
          "than",
          "比较结构另看"
        ]
      },
      {
        "title": "原级、比较级和最高级",
        "body": "as tall as 中用原级；taller than 用比较级。短词常加 -er/-est，长词常用 more/most，但有拼写变化和词汇例外：big/bigger/biggest，good/better/best，bad/worse/worst。happy 常变 happier/happiest；数量 many/much 对应 more/most，little 对应 less/least；far 有 farther/further、farthest/furthest 等形式，具体搭配看语境。不要把音节口诀当作无例外定律。",
        "example": "Mia is as tall as Leo. This is the best picture.",
        "zh": "米娅和里奥一样高。这是最好的一幅画。",
        "visual": "paint",
        "tags": [
          "as + 原级 + as",
          "比较级 + than",
          "最高级与范围",
          "more 不和 taller 叠加"
        ]
      },
      {
        "title": "省得清楚，才省重复",
        "body": "than/as 后有时可省能恢复的重复信息；若对象由上下文明确，也可说 This one is bigger.。I like Mia more than Leo 有歧义时补足成 I like Mia more than I like Leo 或 more than Leo does。清楚比缩短更重要。",
        "example": "Mia runs faster than Leo does.",
        "zh": "米娅跑得比里奥快。",
        "visual": "train",
        "tags": [
          "可恢复的省略",
          "比较对象可由上下文给出",
          "不要硬说省略就一定错",
          "保留清楚的层级"
        ]
      }
    ],
    "missions": [
      {
        "id": "c15-m1",
        "title": "给同层结构搭座桥",
        "pages": "169–173",
        "items": [
          {
            "type": "balance",
            "sentence": "Mia likes apples and pears.",
            "zh": "并列两个水果名词，表示两种都喜欢。",
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
                  "but",
                  "but"
                ]
              ]
            },
            "expected": {
              "level": "word",
              "link": "and"
            },
            "answer": "{\"level\":\"word\",\"link\":\"and\"}",
            "why": "这里连接同类名词 apples 与 pears，是词语层面的并列，不强行还原成删除句子。",
            "icon": "bridge",
            "labKind": "bridge",
            "frame": "Mia likes {left} {link} {right}.",
            "left": "apples",
            "right": "pears"
          },
          {
            "type": "balance",
            "sentence": "We can play in the garden or at home.",
            "zh": "在花园或家里玩，提供两个地点词组供选择。",
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
                  "or",
                  "or"
                ],
                [
                  "so",
                  "so"
                ]
              ]
            },
            "expected": {
              "level": "phrase",
              "link": "or"
            },
            "answer": "{\"level\":\"phrase\",\"link\":\"or\"}",
            "why": "or 连接两个同类地点短语；so 不能代替这项选择关系。",
            "icon": "bridge",
            "labKind": "bridge",
            "frame": "We can play {left} {link} {right}.",
            "left": "in the garden",
            "right": "at home"
          },
          {
            "type": "balance",
            "sentence": "Mia painted, and Leo read.",
            "zh": "把两件各自完整的事并列添加。",
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
              "level": "clause",
              "link": "and"
            },
            "answer": "{\"level\":\"clause\",\"link\":\"and\"}",
            "why": "and 在这里连接两个独立分句，采用逗号加连词的清晰写法。",
            "icon": "bridge",
            "labKind": "bridge",
            "frame": "{left}, {link} {right}.",
            "left": "Mia painted",
            "right": "Leo read"
          },
          {
            "type": "balance",
            "sentence": "Mia was tired, but she kept walking.",
            "zh": "表达累了却继续走的转折；两边各能成句。",
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
                  "but",
                  "but"
                ],
                [
                  "or",
                  "or"
                ]
              ]
            },
            "expected": {
              "level": "clause",
              "link": "but"
            },
            "answer": "{\"level\":\"clause\",\"link\":\"but\"}",
            "why": "but 连接同层完整分句表达转折；or 会变成选择。",
            "icon": "bridge",
            "labKind": "bridge",
            "frame": "{left}, {link} {right}.",
            "left": "Mia was tired",
            "right": "she kept walking"
          },
          {
            "type": "balance",
            "sentence": "It rained, so we stayed home.",
            "zh": "把下雨和因此待在家用并列结果关系连接。",
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
                  "so",
                  "so"
                ],
                [
                  "although",
                  "although"
                ]
              ]
            },
            "expected": {
              "level": "clause",
              "link": "so"
            },
            "answer": "{\"level\":\"clause\",\"link\":\"so\"}",
            "why": "so 可连接表示结果的分句；不能在本题逗号连接模板中直接替换 although。",
            "icon": "bridge",
            "labKind": "bridge",
            "frame": "{left}, {link} {right}.",
            "left": "It rained",
            "right": "we stayed home"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c15-m2",
        "title": "身高与书本的刻度",
        "pages": "174–177",
        "items": [
          {
            "type": "balance",
            "sentence": "Mia is shorter than Leo.",
            "zh": "比较身高：米娅 3 格，里奥 5 格。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia is shorter than Leo.",
                  "Mia is shorter than Leo."
                ],
                [
                  "Mia is taller than Leo.",
                  "Mia is taller than Leo."
                ]
              ]
            },
            "expected": {
              "measure": "height",
              "line": "Mia is shorter than Leo."
            },
            "answer": "{\"measure\":\"height\",\"line\":\"Mia is shorter than Leo.\"}",
            "why": "3 小于 5，所以 Mia is shorter than Leo；刻度只用于本图相对比较。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                3,
                5
              ],
              "books": [
                5,
                2
              ],
              "speed": [
                2,
                4
              ]
            }
          },
          {
            "type": "balance",
            "sentence": "Mia is taller than Leo.",
            "zh": "比较身高：米娅 5 格，里奥 3 格。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia is taller than Leo.",
                  "Mia is taller than Leo."
                ],
                [
                  "Mia is shorter than Leo.",
                  "Mia is shorter than Leo."
                ]
              ]
            },
            "expected": {
              "measure": "height",
              "line": "Mia is taller than Leo."
            },
            "answer": "{\"measure\":\"height\",\"line\":\"Mia is taller than Leo.\"}",
            "why": "taller than 连接较高的一方与对比对象；不要倒置双方。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                5,
                3
              ],
              "books": [
                5,
                2
              ],
              "speed": [
                2,
                4
              ]
            }
          },
          {
            "type": "balance",
            "sentence": "Mia is as tall as Leo.",
            "zh": "比较身高：两人都是 4 格。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia is as tall as Leo.",
                  "Mia is as tall as Leo."
                ],
                [
                  "Mia is taller than Leo.",
                  "Mia is taller than Leo."
                ]
              ]
            },
            "expected": {
              "measure": "height",
              "line": "Mia is as tall as Leo."
            },
            "answer": "{\"measure\":\"height\",\"line\":\"Mia is as tall as Leo.\"}",
            "why": "as tall as 表示在这个维度一样高，中间用原级 tall，不用 taller。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                4,
                4
              ],
              "books": [
                5,
                2
              ],
              "speed": [
                2,
                4
              ]
            }
          },
          {
            "type": "balance",
            "sentence": "Mia has more books than Leo.",
            "zh": "比较书本数量：米娅 5 本，里奥 2 本。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia has more books than Leo.",
                  "Mia has more books than Leo."
                ],
                [
                  "Mia has fewer books than Leo.",
                  "Mia has fewer books than Leo."
                ]
              ]
            },
            "expected": {
              "measure": "books",
              "line": "Mia has more books than Leo."
            },
            "answer": "{\"measure\":\"books\",\"line\":\"Mia has more books than Leo.\"}",
            "why": "可数复数 books 的更多可说 more books；5 大于 2。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                3,
                5
              ],
              "books": [
                5,
                2
              ],
              "speed": [
                2,
                4
              ]
            }
          },
          {
            "type": "balance",
            "sentence": "Mia has fewer books than Leo.",
            "zh": "比较书本数量：米娅 2 本，里奥 5 本。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia has fewer books than Leo.",
                  "Mia has fewer books than Leo."
                ],
                [
                  "Mia has more books than Leo.",
                  "Mia has more books than Leo."
                ]
              ]
            },
            "expected": {
              "measure": "books",
              "line": "Mia has fewer books than Leo."
            },
            "answer": "{\"measure\":\"books\",\"line\":\"Mia has fewer books than Leo.\"}",
            "why": "可数书本数量较少，在本题标准入门表达用 fewer books；不要用身高的 tall。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                3,
                5
              ],
              "books": [
                2,
                5
              ],
              "speed": [
                2,
                4
              ]
            }
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c15-m3",
        "title": "数量和速度也能比",
        "pages": "174–177",
        "items": [
          {
            "type": "balance",
            "sentence": "Mia has as many books as Leo.",
            "zh": "两人各 3 本书，比较数量相等。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia has as many books as Leo.",
                  "Mia has as many books as Leo."
                ],
                [
                  "Mia has more books than Leo.",
                  "Mia has more books than Leo."
                ]
              ]
            },
            "expected": {
              "measure": "books",
              "line": "Mia has as many books as Leo."
            },
            "answer": "{\"measure\":\"books\",\"line\":\"Mia has as many books as Leo.\"}",
            "why": "as many + 可数复数 + as 表示数量相等；不是用 as tall 描述书本数量。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                3,
                5
              ],
              "books": [
                3,
                3
              ],
              "speed": [
                2,
                4
              ]
            }
          },
          {
            "type": "balance",
            "sentence": "Mia runs faster than Leo.",
            "zh": "速度刻度越大代表越快：米娅 5，里奥 3。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia runs faster than Leo.",
                  "Mia runs faster than Leo."
                ],
                [
                  "Mia runs more fast than Leo.",
                  "Mia runs more fast than Leo."
                ]
              ]
            },
            "expected": {
              "measure": "speed",
              "line": "Mia runs faster than Leo."
            },
            "answer": "{\"measure\":\"speed\",\"line\":\"Mia runs faster than Leo.\"}",
            "why": "fast 的常见比较级是 faster，不说 more fast；本图不把跑得快与学习能力联系。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                3,
                5
              ],
              "books": [
                5,
                2
              ],
              "speed": [
                5,
                3
              ]
            }
          },
          {
            "type": "balance",
            "sentence": "Mia runs slower than Leo.",
            "zh": "比较速度：米娅 2 格，里奥 5 格，米娅较慢。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia runs slower than Leo.",
                  "Mia runs slower than Leo."
                ],
                [
                  "Mia runs faster than Leo.",
                  "Mia runs faster than Leo."
                ]
              ]
            },
            "expected": {
              "measure": "speed",
              "line": "Mia runs slower than Leo."
            },
            "answer": "{\"measure\":\"speed\",\"line\":\"Mia runs slower than Leo.\"}",
            "why": "本题用 runs slower 的自然表达；也可在其他搭配中说 more slowly。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                3,
                5
              ],
              "books": [
                5,
                2
              ],
              "speed": [
                2,
                5
              ]
            }
          },
          {
            "type": "balance",
            "sentence": "Mia runs as fast as Leo.",
            "zh": "两人速度都为 4 格，比较速度相等。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia runs as fast as Leo.",
                  "Mia runs as fast as Leo."
                ],
                [
                  "Mia runs as faster as Leo.",
                  "Mia runs as faster as Leo."
                ]
              ]
            },
            "expected": {
              "measure": "speed",
              "line": "Mia runs as fast as Leo."
            },
            "answer": "{\"measure\":\"speed\",\"line\":\"Mia runs as fast as Leo.\"}",
            "why": "as...as 中用 fast 原级，不在这个位置用 faster。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                3,
                5
              ],
              "books": [
                5,
                2
              ],
              "speed": [
                4,
                4
              ]
            }
          },
          {
            "type": "balance",
            "sentence": "Mia is not as tall as Leo.",
            "zh": "比较身高：米娅 2 格、里奥 5 格；练“不如……高”。",
            "axes": {
              "measure": [
                [
                  "height",
                  "身高刻度"
                ],
                [
                  "books",
                  "书本数量"
                ],
                [
                  "speed",
                  "速度刻度"
                ]
              ],
              "line": [
                [
                  "Mia is not as tall as Leo.",
                  "Mia is not as tall as Leo."
                ],
                [
                  "Mia is as tall as Leo.",
                  "Mia is as tall as Leo."
                ]
              ]
            },
            "expected": {
              "measure": "height",
              "line": "Mia is not as tall as Leo."
            },
            "answer": "{\"measure\":\"height\",\"line\":\"Mia is not as tall as Leo.\"}",
            "why": "not as tall as 在本题表达米娅不及里奥高，不表示两人相等。",
            "icon": "bridge",
            "labKind": "scale",
            "readings": {
              "height": [
                2,
                5
              ],
              "books": [
                5,
                2
              ],
              "speed": [
                2,
                4
              ]
            }
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c15-m4",
        "title": "并列与平行的路标",
        "pages": "169–173",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia sings, ___ Leo draws.",
            "zh": "按任务要求，把两件事并列添加。",
            "target": "___",
            "answer": "and",
            "options": [
              "and",
              "because"
            ],
            "why": "and 连接两个同层分句；because 会改成因果从属，不是本题的添加关系。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia likes both reading ___ drawing.",
            "zh": "成对结构 both...and。",
            "target": "___",
            "answer": "and",
            "options": [
              "and",
              "or"
            ],
            "why": "both reading and drawing 连接两个 -ing 活动词组，保持平行。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "You can choose either tea ___ milk.",
            "zh": "从两种饮品中选择。",
            "target": "___",
            "answer": "or",
            "options": [
              "or",
              "nor"
            ],
            "why": "either...or 提供选择；neither...nor 才表示两者都不。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia likes neither tea ___ coffee.",
            "zh": "表示茶和咖啡都不喜欢。",
            "target": "___",
            "answer": "nor",
            "options": [
              "nor",
              "or"
            ],
            "why": "neither...nor 对两项都否定。不要和 either...or 混搭。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia can not only sing but also ___.",
            "zh": "连接两个由 can 支配的原形动作。",
            "target": "___",
            "answer": "dance",
            "options": [
              "dance",
              "dancing"
            ],
            "why": "can...sing...dance 保持同层原形动作；不是把 sing 和 dancing 混成同一平行结构。",
            "icon": "bridge"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c15-m5",
        "title": "连词与省略边界",
        "pages": "169–173",
        "items": [
          {
            "type": "pick",
            "sentence": "Mia painted, Leo read.",
            "zh": "在普通正式叙述里怎样避免这个逗号拼接？",
            "target": "整句",
            "answer": "Mia painted, and Leo read.",
            "options": [
              "Mia painted, and Leo read.",
              "删去逗号直接挨在一起"
            ],
            "why": "两个完整分句通常需要合适连词、分号或分开成句；单独逗号不是本题合适连接。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia sang and danced.",
            "zh": "要不要把每个动作前都重复 Mia 才算正确？",
            "target": "整句",
            "answer": "不需要，可共享主语",
            "options": [
              "不需要，可共享主语",
              "需要，否则第二个动作没有主语就一定错"
            ],
            "why": "同一主语下可自然并列动作，不必机械重复。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia said that she was ready and that Leo was ready.",
            "zh": "重复第二个 that 在这里有什么帮助？",
            "target": "整句",
            "answer": "让两个内容从句的边界清楚",
            "options": [
              "让两个内容从句的边界清楚",
              "第二个 that 在所有语境都绝对不可省"
            ],
            "why": "重复 that 常帮助表达层级；是否可省仍看句子和清晰度，不能推广绝对规则。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia did not sing, nor did Leo.",
            "zh": "本题 nor 后的 did Leo 是什么现象？",
            "target": "整句",
            "answer": "否定续接结构的倒装",
            "options": [
              "否定续接结构的倒装",
              "所有 and 后都必须倒装"
            ],
            "why": "nor 可续接否定，常用助动词在主语前的结构；不推广到所有并列连词。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia was tired, yet she smiled.",
            "zh": "yet 在这里作并列连词表达什么？",
            "target": "整句",
            "answer": "转折",
            "options": [
              "转折",
              "尚未发生的时间点"
            ],
            "why": "yet 这里相当于不过、然而；不是所有 yet 都是完成时的时间副词。",
            "icon": "bridge"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c15-m6",
        "title": "比较级与最高级工作坊",
        "pages": "174–176",
        "items": [
          {
            "type": "pick",
            "sentence": "This box is ___ than that one.",
            "zh": "用 big 的比较级。",
            "target": "___",
            "answer": "bigger",
            "options": [
              "bigger",
              "biger",
              "more bigger"
            ],
            "why": "big 变 bigger 要双写 g；不再加 more 形成 more bigger。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "This story is ___ interesting than that one.",
            "zh": "用 interesting 的常见比较形式。",
            "target": "___",
            "answer": "more",
            "options": [
              "more",
              "most"
            ],
            "why": "两个故事比较常用 more interesting than；most 常用于最高级。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia is as ___ as Leo.",
            "zh": "练形容词原级的相等比较。",
            "target": "___",
            "answer": "tall",
            "options": [
              "tall",
              "taller"
            ],
            "why": "as...as 中间使用 tall 原级，不用 taller。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Of these three pictures, this is the ___.",
            "zh": "在给定三幅图中评价最好，good 的最高级是什么？",
            "target": "___",
            "answer": "best",
            "options": [
              "best",
              "better",
              "goodest"
            ],
            "why": "good/better/best 是常见不规则变化；本题范围是给定三幅图。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia runs ___ than Leo.",
            "zh": "用 well 的常见比较级，表示跑得更好。",
            "target": "___",
            "answer": "better",
            "options": [
              "better",
              "best",
              "more well"
            ],
            "why": "well 的比较级是 better；best 是最高级，不直接接此处 than。",
            "icon": "bridge"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      },
      {
        "id": "c15-m7",
        "title": "比较清楚再毕业",
        "pages": "175–178",
        "items": [
          {
            "type": "pick",
            "sentence": "This box is bigger.",
            "zh": "前文已明确在比较两个盒子，必须把这句判错吗？",
            "target": "整句",
            "answer": "不必，比较对象可由上下文给出",
            "options": [
              "不必，比较对象可由上下文给出",
              "必须，每个比较级后都要写 than"
            ],
            "why": "省去已明确的比较对象可自然成立；不把脱离语境的形式当作绝对禁令。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "I like Mia more than Leo.",
            "zh": "没有更多语境，这句话可能有什么问题？",
            "target": "整句",
            "answer": "比较对象或动作关系可能有歧义",
            "options": [
              "比较对象或动作关系可能有歧义",
              "一定只可能表示 Leo 更喜欢 Mia"
            ],
            "why": "可能比我喜欢 Leo 更多，也可能比 Leo 喜欢 Mia 更多，应补足需要的关系。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "I like Mia more than I like Leo.",
            "zh": "现在明确比较什么？",
            "target": "整句",
            "answer": "我对两个人的喜欢程度",
            "options": [
              "我对两个人的喜欢程度",
              "我和 Leo 谁更喜欢 Mia"
            ],
            "why": "补出 I like Leo 后，两个被喜欢对象对应，消除了题目中的另一种解读。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia has more books than Leo does.",
            "zh": "does 在这里帮助恢复什么？",
            "target": "整句",
            "answer": "Leo has books 的对应比较",
            "options": [
              "Leo has books 的对应比较",
              "Leo is tall 的身高比较"
            ],
            "why": "比较的是拥有书本的数量；does 代替相应动作结构，维度要一致。",
            "icon": "bridge"
          },
          {
            "type": "pick",
            "sentence": "Mia has less water than Leo.",
            "zh": "water 在这里是不可数物质，较少通常选什么？",
            "target": "整句",
            "answer": "less water",
            "options": [
              "less water",
              "fewer water"
            ],
            "why": "本题 water 为不可数用法，用 less；可数复数 books 在入门标准表达里常用 fewer。",
            "icon": "bridge"
          }
        ],
        "note": "先看故事，再操作；可以反复尝试"
      }
    ]
  }
];
