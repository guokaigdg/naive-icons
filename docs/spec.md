# Spec：重绘 9 枚图标（同 id、同语义）

> 状态：待批准。批准前不修改 `svg/`，不重跑生成器，不做任何提交。
> 依据：`AGENTS.md` + `docs/icon-quality-bar.md` + 对这 8 枚现存 SVG 的逐枚阅读。
> 技术规范一律以 `AGENTS.md` 与 `docs/icon-quality-bar.md` 为准，本文不重复，
> 只写这两份文档没写的部分：**每枚的具体画法**和**与近邻的区分**。

## 1. 目标与范围

对下列 9 枚图标**就地重绘**，id、文件名、中文语义、React/Vue 组件名全部不变：

| id | 中文名 | 分类 |
|---|---|---|
| `crocodile` | 鳄鱼 | 动物 |
| `aquarium` | 鱼缸 | 日常物品 |
| `boot` | 靴子 | 日常物品 |
| `corkscrew` | 开瓶器 | 工具 |
| `plunger` | 马桶搋子 | 工具 |
| `boxing` | 拳击手套 | 运动 |
| `jump-rope` | 跳绳 | 运动 |
| `market` | 集市 | 建筑场所 |
| `signature` | 签名 | 办公 |

**不做**：新增/删除图标、改名、改版本号、commit / push / tag / publish。

## 2. 逐枚重绘方向（决策已定，照此执行）

### 动物（1）

| id | 现存问题 | 新画法（可验收特征） |
|---|---|---|
| crocodile | 吻部是方盒，整只读作「带腿的方块」 | 长吻鳄：低伏体、细长吻末端上翘鼻孔、背脊锯齿、四条短腿、细齿；一条连续轮廓 |

### 器物（2）

| id | 现存问题 | 新画法 |
|---|---|---|
| aquarium | 直角矩形鱼缸叠层 | 圆角玻璃缸单轮廓；水面波浪、底砂、1 条鱼 + 水草；取消直角矩形 |
| boot | 鞋头与鞋底衔接生硬 | 圆头上翘、厚底与鞋跟连成一条；靴筒折痕 + 鞋带 |

### 工具（2）

| id | 现存问题 | 新画法 |
|---|---|---|
| corkscrew | 矩形柄 + 折线钻 | T 形木柄 + 短杆 + 3 圈等距螺旋钻，钻尖收细 |
| plunger | 椭圆 + 矩形拼装 | 钟形橡胶碗（口部下翻、1 条弧形褶皱）+ 木柄 |

### 运动（2）

| id | 现存问题 | 新画法 |
|---|---|---|
| boxing | 拇指与腕带偏弱，拳套结构不够清楚 | 单连续轮廓拳套：内侧独立拇指弧、腕口绑带、拳面缝线 |
| jump-rope | 圆弧 + 两个圆角矩形 | 跳绳：大弧绳两端穿入手柄，两只带握把纹的棒状手柄 |

### 场所（1）

| id | 现存问题 | 新画法 |
|---|---|---|
| market | 遮阳篷几何扇贝边 | 集市摊位：条纹篷（波浪下缘、有垂坠）+ 斜撑杆 + 摊台 + 篮筐果蔬 |

### 办公（1）

| id | 现存问题 | 新画法 |
|---|---|---|
| signature | 折线 + 菱形笔尖 | 手写连笔曲线（有粗细变化）+ 回锋，实体带中缝笔尖，底部短横线 |

## 3. 与近邻的区分（逐枚对照全库）

重绘后每枚都要能一眼和下列图标分开：

- `crocodile` vs `fish` `fishing` `snake` `frog` `crab` `lobster` `starfish`
  —— 鳄必须**低伏长吻 + 四条腿**，不能读成鱼或两栖爬行类。
- `aquarium` vs `fish` `fishing` —— 必须是**缸**（玻璃壁 + 水面 + 底砂）不是鱼。
- `corkscrew` / `plunger` vs `screwdriver` `hammer` `wrench` `pliers` `toolbox`
  —— 三者互不混淆：开瓶器 = 螺旋钻 / 马桶搋 = 钟形碗 / 其余既有工具保持原样。
