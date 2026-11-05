import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BookOpenIcon = defineComponent({
  name: 'BookOpenIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 14 C 19 9 12 8 6 10 L6 36 C 12 34 19 35 24 40 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 14 C 29 9 36 8 42 10 L42 36 C 36 34 29 35 24 40 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 14 L24 40', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M11 17 L19 19', stroke: '#8B5E3C', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M11 23 L19 25', stroke: '#8B5E3C', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M29 19 L37 17', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M29 25 L37 23', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
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

export default BookOpenIcon;
