import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SailboatIcon = defineComponent({
  name: 'SailboatIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M22.08 9.64 L 22.08 27.83 L 9.64 27.83 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M25.92 6.76 L 25.92 27.83 L 39.32 27.83 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 4.85 L 24 29.75', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M7.72 31.66 L 40.28 31.66 L 35.49 39.32 L 12.51 39.32 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M4.85 43.15 C 8.68 41.24 10.59 45.07 14.42 43.15 C 18.25 41.24 20.17 45.07 24 43.15 C 27.83 41.24 29.75 45.07 33.58 43.15 C 37.41 41.24 39.32 45.07 43.15 43.15', stroke: '#2A9D8F', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '29.75', cy: '17.3', r: '1.53', fill: '#E76F51' }));
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

export default SailboatIcon;
