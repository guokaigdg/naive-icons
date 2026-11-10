import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BananaIcon = defineComponent({
  name: 'BananaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M 11 11 C 8 20 12 31 22 37 C 27 40 33 40.5 36.5 38 C 38.5 36.7 38.3 34 36 33.5 C 27 33.5 18 27 15.5 11.5 C 15 9 12 8.8 11 11 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M 16 13 C 18 22 22 29 27 33 C 29.5 34.8 32 35.2 34.5 34.5', stroke: '#8B5E3C', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M 11 11.5 C 9.5 9 10.5 7 12.5 7.5', stroke: '#8B5E3C', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default BananaIcon;
