import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NoodleIcon = defineComponent({
  name: 'NoodleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 24 L40 24 C40 34 34 40 24 40 C14 40 8 34 8 24 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M20 20 C18 16 22 14 20 10 M28 20 C26 16 30 14 28 10', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M30 20 L42 6 M25 20 L37 6', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
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

export default NoodleIcon;
