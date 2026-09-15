import { SVGProps } from 'react';

/** Naive Icons 所有图标的通用 Props（继承原生 SVG 属性） */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** 图标尺寸，宽高相等，默认 24 */
  size?: number | string;
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
 */
export function normalizeIconProps(props: IconProps): SVGProps<SVGSVGElement> {
  const { size = 24, color = "#2A2A2A", strokeWidth = 3.5, fill = "none", ...rest } = props;

  const svgProps: SVGProps<SVGSVGElement> = { ...rest };

  svgProps.width = size;
  svgProps.height = size;
  svgProps.fill = fill;
  svgProps.stroke = color;
  svgProps.strokeWidth = strokeWidth;

  return svgProps;
}
