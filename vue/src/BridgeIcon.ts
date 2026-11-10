import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BridgeIcon = defineComponent({
  name: 'BridgeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M 4.8 21 C 14 17 34 17 43.2 21 L 43.2 36 L 33 36 A 9 9 0 0 0 15 36 L 4.8 36 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M 4.8 16 C 14 12 34 12 43.2 16', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M 12 14.2 L 12 18.8 M 24 12.5 L 24 17.6 M 36 14.2 L 36 18.8', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M 6 40 C 9.5 38 13 42 16.5 40', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M 26 40 C 29.5 38 33 42 36.5 40', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
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

export default BridgeIcon;
