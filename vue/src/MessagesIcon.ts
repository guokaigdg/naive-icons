import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const MessagesIcon = defineComponent({
  name: 'MessagesIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 14 L30 14 L30 30 L20 30 L16 36 L16 30 L6 30 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M18 8 L42 8 L42 26 L34 26 L30 32 L30 26 L18 26 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '25', cy: '17', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '32', cy: '17', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '39', cy: '17', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
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

export default MessagesIcon;
