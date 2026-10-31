import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const AnchorIcon = defineComponent({
  name: 'AnchorIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M21 14 L27 14 L27 20 L36 20 L36 25 L27 25 L27 34 C 32 34 36 31 40 28 C 40 37 34 42 24 42 C 14 42 8 37 8 28 C 12 31 16 34 21 34 L21 25 L12 25 L12 20 L21 20 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '10.5', r: '4.8', fill: '#E76F51' }));
      children.push(h('circle', { cx: '24', cy: '10.5', r: '1.9', fill: '#FAEDCD', stroke: 'none' }));
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

export default AnchorIcon;
