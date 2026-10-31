import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const FishIcon = defineComponent({
  name: 'FishIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 24 C 8 14 22 10 30 14 C 38 18 38 30 30 34 C 22 38 8 34 6 24 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M30 24 L42 14 L42 34 Z', fill: '#E76F51' }));
      children.push(h('circle', { cx: '14', cy: '22', r: '2', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '14', cy: '22', r: '1', fill: '#2A2A2A' }));
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

export default FishIcon;
