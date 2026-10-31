import type { DefineComponent, PropType } from 'vue';
import type { IconBaseProps } from './iconProps';

/** Vue 版的图标 Props */
export type IconProps = IconBaseProps;

/**
 * 所有图标共用的运行时 props 定义。
 *
 * 放在共享模块里，每枚图标只写 `props: iconPropDefs`，避免把同一段声明
 * 重复进 201 个文件——实测这一项就占掉每枚图标约 100 B。
 */
export const iconPropDefs = {
  size: { type: [Number, String] as PropType<number | string>, default: undefined },
  color: { type: String as PropType<string>, default: undefined },
  strokeWidth: { type: [Number, String] as PropType<number | string>, default: undefined },
  fill: { type: String as PropType<string>, default: undefined },
  title: { type: String as PropType<string>, default: undefined },
};

/** 图标组件类型 */
export type IconComponent = DefineComponent<typeof iconPropDefs>;

/** naive 风格调色板 */
export const NAIVE_PALETTE = {
  ink: '#2A2A2A',
  navy: '#264653',
  orange: '#E76F51',
  yellow: '#E9C46A',
  pink: '#F4A6A4',
  green: '#588157',
  teal: '#2A9D8F',
  brown: '#8B5E3C',
  cream: '#FAEDCD',
  white: '#FFFFFF',
} as const;

export type PaletteColor = keyof typeof NAIVE_PALETTE;
