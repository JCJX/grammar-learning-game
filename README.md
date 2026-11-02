# 语言大陆 0.11.0 · GitHub 托管完整包

包含英语冒险岛、语法小岛、葡萄牙语、西班牙语、德语，全部网页运行文件、本地合成音频、英语离线识别模型及现有第三方许可说明。网页无需安装依赖或编译。课程范围、测评局限见 [COURSE-NOTES.md](COURSE-NOTES.md)。

## 推荐：GitHub Desktop 上传

1. 完整解压本包；用 GitHub Desktop 的 File → Add local repository 选择包含本 README 的目录。提示不是仓库时选择 create a repository here，保持此目录作为仓库根目录。
2. 提交全部文件，Publish repository。默认分支用 main。免费账号建议选择公开仓库；公开后课程与文件可被访问，进度仍只保存在学习者自己的浏览器。
3. 仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
4. Actions 中运行 Deploy language continents（如第一次推送已完成，可点 Run workflow）。成功后进入 Pages 显示的网站地址。
5. **大陆地图地址：网站地址末尾加 suite.html**，例如 https://你的用户名.github.io/仓库名/suite.html 。根地址是原英语入口，底部也能进入大陆地图。

本包有约1.8万个文件，建议用 GitHub Desktop 或 Git 推送，避免逐批网页上传。上传的是解压后的全部目录，**不是将 ZIP 文件上传到仓库**。如不想使用 Actions，也可在 Pages 选择 Deploy from a branch → main → /docs；两种部署方式任选其一。

## 本地预览与修改

安装 Node.js 后，在此目录运行 node serve.cjs，访问 http://127.0.0.1:4201/ 。docs 是可直接部署的完整静态网站，英语 JS/CSS、语法 HTML 可直接编辑。

authoring 保存三语课程原始数据、教学界面源码与地图源码。修改后运行 node authoring/rebuild.cjs，再提交 docs 和 authoring。此重建不改英语与语法内容；若添加全新朗读文本，还必须生成相应 MP3 并更新 authoring/data/audio.json，不能仅添加音频键名。包内保留现有全部音频，没有附带本地语音合成工具链或安卓签名环境。

## 为什么比离线单页小

此包将音频与模型作为独立文件，避免音频在单页里 Base64 膨胀；未包含重复的离线 HTML、APK、历史发布包、临时构建工具、签名私钥或个人进度。它是完整**网页托管包**，不是安卓构建工作区。现有 APK 与离线包可另放 GitHub Releases，勿把它们提交到仓库。

## 使用说明

HTTPS 下录音仍需用户授予麦克风权限；浏览器兼容性需实际设备验证。网页首次使用要下载资源，本包未新增 Service Worker 全站离线缓存；断网使用请继续使用另行交付的完整离线包或 APK。英语模型在浏览器本地运行；三门新语言目前没有离线自动转写。

浏览器网站存档与 APK／本地文件存档不是同一个存储区域，首次迁移请分别导出并导入。更换域名、浏览器或清理网站数据前也应备份。不会上传进度或录音到服务器。

现有第三方许可说明位于 docs/vendor 和 docs/models。未额外授予项目统一开源许可证，发布者应确认自己对公开课程与素材具有相应权利。

GitHub 官方限制说明：https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits 。本次打包检查单文件低于100 MiB，网站总量低于1 GB；未实际发布到你的 GitHub 账号。
