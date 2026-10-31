import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * 两个 npm 包必须同版本发布。
 *
 * naive-icons 与 naive-icons-vue 卖的是同一套 201 枚图标，版本号代表的是
 * 「这套图标 + 这套 API」的版本。两个包的版本一旦错开，用户 npm update 其中
 * 一个就会拿到跟另一个不一致的图标集，排查起来极其痛苦，所以在这里钉住。
 *
 * 发版时记得两个 package.json 一起改：npm version 1.9.0 --workspaces 不适用
 * （本仓库不是 workspace 结构），要分别改根 package.json 与 vue/package.json。
 */
function readPkg(path: string): { name: string; version: string } {
  return JSON.parse(readFileSync(path, 'utf8'));
}

describe('版本号同步', () => {
  const react = readPkg('package.json');
  const vue = readPkg(join('vue', 'package.json'));

  it('naive-icons 与 naive-icons-vue 版本号相同', () => {
    expect(vue.version).toBe(react.version);
  });

  it('naive-icons-vue 的包名没被改坏', () => {
    expect(vue.name).toBe('naive-icons-vue');
    expect(react.name).toBe('naive-icons');
  });
});
