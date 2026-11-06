import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const StarfishIcon = defineComponent({
  name: 'StarfishIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 8 C26 8 27 12 28 14 C30 11 34 9 36 11 C38 13 36 17 33 19 C36 20 40 22 39 26 C38 29 34 28 30 27 C30 31 32 36 29 38 C26 39 25 35 24 32 C23 35 21 39 18 38 C15 36 17 31 17 27 C13 28 9 29 8 26 C7 22 11 20 14 19 C11 17 9 13 11 11 C13 9 17 11 19 14 C21 12 22 8 24 8 Z', fill: '#E76F51' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '1.4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '19', cy: '18', r: '1.1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '18', r: '1.1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '30', r: '1.1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '19', cy: '30', r: '1.1', fill: '#FAEDCD', stroke: 'none' }));
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

export default StarfishIcon;
