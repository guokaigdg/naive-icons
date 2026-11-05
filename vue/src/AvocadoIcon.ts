import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AvocadoIcon = defineComponent({
  name: 'AvocadoIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 42 C 16 42 12 34 12 28 C 12 20 18 18 20 12 C 22 6 26 6 28 12 C 30 18 36 20 36 28 C 36 34 32 42 24 42 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M24 37 C 19 37 17 32 17 28 C 17 23 21 21 22 17 L26 17 C 27 21 31 23 31 28 C 31 32 29 37 24 37 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '29', r: '4.5', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M21 12 C 21 9 23 8 23 10', stroke: '#FFFFFF', 'stroke-width': sw(2), fill: 'none' }));
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

export default AvocadoIcon;
