import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KebabIcon = defineComponent({
  name: 'KebabIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(-35 24 24)' }, [
          h('path', { d: 'M6 24 L42 24', stroke: '#2A2A2A', 'stroke-width': sw(3) }),
          h('rect', { x: '12', y: '19', width: '10', height: '10', rx: '2.5', fill: '#8B5E3C' }),
          h('rect', { x: '26', y: '19.5', width: '9', height: '9', rx: '2.5', fill: '#588157' }),
          h('circle', { cx: '39', cy: '24', r: '4.5', fill: '#E76F51' }),
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

export default KebabIcon;
