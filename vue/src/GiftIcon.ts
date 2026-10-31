import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GiftIcon = defineComponent({
  name: 'GiftIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '20', width: '32', height: '22', fill: '#E76F51' }));
      children.push(h('rect', { x: '8', y: '14', width: '32', height: '8', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M24 14 L24 42', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M18 14 C 12 10 16 4 22 8 C 24 10 24 14 24 14 Z', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M30 14 C 36 10 32 4 26 8 C 24 10 24 14 24 14 Z', fill: '#F4A6A4' }));
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

export default GiftIcon;
