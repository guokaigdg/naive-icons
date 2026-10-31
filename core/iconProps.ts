/**
 * 框架无关的图标核心逻辑。
 *
 * React 版（src/iconProps.ts）与 Vue 版（vue/src/iconProps.ts）都从这里取，
 * 保证两套包对 size / color / strokeWidth 的处理逐字节一致 —— 尤其是
 * scaledStroke 的描边缩放规则，它有 220 处内层自带 stroke-width 需要跟着整体缩放，
 * 两边各写一份迟早会漂移。
 *
 * 这里不出现任何框架类型，也不出现 SVG 属性名：属性名映射（strokeWidth ↔ stroke-width）
 * 由各框架自己那层负责。
 */

/** 基础描边宽度，所有图标的描边都是相对它设计的。 */
export const BASE_STROKE_WIDTH = 3.5;

/**
 * 把 strokeWidth 归一成合法数值。字符串要能缩放（"7" 与 7 等价），
 * 非法值（'abc' / NaN / Infinity / 负数）回落基准。0 合法，表示不描边。
 */
export function resolveStrokeWidth(strokeWidth?: number | string | null): number {
  // Number('') 是 0 而非 NaN，空串必须单独挡掉，否则会静默变成「不描边」
  const raw = typeof strokeWidth === 'string' ? strokeWidth.trim() : strokeWidth;
  const n = typeof raw === 'string' ? Number(raw || NaN) : raw;
  return typeof n === 'number' && Number.isFinite(n) && n >= 0 ? n : BASE_STROKE_WIDTH;
}

/**
 * 把 strokeWidth 当作相对 BASE_STROKE_WIDTH 的缩放系数，返回内层描边的计算函数。
 *
 * 必须这样而不能只改根 <svg>：SVG 的 stroke-width 可继承，但子元素一旦自带值
 * 就不再继承。库里有 220 处内层自带 stroke-width，其中 182 处是刻意的粗细层次，
 * 只改根节点会让 <Icon strokeWidth={7} /> 变成「外框 7、内层还是 3.5 与 4」。
 *
 * 默认 3.5 → scale 1，设计值一根线都不变；传 7 → scale 2，整体加倍且层次保持。
 */
export function scaledStroke(strokeWidth?: number | string | null) {
  const scale = resolveStrokeWidth(strokeWidth) / BASE_STROKE_WIDTH;
  // 不取整会输出 11.428571428571429 这种 17 位浮点
  return (designed: number) => Math.round(designed * scale * 100) / 100;
}

/**
 * 尺寸归一：NaN / Infinity / 负数一律回落 fallback，非有限值不该进 DOM
 * （React 会报 Received NaN，浏览器也会直接忽略该属性）。
 * 空串与纯空白同样回落——它们不是合法尺寸值，与 resolveStrokeWidth 的处理保持一致。
 * 0 保留——用 size={0} 或 width={0} 隐藏图标是合理用法。合法字符串原样透传。
 */
export function safeDimension(
  value: number | string | null | undefined,
  fallback: number | string,
): number | string {
  if (value === undefined || value === null) return fallback;
  if (typeof value === 'number') return Number.isFinite(value) && value >= 0 ? value : fallback;
  return value.trim() === '' ? fallback : value;
}
