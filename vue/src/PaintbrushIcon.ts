import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PaintbrushIcon = defineComponent({
  name: 'PaintbrushIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M13 31 L 27 17 L 31 21 L 17 35 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M27 17 L 31 13 L 35 17 L 31 21 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M31 13 C 33 7 39 5 42 7 C 42 12 37 16 35 17 Z', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '11', cy: '40', r: '3', fill: '#2A9D8F' }));
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

export default PaintbrushIcon;
