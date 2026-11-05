import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BusStopIcon = defineComponent({
  name: 'BusStopIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 42 V16', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '6', y: '6', width: '36', height: '16', rx: '3', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '12', y: '10', width: '12', height: '8', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '15', cy: '19', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '21', cy: '19', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M28 11 H37 M28 17 H37', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default BusStopIcon;
