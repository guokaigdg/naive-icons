import { defineConfig } from 'tsup';

/**
 * 逐图标模块输出，这是 tree-shaking 生效的前提。
 *
 * 以前只把 src/index.ts 当单一入口，打出来是一个大文件，里面有 163 条顶层语句
 *   AirplaneIcon.displayName = "AirplaneIcon";
 * 打包器无法证明这些赋值无副作用，于是整个模块必须保留，连带保留全部 163 个组件。
 * `sideEffects: false` 只允许跳过「整个模块」，管不到模块内部的顶层语句，所以那时
 * 它等于没写——实测只导入一个图标会打进 105 KB。
 *
 * 现在每个图标各自成为入口 + splitting，代码被拆进独立 chunk，同样的导入降到 1 KB 左右。
 * 代价是 dist 文件数从 6 涨到约 960，但逐文件压缩后整包只多 0.2 KB（.map 不进 tarball）。
 * tests/bundle-size.test.ts 盯住这个体积，防止回退。
 */
export default defineConfig({
  entry: ['src/index.ts', 'src/*Icon.tsx'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  // 多入口下关掉 splitting 会让每个入口都自包含全部 163 个图标，tree-shaking 反而失效
  splitting: true,
  external: [/^react(\/|$)/, /^react-dom(\/|$)/],
  target: 'es2018',
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.js' };
  },
});
