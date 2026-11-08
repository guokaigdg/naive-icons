# AGENTS.md

Naive Icons — 手绘 naive folk art 风格的 SVG 图标库，同一套图形同时提供 React 与 Vue 3 两个包。

## Setup commands

- Install deps: `npm install`（根包）、`cd vue && npm install`（Vue 包）
- Start dev:    `npm run dev`（tsup watch）、`npm run website`（本地官网，8080 端口）
- Build:        `npm run build`、`cd vue && npm run build`
- Test:         `npm test`、`cd vue && npm test`（Vitest）
- Typecheck:    `npm run typecheck`、`cd vue && npm run typecheck`
- 官网数据:      `npm run icons:data`；Vue 组件: `npm run icons:vue`

## Project layout

- `svg/` — 723 枚图标的 SVG 源，**唯一事实来源**
- `src/` — React 组件（由 `svg/` 生成，勿手改）
- `vue/` — Vue 3 包（`vue/src` 组件、`vue/svg` 为发布时重拷的副本）
- `skills/` — skill 包：`scripts/icons.json`、检索脚本 `search.py`、目录 `catalog.md`
- `website/` — 官网（`assets/js/icons.js` 由脚本生成）
- `scripts/` — 生成器与工具（Python）
- `tests/` — Vitest 用例，含描边吃光检测与边距检测
- `core/` — 框架无关的图标属性 helper；`assets/` — logo

## 图标工作流（最容易踩坑的地方）

1. **只改 `svg/<id>.svg`**。`src/*.tsx`、`vue/src/*.ts`、`website/assets/js/icons.js`、
   `skills/naive-icons/scripts/icons.json`、`skills/naive-icons/reference/catalog.md`
   全是派生产物，手改会被 CI 的 `git diff --exit-code` 打回。
2. 改完按顺序重跑（顺序不能换：`emit.py` 读的是 `icons.json`）：

   ```bash
   python3 scripts/build_skill_assets.py                              # 更新 icons.json
   python3 skills/naive-icons/scripts/emit.py <ids> -f tsx -o src/     # React 组件
   python3 scripts/generate_vue.py                                    # Vue 组件
   python3 scripts/build_website.py                                   # 官网数据 + index.html
   python3 scripts/build_skill_assets.py                              # catalog.md
   ```

3. **绝对不要 import 或运行 `scripts/generate_icons_add.py`** —— 它的逻辑在模块层，一跑就重写
   `index.ts` / `types.ts` / `package.json`。
4. 新增图标还要在 `scripts/build_website.py`（分类 + 中文名）与
   `skills/naive-icons/scripts/search.py`（`ICONS` 表 + 同义词）登记，否则官网和检索会缺项。
5. 两个包**永远同版本发布**（`tests/version-sync.test.ts` 会断言）。

## 图标设计红线

- 48×48 画布；根节点必须与全库**逐字节一致**（`fill="none" stroke="#2A2A2A" stroke-width="3.5"` 等）
- 主体含描边外缘距边 ≥ 3 单位
- 只用 10 色白名单：ink / navy / orange / yellow / pink / green / teal / brown / cream / white
- 小色块必须显式 `stroke="none"`，否则被 3.5 描边向内吃光（`tests/stroke-eaten.test.ts` 会拦）
- 禁用渐变 / 滤镜 / opacity / 虚线 / mask / clipPath / pattern
- body 顶格不缩进、`</svg>` 独占末行、**文件末尾无换行**
- 完整规范见 `skills/naive-icons/reference/design-spec.md`

## Code style

- TypeScript strict（`tsconfig.json: strict: true`），单引号 + 分号，2 空格缩进
- SVG body 在组件里同样顶格不缩进（为了逐行比对 diff）
- 组件名 = id 各段首字母大写 + `Icon`（`user-plus` → `UserPlusIcon`）

## Testing instructions

- 单测：`npm test`（根包 80 例、vue 包 784 例）
- 两条必测：`tests/stroke-eaten.test.ts`（小色块被描边吃光）、`tests/margin.test.ts`（描边外缘边距 ≥ 3）
- 改完图标最好用**真实渲染**核验像素（qlmanage 渲染 + 统计调色板），几何推断会漏掉「被上层形状盖住」
- CI（`.github/workflows/ci.yml`）顺序：typecheck → build → test → 生成物同步检查

## PR & commit conventions

- **提交前必须先经维护者确认**：先把完整的 commit message 与文件清单贴出来，得到明确同意再执行。
  方案讨论、「按你的建议来」都不等于提交许可
- `push` / `amend` / `reset` / `rebase` / 打 tag / `npm publish` / 建 GitHub Release 各自单独确认
- commit message 用 Conventional Commits，英文、尽量少：`feat(icons):` / `fix(icons):` / `chore(release): X.Y.Z`
- 提交用显式 pathspec（`git commit -- <paths>`），提交前先 `git status` 核对

## Security

- 不要提交密钥（`.env` 等已在 `.gitignore`）
- `~/.npmrc` 含 npm token，**不要打印或提交**
- GitHub token 从 keychain 取（`git credential fill`），不要落到文件里
