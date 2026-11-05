import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BatIcon = defineComponent({
  name: 'BatIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 13 L28 27 L24 33 L20 27 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M23 21 C17 12 9 13 6 21 C11 19 14 22 12 27 C17 25 21 28 23 33 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M25 21 C31 12 39 13 42 21 C37 19 34 22 36 27 C31 25 27 28 25 33 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M20 14 L18 9 L23 12 M28 14 L30 9 L25 12', fill: '#264653' }));
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

export default BatIcon;
