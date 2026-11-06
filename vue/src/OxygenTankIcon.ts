import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const OxygenTankIcon = defineComponent({
  name: 'OxygenTankIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '16', y: '12', width: '16', height: '28', rx: '8', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '20', y: '6', width: '8', height: '6', rx: '2', fill: '#264653' }));
      children.push(h('path', { d: 'M22 6 L22 4.5', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M24 9 L28 5', stroke: '#E9C46A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M18 22 L30 22', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default OxygenTankIcon;
