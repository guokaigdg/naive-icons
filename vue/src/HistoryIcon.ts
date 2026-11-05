import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HistoryIcon = defineComponent({
  name: 'HistoryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '15', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M24 24 L24 15', stroke: '#FFFFFF', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M24 24 L30 28', stroke: '#FFFFFF', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M10 18 A 15 15 0 0 1 24 9', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M7 21 L14 18 L11 26 Z', fill: '#E76F51', stroke: 'none' }));
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

export default HistoryIcon;
