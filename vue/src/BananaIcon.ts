import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BananaIcon = defineComponent({
  name: 'BananaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 12 C 8 24 14 36 26 40 C 34 42 40 38 40 34 C 32 38 18 32 16 14 C 16 10 14 9 12 12 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M12 12 L15 8', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M40 34 L42 36', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
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

export default BananaIcon;
