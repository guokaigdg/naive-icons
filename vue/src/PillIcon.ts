import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PillIcon = defineComponent({
  name: 'PillIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(-35 24 24)' }, [
          h('rect', { x: '8', y: '19', width: '32', height: '10', rx: '5', fill: '#FAEDCD' }),
          h('path', { d: 'M24 19 L35 19 A 5 5 0 0 1 35 29 L24 29 Z', fill: '#E76F51', stroke: 'none' }),
          h('path', { d: 'M24 19 L24 29', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }),
        ]),
      );
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

export default PillIcon;
