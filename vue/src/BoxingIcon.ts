import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BoxingIcon = defineComponent({
  name: 'BoxingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 10 C12 11 10 15 11 20 C12 25 16 28 21 28 C27 28 32 25 33 20 C34 15 32 11 28 10 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M12 22 C9 22 8 25 9 27 C10 29 12 30 14 29 C14 26 13 23 12 22 Z', fill: '#E76F51', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M17 28 L28 28 L29 34 C29 36 27 37 25 37 L19 37 C17 37 16 36 16 34 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M17 31 L28 31', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M20 13 C20 18 21 24 22 27', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M26 14 C29 16 30 20 29 24', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default BoxingIcon;
