import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SofaIcon = defineComponent({
  name: 'SofaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '14', width: '32', height: '12', rx: '4', fill: '#588157' }));
      children.push(h('rect', { x: '6', y: '24', width: '36', height: '14', rx: '5', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '10', y: '26', width: '12', height: '8', rx: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '26', y: '26', width: '12', height: '8', rx: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M10 38 L10 41 M38 38 L38 41', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
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

export default SofaIcon;
