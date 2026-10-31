import { defineConfig } from 'tsup';

/**
 * 逐图标模块输出，这是 tree-shaking 生效的前提。
 *
 * 与 React 版（仓库根 tsup.config.ts）同一个道理：只把 src/index.ts 当单一入口，
 * 打包器无法证明顶层语句无副作用，于是整个模块必须保留，连带保留全部 201 个组件。
 * `sideEffects: false` 只允许跳过「整个模块」，管不到模块内部的顶层语句。
 *
 * 现在每个图标各自成为入口 + splitting，代码被拆进独立 chunk，只导入一个图标
 * 实测约 1.4 KB（React 版 1.25 KB，差的是 Vue 运行时那层组件定义）。
 */
export default defineConfig({
  entry: ['src/index.ts', 'src/*Icon.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  // 多入口下关掉 splitting 会让每个入口都自包含全部 201 个图标，tree-shaking 反而失效
  splitting: true,
  external: [/^vue(\/|$)/],
  target: 'es2020',
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.js' };
  },
});
