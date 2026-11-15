import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SpaceShuttleIcon = defineComponent({
  name: 'SpaceShuttleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 5.5 C 26.5 9 27.5 13.5 27.5 19 V36 H20.5 V19 C 20.5 13.5 21.5 9 24 5.5 Z', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M21.5 11 C 22.3 7.5 23.2 5.8 24 5.5 C 24.8 5.8 25.7 7.5 26.5 11 Z', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M20.5 25 L10 37 L20.5 35 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M27.5 25 L38 37 L27.5 35 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 21 V32', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '18', r: '1.6', fill: '#2A9D8F', stroke: 'none' }));
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

export default SpaceShuttleIcon;
