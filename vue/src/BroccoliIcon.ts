import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BroccoliIcon = defineComponent({
  name: 'BroccoliIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 32 L24 41', stroke: '#588157', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M12 23 C12 17 17 15 20 17 C21 11 28 10 31 14 C36 13 38 18 35 23 C38 25 36 30 31 30 C30 34 25 35 22 32 C18 35 12 33 12 28 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M18 22 L17 26 M24 19 L24 24 M30 21 L31 25', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default BroccoliIcon;
