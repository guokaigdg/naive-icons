import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShoppingBagIcon = defineComponent({
  name: 'ShoppingBagIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M18 17 C 18 8 30 8 30 17', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M10 16 L 38 16 L 36 42 L 12 42 Z', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '20', cy: '26', r: '1.6', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '28', cy: '26', r: '1.6', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M20 30 Q 24 33 28 30', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(2) }));
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

export default ShoppingBagIcon;
