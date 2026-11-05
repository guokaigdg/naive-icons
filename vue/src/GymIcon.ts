import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GymIcon = defineComponent({
  name: 'GymIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '9', y: '16', width: '30', height: '24', rx: '2', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M18 24 L18 32 M30 24 L30 32 M18 28 L30 28', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '14', y: '25', width: '4', height: '6', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '30', y: '25', width: '4', height: '6', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M7 40 L41 40', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default GymIcon;
