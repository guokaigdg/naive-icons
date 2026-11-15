import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PotatoIcon = defineComponent({
  name: 'PotatoIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 27 C 8.5 20 13 15 19 15 C 23 15 27 13 31 14 C 36.5 15.5 39 21 38 27 C 37 34 31 39 24 39 C 16 39 9.5 34 9 27 Z', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '18', cy: '22', r: '1.2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '30', r: '1.2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M14 20 C 16 17.5 19 16 22 15.5', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default PotatoIcon;
