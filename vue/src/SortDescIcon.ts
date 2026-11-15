import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SortDescIcon = defineComponent({
  name: 'SortDescIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 14 L21 14 M9 24 L25 24 M9 34 L29 34', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M35 9 L35 30', stroke: '#E76F51', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M28 28 L35 39 L42 28 Z', fill: '#E76F51' }));
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

export default SortDescIcon;
