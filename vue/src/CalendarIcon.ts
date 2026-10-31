import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CalendarIcon = defineComponent({
  name: 'CalendarIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '12', width: '32', height: '28', rx: '4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M8 20 L40 20', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('rect', { x: '8', y: '12', width: '32', height: '8', fill: '#E76F51' }));
      children.push(h('path', { d: 'M16 8 L16 16', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M32 8 L32 16', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('circle', { cx: '18', cy: '28', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '30', cy: '28', r: '1.5', fill: '#2A2A2A' }));
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

export default CalendarIcon;
