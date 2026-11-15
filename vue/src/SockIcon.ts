import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SockIcon = defineComponent({
  name: 'SockIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M18 8 H30 V25 C 30 29 32 31 36 33 C 40 35 40 41 35 42 C 28 43 22 39 19.5 33 C 18.5 30 18 27 18 24 Z', fill: '#F4A6A4' }));
      children.push(h('rect', { x: '15.5', y: '5', width: '17', height: '8', rx: '2.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M15.5 9.5 H32.5', 'stroke-width': sw(2), fill: 'none' }));
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

export default SockIcon;
