import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BrainIcon = defineComponent({
  name: 'BrainIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 10 C18 6 11 10 13 17 C7 21 9 30 15 32 C15 38 22 39 24 36 C26 39 33 38 33 32 C39 30 41 21 35 17 C37 10 30 6 24 10 Z', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M24 10 L24 36 M18 17 C22 19 22 23 18 25 M30 17 C26 19 26 23 30 25 M15 29 C19 29 20 32 18 35', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default BrainIcon;
