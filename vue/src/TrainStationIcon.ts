import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrainStationIcon = defineComponent({
  name: 'TrainStationIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '18', width: '32', height: '22', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M6 18 L24 8 L42 18 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 24 V21 M24 24 H27', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('rect', { x: '18', y: '31', width: '12', height: '9', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M8 40 H40', 'stroke-width': sw(3) }));
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

export default TrainStationIcon;
