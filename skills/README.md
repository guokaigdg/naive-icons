# naive-icons Skill

把 naive-icons 变成 AI 编码助手的**可安装技能**：助手能按语义检索图标、输出可直接粘贴的代码，
并且知道这套图标的设计规范，不会画出「能用但不是 naive」的图。

技能定义在 [`naive-icons/`](./naive-icons/)，遵循开放的 `SKILL.md` 格式（Anthropic Agent Skills），
同一份目录在 Claude Code、Cursor、Codex、OpenCode、Gemini CLI、Codex 等
读 SKILL.md 的客户端里都能用。

## 安装

```bash
npx skills add guokaigdg/naive-icons
```

它会先展示要装的东西再让你确认，**不用先装本库**，
也不用自己挑 agent——CLI 会探测本机装了哪些客户端，只探测到一个时直接装，
多个时才让你选（`.agents/skills/` 那一节是锁定的，通用目录始终包含）。

然后会问装 Project 还是 Global：Project 装到当前项目（`.claude/skills/` 和
`.agents/skills/`），跟着仓库走、团队共享；Global 装到用户目录。
Claude Code 和 Cursor 需要**新开会话**才加载技能表。

常用标志：

| 标志 | 含义 |
|---|---|
| `-g, --global` | 装到用户目录，跳过 Project/Global 提问 |
| `-a, --agent <名>` | 只装给指定 agent，可重复。`'*'` 表示全部 |
| `-y, --yes` | 跳过所有确认（CI 脚本用，日常不必加） |
| `--copy` | 复制而不是建软链 |

之后还可以用 `npx skills list` 看已装的、`npx skills check` 查更新、`npx skills update` 更新、
`npx skills remove naive-icons` 卸载。

> 只能写完整的 `owner/repo`，没法用短名——`skills` CLI 的源格式只有 GitHub 简写、git URL、
> 本地路径和直接下载 URL，**不解析 npm 包名**。直接写 `npx skills add naive-icons` 会被当成
> git 仓库地址，报 `repository 'naive-icons' does not exist`。

装不上时的两条退路：

```bash
# 1. 已经 npm i 过 naive-icons 的，skill 就在包里面
cp -R node_modules/naive-icons/skills/naive-icons ~/.claude/skills/

# 2. 手动 clone
git clone https://github.com/guokaigdg/naive-icons.git
cp -R naive-icons/skills/naive-icons ~/.claude/skills/
```

Claude Code 和 Cursor 需要**新开会话**才加载技能表。

## 装上之后

助手会自己判断什么时候用。也可以直接说：

- 「用 naive 图标给这个登录页配一套图标」
- 「找个表示'已读'的图标」
- 「这个界面该不该用手绘风图标？」

不想让它自动触发，可以关掉——在 `SKILL.md` 的 frontmatter 加：

```yaml
disable-model-invocation: true   # 只有用户显式调用才生效
```

## 结构

```
naive-icons/
├── SKILL.md                      入口。frontmatter 决定何时触发，正文是工作流
├── reference/
│   ├── catalog.md                全部图标：id / 中文名 / 组件名 / 什么时候用
│   ├── design-spec.md            设计规范：几何、色板、构图、属性继承、禁用项
│   └── patterns.md               用法：React/SVG、属性默认值、尺寸、无障碍、避坑表
└── scripts/
    ├── search.py                 语义检索（内嵌全量索引 + 同义词表，只用标准库）
    ├── emit.py                   输出 tsx / jsx / svg / html / json
    └── icons.json                全部 SVG 源码，生成物
```

## 两个脚本是干什么的

`scripts/` 不是给人用的命令行工具，是**助手执行检索和出码的内部实现**：

- `search.py` 内嵌全量索引与同义词表，助手把它当函数跑，只读取输出。
  脚本代码本身不进入助手上下文，所以比让助手临场生成等价代码省得多。
  这是「不把上百枚图标全塞进上下文」的关键。
- `emit.py` 读同目录的 `icons.json` 出码。

两者都只用 Python 3 标准库，无第三方依赖。`icons.json` 让整个 skill 自包含——
装到哪都能出码，不依赖项目里是否装了本库。

## 维护

`catalog.md` 和 `icons.json` 都是生成物，加完图标重跑即可：

```bash
python3 scripts/build_skill_assets.py          # 生成
python3 scripts/build_skill_assets.py --check  # 只校验是否最新（CI 用）
```

它会校验 `svg/`、`ICON_CATEGORY`、`ZH_NAMES` 三者一致，再从 `svg/` 重建两个产物。
「什么时候用」一列取自 `search.py` 的同义词表，两者必须同源——
改了 `SYNONYMS` 就要重跑本脚本。

> ⚠️ 绝不要 `import scripts/generate_icons_add.py`——它的生成逻辑在模块层，
> 一 import 就会执行 main，重写 `index.ts` / `types.ts` / `package.json`。
> 要比对它的内容请用 AST 静态解析。

库内新增图标仍要同步三处：

```
<仓库根>/svg/<id>.svg
<仓库根>/src/<Name>Icon.tsx
<仓库根>/scripts/generate_icons_add.py     ← NEW_ICONS 同名条目
```

最后再跑一次 `python3 scripts/build_skill_assets.py`。
