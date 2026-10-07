# naive-icons 用法模式

本文档只写**经过源码核实**的行为。库版本 1.5.0，共 159 枚图标。

---

## 1. 安装

```bash
npm install naive-icons      # 或 pnpm / yarn
```

零运行时依赖（图标库本体不引任何字体或资源），只 peer 依赖 `react >= 16.8`。

## 2. React 组件（主要用法）

```tsx
import { HomeIcon, HeartIcon, PenguinIcon } from 'naive-icons';

export function Example() {
  return (
    <nav>
      <HomeIcon size={24} />
      <HeartIcon size={24} color="#E76F51" />
      <PenguinIcon size={48} strokeWidth={7} />  {/* 描边整体加倍 */}
    </nav>
  );
}
```

按需引入用具名导入即可。包是 ESM + `sideEffects: false`，打包器会做 tree-shaking，
`dist/index.mjs` 单文件全量约 175 KB；摇掉未用组件后单个 SVG 源文件在 **245–1039 字节**
之间（中位 402、平均 460）。

> ⚠️ **不要**写 `import HomeIcon from 'naive-icons/src/HomeIcon'`。`package.json` 的 `files`
> 不含 `src`，且 `exports` 也没有 `./src/*`，这条路径对 npm 用户不可用（仓库 README 里有这个
> 错误示例）。具名导入 + tree-shaking 就是正解。

## 3. 五个语义属性

| 属性 | 类型 | **实际默认值** | 说明 |
|---|---|---|---|
| `size` | number \| string \| null | `24` | 同时映射 `width` 与 `height`；`null` 等同不传 |
| `color` | string | **`#2A2A2A`** | 映射到根节点 `stroke` |
| `strokeWidth` | number \| string | `3.5` | **相对 3.5 基准的缩放系数**，见第 4 节 |
| `fill` | string | `none` | 根节点填充 |
| `title` | string | — | 渲染为 `<title>` 子节点 |

组件继承全部原生 `SVGProps<SVGSVGElement>`，`className`、`onClick`、`style`、`data-*` 都能直接传。

> ⚠️ **`color` 默认值是 `#2A2A2A` 不是 `currentColor`**。根节点会被显式写入
> `stroke="#2A2A2A"`，所以图标**不会**自动继承父级文字颜色。要跟随文字颜色必须显式传：

```tsx
<span style={{ color: '#264653' }}>
  <HomeIcon size={20} color="currentColor" />
  首页
</span>
```

## 4. 尺寸怎么选

| 尺寸 | 场景 | 注意 |
|---|---|---|
| 16 | 表格内联、面包屑、标签内 | 生死线，靠剪影辨识。细节会消失，选形体最简的图标 |
| 20 | 紧凑工具栏、输入框尾部 | |
| 24 | **默认**，导航、按钮、菜单 | 所有图标的尺寸基准 |
| 32 | 空状态、功能卡片标题 | 能看到手作细节 |
| 48 | 插画式空状态、品牌区、加载页 | 表情与笔触最完整 |

`strokeWidth` 是**相对基准值 3.5 的缩放系数**，不是绝对宽度：

- `3.5`（默认）→ scale 1，**一根线都不变**，就是 svg/ 里的设计值
- `7` → scale 2，所有描边一起加倍，粗细层次保持
- `"7"` 与 `7` 等价；`'abc'` / `NaN` / 负数会回落到 3.5
- `0` → 不描边

它作用到**整枚图标**：内层的粗细层次（细节 1.5–2、主体 3.5、强调 4–5）会按同一比例缩放，
不会出现「外框变粗、内层没变」的断裂。数字与字符串都支持。

不要随手调。调到 2 以下（scale 0.57）会让 16px 档糊成一团。只有两种情况该动它：

- 想让整组图标更「重」：`strokeWidth={5.25}`（1.5 倍）
- 单个图标在特定尺寸下描边过粗：先试放大 `size`，再考虑收窄

## 5. 非 React 项目

`svg/` 下 159 个文件都是自包含 SVG，无外部引用。

```html
<img src="node_modules/naive-icons/svg/home.svg" width="24" height="24" alt="首页" />
```

