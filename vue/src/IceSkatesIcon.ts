import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const IceSkatesIcon = defineComponent({
  name: 'IceSkatesIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M13 9 H23 V22 C 30 22 34 26 34 31 V35 H13 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M16 13 H20 M16 17 H20', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M7 40 H35', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M7 40 C 6 38 7 36.5 9 36.5', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M15 35 V40 M30 35 V40', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default IceSkatesIcon;
