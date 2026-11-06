import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CargoShipIcon = defineComponent({
  name: 'CargoShipIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 30 L42 30 L37 40 L11 40 Z', fill: '#264653' }));
      children.push(h('rect', { x: '11', y: '20', width: '8', height: '8', fill: '#E76F51' }));
      children.push(h('rect', { x: '21', y: '20', width: '8', height: '8', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '31', y: '22', width: '7', height: '6', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M9 30 L39 30', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default CargoShipIcon;
