import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BookIcon = defineComponent({
  name: 'BookIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 10 L8 38 C 14 36 20 36 24 38 L24 10 C 20 8 14 8 8 10 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M24 10 L24 38 C 28 36 34 36 40 38 L40 10 C 34 8 28 8 24 10 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M24 10 L24 38', stroke: '#2A2A2A' }));
      children.push(h('circle', { cx: '16', cy: '20', r: '1.3', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '32', cy: '20', r: '1.3', fill: '#FFFFFF' }));
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

export default BookIcon;
