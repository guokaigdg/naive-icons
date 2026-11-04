import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TableIcon = defineComponent({
  name: 'TableIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '10', width: '36', height: '28', rx: '4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M6 20 L42 20', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M18 20 L18 38', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('rect', { x: '8.5', y: '12.5', width: '7', height: '5', rx: '1', fill: '#E76F51', stroke: 'none' }));
      children.push(h('rect', { x: '20.5', y: '23', width: '18', height: '4', rx: '1', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '20.5', y: '30', width: '12', height: '4', rx: '1', fill: '#2A9D8F', stroke: 'none' }));
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

export default TableIcon;
