import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HotAirBalloonIcon = defineComponent({
  name: 'HotAirBalloonIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 5 C 13 5 9 13 10 20 C 11 27 17.5 30.5 20 34 H28 C 30.5 30.5 37 27 38 20 C 39 13 35 5 24 5 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M20.5 5.5 C 18.5 13 18.5 27 21.5 34 H26.5 C 29.5 27 29.5 13 27.5 5.5 Z', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M20.5 34 L20.5 38 M27.5 34 L27.5 38', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('rect', { x: '20', y: '38', width: '8', height: '4.5', rx: '1', fill: '#8B5E3C' }));
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

export default HotAirBalloonIcon;
