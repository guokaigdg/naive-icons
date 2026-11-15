import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SortAscIcon = defineComponent({
  name: 'SortAscIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 14 L29 14 M9 24 L25 24 M9 34 L21 34', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M35 39 L35 18', stroke: '#2A9D8F', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M28 20 L35 9 L42 20 Z', fill: '#2A9D8F' }));
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

export default SortAscIcon;
