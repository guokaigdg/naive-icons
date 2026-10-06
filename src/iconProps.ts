import { SVGProps } from 'react';

/** Naive Icons 所有图标的通用 Props（继承原生 SVG 属性） */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * 图标尺寸，宽高相等，默认 24。
   * 接受 null（等同 undefined）是为了让 `size={isLarge ? 32 : null}` 这类
   * 条件写法在 TypeScript 下能过编译，运行时也会正确回落到 24。
   */
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

/**
 * 把 size / color 等语义化属性映射为原生 SVG 属性，
 * 供所有图标组件共享使用。始终给 width/height 填默认值 24，
 * 保证不传 size 时 svg 也有明确尺寸。
 *
 * width / height 优先于 size：传了具体的宽或高就以它为准，
 * 没传的另一边回落到 size，这样才能真的实现「只设一边」。
 * 例：size={32} width={64} → 64 × 32
 */
/** 基础描边宽度，所有图标的描边都是相对它设计的。 */
const BASE_STROKE_WIDTH = 3.5;

/**
 * 让 strokeWidth 属性真正作用到整枚图标，而不是只作用到根 <svg>。
 *
 * SVG 的 stroke-width 是可继承属性，但一旦子元素自己带了值就不再继承。
 * 库里有 220 处内层自带 stroke-width（其中 182 处是刻意的粗细层次：细节用 1.5–2、
 * 主体用 3.5、强调用 4–5），所以只改根节点的话，<Icon strokeWidth={7} /> 会变成
 * 「外框 7、内层还是 3.5 与 4」的断裂效果。
 *
 * 这里把 strokeWidth 当作**相对基准值的缩放系数**：
 *   默认 3.5 → scale 1，内层保持设计时的粗细，一根线都不变
 *   传 7     → scale 2，所有描边一起加倍，层次关系保持
 */
export function scaledStroke(strokeWidth?: number | string | null) {
  const base = typeof strokeWidth === 'number' && strokeWidth > 0 ? strokeWidth : BASE_STROKE_WIDTH;
  const scale = base / BASE_STROKE_WIDTH;
  return (designed: number) => designed * scale;
}

export function normalizeIconProps(props: IconProps): SVGProps<SVGSVGElement> {
  const { color = "#2A2A2A", strokeWidth = 3.5, fill = "none", title, ...rest } = props;

  const svgProps: SVGProps<SVGSVGElement> = { ...rest };

  // size 用 ?? 而不是解构默认值：解构默认值只对 undefined 生效，
  // 而 `size={isLarge ? 32 : null}` 这种极自然的写法会传进 null，
  // 结果 svg 上 width/height 属性整个消失，图标按浏览器默认尺寸渲染。
  // 负数同理，浏览器会忽略该属性。0 保留——想用 size={0} 隐藏图标是合理用法。
  const size = rest.size ?? 24;
  const safe = typeof size === 'number' && size < 0 ? 24 : size;

  svgProps.width = rest.width ?? safe;
  svgProps.height = rest.height ?? safe;
  svgProps.fill = fill;
  svgProps.stroke = color;
  svgProps.strokeWidth = strokeWidth;

  return svgProps;
}
