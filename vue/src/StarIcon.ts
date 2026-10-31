import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const StarIcon = defineComponent({
  name: 'StarIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 L29 18 L42 19 L32 28 L35 41 L24 34 L13 41 L16 28 L6 19 L19 18 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '20', cy: '22', r: '1.3', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '28', cy: '22', r: '1.3', fill: '#2A2A2A' }));
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

export default StarIcon;
