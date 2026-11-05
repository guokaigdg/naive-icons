import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ThreeDPrinterIcon = defineComponent({
  name: 'ThreeDPrinterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 40 H40', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M14 40 V10 H34 V40', fill: 'none' }));
      children.push(h('path', { d: 'M14 18 H34', 'stroke-width': sw(3) }));
      children.push(h('rect', { x: '20', y: '18', width: '8', height: '7', rx: '1', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 25 V31' }));
      children.push(h('path', { d: 'M16 40 L19 33 H29 L32 40 Z', fill: '#2A9D8F' }));
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

export default ThreeDPrinterIcon;
