import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CartIcon = defineComponent({
  name: 'CartIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6.72 8.64 L12.48 8.64 L16.32 31.68 L37.44 31.68 L41.28 16.32 L16.32 16.32', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '18.24', cy: '39.36', r: '3.84', fill: '#E76F51' }));
      children.push(h('circle', { cx: '33.6', cy: '39.36', r: '3.84', fill: '#E76F51' }));
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

export default CartIcon;
