import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrafficConeIcon = defineComponent({
  name: 'TrafficConeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M19 10 L29 10 L34 38 L14 38 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M16 31 L32 31 M19 21 L29 21', stroke: '#FAEDCD', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '8', y: '38', width: '32', height: '4', rx: '2', fill: '#264653' }));
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

export default TrafficConeIcon;
