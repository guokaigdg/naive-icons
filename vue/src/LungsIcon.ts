import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LungsIcon = defineComponent({
  name: 'LungsIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 8 V20' }));
      children.push(h('path', { d: 'M24 20 C20 18 14 22 12 30 C10 38 16 42 21 38 C24 35 24 30 24 26 Z', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M24 20 C28 18 34 22 36 30 C38 38 32 42 27 38 C24 35 24 30 24 26 Z', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M24 12 L20 15 M24 12 L28 15', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default LungsIcon;
