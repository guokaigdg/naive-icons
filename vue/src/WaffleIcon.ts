import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WaffleIcon = defineComponent({
  name: 'WaffleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '9', width: '32', height: '32', rx: '6', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M18 11 L18 39 M30 11 L30 39 M10 18 L38 18 M10 30 L38 30', stroke: '#8B5E3C', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '19', y: '19', width: '10', height: '10', rx: '2', fill: '#FAEDCD' }));
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

export default WaffleIcon;
