import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * tree-shaking 回归测试。
 *
 * 与 React 版（仓库根 tests/bundle-size.test.ts）同一个道理：只把 index.ts 当单一
 * 入口，打包器无法证明顶层语句无副作用，整个模块必须保留，201 个图标全进包。
 * `sideEffects: false` 只允许跳过「整个模块」，管不到模块内部的顶层语句。
 * 现在每个图标各自成为入口 + splitting，只导入一个图标实测约 1.4 KB。
 */
const BUDGET_BYTES = 9 * 1024;       // 9 KB。实测约 1.4 KB，留足余量又足够灵敏
const PER_ICON_BUDGET = 2 * 1024;    // 2 KB/枚。实测约 0.9 KB

function bundle(imports: string[]): { bytes: number; iconsLeft: number } {
  const dir = mkdtempSync(join(tmpdir(), 'naive-vue-bundle-'));
  const entry = join(dir, 'entry.mjs');
  const out = join(dir, 'out.js');
  writeFileSync(
    entry,
    `import { ${imports.join(', ')} } from ${JSON.stringify(join(process.cwd(), 'dist/index.mjs'))};\n` +
      `console.log([${imports.join(', ')}]);\n`,
  );
  const esbuild = join(process.cwd(), 'node_modules/.bin/esbuild');
  execFileSync(esbuild, [
    entry, '--bundle', '--minify', '--format=esm', '--external:vue', `--outfile=${out}`,
  ]);
  const code = readFileSync(out, 'utf8');
  // 组件定义里 name: "XxxIcon"，摇干净后只剩下用到的那几个
  return { bytes: Buffer.byteLength(code), iconsLeft: (code.match(/name:"[A-Za-z]*Icon"/g) || []).length };
}

describe('tree-shaking', () => {
  it('只导入一个图标时，包体积保持在预算内', () => {
    const { bytes, iconsLeft } = bundle(['HomeIcon']);
    expect(bytes).toBeLessThan(BUDGET_BYTES);
    // 摇干净后只能剩下用到的那一个
    expect(iconsLeft).toBe(1);
  });

  it('体积随导入数量线性增长，不随库的 201 枚总量增长', () => {
    const one = bundle(['HomeIcon']).bytes;
    const many = bundle([
      'HomeIcon', 'UsersIcon', 'LockIcon', 'HeartIcon', 'SearchIcon', 'BellIcon',
      'StarIcon', 'GiftIcon', 'MailIcon', 'CloudIcon', 'CatIcon', 'DogIcon',
    ]);
    expect(many.iconsLeft).toBe(12);
    expect(many.bytes).toBeLessThan(12 * PER_ICON_BUDGET);
    // 单文件时代导入 1 个就是 100 KB 量级；这里必须远小于那个量级
    expect(many.bytes).toBeLessThan(one * 40);
  });

  it('tsup 配置仍按图标多入口输出（防止有人改回单入口）', () => {
    const cfg = readFileSync('tsup.config.ts', 'utf8');
    expect(cfg).toMatch(/entry:\s*\['src\/index\.ts',\s*'src\/\*Icon\.ts'\]/);
    expect(cfg).toMatch(/splitting:\s*true/);
  });
});
