import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrafficLightIcon = defineComponent({
  name: 'TrafficLightIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '14', y: '6', width: '20', height: '34', rx: '6', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '14', r: '5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '23', r: '5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '32', r: '5', fill: '#588157', stroke: 'none' }));
      children.push(h('path', { d: 'M24 40 L24 42', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default TrafficLightIcon;
