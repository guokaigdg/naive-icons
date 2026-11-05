import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ParkIcon = defineComponent({
  name: 'ParkIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '18', cy: '16', r: '9', fill: '#588157' }));
      children.push(h('rect', { x: '15', y: '24', width: '5', height: '14', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('rect', { x: '28', y: '30', width: '12', height: '4', rx: '1', fill: '#E76F51', stroke: 'none' }));
      children.push(h('rect', { x: '28', y: '35', width: '12', height: '3', rx: '1', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M30 38 V41 M38 38 V41', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M6 41 H42', 'stroke-width': sw(2.5) }));
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

export default ParkIcon;
