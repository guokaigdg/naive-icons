import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RazorIcon = defineComponent({
  name: 'RazorIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 6 H38 C 40 6 41 8 41 10 C 41 12 40 14 38 14 H10 C 8 14 7 12 7 10 C 7 8 8 6 10 6 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M10.5 14.5 H37.5', stroke: '#FAEDCD', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M24 14.5 V19.5', 'stroke-width': sw(3.2), fill: 'none' }));
      children.push(h('rect', { x: '19', y: '18.5', width: '10', height: '24.5', rx: '5', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M20.5 27 H27.5', stroke: '#FAEDCD', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default RazorIcon;
