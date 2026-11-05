import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FishingIcon = defineComponent({
  name: 'FishingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 40 L34 12', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M34 12 C40 16 40 24 36 28', fill: 'none' }));
      children.push(h('path', { d: 'M36 28 C31 30 31 36 36 36', fill: 'none', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M8 42 H40', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
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

export default FishingIcon;
