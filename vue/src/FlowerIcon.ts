import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const FlowerIcon = defineComponent({
  name: 'FlowerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '16', r: '7', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '14', cy: '22', r: '7', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '34', cy: '22', r: '7', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '18', cy: '32', r: '7', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '30', cy: '32', r: '7', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '6', fill: '#E9C46A' }));
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

export default FlowerIcon;
