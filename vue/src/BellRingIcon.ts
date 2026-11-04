import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BellRingIcon = defineComponent({
  name: 'BellRingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 33 C 12 14 36 14 36 33 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M10 33 L38 33', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M20 37 C 20 41 28 41 28 37', fill: '#E76F51' }));
      children.push(h('path', { d: 'M6 15 L10 19', stroke: '#E76F51', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M42 15 L38 19', stroke: '#E76F51', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default BellRingIcon;
