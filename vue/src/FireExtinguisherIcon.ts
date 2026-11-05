import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const FireExtinguisherIcon = defineComponent({
  name: 'FireExtinguisherIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '16', y: '18', width: '14', height: '22', rx: '3', fill: '#E76F51' }));
      children.push(h('rect', { x: '20', y: '12', width: '6', height: '6', fill: '#264653' }));
      children.push(h('path', { d: 'M23 12 C23 8 30 8 32 11', fill: 'none' }));
      children.push(h('path', { d: 'M30 22 C36 26 36 32 34 37', fill: 'none' }));
      children.push(h('rect', { x: '20', y: '25', width: '6', height: '6', fill: '#FAEDCD', stroke: 'none' }));
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

export default FireExtinguisherIcon;
