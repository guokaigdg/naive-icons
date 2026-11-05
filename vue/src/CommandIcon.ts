import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CommandIcon = defineComponent({
  name: 'CommandIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 17 H31 V31 H17 Z' }));
      children.push(h('circle', { cx: '13.5', cy: '13.5', r: '3.5' }));
      children.push(h('circle', { cx: '34.5', cy: '13.5', r: '3.5' }));
      children.push(h('circle', { cx: '13.5', cy: '34.5', r: '3.5' }));
      children.push(h('circle', { cx: '34.5', cy: '34.5', r: '3.5' }));
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

export default CommandIcon;
