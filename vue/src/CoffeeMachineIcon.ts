import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoffeeMachineIcon = defineComponent({
  name: 'CoffeeMachineIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '6', width: '20', height: '26', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '14', y: '11', width: '12', height: '6', rx: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M18 32 H28', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M15 35 H31 V38 C31 41 28 42 23 42 C18 42 15 40 15 36 Z', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M31 36 C35 36 35 41 31 41', fill: 'none' }));
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

export default CoffeeMachineIcon;
