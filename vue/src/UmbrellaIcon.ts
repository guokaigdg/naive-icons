import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UmbrellaIcon = defineComponent({
  name: 'UmbrellaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 24 C 6 12 42 12 42 24 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M6 24 L42 24', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M24 24 L24 40', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M24 40 C 24 44 28 44 28 40', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M16 24 L16 20', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M32 24 L32 20', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
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

export default UmbrellaIcon;
