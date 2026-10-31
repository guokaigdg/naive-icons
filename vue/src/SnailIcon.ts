import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SnailIcon = defineComponent({
  name: 'SnailIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 38 L 42 38 C 42 33 39 31 35 31 L 18 31 C 11 31 6 33 6 38 Z', fill: '#588157' }));
      children.push(h('circle', { cx: '13', cy: '27', r: '5', fill: '#588157' }));
      children.push(h('path', { d: 'M10.5 23 L 8 14', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M15.5 23 L 18 14', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('circle', { cx: '8', cy: '12.5', r: '1.8', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '18', cy: '12.5', r: '1.8', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '31', cy: '22', r: '10', fill: '#E76F51' }));
      children.push(h('circle', { cx: '31', cy: '22', r: '2', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M31 16 A 6 6 0 1 1 25 22', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M10 29 Q 12 31 14 29.5', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.5) }));
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

export default SnailIcon;