`package.json` 的 `exports` 已开放 `"./svg/*"`，所以 `naive-icons/svg/home.svg` 可以直接 import。

内联使用时要跟随文字颜色，把 `stroke="#2A2A2A"` 换成 `stroke="currentColor"`：

```html
<svg width="24" height="24" viewBox="0 0 48 48" fill="none"
     stroke="currentColor" stroke-width="3.5"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <!-- 图形 -->
</svg>
```

`emit.py --format svg|html|jsx` 可以直接产出以上任意一种。

## 6. 无障碍

组件已经处理好了两种情况，不用手动加 `aria`：

```tsx
<HomeIcon size={24} />                      // 装饰性 → 自动 aria-hidden="true"
<HomeIcon size={24} title="返回首页" />      // 有语义 → role="img" + <title>
```

判定逻辑：传了 `title`、`aria-label` 或 `role` 任意一个，就认为是有语义的图标，否则视为装饰性。

**仍然要遵守的规则**：

- 纯装饰的图标**必须**留空（`<HomeIcon />`），不要为了「说明一下」而加 `title`——
  无意义的 title 会被读屏念出来，比不念更糟。
- 图标按钮必须有可访问名称。图标本身给 `title` 不够，按钮还要有 `aria-label`：
  ```tsx
  <button aria-label="删除"><TrashIcon size={20} /></button>
  ```
- 颜色不是唯一信息载体。`check-circle`（成功）和 `x-circle`（错误）形状完全不同，
  这正是本库每枚都带形体轮廓的原因。

## 7. 深色模式

本库调色板里 ink 是 `#2A2A2A`（深墨），**在深色底上会糊掉**。两种处理：

```tsx
// A. 按主题切色
const stroke = theme === 'dark' ? '#FAEDCD' : '#2A2A2A';
<HomeIcon size={24} color={stroke} />

// B. 跟随文字颜色（推荐，最省事）
<div className="dark:text-cream">
  <HomeIcon size={24} color="currentColor" />
</div>
```

注意 `color` 只覆盖**墨色描边**。图标内部的彩色描边和扁平填充**不会**跟着变——
这是设计意图，彩色是身份的一部分。如果你的产品要求整枚图标单色化，
用 CSS 滤镜或在 SVG 层面替换全部 `stroke`/`fill`，不要指望 `color` 属性能做全。

## 8. 成对图标

库里这些成对成员互为镜像或镜像对称，可以靠形状区分而不必靠记忆：

| 基础 | 对应 |
|---|---|
| `lock` | `lock-open` |
| `volume` | `volume-x` |
| `eye` | `eye-off` |
| `bell` | `bell-off` |
| `link` | `unlink` |
| `play` | `pause` |
| `undo` | `redo` |
| `zoom-in` | `zoom-out` |
| `arrow-left` | `arrow-right` |
| `chevron-left` | `chevron-right` |

选图标时优先复用已有对，不要为同一语义再造新图形。

## 9. 容易混淆的几组

挑图标时注意避开这些：

| 想要 | 别用 | 用 |
|---|---|---|
| 复选框 | `check`（圆徽章） | `check-square` |
| 放大镜 | `zoom-in` | `search` |
| 向上 | `chevron-up` | `arrow-up` |
| 排序 | `filter` | `sort` |
| 更多 | `ellipsis` | `more-vertical`（竖排菜单用） |
| 静音 | `ban` | `volume-x` |
| 外链 | `external-link` | `link`（同页跳转） |

拿不准就跑 `search.py`，它会给出候选和命中理由：

```bash
python3 search.py "复选框"
```

## 10. 批量生成

要在自己项目里落一批组件：

```bash
python3 scripts/emit.py users user-plus user --format tsx --out src/components/icons
```

`emit.py` 生成的 tsx 与本仓库 `src/*Icon.tsx` 的模板、排版、空行结构一致，可以直接混用。
（唯一例外是 `scooter`，它的 tsx 是手写留下的、缩进与 `svg/scooter.svg` 不一致，属仓库内
既存的排版问题，不影响代码正确性。）
