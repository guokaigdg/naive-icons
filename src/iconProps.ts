import { SVGProps } from 'react';

/** Naive Icons 所有图标的通用 Props（继承原生 SVG 属性） */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** 图标尺寸，宽高相等，默认 24 */
  size?: number | string;
  /** 描边颜色，默认 currentColor */
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
 * 供所有图标组件共享使用。
 */
export function normalizeIconProps(props: IconProps): SVGProps<SVGSVGElement> {
  const { size, color, strokeWidth, ...rest } = props;

  const svgProps: SVGProps<SVGSVGElement> = { ...rest };

  if (size !== undefined && size !== null) {
    svgProps.width = size;
    svgProps.height = size;
  }

  if (color !== undefined && color !== null) {
    svgProps.stroke = color;
  }

  if (strokeWidth !== undefined && strokeWidth !== null) {
    svgProps.strokeWidth = strokeWidth;
  }

  return svgProps;
}
