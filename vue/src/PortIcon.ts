import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PortIcon = defineComponent({
  name: 'PortIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 40 V10 H36', fill: 'none', stroke: '#264653', 'stroke-width': sw(4) }));
      children.push(h('path', { d: 'M36 10 V18', 'stroke-width': sw(2) }));
      children.push(h('rect', { x: '30', y: '18', width: '12', height: '8', rx: '1', fill: '#E76F51' }));
      children.push(h('rect', { x: '8', y: '32', width: '12', height: '8', rx: '1', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M6 40 H42', 'stroke-width': sw(3) }));
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

export default PortIcon;
