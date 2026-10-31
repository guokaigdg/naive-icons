import { resolveStrokeWidth, safeDimension, scaledStroke } from '../../core/iconProps';

/**
 * Vue 版的图标 Props。
 *
 * 与 React 版（src/types.ts 的 IconProps）一一对应，只是没有 SVGProps 那个基类：
 * Vue 的透传靠 attrs，不靠类型继承。
 */
export interface IconBaseProps {
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
  /** 其余原生 SVG 属性（class / style / id / aria-* / data-*）原样透传 */
  [key: string]: unknown;
}

/**
 * 把语义化属性映射为原生 SVG 属性，供所有图标组件共享。
 *
 * 与 React 版唯一的差别是属性名：Vue 的 h() 直接 setAttribute，属性名保持
 * kebab-case 即可（stroke-width），不需要像 JSX 那样转成 camelCase。
 *
 * width / height 优先于 size，没传的那一边回落到 size（size={32} width={64} → 64 × 32）。
 */
export function normalizeIconProps(props: IconBaseProps): Record<string, unknown> {
  // size / width / height 必须解构掉。size 不是 SVG 属性，留在 rest 里会被
  // {...rest} 带进 svg 污染下游。
  const {
    color = '#2A2A2A',
    strokeWidth = 3.5,
    fill = 'none',
    title,
    size,
    width,
    height,
    ...rest
  } = props;

  const resolved = safeDimension(size, 24);
  const out: Record<string, unknown> = { ...rest };

  out.width = safeDimension(width as number | string | null | undefined, resolved);
  out.height = safeDimension(height as number | string | null | undefined, resolved);
  out.fill = fill;
  out.stroke = color;
  // 与 scaledStroke 共用同一套归一化，保证根节点与内层永远一致
  out['stroke-width'] = resolveStrokeWidth(strokeWidth);

  return out;
}

// 描边归一与缩放的实现在 core/iconProps.ts，与 React 版共用同一份，
// 保证 naive-icons 与 naive-icons-vue 对 strokeWidth 的处理不会漂移。
export { resolveStrokeWidth, scaledStroke };
