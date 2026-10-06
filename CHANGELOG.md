# 更新日志

本文件记录 Naive Icons 的每个版本变更。版本号遵循语义化版本规范（SemVer）。

## 1.5.2

修复

- **109 / 159 枚图标（68%）的 JSX 里带 kebab-case 属性**。SVG 里 `stroke-width` /
  `stroke-linecap` / `stroke-linejoin` 是合法的 kebab-case，JSX 里必须写 camelCase。
  TSX 的 body 是从 SVG 原样搬过来的，历史上忘了转换，React 会报
  `Invalid DOM property \`stroke-width\``。该缺陷自 1.1/1.2 起就在线上（v1.3.0 时已有 89 枚命中）
- **`strokeWidth` 真正作用到整枚图标**。SVG 的 `stroke-width` 是可继承属性，但子元素一旦自带值
  就不再继承根节点。库里有 220 处内层自带描边（182 处是刻意的粗细层次：细节 1.5–2、
  主体 3.5、强调 4–5），所以以前只改根节点的话，`<Icon strokeWidth={7} />` 会得到
  「外框 7、内层还是 3.5 与 4」的断裂效果。现在内层写成 `strokeWidth={sw(设计值)}`，
  `sw` 由 `scaledStroke(props.strokeWidth)` 提供，把 `strokeWidth` 当作**相对 3.5 的缩放系数**：
  默认 3.5 时 scale 为 1，设计值一根线都不变；传 7 则所有描边一起加倍，层次关系保持
- `size` 传 `null` 时不再让尺寸属性消失。以前用解构默认值 `const { size = 24 }`，
  它只对 `undefined` 生效，于是 `size={isLarge ? 32 : null}` 这种很自然的写法会传进 `null`，
  结果 svg 上 `width` / `height` 属性整个缺失，图标按浏览器默认尺寸渲染。
  现在改用 `??`，负数同样回落 24；`size={0}` 保留（用 0 隐藏图标是合理用法）

其他

- 订正 1.5.1 CHANGELOG 里的体积数据。当时用 `sourcemap: false` 的探针构建去量，
  却发布了 `sourcemap: true` 的版本，数字对不上。实际是 141.9 KB → 222.7 KB
- 发布时排除 `dist/**/*.map`（640 个文件，占 dist 总量 52%）。仓库里仍然保留，
  只是不进 tarball。tarball 因此从 222.7 KB 回到 **149.9 KB**，相对 1.5.0 只 +5.6%，
  文件数 1775 → 1135
- 两个生成器（`generate_icons.py` / `generate_icons_add.py`）都加上 kebab → camel 转换
  与描边缩放，`emit.py` 的 tsx 输出也一并修正，以后新增图标不会再犯
- `scaledStroke` 与 `normalizeIconProps` 从包入口导出
- 测试从 13 个增加到 27 个：
  - `tests/jsx-attrs.test.ts` 断言 159 个 tsx 的 JSX 体内没有 kebab 属性、内层描边是
    `sw(...)` 形式、svg/ 源文件仍保持 kebab（那是合法的，不能被「修」成 camel）
  - `tests/iconProps.test.ts` 补 size 的 5 个边界用例与 `scaledStroke` 的 4 组缩放用例

## 1.5.1

修复

- **tree-shaking 恢复生效**。以前只把 `src/index.ts` 作为单一入口，产物是一个大文件，
  里面有 159 条顶层 `XxxIcon.displayName = "..."` 赋值。打包器无法证明这些语句无副作用，
  于是整个模块必须保留，连带保留全部 159 个组件——`sideEffects: false` 只允许跳过
  「整个模块」，管不到模块内部的顶层语句，所以那时它等于没写。
  实测只导入 `HomeIcon` 一个图标会打进 **105 KB（gzip 11.8 KB）**。
  改为每个图标各自成为入口 + `splitting: true` 后，同样的导入是 **935 B**（约 1/112），
  产物里只剩用到的那一个图标。
  代价是 dist 文件数从 6 涨到约 960，tarball 从 141.9 KB 涨到 222.7 KB（+57%）、
  unpacked 从 1.37 MB 涨到 1.73 MB。1.5.2 起发布时排除 `.map`（占 dist 总量 52%），
  tarball 回到 149.9 KB，相对 1.5.0 只 +5.6%
- 新增 `naive-icons/icons/*` 子路径，可绕过顶层入口直接引单个图标
- `width` / `height` 不再被静默忽略。以前 `normalizeIconProps` 无条件写
  `svgProps.width = size`，导致 `width={40}` 渲染出来还是 24×24，README 承诺的
  「单独指定宽或高」根本做不到。现在 `width` / `height` 优先于 `size`，
  没传的那一边回落到 `size`：`size={32} width={64}` → 64 × 32
- 补上 1.0.0 CHANGELOG 提到过的 `IconCategory`：它实际在 1.2.0 重构 `types.ts` 时被移除，
  且从未从包入口导出过。1.5.1 起以本条为准，分类信息请查官网或 `catalog.md`

