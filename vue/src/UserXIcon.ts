import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UserXIcon = defineComponent({
  name: 'UserXIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '19', cy: '15', r: '8', fill: '#E76F51' }));
      children.push(h('path', { d: 'M5 42 C 5 33 11 29 19 29 C 24 29 28 31 31 34 L31 42 Z', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '35', cy: '34', r: '8', fill: '#264653' }));
      children.push(h('path', { d: 'M32 31 L38 37 M38 31 L32 37', stroke: '#FFFFFF', 'stroke-width': sw(2.8), fill: 'none' }));
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

export default UserXIcon;
