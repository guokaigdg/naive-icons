import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MapPinOffIcon = defineComponent({
  name: 'MapPinOffIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 7 C 16.5 7 11.5 13 11.5 19.5 C 11.5 27 24 36 24 36 C 24 36 36.5 27 36.5 19.5 C 36.5 13 31.5 7 24 7 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '24', cy: '19.5', r: '3', fill: '#FAEDCD' }));
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

export default MapPinOffIcon;
