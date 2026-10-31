import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BellIcon = defineComponent({
  name: 'BellIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 34 C 10 12 38 12 38 34 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M8 34 L40 34', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M20 38 C 20 42 28 42 28 38', fill: '#E76F51' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '24', cy: '29', r: '1.5', fill: '#2A2A2A' }));
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

export default BellIcon;
