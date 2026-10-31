import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const MoonIcon = defineComponent({
  name: 'MoonIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M32 6 C 22 8 14 16 14 26 C 14 36 22 42 32 42 C 24 40 20 32 22 24 C 24 16 28 10 32 6 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '36', cy: '14', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '40', cy: '22', r: '1.5', fill: '#2A2A2A' }));
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

export default MoonIcon;
