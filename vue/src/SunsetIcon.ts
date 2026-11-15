import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SunsetIcon = defineComponent({
  name: 'SunsetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 12.5 L24 6.8', stroke: '#2A2A2A', 'stroke-width': sw(2.8) }));
      children.push(h('path', { d: 'M11.4 19.6 L7.4 15.6', stroke: '#2A2A2A', 'stroke-width': sw(2.8) }));
      children.push(h('path', { d: 'M36.6 19.6 L40.6 15.6', stroke: '#2A2A2A', 'stroke-width': sw(2.8) }));
      children.push(h('circle', { cx: '24', cy: '29', r: '9.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M6 36.5 Q 11 33 16 36.5 T 26 36.5 T 36 36.5 T 42 36.5 L 42 41 L 6 41 Z', fill: '#2A9D8F' }));
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

export default SunsetIcon;
