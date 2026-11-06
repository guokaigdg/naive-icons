import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SirenIcon = defineComponent({
  name: 'SirenIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 30 C12 21 17 15 24 15 C31 15 36 21 36 30 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '8', y: '30', width: '32', height: '6', rx: '3', fill: '#264653' }));
      children.push(h('path', { d: 'M10 20 L7 17 M38 20 L41 17 M14 13 L12 10 M34 13 L36 10', stroke: '#E9C46A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default SirenIcon;
