import { SVGProps } from 'react';

/** Naive Icons 所有图标的通用 Props（继承原生 SVG 属性） */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** 图标尺寸，宽高相等，默认 24。接受 null 以支持 `size={cond ? 32 : null}` 写法 */
  size?: number | string | null;
  /** 描边颜色，默认墨色 #2A2A2A */
  color?: string;
  /** 描边宽度，默认 3.5（相对 48x48 画布） */
  strokeWidth?: number | string;
  /** 填充色，默认 none */
  fill?: string;
  /** 无障碍标题 */
  title?: string;
}

/** 基础描边宽度，所有图标的描边都是相对它设计的。 */
const BASE_STROKE_WIDTH = 3.5;

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
function safeDimension(
  value: number | string | null | undefined,
  fallback: number | string,
): number | string {
  if (value === undefined || value === null) return fallback;
  if (typeof value === 'number') return Number.isFinite(value) && value >= 0 ? value : fallback;
  return value.trim() === '' ? fallback : value;
}

/**
 * 把语义化属性映射为原生 SVG 属性，供所有图标组件共享。
 * width / height 优先于 size，没传的那一边回落到 size（size={32} width={64} → 64 × 32）。
 */
export function normalizeIconProps(props: IconProps): SVGProps<SVGSVGElement> {
  // size / width / height 必须解构掉。size 不是 SVG 属性，留在 rest 里会被
  // {...rest} 带进 svg 的 props 污染下游（SSR 产物实测因此虚增 1.9%）
  const {
    color = "#2A2A2A",
    strokeWidth = 3.5,
    fill = "none",
    title,
    size,
    width,
    height,
    ...rest
  } = props;

  const svgProps: SVGProps<SVGSVGElement> = { ...rest };

  // ?? 而非解构默认值：后者只对 undefined 生效，null 会让尺寸属性整个消失。
  // 三者走同一条归一化路径，否则 width={NaN} 会绕过 size 的校验直接进 DOM。
  const resolved = safeDimension(size, 24);

  svgProps.width = safeDimension(width, resolved);
  svgProps.height = safeDimension(height, resolved);
  svgProps.fill = fill;
  svgProps.stroke = color;
  // 与 scaledStroke 共用同一套归一化，保证根节点与内层永远一致
  svgProps.strokeWidth = resolveStrokeWidth(strokeWidth);

  return svgProps;
}
