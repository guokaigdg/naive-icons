import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const AppleIcon = defineComponent({
  name: 'AppleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 14 C 14 12 6 22 10 32 C 12 38 18 42 24 38 C 30 42 36 38 38 32 C 42 22 34 12 24 14 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 14 C 24 8 28 4 32 6', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('path', { d: 'M28 8 C 32 6 36 10 34 12', fill: '#588157' }));
      children.push(h('circle', { cx: '20', cy: '26', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '28', cy: '26', r: '1.5', fill: '#2A2A2A' }));
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

export default AppleIcon;
