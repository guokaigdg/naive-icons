import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SeedlingIcon = defineComponent({
  name: 'SeedlingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 42 L24 25', stroke: '#588157', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M24 25 C 16 25 12 19 13 12 C 20 12 24 17 24 25 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M24 27 C 32 27 37 22 37 15 C 30 15 25 20 24 27 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M10 42 L38 42', stroke: '#8B5E3C', 'stroke-width': sw(4), fill: 'none' }));
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

export default SeedlingIcon;
