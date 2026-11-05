import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FenceIcon = defineComponent({
  name: 'FenceIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 40 V20 L12 14 L16 20 V40 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M20 40 V20 L24 14 L28 20 V40 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M32 40 V20 L36 14 L40 20 V40 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M6 26 H42', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M6 34 H42', 'stroke-width': sw(3) }));
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

export default FenceIcon;
