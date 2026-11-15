import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LunchboxIcon = defineComponent({
  name: 'LunchboxIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 15.5 V10 C 16 6.5 32 6.5 32 10 V15.5', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '5', y: '15', width: '38', height: '8', rx: '2.5', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '7', y: '22', width: '34', height: '19', rx: '3', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '21', y: '19', width: '6', height: '7', rx: '1.5', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('path', { d: 'M11 35 H37', stroke: '#FAEDCD', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default LunchboxIcon;
