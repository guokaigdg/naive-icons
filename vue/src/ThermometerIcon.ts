import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const ThermometerIcon = defineComponent({
  name: 'ThermometerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 C 20 6 18 10 18 14 L18 32 C 14 36 16 42 24 42 C 32 42 34 36 30 32 L30 14 C 30 10 28 6 24 6 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '24', cy: '36', r: '5', fill: '#E76F51' }));
      children.push(h('rect', { x: '22', y: '18', width: '4', height: '14', fill: '#E76F51' }));
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

export default ThermometerIcon;