其他

- 新增测试：`npm test`（vitest），13 个用例
  - `tests/bundle-size.test.ts` 盯住单图标打包体积与残留图标数，
    把 tsup 配置改回单入口或关掉 splitting 会直接失败
  - `tests/iconProps.test.ts` 钉住 width/height 优先级规则
  - `tests/exports.test.ts` 钉住包入口的导出数量与 svg/ 目录的对应关系
- 新增 CI（`.github/workflows/ci.yml`）：typecheck → build → test，
  并校验官网数据与 skill 派生产物是否与 `svg/` 同源
- 补 `files` 里的 `skills`，`npm i naive-icons` 后可从 `node_modules` 直接取用 skill
- 把 `@types/react` 声明为可选 peer dependency。包的 `.d.ts` 引用了 React 类型，
  消费者若没装 `@types/react`，`SVGProps` 解析失败会让 `IconProps` 只剩自己声明的
  5 个属性——而这个错误会被 `skipLibCheck` 静默吞掉，直到用到 `className` 之类才暴露
- 移除有破坏性的 `npm run icons:build`：`scripts/generate_icons.py` 是 1.0.0 的一次性引导
  脚本，会把 `package.json` 写回 `0.1.0`、覆盖 `README.md`、重建 `src/index.ts`。
  现已从 npm scripts 摘除，并给脚本加了守卫：检测到仓库已有 100+ 图标就拒跑
- 归一 svg 文件格式：7 个文件去掉多余的尾换行，`scooter` 去掉 body 缩进。
  159 个 tsx 与 svg 现在全部同源，`emit.py` 可逐行复现

## 1.5.0

新增

- 官方 Agent Skill：让 AI 编码助手能按语义检索图标、输出可直接粘贴的代码，并知道这套图标的设计规范
- 一条命令装好，不用先装本库、不用挑 agent：

  ```bash
  npx skills add guokaigdg/naive-icons
  ```

  会先展示要装的内容再确认，并自动识别本机已装的 agent。
  可选 Project（跟着仓库走，团队共享）或 Global（装到用户目录），加 `-g` 可跳过该选择。
- Skill 自带全部 SVG 源码（收在 `scripts/icons.json` 一个文件里），装到哪都能出码，
  不依赖项目里是否装了本库
- 脚本只用 Python 标准库，skill 被装到任何位置都能跑
- 新增 `scripts/build_skill_assets.py`，从 `svg/` 生成 skill 的 `catalog.md` 与
  `icons.json`，并校验 `svg/`、`ICON_CATEGORY`、`ZH_NAMES` 三者一致

修复

- 补上 `index.ts` 对类型与色板的转发，`NAIVE_PALETTE`、`IconProps`、`IconName`、
  `IconComponent`、`PaletteColor` 从包入口真正可用了。此前 `src/types.ts` 里都有定义，
  但入口只导出 159 个图标组件，导致 README 里的
  `import { NAIVE_PALETTE } from 'naive-icons'` 报运行时 `SyntaxError`、
  `import type { IconProps } from 'naive-icons'` 报 `TS2305` / `TS2459`。
  该问题自 1.0.0 起就存在
- 两个生成器（`generate_icons.py` / `generate_icons_add.py`）的 `index.ts` 模板同步补上
  转发，否则下次新增图标时会被全量重建冲掉

## 1.4.0

新增

- 新增 25 个图标，图标总数增至 159
  - 界面基础 +11：users、user-plus、more-vertical、check-square、shield、bell-off、sliders、grid、list、ban、badge-check
  - 操作 +7：filter、sort、undo、redo、maximize、zoom-in、zoom-out
  - 文件与媒体 +3：volume、volume-x、paperclip
  - 通信 +2：send、inbox
  - 导航方位 +1：arrow-up-right
  - 交通工具 +1：scooter
- 撤销 / 重做改为墨色长弧搭配橙色实心箭头的形态，两枚互为镜像，箭头水平朝外
- 放大 / 缩小改用青色线框镜片加橙色大符号，与 search 的实心镜片彻底区分开

改进

- 重绘 refresh 为上下双弧的循环箭头，两段弧各占 120°，上下各留 100° 缺口，弧段与留白接近 1:2
- external-link 的橙色箭头描边由 3.5 加粗到 4.0，小尺寸下更清晰
- cart 从「交通工具」重新归入「日常物品」
- 官网取色器与主题换色改为只替换墨色描边。图标自带的彩色描边（橙色箭头、黄色勾等）本来就是 naive 风格的一部分，此前会被一并刷成单色

修复

- 官网深色模式下首次加载时，hero 贴纸改用奶油色描边，不会因墨色与深色底糊在一起而看不见
- hero 贴纸切换主题时只替换上一个主题色并在颜色未变时跳过，不再逐个重写 DOM
- 移除图标详情弹窗的左右切换按钮与键盘 ← → 导航，连带删除 step / indexOfCurrent 等死代码
- 扩充脚本重新生成 package.json 时会剥掉文件末尾的换行，导致凭空多出一行 diff，现已修复

