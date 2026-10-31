import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VolumeIcon = defineComponent({
  name: 'VolumeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 19 L13 19 L23 10 L23 38 L13 29 L6 29 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M29 18 A 8 8 0 0 1 29 30', fill: 'none', stroke: '#E76F51', 'stroke-width': sw(4) }));
      children.push(h('path', { d: 'M35 13 A 14 14 0 0 1 35 35', fill: 'none', stroke: '#E76F51', 'stroke-width': sw(3.5) }));
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

export default VolumeIcon;
