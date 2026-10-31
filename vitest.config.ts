import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // vue/ 是独立的包，有自己的 vitest 与依赖（在 vue/ 下跑 npm test）。
    // 不排除的话根目录这轮会把 vue/tests/*.test.ts 也扫进来，而根目录的
    // node_modules 里并没有 vue，那边的测试会在 CI 的 verify job 里直接报错。
    exclude: [...configDefaults.exclude, 'vue/**'],
  },
});
