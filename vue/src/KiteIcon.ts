import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KiteIcon = defineComponent({
  name: 'KiteIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 5.4 L 38.6 20 L 24 38.6 L 9.4 20 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 5.4 L 38.6 20 L 24 20 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M24 5.4 L 24 38.6 M 9.4 20 L 38.6 20', stroke: '#2A2A2A', 'stroke-width': sw(1.8), fill: 'none' }));
      children.push(h('path', { d: 'M24 38.6 C 25.4 40 26.2 40.8 27.4 41.4 C 28.8 42 30.4 42 31.6 41.4', stroke: '#2A2A2A', 'stroke-width': sw(1.8), fill: 'none' }));
      children.push(h('path', { d: 'M26.6 40.2 L 29.4 38.8 L 29.8 41.8 Z', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('path', { d: 'M30.6 41.4 L 33.4 40 L 33.8 43 Z', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('path', { d: 'M14.4 17.4 C 17.6 15 20.8 13.6 24 13.2', stroke: '#FAEDCD', 'stroke-width': sw(1.8), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '20', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
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

export default KiteIcon;
