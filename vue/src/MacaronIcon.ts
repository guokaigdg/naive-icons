import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MacaronIcon = defineComponent({
  name: 'MacaronIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 24 C 10 17 16 13 24 13 C 32 13 38 17 38 24 Z', fill: '#F4A6A4' }));
      children.push(h('rect', { x: '10.5', y: '23', width: '27', height: '7.5', rx: '3.7', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M10 31.5 C 12 36 17 39 24 39 C 31 39 36 36 38 31.5 Z', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M14 20.5 C 17 18.5 21 17.8 24 17.8', stroke: '#FFFFFF', 'stroke-width': sw(2), fill: 'none' }));
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

export default MacaronIcon;
