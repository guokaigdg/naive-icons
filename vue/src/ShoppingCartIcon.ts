import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShoppingCartIcon = defineComponent({
  name: 'ShoppingCartIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '20', y: '10', width: '7', height: '10', rx: '1.5', fill: '#E9C46A' }));
      children.push(h('rect', { x: '29', y: '12', width: '7', height: '8', rx: '1.5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M15 19 L41 19 L37 32 L16 32 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M7 11 L12 11 L16 32', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M12 11 L15 11', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '19', cy: '38', r: '3.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '34', cy: '38', r: '3.5', fill: '#2A2A2A', stroke: 'none' }));
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

export default ShoppingCartIcon;
