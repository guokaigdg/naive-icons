import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FountainPenIcon = defineComponent({
  name: 'FountainPenIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(-45 24 24)' }, [
          h('rect', { x: '6', y: '19', width: '20', height: '10', rx: '3', fill: '#264653' }),
          h('path', { d: 'M26 19 L39 24 L26 29 Z', fill: '#E9C46A' }),
          h('path', { d: 'M30 24 L35 24', stroke: '#2A2A2A', 'stroke-width': sw(2) }),
          h('circle', { cx: '38', cy: '24', r: '1.6', fill: '#2A2A2A', stroke: 'none' }),
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

export default FountainPenIcon;
