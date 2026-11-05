import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FanIcon = defineComponent({
  name: 'FanIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '20', r: '13', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 20 C21 15 24 8.5 27.5 8 C31 12 29 17 24 20 Z', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('path', { d: 'M24 20 C21 15 24 8.5 27.5 8 C31 12 29 17 24 20 Z', fill: '#2A9D8F', stroke: 'none', transform: 'rotate(120 24 20)' }));
      children.push(h('path', { d: 'M24 20 C21 15 24 8.5 27.5 8 C31 12 29 17 24 20 Z', fill: '#2A9D8F', stroke: 'none', transform: 'rotate(240 24 20)' }));
      children.push(h('circle', { cx: '24', cy: '20', r: '2.6', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M24 33 L24 41 M18 41 L30 41', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default FanIcon;
