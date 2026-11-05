import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RiceIcon = defineComponent({
  name: 'RiceIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 24 L40 24 C40 34 34 40 24 40 C14 40 8 34 8 24 Z', fill: '#2A9D8F' }));
      children.push(h('ellipse', { cx: '24', cy: '24', rx: '16', ry: '4', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('path', { d: 'M20 17 C18 14 22 12 20 9 M28 17 C26 14 30 12 28 9', stroke: '#FAEDCD', 'stroke-width': sw(3), fill: 'none' }));
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

export default RiceIcon;
