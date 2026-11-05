import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SandwichIcon = defineComponent({
  name: 'SandwichIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 15 C7 8 41 8 41 15 L41 19 L7 19 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M7 19 C13 23 19 17 25 21 C31 25 37 19 41 21 L41 25 L7 25 Z', fill: '#588157' }));
      children.push(h('rect', { x: '7', y: '25', width: '34', height: '6', rx: '2', fill: '#E76F51' }));
      children.push(h('rect', { x: '8', y: '31', width: '32', height: '9', rx: '3', fill: '#E9C46A' }));
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

export default SandwichIcon;
