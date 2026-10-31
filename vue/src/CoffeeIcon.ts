import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoffeeIcon = defineComponent({
  name: 'CoffeeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 22 L10 36 C 10 40 14 42 18 42 L28 42 C 32 42 36 40 36 36 L36 22 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M36 26 C 42 26 42 34 36 34', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M16 10 C 16 14 20 14 20 18', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M22 10 C 22 14 26 14 26 18', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M28 10 C 28 14 32 14 32 18', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
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

export default CoffeeIcon;
