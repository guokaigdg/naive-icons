import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CafeIcon = defineComponent({
  name: 'CafeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 14 L42 14 L38 24 L10 24 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M10 24 L38 24 L38 38 C38 41 34 42 24 42 C14 42 10 41 10 38 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M20 30 C20 26 28 26 28 30 L28 34 L20 34 Z', fill: '#8B5E3C', stroke: 'none' }));
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

export default CafeIcon;
