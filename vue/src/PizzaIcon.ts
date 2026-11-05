import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PizzaIcon = defineComponent({
  name: 'PizzaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 10 L41 10 L24 42 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M7 10 L41 10 L39 17 L9 17 Z', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '16', cy: '24', r: '2.4', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '25', r: '2.2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '23', cy: '31', r: '2', fill: '#E76F51', stroke: 'none' }));
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

export default PizzaIcon;
