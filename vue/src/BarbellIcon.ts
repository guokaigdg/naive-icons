import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BarbellIcon = defineComponent({
  name: 'BarbellIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 24 H31', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('rect', { x: '10', y: '11', width: '7.5', height: '26', rx: '3.75', fill: '#264653' }));
      children.push(h('rect', { x: '30.5', y: '11', width: '7.5', height: '26', rx: '3.75', fill: '#264653' }));
      children.push(h('rect', { x: '5.5', y: '16', width: '5.5', height: '16', rx: '2.75', fill: '#E76F51' }));
      children.push(h('rect', { x: '37', y: '16', width: '5.5', height: '16', rx: '2.75', fill: '#E76F51' }));
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

export default BarbellIcon;