- `jump-rope` vs 既有运动器材（`boxing` `badminton` `tennis` `baseball` 等）
  —— 必须是**大弧绳 + 两端手柄**，不能读成球拍或球。
- `boxing` —— 库内已无同义近邻（原 `boxing-glove` 已移除），它是唯一的拳套图标，
  重绘只需把拇指与腕带画清楚，不必再考虑与他人区分。
- `market` vs `store` `shopping-bag` `shopping-cart` `basket` `tent`
  —— 集市必须有**篷布 + 摊位**，不用门面，不用购物袋/车，不用帐篷。
- `signature` vs `pen-holder` `pencil` —— 必须是**签名笔迹**，不是笔。

## 4. 自检流程（每枚）

1. 写盘后立即渲染四档：
   `qlmanage -t -s 16/24/48/96 -o /tmp/r<id> svg/<id>.svg`
2. 16px：能否不看名字归入正确分类；24px：比例与负形；
   48px：结构转折是否同一支笔；96px：接缝与细节。
3. 不过关就重画，**不以「能上线」为通过线**。
4. 每 4 枚抽一张联系表复查同类视觉体量。

## 5. 派生产物重建（顺序不可换）

```bash
python3 scripts/build_skill_assets.py
python3 skills/naive-icons/scripts/emit.py <9 ids> -f tsx -o src/
python3 scripts/generate_vue.py
cd vue && npm run assets:copy && cd ..
python3 scripts/build_website.py
python3 scripts/build_skill_assets.py     # catalog.md 最后生成
```

- 绝不运行 `scripts/generate_icons_add.py`。
- `src/index.ts` / `src/iconNames.ts` / `src/types.ts` 由生成器产出，若有差异以其为准。
- 图标总数保持 **731**，因此 `tests/margin.test.ts` 的 `731` 期望**不需要改**；
  但仍要全局扫描所有硬编码的图标数与版本号，确认一致。
- `svg/archery.svg` 不属于本任务，**不碰、不纳入生成参数**。

## 6. 校验清单（全绿才算完成）

```bash
npm run typecheck && npm run build && npm test
cd vue && npm run typecheck && npm run build && npm test && cd ..
python3 scripts/build_skill_assets.py --check
python3 scripts/generate_vue.py --check
```

补充脚本化检查（一次性扫描 `svg/*.svg`）：

- 根节点逐字节比对；
- 颜色白名单（10 色，`design-spec.md` 第 3 节）；
- 禁用特性（gradient / filter / opacity / dasharray / mask / clipPath / pattern / text / defs / style / image）；
- 每枚描边外缘边距 ≥ 3；
- 9 枚 id 无重复、无丢失（总数 731）；
- 文件末尾无换行、`</svg>` 独占末行。

## 7. 预览页

用 `python3 ~/.naive-icons-work/gen_preview.py --base <上一个发布 tag>` 生成
`website/preview-new-icons.html`（单文件自包含、无外链 CSS/JS/字体）。

- 页面按分类分组，显示每组数量与总数；
- 16 / 24 / 48 / 72 四档切换；
- 搜索支持 id / 中文名 / React 组件名，实时显示命中数；
- 点卡片复制 React 引入代码（`navigator.clipboard` + `execCommand` 兜底）；
- 「本次改动」区自动列出相对基准 tag 被重绘的图标（`--base` 决定基准）。

## 8. 附交付图

- 联系表：9 枚 × 48px，按分类分行，标注 id（PIL 合成 PNG）。
- 尺寸对比图：9 枚并排 16 / 24 / 48 / 96 四档（PIL 合成 PNG）。
- 输出到 `website/` 下，文件名含 `redraw-9`，不覆盖既有产物。

## 9. 风险与边界

- **不删除任何文件**；如需清理临时 PNG / 脚本，先列清单等确认。
- 并行会话可能继续改动 `svg/` 与派生物：每次重建前先
  `git status --porcelain -- svg/` 复核，避免把他人改动纳入本批生成参数。
- 不 commit / push / tag / publish；不改版本号。

## 10. 批准点

用户确认本 spec 后，按本文顺序执行；执行中途若发现某枚 16px 无法达标，
先记录并给出替代画法再继续，不擅自改名或换概念。
