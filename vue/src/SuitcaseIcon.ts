import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SuitcaseIcon = defineComponent({
  name: 'SuitcaseIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '15', width: '34', height: '27', rx: '3', fill: '#E76F51' }));
      children.push(h('path', { d: 'M17 15 V12 C17 10 19 9 21 9 H27 C29 9 31 10 31 12 V15' }));
      children.push(h('path', { d: 'M14 15 V42 M34 15 V42', stroke: '#FAEDCD', 'stroke-width': sw(2.5) }));
      children.push(h('rect', { x: '20', y: '24', width: '8', height: '6', rx: '1', fill: '#264653', stroke: 'none' }));
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

export default SuitcaseIcon;
