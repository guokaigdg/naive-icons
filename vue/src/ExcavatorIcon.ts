import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ExcavatorIcon = defineComponent({
  name: 'ExcavatorIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '30', width: '28', height: '8', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '10', y: '16', width: '20', height: '14', rx: '3', fill: '#E76F51' }));
      children.push(h('rect', { x: '14', y: '19', width: '10', height: '7', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M30 22 L39 13', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M39 13 L43 27', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M43 27 L38 34 L34 30 L39 26 Z', fill: '#264653' }));
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

export default ExcavatorIcon;
