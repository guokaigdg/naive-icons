import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AlertTriangleIcon = defineComponent({
  name: 'AlertTriangleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 7 L43 40 L5 40 Z', fill: '#E9C46A', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('path', { d: 'M24 18 L24 30', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(4) }));
      children.push(h('circle', { cx: '24', cy: '35', r: '2.2', fill: '#2A2A2A' }));
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

export default AlertTriangleIcon;
