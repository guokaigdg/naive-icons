import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BitcoinIcon = defineComponent({
  name: 'BitcoinIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M20 14.5 V33.5 M20 14.5 H26.5 C 30.5 14.5 30.5 23.5 26.5 23.5 H20 M20 23.5 H27.5 C 31.5 23.5 31.5 33.5 27.5 33.5 H20', stroke: '#8B5E3C', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('path', { d: 'M23 10.5 V14.5 M26 10.5 V14.5 M23 33.5 V37.5 M26 33.5 V37.5', stroke: '#8B5E3C', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default BitcoinIcon;
