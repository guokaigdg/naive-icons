import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BathtubIcon = defineComponent({
  name: 'BathtubIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 20 H42 C42 30 36 36 24 36 C12 36 6 30 6 20 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M14 36 V41', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M34 36 V41', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M10 16 C10 12 14 10 18 12', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '26', r: '2', fill: '#2A9D8F', stroke: 'none' }));
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

export default BathtubIcon;
