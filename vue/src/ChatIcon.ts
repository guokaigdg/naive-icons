import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const ChatIcon = defineComponent({
  name: 'ChatIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 10 L40 10 L40 32 L26 32 L20 40 L20 32 L8 32 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '16', cy: '21', r: '1.8', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '24', cy: '21', r: '1.8', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '32', cy: '21', r: '1.8', fill: '#2A2A2A' }));
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

export default ChatIcon;
