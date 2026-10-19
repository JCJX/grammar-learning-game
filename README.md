# 语法小岛 · GitHub 完整版

版本：1.7.0 全书版。第 1–19 章、be/used/it 三个附加专题、保留时态样板及跨章庆典：24 区域、172 任务、864 挑战、155 段故事。全书本轮精修已完成，新增 13 组观察实验、8 幕综合冒险与稿件核对编辑台
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

## 学习进度迁移

原来的 Sites 网址、本地 HTML 文件与 GitHub Pages 是不同的网站来源，浏览器进度不会自动共享。迁移前在旧版右上角“学习设置”导出进度，到新网址通过“恢复进度”导入。同一 GitHub Pages 网址后续更新沿用原有记录；修改网址或仓库路径前也建议先导出。

## 文件结构

```text
.github/workflows/pages.yml   保留的源码工作流，分支发布时不要放到仓库根目录
dist/                        网站完整文件；实际发布目录
  index.html                 网站入口
  app.js                     应用与学习记录
  content.js                 原有章节与全书地图
  expansion.js               第 4–6 章与 be 拓展内容
  playgrounds.js             各章机制公共入口
  finale.js / finale-labs.js  第 16–19 章内容和独立机制
  finale.css                 第 16–19 章场景与动画
  renewal.js                 三个专题与前六章本轮精修
  renewal-labs.js / renewal.css 新机制、观察实验与动画
  atlas.js / atlas-labs.js / atlas.css 第 7–19 章精修、跨章庆典与编辑台
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
