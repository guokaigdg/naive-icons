import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * tree-shaking 回归测试。
 *
 * 以前 tsup 只把 src/index.ts 当单一入口，打出来是一个大文件，里面有 159 条顶层语句
 *   AirplaneIcon.displayName = "AirplaneIcon";
 * 打包器无法证明这些赋值无副作用，于是整个模块必须保留，159 个图标全进包。
 * package.json 的 sideEffects: false 只允许跳过「整个模块」，管不到模块内部的顶层语句，
 * 所以那时它等于没写。实测只导入一个图标会打进 105 KB。
 *
 * 现在每个图标各自成为入口 + splitting，代码被拆进独立 chunk，同样的导入降到 1 KB 左右。
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

  it('体积随导入数量线性增长，不随库的 159 枚总量增长', () => {
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
    // 单入口 + splitting:false 都会让 tree-shaking 失效，这里锁住关键前提
    const cfg = readFileSync('tsup.config.ts', 'utf8');
    expect(cfg).toMatch(/entry:\s*\['src\/index\.ts',\s*'src\/\*Icon\.tsx'\]/);
    expect(cfg).toMatch(/splitting:\s*true/);
  });
});
