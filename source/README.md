# 语法小岛 · GitHub 完整版

版本：1.1.0。第 1–6 章、be 动词拓展和有限时态样板已开放：8 个区域、32 个任务、164 个互动挑战、28 段图解故事。第 7 章尚未完整制作，其他章节按全书规划继续扩展。

这是可独立运行的完整静态网站，不依赖原来的 Sites 网址、ChatGPT 登录、API 密钥或服务器。游戏逻辑、原创矢量图、动画、题目和样式均在仓库里。浏览器朗读仍取决于设备提供的声音，部分声音可能需要联网。

## 文件结构

```text
.github/workflows/pages.yml   自动检查与部署配置
dist/                        网站完整文件；实际发布目录
  index.html                 网站入口
  app.js                     应用与学习记录
  content.js                 原有章节与全书地图
  expansion.js               第 4–6 章与 be 拓展内容
  playgrounds.js             背包、画像、镜屋、导演台机制
  art.js                     原创 SVG 图形
  style.css / expansion.css  页面与新玩法样式
  icon.svg / .nojekyll        网站图标与静态发布标记
  local-edition.html          可直接双击打开的自包含离线版
docs/                        全书规划、交付约定与教学核对
qa/                          旧题兼容校验和浏览器验收记录
verify.mjs                   内容检查
build-standalone.mjs         生成自包含离线版
make-github-package.py       生成完整 GitHub 交付 ZIP（维护时使用）
package.json                 项目版本与检查入口
verification.json            当前内容检查结果
CHANGELOG.md                 版本说明
SHA256SUMS.txt               本次完整包各文件校验值
```

## 本地使用与维护

只想本地学习：直接双击 `dist/local-edition.html`，用 Edge 或 Chrome 打开。

需要预览模块源码：在仓库根目录用普通静态文件服务器运行，再打开 `dist/`。不要通过双击 `dist/index.html` 预览 ES 模块源码。

维护者有 Node.js 后可以运行：

```sh
node verify.mjs
node build-standalone.mjs --no-workspace-export
```

有 Python 3 时可运行 `python make-github-package.py` 重新生成 GitHub 完整包。部署本身不需要 Python。

本包未包含原始书籍 PDF、Sites 内部配置、Git 历史或个人学习备份。游戏中的教学例句和图形为原创改编；具体范围、教学边界与核对资料见 docs。软件检查不代替真实学习者试用。

