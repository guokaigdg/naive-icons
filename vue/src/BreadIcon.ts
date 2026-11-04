import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BreadIcon = defineComponent({
  name: 'BreadIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 32 C 8 22 15 18 24 18 C 33 18 40 22 40 32 L 40 34 C 40 40 8 40 8 34 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M16 24 C 18 28 16 32 18 36', stroke: '#8B5E3C', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M24 22 C 26 27 24 32 26 38', stroke: '#8B5E3C', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M32 24 C 34 28 32 32 34 36', stroke: '#8B5E3C', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default BreadIcon;
