import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const MessageSquareDotsIcon = defineComponent({
  name: 'MessageSquareDotsIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 9 L41 9 L41 33 L24 33 L16 40 L16 33 L7 33 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '17', cy: '21', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '21', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '21', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
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

export default MessageSquareDotsIcon;
