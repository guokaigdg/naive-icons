import { defineComponent, h, type VNode } from 'vue';
import { normalizeIconProps, scaledStroke } from './iconProps';
import { iconPropDefs } from './types';

/**
 * naive 根节点属性。201 枚内置组件逐字节一致，这里把它固化成一份常量，
 * 供 createIcon 使用 —— 自建图标不用再手抄这段样板，也就不会抄错。
 */
export const NAIVE_ROOT = {
  viewBox: '0 0 48 48',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
} as const;

/** 自建图标的图形部分：静态节点，或一个接收 sw 的函数 */
export type IconBody =
  | VNode
  | VNode[]
  | ((sw: (designed: number) => number) => VNode | VNode[]);

function toDisplayName(name: string): string {
  const pascal = name.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  // id 本身已经以 icon 结尾（如 my-icon）时不能再补一次，否则会变成 MyIconIcon
  return pascal.endsWith('Icon') ? pascal : `${pascal}Icon`;
}

/**
 * 用 naive 风格造一个图标组件。
 *
 * 根节点、无障碍属性、描边缩放全部与内置 201 枚一致；内层描边宽度用 body
 * 收到的 sw() 换算，这样 `<MyIcon :strokeWidth="7" />` 整体加粗、层次保持。
 *
 * ```ts
 * const MyIcon = createIcon('my-icon', (sw) => [
 *   h('path', { d: 'M12 12 L36 36', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }),
 *   h('path', { d: 'M14 20 L20 26', stroke: '#E76F51', 'stroke-width': sw(2) }),
 * ]);
 * ```
 */
export function createIcon(name: string, body: IconBody) {
  return defineComponent({
    name: toDisplayName(name),
    inheritAttrs: false,
    props: iconPropDefs,
    setup(props, { attrs }) {
      return () => {
        const sw = scaledStroke(props.strokeWidth);
        const shape = typeof body === 'function' ? body(sw) : body;
        const children: VNode[] = [];
        if (props.title) children.push(h('title', null, props.title));
        children.push(...(Array.isArray(shape) ? shape : [shape]));
        const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
        return h(
          'svg',
          {
            viewBox: NAIVE_ROOT.viewBox,
            xmlns: NAIVE_ROOT.xmlns,
            fill: NAIVE_ROOT.fill,
            'stroke-linecap': NAIVE_ROOT['stroke-linecap'],
            'stroke-linejoin': NAIVE_ROOT['stroke-linejoin'],
            role: props.title ? 'img' : undefined,
            'aria-hidden': labelled ? undefined : true,
            ...normalizeIconProps({ ...props, ...attrs }),
          },
          children,
        );
      };
    },
  });
}
