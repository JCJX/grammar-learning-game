"""Produce a self-contained GitHub repository snapshot; never read credentials."""
from pathlib import Path
import hashlib
import json
import shutil
import tempfile
import zipfile

root = Path(__file__).resolve().parent
version = json.loads((root / 'package.json').read_text(encoding='utf-8'))['version']
output = root / 'release'
output.mkdir(exist_ok=True)
stage = Path(tempfile.mkdtemp(prefix=f'github-v{version}-', dir=output))

files = [
    'package.json', 'verify.mjs', 'build-standalone.mjs',
    'make-github-package.py', 'make-github-web-package.py', 'GITHUB_README.md', 'CHANGELOG.md',
    'verification.json', '.github/workflows/pages.yml',
    'qa/legacy-v1-fingerprints.json', 'qa/v11-browser-results.json',
]
for relative in files:
    source = root / relative
    if not source.is_file() or source.is_symlink():
        raise ValueError(f'Missing or unsafe input: {relative}')
    target = stage / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)

for folder in ('dist', 'docs'):
    for source in sorted((root / folder).rglob('*')):
        if source.is_symlink():
            raise ValueError(f'Symlink not allowed: {source}')
        if source.is_file():
            target = stage / source.relative_to(root)
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, target)

shutil.copy2(root / 'GITHUB_README.md', stage / 'README.md')
(stage / '.gitignore').write_text(
    'node_modules/\nrelease/\ntmp/\n.openai/\n*.zip\n*.tar.gz\n*.log\n.DS_Store\n',
    encoding='utf-8')
entries = sorted(p for p in stage.rglob('*') if p.is_file())
for path in entries:
    if path.suffix.lower() in ('.pdf', '.firevault', '.bak') or any(
        name in path.relative_to(stage).parts for name in ('.git', '.openai', 'node_modules')
    ):
        raise ValueError(f'Forbidden package entry: {path}')
(stage / 'SHA256SUMS.txt').write_text(''.join(
    hashlib.sha256(p.read_bytes()).hexdigest() + '  ' + p.relative_to(stage).as_posix() + '\n'
    for p in entries), encoding='utf-8')
archive = output / f'语法小岛-GitHub完整包-v{version}.zip'
with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_DEFLATED) as z:
    for path in sorted(stage.rglob('*')):
        if path.is_file():
            z.write(path, path.relative_to(stage).as_posix())
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    assert '.github/workflows/pages.yml' in z.namelist()
    assert 'dist/index.html' in z.namelist()
print(json.dumps({'archive': str(archive), 'repository_folder': str(stage),
                  'files': len(z.namelist()), 'bytes': archive.stat().st_size}, ensure_ascii=False))
