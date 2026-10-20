# 语法小岛 v1.7.0：GitHub Actions 上传版

解压后，将包内文件直接上传到仓库根目录，不要将外层文件夹整体上传。
根目录必须同时存在 index.html 和 .github/workflows/pages.yml。
保留 source 文件夹，它包含完整源码。实际发布的是根目录的 index.html。

GitHub Desktop 用户：将解压后的全部内容复制到本地仓库目录，提交并 Push origin。
浏览器上传用户：注意 .github 是隐藏文件夹，必须一并上传；若上传后没有出现，
在 GitHub 点击 Add file → Create new file，文件名填写 .github/workflows/pages.yml，
粘贴本包同路径文件内容并提交到 main。

Settings → Pages → Source 选择 GitHub Actions。
Actions 中应出现 Deploy Grammar Island to GitHub Pages。
提交 main 会自动运行；也可以 Run workflow 手动运行。
成功后地址：https://jcjx.github.io/grammar-learning-game/

无需配置 Jekyll 或 Node 构建，不要删除仓库或再次取消发布。
本包已核对文件结构，但远程部署尚未验证，平台排队问题不能由此包保证解决。
