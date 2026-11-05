import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const WarehouseIcon = defineComponent({
  name: 'WarehouseIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 20 L24 8 L42 20', fill: '#E76F51' }));
      children.push(h('rect', { x: '6', y: '20', width: '36', height: '22', fill: '#E9C46A' }));
      children.push(h('rect', { x: '18', y: '30', width: '12', height: '12', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '10', y: '24', width: '5', height: '5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '33', y: '24', width: '5', height: '5', fill: '#FAEDCD', stroke: 'none' }));
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

export default WarehouseIcon;
