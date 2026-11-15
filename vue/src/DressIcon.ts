import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DressIcon = defineComponent({
  name: 'DressIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 6.5 H31 L32.5 22 L38.5 40 H9.5 L15.5 22 Z', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M17 6.5 L24 11 L31 6.5', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('path', { d: 'M15.5 22 H32.5', stroke: '#E9C46A', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default DressIcon;
