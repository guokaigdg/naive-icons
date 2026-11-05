import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MinimizeIcon = defineComponent({
  name: 'MinimizeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 7 L16 16', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M18 10 L18 18 L10 18 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M41 7 L32 16', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M30 10 L30 18 L38 18 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M7 41 L16 32', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M10 30 L18 30 L18 38 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M41 41 L32 32', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M30 30 L38 30 L38 38 Z', fill: '#E76F51', stroke: 'none' }));
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

export default MinimizeIcon;
