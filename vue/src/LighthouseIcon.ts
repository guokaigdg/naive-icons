import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LighthouseIcon = defineComponent({
  name: 'LighthouseIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 42 L20 16 H28 L31 42 Z', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M19 26 H29 M18 34 H30', stroke: '#E76F51', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '18', y: '8', width: '12', height: '8', rx: '2', fill: '#E76F51' }));
      children.push(h('path', { d: 'M14 12 L18 10 M34 12 L30 10', stroke: '#E9C46A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default LighthouseIcon;
