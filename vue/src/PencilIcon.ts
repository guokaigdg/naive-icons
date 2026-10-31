import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PencilIcon = defineComponent({
  name: 'PencilIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M13 31 L 31 13 L 35 17 L 17 35 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M13 31 L 7 41 L 17 35 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M9.5 38.5 L 7 41 L 10.5 39.5 Z', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M31 13 L 35 9 L 39 13 L 35 17 Z', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M31 13 L 35 17', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
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

export default PencilIcon;