## 1.3.0

新增

- 新增 9 个状态 / 反馈图标（alert-circle、alert-triangle、check-circle、eye-off、help-circle、info、lock-open、spinner、x-circle），图标总数增至 134

改进

- 微调 check 图标勾形几何，提升小尺寸下的清晰度

## 1.2.0

新增

- 新增 9 个图标（basketball、dumbbell、google-chrome、mountain、tent、pause、stop、coffee-cup、water-cup），图标总数增至 125
- 官网图标总数改为从图标数据动态读取，不再硬编码，避免与 svg/ 实际数量脱节

改进

- 重绘 airplane 机尾与 snowflake 雪花几何，雪花改为三等分旋转结构
- 官网图标浏览器工具栏吸顶时改为直角，与头部贴合；圆角改用独立变量，修复左上/右上边框显示不全的问题

## 1.1.0

新增导航 / 操作骨架一组图标（menu、chevron 四向、ellipsis、external-link、link / unlink、copy、minus），图标总数增至 116。

修复

- 修正 `IconName` 类型中图标名后缀重复的问题，现在与组件导出名一一对应
- 全部 105 个组件改用 `forwardRef`，支持 ref 透传，并补全 `displayName` 便于 DevTools 识别
- 补齐无障碍属性：装饰性图标默认 `aria-hidden`，传入 `title` 时自动渲染 `<title>` 子节点并标记 `role="img"`
- `normalizeIconProps` 不再把 `title` 误写为原生 `title` 属性，避免与无障碍 `<title>` 节点冲突

改进

- 官网三层（HTML / CSS / JS）完全重写：语义化标签、统一的设计令牌体系（间距 4px 基数、圆角与阴影尺度）、清除模板导出的冗余属性
- 信息架构收敛：原先并列的 4 个代码面板合并为「安装 / React / SVG / TypeScript」标签页，调色板与设计原则合并为「设计规范」一节
- 视觉基调改为温暖手绘：纸张颗粒纹理、暖调深色模式、手绘分隔线，浅色与深色主题均可手动切换并记忆
- 新增 4 个方向键图标：上（arrow-up）、下（arrow-down）、左（arrow-left）、右（arrow-right），与已有的关闭（close）图标组成基础方向/操作图标组；同步更新 `index.ts`、`types.ts`、`svg/` 与官网数据
- 引入 LXGW 悠哉字体（OFL，自托管子集化，仅 715 个字符 ≈ 170KB ×2 个字重）作为网站字体；图标库本体仍无任何字体/资源依赖
- 图标浏览器工具栏在宽屏下吸顶，新增分类结果计数、搜索清空、描边快捷色板与自定义取色器
- 预览切换深色底时，若描边仍为默认墨黑会自动换成奶油色，避免图标不可见；用户显式选择的颜色不会被改写
- 详情弹窗支持键盘方向键连续切换图标，打开时背景内容设为 inert
- 无障碍补强：skip link、aria-live 结果计数、标签页方向键切换、焦点归还

## 1.0.2

修复

- 修复组件不传 `size` 时没有明确尺寸的问题：`normalizeIconProps` 现在始终向 svg 写入 `width` / `height`，默认 24，保证 `<HomeIcon />` 也有稳定的 24px 尺寸
- 顺手补上默认 `fill="none"`，避免与 SVG 内部已有的 `fill` 属性在覆盖时产生歧义

## 1.0.1

修复

- 修复 1.0.0 中组件未真正处理 `size` 与 `color` 属性的问题：现在 `size` 会同时映射为 `width` 与 `height`、`color` 会映射为描边 `stroke`，行为与 README 文档示例一致；`strokeWidth` 同样正确透传

## 1.0.0

首个正式版本发布。

新增

- 105 个手绘 naive folk art 风格 SVG 图标，覆盖界面基础、操作、文件与媒体、导航方位、通信、自然天气、动物、食物饮品、日常物品、交通工具、表情共 11 个分类
- 每个图标同时提供 SVG 源文件与 React TSX 组件
- 完整 TypeScript 类型定义：IconProps、IconName、IconCategory、PaletteColor、NAIVE_PALETTE
- 统一规格：48x48 viewBox、3.5 描边宽度、round 线帽与线角
- 9 色复古调色板，可作为设计令牌直接引用
- 官方文档站点，支持搜索、分类筛选、尺寸与描边颜色实时调整、一键复制与下载
- MIT 协议，全部图标为原创作品

改进

- 组件默认使用 currentColor，可自动继承父级文字颜色
- 支持 size、color、strokeWidth、fill、title 五个语义属性，同时继承全部原生 SVG 属性
- 单个图标体积控制在 400 至 700 字节，无运行时依赖
