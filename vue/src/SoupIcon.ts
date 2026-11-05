import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SoupIcon = defineComponent({
  name: 'SoupIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 22 L41 22 C41 33 34 40 24 40 C14 40 7 33 7 22 Z', fill: '#E76F51' }));
      children.push(h('ellipse', { cx: '24', cy: '22', rx: '15', ry: '3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M18 16 C16 13 20 11 18 8 M27 16 C25 13 29 11 27 8', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
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

export default SoupIcon;
