/**
 * 把仓库根的 svg/ 与 LICENSE 拷进 vue/ 包目录。
 *
 * vue/ 是仓库里的子目录，不是独立仓库，所以这两样东西得从根目录搬过来。
 * 只在发版前跑（prepublishOnly），仓库里不落这两份拷贝，避免 201 个 svg
 * 在 git 里出现两份。
 */
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PKG = path.resolve(HERE, '..');
const ROOT = path.resolve(PKG, '..');

// 旧拷贝先清掉，避免删掉的图标还留在包里
rmSync(path.join(PKG, 'svg'), { recursive: true, force: true });
mkdirSync(PKG, { recursive: true });
cpSync(path.join(ROOT, 'svg'), path.join(PKG, 'svg'), { recursive: true });
cpSync(path.join(ROOT, 'LICENSE'), path.join(PKG, 'LICENSE'));

console.log('已拷贝 svg/ 与 LICENSE 到 vue/');
