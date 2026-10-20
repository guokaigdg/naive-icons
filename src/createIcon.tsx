import { forwardRef, type ReactNode } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

/**
 * naive 根节点属性。178 枚内置组件逐字节一致，这里把它固化成一份常量，
 * 供 createIcon 使用 —— 自建图标不用再手抄这段样板，也就不会抄错。
 */
export const NAIVE_ROOT = {
  viewBox: '0 0 48 48',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

/** 自建图标的图形部分：静态节点，或一个接收 sw 的函数 */
export type IconBody =
  | ReactNode
  | ((sw: (designed: number) => number) => ReactNode);

function toDisplayName(name: string): string {
  const pascal = name.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  // id 本身已经以 icon 结尾（如 my-icon）时不能再补一次，否则会变成 MyIconIcon
  return pascal.endsWith('Icon') ? pascal : `${pascal}Icon`;
}

/**
 * 用 naive 风格造一个图标组件。
 *
 * 根节点、无障碍属性、描边缩放全部与内置 178 枚一致；内层描边宽度用 body
 * 收到的 sw() 换算，这样 `<MyIcon strokeWidth={7} />` 整体加粗、层次保持。
 *
 * ```tsx
 * const MyIcon = createIcon('my-icon', (sw) => (
 *   <>
 *     <path d="M12 12 L36 36" stroke="#2A2A2A" strokeWidth={sw(3.5)} />
 *     <path d="M14 20 L20 26" stroke="#E76F51" strokeWidth={sw(2)} />
 *   </>
 * ));
 * ```
 */
export function createIcon(name: string, body: IconBody) {
  const Component = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const labelled = Boolean(props.title || props['aria-label'] || props.role);
    const sw = scaledStroke(props.strokeWidth);
    return (
      <svg
        ref={ref}
        viewBox={NAIVE_ROOT.viewBox}
        xmlns={NAIVE_ROOT.xmlns}
        fill={NAIVE_ROOT.fill}
        strokeLinecap={NAIVE_ROOT.strokeLinecap}
        strokeLinejoin={NAIVE_ROOT.strokeLinejoin}
        role={props.title ? 'img' : undefined}
        aria-hidden={labelled ? undefined : true}
        {...normalizeIconProps(props)}
      >
        {props.title ? <title>{props.title}</title> : null}
        {typeof body === 'function' ? body(sw) : body}
      </svg>
    );
  });
  Component.displayName = toDisplayName(name);
  return Component;
}
