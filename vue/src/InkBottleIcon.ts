import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const InkBottleIcon = defineComponent({
  name: 'InkBottleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M13 21 L13 37 C13 40 15 42 18 42 L30 42 C33 42 35 40 35 37 L35 21 Z', fill: '#264653' }));
      children.push(h('rect', { x: '17', y: '13', width: '14', height: '8', rx: '2', fill: '#E76F51' }));
      children.push(h('rect', { x: '20', y: '8', width: '8', height: '5', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '19', y: '29', width: '10', height: '7', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
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

export default InkBottleIcon;
