import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GuitarIcon = defineComponent({
  name: 'GuitarIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M20.5 5.5 H27.5 V20 C 31 21 33 24 33 27.5 C 33 31 36 33 36 36.5 C 36 41 31 42.5 24 42.5 C 17 42.5 12 41 12 36.5 C 12 33 15 31 15 27.5 C 15 24 17 21 20.5 20 Z', fill: '#E9C46A' }));
      children.push(h('rect', { x: '19.5', y: '5', width: '9', height: '4.5', rx: '1.5', fill: '#264653' }));
      children.push(h('path', { d: 'M19 6.5 H16.5 M29 6.5 H31.5', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '32', r: '3.4', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '21', y: '38', width: '6', height: '2.6', fill: '#264653', stroke: 'none' }));
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

export default GuitarIcon;
