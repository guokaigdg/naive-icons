import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SatelliteDishIcon = defineComponent({
  name: 'SatelliteDishIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 19 C 8 29 15 37 24 37 C 33 37 40 29 40 19 L34 19 C 34 26 29 30 24 30 C 19 30 14 26 14 19 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M10 21 L23.5 12', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '11', r: '2.8', fill: '#E76F51' }));
      children.push(h('path', { d: 'M29 9.5 C 32 10.5 33.5 13 34 15.5', stroke: '#2A9D8F', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('path', { d: 'M32 5.5 C 36 7 38.5 10.5 39 14.5', stroke: '#2A9D8F', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('path', { d: 'M14 36 L10 42', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('path', { d: 'M7 42 H15', stroke: '#2A2A2A', fill: 'none' }));
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

export default SatelliteDishIcon;
