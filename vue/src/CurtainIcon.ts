import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CurtainIcon = defineComponent({
  name: 'CurtainIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 8.5 C 12 18 8 28 11.5 39.5 H20 C 16.5 28 20 18 17 8.5 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M39 8.5 C 36 18 40 28 36.5 39.5 H28 C 31.5 28 28 18 31 8.5 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M7 8 H41', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('circle', { cx: '7', cy: '8', r: '2.2', fill: '#E9C46A', 'stroke-width': sw(2) }));
      children.push(h('circle', { cx: '41', cy: '8', r: '2.2', fill: '#E9C46A', 'stroke-width': sw(2) }));
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

export default CurtainIcon;
