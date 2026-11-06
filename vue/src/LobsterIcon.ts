import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LobsterIcon = defineComponent({
  name: 'LobsterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 18 C12 17 7 15 6 11 C5 8 8 6 11 9 C14 12 16 15 17 18 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M31 18 C36 17 41 15 42 11 C43 8 40 6 37 9 C34 12 32 15 31 18 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M18 20 C16 24 16 30 18 35 L20 40 L28 40 L30 35 C32 30 32 24 30 20 C28 17 20 17 18 20 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M18 26 L30 26 M18 33 L30 33', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M22 40 L18 43 L24 42 L30 43 L26 40', fill: '#E76F51', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M20 8 L18 14 M24 7 L24 13 M28 8 L30 14', stroke: '#264653', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '21', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
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

export default LobsterIcon;
