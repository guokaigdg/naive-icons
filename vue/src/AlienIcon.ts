import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AlienIcon = defineComponent({
  name: 'AlienIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 7 C 32.5 7 38 14 38 22.5 C 38 32.5 32 41 24 41 C 16 41 10 32.5 10 22.5 C 10 14 15.5 7 24 7 Z', fill: '#588157' }));
      children.push(h('ellipse', { cx: '18.5', cy: '21', rx: '4.3', ry: '5.2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '29.5', cy: '21', rx: '4.3', ry: '5.2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M21 32 H27', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default AlienIcon;
