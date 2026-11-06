import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CupcakeIcon = defineComponent({
  name: 'CupcakeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 24 L18 40 L30 40 L34 24 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M13 24 C13 16 18 12 24 12 C30 12 35 16 35 24 C31 20 29 22 24 21 C19 22 17 20 13 24 Z', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '24', cy: '9', r: '3', fill: '#E76F51', stroke: 'none' }));
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

export default CupcakeIcon;
