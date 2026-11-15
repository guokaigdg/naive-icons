import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HelmetIcon = defineComponent({
  name: 'HelmetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 33 C 10 19 16 11 24 11 C 32 11 38 19 38 33 L38 35 H10 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M17 19 L16 26 M24 17 V26 M31 19 L32 26', stroke: '#FAEDCD', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M14 35 C 14 39.5 18 41 24 41 C 30 41 34 39.5 34 35', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default HelmetIcon;
