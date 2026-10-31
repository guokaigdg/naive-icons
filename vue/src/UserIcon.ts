import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const UserIcon = defineComponent({
  name: 'UserIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '16', r: '8.5', fill: '#E76F51' }));
      children.push(h('path', { d: 'M7 43 C 7 33 14 29 24 29 C 34 29 41 33 41 43', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '21', cy: '16', r: '1.6', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '27', cy: '16', r: '1.6', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M20.5 20 Q 24 23 27.5 20', stroke: '#2A2A2A', fill: 'none' }));
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

export default UserIcon;
