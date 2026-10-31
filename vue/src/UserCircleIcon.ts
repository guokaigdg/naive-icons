import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UserCircleIcon = defineComponent({
  name: 'UserCircleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '17', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('circle', { cx: '24', cy: '19', r: '5.5', fill: '#E76F51' }));
      children.push(h('path', { d: 'M12 36 C 12 29 18 26 24 26 C 30 26 36 29 36 36 Z', fill: '#2A9D8F' }));
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

export default UserCircleIcon;
