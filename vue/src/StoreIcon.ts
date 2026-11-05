import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StoreIcon = defineComponent({
  name: 'StoreIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 12 L42 12 L38 20 L10 20 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '8', y: '20', width: '32', height: '22', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M6 12 Q 9 17 12 12 Q 15 17 18 12 Q 21 17 24 12 Q 27 17 30 12 Q 33 17 36 12 Q 39 17 42 12', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '20', y: '28', width: '9', height: '14', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '12', y: '25', width: '5', height: '6', fill: '#E9C46A', stroke: 'none' }));
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

export default StoreIcon;
