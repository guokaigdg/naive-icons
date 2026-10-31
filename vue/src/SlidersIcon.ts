import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SlidersIcon = defineComponent({
  name: 'SlidersIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('line', { x1: '6', y1: '15', x2: '42', y2: '15', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('line', { x1: '6', y1: '24', x2: '42', y2: '24', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('line', { x1: '6', y1: '33', x2: '42', y2: '33', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('circle', { cx: '16', cy: '15', r: '4.6', fill: '#E76F51' }));
      children.push(h('circle', { cx: '32', cy: '24', r: '4.6', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '20', cy: '33', r: '4.6', fill: '#E9C46A' }));
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

export default SlidersIcon;
