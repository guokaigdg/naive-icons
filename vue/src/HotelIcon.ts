import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HotelIcon = defineComponent({
  name: 'HotelIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '12', y: '8', width: '24', height: '34', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '16', y: '14', width: '5', height: '6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '27', y: '14', width: '5', height: '6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '16', y: '24', width: '5', height: '6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '27', y: '24', width: '5', height: '6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M20 42 L20 34 L28 34 L28 42', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M8 42 L40 42', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default HotelIcon;
