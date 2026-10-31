import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PrinterIcon = defineComponent({
  name: 'PrinterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 6 L31 6 L31 15 L17 15 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M6 18 C 6 14.5 8.5 12 12 12 L36 12 C 39.5 12 42 14.5 42 18 L42 32 L6 32 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M17 27 L31 27 L31 42 L17 42 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M9 22 L14 22', stroke: '#FAEDCD', 'stroke-width': sw(2.5) }));
      children.push(h('circle', { cx: '36', cy: '22', r: '1.6', fill: '#E76F51', stroke: 'none' }));
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

export default PrinterIcon;
