"""Root index.html for branch-based Pages; preserve the full modular source."""
from pathlib import Path
import hashlib
import json
import zipfile

root = Path(__file__).resolve().parent
version = json.loads((root / 'package.json').read_text(encoding='utf-8'))['version']
release = root / 'release'
source_zip = release / f'语法小岛-GitHub完整包-v{version}.zip'
html = (root / 'dist/local-edition.html').read_bytes()
assert b'<html' in html and b'<script type="module">' in html
readme = '''# 语法小岛：GitHub 网页直接托管版

最外层的 index.html 就是完整网页，已包含所有游戏代码、图形、样式与题目。
当前版本：1.1.0；第 1–6 章、be 拓展和有限时态样板；164 个挑战。

## 最简单的上传方式

1. 解压 ZIP。最外层应该直接看到 index.html、README.md、.nojekyll 和 source 文件夹。
2. 在 GitHub 新建仓库，将这些内容上传到仓库根目录。不要只上传 ZIP，不要多套一层文件夹。
3. 进入仓库 Settings → Pages。
4. Source 选择 Deploy from a branch；Branch 选择你上传文件的分支（通常 main）；文件夹选择 / (root)，然后 Save。
5. 等 GitHub Pages 的部署记录成功后，打开 Settings → Pages 显示的实际网址。

本包不需要手动配置 GitHub Actions，不需要安装依赖，也不需要 API 密钥或 ChatGPT 登录。
如果这个仓库已经上传过上一版 .github/workflows/pages.yml，而你改用本包的分支发布方式，请先移除仓库根目录的那份旧工作流，避免两种部署方式同时运行。source/.github 下的工作流只是保留的源码，不会自动执行。

## HTML 文件在哪里

- index.html：最外层，直接托管的完整网页；双击也能本地学习。
- source/dist/index.html：保留的模块化源码入口；需要通过网站服务器访问。
- source/dist/local-edition.html：同一应用的自包含版本。

source 文件夹保留完整源码、素材、章节文档和检查脚本，方便后续维护。网页运行不依赖 source 文件夹；想最少上传时，只上传根目录 index.html 也能运行。

## 后续更新

以后使用同一仓库、同一路径，覆盖根目录 index.html，并同步更新 source 文件夹和版本说明。若你修改过域名 CNAME，保留自己的 CNAME。当前入口与过去的文件在内容上相同，只是改成更直观的根目录入口。

学习进度按浏览器和网站来源分别保存。先在旧网址“学习设置”导出，再到 GitHub 网页恢复；换网址时不会自动同步。朗读使用浏览器或系统语音。

GitHub Free 的 Pages 支持公开仓库；私有仓库支持取决于账户方案。原书 PDF、个人进度备份、Sites 内部配置与令牌没有放入本包。

GitHub 官方部署说明：
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
'''
entries = {'index.html': html, '.nojekyll': b'', 'README.md': readme.encode('utf-8')}
with zipfile.ZipFile(source_zip) as z:
    for name in z.namelist():
        if name.startswith('/') or '..' in Path(name).parts:
            raise ValueError('Unsafe archive member')
        if not name.endswith('/'):
            entries['source/' + name] = z.read(name)
entries['SHA256SUMS.txt'] = ''.join(
    hashlib.sha256(data).hexdigest() + '  ' + name + '\n'
    for name, data in sorted(entries.items())).encode('utf-8')
archive = release / f'语法小岛-GitHub网页托管版-v{version}.zip'
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as z:
    for name, data in entries.items():
        z.writestr(name, data)
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    assert z.read('index.html') == html
    assert '.github/workflows/pages.yml' not in z.namelist()
folder = release / 'GitHub网页入口'
folder.mkdir(exist_ok=True)
(folder / 'index.html').write_bytes(html)
(folder / '部署说明.md').write_text(readme, encoding='utf-8')
print(json.dumps({'archive': str(archive), 'html': str(folder / 'index.html'),
                  'root_html_bytes': len(html), 'files': len(entries)}, ensure_ascii=False))
