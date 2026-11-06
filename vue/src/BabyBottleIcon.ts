import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BabyBottleIcon = defineComponent({
  name: 'BabyBottleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M19 14 L29 14 L29 17 C32 19 33 22 33 26 L33 38 C33 40 31 41 29 41 L19 41 C17 41 15 40 15 38 L15 26 C15 22 16 19 19 17 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M21 14 L21 9 C21 7 22 6 24 6 C26 6 27 7 27 9 L27 14 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M15 28 L33 28', stroke: '#2A9D8F', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M17 35 L31 35', stroke: '#2A9D8F', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '21', r: '1.4', fill: '#2A2A2A', stroke: 'none' }));
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

export default BabyBottleIcon;
