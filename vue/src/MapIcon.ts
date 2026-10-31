import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MapIcon = defineComponent({
  name: 'MapIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 12 L 18 8 L 30 12 L 40 8 L 40 34 L 30 38 L 18 34 L 8 38 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M18 8 L 18 34', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M30 12 L 30 38', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M12 30 C 15 23 21 28 24 21 C 26 17 29 18 31 16', stroke: '#E76F51', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '32', cy: '15', r: '2.2', fill: '#E76F51' }));
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

export default MapIcon;
