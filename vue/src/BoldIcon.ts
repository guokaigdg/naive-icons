import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BoldIcon = defineComponent({
  name: 'BoldIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M19 13 L25.5 13 C 29.5 14 29.5 21 25.5 22 L19 22 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M16 10 L16 38', stroke: '#2A2A2A', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M16 10 L26 10 C 32 10 32 24 26 24 L16 24', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M16 24 L28 24 C 34 24 34 38 28 38 L16 38', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
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

export default BoldIcon;
