import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PedestrianCrossingIcon = defineComponent({
  name: 'PedestrianCrossingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 L42 24 L24 42 L6 24 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '24', cy: '15', r: '3', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M24 19 L24 27 M24 22 L19 25 M24 22 L29 25 M24 27 L20 34 M24 27 L28 34', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default PedestrianCrossingIcon;
