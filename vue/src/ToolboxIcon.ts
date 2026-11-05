import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ToolboxIcon = defineComponent({
  name: 'ToolboxIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '20', width: '36', height: '20', rx: '3', fill: '#E76F51' }));
      children.push(h('rect', { x: '6', y: '16', width: '36', height: '6', rx: '2', fill: '#264653' }));
      children.push(h('path', { d: 'M17 16 C 17 10 31 10 31 16', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '21', y: '22', width: '6', height: '5', rx: '1', fill: '#E9C46A', stroke: 'none' }));
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

export default ToolboxIcon;
