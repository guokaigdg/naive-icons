import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CloudIcon = defineComponent({
  name: 'CloudIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 30 C 8 30 6 22 12 20 C 12 14 20 12 24 16 C 28 10 38 14 36 22 C 42 22 42 30 36 30 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '20', cy: '24', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '28', cy: '24', r: '1.5', fill: '#2A2A2A' }));
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

export default CloudIcon;
