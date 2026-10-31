import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ArrowJumpIcon = defineComponent({
  name: 'ArrowJumpIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M15 22 L24 9 L33 22 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 34 L24 20', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M11 38 L37 38', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M18 38 L30 38', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default ArrowJumpIcon;
