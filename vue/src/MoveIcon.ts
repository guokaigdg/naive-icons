import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MoveIcon = defineComponent({
  name: 'MoveIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 9 L24 39 M9 24 L39 24', stroke: '#2A9D8F', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M24 5 L19 13 L29 13 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M24 43 L19 35 L29 35 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M5 24 L13 19 L13 29 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M43 24 L35 19 L35 29 Z', fill: '#E76F51', stroke: 'none' }));
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

export default MoveIcon;
