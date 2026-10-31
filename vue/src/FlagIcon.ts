import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FlagIcon = defineComponent({
  name: 'FlagIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M13.28 7.03 L 13.28 40.97', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('path', { d: 'M13.28 9.71 C 19.53 6.14 25.79 13.28 32.04 9.71 L 32.04 22.21 C 25.79 25.79 19.53 18.64 13.28 22.21 Z', fill: '#E76F51' }));
      children.push(h('circle', { cx: '13.28', cy: '7.03', r: '2.23', fill: '#E9C46A' }));
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

export default FlagIcon;
