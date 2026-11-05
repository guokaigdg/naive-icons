import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ForestIcon = defineComponent({
  name: 'ForestIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 34 L14 20 L20 34 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M18 34 L25 13 L32 34 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M30 34 L36 21 L42 34 Z', fill: '#588157' }));
      children.push(h('rect', { x: '12', y: '34', width: '4', height: '5', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('rect', { x: '23', y: '34', width: '4', height: '5', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('rect', { x: '34', y: '34', width: '4', height: '5', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('path', { d: 'M6 40 H42', stroke: '#8B5E3C', 'stroke-width': sw(3) }));
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

export default ForestIcon;
