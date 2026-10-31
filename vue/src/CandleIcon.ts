import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CandleIcon = defineComponent({
  name: 'CandleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '18.24', y: '18.24', width: '11.52', height: '21.12', rx: '1.92', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 5.76 C 21.12 9.6 21.12 12.96 24 13.92 C 26.88 12.96 26.88 9.6 24 5.76 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 9.12 C 22.85 11.04 22.85 12.48 24 12.86 C 25.15 12.48 25.15 11.04 24 9.12 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 13.92 L 24 18.24', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('rect', { x: '13.44', y: '39.36', width: '21.12', height: '3.84', rx: '1.92', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M18.24 22.08 C 19.2 24 20.16 24 20.16 22.08', stroke: '#F4A6A4', 'stroke-width': sw(1.5), fill: 'none' }));
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

export default CandleIcon;
