import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MessageCirclePlusIcon = defineComponent({
  name: 'MessageCirclePlusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 C 34 6 41 13 41 22 C 41 31 34 38 24 38 C 21 38 18 37 16 36 L10 39 L12 32 C 9 29 7 26 7 22 C 7 13 14 6 24 6 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M24 15 V27 M18 21 H30', stroke: '#FAEDCD', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default MessageCirclePlusIcon;
