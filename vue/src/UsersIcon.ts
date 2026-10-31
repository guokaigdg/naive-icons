import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const UsersIcon = defineComponent({
  name: 'UsersIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '15', cy: '14', r: '6', fill: '#264653' }));
      children.push(h('path', { d: 'M5 34 C 5 26 9 23 15 23 C 19 23 22 24 24 26 L 24 40 L 8 40 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '29', cy: '18', r: '7.5', fill: '#E76F51' }));
      children.push(h('path', { d: 'M14 42 C 14 33 21 30 29 30 C 37 30 43 33 43 42 Z', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '26.5', cy: '18', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '31.5', cy: '18', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M26 22 Q 29 24.5 32 22', stroke: '#2A2A2A', fill: 'none' }));
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

export default UsersIcon;
