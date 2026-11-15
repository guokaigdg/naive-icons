import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const HatIcon = defineComponent({
  name: 'HatIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M13 29.5 V16 C 13 8.5 35 8.5 35 16 V29.5 Z', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '14.2', y: '22.5', width: '19.6', height: '4.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '5', y: '29', width: '38', height: '7', rx: '3.5', fill: '#264653' }));
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

export default HatIcon;
