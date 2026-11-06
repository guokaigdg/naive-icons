import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BaconIcon = defineComponent({
  name: 'BaconIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 15 C12 12 16 18 20 16 C24 14 28 18 32 16 C36 14 39 16 40 18 L40 22 C36 20 32 24 28 22 C24 20 20 24 16 22 C12 20 9 22 8 20 Z', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M8 26 C12 23 16 29 20 27 C24 25 28 29 32 27 C36 25 39 27 40 29 L40 33 C36 31 32 35 28 33 C24 31 20 35 16 33 C12 31 9 33 8 31 Z', fill: '#E76F51' }));
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

export default BaconIcon;
