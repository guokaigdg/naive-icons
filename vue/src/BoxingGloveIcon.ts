import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BoxingGloveIcon = defineComponent({
  name: 'BoxingGloveIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 10 C10 10 8 14 9 18 L12 30 C13 34 16 37 20 37 L28 37 C34 37 38 34 38 28 L38 20 C38 12 32 8 26 8 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M12 19 C8 21 8 27 12 29 C15 30 17 27 16 24 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M17 37 L31 37', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default BoxingGloveIcon;
