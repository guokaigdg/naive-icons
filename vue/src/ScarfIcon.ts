import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScarfIcon = defineComponent({
  name: 'ScarfIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '14.5', y: '12', width: '9.5', height: '21', rx: '2', fill: '#E76F51' }));
      children.push(h('rect', { x: '25', y: '12', width: '9.5', height: '27', rx: '2', fill: '#E76F51' }));
      children.push(h('path', { d: 'M9 8 C 9 4.5 39 4.5 39 8 V10.5 C 39 14 9 14 9 10.5 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M16 25 H23 M27 31 H34', stroke: '#FAEDCD', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('path', { d: 'M17 33 V36.5 M21 33 V36.5 M27.5 39 V42.5 M31.5 39 V42.5', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default ScarfIcon;
