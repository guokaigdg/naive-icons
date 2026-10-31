import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UserMinusIcon = defineComponent({
  name: 'UserMinusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '19', cy: '16', r: '8', fill: '#264653' }));
      children.push(h('circle', { cx: '14', cy: '16', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '16', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M16 20 Q 19 22.5 22 20', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M5 42 C 5 33 11 29 19 29 C 26 29 31 31 34 36 L 34 42 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M32 33 L42 33', stroke: '#E76F51', 'stroke-width': sw(4.5), fill: 'none' }));
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

export default UserMinusIcon;
