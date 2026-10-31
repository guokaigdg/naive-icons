import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MenuIcon = defineComponent({
  name: 'MenuIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('line', { x1: '10', y1: '15', x2: '38', y2: '15', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('line', { x1: '10', y1: '24', x2: '38', y2: '24', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('line', { x1: '14', y1: '33', x2: '34', y2: '33', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
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

export default MenuIcon;
