import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StarEyesIcon = defineComponent({
  name: 'StarEyesIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M18 15.5 L19.4 19.1 L23 20.5 L19.4 21.9 L18 25.5 L16.6 21.9 L13 20.5 L16.6 19.1 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M30 15.5 L31.4 19.1 L35 20.5 L31.4 21.9 L30 25.5 L28.6 21.9 L25 20.5 L28.6 19.1 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M17 31 C 20 35 28 35 31 31', stroke: '#2A2A2A', 'stroke-width': sw(2.6), fill: 'none' }));
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

export default StarEyesIcon;
