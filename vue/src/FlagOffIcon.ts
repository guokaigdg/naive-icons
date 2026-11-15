import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FlagOffIcon = defineComponent({
  name: 'FlagOffIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 7.5 L14 41', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M14 10 C 20.5 6.4 27 13.5 33.5 10 L33.5 22.5 C 27 26 20.5 18.9 14 22.5 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M9.5 38.5 L38.5 9.5', stroke: '#2A2A2A', 'stroke-width': sw(3.4), fill: 'none' }));
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

export default FlagOffIcon;
