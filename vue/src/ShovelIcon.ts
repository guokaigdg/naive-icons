import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShovelIcon = defineComponent({
  name: 'ShovelIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 10 L24 26', stroke: '#8B5E3C', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M19 10 L29 10', stroke: '#8B5E3C', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M18 26 L30 26 L30 34 C30 38 24 42 24 42 C24 42 18 38 18 34 Z', fill: '#2A9D8F' }));
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

export default ShovelIcon;
