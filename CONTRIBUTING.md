# 贡献指南

感谢你愿意为 Naive Icons 贡献力量。这套图标库的价值在于风格统一，因此新增图标时最重要的一点是：它看起来必须像"本来就属于这个家族"。

## 新增图标的流程

1. Fork 本仓库并新建分支，分支名建议用 `icon/your-icon-name`。
2. 在 `scripts/` 对应的图标定义中追加新图标的 SVG 内容。
3. 运行生成脚本，产出 SVG 与 React 组件：

   ```bash
   python3 scripts/generate_icons_add.py
   ```

4. 重新生成官网数据，确保新图标出现在文档中：

   ```bash
   python3 scripts/build_website.py
   ```

5. 刷新 Agent Skill 的派生产物。`skills/naive-icons/reference/catalog.md` 和
   `skills/naive-icons/scripts/icons.json` 都是从 `svg/` 生成的，不重跑的话不会自动更新：

   ```bash
   python3 scripts/build_skill_assets.py
   ```

   该脚本会先校验 `svg/`、`ICON_CATEGORY`、`ZH_NAMES` 三者数量一致，再重建两个产物。
   想在 CI 里只做校验（不写文件）就用 `--check`，内容过期时返回非零。

6. 本地打开 `website/index.html` 预览，确认在 16、24、48 三个尺寸下都清晰可辨。
7. 跑测试：

   ```bash
   npm ci && npm test
   ```

   `tests/bundle-size.test.ts` 会打一个只导入单个图标的包并断言体积，
   `tests/jsx-attrs.test.ts` 会断言 JSX 里没有 kebab 属性、内层描边是 `sw(设计值)` 形式。
   生成器漏了属性名转换或 tsup 配置被改回单入口，这两条会直接失败。
8. 提交 Pull Request，说明图标用途与命名理由。

## 设计规范

提交前请逐条自查：

- 画布为 48x48，主体与画布边缘至少留出 3 个单位（按描边外缘算，不是中心线）
- 描边宽度 3.5，`stroke-linecap` 与 `stroke-linejoin` 均为 round
- 内层元素若自带 `stroke-width`，必须是刻意的粗细层次（细节 1.5–2、主体 3.5、强调 4–5）。
  组件里它会写成 `strokeWidth={sw(设计值)}` 跟着 `strokeWidth` 属性等比缩放，
  不要图省事改成固定值——那样 `strokeWidth` 就管不到内层了
- SVG 里 `stroke-width` 是合法 kebab-case，**转 TSX 时必须转成 `strokeWidth` / `strokeLinecap`**，
  否则 React 会报 `Invalid DOM property`。生成器已自动处理，手写组件时注意
- 不使用虚线、渐变、阴影与半透明叠加
- 以调色板的 9 色为默认基调；确有必要时可用其他实色（如品牌色），一律扁平填充
- 不使用外部字体、图片与滤镜，SVG 必须自包含
- 允许线条轻微不对称，这是手绘风格的一部分；但整体重心要稳
- 有生命的图形鼓励加上圆点眼睛与微笑

## 命名规范

- SVG 文件名使用 kebab-case，如 `shopping-bag.svg`、`thumbs-up.svg`
- React 组件名使用 PascalCase 并带 Icon 后缀，如 `ShoppingBagIcon`、`ThumbsUpIcon`
- 名称用通用英文单词，避免使用品牌名与缩写
- 新增图标时同步补充中文名与所属分类，写入 `scripts/build_website.py` 中的映射表

## SVG 输出格式

```html
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="#2A2A2A" stroke-width="3.5"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- 内容 -->
</svg>
```

根节点不要写死 width 与 height，尺寸由使用方通过 size 属性控制。

## 提交信息

使用 Conventional Commits，**正文一律英文**（scope 可用中文）：

```
feat(icons): add watering-can icon
fix(icons): correct bicycle chain path
docs(icons): clarify strokeWidth semantics
chore(release): 1.5.3
```

## 版权

提交贡献即表示你同意将作品以 MIT 协议授权给本项目使用。
