import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CashRegisterIcon = defineComponent({
  name: 'CashRegisterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '12', y: '8', width: '20', height: '10', rx: '2', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M9 18 H35 L37 32 H7 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M13 24 H31', stroke: '#FAEDCD', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M14 29 H30', stroke: '#FAEDCD', 'stroke-width': sw(2) }));
      children.push(h('rect', { x: '7', y: '34', width: '32', height: '7', rx: '2', fill: '#E76F51' }));
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

export default CashRegisterIcon;
