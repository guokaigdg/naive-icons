import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BellOffIcon = defineComponent({
  name: 'BellOffIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M11 32 C 11 14 37 14 37 32 Z', fill: '#FAEDCD', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('path', { d: 'M9 32 L39 32', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M20 36 C 20 40 28 40 28 36', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M10 39 L38 11', stroke: '#E76F51', 'stroke-width': sw(4.5) }));
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

export default BellOffIcon;
