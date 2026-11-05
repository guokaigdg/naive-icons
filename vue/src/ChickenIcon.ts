import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChickenIcon = defineComponent({
  name: 'ChickenIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '22', cy: '26', r: '12', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M18 15 C 17 9 21 8 22 12 C 23 8 27 8 27 12 C 28 8 32 9 30 16 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M33 25 L41 28 L33 31 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '26', cy: '22', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M14 37 L12 42 M26 37 L28 42', stroke: '#E76F51', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M18 34 C 16 37 16 39 18 41', stroke: '#FAEDCD', 'stroke-width': sw(4), fill: 'none' }));
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

export default ChickenIcon;
