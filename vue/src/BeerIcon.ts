import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BeerIcon = defineComponent({
  name: 'BeerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M13 16 L35 16 L33 40 L15 40 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M13 16 C13 10 20 8 24 12 C28 8 35 10 35 16 Z', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M18 22 L18 34 M24 22 L24 34 M30 22 L30 34', stroke: '#FFFFFF', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '21', cy: '27', r: '1.5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '27', cy: '30', r: '1.5', fill: '#E76F51', stroke: 'none' }));
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

export default BeerIcon;
