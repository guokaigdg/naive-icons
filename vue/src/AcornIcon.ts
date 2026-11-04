import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AcornIcon = defineComponent({
  name: 'AcornIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 21 C 31 21 35 26 35 31 C 35 38 30 42 24 42 C 18 42 13 38 13 31 C 13 26 17 21 24 21 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M13 23 C 13 16 18 12 24 12 C 30 12 35 16 35 23 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M24 12 L24 7', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default AcornIcon;
