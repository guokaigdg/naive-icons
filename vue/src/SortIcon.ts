import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SortIcon = defineComponent({
  name: 'SortIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M15 40 L15 14', stroke: '#2A9D8F', 'stroke-width': sw(4.5) }));
      children.push(h('path', { d: 'M7 22 L15 12 L23 22 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M33 8 L33 34', stroke: '#E76F51', 'stroke-width': sw(4.5) }));
      children.push(h('path', { d: 'M25 26 L33 36 L41 26 Z', fill: '#E76F51' }));
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

export default SortIcon;
