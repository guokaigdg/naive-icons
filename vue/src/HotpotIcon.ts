import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HotpotIcon = defineComponent({
  name: 'HotpotIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 20 H41 C41 31 34 39 24 39 C14 39 7 31 7 20 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M7 20 H41', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M13 8 C11 11 14 13 12 16', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M24 7 C22 10 25 12 23 15', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M35 8 C33 11 36 13 34 16', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M5 25 H8', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M40 25 H43', 'stroke-width': sw(3), fill: 'none' }));
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

export default HotpotIcon;
