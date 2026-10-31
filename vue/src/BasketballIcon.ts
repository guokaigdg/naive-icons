import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BasketballIcon = defineComponent({
  name: 'BasketballIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '18', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 6 L24 42', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M6 24 L42 24', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M11 12 C 17 18 17 30 11 36', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M37 12 C 31 18 31 30 37 36', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
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

export default BasketballIcon;
