import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SparklesIcon = defineComponent({
  name: 'SparklesIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M18 7 L22 14 L29 18 L22 22 L18 29 L14 22 L7 18 L14 14 Z', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M32 22 L35 27 L40 30 L35 33 L32 38 L29 33 L24 30 L29 27 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M36 5 L38 8 L41 10 L38 12 L36 15 L34 12 L31 10 L34 8 Z', fill: '#F4A6A4', stroke: 'none' }));
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

export default SparklesIcon;
