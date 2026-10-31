import { SVGProps } from 'react';
import { resolveStrokeWidth, safeDimension, scaledStroke } from '../core/iconProps';

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

// 描边归一与缩放的实现在 core/iconProps.ts，React 版与 Vue 版共用同一份，
// 保证 naive-icons 与 naive-icons-vue 对 strokeWidth 的处理不会漂移。
export { resolveStrokeWidth, scaledStroke };

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
