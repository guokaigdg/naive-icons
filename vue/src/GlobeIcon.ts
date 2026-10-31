import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GlobeIcon = defineComponent({
  name: 'GlobeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '21', r: '14', fill: '#2A9D8F' }));
      children.push(h('ellipse', { cx: '24', cy: '21', rx: '6', ry: '14', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M10 21 L 38 21', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M17 13 C 19 10 24 10 25 13 C 23 15 19 16 17 13 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M26 27 C 28 25 32 26 31 29 C 29 31 25 30 26 27 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M24 35 L 24 39', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M15 42 L 33 42', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
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

export default GlobeIcon;
