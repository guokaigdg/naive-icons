import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LockOpenIcon = defineComponent({
  name: 'LockOpenIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 21 L 16 15 C 16 7 32 7 32 15 L 32 16', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(4) }));
      children.push(h('rect', { x: '10', y: '21', width: '28', height: '19', rx: '3', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '24', cy: '29', r: '3', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M24 29 L 21.5 35 L 26.5 35 Z', fill: '#2A2A2A' }));
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

export default LockOpenIcon;
