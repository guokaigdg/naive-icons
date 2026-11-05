import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChargingStationIcon = defineComponent({
  name: 'ChargingStationIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '12', y: '8', width: '18', height: '30', rx: '3', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '16', y: '13', width: '10', height: '6', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M24 22 L20 28 H24 L21 34', stroke: '#E9C46A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M30 18 C38 18 38 30 34 32 C31 33.5 30 36 30 38', fill: 'none', 'stroke-width': sw(3) }));
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

export default ChargingStationIcon;
