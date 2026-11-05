import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ExpandIcon = defineComponent({
  name: 'ExpandIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M18 18 L7 7', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M6 14 L6 6 L14 6 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M30 18 L41 7', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M42 14 L42 6 L34 6 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M18 30 L7 41', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M6 34 L6 42 L14 42 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M30 30 L41 41', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M42 34 L42 42 L34 42 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '3', fill: '#2A9D8F', stroke: 'none' }));
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

export default ExpandIcon;
