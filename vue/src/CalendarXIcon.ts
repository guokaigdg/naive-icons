import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CalendarXIcon = defineComponent({
  name: 'CalendarXIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '11', width: '32', height: '29', rx: '4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M8 19 L40 19', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('rect', { x: '8', y: '11', width: '32', height: '8', fill: '#E76F51' }));
      children.push(h('path', { d: 'M16 7 L16 15 M32 7 L32 15', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M19 25 L29 34 M29 25 L19 34', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
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

export default CalendarXIcon;
