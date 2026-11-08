import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SteakIcon = defineComponent({
  name: 'SteakIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 20 C10 15 15 12 24 12 C33 12 39 15 39 21 C39 30 33 37 24 37 C15 37 10 30 10 23 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M13 20 C13 17 17 15 24 15 C31 15 36 17 36 21 C36 28 31 34 24 34 C17 34 13 28 13 22', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M18 18 L20 30 M24 17 L26 32 M30 18 L32 29', stroke: '#F4A6A4', 'stroke-width': sw(2), fill: 'none' }));
      const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
      return h(
        'svg',
        {
          viewBox: '0 0 48 48',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          role: props.title ? 'img' : undefined,
          'aria-hidden': labelled ? undefined : true,
          ...normalizeIconProps({ ...props, ...attrs }),
        },
        children,
      );
    };
  },
});

export default SteakIcon;
