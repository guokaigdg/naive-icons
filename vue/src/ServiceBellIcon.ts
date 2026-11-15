import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ServiceBellIcon = defineComponent({
  name: 'ServiceBellIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '34.5', width: '34', height: '5.5', rx: '2.75', fill: '#264653' }));
      children.push(h('path', { d: 'M10 34.5 C 11 24 13 15.5 24 15.5 C 35 15.5 37 24 38 34.5 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '24', cy: '12', r: '3.2', fill: '#E76F51' }));
      children.push(h('path', { d: 'M15.5 29 C 15.5 23.5 18.5 20 22 19', stroke: '#FFFFFF', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default ServiceBellIcon;
