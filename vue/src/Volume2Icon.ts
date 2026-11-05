import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const Volume2Icon = defineComponent({
  name: 'Volume2Icon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 18 L16 18 L26 10 L26 38 L16 30 L8 30 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M31 16 C36 20 36 28 31 32', fill: 'none', stroke: '#E9C46A', 'stroke-width': sw(4) }));
      children.push(h('path', { d: 'M37 10 C42 15 42 33 37 38', fill: 'none', stroke: '#E9C46A', 'stroke-width': sw(3.5) }));
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

export default Volume2Icon;
