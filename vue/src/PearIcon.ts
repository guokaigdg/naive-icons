import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PearIcon = defineComponent({
  name: 'PearIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 9 C27 9 29 12 28 16 C27 20 33 24 33 31 C33 37 29 41 24 41 C19 41 15 37 15 31 C15 24 21 20 20 16 C19 12 21 9 24 9 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 9 L24 5.5', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M25 8 C28 5 33 5 34 7 C32 11 27 11 25 8 Z', fill: '#588157', stroke: 'none' }));
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

export default PearIcon;
