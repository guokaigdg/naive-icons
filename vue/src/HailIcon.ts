import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const HailIcon = defineComponent({
  name: 'HailIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 24 C6 24 5 18 9 16 C9 10 18 8 21 12 C24 7 33 9 33 15 C38 15 39 20 36 23 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '14', cy: '31', r: '2.5', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '35', r: '2.5', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '34', cy: '31', r: '2.5', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '41', r: '2.5', fill: '#2A9D8F', stroke: 'none' }));
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

export default HailIcon;
