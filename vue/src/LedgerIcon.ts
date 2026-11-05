import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LedgerIcon = defineComponent({
  name: 'LedgerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '6', width: '34', height: '36', rx: '3', fill: '#264653' }));
      children.push(h('path', { d: 'M16 6 L16 42', stroke: '#FAEDCD', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M21 14 L35 14 M21 21 L35 21 M21 28 L32 28 M21 35 L28 35', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M10 12 L13 12 M10 20 L13 20 M10 28 L13 28 M10 36 L13 36', stroke: '#E9C46A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default LedgerIcon;
