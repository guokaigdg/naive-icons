import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WineIcon = defineComponent({
  name: 'WineIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M19 6 L29 6 L29 12 C34 14 35 18 35 22 L35 42 L13 42 L13 22 C13 18 14 14 19 12 Z', fill: '#264653' }));
      children.push(h('rect', { x: '17', y: '25', width: '14', height: '10', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M22 30 L26 30', stroke: '#E76F51', 'stroke-width': sw(2), fill: 'none' }));
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

export default WineIcon;
