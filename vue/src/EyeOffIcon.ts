import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EyeOffIcon = defineComponent({
  name: 'EyeOffIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M5 24 C 11 13 37 13 43 24 C 37 35 11 35 5 24 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '6.5', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '3', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M8 8 L 40 40', fill: 'none', stroke: '#E76F51', 'stroke-width': sw(3.5) }));
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

export default EyeOffIcon;
