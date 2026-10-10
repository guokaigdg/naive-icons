import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * tree-shaking 回归测试。
 *
 * 单入口产物里有 163 条顶层 `XxxIcon.displayName = "..."`，打包器无法证明无副作用，
 * 于是整个模块必须保留，163 个图标全进包；`sideEffects: false` 只允许跳过「整个模块」，
 * 管不到模块内部的顶层语句。实测只导入一个图标打进 105 KB，改成逐图标入口后降到约 1 KB。
 * 这个测试的作用是：以后谁把 tsup 配置改回单入口，会在这里红掉。
 */

const BUDGET_BYTES = 8 * 1024;      // 8 KB。实测约 0.9 KB，留足余量又足够灵敏
const PER_ICON_BUDGET = 1.5 * 1024; // 每个图标约 0.75 KB，留 2 倍余量

function bundle(imports: string[]): { bytes: number; iconsLeft: number } {
  const dir = mkdtempSync(join(tmpdir(), 'naive-bundle-'));
  const entry = join(dir, 'entry.mjs');
  const out = join(dir, 'out.js');
  writeFileSync(
    entry,
    `import { ${imports.join(', ')} } from ${JSON.stringify(join(process.cwd(), 'dist/index.mjs'))};\n` +
      `console.log([${imports.join(', ')}]);\n`,
  );
  const esbuild = join(process.cwd(), 'node_modules/.bin/esbuild');
  execFileSync(esbuild, [
    entry, '--bundle', '--minify', '--format=esm', '--external:react', `--outfile=${out}`,
  ]);
  const code = readFileSync(out, 'utf8');
  return { bytes: Buffer.byteLength(code), iconsLeft: (code.match(/displayName="[A-Za-z]*Icon"/g) || []).length };
}

describe('tree-shaking', () => {
  it('只导入一个图标时，包体积保持在预算内', () => {
    const { bytes, iconsLeft } = bundle(['HomeIcon']);
    expect(bytes).toBeLessThan(BUDGET_BYTES);
    // 摇干净后只能剩下用到的那一个
    expect(iconsLeft).toBe(1);
  });

  it('体积随导入数量线性增长，不随库的 163 枚总量增长', () => {
    const one = bundle(['HomeIcon']).bytes;
    const many = bundle([
      'HomeIcon', 'UsersIcon', 'LockIcon', 'HeartIcon', 'SearchIcon', 'BellIcon',
      'StarIcon', 'GiftIcon', 'MailIcon', 'CloudIcon', 'CatIcon', 'DogIcon',
    ]);
    expect(many.iconsLeft).toBe(12);
    expect(many.bytes).toBeLessThan(12 * PER_ICON_BUDGET);
    // 全库单文件时代导入 1 个就是 105 KB；这里必须远小于那个量级
    expect(many.bytes).toBeLessThan(one * 40);
  });

  it('tsup 配置仍按图标多入口输出（防止有人改回单入口）', () => {
    const cfg = readFileSync('tsup.config.ts', 'utf8');
    expect(cfg).toMatch(/entry:\s*\['src\/index\.ts',\s*'src\/\*Icon\.tsx'\]/);
    expect(cfg).toMatch(/splitting:\s*true/);
  });
});
